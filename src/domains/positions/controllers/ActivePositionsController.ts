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
    cVertical, useNavigate, WorkProtocol, useProtocol, MenuButton, TextField, UIViewBuilder, cCenter, FormBuilder, DirectoryProtocol
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { PositionGrid } from "../views/PositionGrid";
import { SelectPositionViewDialog } from "../dialogs/SelectPositionViewDialog";
import { moment } from "@tuval/core";
import { AddPositionDialog } from "../dialogs/AddPositionDialog";
import { AddPositionDialogData, EditPositionDialogData } from "../dialogs/AddPositionDialogData";
import { DeletePositionDialog } from "../dialogs/DeletePositionDialog";




export class ActivePositionsController extends UIController {

    @State()
    private searchText: string;

    public _LoadView(): any {

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

    public LoadView(): any {

        const navigate = useNavigate();
        return (
            FormBuilder.render({
                fieldMap: {
                    tenant_id: {
                        name: 'tenant_id',
                        value: useSessionService().TenantId,
                        type: 'virtual'
                    },
                    datatable: {
                        id: "datatable",
                        name: "datatable",
                        type: "datatable",
                        protocol:DirectoryProtocol,
                        resource: 'positions',
                        columns: [
                            {
                                field: 'position_name',
                                header: 'Position',
                                width: '60%',
                                filter: true,
                                sortable: true,
                                body: (row: any) => (
                                    HStack({ spacing: 15 })(
                                        //Icon(Icons.Acc).size(35),
                                        VStack({ alignment: cLeading })(
                                            Text(`${row.position_name}`).fontFamily('source sans pro').fontSize(16).foregroundColor('#1D76C7')
                                        )
                                    ).cursor('pointer')
                                    .onClick(() => {
                                        const formData = EditPositionDialogData(row.id);
                                        AddPositionDialog.Show(formData);
                                    })
                                ),
                                /* editor: ({ rowData }) => (
                                    TextField().value(rowData.position_name)
                                ) */
                            },

                            {
                                header: 'Created At',
                                width: '15%',
                                body: (row: any) => (
                                    HStack({ spacing: 15 })(
                                        VStack({ alignment: cLeading })(
                                            Text(moment(row.created_at).fromNow())
                                        )
                                    )
                                )
                            },
                            {
                                header: 'Updated At',
                                width: '15%',
                                body: (row: any) => (
                                    HStack({ spacing: 15 })(
                                        VStack({ alignment: cLeading })(
                                            Text(moment(row.updated_at).fromNow())
                                        )
                                    )
                                )
                            },
                            {
                                //field: 'employee_name',
                                header: 'Actions',
                                width: '10%',
                                body: (department: any) => {
                                    return UIViewBuilder(() => {
                                        const navigate = useNavigate();
                                        return (
                                            HStack({ alignment: cCenter })(
                                                MenuButton()
                                                    .model([
                                                        {
                                                            title: 'Edit',
                                                            icon: Icons.Edit,
                                                            onClick: () => {
                                                                const formData = EditPositionDialogData(department.id);
                                                                AddPositionDialog.Show(formData);
                                                            },
                                                            //  onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/position/${department.id}`)
                                                        },
                                                        {
                                                            title: 'Delete',
                                                            icon: Icons.Delete,
                                                            onClick: () => DeletePositionDialog.Show(department.id)
                                                        }
                                                    ])
                                                    .icon(Icons.Menu)
                                                // MenuButton()
                                                /*  Views.ActionContextMenu([
                                                     {
                                                         title: 'Edit',
                                                         icon: Icons.Edit,
                                                         tooltip: 'Edit',
                                                         iconColor: '#505A64',
                                                         link: `/app(tenantmanager)/company/employee/${employee.id}/edit`,
                                                         linkState: { position: employee }
                                                     },
                                                     {
                                                         title: 'Delete',
                                                         icon: Icons.Delete,
                                                         tooltip: 'Delete',
                                                         iconColor: Color.red400,
                                                         //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                                                         action: () => DeleteUserDialog.Show(employee.id),
                                                         linkState: { position: employee }
                                                     }
                                                 ]) */
                                            )
                                        )
                                    })

                                }
                            },
                            {
                                header: '',
                                width: '15%',
                                rowEditor: true,

                            } as any,
                        ],
                        filter: {
                            'tenant_id': useSessionService().TenantId,
                            ...(this.searchText != null && this.searchText.length > 2 && {
                                'employee_name': this.searchText
                            })
                        },
                        sort: {
                            field: 'created_at',
                            order: 'DESC'
                        },
                        helpText: "Tell us your middle name,<br /> initial, or type N/A."
                    }


                }
            })

        )
    }
}