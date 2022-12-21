import { VStack, cTopLeading, HStack, DropDown, cLeading, TextField, Color, Text, TextAlignment, RenderingTypes, RequiredRule } from "@tuval/forms"

function setFormData(name, value) {

}


const SettingDialog = () => {
    return (
        VStack({ alignment: cTopLeading, spacing: 10 })(
            HStack(
                DropDown(item =>
                    Text(item)
                )(selectedItem =>
                    Text(selectedItem)
                )
            ).height(40).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)'),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Data Source Name :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('data_source_name', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Server URL :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('api_token', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('User Name:').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('api_token', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('Password :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('api_token', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),

            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Token :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('api_token', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height()

        ).padding(20)
    )
}

const GoogleQuery = () => {
    return (
        HStack(
            HStack({ alignment: cTopLeading })(
                Text(`- **Project ID** - the ID of the project in which your dataset lives.
- **Dataset ID** - the ID of the dataset from which you want to pull data. `).render(2)
            ),
            VStack({ alignment: cTopLeading, spacing: 10 })(
                Text('See the integration document for AzureDevops here.').fontSize(14).lineHeight('1.5'),
                Text('AzureDevops add-on supports different versions of AzureDevops. Please select your version to define a datasource:').fontSize(14).lineHeight('1.5')
                    .multilineTextAlignment(1),
                HStack(
                    DropDown(item =>
                        Text(item)
                    )(selectedItem =>
                        Text(selectedItem)
                    ).fields({text:'title', value:'id'})
                ).height(40).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)'),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Connection Name :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('data_source_name', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Project ID :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Database ID:').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('Google JSON :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),



            ).padding(20)
        )
    )
}


const SQLServer = () => {
    return (
        HStack(
            VStack({ alignment: cTopLeading, spacing: 10 })(
                HStack(
                    DropDown(item =>
                        Text(item)
                    )(selectedItem =>
                        Text(selectedItem)
                    )
                ).height(40).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)'),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Host :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('data_source_name', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Database :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Schema :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Username :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('*Password :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height(),
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('Port :').whiteSpace('nowrap')
                    ).minWidth('150px').maxWidth('150px'),
                    HStack(
                        TextField().value('1433').onTextChange(text => setFormData('api_token', text))
                    ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
                ).height()



            ).padding(20)
        )
    )
}

const CSPServer = () => {
    return (

        VStack({ alignment: cTopLeading, spacing: 10 })(
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Host :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('data_source_name', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Token :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('api_token', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Language :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                HStack(
                    TextField().onTextChange(text => setFormData('api_token', text))
                ).background(Color.white).padding(10).cornerRadius(8).border('solid 1px rgb(125,125,125, 0.3)')
            ).height(),
        )

    )
}

const Github = () => {
    return (
        VStack({ alignment: cTopLeading, spacing: 10 })(
            Text('See the integration document for GitHub here.'),
            
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Data Source Name :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),

                DropDown(item =>
                    Text(item)
                )(selectedItem =>
                    Text(selectedItem)
                ).fields({text:'title', value: 'id'})

            ).height(),

            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Data Source Name :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),

                TextField().formField('data_source_name', [new RequiredRule('Data source must be set.')])

            ).height(),
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('*Server URL :').whiteSpace('nowrap')
                ).minWidth('150px').maxWidth('150px'),
                TextField().formField('api_token', [new RequiredRule('API token must be set.')])
            ).height()

        )
    )
}