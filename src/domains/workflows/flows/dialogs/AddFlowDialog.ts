import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { cTopLeading, cTrailing, DialogView, HStack, Icon, RequiredRule, Spacer, UICreateContext, ViewProperty, VStack, Text } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { Views } from "../../../../views/Views";
import { AddUserDialog } from "../../../users/dialogs/AddUserDialog";

export class AddFlowDialog extends DialogView {

    @ViewProperty()
    private project_id: string;

    public constructor() {
        super();
        this.Header = 'Create Flow'
        this.Width = '600px'
        this.Height = '362px'

    }


    public BindRouterParams({ project_id }) {
      
        this.project_id = project_id;


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
                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Flow Name')
                                .formField('flow_name', [new RequiredRule('Name required.')]),

                            UITextBoxView()
                                .floatlabel(false)
                                .multiline(true)
                                .width('100%')
                                .placeholder('*Description')
                                .formField('flow_description', []),


                        ),
                        HStack(
                            HStack({ alignment: cTrailing, spacing: 10 })(
                                Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14)
                                    .fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                                Views.AcceptButton({
                                    label: 'Create', loading: isLoading, action: () => {
                                        this.SetValue('tenant_id', useSessionService().TenantId);
                                        this.SetValue('project_id', this.project_id);
                                        create();
                                    }
                                }),
                            )
                                .paddingTop('20px')
                                .height(50)
                                .borderTop('solid 1px hsl(230, 30%, 96%)')
                        ).paddingTop('20px').height()



                    ).padding(30).foregroundColor('#676767').height()
                ).resource('flows')
                    .onSuccess(() => {
                        //this.InvalidateQueries();
                        this.OnOK();
                    })
            )
        )
    }

    public static Show(project_id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new AddFlowDialog();
            dialog.BindRouterParams({ project_id });
            // npd.BindRouterParams();
            dialog.ShowDialogAsync().then(() => {
                resolve();
            })
        });
    }
}