
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color } from '@tuval/forms';
import { RealmBrokerClient, IGetTitleResponse, IGetOrganizationUnitResponse, useOrgProvider, IDepartment } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { UsersGrid } from '../../Users/Views/UsersGrid';
import { TitleGrid } from '../../Titles/Views/TitleGrid';
import { OrganizationUnitGrid } from '../Views/OrganizationUnitGrid';
import { NewOrganizationUnitController } from './NewOrganizationUnitController';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class OrganizationUnitListController extends UIController {

    @State()
    private organizationUnits: IDepartment[];

    @State()
    private showingOrganizationUnits: any[];

    private isLoading(): boolean {
        return this.organizationUnits == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {
        //  if (this.tenants == null) {

        const orgService = useOrgProvider();

        orgService.getDepartments().then(titles => {
            this.showingOrganizationUnits = this.organizationUnits = titles;
        })
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
        return (
            HStack({ alignment: cTopLeading })(
                this.isLoading() ?
                    VStack(Spinner()) :
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading, spacing: 15 })(
                            // MARK: Search Box
                            HStack(
                                TextField().placeholder('Search by Department Name')
                                    .onTextChange((value) => this.Search_Action(value))
                            )
                                .background(Color.white)
                                .height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                            Spacer(),
                            Views.CreateButton({ label: 'New Organization Unit', action: ()=> NewOrganizationUnitController.Show().then(()=>{
                                this.organizationUnits = null;
                                const orgService = useOrgProvider();
                                orgService.getDepartments().then(deps =>
                                    this.showingOrganizationUnits = this.organizationUnits = deps
                                )
                            }) })
                        ).height().padding(24),
                        OrganizationUnitGrid(this.organizationUnits)
                    )
            )
        )
    }


}