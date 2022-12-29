import { IDepartment, IEmployeeTitle, RealmBrokerClient, useOrgProvider, useSessionService } from "@realmocean/common";
import { UIDropdownListView } from "@realmocean/dropdowns";
import { UITextBoxView } from "@realmocean/inputs";
import { Binding, Button, cTopLeading, HStack, State, Text, UIButton, VStack, $, Spacer, Icon, cLeading, cTrailing, RequiredRule, UIRecordsContext, Spinner, UICreateContext } from "@tuval/forms";
import { DialogController } from "../../../ControllerDialog";
import { UIDatePickerView } from '@realmocean/calendars';

import { Views } from "../../../Views/Views";
import { RealmDataContext } from "../../../Views/DataContexts";

interface IFormData {
    employee_record_id: string;
    employee_name: string;
    employee_last_name: string;
    employee_title: IEmployeeTitle;
    employee_department: IDepartment;

}
export class AddUserDialog extends DialogController {

    @State()
    private titles: IEmployeeTitle[];

    @State()
    private departments: IDepartment[];

    public BindRouterParams(obj) {
        this.setWidth(600);
        this.setHeight(600);

        const orgService = useOrgProvider();
        Promise.all([
            orgService.getTitles(),
            orgService.getDepartments(),
        ]).then((results) => {
            const [titles, departments] = results;
            this.titles = titles;
            this.departments = departments;
        })

    }

    protected override OnSubmit(formData: IFormData) {

        //alert(JSON.stringify(formData))
        RealmBrokerClient.CreateEmployee(formData.employee_record_id, formData.employee_name,
            formData.employee_last_name, formData.employee_title?.Id ?? '', formData.employee_department?.Id ?? '').then(() => {
                this.OnOKClick()
            })

    }
    private action_create() {
        /*  const orgUI = useOrgUIProvider();
         orgUI.selectEmployee(true);
 
         return; */

        /*   if (this.isEmployeeIDdInvalid || this.isEmployeeNamedInvalid) {
              this.formPostTried = true;
          } else {
              RealmBrokerClient.CreateEmployee(this.employeeId, this.employeeName ?? '',
                  this.employeeLastName ?? '', this.employeeTitle?.Id ?? '', this.employeeDepartment?.Id ?? '').then(() => {
                      this.OnOKClick()
                  })
          } */
    }

    public override LoadView() {
        return (
            RealmDataContext(() =>
                UICreateContext((create, isLoading) =>
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        HStack({ alignment: cTopLeading })(
                            Text('Create Employee').fontSize(24).fontWeight('500'),
                            Spacer(),
                            Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                        ).height(50),

                        VStack({ alignment: cTopLeading, spacing: 15 })(

                            /* UIDatePickerView()
                                .floatlabel(false)
                                .width('100%')
                                .formField('employee_date', [new RequiredRule('Record ID required.')]), */
                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Record ID')
                                .formField('employee_record_id', [new RequiredRule('Record ID required.')]),

                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Employee Name')
                                .formField('employee_name', [new RequiredRule('Employee Name required.')]),

                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Employee Last Name')
                                .formField('employee_last_name', [new RequiredRule('Employee Last Name required.')]),

                            HStack(
                                UIRecordsContext(({ data }) =>
                                    Views.DropDown({
                                        label: 'Title',
                                        dataSource: data,
                                        fields: { text: 'title_name', value: 'id' },
                                        placeholder: 'Please select employee title',
                                        formFieldOptions: { fieldName: 'employee_title', rules: [new RequiredRule('Employee Last Name required.')] }
                                    })
                                ).resource('titles').filter({ 'tenant_id': useSessionService().TenantId })
                            ).height(),

                            UIRecordsContext(({ data }) =>
                                Views.DropDown({
                                    label: 'Department',
                                    dataSource: data,
                                    fields: { text: 'org_unit_name', value: 'id' },
                                    placeholder: 'Please select department',
                                    formFieldOptions: { fieldName: 'employee_department', rules: [] }
                                })
                            ).resource('departments').filter({ 'tenant_id': useSessionService().TenantId }),



                            // Views.InputTextView('Employee ID *', 'Record ID', $(this.employeeId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                            //Views.InputTextView('Name *', 'First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                            // Views.InputTextView('Last Name', 'Last Name', $(this.employeeLastName)),
                            // Views.InputDropdownListView('Title', 'Please select employee title', this.titles, this.employeeTitle?.Id, (e) => this.employeeTitle = e.itemData as any),
                            //Views.InputDropdownListView('Department', 'Please select employee department', this.departments, this.employeeDepartment?.Id, (e) => this.employeeDepartment = e.itemData as any),
                            //Views.InputDropdownListView('Department', 'Please select employee department', [], this.employeeDepartment?.Id, (e) => void 0),
                        ),
                        HStack({ alignment: cTrailing, spacing: 10 })(
                            Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14).fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
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



                    ).padding(30).foregroundColor('#676767').height()
                ).resource('employees')
                .onSuccess(()=> {
                    this.InvalidateQueries();
                    this.OnOKClick();
                })
            )





        )
    }

    public static Show(): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new AddUserDialog();
            dialog.BindRouterParams({});
            // npd.BindRouterParams();
            dialog.ShowDialogAsync().then(() => {
                resolve();
            })
        });
    }
    /*  public static Show(): Promise<void> {
         return new Promise<void>((resolve, reject) => {
             const npd = new AddUserDialog();
             npd.BindRouterParams({})
             npd.ShowDialogAsync().then(() => {
                 resolve();
             })
         });
     } */

    /*  public OnOKClick() {
         this.ShowDialogAsyncResolve(null);
         this.Hide();
     }
 
     public OnCancel() {
         this.Hide();
     } */
}