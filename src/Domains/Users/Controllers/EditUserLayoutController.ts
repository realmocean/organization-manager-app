import { IEmployee, useOrgProvider } from '@realmocean/common';
import { cTopLeading, HStack, State, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';


export class EditUserLayoutController extends UIController {

    @State()
    private employeeId: string;

    @State()
    private employee_info: IEmployee;

    public IsLoading() {
        return this.employee_info == null;
    }

    protected override BindRouterParams({ employee_id }) {

        this.employeeId = employee_id;

        const orgService = useOrgProvider();

        orgService.getEmployeeById(employee_id).then(employee => {
            this.employee_info = employee;
        })

    }

    public LoadView(): any {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Organization'),
                    Views.RightSidePage({
                        title: this.employee_info?.Name,
                        showBackIcon: true,
                        copyId:{label: 'User ID', value: this.employeeId},
                        tabview: Views.EmployeeEditTabView(),
                        content: (
                            UIRouteOutlet().width('100%').height('100%')
                        )
                    })

                )
            )
        )
    }
}
