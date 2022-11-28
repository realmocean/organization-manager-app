import { IEmployee } from '@realmocean/common';
import { HStack, Icon, Text, UIRouteLink, IconLibrary, VStack, cLeading, Color, UIContextMenu, ForEach, bindNavigate, bindController, UIController } from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';



const columns: ITableViewColumn[] = [
    {
        title: 'Employee',
        width: '60%',
        view: (row: IEmployee) => (
            HStack({ spacing: 15 })(
                Icon('\\ea67').size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.Name} ${row.LastName}`)
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif'),
                    Text(row.TitleName)
                        .foregroundColor('rgb(99, 115, 129)')
                        .fontWeight('400')
                        .fontFamily('"Public Sans", sans-serif')
                )
            )
        )
    },
    {
        title: 'Department',
        key: 'DepartmentName',
        width: '60%',
    },
    {
        title: '',
        view: (employee: IEmployee) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/employee/edit/${employee.Id}`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/employee/delete/${employee.Id}`,
                        linkState: { position: employee }
                    }
                ])
            )
        )
    }
]

export const UsersGrid = (users: any[]) => {
    // const controller:UIController = bindController();
    return ({ controller }) => (

        Views.TableView(columns, users, (employee: IEmployee, index) => {
            console.log(controller)
            controller.navigotor(`/app(tenantmanager)/company/edit/employee/${employee.Id}/overview`, { state: { employee_info: employee } })
        })

    )
}
