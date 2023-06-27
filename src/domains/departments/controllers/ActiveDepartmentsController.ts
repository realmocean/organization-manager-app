//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader, moment } from "@tuval/core";
import {
    cLeading, cTopLeading, cTrailing, Heading, HStack,
    Spacer, Spinner, State, Text, TextField, UIController, UIRecordsContext, VStack, TabList, cVertical, useNavigate, useProtocol, DirectoryProtocol, Icons, MenuButton, UIViewBuilder, cCenter, UIFormController
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { DepartmentsGrid } from "../views/DepartmentsGrid";
import { FormBuilder } from "../../../formbuilder/FormBuilder";
import { DeleteDepartmentDialog } from "../dialogs/DeleteDepartmentDialog";
import { AddDepartmentDialogData } from "../dialogs/AddDepartmentDialogData";
import { AddPositionDialog } from "../../positions/dialogs/AddPositionDialog";




export class ActiveDepartmentsController extends UIFormController {

    @State()
    private searchText: string;

    public _LoadView(): any {

        const navigate = useNavigate();

        /*   const { query } = useProtocol(DirectoryProtocol)
          const { data: { departments }, isLoading } = query(`#graphql
                                                     departments {
                                                      id
                                                      org_unit_name
                                                      created_at
                                                      updated_at
                                                     }
                                                      `) */

        return (

            RealmDataContext(
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
                        UIRecordsContext(({ data, isLoading }) =>
                            isLoading ? HStack(Spinner()) :
                                DepartmentsGrid(data)
                        )
                            .resource('departments')
                            .filter({
                                'tenant_id': useSessionService().TenantId,
                                ...(this.searchText != null && this.searchText.length > 2 && {
                                    'org_unit__name': this.searchText
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
                        resource: 'departments',
                        columns:[
                            {
                                field: 'org_unit_name',
                                header: 'Department',
                                width: '60%',
                                filter: true,
                                sortable: true,

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
                                                                const formData = Object.assign(AddDepartmentDialogData,
                                                                    {
                                                                        title: 'Update department',
                                                                        mode: 'update',
                                                                        resourceId: department.id
                                                                });
                                                                AddPositionDialog.Show(formData)
                                                            },
                                                            //onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/department/${department.id}`)
                                                        },
                                                        {
                                                            title: 'Delete',
                                                            icon: Icons.Delete,
                                                            onClick: () => DeleteDepartmentDialog.Show(department.id)
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
                            }
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