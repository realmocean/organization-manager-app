import { UIController, UIView, Text, HStack, cTopLeading, UIDataTable } from "@tuval/forms";
import { LeftSideMenuView } from "../views/LeftMenu";

export class DashboardController extends UIController {

    public override LoadView(): UIView {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Overview'),
                /* UIDataTable().model([{
                    name: 'test'
                }]) */
            )
        )
    }

}