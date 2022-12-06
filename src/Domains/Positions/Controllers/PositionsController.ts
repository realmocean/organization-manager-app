import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';


export class PositionsController extends UIController {

    public LoadView(): any {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Positions'),
                    UIRouteOutlet().width('100%').height('100%').minWidth("")
                )
            )
        )
    }
}
