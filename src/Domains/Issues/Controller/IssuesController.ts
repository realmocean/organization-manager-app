import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';


export class IssuesController extends UIController {

    public LoadView(): any {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        LeftSideMenuView('', 'Issues'),
                        UIRouteOutlet().width('100%').height('100%')
                    )
                )
            )
        }
}
