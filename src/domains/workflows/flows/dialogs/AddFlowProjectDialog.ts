import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { cTopLeading, cTrailing, DialogView, HStack, Icon, RequiredRule, Spacer, Text, UICreateContext, VStack } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { Views } from "../../../../views/Views";

export class AddFlowProjectDialog extends DialogView {


    public constructor() {
        super();
        this.Header = 'Create Flow Project'
        this.Width = '600px'
        this.Height = '400px'

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
                                .placeholder('*Project Name')
                                .formField('project_name', [new RequiredRule('Name required.')]),

                            UITextBoxView()
                                .floatlabel(false)
                                .multiline(true)
                                .width('100%')
                                .placeholder('*Description')
                                .formField('project_description', []),


                        ),
                        HStack(
                            HStack({ alignment: cTrailing, spacing: 10 })(
                                Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14)
                                    .fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                                Views.AcceptButton({
                                    label: 'Create', loading: isLoading, action: () => {
                                        this.SetValue('tenant_id', useSessionService().TenantId);
                                        create();
                                    }
                                }),
                            )
                                .paddingTop('20px')
                                .height(50)
                                .borderTop('solid 1px hsl(230, 30%, 96%)')
                        ).paddingTop('20px').height()



                    ).padding(30).foregroundColor('#676767').height()
                ).resource('flow-projects')
                    .onSuccess(() => {
                       // this.InvalidateQueries();
                        this.OnOK();
                    })
            )





        )
    }

    public static Show(): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new AddFlowProjectDialog();
            //dialog.BindRouterParams({});
            // npd.BindRouterParams();
            dialog.ShowDialogAsync().then(() => {
                resolve();
            })
        });
    }
}