import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';


export class BrokersController extends UIController {

    public LoadView(): any {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        LeftSideMenuView('', 'Brokers'),
                        UIRouteOutlet().width('100%').height('100%')
                    )
                )
            )
        }
}
