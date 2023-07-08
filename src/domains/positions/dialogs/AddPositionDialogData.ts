import { useSessionService } from "@realmocean/services";
import { DirectoryProtocol } from "@tuval/forms";

export const AddPositionDialogData = {
    title: 'Create position',
    protocol: DirectoryProtocol,
    mode:'create',
    resource:'positions',
    //mutation: 'create_position',
    fieldMap: {
        tenant_id: {
            name: 'tenant_id',
            value: useSessionService().TenantId,
            type: 'virtual'
        },
        position_record_id: {
            id: "position_record_id",
            name: "position_record_id",
            type: "text",
            label: "Record ID",
            helpText: ""
        },
        position_name: {
            id: "position_name",
            name: "position_name",
            type: "text",
            label: "Position name",
            helpText: ""
        },
        parent_position: {
            id: "parent_id",
            name: "parent_id",
            type: "positionselect",
            label: "Parent",
            helpText: ""
        },
        position_owner: {
            id: "position_owner_id",
            name: "position_owner_id",
            type: "employeeselect",
            label: "Owner",
            helpText: ""
        }
    }
}


export const EditPositionDialogData = (position_id) => ({
    title: 'Update Position',
    protocol: DirectoryProtocol,
    mode:'update',
    resource:'positions',
    resourceId:position_id,
    /* query: `
    position(id:"${position_id}") {
        id
        position_record_id
        position_name
        parent_id
        position_owner_id
    }
    `, */
    //mutation: 'update_position',
    fieldMap: {
        tenant_id: {
            name: 'id',
            value: position_id,
            type: 'virtual'
        },
        position_record_id: {
            id: "position_record_id",
            name: "position_record_id",
            //fieldId: '/position/position_record_id',
            type: "text",
            label: "Record ID",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        position_name: {
            id: "position_name",
            name: "position_name",
          //  fieldId: '/position/position_name',
            type: "text",
            label: "Position name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        parent_position: {
            id: "parent_id",
            name: "parent_id",
           // fieldId: '/position/parent_id',
            type: "positionselect",
            label: "Parent",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        position_owner: {
            id: "position_owner_id",
            name: "position_owner_id",
           // fieldId: '/position/position_owner_id',
            type: "employeeselect",
            label: "Owner",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        }
    }
})