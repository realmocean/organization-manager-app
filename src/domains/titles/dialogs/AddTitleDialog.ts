import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { DialogView, UICreateContext, VStack, cTopLeading, RequiredRule, HStack, UIRecordsContext, cTrailing, Text, TextField } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { Views } from "../../../views/Views";

export class AddTitleDialog extends DialogView {

    public constructor() {
        super();
        this.Header = 'Create Position'
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
                    VStack({ alignment: cTopLeading, spacing: 15 })(


                        TextField()
                            .label('*Record ID')
                            .formField('title_record_id', [new RequiredRule('Record ID required.')]),

                        TextField()
                            .label('*Name')
                            .formField('title_name', [new RequiredRule('Name required.')]),
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
                ).resource('titles')
                    .onSuccess(() => {
                         this.InvalidateQuerie('titles');
                         this.OnOK();
                    })
            )
        )
    }

    public static Show() {

        const dialog = new AddTitleDialog();
        dialog.BindRouterParams()
        return dialog.ShowDialogAsync();
    }
}