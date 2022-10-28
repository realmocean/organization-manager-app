import { IEmployeeTitle, IGetTitleResponse, IPosition } from '@realmocean/common';
import { cLeading, Color, HStack } from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';


const columns: ITableViewColumn[] = [
    {
        title: 'Code',
        key: "RecordId",
        width:'33%'
    },
    {
        title: 'Name',
        key: "Name",
        width:'66%'
    },
    {
        title: 'Action',
        view: (position: IPosition) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/position/edit/${position.Id}`,
                        linkState: { position: position }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete Title',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/position/delete/${position.Id}`,
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