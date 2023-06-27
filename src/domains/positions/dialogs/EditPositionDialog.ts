import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { DialogView, UICreateContext, VStack, cTopLeading, RequiredRule, HStack, UIRecordsContext, cTrailing, Text, TextField, Button, cLeading, State, Spinner, ViewProperty } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { Views } from "../../../views/Views";
import { FormBuilder } from "../../../formbuilder/FormBuilder";

export class EditPositionDialog extends DialogView {

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
        const dialog = new EditPositionDialog();
        dialog.Header = formData.title || '';
        dialog.BindRouterParams(formData)
        return dialog.ShowDialogAsync();
    }
}