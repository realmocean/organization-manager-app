
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext, UIRecordContext, UIRouteOutlet } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider, useSessionService } from '@realmocean/common';
import { RealmDataContext } from '../../../../Views/DataContexts';
import { Views } from '../../../../Views/Views';
import { AddUserDialog } from '../../../Users/Dialogs/AddUserDialog';
import { AccountsGridView } from '../Views/AccountsGridView';
import { AccountsViewLeftMenu } from '../Views/AccountsViewLeftMenu';



const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



export class AccountViewController extends UIController {

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
           
                UIRouteOutlet().width('100%').height('100%').padding(20)
          
            
        )
    }



}