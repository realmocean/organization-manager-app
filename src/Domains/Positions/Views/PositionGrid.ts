import { IEmployeeTitle, IGetTitleResponse, IPosition } from '@realmocean/common';
import { cLeading, Color, HStack, Icon, VStack, Text } from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';


const columns: ITableViewColumn[] = [
    {
        title: 'Position',
        width: '60%',
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
        title: 'Action',
        view: (position: any) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/position/edit/${position.id}`,
                        linkState: { position: position }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete Title',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/position/delete/${position.id}`,
                        linkState: { position: position }
                    }
                ])
            )
        )
    }
]

export const PositionGrid = (positions: IPosition[]) => (
    Views.TableView(columns, positions)
)