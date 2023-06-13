import { is } from "@tuval/core";
import { DirectoryProtocol } from "@tuval/forms";
import { useProtocol } from "@tuval/forms";
import { UIViewBuilder } from "@tuval/forms";
import { TextField, VStack, cTopLeading, cHorizontal, cLeading, Text, CodeEditor, TextAlignment, ForEach, CheckBox, useFormController, UIRadioGroup, HStack, Dropdown } from "@tuval/forms";

const simpleForm = {
    "fieldMap": {
        "FirstName": {
            "id": "FirstName",
            "name": "first_name",
            "type": "text",
            "label": "Enter your middle name",
            "helpText": "Tell us your middle name,<br /> initial, or type N/A."
        },
        "LastName": {
            "id": "LastName",
            "name": "last_name",
            "type": "text",
            "label": "Enter your last name",
            "helpText": "Tell us your middle name,<br /> initial, or type N/A.",
            "visibleWhen": [
                {
                    "field": "A",
                    "is": true
                },
                {
                    "field": "first_name",
                    "is": "hans"
                }

            ]
        },
        "A": {
            "id": "A",
            "name": "A",
            "type": "checkbox",
            "helpText": "Optional help for setting: A",
            "label": "Confirm delete..?"
        },
        "body": {
            "id": "body",
            "name": "body",
            "type": "text",
            "multiline": true,
            "helpText": "Optional help for setting: A",
            "label": "HTTP request body",
            "required": true,
            "visibleWhen": [
                {
                    "field": "mode",
                    "is": "Update"

                }
            ]
        },
        "mode": {
            "id": "mode",
            "name": "mode",
            "type": "radiogroup",
            "label": "Mode of operation",
            "options": [
                {
                    "items": [
                        "Create",
                        "Update",
                        "Delete"
                    ]
                }
            ]
        }
    }
}

const _formMeta = {
    "fieldMap": {
        "url": {
            "id": "url",
            "name": "url",
            "type": "relativeuri",
            "helpText": "Example of a custom input.",
            "label": "some url with handlebars support."
        },
        "A": {
            "id": "A",
            "name": "A",
            "type": "checkbox",
            "label": "Confirm delete..?"
        },
        "body": {
            "id": "body",
            "name": "body",
            "type": "editor",
            "mode": "json",
            "label": "HTTP request body"
        },
        "mode": {
            "id": "mode",
            "name": "mode",
            "type": "radiogroup",
            "label": "Mode of operation",
            "options": [
                {
                    "items": [
                        "Create",
                        "Update",
                        "Delete"
                    ]
                }
            ]
        }
    },
    "layout": {
        "type": "column",
        "containers": [
            {
                "label": "Basic Fields",
                "fields": [
                    "A",
                    "url"
                ]
            },
            {
                "label": "Advanced Fields",
                "fields": [
                    "mode",
                    "body"
                ]
            }
        ]
    }
}

const __formMeta = {
    "fieldMap": {
        "lastName": {
            "id": "lastName",
            "name": "lastName",
            "type": "text",
            "label": "What is your family name?"
        },
        "firstName": {
            "id": "firstName",
            "name": "firstName",
            "type": "text",
            "label": "What is your given name?"
        }
    },
    "layout": {
        "fields": [
            "firstName",
            "lastName"
        ]
    }
}

const formMeta = {
    "fieldMap": {
        "firstName": {
            "id": "firstName",
            "name": "firstName",
            "type": "text",
            "label": "What is your given name?"
        },
        "lastName": {
            "id": "lastName",
            "name": "lastName",
            "type": "text",
            "label": "What is your family name?"
        },
        "employee": {
            "id": "employee",
            "name": "employee",
            "type": "select",
            "label": "Owner",
            "query": {
                "body": `employees {
                    id
                    employee_full_name
                }`,
                "resource": "employees",
                "text": "employee_full_name",
                "key": "id"
            }
        },
        "office": {
            "id": "office",
            "name": "office",
            "type": "select",
            "label": "Office",
            "query": {
                "body": `positions {
                    id
                    position_name
                }`,
                "resource": "positions",
                "text": "position_name",
                "key": "id"
            },
            "options": [
                {
                    "items": [
                        "Stirling",
                        "Capetown"
                    ]
                }
            ]
        },
        "offsite": {
            "id": "offsite",
            "name": "offsite",
            "type": "checkbox",
            "label": "Remote worker"
        }
    },
    "layout": {
        "type": "column",
        "containers": [
            {
                "label": "Name",
                "fields": [
                    "firstName",
                    "lastName"
                ]
            },
            {
                "label": "Location",
                "fields": [
                    'employee',
                    "office",
                    "offsite"
                ]
            }
        ]
    }
}

