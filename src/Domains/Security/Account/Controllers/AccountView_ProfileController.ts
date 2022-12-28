
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext, UIRecordContext, UIRouteOutlet, cHorizontal, ScrollView, cVertical } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider, useSessionService } from '@realmocean/common';
import { RealmDataContext } from '../../../../Views/DataContexts';
import { Views } from '../../../../Views/Views';
import { AddUserDialog } from '../../../Users/Dialogs/AddUserDialog';
import { AccountsGridView } from '../Views/AccountsGridView';
import { AccountsViewLeftMenu } from '../Views/AccountsViewLeftMenu';
import { AccountViewTopView } from '../Views/AccountViewTopView';
import { UITextBoxView } from '@realmocean/inputs';



const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



export class AccountView_ProfileController extends UIController {

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
                VStack({ alignment: cTop })(
                    VStack(
                        AccountViewTopView(),
                        HStack({ alignment: cTopLeading })(
                            AccountsViewLeftMenu('Profile'),
                            VStack({ alignment: cTopLeading })(
                                RealmDataContext(() =>
                                    UIRecordContext(({ data, isLoading }) =>
                                        ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                            VStack({ alignment: cTopLeading, spacing: 16 })(
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Profile Photo'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Formatted Name'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Honorific Prefix'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('First Name'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Middle Name'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Last Name'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Honorific Suffix'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Gender'),
                                                UITextBoxView()
                                                    .width(300)
                                                    .placeholder('Birth Date'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Mobile Phone'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Home Phone'),
                                                UITextBoxView()
                                                    .width('100%')
                                                    .placeholder('Personal Email'),
                                              
                                            ).padding(cHorizontal, 10)
                                        )

                                    ).resource('account').filter({ 'id': this.account_id })
                                )
                            ).padding(cHorizontal, 10)
                        )
                    ).maxWidth('1420px')
                )

        )
    }



}