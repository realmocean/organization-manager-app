import { IEmployee } from '@realmocean/common';
import { HStack, Icon, Text, UIRouteLink, IconLibrary, VStack, cLeading, Color, UIContextMenu, ForEach, bindNavigate, bindController, UIController } from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';
import { QueryCache, useQuery, useQueryClient } from "@realmocean/data";

import { HttpClient } from '@tuval/core';
import { DeleteUserDialog } from '../Dialogs/DeleteEmployeeDialog';

const usePosts = () =>
  useQuery("posts", async () => {
    alert('')
   
    return {};
  });



const columns: ITableViewColumn[] = [
    {
        title: 'Employee',
        width: '60%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon('\\ea67').size(35),
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
        title: 'Department',
        key: 'DepartmentName',
        width: '60%',
    },
    {
        title: '',
        view: (employee: any) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/company/employee/${employee.id}/edit`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        action : () => DeleteUserDialog.Show(employee.id),
                        linkState: { position: employee }
                    }
                ])
            )
        )
    }
]

export const UsersGrid = (users: any[]) => {

    
    return ({ controller }) => (

        Views.TableView(columns, users, (employee: any, index) => {
           
           // controller.navigotor(`/app(tenantmanager)/company/edit/employee/${employee.id}/overview`, { state: { employee_info: employee } })
        })

    )
}
