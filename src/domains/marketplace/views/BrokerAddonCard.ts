import { VStack, cTopLeading, UIRecordsContext, HStack, UIImage, cLeading, Icon, TextAlignment, Color, Text, Icons, Heading, Button, ButtonSize, ButtonType, cCenter } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { InstallBrokerDialog } from "../dialogs/InstallBrokerDialog";

export const BrokerAddonCard = (broker_qualified_name: string, image: string, name: string, description: string) => (
    VStack({ alignment: cTopLeading })(

        RealmDataContext(
            UIRecordsContext(({ data, isLoading }) =>
                VStack({ alignment: cTopLeading })(

                    HStack(
                        UIImage(image).width(48).maxHeight(48).cornerRadius(8)
                    ).width(48).allHeight(58).overflow('hidden'),

                    HStack({ alignment: cLeading, spacing: 5 })(
                        Heading(name).h4().ellipsis(true).ellipsisMaxLines(2),

                        data?.find(broker => broker.broker_qualified_name === broker_qualified_name) &&
                        HStack(Icon(Icons.Check).size(18).foregroundColor('rgb(0, 157, 255)'))
                            .width()
                            .height()
                            .cornerRadius('50%')
                            .border('solid 1px rgb(0, 157, 255)')
                            .tooltip('Installed')
                    ).width().height(),

                    HStack({ alignment: cLeading })(
                        Heading('by Tuvalsoft').h6().xsmall(),
                    ).allHeight(30),

                    HStack({ alignment: cTopLeading })(
                        Heading(description || '').h6().ellipsis(true)
                            .ellipsisMaxLines(2)
                    )
                    ,
                    HStack({ alignment: cCenter })(
                        Button(
                            Text('Add Connection')
                        )
                            //.loading(isLoading && (opa.type === this.last_added_opa_type))
                            //.disabled(!opa.enabled)
                            .kind(ButtonType.SECONDARY)
                            .size(ButtonSize.SMALL)
                            .width('100%')
                            .onClick(() => {
                                // InstallBrokerDialog.Show(broker_qualified_name)
                                /*  this.SetValue('name', opa.name);
                                 this.SetValue('folder_id', this.folder_id);
                                 this.SetValue('space_id', this.space_id);
                                 this.SetValue('tenant_id', useSessionService().TenantId);
                                 this.SetValue('account_id', useSessionService().AccountId);
                                 this.SetValue('item_type', 'opa');
                                 this.SetValue('item_sub_type', opa.type);
                                 this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                                 this.SetValue('content', '')

                                 this.last_added_opa_type = opa.type;
                                 create(); */
                            })
                    ).height()


                )
            ).resource('installedbroker')
        )
        ,
        // Text('Free').fontSize(14).fontWeight('400').lineHeight(21),
    )
        .border({ default: '1px solid #e6e6e6', hover: '1px solid  #ffffff' })
        .shadow({ hover: '0 8px 16px 0 #00000024' })
        .cornerRadius(8)
        .width(238)
        .height(250)
        .padding(20)
        .margin('10px 10px 10px 0')
        .transition('box-shadow .1s ease,border-color .1s ease')
        .cursor('pointer')
        .background('white')
        .overflow('hidden')
)