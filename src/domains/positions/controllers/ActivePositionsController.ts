//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import {
    HStack,
    Icon,
    Icons,
    Spinner, State,
    TabList,
    UIController, UIRecordsContext, VStack, Text,
    cLeading, cTopLeading,
    cVertical, useNavigate, WorkProtocol, useProtocol
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { PositionGrid } from "../views/PositionGrid";
import { SelectPositionViewDialog } from "../dialogs/SelectPositionViewDialog";




export class ActivePositionsController extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {

        const navigate = useNavigate();

        const { gql, _mutation } = useProtocol(WorkProtocol);

        const { data: { views }, isLoading } = gql`
        views(workspace_id:"directory", folder_id:"position", applet_id:"position"){
            id
            title
        }
        `

        const { mutate: createView } = _mutation`create_view {
            id
            title
        }`


        return (

            RealmDataContext(
                HStack({ alignment: cTopLeading })(

                    VStack({ alignment: cTopLeading })(
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