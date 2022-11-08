
import { HttpClient } from "@tuval/core";
import { ConfigService } from "./ConfigService";

export class RealmBrokerClient {


    public static async GetBrokers(): Promise<any[]> {
        return new Promise((resolve, reject) => {

            HttpClient.Post(ConfigService.GetRealmBrokerStoreUrl1() + 'GetBrokers')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetBrokerById(broker_id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('broker_id',broker_id);

            HttpClient.Post(ConfigService.GetRealmBrokerStoreUrl1() + 'GetBrokerById',form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
}
