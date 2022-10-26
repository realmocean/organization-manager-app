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

export class EditDepartmentController extends UIController {

    @Binding()
    private departmentId: string;


    @Binding()
    private departmentRecordId: string;

    @Binding()
    private departmentName: string;




    private action_update() {

      
        const orgService = useOrgProvider();
       
         //const orgUIService = useOrgUIProvider();
        //orgUIService.selectAccount(false) 

          orgService.updateDepartment({
            Id: this.departmentId,
            RecordId: this.departmentRecordId,
            Name: this.departmentName,
            ParentId: ''
        }).then(() => {
            this.navigotor('/app(tenantmanager)/department/list', { replace: true });
        })  
        
    }

    protected override BindRouterParams({ department_id }) {
    
        this.departmentId = department_id;
        // console.log(useApplication());
        this.BeginUpdate();



        const orgService = useOrgProvider();

        orgService.getDepartmentById(department_id).then(department => {
            this.departmentRecordId = department.RecordId;
            this.EndUpdate();
            this.departmentName = department.Name;

        })
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/department/list');
    }

    public LoadView(): any {
        return (
            UIScene(
                Views.FormView({
                    header: `Edit Department`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Employee ID *', 'Enter Department Record ID', $(this.departmentRecordId)),
                            Views.InputTextView('Name *', 'Enter Department Name', $(this.departmentName)),
                          
                            Views.AcceptButton({ label: 'Update Department', action: () => this.action_update() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}