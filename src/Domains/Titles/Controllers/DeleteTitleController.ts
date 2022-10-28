import {
    Button, cTop, cTopLeading, cTrailing,
    cVertical, HStack, Icon,
    RenderingTypes, ScrollView, Spinner,
    State,
    Text, UIController,
    UIScene,
    VStack
} from '@tuval/forms';


import { bindNavigate, Color } from '@tuval/forms';


import { IDepartment, IEmployee, IEmployeeTitle, IPosition, useOrgProvider } from '@realmocean/common';
import { Views } from '../../../Views/Views';


export class DeleteTitleController extends UIController {

    private tenantName: string;

    @State()
    private deleting: boolean;

    @State()
    private title: IEmployeeTitle;

    public Invalidate() {
    }

    private isLoading() {
    }

    public BindRouterParams({ title_id }) {
        
        const orgService = useOrgProvider();
        orgService.getTitleById(title_id).then(result => {
            this.title = result;
        })

    }

    private action_Delete() {
        this.deleting = true;
        const orgService = useOrgProvider();
        orgService.deleteTitle(this.title.Id).then(result =>
            this.navigotor('/app(tenantmanager)/title/list')
        )
    }
    

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return ({ AppController_ContextAction_SetController }) => {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        Views.RightSidePage({
                            title: `Delete Title`,
                            content: (
                                this.title ?
                                    ScrollView({ axes: cVertical, alignment: cTop })(
                                        VStack({ alignment: cTop, spacing: 10 })(

                                            Icon('\\e14b').fontSize(50).foregroundColor(Color.red),
                                            Text(`
## ${this.title?.Name}
### Are you sure you want to delete this title?
- This cannot be undone
- Only Organization Managers can delete title`)
                                                .render(RenderingTypes.Markdown)
                                            ,
                                            HStack({ alignment: cTrailing })(
                                                Button(
                                                    Text('Delete this title')
                                                )
                                                    .loading(this.deleting)
                                                    .color('danger')
                                                    .onClick(() => this.action_Delete())
                                            ).height(),
                                        ).padding('1rem')
                                            .width(600).height()
                                    )
                                    :
                                    Spinner()


                            )

                        })
                    )

                )
            )

        }
    }
}