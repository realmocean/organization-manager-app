import { ITableViewColumn } from '../../../Views/Views';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIRouteLink, Color } from '@tuval/forms';
import { moment } from '@tuval/core';
import { Views } from '../../../Views/Views';
import { IEmployeeTitle, IGetTitleResponse } from '@realmocean/common';


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
        view: (title: IEmployeeTitle) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/title/edit/${title.Id}`,
                        linkState: { title: title }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete Title',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/title/delete/${title.Id}`,
                        linkState: { title: title }
                    }
                ])
            )
        )
    }
]

export const TitleGrid = (titles: IEmployeeTitle[]) => (
    Views.TableView(columns, titles)
)