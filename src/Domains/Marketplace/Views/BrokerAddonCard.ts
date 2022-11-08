import { HStack, UIImage, VStack, Text, cTopLeading, TextAlignment, Color } from "@tuval/forms";


export const BrokerAddonCard = (image: string, name: string, description: string) => (
    VStack({ alignment: cTopLeading })(
        VStack({ alignment: cTopLeading })(
            HStack(
                UIImage(image).width(48).maxHeight(48).cornerRadius(8)
            ).width(48).height(58).overflow('hidden'),
            Text(name).fontSize(16).fontWeight('600').marginTop('5px').marginBottom('0.2em'),
            Text('by Tuvalsoft').fontSize(12).fontWeight('400').lineHeight(18),
            Text(description).fontSize(12).marginTop('5px').width(200).height(200).textOverflow('ellipsis').overflow('hidden')
                .marginBottom('0.5em').height(35).multilineTextAlignment(TextAlignment.leading)
        ),
        Text('Free').fontSize(14).fontWeight('400').lineHeight(21),
    )
        .border({ default: '1px solid #e6e6e6', hover: '1px solid  #1ed760' })
        .shadow({ hover: '0 0 10px -2px rgb(0 0 0 / 20%)' })
        .cornerRadius(8)
        .width(306)
        .height(258)
        .padding(20)
        .margin('10px 10px 10px 0')
        .transition('border-color 0.3s, box-shadow 0.3s')
        .cursor('pointer')
        .background(Color.white)
        .overflow('hidden')
)