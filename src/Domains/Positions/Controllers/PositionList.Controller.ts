import {
    cLeading, cTopLeading, HStack, Spacer, Spinner, State, TextField,
    UIController, VStack, UIButton, Text
} from '@tuval/forms';



import {
    IGetTitleResponse, RealmBrokerClient,
    EmployeeUIService, useOrgProvider, IEmployeeTitle, useOrgUIProvider
} from '@realmocean/common';
import { Views } from '../../../Views/Views';
import { PositionGrid } from '../Views/PositionGrid';
import { AddUserDialog } from '../../Users/Dialogs/AddUserDialog';
import { AddPositionDialog } from '../Dialogs/AddPositionDialog';


const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class PositionListController extends UIController {

    @State()
    private checked: boolean;


    @State()
    private label: string;

    @State()
    private positions: IEmployeeTitle[];

    @State()
    private showingPositions: IEmployeeTitle[];

    private isLoading(): boolean {
        return this.positions == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {
        const orgProv = useOrgProvider();
        //  if (this.tenants == null) {
        orgProv.getPositions(0, 10).then(positions => {
            this.showingPositions = this.positions = positions;
        })
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    private action_SelectPosition() {
        const orgUIProv = useOrgUIProvider();
        orgUIProv.selectDepartment(true).then(result => {
            alert(JSON.stringify(result))
        });
    }

    public LoadView(): any {
        return (
            HStack({ alignment: cTopLeading })(
                this.isLoading() ?
                    VStack(Spinner()) :
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading, spacing: 15 })(
                            // MARK: Search Box

                            TextField().placeholder('Search by Position Name')
                                .onTextChange((value) => this.Search_Action(value))
                            ,
                            Spacer(),
                            Views.CreateButton({
                                label: 'New Position', action: () => AddPositionDialog.Show().then(() => {
                                    this.positions = null;
                                    const orgService = useOrgProvider();
                                    orgService.getPositions(0, 200).then(positions =>
                                        this.showingPositions = this.positions = positions
                                    )
                                })
                            })
                        ).height().padding(24),
                        PositionGrid(this.positions)
                    )
            )
        )
    }
}