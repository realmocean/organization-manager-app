import { cLeading, Color, cTopLeading, HStack, Text, UIController, UIView, VStack, ZStack } from '@tuval/forms';
import { Routes } from './views/Routes';
import { UISidebarProvider } from '@realmocean/navigations';


export class MyTestController extends UIController {


    public override LoadView(): UIView {

        //  const zstack =  ZStack({"alignment":"cTopLeading"} as any);

        return (
            UISidebarProvider(
                /*  ZStack({ alignment: cTopLeading })(
                     Text("ZSTACK TEST")
                 ).background(Color.blue) */
                VStack(
                    Routes()
                )
                    .background('var(--primary-background-color)')
            )
        )
    }

}