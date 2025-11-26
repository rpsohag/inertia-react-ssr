import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { route as route$1 } from "ziggy-js";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Link, { href: route("home"), children: "Home" }),
    /* @__PURE__ */ jsx("h1", { children: "About Page" })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Button() {
  return /* @__PURE__ */ jsx("button", { className: "btn btn-primary", children: "Click Me" });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome to Laravel React Project" }),
    /* @__PURE__ */ jsx("p", { className: "text-red-500 text-2xl", children: "This is the home page..." }),
    /* @__PURE__ */ jsx(Button, {})
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = { "url": "http://localhost", "port": null, "defaults": {}, "routes": { "telescope": { "uri": "telescope/{view?}", "methods": ["GET", "HEAD"], "wheres": { "view": "(.*)" }, "parameters": ["view"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "about": { "uri": "about", "methods": ["GET", "HEAD"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.tsx": __vite_glob_0_0, "./Pages/Home.tsx": __vite_glob_0_1 });
      return pages[`./Pages/${name}.tsx`];
    },
    setup: ({ App, props }) => {
      global.route = (name, params, absolute) => route$1(name, params, absolute, {
        ...Ziggy,
        // @ts-expect-error
        location: new URL(page.props.ziggy.location)
      });
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
