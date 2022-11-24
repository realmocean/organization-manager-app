import { useOrgUIProvider } from '@realmocean/common';
import {
    cLeading, Color, cTopLeading, HStack, IconLibrary, State, UIController, UIScene, VStack, Text,
    bindFormController, UIFormController, Button, useForm, TextField, UIFormView, RequiredRule, MaxLengthRule
} from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DashboardController extends UIFormController {
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

    protected override OnSubmit(data) {
        alert(JSON.stringify(data))
    }
    public LoadView() {

        /*   const defaultValues = {
              name: 'bvbcvb',
              email: '',
              password: '',
              date: null,
              country: null,
              accept: false
          }
          const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues }); */
        debugger
        const controller = bindFormController();
        
        //console.log(controller);

        return (
            UIScene(
               /*  VStack(
                    TextField().formField('employee_name',
                        [
                            new RequiredRule('employee_name must be set'),
                            new MaxLengthRule(20, 'employee name must be lower than 20')
                        ]),
                        TextField().formField('employee_last_name',
                        [
                            new RequiredRule('Employe last name required'),
                            new MaxLengthRule(20, 'employee name must be lower than 20')
                        ]),
                    Button(
                        Text('Save')
                    ).onClick(() => this.Submit())
                ), */
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
                                HStack({ alignment: cLeading })(
                                    Text('Dashboard')
                                        .foregroundColor('#444')
                                        .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                                ).height().marginBottom('24px'),
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