import { Component, Vue } from "vue-property-decorator"
import "./home.scss"

@Component({
  template: require("./home.html"),
  components: {
  }
})
export class HomeComponent extends Vue {

  package: string = "vuejs-typescript-template"
  repo: string = "https://github.com/dgzornoza/vuejs-typescript-template"
  mode: string | undefined = process.env.ENV

}
