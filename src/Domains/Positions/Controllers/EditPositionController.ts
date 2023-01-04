import {
    cLeading,
    cTopLeading,
    HStack,
    Spacer,
    Spinner,
    State,
    Text,
    TextField,
    UIButton,
    UIController,
    UIScene,
    VStack,
    cHorizontal,
    Toggle,
    SecureField,
    AutoComplete,
    $,
    useApplication,
    Icon,
    cTop,
    RequiredRule,
    UIFormController,
    Button,
    cVertical,
    UIUpdateContext,
    useToastService
} from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider, IEmployeeTitle, IDepartment, useOrgUIProvider } from '@realmocean/common';
import { Color, UIImage, NavigateFunction, bindNavigate, Binding } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { Views } from '../../../Views/Views';
import { UIDropdownListView } from '@realmocean/dropdowns';
import { UITextBoxView } from '@realmocean/inputs';
import { is } from '@tuval/core';
import { RealmDataContext } from '../../../Views/DataContexts';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='


export class EditPositionController extends UIFormController {

    @State()
    private positionId: string;


    @State()
    private recordIDUpdating: boolean;



    protected override BindRouterParams({ position_id }) {

        this.positionId = position_id;

    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/position/list');
    }

    public LoadView(): any {
        return (
            this.positionId == null ? Spinner() :
                RealmDataContext(() =>
                    UIUpdateContext((update) =>
                        VStack({ alignment: cTop, spacing: 24 })(
                            Views.FormCommanSection({
                                title: 'Update Record ID',
                                content: (
                                    HStack(
                                        UITextBoxView()
                                            .floatlabel(false)
                                            .width('100%')
                                            //.placeholder('*Record ID')
                                            .formField('position_record_id', [new RequiredRule('Record ID required.')]),
                                    )
                                ),
                                footer: (
                                    Views.AcceptButton({
                                        label: 'Update', action: () => {
                                            update();
                                            this.InvalidateQueries();
                                        }
                                    })
                                    /* .disabled(
                                        !this.GetFieldState('department_record_id').isTouched ||
                                        is.nullOrEmpty(this.GetValue('department_record_id'))
                                    ) */
                                )
                            }),

                            Views.FormCommanSection({
                                title: 'Update Name',
                                content: (
                                    HStack(
                                        UITextBoxView()
                                            .floatlabel(false)
                                            .width('100%')
                                            // .placeholder('*Name')
                                            .formField('position_name', [new RequiredRule('Name required.')]),
                                    )
                                ),
                                footer: (
                                    Views.AcceptButton({
                                        label: 'Update', action: () => {
                                            update();
                                            this.InvalidateQueries();
                                        }
                                    })
                                )
                            })

                        ).padding(10).paddingTop('50px').foregroundColor('#676767')
                    )
                        .resource('positions').filter({ id: this.positionId })
                        .onSuccess(() =>
                            useToastService().Success('Updated')
                            //this.navigotor('/app(tenantmanager)/company/list/employee')
                        )
                )


        )

    }
}