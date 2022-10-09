import { $, Binding, bindNavigate, cTopLeading, State, UIController, UIScene, VStack, cLeading, HStack } from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider } from '@realmocean/common';

import { Views } from '../../../Views/Views';
const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

const model = [
    {
        text: 'Erkek',
        value: 'E'
    },
    {
        text: 'Kadın',
        value: 'K'
    },
    {
        text: 'Çocuk',
        value: 'C'
    }
]
export class NewPositionController extends UIController {

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

    private ActionPost() {
        debugger;
        const orgProv = useOrgProvider();
        console.log(this.isPositionRecordIdInvalid, ' ', this.isPositionNamedInvalid);
        if (this.isPositionRecordIdInvalid || this.isPositionNamedInvalid) {
            this.formPostTried = true;
        } else {
            orgProv.createPosition(this.positionRecordId, this.positionName, '').then((id) => {
                this.navigotor('/app(tenantmanager)/position/list', { replace: true });
            })
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/position/list');
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return (
            UIScene(
                Views.FormView({
                    header: `New Position`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            /*  UIGridView(), */
                            /* HStack(
                                UITextBoxView().placeholder('Lead Owner').floatlabel(true).width('100%'),
                                UITextBoxView().placeholder('Company').floatlabel(true).width('100%'),
                            )
                            , */
                            Views.InputTextView('Position ID *', 'Enter Position Record ID', $(this.positionRecordId), true, $(this.isPositionRecordIdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Position Name', $(this.positionName), true, $(this.isPositionNamedInvalid), 'Name is required.', this.formPostTried),
                            VStack({ alignment: cLeading, spacing: 10 })(
                                /*    UIRadioButton().name('Test').checked(true).label('Erkek').value('E'),
                                   UIRadioButton().name('Test').checked(true).label('Kadın').value('K'),
                                   UIRadioButton().name('Test').checked(true).label('Çocuk').value('C'),*/
                            ).height(),
                            //UIAutoComplete().dataSource(model).fields({ value: 'text' }).placeHolder('Please Select').width('100%'),

                            Views.AcceptButton({ label: 'Create Position', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}