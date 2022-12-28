import { IEmployee } from '@realmocean/common';
import { HStack, Icon, Text, UIRouteLink, IconLibrary, VStack, cLeading, Color, UIContextMenu, ForEach, bindNavigate, bindController, UIController, UIRecordContext, cHorizontal } from '@tuval/forms';


import { QueryCache, useQuery, useQueryClient } from "@realmocean/data";

import { HttpClient } from '@tuval/core';
import { ITableViewColumn, Views } from '../../../../Views/Views';

const usePosts = () =>
    useQuery("posts", async () => {
        alert('')

        return {};
    });



const columns: ITableViewColumn[] = [
    {
        title: 'Name',
        width: '50%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon('\\ea67').size(35),

                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.account_first_name} ${data?.account_last_name}`)
                            .fontFamily('"Public Sans", sans-serif'),
                        Text(`${data?.account_email}`)
                            .fontFamily('"Public Sans", sans-serif')
                    )
                ).resource('account').filter({ 'id': row.account_id })

            )
        )

    },
    {
        title: 'Latest login',
        width: '20%',
        view: (row: any) => (

            VStack({ alignment: cLeading })(
                UIRecordContext(({ data }) =>
                    Text(`5 minutes ago`)
                        .fontFamily('"Public Sans", sans-serif')
                ).resource('account').filter({ 'id': row.account_id })
            )

        )

    },
    {
        title: 'Source',
        width: '20%',
        view: (row: any) => (

            VStack({ alignment: cLeading })(
                UIRecordContext(({ data }) =>
                    Text(`Internal`)
                        .fontFamily('"Public Sans", sans-serif')
                ).resource('account').filter({ 'id': row.account_id })
            )

        )

    },
    {
        title: 'Status',
        width: '10%',
        view: (row: any) => (

            VStack({ alignment: cLeading })(
                UIRecordContext(({ data }) =>
                    Text(`ENABLED`)
                        .fontSize('75%')
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif')
                ).resource('account').filter({ 'id': row.account_id })
            )
                .height().width()
                .padding(cHorizontal, 5).background('#d7fbe3').foregroundColor('#157435').cornerRadius(3)

        )

    },
    {
        title: '',
        view: (employee: any) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/employee/edit/${employee.id}`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        linkState: { position: employee }
                    }
                ])
            )
        )
    }
]

export const AccountsGridView = (accounts: any[]) => {


    return ({ controller }) => (

        Views.TableView(columns, accounts, (account: any, index) => {

            controller.navigotor(`/app(tenantmanager)/security/account/view/${account.account_id}/details`, { state: { employee_info: account } })
        })

    )
}
