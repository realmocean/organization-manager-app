import { is, Optional } from "@tuval/core";
import {
    Button, cHorizontal, cLeading, Color, ColorClass, cTop, cTopLeading, cTrailing, cVertical, Dropdown, FieldSettingsModel,
    ForEach, HDivider, HStack, Icon, Icons, ScrollView, Spacer, Spinner, Text, TextAlignment, Theme, UIButton, UIContextMenu, UIRouteLink, UIView, useLocation, useNavigate, useParams, useState, useTheme, ValidateRule, VDivider, VStack
} from "@tuval/forms";



export const fontFamily = '"Poppins", arial, sans-serif'
const fontFamily2 = "'Roboto', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

const error_pic = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjI2NDYgMy40MTM2NkMxMS43MjEyIDMuMTU2ODEgMTIuMjc4OCAzLjE1NjgxIDEyLjczNTQgMy40MTM2NkwxOS4yMzU0IDcuMDY5OTFDMTkuNzA3NyA3LjMzNTU4IDIwIDcuODM1MzYgMjAgOC4zNzcyN1YxNS42MjI3QzIwIDE2LjE2NDYgMTkuNzA3NyAxNi42NjQ0IDE5LjIzNTQgMTYuOTMwMUwxMi43MzU0IDIwLjU4NjNDMTIuMjc4OCAyMC44NDMyIDExLjcyMTIgMjAuODQzMiAxMS4yNjQ2IDIwLjU4NjNMNC43NjQ2MSAxNi45MzAxQzQuMjkyMjkgMTYuNjY0NCA0IDE2LjE2NDYgNCAxNS42MjI3VjguMzc3MjdDNCA3LjgzNTM2IDQuMjkyMjkgNy4zMzU1OSA0Ljc2NDYxIDcuMDY5OTFMMTEuMjY0NiAzLjQxMzY2WiIgZmlsbD0iI0ZGM0EyRSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExIDcuNEMxMSA3LjE3OTA5IDExLjE3OTEgNyAxMS40IDdIMTIuNkMxMi44MjA5IDcgMTMgNy4xNzkwOSAxMyA3LjRWMTIuNkMxMyAxMi44MjA5IDEyLjgyMDkgMTMgMTIuNiAxM0gxMS40QzExLjE3OTEgMTMgMTEgMTIuODIwOSAxMSAxMi42VjcuNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEgMTZDMTEgMTUuNDQ3NyAxMS40NDc3IDE1IDEyIDE1QzEyLjU1MjMgMTUgMTMgMTUuNDQ3NyAxMyAxNkMxMyAxNi41NTIzIDEyLjU1MjMgMTcgMTIgMTdDMTEuNDQ3NyAxNyAxMSAxNi41NTIzIDExIDE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+';
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export interface ITableViewColumn {
    title?: string;
    key?: string;
    width?: string,
    view?: (row) => UIView;
}

export interface IAction {
    title?: string;
    icon: string;
    iconColor?: ColorClass | string,
    tooltip: string;
    link?: string;
    action?: Function;
    linkState?: any;
}



export interface IDropDownParams {
    label: string;
    dataSource: any[];
    fields: FieldSettingsModel;
    placeholder: string;
    formFieldOptions: {
        fieldName: string;
        rules: ValidateRule[]
    }
}



export namespace Views {

    export const DropDown = (params: Optional<IDropDownParams>) => (
        VStack({ alignment: cLeading })(
            Text(params.label)
                .fontSize(14)
                .lineHeight(30).fontWeight('500'),
            Dropdown()
                .floatlabel(false)
                .dataSource(params.dataSource)
                .fields(params.fields)
                .placeHolder(params.placeholder)
                .width('100%')
                .formField(params.formFieldOptions?.fieldName, params.formFieldOptions?.rules)
                /*   .noRecordTemplate(data =>
                      HStack({ alignment: cLeading })(
                          UIButtonView().text('Ekle').onClick(() => console.log('click'))
                      )
                  ) */
                .allowFiltering(true)
        ).height()
    )

