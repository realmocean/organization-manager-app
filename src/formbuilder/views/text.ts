import { is } from "@tuval/core";
import { TextAlignment, TextField, VStack, cTopLeading, useFormController, Text } from "@tuval/forms";
import { compile } from "handlebars";
import { Validator } from "jsonschema";
import { FormBuilder, compileFormula } from "../FormBuilder";
import { label } from "../components/label";

const v = new Validator();

var schema = {
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "value": "text"
        },
    }
}

export interface TextFieldInfo {
    type: 'text';
    label: string;
}


export const TextFormView = (fieldInfo: any) => {
    v.validate(fieldInfo, schema).valid;

    const formController = useFormController();
    const { visibleWhen, required, multiline, description, formula } = fieldInfo;

    let canRender = FormBuilder.canRender(fieldInfo, formController)

    if (canRender) {
        return (
            VStack({ alignment: cTopLeading })(
                //Text(FormBuilder.canRender(visibleWhen, formController).toString()),
                label(fieldInfo),
                formula != null ?
                    TextField()
                        .value(compileFormula(formController.GetFormData(), formula))
                        .multiline(multiline)
                        .height(multiline ? '' : '38px')
                        .foregroundColor('rgb(51,61,71)')
                        .cornerRadius(2)
                        .border('1px solid #D6E4ED')
                        .shadow({ focus: 'none' })
                        .fontSize(15) :
                    TextField()
                        .multiline(multiline)
                        .height(multiline ? '' : '38px')
                        .foregroundColor('rgb(51,61,71)')
                        .cornerRadius(2)
                        .formField(fieldInfo.name, [])
                        .border('1px solid #D6E4ED')
                        .shadow({ focus: 'none' })
                        .fontSize(15),
                description &&
                Text(description).multilineTextAlignment(TextAlignment.leading)
                    .foregroundColor('#95ABBC')
                    .fontSize('12px')
                    .fontFamily('"Roboto", "Helvetica", "Arial", sans-serif')
                    .kerning('0.03333em')
                    .lineHeight('20px')
                    .marginTop('4px')
            ).height().marginBottom('16px')
        )
    }
}