import { is } from "@tuval/core";

export class ConfigService {

    public static GetRealmBrokerStoreUrl1(): string {
        let url = '';
        debugger;
        if (is.localhost()) {
            url = 'http://localhost:5002/v1/';
        } else {
            url = 'https://app.realmocean.com/store/'; // store eklendi.
        }


        return url;
    }
}
