import {
  sponsorData
} from "/build/_shared/chunk-T2YRPOP2.js";
import {
  landingPagePhotos
} from "/build/_shared/chunk-FA7CX3CC.js";
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

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1723823150016.1758";
}
function Index() {
  const photos = landingPagePhotos;
  const sponsors = sponsorData;
  const sponsorPhotos = sponsors.map((sponsor, index) => ({
    id: index,
    src: sponsor.img,
    alt: sponsor.name,
    title: sponsor.name,
    description: sponsor.description
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoContainer, { layout: "col", photos, size: "large", filePath: "media", photoStyle: "cover", hideAnimation: true }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-2xl py-12 px-4 lg:py-24 lg:px-24 text-center", children: "Project 412 is focused on competition, philanthropic efforts and community engagement. We are dedicated to promoting the sport of cycling and inspiring the next generation, regardless of background, financial means or experience level. Come ride with us!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoContainer, { layout: "row", photos: sponsorPhotos, size: "medium", filePath: "logos", photoStyle: "contain" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-2RXO4I7P.js.map
