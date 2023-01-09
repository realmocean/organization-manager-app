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
    cTop,
    RequiredRule,
    ScrollView,
    cVertical,
    UIFormController,
    useLogService,
    Icon,
    useQueryClient,
    useQuery,
    ForEach,
    WebApiDataProvider,
    useGetList,
    useDataProvider,
    _useDataProvider,
    DataContext,
    viewFunc,
    useController,
    bindController,
    _DataContext,
    useGetOne,
    RecordContext,
    useRecordContext,
    UIRecordContext,
    UIRecordsContext,
    UIUpdateContext,
    useToastService
} from '@tuval/forms';

import { RealmBrokerClient, useOrgProvider, IEmployeeTitle, IDepartment, useOrgUIProvider, IEmployee, useSessionService } from '@realmocean/common';
import { Color, UIImage, NavigateFunction, bindNavigate, Binding } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { Views } from '../../../Views/Views';
import { UIDropdownListView } from '@realmocean/dropdowns';
import { UITextBoxView } from '@realmocean/inputs';
import { HttpClient } from '@tuval/core';
import { PostRecordContext, UserRecordContext } from '../../../Views/Contexts';
import { RealmDataContext } from '../../../Views/DataContexts';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='


function usePosts() {
    return useQuery("posts", async () => {
        const { data } = await HttpClient.Get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
    });
}

interface IFormData {
    employee_record_id: string;
    employee_name: string;
    employee_last_name: string;
    employee_title: IEmployeeTitle;
    employee_department: IDepartment;

}

const a = () => {

    const queryClient = _useDataProvider();
    console.log('queryClient')
    console.log(queryClient)
    /*  const { data, total, isLoading, error } = useGetList(
         'posts',
         {
             pagination: { page: 1, perPage: 100 },
             sort: { field: 'published_at', order: 'DESC' }
         }
     ); */

    //if (isLoading) { return Text('fdsdfsdfsdf').fontSize(20) }
    // console.log(data)

    const { data, isLoading, error } = useGetOne('posts', { id: 3 });
    if (isLoading) { return Text('fdsdfsdfsdf').fontSize(20) }

    return (
        UserRecordContext(1, (user) =>
            VStack(
                Text(JSON.stringify(user)),
                PostRecordContext(1, (post) =>
                    VStack(
                        UITextBoxView()
                            .floatlabel(false)
                            .width('100%')
                            .placeholder('*Name')
                            .formField('title', [new RequiredRule('Name required.')]),
                        Text(JSON.stringify(post)),

                    )
                )
            )
        )
    )



    /* return (
        VStack(
            ...ForEach(data)( (item: any) =>
                Text(item.title)
            )
        )
        
    ) */
}
export class EditEmployeeController extends UIFormController {



    @Binding()
    private employeeId: string;


    @State()
    private departments: IDepartment[];




    protected override BindRouterParams({ employee_id }) {


        this.employeeId = employee_id;

        //   this.BeginUpdate();



        const orgService = useOrgProvider();

        /*   orgService.getEmployeeById(employee_id).then(employee => {
              this.employee = employee;
  
              this.SetValue('employee_record_id', employee.RecordId)
              this.SetValue('employee_name', employee.Name)
              this.SetValue('employee_last_name', employee.LastName)
              this.SetValue('employee_title', { Id: employee.TitleId })
              this.SetValue('employee_department', { Id: employee.DepartmentId })
          }) */


        /*   Promise.all([
              orgService.getTitles(),
              orgService.getDepartments(),
          ]).then((results) => {
              const [titles, departments] = results;
              this.titles = titles;
              this.departments = departments;
              this.employeeId = employee_id;
          }) */


    }