    export const EmptyTableView = <T>(columns: ITableViewColumn[], data: T[], rowClick?: Function) => (
        ScrollView({ axes: cVertical })(
            VStack({ alignment: cTop })(
                HStack(
                    /*   HStack(
                          Text('Responsive Table without Table tag'),
                      ).display('table-caption').textAlign('center').fontSize(30), */
                    // Header row
                    HStack(
                        ...ForEach(columns)(column =>
                            HStack(
                                Text(column.title).display('')

                            )
                                .borderBottom('1px solid hsl(240 30% 96%)')
                                .fontWeight('600')
                                .padding(16)
                                .fontSize(12)
                                .textTransform('uppercase')
                                .foregroundColor('rgb(99, 115, 129)')
                                .lineHeight('1.5rem')
                                .display('table-cell').textAlign('justify').width(column.width ?? '').height(),
                        )
                    )

                        .display('table-header-group')
                        .background(Color.white)
                        .border('solid 1px red')
                        .width().height(),
                    // table body
                    HStack(
                        ...ForEach(data)((row, index) =>
                            HStack(
                                // cells
                                ...ForEach(columns)((column) =>
                                    HStack(
                                        HStack({ alignment: cLeading })(
                                            Spinner()
                                        )
                                    )
                                        .borderBottom(index != data.length - 1 ? '1px solid hsl(240 30% 96%)' : '')
                                        .verticalAlign('middle')
                                        .lineHeight('1.57')
                                        .fontSize(14)
                                        .fontWeight('400')
                                        .padding(16)

                                        .foregroundColor('rgba(33, 43, 54,0.7)')
                                        .display('table-cell').width(column.width ?? '').height(),
                                )
                            )
                                .cursor('pointer')
                                .background({ default: Color.white, hover: 'hsl(240, 100%, 99%)' })
                                .display('table-row').width().height()
                                .onClick(() => {

                                    if (is.function(rowClick)) {
                                        rowClick(row, index);
                                    }
                                })
                        )
                        // row 1

                    ).display('table-row-group').width().height()
                ).display('table').height().cornerRadius(20).overflow('hidden').border('1px solid hsl(240 30% 96%)')


            ).padding(cHorizontal, 20)
        )
    )

    export const TableView = <T>(columns: ITableViewColumn[], data: T[], rowClick?: Function) => (
        ScrollView({ axes: cVertical })(
            VStack({ alignment: cTop })(
                HStack(
                    /*   HStack(
                          Text('Responsive Table without Table tag'),
                      ).display('table-caption').textAlign('center').fontSize(30), */
                    // Header row
                    HStack(
                        ...ForEach(columns)(column =>
                            HStack(
                                Text(column.title).display('')

                                    .whiteSpace('nowrap'),
                            )
                                .borderBottom('1px solid hsl(240 30% 96%)')
                                .fontWeight('600')
                                .padding(16)
                                .fontSize(12)
                                // .textTransform('uppercase')
                                .foregroundColor('rgb(99, 115, 129)')
                                .lineHeight('1.5rem')
                                .display('table-cell').textAlign('justify').width(column.width ?? '').height(),
                        )
                    )

                        .display('table-header-group')
                        .background('#f9fafb')
                        .border('solid 1px red')
                        .width().height(),
                    // table body
                    HStack(
                        ...ForEach(data)((row, index) =>
                            HStack(
                                // cells
                                ...ForEach(columns)((column) =>
                                    HStack(
                                        HStack({ alignment: cLeading })(
                                            is.function(column.view) ?
                                                column.view(row)
                                                :
                                                Text(row[column.key]).display('')
                                        )
                                    )
                                        .borderBottom(index != data.length - 1 ? '1px solid hsl(240 30% 96%)' : '')
                                        .verticalAlign('middle')
                                        .lineHeight('1.57')
                                        .fontSize(14)
                                        .fontWeight('400')
                                        .padding(16)

                                        .foregroundColor('rgba(33, 43, 54,0.7)')
                                        .display('table-cell').width(column.width ?? '').height(),
                                )
                            )
                                .cursor('pointer')
                                .background({ default: Color.white, hover: 'hsl(240, 100%, 99%)' })
                                .display('table-row').width().height()
                                .onClick(() => {

                                    if (is.function(rowClick)) {
                                        rowClick(row, index);
                                    }
                                })
                        )
                        // row 1

                    ).display('table-row-group').width().height()
                ).display('table').height().cornerRadius(20).overflow('hidden').border('1px solid hsl(240 30% 96%)')


            ).padding(cHorizontal, 20)
        )
    )

