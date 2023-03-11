import { moment } from "@tuval/core"
import { UIRouteLink, HStack, Icon, VStack, cLeading, cHorizontal, Color, Text, Icons } from "@tuval/forms"
import { ITableViewColumn, Views } from "../../../../views/Views"


const columns: ITableViewColumn[] = [
    {
        title: 'Flow',
        key: 'flow_name',
        width: '50%',
        view: (flow: any) => (
            UIRouteLink(`/app/com.tuvalsoft.app.organizationmanager/workflow/flows/${flow.id}/model`)(
                HStack({ spacing: 15 })(
                    Icon(Icons.API).size(25),
                    VStack({ alignment: cLeading })(
                        Text('BPMN Diagram').fontSize(12).foregroundColor('rgb(128,128,128)'),
                        Text(flow.flow_name).fontSize(15).fontWeight('500').foregroundColor('rgb(59,59,59)'),
                        HStack({alignment:cLeading})(
                            Text('Latest run ').fontSize('10.66px').foregroundColor('rgb(162,162, 162)').fontWeight('400'),
                            Text('never').fontSize('10.66px').foregroundColor('rgb(108,117, 125)').fontWeight('600').padding(cHorizontal,5),
                            Text(', last completed date is').fontSize('10.66px').foregroundColor('rgb(162,162, 162)').fontWeight('400'),
                            Text('never').fontSize('10.66px').foregroundColor('rgb(108,117, 125)').fontWeight('600').padding(cHorizontal,5),
                        ).height(24)
                    ).padding(cHorizontal, 5)
                )
            ).width('100%')
        )
    },
    {
        title: 'Version',
        key: 'flow_version',
        width: '20%',

    },
    {
        title: 'Created At',
        width: '20%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(moment(row.created_at).fromNow()).fontSize('10pt')
                )
            )
        )
    },
    {
        title: 'Is Active',
        width: '10%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Activity).size(15)
                    .foregroundColor('#4cd964')
            )
        )

    },

    {
        title: 'Action',
        view: (flow: any) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: 'Model',
                        icon: Icons.Announcement,
                        tooltip: 'Model',
                        iconColor: '#505A64',
                        link: `/app/com.tuvalsoft.app.organizationmanager/workflow/flows/${flow.id}/model`
                    },
                    {
                        title: 'Edit',
                        icon: Icons.Edit,
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/company/employee/${flow.id}/edit`
                    },
                    {
                        title: 'Delete',
                        icon: Icons.Delete,
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        action: () => { }
                    }
                ])
            )
        )
    }
]

export const FlowsGrid = (users: any[]) => {


    if (users == null)
        return Views.EmptyTableView(columns, Array.from({ length: 5 }), (employee: any, index) => { })
    else
        return Views.TableView(columns, users, (employee: any, index) => { })
}
