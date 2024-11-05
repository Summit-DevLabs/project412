import {
  createHotContext
} from "/build/_shared/chunk-EW54I7OG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/PhotoContainer.tsx
var import_react = __toESM(require_react());

// app/components/PhotoCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PhotoCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PhotoCard.tsx"
  );
  import.meta.hot.lastModified = "1723822319746.623";
}
function PhotoCard({
  photo,
  size,
  filePath,
  photoStyle,
  hideAnimation,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `m-2 flex justify-center items-center bg-white rounded-lg overflow-hidden ${hideAnimation ? "" : "transform transition-all duration-500 group hover:scale-110"} ${size === "small" ? "w-48 h-48" : size === "medium" ? "w-64 h-64" : size === "large" ? "w-[85%]" : "w-full h-full"}`, onClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-full flex items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `/assets/${filePath}/${photo.src}`, alt: photo.alt, className: `w-full h-full rounded-tr-lg rounded-br-lg ${photoStyle === "contain" ? "object-contain" : "object-cover"} ${hideAnimation ? "" : "transition-opacity duration-500 group-hover:opacity-75"}` }, void 0, false, {
      fileName: "app/components/PhotoCard.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    photo.title || photo.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-md", children: photo.title }, void 0, false, {
        fileName: "app/components/PhotoCard.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: photo.description }, void 0, false, {
        fileName: "app/components/PhotoCard.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PhotoCard.tsx",
      lineNumber: 32,
      columnNumber: 45
    }, this) : ""
  ] }, void 0, true, {
    fileName: "app/components/PhotoCard.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/PhotoCard.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = PhotoCard;
var _c;
$RefreshReg$(_c, "PhotoCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PhotoContainer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PhotoContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PhotoContainer.tsx"
  );
  import.meta.hot.lastModified = "1723822631732.0112";
}
function PhotoContainer({
  photos,
  layout,
  size,
  filePath,
  photoStyle,
  hideAnimation
}) {
  _s();
  const [isFullScreen, setIsFullScreen] = (0, import_react.useState)(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = (0, import_react.useState)(0);
  const handleFullScreen = (index) => {
    setCurrentPhotoIndex(index);
    setIsFullScreen(true);
  };
  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap justify-center items-center w-full mx-auto", children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      layout === "col" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PhotoCard, { photo, size, filePath, photoStyle, hideAnimation, onClick: () => handleFullScreen(index) }, void 0, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 50,
        columnNumber: 19
      }, this) }, photo.id, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 49,
        columnNumber: 36
      }, this),
      layout === "row" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-nowrap justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PhotoCard, { photo, size, filePath, photoStyle, hideAnimation, onClick: () => handleFullScreen(index) }, void 0, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 53,
        columnNumber: 19
      }, this) }, photo.id, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 52,
        columnNumber: 36
      }, this),
      layout === "grid" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PhotoCard, { photo, size, filePath, photoStyle, hideAnimation, onClick: () => handleFullScreen(index) }, void 0, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this) }, photo.id, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 55,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 48,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    isFullScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "absolute top-4 right-4 text-white text-2xl", onClick: () => setIsFullScreen(false), children: "\xD7" }, void 0, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "absolute left-4 text-white text-2xl", onClick: handlePrevPhoto, children: "\u25C0" }, void 0, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `/assets/${filePath}/${photos[currentPhotoIndex].src}`, alt: photos[currentPhotoIndex].alt, className: "max-w-full max-h-full" }, void 0, false, {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white z-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-bold text-md", children: photos[currentPhotoIndex].title }, void 0, false, {
            fileName: "app/components/PhotoContainer.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm", children: photos[currentPhotoIndex].description }, void 0, false, {
            fileName: "app/components/PhotoContainer.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "absolute right-4 text-white text-2xl", onClick: handleNextPhoto, children: "\u25B6" }, void 0, false, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 62,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PhotoContainer.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(PhotoContainer, "WVdhMr6OuaTo3reg3qHLO2AVPfU=");
_c2 = PhotoContainer;
var _c2;
$RefreshReg$(_c2, "PhotoContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PhotoContainer
};
//# sourceMappingURL=/build/_shared/chunk-V7QB77PW.js.map
