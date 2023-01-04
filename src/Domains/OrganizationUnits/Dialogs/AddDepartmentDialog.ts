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
export class AddDepartmentDialog extends DialogController {

   

    public BindRouterParams(obj) {
        this.setWidth(600);
        this.setHeight(362);

       /*  const orgService = useOrgProvider();
        Promise.all([
            orgService.getTitles(),
            orgService.getDepartments(),
        ]).then((results) => {
            const [titles, departments] = results;
            this.titles = titles;
            this.departments = departments;
        }) */

    }

    protected override OnSubmit(formData: IFormData) {

        //alert(JSON.stringify(formData))
        RealmBrokerClient.CreateEmployee(formData.employee_record_id, formData.employee_name,
            formData.employee_last_name, formData.employee_title?.Id ?? '', formData.employee_department?.Id ?? '').then(() => {
                this.OnOKClick()
            })

    }
   

    public override LoadView() {
        return (
            RealmDataContext(() =>
                UICreateContext((create, isLoading) =>
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        HStack({ alignment: cTopLeading })(
                            Text('Create Department').fontSize(24).fontWeight('500'),
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
                                .formField('org_unit_record_id', [new RequiredRule('Record ID required.')]),

                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Name')
                                .formField('org_unit_name', [new RequiredRule('Name required.')]),

                        ),
                        HStack(
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
                        ).paddingTop('20px').height()



                    ).padding(30).foregroundColor('#676767').height()
                ).resource('departments')
                    .onSuccess(() => {
                        this.InvalidateQueries();
                        this.OnOKClick();
                    })
            )





        )
    }

    public static Show(): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new AddDepartmentDialog();
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