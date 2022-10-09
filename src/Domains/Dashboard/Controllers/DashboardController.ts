import { Color, cTopLeading, HStack, IconLibrary, State, UIController, UIScene, VStack } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DashboardController extends UIController {
    @State()
    private items: any[];

    @State()
    private showingItems: any[];

    @State()
    private value: any;

    public InitController() {
        this.items = [
            {
                name: 'Mert',
                code: "2"
            },
            {
                name: 'Zans',
                code: "3"
            },
            {
                name: 'Test',
                code: "4"
            }
        ]

        this.showingItems = [
            {
                name: 'Mert',
                code: "2"
            },
            {
                name: 'Zans',
                code: "3"
            },
            {
                name: 'Test',
                code: "4"
            }
        ]
    }

    private search(value: string) {
        this.showingItems = [...this.items.filter((item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)];
    }
    public LoadView() {
        return (
            UIScene(
                /*   HStack(
                      AutoComplete().items(this.showingItems)
                          .searchMethod((e) => this.search(e.query))
                          .field('name')
                          .value(this.value)
                          .onChange((e) => this.value = e.value)
                          .itemTemplate((item) => Text(item.name)),
                      DropDown().model(this.items).itemTemplate(() => Text('AAA')).border('solid 1px gray')
                  ).height(), */
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Dashboard'),
                    Views.RightSidePage({
                        title: 'Dashboard',
                        content: (
                            VStack({ alignment: cTopLeading, spacing: 20 })(
                                HStack({ alignment: cTopLeading, spacing: 10 })(
                                    /*  DashboardItem(IconLibrary.Visibility, 'Logins', '1300', 'AVG'),
                                     DashboardItem(IconLibrary.Visibility, 'App Downloads', '1300', 'AVG') */
                                    Views.DashboardTile('Tenants', '126', IconLibrary.AccountCircle,
                                        Color.blue500, Color.blue100),
                                    Views.DashboardTile('Errors', '12', '\\d21e',
                                        Color.red700, Color.red100),
                                    Views.DashboardTile('Active Tickets', '55', '\\d1f3',
                                        Color.green500, Color.green100),

                                ).height()
                            )
                        )
                    })
                )
            )
        )
    }
}