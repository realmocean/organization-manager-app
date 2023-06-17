import { useFormController, UIViewBuilder, useProtocol, Text, DirectoryProtocol, VStack, cTopLeading, Dropdown, HStack, cLeading } from "@tuval/forms";
import { label } from "../components/label";
import { is } from "@tuval/core";

export const SelectFormView = (textData: any) => {
    const formController = useFormController();
    const { query, options } = textData;
    if (query != null) {
        const { body, resource, text, key } = query;

        return (
            UIViewBuilder(() => {
                const { query } = useProtocol(DirectoryProtocol);

                const { data } = query(body);

                return (
                    VStack({ alignment: cTopLeading })(
                        label(textData),
                        Dropdown((option) =>
                            HStack({ alignment: cLeading })(
                                Text(option[text])
                            )

                        )((option) =>
                            HStack({ alignment: cLeading })(
                                Text(option[text])
                            )
                                .paddingLeft('10px')
                        )
                            .floatlabel(false)
                            .dataSource(data[resource]/* textData?.options[0]?.items.map(item => ({ text: item, value: item })) */)
                            .fields({ text: text, value: key })
                            //.placeHolder(params.placeholder)
                            .width('100%')
                            .height(38)
                            .formField(textData.name, [])
                            .border('1px solid #D6E4ED')
                            .shadow({ focus: 'none' })
                        // .formField(textData.name, [])
                    ).height().marginBottom('16px')
                )
            })
        )
    } else {
        return (
            VStack({ alignment: cTopLeading })(
                Text(textData.label).kerning('0.00938em').lineHeight('24px').foregroundColor('#333D47').fontSize(14),
                Dropdown((option) =>
                    HStack({ alignment: cLeading })(
                        Text(option.text)
                    )

                )((option) =>
                    HStack({ alignment: cLeading })(
                        Text(option.text)
                    )
                        .paddingLeft('10px')
                )
                    .floatlabel(false)
                    .dataSource(options?.[0]?.items.map(item => (is.string(item) ? { text: item, value: item } : { text: item.label, value: item.value })))
                    .fields({ text: 'text', value: 'value' })
                    //.placeHolder(params.placeholder)
                    .width('100%')
                    .height(38)
                    .formField(textData.name, [])
                    .border('1px solid #D6E4ED')
                    .shadow({ focus: 'none' })
                // .formField(textData.name, [])
            ).height().marginBottom('16px')
        )
    }


}