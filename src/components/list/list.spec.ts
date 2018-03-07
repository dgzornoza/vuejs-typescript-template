import Component from "vue-class-component";
import { expect } from "chai";
import { ComponentTest } from "src/util/component-test";
import { ListComponent } from "src/components/list/list";
import Vue from "vue";

@Component({
    /* tslint:disable no-require-imports */
    template: require("./list.html")
    /* tslint:disable no-require-imports */
})
class MockListComponent extends ListComponent {
    constructor() {
        super();
        this.axios = {
            get: (): any => {
                return Promise.resolve({ data: [{ name: "test 1" }, { name: "test 2" }, { name: "test 3" }] });
            }
        } as any;
    }
}

describe("List component", () => {
    let directiveTest: ComponentTest;

    beforeEach(() => {
        directiveTest = new ComponentTest("<div><list></list></div>", { list: MockListComponent });
    });

    it("should render correct contents", async () => {
        directiveTest.createComponent();

        await directiveTest.execute((vm: Vue) => { // ensure Vue has bootstrapped/run change detection

            // console.log(vm.$el.querySelectorAll(".content ul li"));
            expect(vm.$el.querySelectorAll(".content ul li").length).to.equal(3);
        });
    });
});
