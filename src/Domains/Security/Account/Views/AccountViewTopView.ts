import { getRouterParams, UIRecordContext, Text, HStack, cLeading, Color, VStack } from "@tuval/forms";
import { RealmDataContext } from "../../../../Views/DataContexts";


export const AccountViewTopView = () => {
    const { account_id } = getRouterParams();

    return (
        RealmDataContext(() =>
            UIRecordContext(({ data, isLoading }) =>
                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack(
                        Text('TE').fontSize(40)
                    )
                        .cornerRadius(4)
                        .background('#6f6f6f').foregroundColor(Color.white)
                        .width(114).height(85),
                    VStack({alignment:cLeading})(
                        Text(`${data?.account_first_name} ${data?.account_last_name}`).foregroundColor('#333').fontSize(18),
                        Text(`${data?.account_email}`).foregroundColor('#222').fontSize(13)
                    )

                )
                    .height(160)
            ).resource('account').filter({ 'id': account_id })
        )
    )
}

