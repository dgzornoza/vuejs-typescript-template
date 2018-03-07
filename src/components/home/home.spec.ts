import { expect } from "chai";
import { HomeComponent } from "src/components/home/home";
import { ComponentTest } from "src/util/component-test";
import Vue from "vue";

describe("Home component", () => {
    let directiveTest: ComponentTest;

    beforeEach(() => {
        directiveTest = new ComponentTest("<div><home></home></div>", { home: HomeComponent });
    });

    it("should render correct contents", async () => {
        directiveTest.createComponent();
        await directiveTest.execute((vm: Vue) => {

            const mode: any = process.env.ENV;
            let element: Element = vm.$el.querySelector(".mode") as Element;
            expect(element && element.textContent).to.equal(`${mode} mode`);
            element = vm.$el.querySelector(".mode") as Element;
            expect(element && element.textContent).to.equal("vuejs-typescript-template");
        });
    });
});
