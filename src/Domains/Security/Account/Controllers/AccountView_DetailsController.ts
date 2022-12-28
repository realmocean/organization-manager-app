
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext, UIRecordContext, UIRouteOutlet, cHorizontal } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider, useSessionService } from '@realmocean/common';
import { RealmDataContext } from '../../../../Views/DataContexts';
import { Views } from '../../../../Views/Views';
import { AddUserDialog } from '../../../Users/Dialogs/AddUserDialog';
import { AccountsGridView } from '../Views/AccountsGridView';
import { AccountsViewLeftMenu } from '../Views/AccountsViewLeftMenu';
import { AccountViewTopView } from '../Views/AccountViewTopView';



const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



export class AccountView_DetailsController extends UIController {

    @State()
    private account_id: string;

    public BindRouterParams({ account_id }) {
        this.account_id = account_id;

    }

    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {

        return (
            this.account_id == null ? Spinner() :
                VStack(
                    AccountViewTopView(),
                    HStack({ alignment: cTopLeading })(
                        AccountsViewLeftMenu('Details'),
                        VStack({ alignment: cTopLeading })(
                            RealmDataContext(() =>
                                UIRecordContext(({ data, isLoading }) =>
                                    isLoading ? null :
                                        VStack({ alignment: cTopLeading })(
                                            //State
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('State')
                                                )
                                                .height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('Enabled')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),

                                            // Login Type
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('Login Type')
                                                ).height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('Form')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),

                                            // Is Multi-Factor Enabled
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('Is Multi-Factor Enabled')
                                                ).height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('NO')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),

                                            // Language / Time Zone
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('Language / Time Zone')
                                                ).height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('/')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),

                                            // Source and Key
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('Source and Key')
                                                ).height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('/')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),

                                            // Created
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('Created')
                                                ).height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('/')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),

                                            // Updated
                                            HStack(
                                                HStack({ alignment: cLeading })(
                                                    Text('Updated')
                                                ).height().width('30%'),
                                                HStack({ alignment: cLeading })(
                                                    Text('/')
                                                ).height().width('70%')
                                            )
                                            .padding('12px 16px')
                                            .height(44).borderBottom('solid 1px #dddddd6b'),


                                        )
                                            .border('1px solid rgba(0, 0, 0, 0.125)')
                                ).resource('account').filter({ 'id': this.account_id })
                            )
                        ).padding(cHorizontal, 10)
                    )
                )
        )
    }



}