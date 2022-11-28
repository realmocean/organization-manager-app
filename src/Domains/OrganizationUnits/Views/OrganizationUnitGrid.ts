import { IDepartment, IGetOrganizationUnitResponse, IGetTitleResponse } from '@realmocean/common';
import { cLeading, Color, HStack, Icon, VStack , Text} from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';


const columns: ITableViewColumn[] = [
    {
        title: 'Department',
        width: '60%',
        view: (row: IDepartment) => (
            HStack({ spacing: 15 })(
                Icon('\\d200').size(25),
                VStack({ alignment: cLeading })(
                    Text(`${row.Name}`)
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif')
                )
            )
        )
    }
   /*  {
        title: '',
        view: (department: IDepartment) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/department/edit/${department.Id}`,
                        linkState: { position: department }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/department/delete/${department.Id}`,
                        linkState: { position: department }
                    }
                ])
            )
        )
    } */
]

export const OrganizationUnitGrid = (titles: IDepartment[]) => {

     // const controller:UIController = bindController();
     return ({ controller }) => (

        Views.TableView(columns, titles, (department: IDepartment, index) => {
           
            controller.navigotor(`/app(tenantmanager)/company/edit/department/${department.Id}/overview`, { state: { department_info: department } })
        })

    )

}