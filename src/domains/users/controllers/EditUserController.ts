//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import { cLeading, cTopLeading, cTrailing, HStack, RequiredRule, Spacer, Spinner, State, Text, TextField, UIController, UIFormController, UIRecordsContext, UIUpdateContext, useNavigate, useParams, VStack } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddUserDialog } from "../dialogs/AddUserDialog";
import { UsersGrid } from "../views/UsersGrid";
import { UITextBoxView } from "@realmocean/inputs";



export class EditUserController extends UIFormController {

    @State()
    private searchText: string;

    public LoadView(): any {
        const { employee_id } = useParams();
        const navigate = useNavigate();
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Employees'),
                Views.RightSidePage({
                    title: 'Employees',
                    maxWidth: '1400px',
                    content: (
                        RealmDataContext(
                            UIUpdateContext((update, data, isLoading, isUpdateing) =>
                                VStack({ alignment: cTopLeading, spacing: 10 })(
                                    VStack({ alignment: cTopLeading, spacing: 15 })(

                                        UITextBoxView()
                                            .floatlabel(false)
                                            .width('100%')
                                            .placeholder('*Record ID')
                                            .formField('employee_record_id', [new RequiredRule('Record ID required.')]),

                                        UITextBoxView()
                                            .floatlabel(false)
                                            .width('100%')
                                            .placeholder('*Name')
                                            .formField('employee_name', [new RequiredRule('Employee Name required.')]),

                                        UITextBoxView()
                                            .floatlabel(false)
                                            .width('100%')
                                            .placeholder('*Last Name')
                                            .formField('employee_last_name', [new RequiredRule('Employee Last Name required.')]),

                                        HStack(
                                            UIRecordsContext(({ data }) =>
                                                Views.DropDown({
                                                    label: 'Title',
                                                    dataSource: data,
                                                    fields: { text: 'title_name', value: 'id' },
                                                    placeholder: 'Please select employee title',
                                                    formFieldOptions: { fieldName: 'title_id', rules: [] }
                                                })
                                            ).resource('titles').filter({ 'tenant_id': useSessionService().TenantId })
                                        ).height(),

                                        UIRecordsContext(({ data }) =>
                                            Views.DropDown({
                                                label: 'Department',
                                                dataSource: data,
                                                fields: { text: 'org_unit_name', value: 'id' },
                                                placeholder: 'Please select department',
                                                formFieldOptions: { fieldName: 'department_id', rules: [] }
                                            })
                                        ).resource('departments').filter({ 'tenant_id': useSessionService().TenantId }),



                                        // Views.InputTextView('Employee ID *', 'Record ID', $(this.employeeId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                                        //Views.InputTextView('Name *', 'First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                                        // Views.InputTextView('Last Name', 'Last Name', $(this.employeeLastName)),
                                        // Views.InputDropdownListView('Title', 'Please select employee title', this.titles, this.employeeTitle?.Id, (e) => this.employeeTitle = e.itemData as any),
                                        //Views.InputDropdownListView('Department', 'Please select employee department', this.departments, this.employeeDepartment?.Id, (e) => this.employeeDepartment = e.itemData as any),
                                        //Views.InputDropdownListView('Department', 'Please select employee department', [], this.employeeDepartment?.Id, (e) => void 0),
                                    ),
                                    HStack(
                                        HStack({ alignment: cTrailing, spacing: 10 })(
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

                                ).padding(30).foregroundColor('#676767').height()
                            ).resource('employees').filter({ id: employee_id })
                                .onSuccess(() => {
                                     this.InvalidateQueries();
                                     navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/employee');
                                    //this.OnOKClick();
                                })
                        )
                    )
                })
            )
        )
    }
}