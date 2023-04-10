import { HStack, Icon, VStack, cLeading, Color, Text, IDataTableColumn, Icons, MenuButton, UIViewBuilder, cCenter, useNavigate, UIDataTable } from "@tuval/forms"
import { ITableViewColumn, Views } from "../../../views/Views"
import { moment } from "@tuval/core"
import { DeleteUserDialog } from "../../users/dialogs/DeleteUserDialog"
import { DeleteDepartmentDialog } from "../dialogs/DeleteDepartmentDialog"


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

const _columns: IDataTableColumn[] = [
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
                                    onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/department/${department.id}`)
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
]

export const DepartmentsGrid = (titles: any[]) => {

     // const controller:UIController = bindController();
    // return ({ controller }) => (

       return  (
       
            HStack(
                UIDataTable()
                    .columns(_columns)
                    .model(titles).width('100%')
            ).border('solid 1px #DEE2E6').cornerRadius(10).overflow('hidden')
      
       )

   // )

}