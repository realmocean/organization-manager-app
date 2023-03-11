import { UIController, UIScene, HStack, cTopLeading, UIRouteOutlet } from "@tuval/forms";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";

export class CompanyController extends UIController {

    public LoadView(): any {
        
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        Views.RightSidePage({
                            title: 'Organization',
                            maxWidth:'1400px',
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