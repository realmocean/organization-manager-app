import { ForEach, HStack, VStack, Text, cTopLeading, cLeading, useNavigate, bindNavigate, getRouterParams, UIRouteLink } from "@tuval/forms"



export const AccountsViewLeftMenu = (selected: string) => {
    const { account_id } = getRouterParams();

    const menuItems = [
        {
            title: 'Details',
            link: `/app(tenantmanager)/security/account/view/${account_id}/details`

        },
        {
            title: 'Profile',
            link: `/app(tenantmanager)/security/account/view/${account_id}/profile`
        },
        {
            title: 'Attributes',
            link: `/app(tenantmanager)/security/account/view/${account_id}/attributes`
        },
        {
            title: 'Apps',
            link: `/app(tenantmanager)/security/account/view/${account_id}/apps`
        },
        {
            title: 'Sessions',
            link: `/app(tenantmanager)/security/account/view/${account_id}/sessions`
        },
        {
            title: 'Lock Info',
            link: `/app(tenantmanager)/security/account/view/${account_id}/lockinfo`
        },
        {
            title: 'Authenticators',
            link: `/app(tenantmanager)/security/account/view/${account_id}/authenticators`
        },
        {
            title: 'Audit',
            link: `/app(tenantmanager)/security/account/view/${account_id}/audit`
        },
        {
            title: 'Roles',
            link: `/app(tenantmanager)/security/account/view/${account_id}/roles`
        },
        {
            title: 'Permissinons',
            link: `/app(tenantmanager)/security/account/view/${account_id}/permissinons`
        },
        {
            title: 'Access Restrictions',
            link: `/app(tenantmanager)/security/account/view/${account_id}/access-restrictions`
        },
        {
            title: 'Delegations',
            link: `/app(tenantmanager)/security/account/view/${account_id}/delegations`
        }

        
        
    ]

    return (
        VStack({ alignment: cTopLeading, spacing: 5 })(
            ...ForEach(menuItems)(menuItem =>
                UIRouteLink(menuItem.link)(
                    HStack({ alignment: cLeading })(
                        Text(menuItem.title)
                    )
                        .padding('10px 15px')
                        .borderLeft(selected === menuItem.title ? 'solid 3px #2563eb' : 'auto')
                        .background(selected === menuItem.title ? '#dbeafe' : 'auto')
                        .foregroundColor(selected === menuItem.title ? {default:'#2563eb'} : {default:'auto', hover: '#222'})
                        .cornerRadius(4)
                ).width('100%')
            )
        )
            .width(200).height()
    )

}