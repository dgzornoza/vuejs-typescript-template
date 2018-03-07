import { Component, Vue } from "vue-property-decorator";
import "src/components/home/home.scss";

@Component({
    /* tslint:disable no-require-imports */
    template: require("./home.html"),
    /* tslint:enable no-require-imports */
    components: {
    }
})
export class HomeComponent extends Vue {

    public package: string = "vuejs-typescript-template";
    public repo: string = "https://github.com/dgzornoza/vuejs-typescript-template";
    public mode: string | undefined = process.env.ENV;

}
