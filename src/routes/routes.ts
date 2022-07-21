import { lazy, LazyExoticComponent, ReactNode } from "react";
import { NoLazy } from "../lazyload/pages";

type JSXComponent = () =>JSX.Element;

interface IRoute {
  to: string;
  path: string;
  // Component: ReactNode;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../lazyload/layout/LazyLayout"));
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../lazyload/pages/LazyPage1"));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../lazyload/pages/LazyPage3"));

export const routes: IRoute[] = [
  // { to: "/lazy1", path: "lazy1", name: "lazy-1", Component: Lazy1 },
  { to: "/lazy-layout/", path: "/lazy-layout/*", name: "lazyLayout", Component: LazyLayout },
  { to: "/no-lazy", path: "no-lazy", name: "noLazy", Component: NoLazy },
  // { to: "/lazy2", path: "lazy2", name: "lazy-2", Component: Lazy2 },
  // { to: "/lazy3", path: "lazy3", name: "lazy-3", Component: Lazy3 },
];
