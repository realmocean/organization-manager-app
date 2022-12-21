
import { ModuleLoader } from '@tuval/core';
import { TApplication, TForm } from '@tuval/forms';
import { MainForm } from './MainForm';
import { RealmBrokerClient } from '@realmocean/common';
import { SplashForm } from './SplashForm';
import { Services } from './Services/Services';

const manifest = require('./manifest');
declare var tuval$core, WebFont;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class TenantManager extends TApplication {

    public InitComponents() {

        debugger;

       

        //fileExprorer.Controls.Add(button);

        this.Icon = manifest.application.icon;
        const fileExprorer = new SplashForm();

        this.SetMainForm(fileExprorer);
        setTimeout(() => this.Start(), 100);

        const session_id = Services.StateService.GetSessionId();
      
        RealmBrokerClient.GetSessionInfo().then(sessionInfo => {
            if (sessionInfo.is_tenant_admin) {
                const fileExprorer = new MainForm();
                this.SetMainForm(fileExprorer);
                setTimeout(() => this.Start(), 100);
            } else {
                alert('Bu uygulamayı kullanmaya yetkiniz yoktur.');
                fileExprorer.Hide();
            }

        });
        //
    }
}