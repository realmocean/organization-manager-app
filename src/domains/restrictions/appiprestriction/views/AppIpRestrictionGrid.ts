import { HStack, Icon, Icons, VStack, cLeading, UIRecordContext, MenuButton , Text} from "@tuval/forms"
import { RealmDataContext } from "../../../../views/DataContexts"
import { ITableViewColumn, Views } from "../../../../views/Views"


const columns: ITableViewColumn[] = [
    {
        title: 'Title',
        width: '40%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Announcement).size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.employee_name} ${row.employee_last_name}`)
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif'),
                    Text(row.title_name)
                        .foregroundColor('rgb(99, 115, 129)')
                        .fontWeight('400')
                        .fontFamily('"Public Sans", sans-serif')
                )
            )
        )

    },
    {
        title: 'App',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },
    {
        title: 'Start Ip',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },

    {
        title: 'End Ip',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },

    {
        title: 'Start Port',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },

    {
        title: 'End Port',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },

    {
        title: 'Restriction Type',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    },
    {
        title: 'Create Date',
        width: '30%',
        view: (row: any) => (
            RealmDataContext(
                UIRecordContext(({ data }) =>
                    VStack({ alignment: cLeading })(
                        Text(`${data?.title_name}`)
                            .fontFamily('"Public Sans", sans-serif')
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                ).resource('titles').filter({ 'id': row.title_id })
            )

        )
    }
]

export const AppIpRestrictionGrid = (users: any[]) => {


    // return ({ controller }) => (

    if (users == null)
        return Views.EmptyTableView(columns, Array.from({ length: 5 }), (employee: any, index) => {

            // controller.navigotor(`/app(tenantmanager)/company/edit/employee/${employee.id}/overview`, { state: { employee_info: employee } })
        })
    else
        return Views.TableView(columns, users, (employee: any, index) => {

            // controller.navigotor(`/app(tenantmanager)/company/edit/employee/${employee.id}/overview`, { state: { employee_info: employee } })
        })

    // )
}
