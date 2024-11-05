import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-7GIFAQ7M.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  ComingSoon
} from "/build/_shared/chunk-PNCPL2B3.js";
import "/build/_shared/chunk-T2YRPOP2.js";
import "/build/_shared/chunk-V7QB77PW.js";
import {
  createHotContext
} from "/build/_shared/chunk-EW54I7OG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/HeaderButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HeaderButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HeaderButton.tsx"
  );
  import.meta.hot.lastModified = "1707016755882.2744";
}
function HeaderButton({
  link,
  title,
  setIsOpen
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsOpen(false), className: "w-full block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-black transition hover:bg-secondary hover:text-white focus:outline-none focus:ring", type: "button", children: title }, void 0, false, {
    fileName: "app/components/HeaderButton.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/HeaderButton.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/HeaderButton.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = HeaderButton;
var _c;
$RefreshReg$(_c, "HeaderButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/headerButtonData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/headerButtonData.ts"
  );
  import.meta.hot.lastModified = "1708610674552.676";
}
var headerButtonData = [
  {
    id: 1,
    link: "roster",
    title: "Roster"
  },
  {
    id: 2,
    link: "races",
    title: "Races"
  },
  {
    id: 3,
    link: "media",
    title: "Media"
  }
  // {
  //   id: 4,
  //   link: 'sponsors',
  //   title: 'Sponsors'
  // }
];

// app/components/Header.tsx
var import_react3 = __toESM(require_react());

// app/components/ContactModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ContactModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ContactModal.tsx"
  );
  import.meta.hot.lastModified = "1724791091521.9363";
}
var ContactModal = ({
  isOpen,
  onClose
}) => {
  if (!isOpen)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-8 max-w-screen-xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "absolute top-10 right-10 bg-primary text-black text-4xl rounded-full w-12 h-12 flex items-center justify-center", onClick: onClose, children: "\xD7" }, void 0, false, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-2 lg:py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "max-w-xl text-lg", children: "Send us a message and we'll get back to you as soon as possible." }, void 0, false, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { action: "#", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "w-full rounded-lg border border-gray-200 p-3 text-sm", placeholder: "Name", type: "text", id: "name" }, void 0, false, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 46,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "w-full rounded-lg border border-gray-200 p-3 text-sm", placeholder: "Email address", type: "email", id: "email" }, void 0, false, {
            fileName: "app/components/ContactModal.tsx",
            lineNumber: 53,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/ContactModal.tsx",
            lineNumber: 51,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "w-full rounded-lg border border-gray-200 p-3 text-sm", placeholder: "Phone Number (optional)", type: "tel", id: "phone" }, void 0, false, {
            fileName: "app/components/ContactModal.tsx",
            lineNumber: 56,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/ContactModal.tsx",
            lineNumber: 55,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 50,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { className: "w-full rounded-lg border border-gray p-3 text-sm", placeholder: "Message", rows: 8, id: "message" }, void 0, false, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 92,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-black sm:w-auto", children: "Send" }, void 0, false, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 95,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 94,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ContactModal.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ContactModal.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = ContactModal;
var ContactModal_default = ContactModal;
var _c2;
$RefreshReg$(_c2, "ContactModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Header.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1724789485210.5073";
}
function Header() {
  _s();
  const [isOpen, setIsOpen] = (0, import_react3.useState)(false);
  const buttons = headerButtonData;
  const [isModalOpen, setIsModalOpen] = (0, import_react3.useState)(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "bg-gray-50 fixed w-full top-0 z-50 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center text-center sm:text-left md:justify-center sm:justify-center xs:justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { alt: "P412 logo", src: "/assets/logos/p412.png", className: "h-18 w-28 mr-1 hidden sm:block" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { onClick: () => setIsOpen(false), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-2xl font-bold italic text-gray-900 sm:text-3xl sm:inline-block text-left", children: "Project 412 Cycling" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Pittsburgh's Domestic Elite Cycling Team" }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "sm:hidden ml-auto", onClick: () => setIsOpen(!isOpen), children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 52,
        columnNumber: 27
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 54,
        columnNumber: 28
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `mt-4 flex gap-4 flex-col sm:flex-row justify-center items-center ${isOpen ? "block" : "hidden sm:flex"}`, children: [
      buttons.map((button) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderButton, { title: button.title, link: button.link, setIsOpen }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 64,
        columnNumber: 19
      }, this) }, button.title, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 63,
        columnNumber: 38
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: handleOpenModal, className: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-secondary hover:border-primary focus:outline-none focus:ring w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-medium whitespace-nowrap", children: " Contact us " }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 88,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactModal_default, { isOpen: isModalOpen, onClose: handleCloseModal }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 41,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Header, "YJgyHTQx/zDh7FS+yO0RHdp0RdM=");
_c3 = Header;
var _c3;
$RefreshReg$(_c3, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1730387382051.339";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "bg-white bottom-0 w-full z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full pb-4  sm:px-4 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "border-t border-gray-100 pt-4 sm:flex sm:items-center sm:justify-between lg:mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "flex flex-wrap justify-center gap-4 text-xs lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "https://www.shawn-wilson.com", className: "text-gray-500 transition text-lg hover:opacity-75", children: " Designed by Shawn Wilson / Dan Uhranowsky \xA92024 " }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "mt-4  flex justify-center items-center gap-6 sm:mt-0 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "https://www.instagram.com/p.412.cycling", rel: "noreferrer", target: "_blank", className: "text-gray-700 transition hover:text-primary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Instagram" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 74,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "h-8 w-8", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", clipRule: "evenodd" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 76,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 72,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 39,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c4 = Footer;
var _c4;
$RefreshReg$(_c4, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HNSJL5DL.css";

// app/root.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  const underMaintenance = false;
  if (underMaintenance) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "from-primary w-full bg-gradient-to-b to-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ComingSoon, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "icon", href: "/assets/logos/p412.png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: "Project 412 Cycling" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { className: "from-primary flex min-h-screen flex-col bg-gradient-to-b to-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full flex-grow pb-32 pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-screen-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c5 = App;
var _c5;
$RefreshReg$(_c5, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-57LVWQ4O.js.map
