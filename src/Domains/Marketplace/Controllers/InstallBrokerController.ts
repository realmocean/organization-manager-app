import { UIButtonView } from "@realmocean/buttons";
import { Dialog, Spinner, State, UIController, UIScene, Text, HStack, cTrailing, VStack, UIImage, cLeading, cTopLeading, RenderingTypes, ScrollView, cVertical, Spacer, Icon, IconLibrary, cTop, TextField } from "@tuval/forms";
import { RealmBrokerClient } from "../../../Services/RealmBrokerClient";
import { RealmBrokerClient as RBR } from "@realmocean/common";


const text = `**Category** Test

[Contact developer](https://realmocean.com)

<a href="https://realmocean.com" target="_blank">Developer website</a>

`
export class InstallBrokerDialog extends Dialog {
    private controller: InstallBrokerController;

    public override InitComponents() {
        this.Text = 'Install Broker';
        this.Width = 1000;
        this.Height = 450;


        this.controller = new InstallBrokerController();
        //(this.createNewProjectDialogController as any).BindRouterParams({ dialog: this });
        this.Controls.Add(this.controller);

    }

    public BindRouterParams(obj) {
        (this.controller as any).BindRouterParams({ dialog: this, ...obj });
    }


    public override OnShown(): void {
        //this.createNewProjectDialogController.LoadProjects();
    }


    public OnOKClick(value: any) {
        this.ShowDialogAsyncResolve(value);
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public static Show(brokerId: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const npd = new InstallBrokerDialog();

            npd.BindRouterParams({ broker_id: brokerId })
            npd.ShowDialogAsync().then(() => {
                resolve(null);
            })
        });
    }

}

export class InstallBrokerController extends UIController {

    private dialog: InstallBrokerDialog;

    @State()
    private broker: any;

    @State()
    private formData: any;


    protected UseRouter() {
        return false;
    }

    protected override BindRouterParams({ dialog, broker_id }) {
        debugger;
        this.dialog = dialog;

        //RBR.GetInstalledBrokers().then((brokers)=> alert(JSON.stringify(brokers)))

        RealmBrokerClient.GetBrokerById(broker_id).then(broker => {
            // alert(JSON.stringify(broker))
            this.broker = broker;
        });

    }

    private canSelect(): boolean {
        return (this.selectedAccounts && this.selectedAccounts.length > 0);
    }

    private action_SelectionChange(args) {
        this.selectedAccounts = args;
        console.log(args);
    }

    private action_Install() {
       RBR.InstallBroker(this.broker.broker_id)
       //alert(JSON.stringify(this.formData))
    }


    private getDynamicView() {
        if (this.formData == null) {
            this.formData = {};
        }
        var expression = `

        const Color = tuval$forms.Color;
        const VStack = tuval$forms.VStack;
        const HStack = tuval$forms.HStack;
        const ForEach = tuval$forms.ForEach;

        const cTop = tuval$forms.cTop;
        const cTopLeading = tuval$forms.cTopLeading;
        const cLeading = tuval$forms.cLeading;
        const cTopTrailing = tuval$forms.cTopTrailing;
        const cTrailing = tuval$forms.cTrailing;

        const Text = tuval$forms.Text;
        const Icon = tuval$forms.Icon;
        const IconLibrary = tuval$forms.IconLibrary;

        const UIContextMenu = tuval$forms.UIContextMenu;
        const UIImage = tuval$forms.UIImage;
        const UIButton = tuval$forms.UIButton;
        const TextField = tuval$forms.TextField;
        const Spacer = tuval$forms.Spacer;
        const DesktopPreview = tuval$forms.DesktopPreview;
        const bindState = tuval$forms.bindState;

        const UITable = tuval$forms.UITable;
        const TableColumn = tuval$forms.TableColumn;
        const TBody = tuval$forms.TBody;
        const UIAppearance = tuval$forms.UIAppearance;
        const Gauge = tuval$forms.Gauge;

        const ScrollView = tuval$forms.ScrollView;

        const [count, setCount] = bindState(0);

        function setFormData(name, value){
            formData[name] = value;
            setCount(count + 1);
        }
        return (
            VStack(
                Text(formData['name']),
                TextField().value(formData.name).onTextChange((e) => setFormData('name', e))
            ).height(50).border('solid 1px gray')
        )

        `;
          
        let result = null;
        var formData = this.formData;
        try {
            
            result = eval('(function() { try {' + expression + '}catch(ex){console.log(ex)}}())');
           
        }
        catch (ex) { console.log(ex) }
        return result;
    }

    public override LoadView() {
        return (
            UIScene(
                this.broker == null ? Spinner() :
                    VStack({ alignment: cTopLeading })(
                        //this.getDynamicView(),
                        HStack({ alignment: cLeading })(
                            UIImage(this.broker.icon_link).width(50).maxHeight(50).marginRight('20px'),
                            VStack({ alignment: cLeading })(
                                Text(this.broker.broker_display_name + ' Broker').fontSize(20).fontWeight('600').lineHeight('30px'),
                                Text('by ' + this.broker.broker_vendor).foregroundColor('#898989').fontSize(12).fontWeight('500').lineHeight('18px'),
                                Text(this.broker.broker_short_description).foregroundColor('#898989').fontSize(14).fontWeight('500').lineHeight('21px'),
                            ),
                            Spacer(),
                            HStack({ alignment: cTop })(
                                Icon('\\e5cd').size(25).cursor('pointer').onClick(() => this.dialog.OnCancel())
                            ).width()
                        ).height().borderBottom('2px solid #f6f6f6').paddingBottom('20px'),
                        HStack({ alignment: cTopLeading })(
                            ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(
                                    Text(this.broker.broker_full_description).render(RenderingTypes.Markdown)
                                )
                            ).width(700).paddingTop('10px'),
                            VStack({spacing: 20})(
                                VStack({ alignment: cLeading })(
                                    Text(text).render(RenderingTypes.Markdown),
                                   
                                ).padding(),
                                UIButtonView().text('Install').action(() => this.action_Install()).width(250),
                                //UIButtonView().text('Close').action(() => this.dialog.OnCancel())
                            ).width(300)

                        ).height(500),


                    ).padding(10)

            ).padding(24)
        )
    }
}