import { useSessionService } from "@realmocean/services";

export const AddDepartmentDialogData = {
    title:'Create department',
    mode: 'create',
    resource: 'departments',
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