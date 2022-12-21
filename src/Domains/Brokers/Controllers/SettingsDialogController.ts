
import { is } from "@tuval/core";
import { Button, cHorizontal, cLeading, Color, cTop, cTopLeading, cTopTrailing, cTrailing, cVertical, HDivider, HStack, Icon, RenderingTypes, RequiredRule, ScrollView, Spacer, Spinner, State, Text, TextField, UIImage, UIRecordContext, VStack } from "@tuval/forms";
import { DialogController } from "../../../ControllerDialog";
import { RealmBrokerClient } from "../../../Services/RealmBrokerClient";
import { RealmBrokerClient as ROC } from "@realmocean/common";
import { RealmoceanDataContext } from "../../../Views/DataContexts";


export class SettingsDialogController extends DialogController {

    @State()
    private broker_info: any;

    @State()
    private settingDialogCode: any;

    @State()
    private settingDialogDescription: any;


    @State()
    private formData: any;

    protected async BindRouterParamsAsync({ broker_info }): Promise<void> {
        return new Promise<void>((resolve, reject) => {
         
            this.broker_info = broker_info;
            this.setHeight(700);
         
             RealmBrokerClient.GetBrokerSettingDialog(broker_info.id).then(dialog => {
                if (is.nullOrEmpty(dialog.description)) {
                    this.setWidth(600)
                } else {
                    this.setWidth(600 * 2)
                }
                this.setHeight(700)
                this.settingDialogDescription = dialog.description
                this.settingDialogCode = dialog.dialog_code
                resolve()
            }) 
        });


    }

    private getDynamicView(settingDialogCode) {
      
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
        const DropDown = tuval$forms.DropDown;

        const RequiredRule = tuval$forms.RequiredRule;

        const [count, setCount] = bindState(0);

        function setFormData(name, value){

            setTimeout(()=> {
                formData[name] = value;
                setCount(count + 1);
            }, 200)
          
        }
      
        ${settingDialogCode}

        `;

        let result = null;
        var formData = this.formData;
        try {

            result = eval('(function() { try {' + expression + '}catch(ex){console.log(ex)}}())');

        }
        catch (ex) { console.log(ex) }
        return result;
    }

    protected override OnSubmit(data) {
        alert(JSON.stringify(data))
        ROC.CreateBrokerConnection(this.broker_info.id, data.connection_name, JSON.stringify(data));

    }
    public override LoadView() {
        return (
            this.broker_info == null ? Spinner() :
            RealmoceanDataContext(() =>
                UIRecordContext(({data, isLoading}) =>
                isLoading ? Spinner() :
                VStack({ alignment: cTopLeading, spacing: 10 })(
                    HStack({ alignment: cLeading, spacing: 10 })(
                        HStack(
                            UIImage(this.broker_info.icon_link).width(48).maxHeight(48).cornerRadius(8)
                        ).width(48).height(58).overflow('hidden'),
                        Text(`Manage Broker:`).fontSize(20).fontWeight('500'),
                        Text(`${this.broker_info.display_name}`).fontSize(20).fontWeight('400'),
                        Spacer(),
                        HStack({ alignment: cTop })(
                            Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                        ).width()
                    ).height(50),
                    HStack({ alignment: cTopLeading })(
                        !is.nullOrEmpty(this.settingDialogDescription) ?
                            HStack({ alignment: cTopLeading })(
                                ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                    VStack({ alignment: cTopLeading })(
                                        Text(this.settingDialogDescription).render(RenderingTypes.Markdown)
                                    ).borderRight('solid 1px rgb(125,125,125, 0.3)').padding(20)
                                )
                            ).width('50%') : Text(''),
                        VStack({ alignment: cTopLeading, spacing: 30 })(
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                VStack({ alignment: cLeading, spacing: 5 })(
                                    Text('*Connection name').fontSize(14).fontWeight('600').foregroundColor('#2e4354'),
                                    Text('This name is for your convenience only').fontSize(14).foregroundColor('#2e435473')
                                ).height(),
                                TextField()
                                    .formField('connection_name', [new RequiredRule('Please set connection name')])
    
                            ).height(),
                            HDivider().height(1).background('rgb(125,125,125, 0.1)'),
                            this.getDynamicView(data?.dialog_code),
                            HStack({ alignment: cTopTrailing })(
                                Button(
                                    Text('Test Connection')
                                ).width(158).variant('outlined')
                            )
                        )
                            .padding(cHorizontal, 20)
                            .width(!is.nullOrEmpty(this.settingDialogDescription) ? '50%' : '100%')
                    )
                    ,
                    HStack({ alignment: cTrailing, spacing: 10 })(
                        Button(
                            Text('Reset')
                        ).variant('outlined'),
                        Button(
                            Text('Cancel')
                        ).variant('outlined'),
                        Button(
                            Text('Add')
                        ).variant('outlined').onClick(() => this.Submit())
                    ).height(),
                ).padding(20)
            ).resource('brokersettingdialog').filter({ id: this.broker_info.id })
            )
        )
    }

    public static Show(broker_info: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            
            const dialog = new SettingsDialogController();
             dialog.BindRouterParamsAsync({ broker_info }).then(() => {
                dialog.ShowDialogAsync().then(() => {
                    resolve();
                })
            }) 
        });
    }
}