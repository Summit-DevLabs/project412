import {
  mediaPagePhotos
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

// app/routes/media.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/media.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/media.tsx"
  );
  import.meta.hot.lastModified = "1708610674554.1245";
}
function Media() {
  const photos = mediaPagePhotos.reverse();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoContainer, { photos, layout: "grid", size: "medium", filePath: "media", photoStyle: "cover" }, void 0, false, {
    fileName: "app/routes/media.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/media.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/media.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Media;
var _c;
$RefreshReg$(_c, "Media");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Media as default
};
//# sourceMappingURL=/build/routes/media-64WSYQQV.js.map
