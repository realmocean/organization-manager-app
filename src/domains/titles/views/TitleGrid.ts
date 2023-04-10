import { moment } from "@tuval/core"
import { HStack, IDataTableColumn, Icons, MenuButton, Text, UIDataTable, UIViewBuilder, VStack, cCenter, cLeading, useNavigate } from "@tuval/forms"
import { DeleteTitleDialog } from "../dialogs/DeleteTitleDialog"


const _columns: IDataTableColumn[] = [
    {
        field: 'title_name',
        header: 'Title',
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
                                    onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/title/${department.id}`)
                                },
                                {
                                    title: 'Delete',
                                    icon: Icons.Delete,
                                    onClick: () => DeleteTitleDialog.Show(department.id)
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

export const TitleGrid = (titles: any[]) => {

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