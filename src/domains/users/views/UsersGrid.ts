import { HStack, Icon, VStack, cLeading, UIRecordContext, Color, Text, Icons, MenuButton } from "@tuval/forms"
import { RealmDataContext } from "../../../views/DataContexts"
import { ITableViewColumn, Views } from "../../../views/Views"
import { DeleteUserDialog } from "../dialogs/DeleteUserDialog"

const columns: ITableViewColumn[] = [
    {
        title: 'Employee',
        width: '40%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Announcement).size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.employee_name} ${row.employee_last_name}`)
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif'),
                    Text(row.title_name)
                        .foregroundColor('rgb(99, 115, 129)')
                        .fontWeight('400')
                        .fontFamily('"Public Sans", sans-serif')
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
                            .fontFamily('"Public Sans", sans-serif')
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
                            .fontFamily('"Public Sans", sans-serif')
                    )
                ).resource('departments').filter({ 'id': row.department_id })
            )

        )
    },
    {
        title: 'Action',
        view: (employee: any) => (
            HStack({ alignment: cLeading })(
                MenuButton()
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
    }
]

export const UsersGrid = (users: any[]) => {


    // return ({ controller }) => (

    if (users == null)
        return Views.EmptyTableView(columns, Array.from({ length: 5 }), (employee: any, index) => {

            // controller.navigotor(`/app(tenantmanager)/company/edit/employee/${employee.id}/overview`, { state: { employee_info: employee } })
        })
    else
        return Views.TableView(columns, users, (employee: any, index) => {

            // controller.navigotor(`/app(tenantmanager)/company/edit/employee/${employee.id}/overview`, { state: { employee_info: employee } })
        })

    // )
}
