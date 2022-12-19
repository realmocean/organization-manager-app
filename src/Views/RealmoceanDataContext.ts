import { DataContext, UIView, WebApiDataProvider } from "@tuval/forms";


export const RealmoceanDataContext = (content: () => UIView) => (
    DataContext(content).dataProvider(WebApiDataProvider('/realmocean'))
)