    export const FormView = ({ header, content }: { header: string, content: UIView }) => (
        VStack(
            VStack({ alignment: cTop })(
                VStack({ alignment: cLeading })(
                    // Toggle().checked(this.checked).onToggleChange((value) => this.checked = value),
                    Text(header)
                        .fontFamily(fontFamily2)
                        .fontWeight('600')
                        .maxWidth('325px')
                        .fontSize('20px')
                        .marginTop('10px'),
                )
                    .transition('padding-bottom 0.15s ease-out')
                    .shadow('0 5px 10px 0 rgb(0 0 0 / 2%)')
                    .margin('0 0 20px 0')
                    .padding('32px 24px 32px 46px')
                    .background('#ffffff')
                    .height(),
                ScrollView({ axes: cVertical, alignment: cTop })(
                    VStack({ alignment: cTop })(
                        content
                    )
                        // .border('2px solid #f1f1f1')
                        .padding('1rem').margin('2rem')
                        .cornerRadius(25)
                        .shadow('0 0 10px -2px rgb(0 0 0 / 20%)')
                        .background('#ffffff')
                        .width(600).height()
                ).alignment(cTop),

            ).background('#F6F6F6')
        )
    )



    export const CreateButton = ({ label, action }: { label: string, action: Function }) => (
        HStack(
            UIButton(
                Icon(Icons.AddSmall).size(24).marginRight('3px'),
                Text(label).whiteSpace('nowrap')
            )
                .padding(cHorizontal, 15)
                .padding(cVertical, 7)
                .background({ default: 'rgb(219,26, 90)', hover: 'rgb(240,45, 101)' })
                .foregroundColor(Color.white)
                .fontSize(14)
                .fontWeight('400')
                .border({ default: '1px solid rgb(191,13,81)', hover: '1px solid rgb(191,13,81)' })
                .transition('all .2s ease-in-out')
                .cornerRadius(5)
                .shadow({ focus: '0 0 0 1px #fff, 0 0 2px 2px #0069ff' })
                .tabIndex(2)
                .onClick(() => action())
        ).height().width()
    )

    export const ExportButton = ({ label, action }: { label: string, action: Function }) => (
        HStack(
            UIButton(
                Icon(Icons.ExternalPage).size(24).marginRight('3px'),
                Text(label).whiteSpace('nowrap')
            )
                .padding(cHorizontal, 15)
                .padding(cVertical, 7)
                .background({ default: 'rgb(219,26, 90)', hover: 'rgb(240,45, 101)' })
                .foregroundColor(Color.white)
                .fontSize(14)
                .fontWeight('400')
                .border({ default: '1px solid rgb(191,13,81)', hover: '1px solid rgb(191,13,81)' })
                .transition('all .2s ease-in-out')
                .cornerRadius(5)
                .shadow({ focus: '0 0 0 1px #fff, 0 0 2px 2px #0069ff' })
                .tabIndex(2)
                .onClick(() => action())
        ).height().width()
    )

    export const DeleteButton = ({ label, action }: { label: string, action: Function }) => (
        HStack(
            UIButton(
                //Icon('\\e145').size(24).marginRight('3px'),
                Text(label).whiteSpace('nowrap')
            )
                .height(40)
                .padding(cHorizontal, 15)
                .padding(cVertical, 7)
                .background({ default: 'rgb(250,250, 255)', hover: 'rgb(242,242, 248)' })
                .foregroundColor('rgb(96, 106, 123)')
                .fontSize(14)
                .fontWeight('600')
                .border({ default: '1px solid rgb(233,234,241)', hover: '1px solid rgb(233,234,241)' })
                .transition('all .2s ease-in-out')
                .cornerRadius(5)
                .shadow({ focus: '0 0 0 1px #fff, 0 0 2px 2px #0069ff' })
                .tabIndex(2)
                .onClick(() => action())
        ).height().width()
    )

