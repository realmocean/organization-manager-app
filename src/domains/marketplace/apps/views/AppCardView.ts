import { VStack, cTopLeading, UIRecordsContext, HStack, UIImage, cLeading, Icon, Icons, TextAlignment, Text, Button, ButtonSize, ButtonType, Heading, cCenter } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { useSessionService } from "@realmocean/services";
import { InstallBrokerDialog } from "../../dialogs/InstallBrokerDialog";

export const _AppCardView = (broker_qualified_name: string, image: string, name: string, description: string) => (
    VStack({ alignment: cTopLeading })(

        RealmDataContext(
            UIRecordsContext(({ data, isLoading }) =>
                VStack({ alignment: cTopLeading })(

                    HStack(
                        UIImage(image).width(48).maxHeight(48).cornerRadius(8)
                    ).width(48).height(58).overflow('hidden'),

                    HStack({ alignment: cLeading, spacing: 5 })(
                        Text(name).fontSize(16).fontWeight('700').marginTop('5px').marginBottom('0.2em')
                            .fontFamily(" Manrope,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif"),
                        data?.find(broker => broker.broker_qualified_name === broker_qualified_name) &&
                        HStack(Icon(Icons.Check).size(18).foregroundColor('rgb(0, 157, 255)'))
                            .width()
                            .height()
                            .cornerRadius('50%')
                            .border('solid 1px rgb(0, 157, 255)')
                            .tooltip('Installed')
                    ).width().height(),

                    Text('by Tuvalsoft').fontSize(12).fontWeight('400').lineHeight(18),
                    Text(description).fontSize(12).marginTop('5px').width(200).height(200).textOverflow('ellipsis').overflow('hidden')
                        .marginBottom('0.5em').height(35).multilineTextAlignment(TextAlignment.leading),

                )
            ).resource('installedbroker')
        )
        ,
        // Text('Free').fontSize(14).fontWeight('400').lineHeight(21),
    )
        .border({ default: '1px solid #e6e6e6', hover: '1px solid  #ffffff' })
        .shadow({ hover: '0 8px 16px 0 #00000024' })
        .cornerRadius(8)
        .width(218)
        .height(188)
        .padding(20)
        .margin('10px 10px 10px 0')
        .transition('box-shadow .1s ease,border-color .1s ease')
        .cursor('pointer')
        .background('white')
        .overflow('hidden')
)

export const AppCardView = (broker_qualified_name: string, image: string, name: string, description: string) => (

    VStack(
        VStack({ alignment: cTopLeading, spacing: 10 })(
            image &&
            UIImage(image).width(50).height(50).cornerRadius('20%'),
            // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
            HStack({ alignment: cLeading })(
                Heading(name).h4()
            ).allHeight(30),
            HStack({ alignment: cLeading })(
                Heading(description || '').h6().ellipsis(true)
                    .ellipsisMaxLines(2)
            )
            ,
            HStack({ alignment: cCenter })(
                Button(
                    Text('Install')
                )
                    //.loading(isLoading && (opa.type === this.last_added_opa_type))
                    //.disabled(!opa.enabled)
                    .kind(ButtonType.SECONDARY)
                    .size(ButtonSize.SMALL)
                    .width('100%')
                    .onClick(() => {
                        InstallBrokerDialog.Show(broker_qualified_name)
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
        ).height(230).width(290)
            .padding()
            .shadow({ hover: 'var(--box-shadow-medium)' })
            .cornerRadius('var(--border-radius-medium)')
            .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })
    ).width().height().padding()

)


