import { HStack, Icon, VStack, cLeading, UIRecordContext, Color, Text, Icons, MenuButton, useNavigate, UIViewBuilder, UIDataTable, IDataTableColumn, UIView, cCenter } from "@tuval/forms"
import { RealmDataContext } from "../../../views/DataContexts"
import { ITableViewColumn, Views } from "../../../views/Views"
import { DeleteUserDialog } from "../dialogs/DeleteUserDialog"
import { moment } from "@tuval/core"
import { AddUserDialogData } from "../dialogs/AddUserDialogData"
import { AddPositionDialog } from "../../positions/dialogs/AddPositionDialog"

const columns: ITableViewColumn[] = [
    {
        title: 'Employee',
        width: '40%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Announcement).size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.employee_name} ${row.employee_last_name}`)
                        .fontWeight('600'),

                    Text(row.title_name)
                        .foregroundColor('rgb(99, 115, 129)')
                        .fontWeight('400')

                )
            )
        )

    },
    {
        title: 'Title',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)

                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },
    {
        title: 'Department',
        key: 'DepartmentName',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.org_unit_name}`)

                    )
                ).resource('departments').filter({ 'id': row.department_id })
            )

        )
    },
    {
        title: 'Action',
        view: (employee: any) => {
            return UIViewBuilder(() => {
                const navigate = useNavigate();
                return (
                    HStack({ alignment: cLeading })(
                        MenuButton()
                            .model([
                                {
                                    title: 'Edit',
                                    icon: Icons.Edit,
                                    onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/employee/${employee.id}`)
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
]

const _columns: IDataTableColumn[] = [
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
                    Text(`${row.employee_full_name}`)
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
]
export const UsersGrid = (users: any[]) => {

    console.log(users)
    return (

            HStack(
                UIDataTable()
                    .columns(_columns)
                    .model(users).width('100%')
            ).border('solid 1px #DEE2E6').cornerRadius(10).overflow('hidden')

    )



    /*  if (users == null)
         return Views.EmptyTableView(columns, Array.from({ length: 5 }), (employee: any, index) => {

          })
     else
         return Views.TableView(columns, users, (employee: any, index) => {
     }) */

}