const formMeta___ = {
    "fieldMap": {
        "text": {
            "id": "text",
            "name": "text",
            "type": "text",
            "helpText": "This is the most basic input. It models an http form input",
            "label": "Text"
        },
        "number": {
            "id": "number",
            "name": "number",
            "type": "text",
            "inputType": "number",
            "label": "Number",
            "description": "It is possible to restrict user input to numerical values by setting the inputType prop to \"number\""
        },
        "delimitedText": {
            "id": "delimitedText",
            "name": "delimitedText",
            "type": "text",
            "delimiter": ",",
            "label": "Delimited text",
            "description": "Often a form needs to collect a simple set of values as a delimited string (comma or other).\n        Fail/Success status codes is one example.  Use the optional \"delimiter\" prop to\n        set the character(s) to split and observe the field value in the form output."
        },
        "multiline": {
            "id": "multiline",
            "name": "multiline",
            "type": "text",
            "multiline": true,
            "rowsMax": 5,
            "helpText": "Consider this equivalent to a HTML textarea, with configuration for max-rows and starting rows",
            "label": "Multi-line text",
            "description": "As you enter text, hit the return/enter key to observe the max row behavior."
        },
        "checkbox": {
            "id": "checkbox",
            "name": "checkbox",
            "type": "checkbox",
            "label": "Check me!"
        },
        "radiogroup": {
            "id": "radiogroup",
            "name": "radiogroup",
            "type": "radiogroup",
            "label": "Radio button A",
            "description": "This example uses a simple item set",
            "options": [
                {
                    "items": [
                        "Create",
                        "Update",
                        "Delete"
                    ]
                }
            ]
        },
        "radiogroup2": {
            "id": "radiogroup2",
            "name": "radiogroup2",
            "type": "radiogroup",
            "label": "Radio button B",
            "description": "This example defined separate labels and values for each item",
            "options": [
                {
                    "items": [
                        {
                            "label": "United States",
                            "value": "us"
                        },
                        {
                            "label": "Canada",
                            "value": "cdn"
                        },
                        {
                            "label": "India",
                            "value": "in"
                        }
                    ]
                }
            ]
        },
        "select": {
            "id": "select",
            "name": "select",
            "type": "select",
            "label": "Select List",
            "options": [
                {
                    "items": [
                        "USA",
                        "Canada",
                        "India"
                    ]
                }
            ]
        },
        "multiselect": {
            "id": "multiselect",
            "name": "multiselect",
            "type": "multiselect",
            "label": "Select multiple items",
            "options": [
                {
                    "items": [
                        {
                            "label": "USA",
                            "value": "US"
                        },
                        {
                            "label": "Canada",
                            "value": "CDN"
                        },
                        {
                            "label": "India",
                            "value": "IN"
                        },
                        {
                            "label": "China",
                            "value": "CH"
                        },
                        {
                            "label": "South Africa",
                            "value": "SA"
                        },
                        {
                            "label": "Spain",
                            "value": "SP"
                        },
                        {
                            "label": "Mexico",
                            "value": "MX"
                        }
                    ]
                }
            ]
        },
        "editor": {
            "id": "editor",
            "name": "editor",
            "type": "editor",
            "label": "Syntax highlighting editor",
            "mode": "json",
            "description": "Optional \"modes\" are: csv, text, xml, json"
        },
        "keyValue": {
            "id": "keyvalue",
            "name": "keyvalue",
            "type": "keyvalue",
            "keyName": "theKey",
            "valueName": "theValue",
            "showDelete": true,
            "label": "Key-value pairs",
            "description": "This input is used to collect a set of key-value pairs. The item delete action is optional and set using th showDelete prop. Also note that he key and value names can be configured as well."
        },
        "toggle": {
            "id": "toggle",
            "name": "toggle",
            "type": "toggle",
            "label": "Toggle button",
            "options": [
                {
                    "label": "United States",
                    "value": "us"
                },
                {
                    "label": "Canada",
                    "value": "cdn"
                },
                {
                    "label": "India",
                    "value": "in"
                }
            ]
        },
        "datetime": {
            "id": "datetime",
            "name": "datetime",
            "type": "datetime",
            "label": "Date/time",
            "doNotAllowFutureDates": true,
            "skipTimezoneConversion": true
        },
        "date": {
            "id": "date",
            "name": "date",
            "type": "date",
            "label": "Date",
            "doNotAllowFutureDates": true
        }
    }
}

