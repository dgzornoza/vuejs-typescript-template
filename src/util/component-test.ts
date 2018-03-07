import Vue, { Component } from "vue";
import { SinonSpy } from "sinon";
import _ from "lodash";
import { ILogger } from "src/util/log";

export interface IComponents {
    [key: string]: Component;
}

export class ComponentTest {

    public vm: Vue;

    private _template: string;
    private _components: IComponents;

    constructor(template: string, components: IComponents) {
        this._template = template;
        this._components = components;
    }

    public createComponent(createOptions?: any): void {
        const options: any = {
            template: this._template,
            components: this._components
        };

        if (createOptions) { _.merge(options, createOptions); }
        this.vm = new Vue(options).$mount();
    }

    public async execute(callback: (vm: Vue) => Promise<void> | void): Promise<void> {
        await Vue.nextTick();
        await callback(this.vm);
    }

}

export class MockLogger implements ILogger {

    private _loggerSpy: SinonSpy;

    constructor(loggerSpy: SinonSpy) {
        this._loggerSpy = loggerSpy;
    }

    public info(msg: any): any {
        this._loggerSpy(msg);
    }

    public warn(msg: any): any {
        this._loggerSpy(msg);
    }

    public error(msg: any): any {
        this._loggerSpy(msg);
    }
}