    export const AcceptButton = ({ label, loading, action }: { label: string, loading?: boolean, action: Function }) => (

        Button(
            //Icon('\\e145').size(24).marginRight('3px'),
            Text(label).whiteSpace('nowrap')
        )
            .loading(loading)
            .cursor('pointer')
            .width()
            .height(40)
            .padding(cHorizontal, 15)
            .padding(cVertical, 7)
            .background({ default: 'rgb(219,26, 90)', hover: 'rgb(240,45, 101)' })
            .foregroundColor(Color.white)
            .fontSize(14)
            .fontWeight('600')
            .border({ default: '1px solid rgb(191,13,81)', hover: '1px solid rgb(191,13,81)' })
            .transition('all .2s ease-in-out')
            .cornerRadius(5)
            .shadow({ focus: '0 0 0 1px #fff, 0 0 2px 2px #0069ff' })
            .tabIndex(2)
            .onClick(() => action())

    )
    export const _AcceptButton = ({ label, action }: { label: string, action: Function }) => (
        HStack(
            UIButton(
                Text(label)
            )
                .padding('10px 20px')
                .background({ default: '#15CD72', hover: '#0CB863' })
                .foregroundColor(Color.white)
                .width('100%').height('3rem').fontSize('.9rem').lineHeight('3rem')
                .fontWeight('600')
                .border({ default: '1px solid #15CD72', hover: '1px solid #0CB863' })
                .transition('all .2s ease-in-out')
                .cornerRadius(3)
                .shadow({ focus: '0 0 0 1px #fff, 0 0 2px 2px #0069ff' })
                .tabIndex(2)
                .onClick(() => action())
        ).height()
    )

    export const ActionBar = (actions: IAction[]) => (
        HStack(
            ...ForEach(actions)(action =>
                UIRouteLink(action.link, action.linkState)(
                    HStack(
                        Icon(action.icon).size(20).foregroundColor(action.iconColor as any)
                    )
                        .cornerRadius(50)
                        .width()
                        .height()
                        .padding(8)
                        .background({ hover: 'rgb(230, 230, 230)' })
                        .cursor('pointer')
                        .transition('all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s')
                    // .tooltip(action.tooltip),

                )
            )

        ).width().height()
    )


    export const ActionContextMenu = (actions: IAction[]) => {
        return (
            UIContextMenu(
                ...ForEach(actions)(item =>
                    item.link != null ?
                        UIRouteLink(item.link, item.linkState)(
                            HStack({ alignment: cLeading, spacing: 10 })(
                                Icon(item.icon).size(20).foregroundColor(item.iconColor as any),

                                Text(item.title).foregroundColor(item.iconColor as any)

                            )
                        ).padding(10).width('100%').height('100%')
                        :
                        HStack({ alignment: cLeading, spacing: 10 })(
                            Icon(item.icon).size(20).foregroundColor(item.iconColor as any),
                            Text(item.title).foregroundColor(item.iconColor as any)
                        ).padding(10).onClick(() => item.action())
                )
            )(

                HStack(
                    Icon(Icons.API).size(20).foregroundColor(Color.gray))
            )
                .cornerRadius(50)
                .width()
                .height()
                .padding(8)
                .background({ hover: 'rgb(230, 230, 230)' })
                .cursor('pointer')
                .transition('all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s')
        )

    }

    export const DashboardTile = (title: string, value: string, icon: any, iconColor: ColorClass,
        iconBackColor: ColorClass) => (
        VStack(
            VStack({ alignment: cLeading, spacing: 10 })(
                HStack(
                    VStack({ alignment: cTopLeading })(
                        Text(title)
                            .fontWeight('500')
                            .foregroundColor('#9e9e9e')
                            .fontSize(16)
                            .marginBottom('1rem'),
                        Text(value)
                            .foregroundColor('#212121')
                            .fontWeight('500')
                            .fontSize('1.25rem')
                    ),
                    Spacer(),
                    HStack({ alignment: cTop })(
                        Icon(icon as any).size(30)
                            .width('2.5rem')
                            .height('2.5rem')
                            .background(iconBackColor)
                            .cornerRadius(6)
                            .foregroundColor(iconColor)
                    ).width()

                ),
                HStack({ alignment: cLeading, spacing: 5 })(
                    Text('24 Account').foregroundColor('#22c55e'),
                    Text('since last week').foregroundColor('#9E9E9E')
                )
            )
                .padding('1rem')
                .border('solid 1px #fafafa')
                .cornerRadius(6)
                .background(Color.white)
                .shadow('0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)')
        ).height().width('33%')
    )

