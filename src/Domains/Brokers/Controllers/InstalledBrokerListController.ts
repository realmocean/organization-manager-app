
import { IEmployee, RealmBrokerClient, useOrgProvider } from '@realmocean/common';
import { cLeading, Color, cTopLeading, cVertical, ForEach, HStack, ScrollView, Spacer, Spinner, State, Text, TextField, UIController, VStack } from '@tuval/forms';

import { ITableViewColumn, Views } from '../../../Views/Views';
import { BrokerAddonCard } from '../../Marketplace/Views/BrokerAddonCard';


const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'


const addons = [
    {
        title: 'SCM & CI/CD',
        items: [{
            name: 'Azure DevOps',
            description: 'Get statistics from code repositories, track each commits.',
            image: 'https://playground.oobeya.io/assets/images/azure-devops/azure-devops.png'
        },
        {
            name: 'Bitbucket',
            description: 'Get statistics from code repositories, track each commits.',
            image: 'https://playground.oobeya.io/assets/images/bitbucket/bitbucket.jpg'
        },
        {
            name: 'Bitbucket Cloud',
            description: 'Get statistics from code repositories, track each commits.',
            image: 'https://playground.oobeya.io/assets/images/bitbucket/bitbucket-cloud.jpg'
        },
        {
            name: 'GitHub',
            description: 'GitHubInc. is a web-based hosting for version control using Git.',
            image: 'https://playground.oobeya.io/assets/images/github/github.svg'
        },
        {
            name: 'Github Enterprise',
            description: 'Get statistics from code repositories, track each commits.',
            image: 'https://playground.oobeya.io/assets/images/github/github.svg'
        },
        {
            name: 'GitLab',
            description: 'GitHubInc. is a web-based hosting for version control using Git.',
            image: 'https://playground.oobeya.io/assets/images/gitlab/gitlab.png'
        },
        {
            name: 'Jenkins',
            description: 'Jenkins helps to automate the non-human part of the software development process, with continuous integration...',
            image: 'https://playground.oobeya.io/assets/images/jenkins/jenkins.svg'
        },

        {
            name: 'Subversion',
            description: 'Get statistics from code repositories, track each commits.',
            image: 'https://playground.oobeya.io/assets/images/svn/svn.png'
        },


        {
            name: 'TeamCity',
            description: 'Connect TeamCity and track accurate DORA metrics calculated by Oobeya Deployment Analytics.',
            image: 'https://playground.oobeya.io/assets/images/teamcity/teamcity.png'
        }

        ]
    },

    {
        title: 'Code Quality',
        items: [{
            name: 'Cast',
            description: 'Collects and visualizes code quality metrics.',
            image: 'https://playground.oobeya.io/assets/images/cast/cast.png'
        },
        {
            name: 'Fortify',
            description: 'Collects and visualizes application security metrics.',
            image: 'https://playground.oobeya.io/assets/images/fortify/fortify.png'
        },
        {
            name: 'SonarQube',
            description: 'Collects and visualizes code quality metrics and take control of technical debt.',
            image: 'https://playground.oobeya.io/assets/images/sonarqube/sonarqube.jpg'
        },
        {
            name: 'SonarQube Cloud',
            description: 'Collects and visualizes code quality metrics and take control of technical debt.',
            image: 'https://playground.oobeya.io/assets/images/sonarqube-cloud/sonarqube-cloud.jpg'
        }

        ]
    },

    {
        title: 'Test',
        items: [{
            name: 'Test Rail',
            description: 'Easily track & follow the status of individual tests with dashboards and reports.',
            image: 'https://playground.oobeya.io/assets/images/test-rail/test-rail.svg'
        },
        {
            name: 'Testinium',
            description: 'Monitors automated test plans and execution results.',
            image: 'https://playground.oobeya.io/assets/images/testinium/testinium.png'
        },
        {
            name: 'Testinium Cloud',
            description: 'Monitors automated test plans and execution results.',
            image: 'https://playground.oobeya.io/assets/images/testinium/testinium-cloud.png'
        },
        {
            name: 'TestRail',
            description: 'Collects and visualizes test execution data...',
            image: 'https://playground.oobeya.io/api/platform/image/602a28033cdea2000170e439'
        },
        {
            name: 'Zephyr',
            description: 'Monitors test plans and execution results.',
            image: 'https://playground.oobeya.io/assets/images/zephyr/zephyr.svg'
        }

        ]
    },
    {
        title: 'Monitoring/APM',
        items: [{
            name: 'AppDynamics',
            description: 'Integrate applications to the dashboards, track the real-time and average performance metrics.',
            image: 'https://playground.oobeya.io/assets/images/appdynamics/appdynamics.png'
        },
        {
            name: 'Dynatrace',
            description: 'Dynatrace is a software intelligence company providing application performance management.',
            image: 'https://playground.oobeya.io/assets/images/dynatrace/dynatrace.png'
        },
        {
            name: 'Elastic APM',
            description: 'Elastic APM is an application performance monitoring system built on the Elastic Stack.',
            image: 'https://playground.oobeya.io/assets/images/elastic-apm/elastic-apm.png'
        },
        {
            name: 'Instana',
            description: 'Integrate applications to the dashboards, track the real-time and average performance metrics.',
            image: 'https://playground.oobeya.io/api/platform/image/602a284d3cdea2000170e43b'
        },
        {
            name: 'New Relic',
            description: 'Integrate applications to the dashboards, track the real-time and average performance metrics.',
            image: 'https://playground.oobeya.io/assets/images/new-relic/new-relic.svg'
        }

        ]
    },
    {
        title: 'Project Management',
        items: [{
            name: 'Jira',
            description: 'Get project statistics to track issues and sprints.',
            image: 'https://playground.oobeya.io/assets/images/jira/jira.svg'
        },
        {
            name: 'Rally',
            description: 'Get project statistics to track issues and sprints.',
            image: 'https://playground.oobeya.io/api/platform/image/602a29573cdea2000170e441'
        },
        {
            name: 'Servicenow',
            description: 'Get project statistics to track issues...',
            image: 'https://playground.oobeya.io/api/platform/image/602a28aa3cdea2000170e43f'
        }
        ]
    },
    {
        title: 'Databases',
        items: [{
            name: 'Google BigQuery',
            description: 'Write and read data',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/googlebigquery.png'
        },
        {
            name: 'Heroku PostgreSQL',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/herokupostgresql.png'
        },
        {
            name: 'MariaDB',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/mariadb.png'
        },
        {
            name: 'MongoDB',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/mongodb.png'
        },
        {
            name: 'MS SQL Server',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/mssql.png'
        },
        {
            name: 'MySQL',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/mysql.png'

        },
        {
            name: 'Oracle',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/oracle.png'
        },
        {
            name: 'PostgreSQL',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/postgresql.png'
        },
        {
            name: 'Amazon Redshift',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/redshift.png'
        },
        {
            name: 'Segment',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/segment.png'
        },
        {
            name: 'Snowflake',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/snowflake.png'

        }
        ]
    },
    {
        title: 'Files',
        items: [{
            name: 'Box Excel Spreadsheet',
            description: 'Integrate Box with your organization to sync data from Excel spreadsheets. Supported formats - .xls and .xlsx.',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/box.png'
        },
        {
            name: 'CSV file',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/csv.png'
        },
        {
            name: 'Excel Online',
            description: 'Integrate Box with your organization to write and read Excel Online spreadsheets.',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/excelonline-v2.png'
        },
        {
            name: 'Google Spreadsheet',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/googlespreadsheet.png'
        },
        {
            name: 'Smartsheet',
            description: '',
            image: 'https://cdn.gtmhubstatic.com/dist/img/logos/smartsheet.png'
        },
        {
            name: 'Spreadsheet File',
            description: '',
            image: '/static/assets/broker/sap_business_one.svg'

        }
        ]
    },

    {
        title: 'Product',
        items: [
            {
                name: 'SAP',
                description: '',
                image: '/static/assets/broker/SAP_logo.png'
            },
            {
                name: 'SAP Business One',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'SAP Concur',
                description: '',
                image: '/static/assets/broker/sap_concur.svg'
            },
            {
                name: 'SAP Hana',
                description: '',
                image: '/static/assets/broker/sap_hana.svg'
            },
            {
                name: 'SAP Success Factors',
                description: '',
                image: '/static/assets/broker/sap_success_factors.svg'
            },
            {
                name: 'eBA',
                description: '',
                image: '/static/assets/broker/eba.png'
            },
            {
                name: 'QDMS',
                description: '',
                image: '/static/assets/broker/qdms.png'
            },
            {
                name: 'BEAM',
                description: '',
                image: '/static/assets/broker/beam.png'
            },
            {
                name: 'Ensemble',
                description: '',
                image: '/static/assets/broker/ensemble.png'
            },
            {
                name: 'Jira',
                description: '',
                image: '/static/assets/broker/jira.png'
            },
            {
                name: 'Service Now',
                description: '',
                image: '/static/assets/broker/servicenow.png'
            },
            {
                name: 'Asana',
                description: '',
                image: '/static/assets/broker/asana.png'
            },
            {
                name: 'Auth0',
                description: '',
                image: '/static/assets/broker/auth0.png'
            },
            {
                name: 'Basecamp',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Bitbucket',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Delighted',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Jenkins',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Podio',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Trello',
                description: 'Track the progress of your cards and stay updated with your boards',
                image: '/static/assets/broker/trello.png'
            }
        ]
    },

    {
        title: 'Operations',
        items: [
            {
                name: 'FreshDesk',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Intercom',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Paidlabs',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'QuickBooks Online',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Optimizely',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Stripe',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'ZenDesk',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            }
        ]
    },
    {
        title: 'Marketing',
        items: [
            {
                name: 'Google Ads',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Google Analytics',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'GoToWebinar',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'MailChimp',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Optimizely',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'Persistiq',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            },
            {
                name: 'SendGrid',
                description: '',
                image: '/static/assets/broker/sap_business_one.svg'
            }
        ]
    }
]


