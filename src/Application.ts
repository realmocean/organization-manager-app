import { FormBuilder, UIController } from '@tuval/forms';
import { MyTestController } from './AppController';
import { PositionSelectWidget } from './widgets/PositionSelectWidget';
import { EmployeeSelectWidget } from './widgets/EmployeeSelectWidget';

const manifest = require('./manifest');

declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class ProcessMining {
    public GetMainController() {
       return MyTestController;
    }
}

FormBuilder.injectView('positionselect', PositionSelectWidget);
FormBuilder.injectView('employeeselect', EmployeeSelectWidget);



