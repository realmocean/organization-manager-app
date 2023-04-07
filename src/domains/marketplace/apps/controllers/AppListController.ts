import { cLeading, cTopLeading, cVertical, ForEach, HStack, ScrollView, Spinner, State, TextField,Text, UIController, UIRecordsContext, VStack } from "@tuval/forms";
import { RealmoceanDataContext } from "../../../../views/DataContexts";
import { LeftSideMenuView } from "../../../../views/LeftMenu";
import { Views } from "../../../../views/Views";
import { InstallBrokerDialog } from "../../dialogs/InstallBrokerDialog";
import { BrokerAddonCard } from "../../views/BrokerAddonCard";
import { AppCardView } from "../views/AppCardView";


const broker_cats = [
    {
        title: 'Explore',
        subItems: [
            {
                title: 'All Categories'
            },
            {
                title: 'Featured'
            },
            {
                title: 'New Brokers'
            },
            {
                title: "Editor's Choice"
            }


        ]
    },
    {
        title: 'Browse by Category',
        subItems: [
            {
                title: 'Database'
            },
            {
                title: 'CRM'
            },
            {
                title: 'Marketing'
            },
            {
                title: 'Project Management'
            },
            {
                title: "Software Development"
            },
            {
                title: 'Team Management'
            },
            {
                title: 'Productivity & Efficiency'
            },
            {
                title: 'Integrations'
            },
            {
                title: "Collaboration"
            },
            {
                title: 'Reporting & Analytics'
            },
            {
                title: 'Import & Export'
            },
            {
                title: "Build In Integrations"
            }


        ]
    }
]


export class AppListController extends UIController {

    @State()
    private brokers: any[];



    private isLoading(): boolean {
        return this.brokers == null;
    }



    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {


        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Apps'),
                RealmoceanDataContext(
                    Views.RightSidePage({
                        title: 'Apps',
                        maxWidth: 'auto',
                        content: (
                            HStack({ alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box
                                        HStack(
                                            TextField().placeholder('Search by Broker Name')
                                                .onChange((value) => this.Search_Action(value))
                                        ).padding(10).height()

                                    ).height().marginBottom('24px'),
                                    HStack({ alignment: cTopLeading })(
                                        ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                            VStack({ alignment: cTopLeading })(
                                                ...ForEach(broker_cats)(cat =>
                                                    VStack({ alignment: cTopLeading })(
                                                        Text(cat.title).foregroundColor('#323338').fontSize(18).fontWeight('500').marginLeft('10px').marginBottom('12px').marginTop('20px'),
                                                        ...ForEach(cat.subItems)(subItem =>
                                                            HStack({ alignment: cLeading })(
                                                                Text(subItem.title).foregroundColor('#323338').fontSize(16).fontWeight('400').lineHeight(32)
                                                                    .fontFamily(" Manrope,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif"),
                                                            )
                                                                .height(40)
                                                                .cursor('pointer')
                                                                .background({ hover: '#e6e9ef' }).height().cornerRadius(5).padding(5).paddingLeft('10px')
                                                        )
                                                    ),

                                                )

                                            ).height().padding('10px')
                                        ).width(300),
                                        UIRecordsContext(({ data, total, isLoading }) =>
                                            isLoading ? HStack(Spinner()) :
                                                ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                                    ...ForEach([
                                                        {
                                                            title: 'All Categories',
                                                            items: [...data]
                                                        }
                                                    ])(category =>

                                                        VStack({ alignment: cTopLeading })(
                                                            Text(category.title).height(40).fontSize(20).fontWeight('600').padding('1rem'),
                                                            HStack({ alignment: cTopLeading })(
                                                                ...ForEach(category.items)((item: any) =>
                                                                    AppCardView(item.app_qualified_name, item.app_icon, item.app_display_name, item.app_short_description)
                                                                       // .onClick(() => InstallBrokerDialog.Show(item.id))
                                                                )
                                                            ).width().height().wrap('wrap')
                                                        )
                                                            .paddingLeft('20px')
                                                            .padding(10)
                                                            .height()
                                                            //.background('#F6F6F6')

                                                    )
                                                )
                                        ).resource('app-mainstore-settings')
                                    )

                                )

                            )
                        )
                    })
                )
            )

        )

    }
}