const EditorView = (textData: any) => {
    const formController = useFormController();
    const { visibleWhen, required, multiline, description } = textData;
    let canRender = false;
    debugger
    if (visibleWhen != null && !is.array(visibleWhen)) {
        const field = visibleWhen.field;
        const fieldValue = visibleWhen.is;
        if (field != null) {
            const fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    } else if (visibleWhen != null && is.array(visibleWhen)) {
        const fails = []
        for (let i = 0; i < visibleWhen.length; i++) {
            const field = visibleWhen[i].field;
            const fieldValue = visibleWhen[i].is;
            if (field != null) {
                const fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {

                } else {
                    fails.push(0)
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }

    } else {
        canRender = true;
    }

    if (canRender) {
        return (
            VStack({ alignment: cTopLeading })(
                Text(textData.label + (required ? '*' : '')).kerning('0.00938em')
                    .lineHeight('24px').foregroundColor('#333D47').fontSize(14)
                    .fontWeight(required ? '600' : '400'),
                CodeEditor().width('100%').height(200),
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

const TextFormView = (textData: any) => {
    const formController = useFormController();
    const { visibleWhen, required, multiline, description } = textData;
    let canRender = false;
    debugger
    if (visibleWhen != null && !is.array(visibleWhen)) {
        const field = visibleWhen.field;
        const fieldValue = visibleWhen.is;
        if (field != null) {
            const fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    } else if (visibleWhen != null && is.array(visibleWhen)) {
        const fails = []
        for (let i = 0; i < visibleWhen.length; i++) {
            const field = visibleWhen[i].field;
            const fieldValue = visibleWhen[i].is;
            if (field != null) {
                const fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {

                } else {
                    fails.push(0)
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }

    } else {
        canRender = true;
    }

    if (canRender) {
        return (
            VStack({ alignment: cTopLeading })(
                Text(textData.label + (required ? '*' : '')).kerning('0.00938em')
                    .lineHeight('24px').foregroundColor('#333D47').fontSize(14)
                    .fontWeight(required ? '600' : '400'),
                TextField()
                    .multiline(multiline)
                    .height(multiline ? '' : '38px')
                    .foregroundColor('rgb(51,61,71)')
                    .cornerRadius(2)

                    .formField(textData.name, [])
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
const CheckBoxFormView = (textData: any) => {
    const formController = useFormController();
    return (
        VStack({ alignment: cTopLeading })(
            CheckBox()
                .checked(formController.GetValue(textData.name))
                .labelView(
                    Text(textData.label).kerning('0.00938em').lineHeight('24px').foregroundColor('#333D47').fontSize(14),
                )
                .onChange((e) => formController.SetValue(textData.name, e))
            // .formField(textData.name, [])
        ).height().marginBottom('16px')
    )
}

const RadioGroupoFormView = (textData: any) => {
    const formController = useFormController();
    return (
        VStack({ alignment: cTopLeading, spacing: 4 })(
            Text(textData.label).kerning('0.00938em').lineHeight('24px')
                .foregroundColor('#333D47').fontSize(14),
            UIRadioGroup()
                .radioButtons(textData.options.map(option => option.items.map(item => {
                    if (is.string(item)) {
                        return {
                            label: item,
                            value: item
                        }
                    } else if (item.value == null) {
                        return {
                            label: item.label,
                            value: item.label
                        }
                    } else {
                        return {
                            label: item.label,
                            value: item.value
                        }
                    }
                }))[0])
                .value(formController.GetValue(textData.name))
                .onChange((e) => formController.SetValue(textData.name, e))
            // .formField(textData.name, [])
        ).height().marginBottom('16px')
    )
}


const SelectFormView = (textData: any) => {
    const formController = useFormController();
    const { query } = textData;
    if (query != null) {
        const { body, resource, text, key } = query;

        return (
            UIViewBuilder(() => {
                const { query } = useProtocol(DirectoryProtocol);
              
                const { data } = query(body);

                return (
                    VStack({ alignment: cTopLeading })(
                        Text(textData.label).kerning('0.00938em').lineHeight('24px').foregroundColor('#333D47').fontSize(14),
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
                        Text(option.position_name)
                    )

                )((option) =>
                    HStack({ alignment: cLeading })(
                        Text(option.position_name)
                    )
                        .paddingLeft('10px')
                )
                    .floatlabel(false)
                    .dataSource(textData?.options[0]?.items.map(item => ({ text: item, value: item })))
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

const ColumnFormView = (columnInfo: any, fieldMap) => {

    const views = [];
    const { containers } = columnInfo;
    for (let i = 0; i < containers.length; i++) {
        const { label, fields } = containers[i];
        views.push(
            VStack({ alignment: cTopLeading, spacing: 10 })(
                Text(label).fontSize(17).lineHeight(22).foregroundColor('#333D47'),
                ...ForEach(fields)((field) =>
                    getView(fieldMap[field as any])
                )
            )
        )
    }
    return (
        HStack({ alignment: cTopLeading, spacing: 20 })(
            ...views
        )
    )
}

const KeyValueView = (textData: any) => {
    const formController = useFormController();
    const { visibleWhen, required, multiline, name, description } = textData;
    let canRender = false;

    if (visibleWhen != null && !is.array(visibleWhen)) {
        const field = visibleWhen.field;
        const fieldValue = visibleWhen.is;
        if (field != null) {
            const fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    } else if (visibleWhen != null && is.array(visibleWhen)) {
        const fails = []
        for (let i = 0; i < visibleWhen.length; i++) {
            const field = visibleWhen[i].field;
            const fieldValue = visibleWhen[i].is;
            if (field != null) {
                const fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {

                } else {
                    fails.push(0)
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }

    } else {
        canRender = true;
    }

    const keyValuePairs: any[] = formController.GetValue(name) || [];
    const rows = [...keyValuePairs, { key: '', value: '' }]
    if (canRender) {
        return (
            VStack({ alignment: cTopLeading, spacing: 10 })(
                Text(textData.label + (required ? '*' : '')).kerning('0.00938em')
                    .lineHeight('24px').foregroundColor('#333D47').fontSize(14)
                    .fontWeight(required ? '600' : '400'),
                //  Text(JSON.stringify(rows)),
                ...ForEach(rows)((keyValue, index) =>
                    HStack({ alignment: cLeading, spacing: 10 })(
                        TextField()
                            .value(keyValuePairs[index] == null ? '' : keyValuePairs[index].key)
                            .multiline(multiline)
                            .height(multiline ? '' : '38px')
                            .foregroundColor('rgb(51,61,71)')
                            .cornerRadius(2)
                            // .padding('0px 15px')
                            //.formField(textData.name, [])
                            .onChange(text => {
                                if (text == '') {
                                    if (is.nullOrEmpty(keyValuePairs[index].value)) {
                                        keyValuePairs.splice(index, 1);
                                    } else {
                                        keyValuePairs[index] = { key: text, value: keyValue.value }

                                    }
                                    formController.SetValue(name, [...keyValuePairs])


                                } else {
                                    keyValuePairs[index] = { key: text, value: keyValue.value }
                                    formController.SetValue(name, [...keyValuePairs])
                                }
                            })
                            .border('1px solid #D6E4ED')
                            .shadow({ focus: 'none' })
                            .fontSize(15),
                        TextField()
                            .multiline(multiline)
                            .height(multiline ? '' : '38px')
                            .foregroundColor('rgb(51,61,71)')
                            .cornerRadius(2)
                            // .padding('0px 15px')
                            //.formField(textData.name, [])
                            .onChange(text => {
                                keyValuePairs[index] = { key: keyValue.key, value: text }
                                formController.SetValue(name, [...keyValuePairs])
                            })
                            .border('1px solid #D6E4ED')
                            .shadow({ focus: 'none' })
                            .fontSize(15)
                    )

                ),
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

export const FormBuilder = () => {
    const views = []
    const { fieldMap, layout } = formMeta as any;

    if (layout != null) {
        switch ((layout as any).type) {
            case 'column':
                views.push(ColumnFormView(layout, fieldMap))
                break;
            default:
                for (let key of (layout as any).fields) {
                    views.push(getView(fieldMap[key]))
                }
                break;
        }
    }


    if (layout == null) {
        for (let key in fieldMap) {
            views.push(getView(fieldMap[key]))
        }
    }

    return VStack({ alignment: cTopLeading })(
        ...ForEach(views)(view => view)
    )
}

function getView(viewInfo) {
    switch (viewInfo.type) {
        case 'text':
            return TextFormView(viewInfo);
        case 'checkbox':
            return CheckBoxFormView(viewInfo);
        case 'radiogroup':
            return RadioGroupoFormView(viewInfo);
        case 'select':
            return SelectFormView(viewInfo);
        case 'keyvalue':
            return KeyValueView(viewInfo);
        case 'editor':
            return EditorView(viewInfo);
    }
}

