import { HStack, Icon, VStack, cLeading, Color, Text, Icons, IDataTableColumn, MenuButton, UIDataTable, UIViewBuilder, cCenter, useNavigate, TextField } from "@tuval/forms"
import { ITableViewColumn, Views } from "../../../views/Views"
import { DeletePositionDialog } from "../dialogs/DeletePositionDialog"
import { moment } from "@tuval/core"
import { DeleteDepartmentDialog } from "../../departments/dialogs/DeleteDepartmentDialog"
import { AddPositionDialog } from "../dialogs/AddPositionDialog"
import { AddPositionDialogData } from "../dialogs/AddPositionDialogData"

const columns: ITableViewColumn[] = [
    {
        title: 'Position',
        width: '70%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                Icon(Icons.Calendar).size(35),
                VStack({ alignment: cLeading })(
                    Text(`${row.position_name}`)
                        .fontWeight('600')


                )
            )
        )
    },
    {
        title: 'Last Modified',
        width: '30%',
        view: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(`${row.updated_at}`)
                )
            )
        )
    },
    {
        title: 'Action',
        view: (employee: any) => (
            HStack({ alignment: cLeading })(
                Views.ActionContextMenu([
                    {
                        title: '_Edit',
                        icon: Icons.Edit,
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        action: () => {
                            const formData = Object.assign(AddPositionDialogData, { mode: 'edit', resourceId: employee.id });
                            AddPositionDialog.Show(formData)
                        },
                        //link: `/app(tenantmanager)/company/positions/${employee.id}/edit`,
                        linkState: { position: employee }
                    },
                    {
                        title: 'Delete',
                        icon: Icons.Delete,
                        tooltip: 'Delete',
                        iconColor: Color.red400,
                        //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                        action: () => DeletePositionDialog.Show(employee.id),
                        linkState: { position: employee }
                    }
                ])
            )
        )
    }
]

const _columns: IDataTableColumn[] = [
    {
        field: 'position_name',
        header: 'Position',
        width: '60%',
        filter: true,
        sortable: true,
        editor: ({ rowData }) => (
            TextField().value(rowData.position_name)
        )

    },

    {
        header: 'Created At',
        width: '15%',
        body: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(moment(row.created_at).fromNow())
                )
            )
        )
    },
    {
        header: 'Updated At',
        width: '15%',
        body: (row: any) => (
            HStack({ spacing: 15 })(
                VStack({ alignment: cLeading })(
                    Text(moment(row.updated_at).fromNow())
                )
            )
        )
    },
    {
        //field: 'employee_name',
        header: 'Actions',
        width: '10%',
        body: (department: any) => {
            return UIViewBuilder(() => {
                const navigate = useNavigate();
                return (
                    HStack({ alignment: cCenter })(
                        MenuButton()
                            .model([
                                {
                                    title: 'Edit',
                                    icon: Icons.Edit,
                                    onClick: () => {
                                        const formData = Object.assign(AddPositionDialogData,
                                            {
                                                title: 'Update position',
                                                mode: 'update',
                                                resourceId: department.id
                                        });
                                        AddPositionDialog.Show(formData)
                                    },
                                  //  onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/edit/position/${department.id}`)
                                },
                                {
                                    title: 'Delete',
                                    icon: Icons.Delete,
                                    onClick: () => DeletePositionDialog.Show(department.id)
                                }
                            ])
                            .icon(Icons.Menu)
                        // MenuButton()
                        /*  Views.ActionContextMenu([
                             {
                                 title: 'Edit',
                                 icon: Icons.Edit,
                                 tooltip: 'Edit',
                                 iconColor: '#505A64',
                                 link: `/app(tenantmanager)/company/employee/${employee.id}/edit`,
                                 linkState: { position: employee }
                             },
                             {
                                 title: 'Delete',
                                 icon: Icons.Delete,
                                 tooltip: 'Delete',
                                 iconColor: Color.red400,
                                 //link: `/app(tenantmanager)/employee/delete/${employee.id}`,
                                 action: () => DeleteUserDialog.Show(employee.id),
                                 linkState: { position: employee }
                             }
                         ]) */
                    )
                )
            })

        }
    },
    {
        header: '',
        width: '15%',
        rowEditor: true,

    } as any,
]

export const PositionGrid = (positions: any[]) => {

    // const controller:UIController = bindController();
    // return ({ controller }) => (

    return (

        HStack(
            UIDataTable()
                .editMode('row')
                .columns(_columns)
                .model(positions).width('100%')
        ).border('solid 1px #DEE2E6').cornerRadius(10).overflow('hidden')

    )

    // )

}