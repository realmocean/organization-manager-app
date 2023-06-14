import { useSessionService } from "@realmocean/services";

export const AddPositionDialogData = {
    title:'Create Position',
    mode: 'create',
    resource: 'positions',
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
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        position_name: {
            id: "position_name",
            name: "position_name",
            type: "text",
            label: "Position name",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        parent_position: {
            id: "parent_id",
            name: "parent_id",
            type: "positionselect",
            label: "Parent",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        },
        position_owner: {
            id: "position_owner_id",
            name: "position_owner_id",
            type: "positionselect",
            label: "Owner",
            helpText: "Tell us your middle name,<br /> initial, or type N/A."
        }
    }
}