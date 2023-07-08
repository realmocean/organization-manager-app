import { useSessionService } from "@realmocean/services";
import { DirectoryProtocol } from "@tuval/forms";

export const AddUserDialogData = {
    title: 'Create Employee',
    protocol: DirectoryProtocol,
    mode: 'create',
    resource: 'employees',
    //mutation: 'create_employee',
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

export const EditUserDialogData = (employee_id: string) => ({
    title: 'Update Employee',
    protocol: DirectoryProtocol,
    mode: 'update',
    resource: 'employees',
    resourceId: employee_id,
    /* query: `
    employee(id:"${employee_id}") {
        id
        employee_record_id
        employee_name
        employee_last_name
        title_id
        department_id
    }
    `,
    mutation: 'update_employee', */
    fieldMap: {
        tenant_id: {
            name: 'id',
            value: employee_id,
            type: 'virtual'
        },
        employee_record_id: {
            id: "employee_record_id",
            name: "employee_record_id",
            //fieldId: "/employee/employee_record_id",
            type: "text",
            label: "Record ID",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        employee_name: {
            id: "employee_name",
            name: "employee_name",
            //fieldId: "/employee/employee_name",
            type: "text",
            label: "Employee name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        employee_last_name: {
            id: "employee_last_name",
            name: "employee_last_name",
            //fieldId: "/employee/employee_last_name",
            type: "text",
            label: "Employee last name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        title: {
            id: "title_id",
            name: "title_id",
            //fieldId: "/employee/title_id",
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
            //fieldId: "/employee/department_id",
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
})