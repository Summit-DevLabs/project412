import {
  sponsorData
} from "/build/_shared/chunk-T2YRPOP2.js";
import {
  PhotoContainer
} from "/build/_shared/chunk-V7QB77PW.js";
import {
  createHotContext
} from "/build/_shared/chunk-EW54I7OG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sponsors.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sponsors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sponsors.tsx"
  );
  import.meta.hot.lastModified = "1707097673297.3132";
}
function Sponsors() {
  const sponsors = sponsorData;
  const photos = sponsors.sort((a, b) => a.name.localeCompare(b.name)).map((sponsor, index) => ({
    id: index,
    src: sponsor.img,
    alt: sponsor.name,
    title: sponsor.name,
    description: sponsor.description
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoContainer, { layout: "grid", photos, size: "medium", filePath: "logos", photoStyle: "contain" }, void 0, false, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 35,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Sponsors;
var _c;
$RefreshReg$(_c, "Sponsors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Sponsors as default
};
//# sourceMappingURL=/build/routes/sponsors-54SFIQDV.js.map
