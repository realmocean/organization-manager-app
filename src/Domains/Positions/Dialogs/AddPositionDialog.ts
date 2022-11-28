import { IDepartment, IEmployeeTitle, RealmBrokerClient, useOrgProvider } from "@realmocean/common";
import { UIDropdownListView } from "@realmocean/dropdowns";
import { UITextBoxView } from "@realmocean/inputs";
import { Binding, Button, cTopLeading, HStack, State, Text, UIButton, VStack, $, Spacer, Icon, cLeading, cTrailing, RequiredRule } from "@tuval/forms";
import { DialogController } from "../../../ControllerDialog";

import { Views } from "../../../Views/Views";

interface IFormData {
    position_record_id: string;
    position_name: string;
}
export class AddPositionDialog extends DialogController {

    @State()
    private titles: IEmployeeTitle[];

    @State()
    private departments: IDepartment[];

    public BindRouterParams(obj) {
        this.setWidth(600);
        this.setHeight(700);
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
            VStack({ alignment: cTopLeading, spacing: 10 })(
                HStack({ alignment: cTopLeading })(
                    Text('Create Position').fontSize(24).fontWeight('500'),
                    Spacer(),
                    Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                ).height(50),

                VStack({ alignment: cTopLeading, spacing: 15 })(
                    UITextBoxView()
                        .floatlabel(false)
                        .width('100%')
                        .placeholder('*Record ID')
                        .formField('position_record_id', [new RequiredRule('Record ID required.')]),

                    UITextBoxView()
                        .floatlabel(false)
                        .width('100%')
                        .placeholder('*Position Name')
                        .formField('position_name', [new RequiredRule('Position Name required.')]),


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

            const dialog = new AddPositionDialog();
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