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
import { TitleGrid } from "../views/TitleGrid";




export class ActiveTitlesController extends UIController {

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
                                    
                                    text: 'Active Titles',
                                    onClick:()=>navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/title/active-titles')
                                },
                                {
                                    text: 'Audit Log',
                                    onClick:()=>navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/title/title-audit')
                                }
                            ).activeTabId(0)
                        ).height().padding(cVertical, '1rem'),
                        UIRecordsContext(({ data, isLoading }) =>
                            isLoading ? HStack(Spinner()) :
                                TitleGrid(data)
                        )

                            //UsersGrid(data) as any

                            .resource('titles')
                            .filter({
                                'tenant_id': useSessionService().TenantId,
                                ...(this.searchText != null && this.searchText.length > 2 && {
                                    'title_name': this.searchText
                                })
                            })

                    )
                )
            )

        )
    }
}