//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    Button,
    ButtonType,
    cLeading, cTop, cTopLeading, cTrailing, Fragment, HStack, Icon, Icons, RequiredRule, Spacer,
    Spinner, State, Text, UIController, UIFormController, UIRecordContext, UIRecordsContext, UIUpdateContext, useNavigate,
    useParams, VStack
} from "@tuval/forms";
import { IPosition, useOrganizationUIService } from '@realmocean/common';
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";

import { UITextBoxView } from "@realmocean/inputs";
import { TextField } from "../../../views/components/TextField";
import { Dropdown } from "../../../views/components/Dropdown";



export class EditPositionController extends UIFormController {

    @State()
    private searchText: string;

    @State()
    private parentPosition: IPosition;

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
                                            VStack({ alignment: cLeading, spacing: 5 })(
                                                Text('Parent').fontWeight('700'),
                                                HStack({ alignment: cLeading })(
                                                    HStack({ alignment: cLeading })(
                                                        this.parentPosition != null ?  Text(this.parentPosition.Name) :
                                                        this.GetValue('parent_id') == null ? Fragment() :
                                                            UIRecordContext(({ data }) =>
                                                                Text(data?.position_name)
                                                            ).resource('positions').filter({ id: this.GetValue('parent_id') })

                                                    ),
                                                    HStack(
                                                        Icon(Icons.Menu).size(15).foregroundColor('white')
                                                    ).height().width()
                                                        .padding(5)
                                                        .cornerRadius(5)
                                                        .background('#DB1A5A')
                                                        .onClick(() => {
                                                            useOrganizationUIService().selectPosition(false).then(positions => {
                                                                if (positions.length > 0) {
                                                                    this.parentPosition = positions[0];
                                                                    this.SetValue('parent_id', positions[0].Id);
                                                                }
                                                            })
                                                        })
                                                )
                                                    .cornerRadius(5)
                                                    .border('solid 1px #CED4DA').padding(5)
                                            )
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
                                                        this.SetValue('position_owner', null);
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