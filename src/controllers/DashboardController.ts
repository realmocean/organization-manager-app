import {
    UIController, UIView, Text, HStack, cTopLeading, UIDataTable,
    VStack, UIFormController, CodeEditor, State, ScrollView, cVertical, useProtocol, IntegrationProtocol, DirectoryProtocol
} from "@tuval/forms";
import { LeftSideMenuView } from "../views/LeftMenu";
import { FormBuilder } from "../formbuilder/FormBuilder";



export class DashboardController extends UIFormController {

    @State()
    private code: string;
    public override LoadView(): UIView {


        const { gql } = useProtocol(IntegrationProtocol)
        const { data: { connections }, isLoading } = gql`
                                                   connections
                                                    `

        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Overview'),
                VStack(
                    Text(JSON.stringify(this.GetFormData())),
                    HStack({ alignment: cTopLeading })(
                        CodeEditor()
                            .width(600)
                            .height('100%')
                            .onChange((e) => this.code = e),
                        ScrollView({ axes: cVertical, alignment: cTopLeading })(
                            FormBuilder.render(this.code)
                        ).padding()

                    )
                ).padding()

                /* UIDataTable().model([{
                    name: 'test'
                }]) */
            )
        )
    }

}