import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';


export class CompanyController extends UIController {

    public LoadView(): any {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        LeftSideMenuView('', 'Organization'),
                        Views.RightSidePage({
                            title: 'Organization',
                            tabview: Views.CompanyTabView(),
                            content: (
                                UIRouteOutlet().width('100%').height('100%')
                            )
                        })
                        
                    )
                )
            )
        }
}