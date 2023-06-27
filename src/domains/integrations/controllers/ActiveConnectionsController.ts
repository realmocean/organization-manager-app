
//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { moment } from '@tuval/core';
import {
    HStack,
    State, Text,
    UIFormController,
    VStack,
    cLeading,
    useNavigate, FormBuilder
} from "@tuval/forms";



export class ActiveConnectionsController extends UIFormController {

    @State()
    private searchText: string;

    public LoadView(): any {

        const navigate = useNavigate();
        return (
            FormBuilder.render({
                fieldMap: {
                    tenant_id: {
                        name: 'tenant_id',
                        value: useSessionService().TenantId,
                        type: 'virtual'
                    },
                    datatable: {
                        id: "datatable",
                        name: "datatable",
                        type: "datatable",
                        resource: 'connections',
                        columns: [
                            {
                                field: 'name',
                                header: 'Name',
                                width: '20%',
                                filter: true,
                                sortable: true,
                                body: (row: any) => (
                                    HStack({ spacing: 15 })(
                                        //Icon(Icons.Acc).size(35),
                                        VStack({ alignment: cLeading })(
                                            Text(`${row.name}`).fontFamily('source sans pro').fontSize(16).foregroundColor('#1D76C7')
                                        )
                                    )
                                )
                            },
                            {
                                header: 'Status',
                                field: 'offline',
                                width: '20%',
                               // filter: true,
                                sortable: true,

                            },
                            {
                                header: 'Type',
                                field: 'type',
                                width: '20%',
                               // filter: true,
                                sortable: true,

                            },
                            {
                                header: 'API',
                                field: 'type',
                                width: '10%',
                                //filter: true,
                                sortable: true,

                            },
                            {
                                header: 'Last updated',
                                field: 'lastModified',
                                width: '10%',
                                sortable: true,
                                body: (row: any) => (
                                    HStack({ spacing: 15 })(
                                        VStack({ alignment: cLeading })(
                                            Text(moment(row.lastModified).fromNow())
                                        )
                                    )
                                )

                            },
                        ],
                        filter: {
                            'tenant_id': useSessionService().TenantId,
                            ...(this.searchText != null && this.searchText.length > 2 && {
                                'employee_name': this.searchText
                            })
                        },
                        sort: {
                            field: 'created_at',
                            order: 'DESC'
                        },
                        helpText: "Tell us your middle name,<br /> initial, or type N/A."
                    }


                }
            })

        )
    }
}