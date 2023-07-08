import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { DialogView, UICreateContext, VStack, cTopLeading, RequiredRule, HStack, UIRecordsContext, cTrailing, Text, TextField, Button, cLeading, State, Spinner, ViewProperty, FormBuilder } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { Views } from "../../../views/Views";

export class AddPositionDialog extends DialogView {

    @ViewProperty()
    private form: any;

    public constructor() {
        super();
        this.Header = 'Form'
        this.Width = '824px';
        this.Position = 'right';
        this.Height = '100%'
    }

    public BindRouterParams(formData) {
        this.form = formData;
    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    public __LoadView() {
        return (
            RealmDataContext(
                UICreateContext((create, isLoading) =>
                    VStack({ alignment: cTopLeading, spacing: 15 })(
                        TextField()
                            .label('*Record ID')
                            .formField('position_record_id', [new RequiredRule('Record ID required.')]),

                        TextField()
                            .label('*Name')
                            .formField('position_name', [new RequiredRule('Name required.')]),
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
                ).resource('positions')
                    .onSuccess(() => {
                        this.InvalidateQuerie('positions');
                        this.OnOK();
                    })
            )
        )
    }

    public override LoadView() {

        return (this.form == null ? Spinner():
            RealmDataContext(
                VStack(
                    FormBuilder.render(this.form),
                )
            )
        )
    }

    public static Show(formData: any) {
        const dialog = new AddPositionDialog();
        dialog.ShowHeader = false;
        dialog.Header = formData.title || '';
        dialog.BindRouterParams(formData)
        return dialog.ShowDialogAsync();
    }
}