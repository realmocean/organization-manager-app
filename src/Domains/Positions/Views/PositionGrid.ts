import { IEmployeeTitle, IGetTitleResponse, IPosition } from '@realmocean/common';
import { cLeading, Color, HStack, Icon, VStack, Text } from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';
import { DeletePositionDialog } from '../Dialogs/DeletePositionDialog';


const columns: ITableViewColumn[] = [
    {
        title: 'Position',
        width: '70%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon('\\d22d').size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.position_name}`)
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif'),
                   
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
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/company/positions/${employee.id}/edit`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
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

export const PositionGrid = (positions: IPosition[]) => (
    Views.TableView(columns, positions)
)