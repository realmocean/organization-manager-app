//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import {
    HStack,
    Spinner, State,
    TabList,
    UIController, UIRecordsContext, VStack,
    cLeading, cTopLeading,
    cVertical, useNavigate
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { PositionGrid } from "../views/PositionGrid";




export class ActivePositionsController extends UIController {

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
                                    
                                    text: 'Active Positions',
                                    onClick:()=>navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/position/active-positions')
                                },
                                {
                                    text: 'Audit Log',
                                    onClick:()=>navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/position/position-audit')
                                }
                            ).activeTabId(0)
                        ).height().padding(cVertical, '1rem'),
                        UIRecordsContext(({ data, isLoading }) =>
                            isLoading ? HStack(Spinner()) :
                                PositionGrid(data)
                        )

                            //UsersGrid(data) as any

                            .resource('positions')
                            .filter({
                                'tenant_id': useSessionService().TenantId,
                                ...(this.searchText != null && this.searchText.length > 2 && {
                                    'position__name': this.searchText
                                })
                            })

                    )
                )
            )

        )
    }
}