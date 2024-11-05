import {
  sponsorData
} from "/build/_shared/chunk-T2YRPOP2.js";
import {
  PhotoContainer
} from "/build/_shared/chunk-V7QB77PW.js";
import {
  createHotContext
} from "/build/_shared/chunk-EW54I7OG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/coming-soon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/coming-soon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/coming-soon.tsx"
  );
  import.meta.hot.lastModified = "1708207830865.4053";
}
function ComingSoon() {
  const photos = sponsorData.sort((a, b) => a.name.localeCompare(b.name)).map((sponsor, index) => ({
    id: index,
    src: sponsor.img
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center min-h-screen text-center text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center justify-center pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-6xl font-bold uppercase", children: "P412 Cycling site coming soon!" }, void 0, false, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoContainer, { layout: "row", photos, size: "medium", filePath: "logos", photoStyle: "contain" }, void 0, false, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/coming-soon.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/coming-soon.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = ComingSoon;
var _c;
$RefreshReg$(_c, "ComingSoon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ComingSoon
};
//# sourceMappingURL=/build/_shared/chunk-PNCPL2B3.js.map
