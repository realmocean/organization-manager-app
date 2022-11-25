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
    cTop,
    RequiredRule,
    ScrollView,
    cVertical,
    UIFormController,
    useLogService
} from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider, IEmployeeTitle, IDepartment, useOrgUIProvider } from '@realmocean/common';
import { Color, UIImage, NavigateFunction, bindNavigate, Binding } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { Views } from '../../../Views/Views';
import { UIDropdownListView } from '@realmocean/dropdowns';
import { UITextBoxView } from '@realmocean/inputs';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

export class EditEmployeeController extends UIFormController {

    @State()
    private formPostTried: boolean;

    @State()
    private showErrors: boolean;

    @Binding()
    private employeeId: string;

    @Binding(true)
    private isEmployeeIDdInvalid: boolean;

    @Binding()
    private employeeRecordId: string;

    @Binding()
    private employeeName: string;

    @Binding(true)
    private isEmployeeNamedInvalid: boolean;

    @Binding()
    private employeeLastName: string;

    private email: string;

    @State()
    private items: any[];

    @State()
    private titles: IEmployeeTitle[];

    @State()
    private departments: IDepartment[];

    @State()
    private employeeTitle: string;

    @State()
    private employeeDepartment: string;


    private action_update() {

        /*   if (this.isEmployeeIDdInvalid || this.isEmployeeNamedInvalid) {
              this.formPostTried = true;
          } else { */
        const orgService = useOrgProvider();
        orgService.updateEmployee({
            Id: this.employeeId,
            RecordId: this.employeeRecordId,
            Name: this.employeeName,
            LastName: this.employeeLastName,
            TitleId: this.employeeTitle,
            DepartmentId: this.employeeDepartment
        }).then(() => {
            this.navigotor('/app(tenantmanager)/employee/list', { replace: true });
        })
        //}
    }

    protected override BindRouterParams({ employee_id }) {

        this.employeeId = employee_id;
        // console.log(useApplication());
        this.BeginUpdate();



        const orgService = useOrgProvider();

        orgService.getEmployeeById(employee_id).then(employee => {

            this.SetValue('employee_record_id',employee.RecordId )
            this.SetValue('employee_name',employee.Name )
            this.SetValue('employee_last_name',employee.LastName )
            //this.employeeRecordId = employee.RecordId;
            //this.employeeName = employee.Name;
            //this.employeeLastName = employee.LastName;
            this.employeeTitle = employee.TitleId;

            this.EndUpdate();
            this.employeeDepartment = employee.DepartmentId;


        })
        Promise.all([
            orgService.getTitles(),
            orgService.getDepartments(),
        ]).then((results) => {
            const [titles, departments] = results;
            this.titles = titles;
            this.departments = departments;
        })


    }

    protected override OnSubmit(data) {
        alert(JSON.stringify(data))
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {

        const logService =  useLogService();
        logService.log('EditEmployeeController rendered.')

        return (
            UIScene(this.titles == null ? Spinner() :
                    VStack({ alignment: cTop, spacing: 24 })(
                        Views.FormCommanSection({
                            title: 'Update Record ID',
                            content: (
                                HStack(
                                    UITextBoxView()
                                        .floatlabel(false)
                                        .width('100%')
                                        .placeholder('*Record ID')
                                        .formField('employee_record_id', [new RequiredRule('Record ID required.')]),
                                )
                            ),
                            footer: (
                                Views.AcceptButton({ label: 'Update', action: () => this.Submit() })
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
                                        .formField('employee_name', [new RequiredRule('Name required.')]),
                                )
                            ),
                            footer: (
                                Views.AcceptButton({ label: 'Update', action: () => this.action_update() })
                            )
                        }),

                        Views.FormCommanSection({
                            title: 'Update Lastname',
                            content: (
                                HStack(
                                    UITextBoxView()
                                        .floatlabel(false)
                                        .width('100%')
                                        .placeholder('*Lastname')
                                        .formField('employee_last_name', [new RequiredRule('Lastname required.')]),
                                )
                            ),
                            footer: (
                                Views.AcceptButton({ label: 'Update', action: () => this.action_update() })
                            )
                        }),
                       


                        //Views.InputTextView('Employee ID *', 'Enter Employee Record ID', $(this.employeeRecordId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                        //Views.InputTextView('Name *', 'Enter Employee First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                        //Views.InputTextView('Last Name', 'Enter Employee Last Name', $(this.employeeLastName)),
                        //Views.InputDropdownListView('Title', 'Please select employee title', this.titles, this.employeeTitle, (e: any) => this.employeeTitle = e.itemData.Id as any),
                        //Views.InputDropdownListView('Department', 'Please select employee department', this.departments, this.employeeDepartment, (e: any) => this.employeeDepartment = e.itemData.Id as any),
                        
                        //Views.InputDropdownListView('Department', 'Please select employee department', [], this.employeeDepartment?.Id, (e) => void 0),

                        //Views.AcceptButton({ label: 'Update Employee', action: () => this.action_update() }),

                    ).padding(10).paddingTop('50px').foregroundColor('#676767')
                )
        )
    }
}