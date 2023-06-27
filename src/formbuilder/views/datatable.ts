import { useSessionService } from "@realmocean/services";
import { HStack, Spinner, Text, UIDataTable, UIRecordsContext } from "@tuval/forms";
import { UsersGrid } from "../../domains/users/views/UsersGrid";


export const DataTableView = (fieldInfo: any) => {
    const { columns, resource, filter, sort } = fieldInfo;

    return (
        UIRecordsContext(({ data, isLoading }) =>
            isLoading ? HStack(Spinner()) :
                HStack(
                    UIDataTable()
                        .columns(columns)
                        .model(data).width('100%')
                )
                //.border('solid 1px #DEE2E6').cornerRadius(10)
                .padding(16)
                .overflow('hidden')
        )
            .resource(resource)
            .filter(filter)
            .sort(sort)
    )


}