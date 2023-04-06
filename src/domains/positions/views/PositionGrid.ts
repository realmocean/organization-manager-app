import { HStack, Icon, VStack, cLeading, Color , Text, Icons} from "@tuval/forms"
import { ITableViewColumn, Views } from "../../../views/Views"
import { DeletePositionDialog } from "../dialogs/DeletePositionDialog"

const columns: ITableViewColumn[] = [
    {
        title: 'Position',
        width: '70%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Calendar).size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.position_name}`)
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
        view: (employee: any) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: Icons.Edit,
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/company/positions/${employee.id}/edit`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: Icons.Delete,
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        action: () => DeletePositionDialog.Show(employee.id),
                        linkState: { position: employee }
                    }
                ])
            )
        )
    }
]

export const PositionGrid = (positions: any[]) => (
    Views.TableView(columns, positions)
)