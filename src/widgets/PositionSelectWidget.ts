import { IPosition, useOrganizationUIService } from "@realmocean/common";
import { VStack, cLeading, HStack, Fragment, UIRecordContext, Icon, Icons, Text, useFormController, useState, UIViewBuilder, cHorizontal, useProtocol, DirectoryProtocol } from "@tuval/forms";


export const PositionSelectWidget = (fieldInfo: any) =>
    UIViewBuilder(() => {
        const { name, fieldId } = fieldInfo;

        const formController = useFormController();

        debugger;
        let value, defaultValue;

        value = formController.GetValue(name);

        if (fieldId) { // Eger query ile okunuyorsa onu default value value olarak set ediyoruz.
            defaultValue = formController.GetValue(fieldId);
        }

        const { getOne } = useProtocol(DirectoryProtocol);

        let selectedPosition;

        if (value != null || defaultValue != null) {
            const { data:  position  } = getOne('positions',{id:`${value || defaultValue}`})
            /* const { data: { position } } = gql`
            position(id:${value || defaultValue}) {
                id
                position_name
            }
            ` */
            selectedPosition = position;
        }

        const formState = formController.GetFieldState(name);
        if (!formState.isTouched && defaultValue != null) {
            formController.SetValue(name, defaultValue, true);
        }

        return (
            VStack({ alignment: cLeading, spacing: 5 })(
                HStack({ alignment: cLeading })(
                    HStack({ alignment: cLeading })(
                        selectedPosition == null ? Fragment() :
                            Text(selectedPosition?.position_name)
                    ),
                    HStack(
                        Icon(Icons.Menu).size(15).foregroundColor('gray')
                    ).height().width()
                        .cursor('pointer')
                        .padding(5)
                        .cornerRadius(5)
                        .background('#F8FAFF')
                        .onClick(() => {
                            useOrganizationUIService().selectPosition(false).then(positions => {
                                if (positions.length > 0) {
                                    formController.SetFieldState(name, { isTouched: true });
                                    formController.SetValue(name, positions[0].Id);
                                }
                            })
                        })
                )
                    .foregroundColor('rgb(51,61,71)')
                    .cornerRadius(2)
                    .border('1px solid #D6E4ED')
                    .fontSize(15)
                    .allHeight(38)
                    .padding(5)
                    .padding(cHorizontal, 10)
                    .background('white')
            ).height().marginBottom('16px')
        )
    }

    )

