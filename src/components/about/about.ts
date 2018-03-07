import { Component, Vue } from "vue-property-decorator";
import { Logger } from "src/util/log";


@Component({
    /* tslint:disable no-require-imports */
    template: require("./about.html"),
    components: {
    }
})
export class AboutComponent extends Vue {

    public repo: string = "https://github.com/dgzornoza/vuejs-typescript-template";
    protected logger: Logger;



    public mounted(): void {
        if (!this.logger) { this.logger = new Logger(); }
        this.$nextTick(() => this.logger.info("about is ready!"));
    }

}