export class InstalledBrokerListController extends UIController {

    @State()
    private brokers: any[];

    @State()
    private showingUsers: IEmployee[];

    private isLoading(): boolean {
        return this.brokers == null;
    }


    public BindRouterParams({ }) {

        RealmBrokerClient.GetInstalledBrokers().then((brokers) => {
            const items = brokers.map(broker => {
                return {
                    id: broker.broker_id,
                    name: broker.broker_display_name,
                    description: broker.broker_short_description,
                    image: broker.icon_link,
                }

            })
            this.brokers = [
                {
                    title: 'Test',
                    items: [...items]
                }
            ]
        })
        const orgService = useOrgProvider();
        orgService.getEmployees().then(employees =>
            this.showingUsers = this.users = employees
        )
        /*   RealmBrokerClient.GetEmployees().then(employees => {
            this.showingUsers = this.users = employees;
        }) */
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
        return ({ AppController_ContextAction_SetController }) => {
            return (
                Views.RightSidePage({
                    title: 'Installed Brokers',
                    content: (
                        HStack({ alignment: cTopLeading })(
                            this.isLoading() ?
                                VStack(Spinner()) :

                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading })(
                                        Text('Installed Brokers')
                                            .foregroundColor('#444')
                                            .fontFamily(fontFamily).fontSize('2.4rem').fontWeight('300'),
                                    )
                                        .transition('padding-bottom 0.15s ease-out')
                                        .shadow('0 5px 10px 0 rgb(0 0 0 / 2%)')
                                        .margin('0 0 20px 0')
                                        .padding('32px 24px 32px 46px')
                                        .background('#ffffff')
                                        .height(),
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box
                                        HStack(
                                            TextField().placeholder('Search by Broker Name')
                                                .onTextChange((value) => this.Search_Action(value))
                                        ).height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                        Spacer()

                                    ).height().marginBottom('24px'),
                                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                        ...ForEach(this.brokers)(category =>

                                            VStack({ alignment: cTopLeading })(
                                                Text(category.title).height(40).fontSize(20).fontWeight('600').padding('1rem'),
                                                HStack({ alignment: cTopLeading })(
                                                    ...ForEach(category.items)((item: any) =>
                                                        BrokerAddonCard(item.image, item.name, item.description)
                                                        .onClick(()=> void 0/* InstallBrokerDialog.Show(item.id) */)
                                                    )
                                                ).width().height().wrap('wrap')
                                            )
                                                .padding(20)
                                                .height().background('#F6F6F6')

                                        )
                                    )

                                )

                        )
                    )
                })
            )
        }
    }
}