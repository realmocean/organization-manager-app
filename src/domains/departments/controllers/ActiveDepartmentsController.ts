//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    cLeading, cTopLeading, cTrailing, Heading, HStack,
    Spacer, Spinner, State, Text, TextField, UIController, UIRecordsContext, VStack, TabList, cVertical, useNavigate, useProtocol, DirectoryProtocol
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { DepartmentsGrid } from "../views/DepartmentsGrid";




export class ActiveDepartmentsController extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {

        const navigate = useNavigate();

        const { query } = useProtocol(DirectoryProtocol)
        const { data: { departments }, isLoading } = query(`#graphql
                                                   departments {
                                                    id
                                                    org_unit_name
                                                    created_at
                                                    updated_at
                                                   }
                                                    `)

        return (

            //RealmDataContext(
            HStack({ alignment: cTopLeading })(

                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        TabList(
                            {

                                text: 'Active Departments',
                                onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/department/active-departments')
                            },
                            {
                                text: 'Audit Log',
                                onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/department/department-audit')
                            }
                        ).activeTabId(0)
                    ).height().padding(cVertical, '1rem'),
                    //  UIRecordsContext(({ data, isLoading }) =>
                    isLoading ? HStack(Spinner()) :
                        DepartmentsGrid(departments)
                    /*  )

                       

                         .resource('departments')
                         .filter({
                             'tenant_id': useSessionService().TenantId,
                             ...(this.searchText != null && this.searchText.length > 2 && {
                                 'org_unit__name': this.searchText
                             })
                         })

                 ) */
                )
            )

        )
    }
}