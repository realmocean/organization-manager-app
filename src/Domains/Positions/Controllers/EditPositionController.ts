import { $, Binding, bindNavigate, cTopLeading, State, UIController, UIScene, VStack } from '@tuval/forms';

import { IGetTitleResponse, RealmBrokerClient, IPosition, useOrgProvider } from '@realmocean/common';
import { Views } from '../../../Views/Views';

export class EditPositionController extends UIController {

    @State()
    private position: IPosition;

    @State()
    private formPostTried: boolean;

    @Binding()
    private positionRecordId: string;

    @Binding(true)
    private isPositionRecordIdInvalid: boolean;

    @Binding()
    private positionName: string;

    @Binding(true)
    private isPositionNamedInvalid: boolean;

    protected BindRouterParams({ position }: { position: IPosition }) {
        if (position) {
            this.position = position;

            this.positionRecordId = position.RecordId;
            this.positionName = position.Name;
        }
    }
    private ActionPost() {
        const orgProv = useOrgProvider();

        console.log(this.isPositionRecordIdInvalid, ' ', this.isPositionNamedInvalid);
        if (this.isPositionRecordIdInvalid || this.isPositionNamedInvalid) {
            this.formPostTried = true;
        } else {
            orgProv.updatePosition(this.position.Id, this.positionRecordId, this.positionName, '').then(() => {
                this.navigotor('/app(tenantmanager)/position/list', { replace: true });
            })
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/position/list');
    }

    public LoadView(): any {
        return (
            UIScene(
                Views.FormView({
                    header: `Update Position`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Position ID *', 'Enter Position Record ID', $(this.positionRecordId), true, $(this.isPositionRecordIdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Position Name', $(this.positionName), true, $(this.isPositionNamedInvalid), 'Name is required.', this.formPostTried),

                            Views.AcceptButton({ label: 'Update Position', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}