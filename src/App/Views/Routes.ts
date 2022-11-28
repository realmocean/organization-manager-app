import { UIRoute, UIRoutes, bindNavigate, bindState, useEffect } from '@tuval/forms';
import { DashboardController } from '../../Domains/Dashboard/Controllers/DashboardController';
import { EditEmployeeController } from '../../Domains/Users/Controllers/EditEmployeeController';
import { NewUserController } from '../../Domains/Users/Controllers/NewUserController';
import { UserListController } from '../../Domains/Users/Controllers/UserListController';
import { UsersController } from '../../Domains/Users/Controllers/UsersController';
import { LayoutController } from '../Controllers/LayoutController';
import { TitlesController } from '../../Domains/Titles/Controllers/TitlesController';
import { TitleListController } from '../../Domains/Titles/Controllers/TitleListController';
import { NewTitleController } from '../../Domains/Titles/Controllers/NewTitleController';
import { EditTitleController } from '../../Domains/Titles/Controllers/EditTitleController';
import { OrganizationUnitsController } from '../../Domains/OrganizationUnits/Controllers/OrganizationUnitsController';
import { OrganizationUnitListController } from '../../Domains/OrganizationUnits/Controllers/OrganizationUnitListController';
import { NewOrganizationUnitController } from '../../Domains/OrganizationUnits/Controllers/NewOrganizationUnitController';
import { PositionsController } from '../../Domains/Positions/Controllers/PositionsController';
import { PositionListController } from '../../Domains/Positions/Controllers/PositionList.Controller';
import { NewPositionController } from '../../Domains/Positions/Controllers/NewPositionController';
import { EditPositionController } from '../../Domains/Positions/Controllers/EditPositionController';
import { DeleteEmployeeController } from '../../Domains/Users/Controllers/deleteEmployeeController';
import { EditDepartmentController } from '../../Domains/OrganizationUnits/Controllers/EditDepartmentController';
import { IssuesController } from '../../Domains/Issues/Controller/IssuesController';
import { IssueListController } from '../../Domains/Issues/Controller/IssueListController';
import { NewIssueController } from '../../Domains/Issues/Controller/NewIssueController';
import { DeleteDepartmentController } from '../../Domains/OrganizationUnits/Controllers/DeleteDepartmentController';
import { DeletePositionController } from '../../Domains/Positions/Controllers/DeletePositionController';
import { DeleteTitleController } from '../../Domains/Titles/Controllers/DeleteTitleController';
import { MarketplaceController } from '../../Domains/Marketplace/Controllers/MarketplaceController';
import { MarketplaceListController } from '../../Domains/Marketplace/Controllers/MarketplaceListController';
import { BrokersController } from '../../Domains/Brokers/Controllers/BrokersController';
import { InstalledBrokerListController } from '../../Domains/Brokers/Controllers/InstalledBrokerListController';
import { CompanyController } from '../../Domains/company/controllers/CompanyController';
import { EditUserLayoutController } from '../../Domains/Users/Controllers/EditUserLayoutController';
import { EditDepartmentLayoutController } from '../../Domains/OrganizationUnits/Controllers/EditDepartmentLayoutController';

export const Routes = () => {
    const [LoggedIn, setLoggedIn] = bindState(null);

    let navigate = bindNavigate();
    useEffect(() => {
        if (LoggedIn) {
            navigate("/app(tenantmanager)/dashboard");
            return () => setLoggedIn(false)
        }
    }, [LoggedIn]);

    setLoggedIn(true);

    return UIRoutes(
        UIRoute(
            UIRoute('/app(tenantmanager)/dashboard', DashboardController),

            UIRoute(

                UIRoute('employee', UserListController),
                UIRoute('department', OrganizationUnitListController),
                UIRoute('position', PositionListController),
                UIRoute('title', TitleListController),

                // MARK: Organization Units Routes


            )('company/list', CompanyController),

            UIRoute(
                UIRoute(
                    UIRoute('overview', EditEmployeeController),
                )('employee/:employee_id', EditUserLayoutController),

                UIRoute(
                    UIRoute('overview', EditDepartmentController),
                )('department/:department_id', EditDepartmentLayoutController),
                // MARK: Organization Units Routes


            )('company/edit', LayoutController),


            // MARK: Emplkoyee routes


            // MARK: Titles Routes
            UIRoute(
                UIRoute('list', TitleListController),
                UIRoute('add', NewTitleController),
                UIRoute('edit/:title_id', EditTitleController),
                UIRoute('delete/:title_id', DeleteTitleController),
            )('title', TitlesController),


            UIRoute(
                UIRoute('list', PositionListController),
                UIRoute('add', NewPositionController),
                UIRoute('edit/:position_id', EditPositionController),
                UIRoute('delete/:position_id', DeletePositionController),
            )('position', PositionsController),

            UIRoute(
                UIRoute('list', IssueListController),
                UIRoute('new', NewIssueController),
            )('issue', IssuesController),

            // Brokers
            UIRoute(
                UIRoute('installed', InstalledBrokerListController),

            )('broker', BrokersController),


            // Marketplace
            UIRoute(
                UIRoute('list', MarketplaceListController),

            )('marketplace', MarketplaceController),



        )('/app(tenantmanager)', LayoutController),
        UIRoute('*', DashboardController) //.redirectTo('/app(realmmanager)/dashboard')
    )
    /*
        UIRoutes(
            UIRoute('/app:realmmanager/tenant/list', new TenantsController()),
            UIRoute('/realm_manager/tenant/add', new AddEditTenantController()),
            UIRoute('/realm_manager/tenant/edit/:tenant_id', new AddEditTenantController()),
            UIRoute('/realm_manager/tenant/delete/:tenant_id', new DeleteTenantController()),

            UIRoute('/realm_manager/account/list', new AccountsController()),
            UIRoute('/realm_manager/account/add', new NewAccountController()),
            UIRoute('/realm_manager/account/edit/:account_id', new EditAccountController()),
            UIRoute('/realm_manager/account/delete/:account_id', new DeleteTenantController()),
        ) */
}


