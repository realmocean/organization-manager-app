import { UIController, UIView, VStack, Text, UIRouteOutlet, HStack, cTopLeading } from '@tuval/forms';
import { LeftSideMenuView } from "../views/LeftMenu";

export class LayoutController extends UIController {

    public override LoadView(): UIView {
        window.document.title = "Organization Manager";
        return (
            HStack({ alignment: cTopLeading })(
               // LeftSideMenuView('', 'Organization'),
                UIRouteOutlet().width("100%").height("100%")
            )
        )

    }

}