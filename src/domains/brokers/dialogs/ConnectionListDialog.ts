
import { HStack, Icon, Color, UIButton, Spinner, UIRecordsContext, VStack, Text, cTopLeading, cLeading, UIImage, Spacer, cTop, cHorizontal, cTrailing, DialogView, State, Icons, ViewProperty, Fragment } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { ITableViewColumn, Views } from "../../../views/Views";
import { EditSettingsDialog } from "./EditSettingsDialog";
import { SettingsDialog } from "./SettingsDialog";





export class ConnectionListDialog extends DialogView {

    @ViewProperty()
    private columns: ITableViewColumn[];

    @ViewProperty()
    private broker_info: any;

    @ViewProperty()
    private broker_connections: any[];

    @ViewProperty()
    private showingOrganizationUnits: any[];

    private isLoading(): boolean {
        return this.broker_connections == null;
    }


    protected BindRouterParams({ broker_info }) {
        console.log(broker_info)
        this.ShowHeader = false;
        this.broker_info = broker_info;
        this.Width = '600px';
        this.Height = '700px';

        this. columns = [
            {
                title: 'Connection Name',
                key: "connection_name",
                width: '100%'
            },
            {
                view: (row) => (
                    HStack({alignment:cTrailing})(
                        row.is_default ? Icon('\\e92d').fontSize(30).foregroundColor('green') : Fragment(),
                        HStack(
                            Icon(Icons.Edit).size(22)
                        )
                            .width(35).height(35)
                            .cornerRadius(20).background({ hover: '#EEE' })
                            .onClick(() => EditSettingsDialog.Show(broker_info,row.id, row.broker_id, row.tenant_id))
        
                        ,
                        HStack(
                            Icon(Icons.Delete).size(22)
                        )
                            .width(35).height(35)
                            .cornerRadius(20).background({ hover: '#EEE' })
                        //.onClick(()=> DeleteConnectionDialog.Show(row.id))
                    ).height().width(200)
                )
            }
        ]

        // RealmBrokerClient.GetBrokerConnections(broker_info.id).then((connections) => this.broker_connections = connections)

    }

    public LoadView(): any {
        return (
            RealmDataContext(
                    UIRecordsContext(({ data, isLoading }) =>
                        isLoading ? VStack(Spinner()) :
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                HStack({ alignment: cLeading, spacing: 10 })(
                                    HStack(
                                        UIImage(this.broker_info.icon_link).width(48).maxHeight(48).cornerRadius(8)
                                    ).width(48).height(58).overflow('hidden'),
                                    Text(`Manage Broker:`).fontSize(20).fontWeight('500'),
                                    Text(`${this.broker_info.broker_display_name}`).fontSize(20).fontWeight('400'),
                                    Spacer(),
                                    HStack({ alignment: cTop })(
                                        Icon('\\e5cd').size(30).cursor('pointer').onClick(() => this.Hide())
                                    ).width()
                                ).height(50).padding(cHorizontal, 20).marginTop('20px'),
                                HStack({ alignment: cTrailing })(
                                    Views.CreateButton({ label: 'New Connection', action: () => SettingsDialog.Show(this.broker_info) })
                                ).height().padding(cHorizontal, 20),
                               Views.TableView(this.columns, data)


                            )
                    ).resource('brokerconnection').filter({ 'broker_id': this.broker_info.id })

            )
        )





    }

    public static Show(broker_info: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            const dialog = new ConnectionListDialog();
            dialog.BindRouterParams({ broker_info })
            dialog.ShowDialogAsync().then(() => {
                resolve();
            })
        })

    }


}