import { UIController, UIView, Text, HStack, cTopLeading, UIDataTable, VStack, UIFormController } from "@tuval/forms";
import { LeftSideMenuView } from "../views/LeftMenu";
import { FormBuilder } from "../formbuilder/FormBuilder";

export class DashboardController extends UIFormController {

    public override LoadView(): UIView {

      
        this.GetFormData()
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Overview'),
                VStack(
                  Text(JSON.stringify(this.GetFormData())),
                    FormBuilder()
                ).padding().width(500)
               
                /* UIDataTable().model([{
                    name: 'test'
                }]) */
            )
        )
    }

}