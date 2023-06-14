import { useSessionService } from "@realmocean/services";

export const AddUserDialogData = {
    title: 'Create Employee',
    mode: 'create',
    resource: 'employees',
    fieldMap: {
        tenant_id: {
            name: 'tenant_id',
            value: useSessionService().TenantId,
            type: 'virtual'
        },
        employee_record_id: {
            id: "employee_record_id",
            name: "employee_record_id",
            type: "text",
            label: "Record ID",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        employee_name: {
            id: "employee_name",
            name: "employee_name",
            type: "text",
            label: "Employee name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        employee_last_name: {
            id: "employee_last_name",
            name: "employee_last_name",
            type: "text",
            label: "Employee last name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        title: {
            id: "title_id",
            name: "title_id",
            type: "select",
            label: "Title",
            query: {
                body: `titles {
                    id
                    title_name
                }`,
                resource: "titles",
                text: "title_name",
                key: "id"
            }
        },
        department: {
            id: "department_id",
            name: "department_id",
            type: "select",
            label: "Department",
            query: {
                body: `departments {
                    id
                    org_unit_name
                }`,
                resource: "departments",
                text: "org_unit_name",
                key: "id"
            }
        }
    }
}