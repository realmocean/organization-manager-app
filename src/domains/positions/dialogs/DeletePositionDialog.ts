import { DialogView, ViewProperty , Text} from "@tuval/forms";

export class DeletePositionDialog extends DialogView {

    @ViewProperty()
    private id: string;

    public constructor() {
        super();
        this.Header = 'Delete Broker'
        this.Width = '500px'
        //this.Height = '500px'

    }


    public BindRouterParams(id ) {
        this.id = id;
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
            Text('Delete')
        )
    }

    public static Show(id: string) {
        const dialog = new DeletePositionDialog();
        dialog.BindRouterParams(id)
        dialog.ShowDialogAsync().then(() => alert(''));
    }
}