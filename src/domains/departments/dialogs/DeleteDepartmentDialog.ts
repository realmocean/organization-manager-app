import { useSessionService } from "@realmocean/services";
import { DialogView, ViewProperty, Text, HStack, Icon, RenderingTypes, Spacer, UIDeleteContext, VStack, cTopLeading, cTrailing } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { Views } from "../../../views/Views";
import { UIRecordContext } from "@tuval/forms";

export class DeleteDepartmentDialog extends DialogView {

    @ViewProperty()
    private id: string;

    public constructor() {
        super();
        this.Header = 'Delete department'
        this.Width = '500px'
        //this.Height = '500px'

    }


    public BindRouterParams(id) {
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
            RealmDataContext(
                UIDeleteContext((deleteFunc, isLoading) =>
                    UIRecordContext(({ data }) =>
                        VStack({ alignment: cTopLeading, spacing: 10 })(

                            Text(`Are you sure you want to delete **${data?.org_unit_name}** ?`).renderingType(RenderingTypes.Markdown),

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
                    ).resource('departments').filter({
                        'id': this.id
                    })

                )
                    .resource('departments').filter({
                        'id': this.id
                    })
                    .onSuccess(() => {
                        this.InvalidateQuerie('departments');
                        this.OnOK();
                    })

                /*   .onSuccess(()=> {
                      this.InvalidateQueries();
                      this.OnOKClick();
                  }) */
            )





        )
    }

    public static Show(id: string) {
        const dialog = new DeleteDepartmentDialog();
        dialog.BindRouterParams(id)
        dialog.ShowDialogAsync();
    }
}