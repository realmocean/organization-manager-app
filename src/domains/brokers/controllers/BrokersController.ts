import { UIController, UIScene, HStack, cTopLeading, UIRouteOutlet } from "@tuval/forms";
import { LeftSideMenuView } from "../../../views/LeftMenu";

export class BrokersController extends UIController {

    public LoadView(): any {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        LeftSideMenuView('', 'Installed Brokers'),
                        UIRouteOutlet().width('100%').height('100%')
                    )
                )
            )
        }
}
