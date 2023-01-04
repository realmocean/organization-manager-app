import { ITableViewColumn } from '../../../Views/Views';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIRouteLink, Color } from '@tuval/forms';
import { moment } from '@tuval/core';
import { Views } from '../../../Views/Views';
import { IEmployeeTitle, IGetTitleResponse } from '@realmocean/common';
import { DeleteTitleDialog } from '../Dialogs/DeleteTitleDialog';


const columns: ITableViewColumn[] = [
    {
        title: 'Code',
        key: "title_record_id",
        width:'33%'
    },
    {
        title: 'Name',
        key: "title_name",
        width:'66%'
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
                        link: `/app(tenantmanager)/company/titles/${employee.id}/edit`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        action: () => DeleteTitleDialog.Show(employee.id),
                        linkState: { position: employee }
                    }
                ])
            )
        )
    }
]

export const TitleGrid = (titles: IEmployeeTitle[]) => (
    Views.TableView(columns, titles)
)