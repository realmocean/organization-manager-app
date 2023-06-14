import { IPosition, useOrganizationUIService } from "@realmocean/common";
import { VStack, cLeading, HStack, Fragment, UIRecordContext, Icon, Icons, Text, useFormController, useState, UIViewBuilder, cHorizontal } from "@tuval/forms";
import { label } from "../components/label";

export const PositionSelectView = (fieldInfo: any) =>
    UIViewBuilder(() => {
        const { name } = fieldInfo;

        const formController = useFormController();

        const [parentPosition, setParentPosition] = useState<IPosition>(null);

        const position_owner_id = formController.GetValue(name);

        return (
            VStack({ alignment: cLeading, spacing: 5 })(
                label(fieldInfo),
                HStack({ alignment: cLeading })(
                    HStack({ alignment: cLeading })(
                        parentPosition != null ? Text(parentPosition.Name) :
                            formController.GetValue(name) == null ? Fragment() :
                                UIRecordContext(({ data }) =>
                                    Text(data?.position_name)
                                ).resource('positions')
                                    .filter({ id: formController.GetValue(name) })

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
                                    setParentPosition(positions[0]);
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

