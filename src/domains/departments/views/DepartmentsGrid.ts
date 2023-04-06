import { HStack, Icon, VStack, cLeading, Color, Text } from "@tuval/forms"
import { ITableViewColumn, Views } from "../../../views/Views"


const columns: ITableViewColumn[] = [
    {
        title: 'Department',
        width: '70%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                //Icon('\\d200').size(20),
                VStack({ alignment: cLeading })(
                    Text(`${row.org_unit_name}`)
                        .fontWeight('600')
                       
                )
            )
        )
    },
    {
        title: 'Last Modified',
        width: '30%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(`${row.updated_at}`)
                )
            )
        )
    },
    {
        title: 'Action',
        view: (department: any) => (
            HStack({ alignment: cLeading })(
               /*  Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/company/departments/${department.id}/edit`,
                        linkState: { position: department }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        //action: () => DeleteDepartmentDialog.Show(department.id),
                        linkState: { position: department }
                    }
                ]) */
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

export const DepartmentsGrid = (titles: any[]) => {

     // const controller:UIController = bindController();
    // return ({ controller }) => (

       return  Views.TableView(columns, titles, (department: any, index) => {
           
           // controller.navigotor(`/app(tenantmanager)/company/edit/department/${department.Id}/overview`, { state: { department_info: department } })
        })

   // )

}