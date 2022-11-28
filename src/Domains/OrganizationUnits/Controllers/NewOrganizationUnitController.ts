import { $, Binding, bindNavigate, cTopLeading, HStack, State, UIController, UIScene, VStack, Text, cTrailing, Icon, Spacer, RequiredRule } from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider } from '@realmocean/common';
import { Views } from '../../../Views/Views';
import { DialogController } from '../../../ControllerDialog';
import { UITextBoxView } from '@realmocean/inputs';

interface IFormData {
    department_record_id: string;
    department_name: string;

}

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


    public BindRouterParams(obj) {
        this.setWidth(600);
        this.setHeight(400);
    }
    protected override OnSubmit(data: IFormData) {
     
        const orgProv = useOrgProvider();

        orgProv.createDepartment(data.department_record_id, data.department_name, '').then((id) => {
            this.OnOKClick();
        })
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
                    UITextBoxView()
                    .floatlabel(false)
                    .width('100%')
                    .placeholder('*Record ID')
                    .formField('department_record_id', [new RequiredRule('Record ID required.')]),

                    UITextBoxView()
                    .floatlabel(false)
                    .width('100%')
                    .placeholder('*Name')
                    .formField('department_name', [new RequiredRule('Name required.')]),
                    
                 /*    Views.InputTextView('Department Record ID *', 'Department Record ID *', $(this.organizationUnitRecordId), true, $(this.isOrganizationUnitRecordId), 'ID is required.', this.formPostTried),
                    Views.InputTextView('Name *', 'Name *', $(this.organizationUnitName), true, $(this.isOrganizationUnitName), 'Name is required.', this.formPostTried),
 */

                ),
                HStack({ alignment: cTrailing, spacing: 10 })(
                    Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14).fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                    Views.AcceptButton({ label: 'Create', action: () => this.Submit() }),
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