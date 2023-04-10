//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    Button,
    ButtonType,
    cLeading, cTop, cTopLeading, cTrailing, HStack, RequiredRule, Spacer,
    Spinner, State, Text, UIController, UIFormController, UIRecordsContext, UIUpdateContext, useNavigate,
    useParams, VStack
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";

import { UITextBoxView } from "@realmocean/inputs";
import { TextField } from "../../../views/components/TextField";
import { Dropdown } from "../../../views/components/Dropdown";



export class EditPositionController extends UIFormController {

    @State()
    private searchText: string;

    public LoadView(): any {
        const { position_id } = useParams();
        const navigate = useNavigate();
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Positions'),
                Views.RightSidePage({
                    title: 'Edit Position',
                    maxWidth: '1400px',
                    content: (
                        HStack({ alignment: cTop })(
                            RealmDataContext(
                                UIUpdateContext((update, data, isLoading, isUpdateing) =>
                                    VStack({ alignment: cTopLeading, spacing: 10 })(
                                        VStack({ alignment: cTopLeading, spacing: 20 })(
                                            Text('Position Information'),

                                            TextField()
                                                .label('*Record ID')
                                                .formField('position_record_id', [new RequiredRule('Record ID required.')]),

                                            TextField()
                                                .label('*Name')
                                                .formField('position_name', [new RequiredRule(' Name required.')]),

                                        ),
                                        HStack(
                                            HStack({ alignment: cTrailing, spacing: 10 })(
                                                Button(
                                                    Text('Cancel')
                                                ).kind(ButtonType.SECONDARY)
                                                    .onClick(() => {
                                                        navigate(-1);
                                                    }),
                                                Views.AcceptButton({
                                                    label: 'Update', loading: isUpdateing, action: () => {
                                                        this.SetValue('tenant_id', useSessionService().TenantId);
                                                        update()
                                                    }
                                                }),
                                            )
                                                .paddingTop('20px')
                                                .height(50)
                                                .borderTop('solid 1px hsl(230, 30%, 96%)')
                                        ).paddingTop('20px').height()

                                    ).padding(30).foregroundColor('#676767').height().maxWidth('50%')
                                ).resource('positions').filter({ id: position_id })
                                    .onSuccess(() => {
                                        this.InvalidateQueries();
                                        navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/position/active-positions');
                                        //this.OnOKClick();
                                    })
                            )
                        )
                    )
                })
            )
        )
    }
}