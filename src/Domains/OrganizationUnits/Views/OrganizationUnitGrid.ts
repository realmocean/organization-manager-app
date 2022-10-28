import { IDepartment, IGetOrganizationUnitResponse, IGetTitleResponse } from '@realmocean/common';
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
    }
]

export const OrganizationUnitGrid = (titles: IDepartment[]) => {
    return Views.TableView(columns, titles)
}