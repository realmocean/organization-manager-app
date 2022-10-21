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
    useApplication
} from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider, IEmployeeTitle, IDepartment, useOrgUIProvider } from '@realmocean/common';
import { Color, UIImage, NavigateFunction, bindNavigate, Binding } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { Views } from '../../../Views/Views';
import { UIDropdownListView } from '@realmocean/dropdowns';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

export class DeleteEmployeeController extends UIController {

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


    private action_delete() {
        const orgService = useOrgProvider();
        orgService.deleteEmployee(this.employeeId).then(() => {
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

            this.employeeRecordId = employee.RecordId;
            this.employeeName = employee.Name;
            this.employeeLastName = employee.LastName;
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

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {

        return (
            UIScene(this.titles == null ? Spinner() :
                Views.FormView({
                    header: `Delete Employee`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Text(this.employeeName),
                            Views.AcceptButton({ label: 'Delete', action: () => this.action_delete() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}