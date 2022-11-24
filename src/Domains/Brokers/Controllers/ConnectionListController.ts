
import { IDepartment, useOrgProvider } from '@realmocean/common';
import { cLeading, Color, cTopLeading, HStack, Spacer, Spinner, State, TabView, TextField, UIController, UIImage, VStack, Text, cTop, Icon, cTrailing, cHorizontal } from '@tuval/forms';
import { DialogController } from '../../../ControllerDialog';
import { RealmBrokerClient } from '@realmocean/common'
import { ITableViewColumn, Views } from '../../../Views/Views';
import { SettingsDialogController } from './SettingsDialogController';




const columns: ITableViewColumn[] = [
    {
        title: 'Connection Name',
        key: "connection_name",
    }
]

export class ConnectionListController extends DialogController {

    @State()
    private broker_connections: IDepartment[];

    @State()
    private showingOrganizationUnits: any[];

    private isLoading(): boolean {
        return this.broker_connections == null;
    }


    protected async BindRouterParamsAsync({ broker_info }): Promise<void> {
        this.broker_info = broker_info;
        this.setWidth(600)
        this.setHeight(700)

        RealmBrokerClient.GetBrokerConnections(broker_info.id).then((connections) => this.broker_connections = connections)

    }

    public LoadView(): any {
        return (
            this.isLoading() ? VStack(Spinner()) :
                VStack({ alignment: cTopLeading, spacing: 10 })(
                    HStack({ alignment: cLeading, spacing: 10 })(
                        HStack(
                            UIImage(this.broker_info.image).width(48).maxHeight(48).cornerRadius(8)
                        ).width(48).height(58).overflow('hidden'),
                        Text(`Manage Broker:`).fontSize(20).fontWeight('500'),
                        Text(`${this.broker_info.name}`).fontSize(20).fontWeight('400'),
                        Spacer(),
                        HStack({ alignment: cTop })(
                            Icon('\\e5cd').size(20).cursor('pointer').onClick(() => this.OnCancel())
                        ).width()
                    ).height(50).padding(cHorizontal, 20).marginTop('20px'),
                    HStack({ alignment: cTrailing })(
                        Views.CreateButton({ label: 'New Connection', action: () => SettingsDialogController.Show(this.broker_info) })
                    ).height().padding(cHorizontal, 20),
                    Views.TableView(columns, this.broker_connections)
                

                )
        )

    }

    public static Show(broker_info: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new ConnectionListController();
            dialog.BindRouterParamsAsync({ broker_info }).then(() => {
                dialog.ShowDialogAsync().then(() => {
                    resolve();
                })
            })
        });
    }


}