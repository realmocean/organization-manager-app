import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';


export class UsersController extends UIController {

    public BindModel() {

    }

    public LoadView(): any {
        return ({ AppController_ContextAction_SetController }) => {
            return (
                UIRouteOutlet().width('100%').height('100%')
            )
        }
    }
}
