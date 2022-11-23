import { IDepartment, IEmployeeTitle, RealmBrokerClient, useOrgProvider } from "@realmocean/common";
import { UITextBoxView } from "@realmocean/inputs";
import { Binding, Button, cTopLeading, HStack, State, Text, UIButton, VStack, $, Spacer, Icon, cLeading, cTrailing, RequiredRule } from "@tuval/forms";
import { DialogController } from "../../../ControllerDialog";

import { Views } from "../../../Views/Views";


export class AddUserDialog extends DialogController {

    @State()
    private formPostTried: boolean;

    @State()
    private showErrors: boolean;

    @Binding()
    private employeeId: string;

    @Binding(true)
    private isEmployeeIDdInvalid: boolean;

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
    private employeeTitle: IEmployeeTitle;

    @State()
    private employeeDepartment: IDepartment;

 

    public BindRouterParams(obj) {
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

    private action_create() {
        /*  const orgUI = useOrgUIProvider();
         orgUI.selectEmployee(true);
 
         return; */
 
         if (this.isEmployeeIDdInvalid || this.isEmployeeNamedInvalid) {
             this.formPostTried = true;
         } else {
             RealmBrokerClient.CreateEmployee(this.employeeId, this.employeeName ?? '',
                 this.employeeLastName ?? '', this.employeeTitle?.Id ?? '', this.employeeDepartment?.Id ?? '').then(() => {
                     this.OnOKClick()
                 })
         }
     }

    public override LoadView() {
        return (
            VStack({ alignment: cTopLeading, spacing: 10 })(
                HStack({ alignment: cTopLeading })(
                    Text('Create Employee').fontSize(24).fontWeight('500'),
                    Spacer(),
                    Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                ).height(50),

                VStack({alignment: cTopLeading, spacing:15})(
                    UITextBoxView()
                    .floatlabel(false)
                    .width('100%')
                    .placeholder('test')
                    .formField('employee_name', [new RequiredRule('sdfsdfsd')]),
                    
                   // Views.InputTextView('Employee ID *', 'Record ID', $(this.employeeId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                    Views.InputTextView('Name *', 'First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                    Views.InputTextView('Last Name', 'Last Name', $(this.employeeLastName)),
                    Views.InputDropdownListView('Title', 'Please select employee title', this.titles, this.employeeTitle?.Id, (e) => this.employeeTitle = e.itemData as any),
                    Views.InputDropdownListView('Department', 'Please select employee department', this.departments, this.employeeDepartment?.Id, (e) => this.employeeDepartment = e.itemData as any),
                    //Views.InputDropdownListView('Department', 'Please select employee department', [], this.employeeDepartment?.Id, (e) => void 0),
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
      
            const dialog = new AddUserDialog();
            dialog.BindRouterParams({});
           // npd.BindRouterParams();
           dialog.ShowDialogAsync().then( () => {
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