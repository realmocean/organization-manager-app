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


import { IDepartment, IEmployee, useOrgProvider } from '@realmocean/common';
import { Views } from '../../../Views/Views';


export class DeleteDepartmentController extends UIController {

    private tenantName: string;

    @State()
    private deleting: boolean;

    @State()
    private department: IDepartment;

    public Invalidate() {
    }

    private isLoading() {
    }

    public BindRouterParams({ department_id }) {

        const orgService = useOrgProvider();
        orgService.getDepartmentById(department_id).then(result => {
            this.department = result;
        })

    }
    public BindModel() {

    }


    private action_Delete() {
        this.deleting = true;
        const orgService = useOrgProvider();
        orgService.deleteDepartment(this.department.Id).then(result =>
            this.navigotor('/app(tenantmanager)/department/list')
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
                                this.department ?
                                    ScrollView({ axes: cVertical, alignment: cTop })(
                                        VStack({ alignment: cTop, spacing: 10 })(

                                            Icon('\\e14b').fontSize(50).foregroundColor(Color.red),
                                            Text(`
## ${this.department?.Name}
### Are you sure you want to delete this employee?
- This cannot be undone
- Only Organization Managers can delete employees`)
                                                .render(RenderingTypes.Markdown)
                                            ,
                                            HStack({ alignment: cTrailing })(
                                                Button(
                                                    Text('Delete this department')
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