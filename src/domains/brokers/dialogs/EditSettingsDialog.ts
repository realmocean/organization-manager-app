import { is } from "@tuval/core";
import {
    Button, cHorizontal, cLeading, cTop, cTopLeading, cTopTrailing, Text, 
    cTrailing, cVertical, DialogView, HDivider, HStack, Icon, RenderingTypes, RequiredRule, ScrollView, Spacer, Spinner, State, TextField, UIImage, UIRecordContext, UIRecordsContext, VStack, ViewProperty, Fragment, UIViewBuilder
} from "@tuval/forms";
import { RealmoceanDataContext } from "../../../views/DataContexts";


export class EditSettingsDialog extends DialogView {

    @ViewProperty()
    private broker_info: any;

    @ViewProperty()
    private connection_id: any;

    @ViewProperty()
    private broker_id: any;


    @ViewProperty()
    private formData: any;

    protected async BindRouterParamsAsync({ broker_info, connection_id, broker_id, tenant_id }): Promise<void> {

        this.broker_info = broker_info;
        this.broker_id = broker_id;
        this.connection_id = connection_id;
        this.Width = "700px";
        this.Height = "700px";
        this.ShowHeader = false;
        /*  return new Promise<void>((resolve, reject) => {


             this.broker_id = broker_id;
             this.connection_id = connection_id;
             this.setHeight(700);

             RealmBrokerClient.GetBrokerSettingDialog(broker_id).then(dialog => {
                 //alert(dialog.description)
                 if (is.nullOrEmpty(dialog.description)) {
                     this.setWidth(600)
                 } else {
                     this.setWidth(600 * 2)
                 }
                 this.setHeight(700)

                 resolve()
             }) */
        //});


    }

    private getDynamicView(settingDialogCode) {
        if (is.nullOrEmpty(settingDialogCode))
            return;

        if (this.formData == null) {
            this.formData = {};
        }
        var expression = `
        const UIViewBuilder =  tuval$forms.UIViewBuilder;

        return (

            UIViewBuilder(() => {
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
                const useState = tuval$forms.useState;

                const UITable = tuval$forms.UITable;
                const TableColumn = tuval$forms.TableColumn;
                const TBody = tuval$forms.TBody;
                const UIAppearance = tuval$forms.UIAppearance;
                const Gauge = tuval$forms.Gauge;

                const ScrollView = tuval$forms.ScrollView;
                const DropDown = tuval$forms.DropDown;

                const RequiredRule = tuval$forms.RequiredRule;

                const UIRecordContext =  tuval$forms.UIRecordContext;
                const DataContext =  tuval$forms.DataContext;
                const jsonServerProvider =  tuval$forms.jsonServerProvider;


                const [count, setCount] = useState(0);

                function setFormData(name, value){

                    setTimeout(()=> {
                        formData[name] = value;
                        setCount(count + 1);
                    }, 200)

                }

                return (

                            DataContext(
                                UIRecordContext(({data, isLoading})=>
                                ${settingDialogCode}
                            ).resource('brokerconnection-dialoginfo').filter({id: '${this.connection_id}'})
                        ).dataProvider(jsonServerProvider('/api'))

                )

            })
        )


        `;

        let result = null;
        var formData = this.formData;
        try {

            result = eval('(function() { try {' + expression + '}catch(ex){console.log(ex)}}())');

        }
        catch (ex) { console.log(ex) }
        if (result == null) {
            return Fragment()
        }

        return result;
    }


    public override LoadView() {
        return (
            this.connection_id && this.broker_id &&
            RealmoceanDataContext(
                UIRecordContext(({ data, isLoading }) =>
                    isLoading ? Spinner() :
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            HStack({ alignment: cLeading, spacing: 10 })(
                                HStack(
                                    UIImage(this.broker_info.icon_link).width(48).maxHeight(48).cornerRadius(8)
                                ).width(48).height(58).overflow('hidden'),
                                Text(`Manage Broker:`).fontSize(20).fontWeight('500'),
                                Text(`${this.broker_info.broker_display_name}`).fontSize(20).fontWeight('400'),
                                Spacer(),
                                HStack({ alignment: cTop })(
                                    Icon('\\e5cd').fontSize(20).cursor('pointer').onClick(() => this.Hide())
                                ).width()
                            ).height(50),
                            HStack({ alignment: cTopLeading })(
                                !is.nullOrEmpty(data?.description) ?
                                    HStack({ alignment: cTopLeading })(
                                        ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                            VStack({ alignment: cTopLeading })(
                                                Text(data?.description).renderingType(RenderingTypes.Markdown)
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

                                    UIRecordsContext(({ data, isLoading }) => {
                                        if (!isLoading && is.array(data) && data.length === 1) {

                                            return this.getDynamicView(data[0].dialog_code)
                                        } else {
                                            return Fragment();
                                        }
                                    }).resource('brokersettingdialog').filter({ broker_id: this.broker_id }),

                                    HStack({ alignment: cLeading })(
                                        HStack({ alignment: cLeading })(
                                            Text('').whiteSpace('nowrap')
                                        ).minWidth('150px').maxWidth('150px'),
                                        HStack({ alignment: cLeading })(
                                           // CheckBox()
                                            //    .labelView(Text('Set as default'))
                                            //.formField('is_default', [])
                                        )

                                    ).height()
                                    ,
                                    HStack({ alignment: cTopTrailing })(
                                        Button(
                                            Text('Test Connection')
                                        ).width(158)
                                    )
                                )
                                    .padding(cHorizontal, 20)
                                    .width(!is.nullOrEmpty(data?.description) ? '50%' : '100%')
                            )
                            ,
                            HStack({ alignment: cTrailing, spacing: 10 })(
                                Button(
                                    Text('Reset')
                                ),
                                Button(
                                    Text('Cancel')
                                ),
                                Button(
                                    Text('Add')
                                ).onClick(() => this.Submit())
                            ).height(),
                        ).padding(20)
                ).resource('brokerconnection').filter({ id: this.connection_id })
            )
        )
    }

    public static Show(broker_info: any,connection_id: string, broker_id: string, tenant_id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new EditSettingsDialog();
            dialog.BindRouterParamsAsync({ broker_info, connection_id, broker_id, tenant_id }).then(() => {
                dialog.ShowDialogAsync().then(() => {
                    resolve();
                })
            })
        });
    }
}