import { useOrganizationUIService, useOrgUIProvider } from '@realmocean/common';
import {
    cLeading, Color, cTopLeading, HStack, IconLibrary, State, UIController, UIScene, VStack, Text,
    bindFormController, UIFormController, Button, useForm, TextField, UIFormView, RequiredRule, MaxLengthRule, DataContext,
     WebApiDataProvider, getView, UIRecordContext, Template, UIView
} from '@tuval/forms';
import { UIGridView } from '@realmocean/grids';
import { UIMapView } from '@realmocean/maps';


import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'


/* function Templator(_view: UIView | Function) {
    const vNodes: any[] = [];
    const view = getView(null, _view);
    if (view != null) {
        vNodes.push(view.Render());
    }
    return vNodes;
}
 */
function productStateTemplate(props): any {
    return (
        Template(
            HStack(
                DataContext(() =>
                    UIRecordContext(({data}) =>
                        Text('product_state_name = ' + data?.state_name)
                    ).resource('states').filter({ id: props.product_state })
                ).dataProvider(WebApiDataProvider('api'))
            )
        )
    )
    /* DataContext(()=>
        UIRecordContext((post)=>
            Text(post.title)
        ).resource('posts').filter({id: '1'})
    ).dataProvider(WebApiDataProvider('https://jsonplaceholder.typicode.com/')) */



    /*    const vNodes: any[] = [];
      const view = getView(null, _view);
      if (view != null) {
          vNodes.push(view.Render());
      }
      return vNodes;  */


}

const columns =
    [
        { field: 'id', headerText: 'Id', width: 30 },
        { field: 'product_state', headerText: 'State', width: 130, template: productStateTemplate }
    ]

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
                              

                        /*          Button(
                                    Text('Show')
                                ).onClick(()=>{
                                    useOrganizationUIService().selectAccount(true).then(selected => alert(JSON.stringify(selected))); 
                                }),  */
                               /*  UIGridView()
                                    .height('100%')
                                    .columns(columns as any)
                                    .datasource([
                                        {
                                            "userId": 1,
                                            "id": 1,
                                            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                                            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                                        },
                                        {
                                            "userId": 1,
                                            "id": 2,
                                            "title": "qui est esse",
                                            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                                        },
                                    ])
                                , */

                                HStack({ alignment: cTopLeading, spacing: 10 })(
                                    /*  DashboardItem(IconLibrary.Visibility, 'Logins', '1300', 'AVG'),
                                     DashboardItem(IconLibrary.Visibility, 'App Downloads', '1300', 'AVG') */
                                    Views.DashboardTile('Total Active Accounts', '126', IconLibrary.AccountCircle,
                                        Color.blue500, Color.blue100),
                                    Views.DashboardTile('Errors', '12', '\\d21e',
                                        Color.red700, Color.red100),
                                    Views.DashboardTile('Active Tickets', '55', '\\d1f3',
                                        Color.green500, Color.green100),
                                        Views.DashboardTile('Apps', '55', '\\d1f3',
                                        Color.green500, Color.green100),

                                ).height(),
                                Views.DashboardTileBox('Locations', UIMapView())
                                
                            ).padding(20)
                        )
                    })
                )
            )
        )
    }
}