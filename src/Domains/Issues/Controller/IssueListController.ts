import {
    cHorizontal,
    cLeading,
    cTop,
    cTopLeading,
    cTrailing,
    cVertical,
    ForEach,
    HStack,
    Icon,
    IconLibrary,
    ScrollView,
    Spacer,
    Spinner,
    State,
    Text,
    TextAlignment,
    TextField,
    UIButton,
    UIController,
    UIImage,
    UIScene,
    VStack,
} from '@tuval/forms';
import { moment } from '@tuval/core';

import { UIButtonView } from '@realmocean/buttons'

import { Color, UIRouteLink } from '@tuval/forms';
import { ITenant, RealmBrokerClient, useOrgProvider } from '@realmocean/common';
import { ITableViewColumn, Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PHBhdGggZD0iTTExLjI4IDYuNzhhLjc1Ljc1IDAgMDAtMS4wNi0xLjA2TDcuMjUgOC42OSA1Ljc4IDcuMjJhLjc1Ljc1IDAgMDAtMS4wNiAxLjA2bDIgMmEuNzUuNzUgMCAwMDEuMDYgMGwzLjUtMy41eiI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDhBOCA4IDAgMTEwIDhhOCA4IDAgMDExNiAwem0tMS41IDBhNi41IDYuNSAwIDExLTEzIDAgNi41IDYuNSAwIDAxMTMgMHoiPjwvcGF0aD48L3N2Zz4='

const columns: ITableViewColumn[] = [
    {
        title: 'Issue Title',
        width: '40%',
        view: (issue: any) => {
            return (
                HStack({ alignment: cLeading, spacing: 10 })(
                    issue.state === 'closed' ? Icon('\\e86c').size(20).foregroundColor('#8250df') : Icon('\\ef64').size(20).foregroundColor('#1a7f37'),
                    Text(issue.title).multilineTextAlignment(TextAlignment.leading)
                )
            )
        }
    },
    {
        title: 'Type',
        width: '10%',
        view: (issue: any) => {
            return (
                VStack(
                    ...ForEach(issue.labels)((label: any) =>
                        label.name.indexOf('@') === -1 ? Text(label.name).foregroundColor(Color.white).background('#' + label.color)
                            .padding(5).fontSize(12).padding(cHorizontal, 10).cornerRadius(24) : null
                    )


                )
            )
        }
    },

    {
        title: 'Created At',
        width: '20%',
        view: (issue: any) => {
            return (
                Text(moment(issue.created_at).format('DD.MM.YYYY HH:mm:ss'))
            )
        }
    },
    {
        title: 'Closed At',
        width: '20%',
        view: (issue: any) => {
            return (
                issue.closed_at == null ? Text('') : Text(moment(issue.closed_at).format('DD.MM.YYYY HH:mm:ss'))
            )
        }
    },
    {
        title: 'State',
        key: "state"
    },
    {
        title: '',
        view: (tenant: any) => (
            HStack(
                Views.ActionContextMenu([
                    {
                        title: 'Accounts',
                        icon: IconLibrary.AccountCircle as any,
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(realmmanager)/tenant/${tenant.Id}/accounts`,
                        linkState: { position: tenant }
                    },
                    {
                        title: 'Edit',
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/employee/edit/${tenant.Id}`,
                        linkState: { position: tenant }
                    },
                    {
                        title: 'Delete',
                        icon: '\\d390',
                        tooltip: 'Delete',
                        iconColor: Color.red400 as any,
                        link: `/app(tenantmanager)/employee/delete/${tenant.Id}`,
                        linkState: { position: tenant }
                    }
                ])
            )
        )
    }
]

const _columns: ITableViewColumn[] = [
    {
        title: 'Code',
        key: "title",
        width:'33%'
    },
    {
        title: 'Name',
        key: "title",
        width:'66%'
    }
]

export class IssueListController extends UIController {

    @State()
    private issues: object[];

    @State()
    private showingIssues: object[];

    public BindRouterParams() {


        RealmBrokerClient.GetIssues('realmocean', 'organization-manager-app').then((result: object[]) => {
       
            this.showingIssues = this.issues = result;
        })
        //  }
    }

    private Search_Action(value: string): void {
        this.showingIssues = this.issues.filter((issue: any) => issue.Title.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
      
        return (
            Views.RightSidePage({
                title: 'Titles',
                content: (
                    HStack({ alignment: cTopLeading })(
                        this.showingIssues == null ?
                            VStack(Spinner()) :
                            VStack({ alignment: cTopLeading })(
                                HStack({ alignment: cLeading })(
                                    Text('Issues')
                                        .foregroundColor('#444')
                                        .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                                ).height().marginBottom('24px'),
                                HStack({ alignment: cLeading, spacing: 15 })(
                                    // MARK: Search Box
                                    HStack(
                                        TextField().placeholder('Search by issue title')
                                            .onTextChange((value) => this.Search_Action(value))
                                    ).height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                    Spacer(),
                                    Views.AcceptRouteButton({ label: 'New Issue', link: '/app(tenantmanager)/issue/new' })
                                ).height().marginBottom('24px'),
                                Views.TableView(columns,this.showingIssues)
                            )
                    )
                )
            })
        )
        
    }

}