    export const DashboardTileBox = (title: string, content: UIView) => (
        VStack(
            VStack({ alignment: cLeading, spacing: 10 })(
                HStack(
                    VStack({ alignment: cTopLeading })(
                        Text(title)
                            .fontWeight('500')
                            .foregroundColor('#9e9e9e')
                            .fontSize(16)
                            .marginBottom('1rem')
                    ),
                    content

                ),
            )
                .padding('1rem')
                .border('solid 1px #fafafa')
                .cornerRadius(6)
                .background(Color.white)
                .shadow('0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)')
        ).height().width()
    )

    export const RightSidePage = ({ showBackIcon, title, copyId, tabview, content/* , maxWidth = '1160px' */ }: { title: string | UIView, showBackIcon?: boolean, copyId?: { value: string, label: string }, tabview?: UIView, content: UIView, maxWidth?: string }): any => {
        const navigator = useNavigate();
        const theme = useTheme();
        return (
            VStack({ alignment: cTop })(
                VStack({ alignment: cTop })(
                    VStack({ alignment: cLeading })(
                        HStack({ spacing: 5, alignment: cLeading })(
                            showBackIcon && Icon(Icons.MoveArrowLeft).size(20).onClick(() => navigator(-1)).cursor('pointer'),
                            is.string(title) ?
                                Text(title)
                                    .padding(10)
                                    .foregroundColor('#444')
                                    .fontFamily(fontFamily).fontSize(20).fontWeight('500') :
                                title,
                            copyId && UIButton(
                                Icon(Icons.Completed).size(14).marginRight('3px'),
                                Text(copyId.label)
                            )
                                .marginLeft('10px')
                                .cornerRadius('calc(2rem / 2)')
                                .border('solid 1px rgb(242, 242, 248)')
                                .padding(cHorizontal, 10)

                                .height(32)
                                .background('rgb(250, 250, 255)')
                                .onClick(() => navigator.clipboard.writeText(copyId.value))
                        ).height().padding('0 10px 0 15px')
                            .borderBottom('solid 1px rgb(232,234,237)')
                        ,
                        tabview &&
                        HStack(
                            tabview
                        ).height(51).width()
                    ).height()//.maxWidth(maxWidth)
                )
                    //  .paddingLeft('20px')
                    .height()
                    .background('#F4F5F7'),
                // .shadow('0 0 25px 0 rgb(73 80 87 / 10%)'),
                ScrollView({ axes: cVertical, alignment: cTop })(
                    VStack({ alignment: cTopLeading })(
                        content
                    )
                    //.maxWidth(maxWidth)
                )


            )

                .borderTop(`solid 1px var(--surfce-color)`)
            // .background( Theme.darkBackgroundColor)
        )


    }

    export const AcceptRouteButton = ({ label, link }: { label: string, link: string }) => (
        UIRouteLink(link)(
            AcceptButton({ label: label, action: () => void 0 })
        )
    )

