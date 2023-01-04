import { IDepartment, IEmployee, useOrgProvider, useSessionService } from '@realmocean/common';
import { cTopLeading, HStack, State, UIController, UIRouteOutlet, UIScene, Text, UIRecordContext, Spinner } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { RealmDataContext } from '../../../Views/DataContexts';
import { Views } from '../../../Views/Views';


export class EditPositionLayoutController extends UIController {

    @State()
    private positionId: string;



    protected override BindRouterParams({ position_id }) {

        this.positionId = position_id;


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

            this.positionId == null ? Spinner() :
                RealmDataContext(() =>
                    UIRecordContext(({ data }) =>
                        UIScene(
                            HStack({ alignment: cTopLeading })(
                                LeftSideMenuView('', 'Position'),
                                Views.RightSidePage({
                                    title: data?.position_name,
                                    showBackIcon: true,
                                    copyId: { label: 'Position ID', value: data?.id },
                                    tabview: Views.EmployeeEditTabView(),
                                    content: (
                                        UIRouteOutlet().width('100%').height('100%')
                                    )
                                })

                            )
                        )
                    )
                        .resource('positions')
                        .filter({ id: this.positionId })
                )

        )
    }
}
