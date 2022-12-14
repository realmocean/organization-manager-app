import { Context, HStack, State, TForm, UIController, UIScene, VStack } from '@tuval/forms';

import { theme } from '../../Theme';
import { Routes } from '../Views/Routes';

const manifest = require('../../manifest');

declare var WebFont;

export class AppController extends UIController {

    private form: TForm;

    @State()
    private realmName: string;

    @State()
    private SideBarExpanded: boolean;

    @State()
    private Code: string;

    @State()
    private currentController: UIController;


    protected InitController() {

        WebFont.load({
            google: {
                families: ['Poppins:400,500,600,700', 'sans serif']
            }
        });

        WebFont.load({
            google: {
                families: ['Manrope:400,500,600,700', 'sans serif']
            }
        });

        WebFont.load({
            google: {
                families: ['Inter:400,500,600,700', 'sans serif']
            }
        });

    }


    @Context()
    private AppController_ContextAction_SetController(controller: UIController) {
        this.currentController = controller;
        (this as any).currentController.BindModel();
    }

    private OnMenuSelected(item: any) {

    }
    public OnBindModel(form: TForm) {
        this.form = form;
    }
    public LoadView() {

        return (
            UIScene(
                HStack(
                    VStack(
                        Routes()
                    )
                )
            )
        ).background(theme.surfacesection)

    }
}