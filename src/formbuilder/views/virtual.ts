import { is } from "@tuval/core";
import { TextAlignment, TextField, VStack, cTopLeading, useFormController, Text, Fragment } from "@tuval/forms";
import { compile } from "handlebars";
import { Validator } from "jsonschema";
import { FormBuilder, compileFormula } from "../FormBuilder";
import { label } from "../components/label";
import * as objectPath from 'object-path';

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


export const VirtualView = (fieldInfo: any) => {
    const { name, value } = fieldInfo;

    const formController = useFormController();
    const currentValue = formController.GetValue(name);

    if (currentValue !== value){
        formController.SetValue(name, value);
    }

    return Fragment();



}