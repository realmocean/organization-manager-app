//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    cLeading, cTopLeading, cTrailing, Heading, HStack,
    Spacer, Spinner, State, Text, TextField, UIController, UIRecordsContext, VStack, TabList, cVertical, useNavigate, Icon, Icons, WorkProtocol, useProtocol
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { SelectPositionViewDialog } from "../dialogs/SelectPositionViewDialog";




export class PositionAuditLogController extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {
        const navigate = useNavigate();

        const { gql, _mutation } = useProtocol(WorkProtocol);

        const { mutate: createView } = _mutation`create_view {
            id
            title
        }`

        return (

            RealmDataContext(
                HStack({ alignment: cTopLeading })(

                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading })(
                            TabList(
                                {
                                    id: '1',
                                    active: false,
                                    text: 'Active Positions',
                                    value: 1,
                                    onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/position/active-positions')
                                },
                                {
                                    id: '2',
                                    active: false,
                                    text: 'Audit Log',
                                    value: 2,
                                    onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/position/position-auditlog')
                                }
                            ).activeTabId(1),
                            HStack({ spacing: 5 })(
                                Icon(Icons.Add).fontSize(10),
                                Text('View').lineHeight('1')
                            )
                                .width().height().cursor('pointer').padding(5)
                                .background({ hover: '#fafbfc' })
                                .onClick(() => {
                                    SelectPositionViewDialog.Show('directory', 'position').then((view) => {
                                        createView({
                                            workspace_id: 'directory',
                                            folder_id: 'position',
                                            applet_id: 'position',
                                            view: view.type,
                                            title: view.name
                                        }, {
                                            onSuccess: (view) => {
                                                alert('success')
                                                //  invalidateQuery();
                                            }
                                        })

                                    })
                                }
                                )
                                .height()
                                .padding(cVertical, '1rem'),
                            UIRecordsContext(({ data, isLoading }) =>
                                isLoading ? HStack(Spinner()) : Text('Audit log not found.')

                            )
                                .resource('positions')
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
        )
    }
}