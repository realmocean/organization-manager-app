import { $, Binding, bindNavigate, cTopLeading, State, UIController, UIScene, VStack } from '@tuval/forms';

import { RealmBrokerClient } from '@realmocean/common';
import { Views } from '../../../Views/Views';


export class NewOrganizationUnitController extends UIController {

    @State()
    private formPostTried: boolean;

    @Binding()
    private organizationUnitRecordId: string;

    @Binding(true)
    private isOrganizationUnitRecordId: boolean;

    @Binding()
    private organizationUnitName: string;

    @Binding(true)
    private isOrganizationUnitName: boolean;

    private ActionPost() {
        debugger;
        console.log(this.isOrganizationUnitRecordId, ' ', this.isOrganizationUnitName);
        if (this.isOrganizationUnitRecordId || this.isOrganizationUnitName) {
            this.formPostTried = true;
        } else {
            RealmBrokerClient.CreateOrganizationUnit(this.organizationUnitRecordId, this.organizationUnitName).then(() => {
                this.navigotor('/app(tenantmanager)/department/list', { replace: true });
            })
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return (
            UIScene(
                Views.FormView({
                    header: `New Department`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Department Record ID *', 'Department Record ID *', $(this.organizationUnitRecordId), true, $(this.isOrganizationUnitRecordId), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Name *', $(this.organizationUnitName), true, $(this.isOrganizationUnitName), 'Name is required.', this.formPostTried),

                            Views.AcceptButton({ label: 'Create Department', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}