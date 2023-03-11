
import { UIFormController, UIScene, HStack, cTopLeading, UIRecordContext, cLeading,EditableHeader, Icon,Text, Spinner, UIUpdateContext, VStack, Button, State, Icons } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { LeftSideMenuView } from "../../../../views/LeftMenu";
import { Views, fontFamily } from "../../../../views/Views";
import {UIBPMNModeler} from '@realmocean/bpmn';
import { brokers } from "../templates/brokers";
import { github } from "../templates/github";
import { webhook } from "../templates/github-webhook";
import { google_drive } from "../templates/google-drive";
import { nncrm_hooks } from "../templates/nncrm_events";
import { organization } from "../templates/organization";
import { parasut } from "../templates/parasut";
import { smtp } from "../templates/smtp";
import { tracer } from "../templates/tracer";


export class FlowModelController extends UIFormController {

    @State()
    private modeler: any;

    @State()
    private flowId: string;

    protected override BindRouterParams({ flow_id }) {
        this.flowId = flow_id;
    }

    public LoadView() {
        return (
            UIScene(
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Flows'),
                    Views.RightSidePage({
                        showBackIcon: true,
                        title:
                            RealmDataContext(
                                UIRecordContext(({ data }) =>
                                    HStack({ alignment: cLeading, spacing: 5 })(
                                        Icon(Icons.API).size(25).foregroundColor('rgb(84,84,84)'),
                                        EditableHeader(data?.flow_name)
                                        .width('100%')
                                            .foregroundColor('#444')
                                            .fontFamily(fontFamily).fontSize(28).fontWeight('600')
                                    )
                                ).resource('flows').filter({ id: this.flowId })
                            ),
                        maxWidth: '100%',
                        content: (
                            this.flowId == null ? HStack(Spinner()) :
                                RealmDataContext(
                                    UIUpdateContext((update, data, isLoading) =>
                                        (data == null) ? Spinner() :
                                            VStack({ alignment: cTopLeading, spacing: 20 })(
                                                Button(
                                                    Text('Save')
                                                ).onClick(() => {
                                                    const canvas = this.modeler.get("canvas");
                                                    console.log(canvas.viewbox())

                                                    this.modeler.saveXML().then((e) => {
                                                        this.SetValue('flow_id', this.flowId);
                                                        this.SetValue('model_content', e.xml);
                                                        // debugger;
                                                        update()
                                                    })
                                                }),
                                                UIBPMNModeler()
                                                    .self((modeler) => this.modeler = modeler)
                                                    .modelContent(data.model_content)
                                                    .templates([...brokers, tracer, webhook, google_drive, github, parasut, smtp, organization, nncrm_hooks])
                                                    .width('100%').height('100%')
                                            )
                                                .backgroundImage('linear-gradient(0deg, transparent 15px, #333 32px),linear-gradient(90deg,  transparent 15px, #333 32px)')
                                                .backgroundColor('white')
                                                .backgroundSize('16px 16px')
                                    ).resource('flow-models').filter({ id: this.flowId })


                                )



                        )
                    })
                )
            )

        )
    }
}