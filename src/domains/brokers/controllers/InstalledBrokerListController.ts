import { cLeading, cTopLeading, cVertical, ForEach, HStack, ScrollView, Spacer, Spinner,Text, State, TextField, UIFormController, UIRecordsContext, VStack } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { Views } from "../../../views/Views";
import { BrokerAddonCard } from "../../marketplace/views/BrokerAddonCard";
import { ConnectionListDialog } from "../dialogs/ConnectionListDialog";


export class InstalledBrokerListController extends UIFormController {

    @State()
    private brokers: any[];

    public BindRouterParams({ }) {

    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
        return (
            RealmDataContext(
                Views.RightSidePage({
                    title: 'Installed Brokers',
                    maxWidth: 'auto',
                    content: (
                        HStack({ alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box
                                        HStack(
                                            TextField().placeholder('Search by Broker Name')
                                                .onChange((value) => this.Search_Action(value))
                                        ).height().padding(20).cornerRadius(5),
                                        Spacer()

                                    ).height().marginBottom('24px'),
                                    UIRecordsContext(({ data, isLoading }) =>
                                    isLoading ? Spinner() :
                                        ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                            ...ForEach([
                                                {
                                                    title: 'Test',
                                                    items: [...data]
                                                }
                                            ])(category =>
                                                VStack({ alignment: cTopLeading })(
                                                    Text(category.title).height(40).fontSize(20).fontWeight('600').padding('1rem'),
                                                    HStack({ alignment: cTopLeading })(
                                                        ...ForEach(category.items)((item: any) =>
                                                            BrokerAddonCard(item.broker_qualified_name, item.icon_link, item.broker_display_name, item.broker_short_description)
                                                                .onClick(() => ConnectionListDialog.Show(item))
                                                        )
                                                    ).width().height().wrap('wrap')
                                                )
                                                    .padding(20)
                                                    .height()
                                                    //.background('#F6F6F6')

                                            )
                                        )
                                    ).resource('installedbroker')

                                )

                        )
                    )
                })
            )
        )


    }
}