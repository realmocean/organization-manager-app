import { FormBuilder } from './../../../formbuilder/FormBuilder';
//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader, moment } from "@tuval/core";
import {
    cLeading, cTopLeading, cTrailing, Heading, HStack,
    Spacer, Spinner, State, Text, TextField, UIController, UIRecordsContext, VStack, TabList, cVertical, useNavigate, UIFormController, UIViewBuilder, Icons, MenuButton, cCenter
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddUserDialog } from "../dialogs/AddUserDialog";
import { UsersGrid } from "../views/UsersGrid";
import { AddPositionDialog } from '../../positions/dialogs/AddPositionDialog';
import { AddUserDialogData } from '../dialogs/AddUserDialogData';
import { DeleteUserDialog } from '../dialogs/DeleteUserDialog';



export class ActiveEmployeesController extends UIFormController {

    @State()
    private searchText: string;

    public _LoadView(): any {

        const navigate = useNavigate();
        return (

            RealmDataContext(
                HStack({ alignment: cTopLeading })(

                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading })(
                            TabList(
                                {
                                    text: 'Active Employees',
                                    onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/employee/active-employees')
                                },
                                {
                                    text: 'Audit Log',
                                    onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/employee/employee-audit')
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
                            .sort({
                                field: 'created_at',
                                order: 'DESC'
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
                        resource: 'employees',
                        columns: [
                            {
                                field: 'employee_full_name',
                                header: 'Employee',
                                width: '20%',
                                filter: true,
                                sortable: true,
                                body: (row: any) => (
                                    HStack({ spacing: 15 })(
                                        //Icon(Icons.Acc).size(35),
                                        VStack({ alignment: cLeading })(
                                            Text(`${row.employee_full_name}`).fontFamily('source sans pro').fontSize(16).foregroundColor('#1D76C7')
                                        )
                                    )
                                )
                            },
                            {
                                header: 'Title',
                                field: 'title_name',
                                width: '20%',
                                filter: true,
                                sortable: true,

                            },
                            {
                                header: 'Department',
                                field: 'org_unit_name',
                                width: '20%',
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
                                body: (employee: any) => {
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
                                                                const formData = Object.assign(AddUserDialogData,
                                                                    {
                                                                        title: 'Update employee',
                                                                        mode: 'update',
                                                                        resourceId: employee.id
                                                                    });
                                                                AddPositionDialog.Show(formData)
                                                            },
                                                            // onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/employee/${employee.id}`)
                                                        },
                                                        {
                                                            title: 'Delete',
                                                            icon: Icons.Delete,
                                                            onClick: () => DeleteUserDialog.Show(employee.id)
                                                        }
                                                    ])
                                                    .icon(Icons.Menu)

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