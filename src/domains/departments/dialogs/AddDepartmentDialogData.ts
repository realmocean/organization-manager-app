import { useSessionService } from "@realmocean/services";
import { DirectoryProtocol } from "@tuval/forms";

export const AddDepartmentDialogData = {
    title:'Create department',
    protocol: DirectoryProtocol,
    mode:'create',
    resource:'departments',
    //mutation: 'create_department',
    fieldMap: {
        tenant_id: {
            name: 'tenant_id',
            value: useSessionService().TenantId,
            type: 'virtual'
        },
        org_unit_record_id: {
            id: "org_unit_record_id",
            name: "org_unit_record_id",
            type: "text",
            label: "Record ID",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        org_unit_name: {
            id: "org_unit_name",
            name: "org_unit_name",
            type: "text",
            label: "Department name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        }
    }
}

export const EditDepartmentDialogData = (department_id: string)=>({
    title:'Update department',
    protocol: DirectoryProtocol,
    mode:'update',
    resource:'departments',
    resourceId:department_id,
   // mutation: 'create_department',
    fieldMap: {
        tenant_id: {
            name: 'tenant_id',
            value: useSessionService().TenantId,
            type: 'virtual'
        },
        org_unit_record_id: {
            id: "org_unit_record_id",
            name: "org_unit_record_id",
            type: "text",
            label: "Record ID",
            helpText: ""
        },
        org_unit_name: {
            id: "org_unit_name",
            name: "org_unit_name",
            type: "text",
            label: "Department name",
            helpText: ""
        }
    }
})