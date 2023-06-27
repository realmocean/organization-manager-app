//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    HStack,
    Heading,
    State,
    UIController,
    UIRouteOutlet,
    cTopLeading, cTrailing
} from "@tuval/forms";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddPositionDialog } from "../../positions/dialogs/AddPositionDialog";



export class ConnectionsController extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {

        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Connections'),
                Views.RightSidePage({

                    title: HStack(
                        Heading('Connections').h3().width('100%'),
                        HStack({ alignment: cTrailing, spacing: 15 })(
                            Views.ExportButton({
                                label: 'Export', action: () => {
                                    const fd = new UserFileDownloader({
                                        url: `/api/ExportEmployees?organization_id=${useSessionService().TenantId}`,
                                        autoStart: true
                                    })
                                }
                            }),


                        ).height().padding(24),
                    ).height(),
                    maxWidth: '1400px',
                    content: (
                       UIRouteOutlet().width('100%').height('100%')
                    )
                })
            )

        )
    }
}