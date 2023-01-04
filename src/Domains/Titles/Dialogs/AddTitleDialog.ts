import { IDepartment, IEmployeeTitle, RealmBrokerClient, useOrgProvider, useSessionService } from "@realmocean/common";
import { UIDropdownListView } from "@realmocean/dropdowns";
import { UITextBoxView } from "@realmocean/inputs";
import { Binding, Button, cTopLeading, HStack, State, Text, UIButton, VStack, $, Spacer, Icon, cLeading, cTrailing, RequiredRule, UICreateContext } from "@tuval/forms";
import { DialogController } from "../../../ControllerDialog";
import { RealmDataContext } from "../../../Views/DataContexts";

import { Views } from "../../../Views/Views";

interface IFormData {
    position_record_id: string;
    position_name: string;
}
export class AddTitleDialog extends DialogController {


    public BindRouterParams(obj) {
        this.setWidth(600);
        this.setHeight(362);
    }

    protected override OnSubmit(formData: IFormData) {
        const orgProv = useOrgProvider();

        orgProv.createPosition(formData.position_record_id, formData.position_name, '').then((id) => {
            this.OnOKClick();
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
                            Text('Create Title').fontSize(24).fontWeight('500'),
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
                                .formField('title_record_id', [new RequiredRule('Record ID required.')]),

                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Name')
                                .formField('title_name', [new RequiredRule('Name required.')]),

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
                )
                    .resource('titles')
                    .onSuccess(() => {
                        this.InvalidateQueries();
                        this.OnOKClick();
                    })
            )


        )
    }

    public static Show(): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new AddTitleDialog();
            dialog.BindRouterParams({});
            // npd.BindRouterParams();
            dialog.ShowDialogAsync().then(() => {
                resolve();
            })
        });
    }
}