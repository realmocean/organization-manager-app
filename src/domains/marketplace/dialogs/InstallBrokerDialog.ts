import { cLeading, cTop, cTopLeading, cVertical, DialogView, HStack, Icon, Text, RenderingTypes, ScrollView, Spacer, Spinner, UIImage, UIRecordContext, UIScene, ViewProperty, VStack, Button } from "@tuval/forms";
import { RealmoceanDataContext } from "../../../views/DataContexts";


const text = `**Category** Test

[Contact developer](https://realmocean.com)

<a href="https://realmocean.com" target="_blank">Developer website</a>

`

export class InstallBrokerDialog extends DialogView {

    @ViewProperty()
    private broker_id: string;

    @ViewProperty()
    private formData: any;


    protected UseRouter() {
        return false;
    }

    public BindRouterParams({ broker_id }) {

        this.broker_id = broker_id;

        //RBR.GetInstalledBrokers().then((brokers)=> alert(JSON.stringify(brokers)))

        /*   RealmBrokerClient.GetBrokerById(broker_id).then(broker => {
             
              this.broker = broker;
          }); */

    }

    public constructor() {
        super();
        this.Header = 'Install Broker'
        this.Width = '800px'
        this.Height = '400px'

    }




    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    private action_Install() {
        // RBR.InstallBroker(this.broker_id)

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
            RealmoceanDataContext(
                UIScene(
                    UIRecordContext(({ data, isLoading }) =>
                        (this.broker_id && isLoading) ? Spinner() :
                            VStack({ alignment: cTopLeading })(
                                HStack({ alignment: cTopLeading })(
                                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                        VStack({ alignment: cTopLeading })(
                                            Text(data.broker_full_description).renderingType(RenderingTypes.Markdown)
                                        )
                                    ).width(700).paddingTop('10px'),
                                    VStack({ spacing: 20 })(
                                        VStack({ alignment: cLeading })(
                                            Text(text).renderingType(RenderingTypes.Markdown),

                                        ).padding(),
                                        Button(
                                            Text('Install')
                                        ).onClick(() => this.action_Install()).width(250),
                                        //UIButtonView().text('Close').action(() => this.dialog.OnCancel())
                                    ).width(300)

                                ).height(500),


                            ).padding(10)
                    ).resource('brokers').filter({ id: this.broker_id })



                ).padding(24)
            )

        )
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