import Vue, { Component } from "vue";
// import VueRouter, { Location, Route, RouteConfig } from "vue-router"
import VueRouter, { RouteConfig } from "vue-router";
import { makeHot, reload } from "src/util/hot-reload";

/* tslint:disable no-require-imports */
const homeComponent: () => Promise<Component> = () => import("./components/home").then(({ HomeComponent }: any) => HomeComponent);
const aboutComponent: () => Promise<Component> = () => import("./components/about").then(({ AboutComponent }: any) => AboutComponent);
const listComponent: () => Promise<Component> = () => import("./components/list").then(({ ListComponent }: any) => ListComponent);
// const homeComponent = () => import(/* webpackChunkName: "home" */"./components/home").then(({ HomeComponent }) => HomeComponent)
// const aboutComponent = () => import(/* webpackChunkName: "about" */"./components/about").then(({ AboutComponent }) => AboutComponent)
// const listComponent = () => import(/* webpackChunkName: "list" */"./components/list").then(({ ListComponent }) => ListComponent)
if (process.env.ENV === "development" && module.hot) {
  const homeModuleId: string = "./components/home";
  const aboutModuleId: string = "./components/about";
  const listModuleId: string = "./components/list";

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(homeModuleId, homeComponent,
    module.hot.accept("./components/home", () => reload(homeModuleId, (require("./components/home") as any).HomeComponent)));

  makeHot(aboutModuleId, aboutComponent,
    module.hot.accept("./components/about", () => reload(aboutModuleId, (require("./components/about") as any).AboutComponent)));

  makeHot(listModuleId, listComponent,
    module.hot.accept("./components/list", () => reload(listModuleId, (require("./components/list") as any).ListComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: "/",
    component: homeComponent
  },
  {
    path: "/about",
    component: aboutComponent
  },
  {
    path: "/list",
    component: listComponent
  }
];

export const createRouter: () => VueRouter = () => new VueRouter({ mode: "history", routes: createRoutes() });
