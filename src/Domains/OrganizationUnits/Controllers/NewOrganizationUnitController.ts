import { $, Binding, bindNavigate, cTopLeading, HStack, State, UIController, UIScene, VStack, Text, cTrailing, Icon, Spacer } from '@tuval/forms';

import { RealmBrokerClient } from '@realmocean/common';
import { Views } from '../../../Views/Views';
import { DialogController } from '../../../ControllerDialog';


export class NewOrganizationUnitController extends DialogController {

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

    private action_create() {
     
        console.log(this.isOrganizationUnitRecordId, ' ', this.isOrganizationUnitName);
        if (this.isOrganizationUnitRecordId || this.isOrganizationUnitName) {
            this.formPostTried = true;
        } else {
            RealmBrokerClient.CreateOrganizationUnit(this.organizationUnitRecordId, this.organizationUnitName).then(() => {
                this.OnOKClick()
            })
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return (

            VStack({ alignment: cTopLeading, spacing: 10 })(
                HStack({ alignment: cTopLeading })(
                    Text('Create Department').fontSize(24).fontWeight('500'),
                    Spacer(),
                    Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                ).height(50),

                VStack({ alignment: cTopLeading, spacing: 15 })(
                    Views.InputTextView('Department Record ID *', 'Department Record ID *', $(this.organizationUnitRecordId), true, $(this.isOrganizationUnitRecordId), 'ID is required.', this.formPostTried),
                    Views.InputTextView('Name *', 'Name *', $(this.organizationUnitName), true, $(this.isOrganizationUnitName), 'Name is required.', this.formPostTried),


                ),
                HStack({ alignment: cTrailing, spacing: 10 })(
                    Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14).fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                    Views.AcceptButton({ label: 'Create', action: () => this.action_create() }),
                )
                    .paddingTop('20px')
                    .height(50)
                    .borderTop('solid 1px hsl(230, 30%, 96%)')



            ).padding(30).foregroundColor('#676767').height()
        )
        
    }

    public static Show(): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new NewOrganizationUnitController();
            dialog.BindRouterParams({});
            // npd.BindRouterParams();
            dialog.ShowDialogAsync().then(() => {
                resolve();
            })
        });
    }
}