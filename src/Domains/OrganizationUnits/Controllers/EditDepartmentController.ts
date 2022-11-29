import {
    cLeading,
    cTopLeading,
    HStack,
    Spacer,
    Spinner,
    State,
    Text,
    TextField,
    UIButton,
    UIController,
    UIScene,
    VStack,
    cHorizontal,
    Toggle,
    SecureField,
    AutoComplete,
    $,
    useApplication,
    Icon,
    cTop,
    RequiredRule,
    UIFormController,
    Button,
    cVertical
} from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider, IEmployeeTitle, IDepartment, useOrgUIProvider } from '@realmocean/common';
import { Color, UIImage, NavigateFunction, bindNavigate, Binding } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { Views } from '../../../Views/Views';
import { UIDropdownListView } from '@realmocean/dropdowns';
import { UITextBoxView } from '@realmocean/inputs';
import { is } from '@tuval/core';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

interface IFormData {
    department_record_id: string;
    department_name: string;
}
export class EditDepartmentController extends UIFormController {

    @State()
    private departmentId: string;


    @State()
    private department: IDepartment;

    @State()
    private recordIDUpdating: boolean;


    protected override OnSubmit(data: IFormData) {
      
        const orgService = useOrgProvider();

        orgService.updateDepartment({
            Id: this.departmentId,
            RecordId: data.department_record_id,
            Name: data.department_name,
            ParentId: ''
        }).then(() => {
           
           // this.recordIDUpdating = false;
            this.navigotor('/app(tenantmanager)/company/list/department', { replace: true });
        })

    }

    protected override BindRouterParams({ department_id }) {

        this.departmentId = department_id;

        const orgService = useOrgProvider();

        orgService.getDepartmentById(department_id).then(department => {

            this.department = department;
            this.SetValue('department_record_id', department.RecordId)
            this.SetValue('department_name', department.Name)

        })
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/department/list');
    }

    public LoadView(): any {
        return (

            VStack({ alignment: cTop, spacing: 24 })(
                Views.FormCommanSection({
                    title: 'Update Record ID',
                    content: (
                        HStack(
                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Record ID')
                                .formField('department_record_id', [new RequiredRule('Record ID required.')]),
                        )
                    ),
                    footer: (
                        Views.AcceptButton({
                            label: 'Update', 
                            action: () => {
                                
                                this.recordIDUpdating = true;
                                this.Submit();
                            }
                        })
                        .loading(this.recordIDUpdating)
                        /* .disabled(
                            !this.GetFieldState('department_record_id').isTouched ||
                            is.nullOrEmpty(this.GetValue('department_record_id'))
                        ) */
                    )
                }),

                Views.FormCommanSection({
                    title: 'Update Name',
                    content: (
                        HStack(
                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Name')
                                .formField('department_name', [new RequiredRule('Name required.')]),
                        )
                    ),
                    footer: (
                        Views.AcceptButton({ label: 'Update', action: () => this.Submit() })
                    )
                }),

                Views.FormDangerSection({
                    title: 'Danger Zone',
                    subTitle: 'The employee will be permanently deleted, including all data associated with this employee. This action is irreversible.',
                    content: (
                        HStack(
                            HStack({ alignment: cLeading, spacing: 10 })(
                                Icon('\\ea67').size(35).foregroundColor('hsl(218 12% 43%)'),
                                Text(`${this.department?.Name}`).fontSize(14).foregroundColor('rgb(96, 106, 123)').fontWeight('600').fontFamily('"Inter", arial, sans-serif')

                            ).padding(24).background('hsl(240 100% 99%)').border('solid 1px hsl(240 30% 96%)')
                        ).padding(10)

                    ),
                    footer: (
                        Views.DeleteButton({ label: 'Delete', action: () => this.Submit() })
                    )
                }),



                //Views.InputTextView('Employee ID *', 'Enter Employee Record ID', $(this.employeeRecordId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                //Views.InputTextView('Name *', 'Enter Employee First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                //Views.InputTextView('Last Name', 'Enter Employee Last Name', $(this.employeeLastName)),
                // Views.InputDropdownListView('Title', 'Please select employee title', this.titles, this.employeeTitle, (e: any) => this.employeeTitle = e.itemData.Id as any),
                //Views.InputDropdownListView('Department', 'Please select employee department', this.departments, this.employeeDepartment, (e: any) => this.employeeDepartment = e.itemData.Id as any),

                //Views.InputDropdownListView('Department', 'Please select employee department', [], this.employeeDepartment?.Id, (e) => void 0),

                //Views.AcceptButton({ label: 'Update Employee', action: () => this.action_update() }),

            ).padding(10).paddingTop('50px').foregroundColor('#676767')
        )

    }
}