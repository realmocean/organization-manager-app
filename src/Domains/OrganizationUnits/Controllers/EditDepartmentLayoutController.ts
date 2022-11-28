import { IDepartment, IEmployee, useOrgProvider } from '@realmocean/common';
import { cTopLeading, HStack, State, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';


export class EditDepartmentLayoutController extends UIController {

    @State()
    private departmentId: string;

    @State()
    private department_info: IDepartment;

    public IsLoading() {
        return this.department_info == null;
    }

    protected override BindRouterParams({ department_id, department_info }) {

        this.departmentId = department_id;
     

        if (department_info == null) {
            const orgService = useOrgProvider();

            orgService.getDepartmentById(department_id).then(department => {
                this.department_info = department;
            })
        } else {
            this.department_info = department_info;
        }

    }

    public LoadView(): any {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Organization'),
                    Views.RightSidePage({
                        title: this.department_info?.Name ,
                        showBackIcon: true,
                        copyId: { label: 'Department ID', value: this.departmentId },
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
