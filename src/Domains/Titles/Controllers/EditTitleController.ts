import { $, Binding, bindNavigate, cTopLeading, State, UIController, UIScene, VStack } from '@tuval/forms';

import { IEmployeeTitle, IGetTitleResponse, RealmBrokerClient, useOrgProvider } from '@realmocean/common';
import { Views } from '../../../Views/Views';

export class EditTitleController extends UIController {

    @State()
    private title: IEmployeeTitle;

    @State()
    private formPostTried: boolean;

    @Binding()
    private titleRecordId: string;

    @Binding(true)
    private isTitleRecordIdInvalid: boolean;

    @Binding()
    private titleName: string;

    @Binding(true)
    private isTitleNamedInvalid: boolean;

    protected BindRouterParams({ title_id }) {

        const orgService = useOrgProvider();
        
        orgService.getTitleById(title_id).then(title =>{
            this.title = title;

            this.titleRecordId = title.RecordId;
            this.titleName = title.Name;
        })
       
    }
    private ActionPost() {
      
            RealmBrokerClient.UpdateTitle(this.title.Id, this.titleRecordId, this.titleName).then(() => {
                this.navigotor('/app(tenantmanager)/title/list', { replace: true });
            })
        
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {
        return (
            UIScene(
                Views.FormView({
                    header: `Update Title`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Title ID *', 'Enter Title Record ID', $(this.titleRecordId), true, $(this.isTitleRecordIdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Title First Name', $(this.titleName), true, $(this.isTitleNamedInvalid), 'Name is required.', this.formPostTried),

                            Views.AcceptButton({ label: 'Update Title', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}