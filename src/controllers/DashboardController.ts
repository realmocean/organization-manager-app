import {
    UIController, UIView, Text, HStack, cTopLeading, UIDataTable,
    VStack, UIFormController, CodeEditor, State, ScrollView, cVertical, useProtocol, IntegrationProtocol, DirectoryProtocol, FormBuilder
} from "@tuval/forms";
import { LeftSideMenuView } from "../views/LeftMenu";
import { useSessionService } from "@realmocean/services";



export class DashboardController extends UIFormController {

    @State()
    private code: string;
    public override LoadView(): UIView {


        const { getList } = useProtocol(DirectoryProtocol);
        const { data: employees, isLoading } = getList('employees', { tenant_id: useSessionService().TenantId });

        return (
            //Text(JSON.stringify(employees))
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
            )
        )
    }

}