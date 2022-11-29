import { VStack, cTopLeading, Icon, IconLibrary, Text, ForEach, HStack, cLeading, bindState, Color, UIRouteLink, cHorizontal, Theme } from '@tuval/forms';
import { theme } from '../../Theme';

//const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif';\

const fontFamily = '"SF Pro Text","Helvetica Neue","SegoeUI",sans-serif';

const backgroundColor = 'white';

const menuModel = [
    {
        title: 'Dashboard',
       /*  subItems: [
            {
                name: 'Dashboard',
                icon: IconLibrary.Dashboard1,
                link: '/app(realmmanager)/dashboard'

            }
        ] */
    },

    {
        title: 'Company',
        subItems: [

            {
                name: 'Organization',
                icon: '\\e0af',
                link: '/app(tenantmanager)/company/list/employee'
            },
          /*   {
                name: 'Departments',
                icon: '\\d200',
                link: '/app(tenantmanager)/company/department/list'
            },
            {
                name: 'Positions',
                icon: '\\d22d',
                link: '/app(tenantmanager)/position/list'
            },
            {
                name: 'Titles',
                icon: '\\d1f0',
                link: '/app(tenantmanager)/title/list'
            } */
        ]
    },

    {
        title: 'Other',
        subItems: [
            {
                name: 'Brokers',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            },
            {
                name: 'Issues',
                icon: '\\d235',
                link: '/app(tenantmanager)/issue/list'
            },
            {
                name: 'Notifications',
                icon: '\\d235',
                link: '/app(tenantmanager)/issue/list'
            },
            {
                name: 'Settings',
                icon: '\\d235',
                link: '/app(tenantmanager)/issue/list'
            }
        ]
    },
    {
        title: 'Marketplace',
        link: '/app(tenantmanager)/marketplace/list'
       /*  subItems: [
            {
                name: 'Dashboard',
                icon: IconLibrary.Dashboard1,
                link: '/app(realmmanager)/dashboard'

            }
        ] */
    },

]

export const LeftSideMenuView = (realmName: string, selectedItem: string) => (
    VStack({ alignment: cTopLeading })(
        HStack(
            Icon('\\d1f1').size(26),

        ).height().padding(),
        HStack({ alignment: cLeading, spacing: 10 })(
            Text('Organization Manager')
                .foregroundColor(theme.surfaceground)
                .fontWeight('500')
        ).height(40).padding(cHorizontal, '1rem'),

        ...ForEach(menuModel)(menu =>
            VStack({ alignment: cTopLeading })(

                menu.link == null ?
                HStack({ alignment: cLeading, spacing: 3 })(
                  //  Icon('\\e5cf').size(20) .foregroundColor( menu.subItems == null  ? 'transparent' : 'white'),
                    Text(menu.title)
                    .paddingLeft('15px')
                        .fontWeight('500')
                        .fontSize('14px').lineHeight('18px')
                        .foregroundColor(Color.white)
                        .kerning('.06rem')
                        .fontFamily('"SF Pro Text","Helvetica Neue","SegoeUI",sans-serif'/* theme.fontFamily */)
                        //.paddingLeft('1rem')
                        //.textTransform('uppercase')
                ).height(28) : 
                
                UIRouteLink(menu.link ?? '')(
                    HStack({ alignment: cLeading, spacing: 3 })(
                        Icon('\\e5cf').size(20) .foregroundColor( menu.subItems == null  ? 'transparent' : 'white'),
                        Text(menu.title)
                            .fontWeight('500')
                            .fontSize('14px').lineHeight('18px')
                            .foregroundColor(Color.white)
                            .kerning('.06rem')
                            .fontFamily('"SF Pro Text","Helvetica Neue","SegoeUI",sans-serif'/* theme.fontFamily */)
                            //.paddingLeft('1rem')
                            //.textTransform('uppercase')
                    ).height(28)
                    .background({ default: selectedItem === menu.title ? 'rgba(255,255,255,.3)' : '', hover: 'rgba(0,0,0,.6)' })
                ).width('100%')

                ,


                ...ForEach((menu as any).subItems)((subItem: any) =>
                    UIRouteLink(subItem?.link ?? '')(
                        HStack({ alignment: cLeading, spacing: 10 })(
                        subItem.icon ? Icon(subItem.icon).size(20) : null,
                            Text(subItem.name)
                                .fontFamily(fontFamily)
                                .fontSize(14)
                                .lineHeight('24px')
                        )
                            .padding('25px')
                            .cornerRadius(theme.borderRadius)
                            .height(27)
                            .foregroundColor(theme.surfaceground)
                            .background({ default: selectedItem === subItem.name ? 'rgba(255,255,255,.3)' : '', hover: 'rgba(0,0,0,.6)'  })
                            .fontWeight('400')
                            // .fontWeight(selectedItem == subItem.name ? '700' : '400')
                            .cursor('pointer')
                    ).width('100%')

                )
            ).height()
            .marginTop('20px')
            .borderTop('1px solid #203650')
               // .borderBottom('1px solid #8393AE')
               // .paddingBottom('20px')
        )
    ).width(220).minWidth('220px').maxWidth('220px')
        .background({ default: Theme.surfceColor })
        .fontSize(16)
        .foregroundColor(Color.white)
)