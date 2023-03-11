import { VStack, cTopLeading, UIRecordsContext, HStack, UIImage, cLeading, Icon, TextAlignment, Color, Text, Icons } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";

export const BrokerAddonCard = (broker_qualified_name: string, image: string, name: string, description: string) => (
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
                             HStack( Icon(Icons.Check).size(18).foregroundColor('rgb(0, 157, 255)'))
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