    /*  protected override OnSubmit(data: IFormData) {
         alert(JSON.stringify(data))
 
         const orgService = useOrgProvider();
         orgService.updateEmployee({
             Id: this.employeeId,
             RecordId: data.employee_record_id,
             Name: data.employee_name,
             LastName: data.employee_last_name,
             TitleId: data.employee_title?.Id,
             DepartmentId: data.employee_department?.Id
         }).then(() => {
             this.navigotor('/app(tenantmanager)/company/list/employee', { replace: true });
         })
 
     } */

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {


        /*  return () => (
             Text('')
         ) */

        /*   const dataProvider = useDataProvider();
         console.log(dataProvider)
  
          const { _data, total, isLoading, _error } = useGetList(
              'posts',
              { 
                  pagination: { page: 1, perPage: 10 },
                  sort: { field: 'published_at', order: 'DESC' }
              }
          );
  
          if (isLoading) { return Text('fdsdfsdfsdf').fontSize(20) }
  
          console.log(_data)
  
          const logService = useLogService();
          logService.log('EditEmployeeController rendered.') */

        //const queryClient = useQueryClient();
        //alert(queryClient)


        return (
            this.employeeId == null ? Text('employee id waiting') :
                RealmDataContext(() =>
                    UIUpdateContext((update) =>
                        UIScene(
                            VStack({ alignment: cTop, spacing: 24 })(
                                //  a(),

                                Views.FormCommanSection({
                                    title: 'Update Record ID',
                                    content: (
                                        HStack(
                                            UITextBoxView()
                                                .floatlabel(false)
                                                .width('100%')
                                                //.placeholder('*Record ID')
                                                .formField('employee_record_id', [new RequiredRule('Record ID required.')]),
                                        )
                                    ),
                                    footer: (
                                        Views.AcceptButton({ label: 'Update', action: () => update() })
                                    )
                                }),

                                Views.FormCommanSection({
                                    title: 'Update Name',
                                    content: (
                                        HStack(
                                            UITextBoxView()
                                                .floatlabel(false)
                                                .width('100%')
                                                .placeholder('*Name')
                                                .formField('employee_name', [new RequiredRule('Name required.')]),
                                        )
                                    ),
                                    footer: (
                                        Views.AcceptButton({ label: 'Update', action: () => update() })
                                    )
                                }),

                                Views.FormCommanSection({
                                    title: 'Update Last Name',
                                    content: (
                                        HStack(
                                            UITextBoxView()
                                                .floatlabel(false)
                                                .width('100%')
                                                .placeholder('*Last Name')
                                                .formField('employee_last_name', [new RequiredRule('Last Name required.')]),
                                        )
                                    ),
                                    footer: (
                                        Views.AcceptButton({ label: 'Update', action: () => update() })
                                    )
                                }),

                                Views.FormCommanSection({
                                    title: 'Update Title',
                                    content: (
                                        UIRecordsContext(({ data, isLoading }) =>
                                            UIDropdownListView()
                                                .floatlabel(true)
                                                .dataSource(data)
                                                .fields({ text: 'title_name', value: 'id' })
                                                .placeHolder('Please select employee title')
                                                .width('100%')
                                                .formField('title_id', [/* new RequiredRule('Employee Last Name required.') */])
                                                .allowFiltering(true)
                                        ).resource('titles').filter({ 'tenant_id': useSessionService().TenantId })


                                    ),
                                    footer: (
                                        Views.AcceptButton({ label: 'Update', action: () => update() })
                                    )
                                }),

                                Views.FormCommanSection({
                                    title: 'Update Departman',
                                    content: (
                                        UIRecordsContext(({ data, isLoading }) =>
                                            UIDropdownListView()
                                                .floatlabel(true)
                                                .dataSource(data)
                                                .fields({ text: 'org_unit_name', value: 'id' })
                                                .placeHolder('Department')
                                                .width('100%')
                                                .formField('department_id', [/* new RequiredRule('Please select employee department') */])
                                                .allowFiltering(true)
                                        ).resource('departments').filter({ 'tenant_id': useSessionService().TenantId })

                                    ),
                                    footer: (
                                        Views.AcceptButton({ label: 'Update', action: () => update() })
                                    )
                                }),

                              /*   Views.FormDangerSection({
                                    title: 'Danger Zone',
                                    subTitle: 'The employee will be permanently deleted, including all data associated with this employee. This action is irreversible.',
                                    content: (
                                        HStack(
                                            HStack({ alignment: cLeading, spacing: 10 })(
                                                Icon('\\ea67').size(35).foregroundColor('hsl(218 12% 43%)'),
                                                Text(`${this.employee?.Name} ${this.employee?.LastName}`).fontSize(14).foregroundColor('rgb(96, 106, 123)').fontWeight('600').fontFamily('"Inter", arial, sans-serif')

                                            ).padding(24).background('hsl(240 100% 99%)').border('solid 1px hsl(240 30% 96%)')
                                        ).padding(10)

                                    ),
                                    footer: (
                                        Views.DeleteButton({ label: 'Delete', action: () => update() })
                                    )
                                }) */
                            ).padding(10).paddingTop('50px').foregroundColor('#676767')
                        )

                    )
                        .resource('employees')
                        .filter({ id: this.employeeId })
                        .onSuccess(() =>
                            useToastService().Success('Updated')
                            //this.navigotor('/app(tenantmanager)/company/list/employee')
                        )
                )
        )

        //const { status, data, error, isFetching } = usePosts();



    }
}