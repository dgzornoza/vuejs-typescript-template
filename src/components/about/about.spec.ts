import { AboutComponent } from "src/components/about/about";
import Sinon from "sinon";
import { ComponentTest, MockLogger } from "src/util/component-test";
import { expect } from "chai";
import Component from "vue-class-component";
import Vue from "vue";

/* tslint:disable mocha-no-side-effect-code */
const loggerSpy: Sinon.SinonSpy = Sinon.spy();
/* tslint:disable mocha-no-side-effect-code */

@Component({
    /* tslint:disable no-require-imports */
    template: require("./about.html")
    /* tslint:disable no-require-imports */
})
class MockAboutComponent extends AboutComponent {
    constructor() {
        super();
        this.logger = new MockLogger(loggerSpy);
    }
}

describe("About component", () => {
    let directiveTest: ComponentTest;

    beforeEach(() => {
        directiveTest = new ComponentTest("<div><about></about></div>", { about: MockAboutComponent });
    });

    it("should render correct contents", async () => {
        directiveTest.createComponent();

        await directiveTest.execute((vm: Vue) => {
            const element: Element = vm.$el.querySelector(".repo-link") as Element;
            expect(element && element.getAttribute("href")).to.equal("https://github.com/dgzornoza/vuejs-typescript-template");
            Sinon.assert.calledWith(loggerSpy, "about is ready!");
        });
    });
});
