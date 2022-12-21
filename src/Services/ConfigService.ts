import { is } from "@tuval/core";

export class ConfigService {

    public static GetRealmBrokerStoreUrl1(): string {
        let url = '';
        debugger;
        if (is.localhost()) {
            url = '/realmocean/';
        } else {
            url = '/realmocean/'; // store eklendi.
        }


        return url;
    }
}
