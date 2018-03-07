import { Component, Vue } from "vue-property-decorator";
import axios, { AxiosResponse, AxiosStatic } from "axios";


interface IUserResponse {
    id: string;
    name: string;
}

@Component({
    /* tslint:disable no-require-imports */
    template: require("./list.html"),
    /* tslint:enable no-require-imports */
    components: {
    }
})
export class ListComponent extends Vue {

    public items: IUserResponse[] = [];
    protected axios: AxiosStatic;
    private url: string = "https://jsonplaceholder.typicode.com/users";

    constructor() {
        super();
        this.axios = axios;
    }

    public mounted(): void {
        this.$nextTick(() => {
            this.loadItems();
        });
    }

    private loadItems(): void {
        if (!this.items.length) {
            this.axios.get(this.url).then((response: AxiosResponse) => {
                this.items = response.data;
            },
            (_error: any) => {
                // console.error(error);
            });
        }
    }
}
