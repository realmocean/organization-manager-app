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


import { IDepartment, IEmployee, IPosition, useOrgProvider } from '@realmocean/common';
import { Views } from '../../../Views/Views';


export class DeletePositionController extends UIController {

    private tenantName: string;

    @State()
    private deleting: boolean;

    @State()
    private position: IPosition;

    public Invalidate() {
    }

    private isLoading() {
    }

    public BindRouterParams({ position_id }) {
        
        const orgService = useOrgProvider();
        orgService.getPosition(position_id).then(result => {
            this.position = result;
        })

    }

    private action_Delete() {
        this.deleting = true;
        const orgService = useOrgProvider();
        orgService.deletePosition(this.position.Id).then(result =>
            this.navigotor('/app(tenantmanager)/position/list')
        )
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return ({ AppController_ContextAction_SetController }) => {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        Views.RightSidePage({
                            title: `Delete Department`,
                            content: (
                                this.position ?
                                    ScrollView({ axes: cVertical, alignment: cTop })(
                                        VStack({ alignment: cTop, spacing: 10 })(

                                            Icon('\\e14b').fontSize(50).foregroundColor(Color.red),
                                            Text(`
## ${this.position?.Name}
### Are you sure you want to delete this position?
- This cannot be undone
- Only Organization Managers can delete position`)
                                                .render(RenderingTypes.Markdown)
                                            ,
                                            HStack({ alignment: cTrailing })(
                                                Button(
                                                    Text('Delete this position')
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


                                /*  VStack({ alignment: cTopLeading, spacing: 10 })(
                                     Views.InputTextView('Full Name *', 'Enter a name', $(this.accountName), true, $(this.isAccountNameInvalid), 'Name is required.', this.formPostTried),
                                     Views.EmailInputView('Email Address *', 'Enter email address', $(this.accountEmail), $(this.isAccountEmailInvalid), this.formPostTried),
                                     Views.InputPasswordView('Password *', 'Enter a password', $(this.accountPassword), true, $(this.isAccountPasswordInvalid), 'Password required.', this.formPostTried),
                                     Views.SwitchView('Is Tenant Admin', $(this.isTenantAdmin)),
                                     Views.AcceptButton({ label: 'Create Account', action: () => this.ActionPost() }),

                                 ).background(Color.white) */
                            )

                        })
                    )

                )
            )

        }
    }
}