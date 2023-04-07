import { UIController, UIView, Text, UIRoutes, UIRoute, useLocation } from "@tuval/forms";
import { DashboardController } from "../controllers/DashboardController";
import { LayoutController } from "../controllers/LayoutController";
import { BrokersController } from "../domains/brokers/controllers/BrokersController";
import { InstalledBrokerListController } from "../domains/brokers/controllers/InstalledBrokerListController";
import { CompanyController } from "../domains/company/controllers/CompanyController";
import { DepartmentListController } from "../domains/departments/controllers/DepartmentListController";
import { AppListController } from "../domains/marketplace/apps/controllers/AppListController";
import { MarketplaceListController } from "../domains/marketplace/controllers/MarketplaceListController";
import { PositionListController } from "../domains/positions/controllers/PositionListController";
import { AppIpRestrictionListController } from "../domains/restrictions/appiprestriction/controllers/AppIpRestrictionListController";
import { SessionsController } from "../domains/sessions/controllers/SessionsController";
import { UserListController } from "../domains/users/controllers/UserListController";
import { FlowListController } from "../domains/workflows/flows/controllers/FlowListController";
import { FlowModelController } from "../domains/workflows/flows/controllers/FlowModelController";
import { FlowProjectListController } from "../domains/workflows/flows/controllers/FlowProjectListController";
import { EditUserController } from "../domains/users/controllers/EditUserController";
import { EditDepartmentController } from "../domains/departments/controllers/EditDepartmentController";
import { Tab1Controller } from "../domains/users/controllers/Tab1";
import { Tab2Controller } from "../domains/users/controllers/Tab2";

export const Routes = () => {

    let regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')

    const str = window.location.href;

    let m;
    console.log(m = regex.exec(str))


    const location = useLocation()
    return (
        UIRoutes(
            UIRoute('/', LayoutController).children(
                UIRoute('sessions', SessionsController),

                UIRoute('company/list/employee', UserListController).children(
                    UIRoute('tab1', Tab1Controller),
                    UIRoute('tab2', Tab2Controller),
                ),
                UIRoute('company/edit/employee/:employee_id', EditUserController),

                UIRoute('company/list/department', DepartmentListController),
                UIRoute('company/edit/department/:department_id', EditDepartmentController),

                UIRoute('company/list/position', PositionListController),

                UIRoute('restrictions/appiprestriction/list', AppIpRestrictionListController),


                UIRoute('brokers', BrokersController).children(
                    UIRoute('installed', InstalledBrokerListController),

                ),

                // Marketplace
                UIRoute('marketplace/apps', AppListController),
                UIRoute('marketplace/brokers', MarketplaceListController),

                // Workflows
                //UIRoute('workflow/flow/:flow_id/model', FlowModelController),
                //UIRoute('workflow/flow-projects/:project_id/flows', FlowListController),

                UIRoute('workflow/flows/flow-projects', FlowProjectListController),
                UIRoute('workflow/flows/flow-projects/:project_id/flows', FlowListController),
                UIRoute('workflow/flows/:flow_id/model', FlowModelController),




                UIRoute('b', DashboardController),
                UIRoute('', DashboardController).isIndex(true)
            )
        )
    )
}