    export const TabView = (tabModel: any[]) => {
        const location = useLocation();
        const paths: string[] = location.pathname.split('/')


        const id = paths[paths.length - 1];

        const selIndex = Math.max(0, tabModel.findIndex(item => item.id === id))

        if (!is.array(tabModel)) {
            return;
        }

        const [selectedIndex, setSelectedIndex] = useState(selIndex === 0 ? 0 : (100 / tabModel.length) * selIndex)

        const [prevSelectedIndex, setPrevSelectedIndex] = useState(0)
        const [selectedTab, setSelectedTab] = useState(tabModel[selIndex])

        const bottomBorderColor = '#0069ff';
        const navigotor = useNavigate();

        return (
            VStack({ alignment: cLeading })(

                VStack({ alignment: cTop, spacing: 15 })(
                    VStack({ spacing: 5 })(
                        HStack({ spacing: 0 })(
                            ...ForEach(tabModel)((tab, index) =>
                                VStack(
                                    HStack(
                                        Text(tab.title)
                                            .fontSize(14)
                                            .lineHeight('40px')
                                            .foregroundColor(selectedTab?.title === tab?.title ? 'rgb(219, 26, 90)' : '')
                                            // .fontWeight(selectedTab?.title === tab?.title ? '600' : '400')
                                            .whiteSpace('nowrap')
                                    ),
                                )

                                    .background({ hover: 'var(--primary-background-hover-color)' })
                                    .cornerRadius(4)
                                    //.transform('translate(-50%)')
                                    .width(120)
                                    .onClick(() => {
                                        setSelectedTab(tab); setPrevSelectedIndex(selectedIndex); setSelectedIndex(index === 0 ? 0 : (100 / tabModel.length) * index);
                                        navigotor(tab.link.to, { state: tab.link.state, replace: true })
                                    }),
                            )
                        ).height().width(),
                        HStack(
                            HStack(Text('')).background('rgb(219, 26, 90)').height(2).width(120)
                                .position('absolute')
                                //.transform('translate(-50%)')
                                .initial({ left: prevSelectedIndex + '%' })
                                .animate({ left: selectedIndex + '%' }),


                        ).height()
                    ).height().width().marginTop('20px')

                ).height().width()

            ).height().width()
        )
    }

    export const FormCommanSection = ({ title, content, footer }: { title, content, footer?}) => {

        return (
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cTopLeading })(
                    HStack({ alignment: cTopLeading })(
                        Text(title).foregroundColor('rgb(55,59,78)').fontFamily('"Poppins", arial, sans-serif').fontSize(18).fontWeight('500')
                    ).width('40%'),
                    HStack({ alignment: cTopLeading })(
                        content
                    ).width('60%')
                ).padding(32),
                footer &&
                (
                    HDivider().height(1).background('hsl(240 30% 96%)'),
                    HStack({ alignment: cTrailing })(
                        footer
                    ).padding(32)
                )
            )
                //.overflow('hidden')
                .background(Color.white)
                .cornerRadius(20)
                .height()
                //.minHeight('150px')
                .maxWidth('1160px')
        )
    }

    export const FormDangerSection = ({ title, subTitle, content, footer }) => {

        return (
            HStack(
                VDivider().width(2).background('rgb(255, 66, 56)').marginLeft('20px').height('90%'),
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cTopLeading })(
                        HStack({ alignment: cTopLeading })(
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                Text(title).foregroundColor('rgb(255, 66, 56)').fontFamily('"Poppins", arial, sans-serif').fontSize(18).fontWeight('500'),
                                Text(subTitle).foregroundColor('rgb(96, 106, 123)').fontFamily('"Inter", arial, sans-serif').fontSize(14).fontWeight('400')
                                    .multilineTextAlignment(TextAlignment.leading)
                            )
                        ).width('40%'),
                        HStack({ alignment: cTopLeading })(
                            content
                        ).width('60%')
                    ).padding(32),
                    HDivider().height(1).background('hsl(240 30% 96%)'),
                    HStack({ alignment: cTrailing })(
                        footer
                    ).padding(32)
                )
            )
                .overflow('hidden')
                .background(Color.white)
                .cornerRadius(20)
                .height()
                .minHeight('250px')
                .maxWidth('1160px')

        )
    }

    export const CompanyTabView = () => (
        Views.TabView([
            {
                id: 'employee',
                title: 'Employees',
                link: {
                    to: '/app(tenantmanager)/company/list/employee',
                    state: ''
                }
            },
            {
                id: 'department',
                title: 'Departments',
                link: {
                    to: '/app(tenantmanager)/company/list/department',
                    state: ''
                }
            },
            {
                title: 'Positions',
                link: {
                    to: '/app(tenantmanager)/company/list/position',
                    state: ''
                }
            },
            {
                title: 'Titles',
                link: {
                    to: '/app(tenantmanager)/company/list/title',
                    state: ''
                }
            }
        ])
    )


    export const EmployeeEditTabView = () => {
        const params = useParams();
        return (
            Views.TabView([
                {
                    title: 'Overview',
                    link: {
                        to: '/app(tenantmanager)/company/edit/employee/overview/' + params.employee_id,
                        state: ''
                    }
                }
            ])
        )
    }

}


