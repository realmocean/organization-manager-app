import { moment } from "@tuval/core"
import { HStack, Icon, VStack, cLeading, Text, Icons } from "@tuval/forms"
import { ITableViewColumn, Views } from "../../../views/Views"


const columns: ITableViewColumn[] = [
    {
        title: '',
        width: '10%',
        view: (row: any) => (
            HStack({ spacing: 2 })(
                HStack(
                    Icon(Icons.Locked).size(15)

                )
                    .background({ hover: '#e0e0e0' })
                    .padding(5).cornerRadius(3)
                    .transition('color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out')
                    .width().height().tooltip('Details'),
                HStack(
                    Icon(Icons.Locked).size(15)
                )
                    .background({ hover: '#e0e0e0' })
                    .padding(5).cornerRadius(3)
                    .transition('color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out')
                    .width().height().tooltip('Close Session'),
                HStack(
                    Icon(Icons.Locked).size(15)

                ).width().height().tooltip('Lock Session')
                    .background({ hover: '#e0e0e0' })
                    .padding(5).cornerRadius(3)
                    .transition('color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out')
            )
        )
    },
    {
        title: 'Account',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(`${row.account_name}`)
                        .fontWeight('600')
                        .fontFamily('"Public Sans", sans-serif')
                )
            )
        )
    },
    {
        title: 'Started',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(moment(row.creation_date).fromNow()).fontSize('10pt')

                )
            )
        )
    },
    {
        title: 'Updated',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(moment(row.creation_date).fromNow()).fontSize('10pt')
                )
            )
        )
    },
    {
        title: 'Expiration',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(moment(row.creation_date).fromNow()).fontSize('10pt')
                )
            )
        )
    },
    {
        title: 'Browser',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 5 })(

                Text(`${row.client_browser_family}`).fontSize('10pt'),
                Text(`${row.client_browser_version}`).fontSize('80%')
            )

        )
    },
    {
        title: 'Expired',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Locked).size(15)
                    .foregroundColor('#DBDBDB')

            )
        )
    },
    {
        title: 'Locked',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Locked).size(15)
                    .foregroundColor('#4cd964')

            )
        )
    },
    {
        title: 'Permanent',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Locked).size(15)
                    .foregroundColor('#DBDBDB')

            )
        )
    }
    /*  {
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
     } */
]

export const SessionsGrid = (titles: any[]) => {

    // const controller:UIController = bindController();
    // return ({ controller }) => (

    return Views.TableView(columns, titles, (department: any, index) => {

        // controller.navigotor(`/app(tenantmanager)/company/edit/department/${department.Id}/overview`, { state: { department_info: department } })
    })

    // )

}