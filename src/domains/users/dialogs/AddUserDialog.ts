import {
    DialogView, ViewProperty, Text, UICreateContext,
    cTopLeading, cTrailing, HStack, Icon, RequiredRule, Spacer,
    UIRecordsContext, VStack
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { Views } from "../../../views/Views";
import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { Dropdown } from "../../../views/components/Dropdown";
import { TextField } from "../../../views/components/TextField";

export class AddUserDialog extends DialogView {

    public constructor() {
        super();
        this.Header = 'Create Employee'
        this.Width = '700px'
        //this.Height = '500px'

    }


    public BindRouterParams() {

    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    public override LoadView() {
        return (
            RealmDataContext(
                UICreateContext((create, isLoading) =>
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        VStack({ alignment: cTopLeading, spacing: 15 })(

                            TextField()
                                .label('*Record ID')
                                .formField('employee_record_id', [new RequiredRule('Record ID required.')]),

                            TextField()
                                .label('*Name')
                                .formField('employee_name', [new RequiredRule('Employee Name required.')]),

                            TextField()
                                .label('*Last Name')
                                .formField('employee_last_name', [new RequiredRule('Employee Last Name required.')]),


                            Dropdown()
                                .fields({ text: 'title_name', value: 'id' })
                                .label('Title')
                                .formField('title_id', [])
                                .resource('titles')
                                .filter({ 'tenant_id': useSessionService().TenantId }),


                            Dropdown()
                                .fields({ text: 'org_unit_name', value: 'id' })
                                .label('Department')
                                .formField('department_id', [])
                                .resource('departments')
                                .filter({ 'tenant_id': useSessionService().TenantId })



                            // Views.InputTextView('Employee ID *', 'Record ID', $(this.employeeId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                            //Views.InputTextView('Name *', 'First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                            // Views.InputTextView('Last Name', 'Last Name', $(this.employeeLastName)),
                            // Views.InputDropdownListView('Title', 'Please select employee title', this.titles, this.employeeTitle?.Id, (e) => this.employeeTitle = e.itemData as any),
                            //Views.InputDropdownListView('Department', 'Please select employee department', this.departments, this.employeeDepartment?.Id, (e) => this.employeeDepartment = e.itemData as any),
                            //Views.InputDropdownListView('Department', 'Please select employee department', [], this.employeeDepartment?.Id, (e) => void 0),
                        ),
                        HStack(
                            HStack({ alignment: cTrailing, spacing: 10 })(
                                Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14)
                                    .fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                                Views.AcceptButton({
                                    label: 'Create', loading: isLoading, action: () => {
                                        this.SetValue('tenant_id', useSessionService().TenantId);
                                        create()
                                    }
                                }),
                            )
                                .paddingTop('20px')
                                .height(50)
                                .borderTop('solid 1px hsl(230, 30%, 96%)')
                        ).paddingTop('20px').height()



                    ).padding(30).foregroundColor('#676767').height()
                ).resource('employees')
                    .onSuccess(() => {
                        this.InvalidateQueries();
                        this.OnOK();
                    })
            )
        )
    }

    public static Show() {

        const dialog = new AddUserDialog();
        dialog.BindRouterParams()
        return dialog.ShowDialogAsync();
    }
}