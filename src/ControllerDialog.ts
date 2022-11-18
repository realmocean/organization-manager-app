import { Dialog, State, UIController } from '@tuval/forms'



export class DialogController extends UIController {

    @State()
    public dialog: Dialog;

    public InitController() {

        const self = this;
        const dialog = class extends Dialog {
            public override InitComponents() {
                this.Text = '';
                this.Width = 638;
                this.Height = 644;

                this.Controls.Add(self);
            }

           

            public override OnShown(): void {
                
            }


        }

        this.dialog = new dialog();

    }


    protected UseRouter() {
        return false;
    }

    protected override BindRouterParams({  }) {
      
    }

    public ShowDialogAsync(): Promise<any> {
        return this.dialog.ShowDialogAsync();
    }


    public OnOKClick() {
        (this.dialog as any).ShowDialogAsyncResolve();
        this.dialog.Hide();
    }

    public OnCancel() {
        this.dialog.Hide();
    }

}


