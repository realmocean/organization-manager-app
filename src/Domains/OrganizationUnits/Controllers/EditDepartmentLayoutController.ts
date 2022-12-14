import { IDepartment, IEmployee, useOrgProvider, useSessionService } from '@realmocean/common';
import { cTopLeading, HStack, State, UIController, UIRouteOutlet, UIScene, Text, UIRecordContext, Spinner } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { RealmDataContext } from '../../../Views/DataContexts';
import { Views } from '../../../Views/Views';


export class EditDepartmentLayoutController extends UIController {

    @State()
    private departmentId: string;



    protected override BindRouterParams({ department_id, department_info }) {

        this.departmentId = department_id;


        /*   if (department_info == null) {
              const orgService = useOrgProvider();
  
              orgService.getDepartmentById(department_id).then(department => {
                  this.department_info = department;
              })
          } else {
              this.department_info = department_info;
          } */

    }

    public LoadView(): any {
        return (

            this.departmentId == null ? Spinner() :
                RealmDataContext(() =>
                    UIRecordContext(({ data }) =>
                        UIScene(
                            HStack({ alignment: cTopLeading })(
                                LeftSideMenuView('', 'Organization'),
                                Views.RightSidePage({
                                    title: data?.org_unit_name,
                                    showBackIcon: true,
                                    copyId: { label: 'Department ID', value: data?.id },
                                    tabview: Views.EmployeeEditTabView(),
                                    content: (
                                        UIRouteOutlet().width('100%').height('100%')
                                    )
                                })

                            )
                        )
                    )
                        .resource('departments')
                        .filter({ id: this.departmentId })
                )

        )
    }
}
