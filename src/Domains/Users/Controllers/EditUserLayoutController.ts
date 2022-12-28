import { IEmployee, useOrgProvider } from '@realmocean/common';
import { cTopLeading, HStack, Spinner, State, UIController, UIRecordContext, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { RealmDataContext } from '../../../Views/DataContexts';
import { Views } from '../../../Views/Views';


export class EditUserLayoutController extends UIController {

    @State()
    private employeeId: string;


    protected override BindRouterParams({ employee_id, employee_info }) {
        
        this.employeeId = employee_id;


        /* if (employee_info == null) {
            const orgService = useOrgProvider();

            orgService.getEmployeeById(employee_id).then(employee => {
                this.employee_info = employee;
            })
        } else {
            this.employee_info = employee_info;
        } */

    }

    public LoadView(): any {
        return (
            this.employeeId == null ? Spinner() :
            RealmDataContext(() =>
                UIRecordContext(({ data, isLoading }) =>
                    isLoading ? Spinner() :
                        UIScene(
                            HStack({ alignment: cTopLeading })(
                                LeftSideMenuView('', 'Organization'),
                                Views.RightSidePage({
                                    title: data.employee_name + ' ' + data.employee_last_name,
                                    showBackIcon: true,
                                    copyId: { label: 'User ID', value: data.id },
                                    tabview: Views.EmployeeEditTabView(),
                                    content: (
                                        UIRouteOutlet().width('100%').height('100%')
                                    )
                                })

                            )
                        )
                ).resource('employee').filter({id:this.employeeId})

            )

        )
    }
}
