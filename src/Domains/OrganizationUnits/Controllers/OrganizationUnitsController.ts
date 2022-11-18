import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';


export class OrganizationUnitsController extends UIController {

    public LoadView(): any {
            return (
                UIRouteOutlet().width('100%').height('100%')
            )
        }
}