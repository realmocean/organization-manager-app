import { IDepartment, IEmployeeTitle, RealmBrokerClient, useOrgProvider, useSessionService } from "@realmocean/common";
import { UIDropdownListView } from "@realmocean/dropdowns";
import { UITextBoxView } from "@realmocean/inputs";
import { Binding, Button, cTopLeading, HStack, State, Text, UIButton, VStack, $, Spacer, Icon, cLeading, cTrailing, RequiredRule, UIRecordsContext, Spinner, UICreateContext, UIDeleteContext, RenderingTypes } from "@tuval/forms";
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
export class DeleteUserDialog extends DialogController {

    @State()
    private id: string;


    public BindRouterParams({ id }) {
        this.setWidth(600);
        this.setHeight(200);
        this.id = id;



    }

    public override LoadView() {
        return (
            RealmDataContext(() =>
                UIDeleteContext((deleteFunc, data, isLoading) =>
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        HStack({ alignment: cTopLeading })(
                            Text('Delete Employee').fontSize(24).fontWeight('500'),
                            Spacer(),
                            Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                        ).height(50),

                        Text(`Are you sure you want to delete **${(data as any)?.employee_name} ${(data as any)?.employee_last_name}** ?`).render(RenderingTypes.Markdown),

                        HStack({ alignment: cTrailing, spacing: 10 })(
                            Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14).fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                            Views.AcceptButton({
                                label: 'Delete', loading: isLoading, action: () => {
                                    this.SetValue('tenant_id', useSessionService().TenantId);
                                    deleteFunc()
                                }
                            }),
                        )
                            .paddingTop('20px')
                            .height(50)
                            .borderTop('solid 1px hsl(230, 30%, 96%)')



                    ).padding(30).foregroundColor('#676767').height()
                )
                    .resource('employees').filter({
                        'id': this.id
                    })
                    .onSuccess(() => this.OnCancel())

                /*   .onSuccess(()=> {
                      this.InvalidateQueries();
                      this.OnOKClick();
                  }) */
            )





        )
    }

    public static Show(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new DeleteUserDialog();
            dialog.BindRouterParams({ id });
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