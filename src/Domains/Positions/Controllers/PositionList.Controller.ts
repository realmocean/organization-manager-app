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
        orgUIProv.selectDepartment(true).then( result => {
            alert(JSON.stringify(result))
        });
    }

    public LoadView(): any {
        return (
            Views.RightSidePage({
                title: 'Positions',
                content: (
                    HStack({ alignment: cTopLeading })(
                        this.isLoading() ?
                            VStack(Spinner()) :
                            VStack({ alignment: cTopLeading })(
                                HStack({ alignment: cLeading, spacing: 15 })(
                                    // MARK: Search Box
                                    HStack(
                                        TextField().placeholder('Search by Position Name')
                                            .onTextChange((value) => this.Search_Action(value))
                                    ).height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                    Spacer(),
                                    Views.AcceptRouteButton({ label: 'New Position', link: '/app(tenantmanager)/position/add' }),
                                    // UICheckBox().checked(this.checked).label(this.label).change((args) => this.checked = args.checked),
                                    UIButton(
                                        Text('BBB')
                                    ).action(() => this.action_SelectPosition())
                                ).height().marginBottom('24px'),
                                PositionGrid(this.positions)
                            )
                    )
                )
            })
        )
    }
}