//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    cLeading, cTopLeading, cTrailing, Heading, HStack,
    Spacer, Spinner, State, Text, TextField, UIController, UIRecordsContext, VStack, TabList, cVertical, useNavigate
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddUserDialog } from "../dialogs/AddUserDialog";
import { UsersGrid } from "../views/UsersGrid";



export class Tab1Controller extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {

        const navigate = useNavigate();
        return (

            RealmDataContext(
                HStack({ alignment: cTopLeading })(

                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading })(
                            TabList(
                                {
                                    
                                    text: 'Active Employees',
                                    onClick:()=>navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/employee/tab1')
                                },
                                {
                                    text: 'Audit Log',
                                    onClick:()=>navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/employee/tab2')
                                }
                            ).activeTabId(0)
                        ).height().padding(cVertical, '1rem'),
                        UIRecordsContext(({ data, isLoading }) =>
                            isLoading ? HStack(Spinner()) :
                                /*  VStack(
                                     UIGridView()
                                         .columns(columns as any)
                                         .datasource(data)
                                         .self((grid) => {
                                             this.grid = grid;
                                         })
                                 ).padding(cHorizontal, 20) */
                                UsersGrid(data)
                        )

                            //UsersGrid(data) as any

                            .resource('employees')
                            .filter({
                                'tenant_id': useSessionService().TenantId,
                                ...(this.searchText != null && this.searchText.length > 2 && {
                                    'employee_name': this.searchText
                                })
                            })

                    )
                )
            )

        )
    }
}