var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), isbotModule = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 113,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react7 = require("@remix-run/react");

// app/components/Header.tsx
var import_react4 = require("@remix-run/react");

// app/components/HeaderButton.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function HeaderButton({
  link,
  title,
  setIsOpen
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "button",
    {
      onClick: () => setIsOpen(!1),
      className: "w-full block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-black transition hover:bg-secondary hover:text-white focus:outline-none focus:ring",
      type: "button",
      children: title
    },
    void 0,
    !1,
    {
      fileName: "app/components/HeaderButton.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/HeaderButton.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HeaderButton.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/data/headerButtonData.ts
var headerButtonData = [
  {
    id: 1,
    link: "roster",
    title: "Roster"
  },
  {
    id: 4,
    link: "sponsors",
    title: "Sponsors"
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
];

// app/components/Header.tsx
var import_react5 = require("react");

// app/components/ContactModal.tsx
var import_react3 = require("react");

// app/utils.ts
var EMAILJS_SERVICE_ID = "service_ghfjayq", EMAILJS_TEMPLATE_ID = "template_440e4fe", EMAILJS_USER_ID = "m7kzm3k_3CDMLeRgK";

// app/components/ContactModal.tsx
var import_emailjs_com = __toESM(require("emailjs-com")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen)
    return null;
  let form = (0, import_react3.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-8 max-w-screen-xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        className: "absolute top-10 right-10 bg-primary text-black text-4xl rounded-full w-12 h-12 flex items-center justify-center",
        onClick: onClose,
        children: "\xD7"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-span-2 lg:py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "max-w-xl text-lg", children: "Send us a message and we'll get back to you as soon as possible." }, void 0, !1, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "form",
        {
          ref: form,
          onSubmit: (e) => {
            e.preventDefault(), form.current && import_emailjs_com.default.sendForm(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              form.current,
              EMAILJS_USER_ID
            ).then(
              (result) => {
                console.log(result), alert("Message sent successfully!"), onClose(), window.location.href = "/";
              },
              (error) => {
                console.log(error.text), alert("Failed to send message. Please try again later.");
              }
            );
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                className: "w-full rounded-lg border border-gray-200 p-3 mt-2 mb-2 text-sm",
                placeholder: "Name",
                name: "from_name",
                type: "text",
                id: "name"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ContactModal.tsx",
                lineNumber: 71,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ContactModal.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                className: "w-full rounded-lg border border-gray-200 p-3 mt-2 mb-2 text-sm",
                placeholder: "Email address",
                type: "email",
                name: "from_email",
                id: "email"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ContactModal.tsx",
                lineNumber: 80,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ContactModal.tsx",
              lineNumber: 79,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "textarea",
              {
                className: "w-full rounded-lg border border-gray p-3 mt-2 mb-2 text-sm",
                placeholder: "Message",
                name: "message",
                rows: 8,
                id: "message"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ContactModal.tsx",
                lineNumber: 98,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ContactModal.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-black sm:w-auto",
                children: "Send"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ContactModal.tsx",
                lineNumber: 107,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ContactModal.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ContactModal.tsx",
          lineNumber: 66,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ContactModal.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ContactModal.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ContactModal.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ContactModal.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}, ContactModal_default = ContactModal;

// app/components/Header.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Header() {
  let [isOpen, setIsOpen] = (0, import_react5.useState)(!1), buttons = headerButtonData, [isModalOpen, setIsModalOpen] = (0, import_react5.useState)(!1), handleOpenModal = () => {
    setIsModalOpen(!0);
  }, handleCloseModal = () => {
    setIsModalOpen(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "bg-gray-50 fixed w-full top-0 z-50 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center text-center sm:text-left md:justify-center sm:justify-center xs:justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "img",
          {
            alt: "P412 logo",
            src: "/assets/logos/p412.png",
            className: "h-18 w-28 mr-1 hidden sm:block"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 27,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { onClick: () => setIsOpen(!1), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-2xl font-bold italic text-gray-900 sm:text-3xl sm:inline-block text-left", children: "Project 412 Cycling" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 33,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Pittsburgh's Domestic Elite Cycling Team" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 34,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "sm:hidden ml-auto", onClick: () => setIsOpen(!isOpen), children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 40,
        columnNumber: 19
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 44,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `mt-4 flex gap-4 flex-col sm:flex-row justify-center items-center ${isOpen ? "block" : "hidden sm:flex"}`, children: [
      buttons.map((button) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeaderButton, { title: button.title, link: button.link, setIsOpen }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this) }, button.title, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: handleOpenModal, className: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-secondary hover:border-primary focus:outline-none focus:ring w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm font-medium whitespace-nowrap", children: " Contact us " }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 93,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 85,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ContactModal_default, { isOpen: isModalOpen, onClose: handleCloseModal }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/coming-soon.tsx
var coming_soon_exports = {};
__export(coming_soon_exports, {
  default: () => ComingSoon
});

// app/components/PhotoContainer.tsx
var import_react6 = require("react");

// app/components/PhotoCard.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function PhotoCard({
  photo,
  size,
  filePath,
  photoStyle,
  hideAnimation,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: `m-2 flex justify-center items-center bg-white rounded-lg overflow-hidden ${hideAnimation ? "" : "transform transition-all duration-500 group hover:scale-110"} ${size === "small" ? "w-48 h-48" : size === "medium" ? "w-64 h-64" : size === "large" ? "w-[85%]" : "w-full h-full"}`,
      onClick,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative w-full h-full flex items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: `/assets/${filePath}/${photo.src}`,
            alt: photo.alt,
            className: `w-full h-full rounded-tr-lg rounded-br-lg ${photoStyle === "contain" ? "object-contain" : "object-cover"} ${hideAnimation ? "" : "transition-opacity duration-500 group-hover:opacity-75"}`
          },
          void 0,
          !1,
          {
            fileName: "app/components/PhotoCard.tsx",
            lineNumber: 29,
            columnNumber: 9
          },
          this
        ),
        photo.title || photo.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "font-bold text-md", children: photo.title }, void 0, !1, {
            fileName: "app/components/PhotoCard.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm", children: photo.description }, void 0, !1, {
            fileName: "app/components/PhotoCard.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PhotoCard.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this) : ""
      ] }, void 0, !0, {
        fileName: "app/components/PhotoCard.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/PhotoCard.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/components/PhotoContainer.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function PhotoContainer({ photos, layout, size, filePath, photoStyle, hideAnimation }) {
  let [isFullScreen, setIsFullScreen] = (0, import_react6.useState)(!1), [currentPhotoIndex, setCurrentPhotoIndex] = (0, import_react6.useState)(0), handleFullScreen = (index) => {
    setCurrentPhotoIndex(index), setIsFullScreen(!0);
  }, handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap justify-center items-center w-full mx-auto", children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      layout === "col" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        PhotoCard,
        {
          photo,
          size,
          filePath,
          photoStyle,
          hideAnimation,
          onClick: () => handleFullScreen(index)
        },
        void 0,
        !1,
        {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 30,
          columnNumber: 19
        },
        this
      ) }, photo.id, !1, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      layout === "row" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-nowrap justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        PhotoCard,
        {
          photo,
          size,
          filePath,
          photoStyle,
          hideAnimation,
          onClick: () => handleFullScreen(index)
        },
        void 0,
        !1,
        {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 42,
          columnNumber: 19
        },
        this
      ) }, photo.id, !1, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      layout === "grid" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        PhotoCard,
        {
          photo,
          size,
          filePath,
          photoStyle,
          hideAnimation,
          onClick: () => handleFullScreen(index)
        },
        void 0,
        !1,
        {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 54,
          columnNumber: 19
        },
        this
      ) }, photo.id, !1, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    isFullScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          className: "absolute top-4 right-4 text-white text-2xl",
          onClick: () => setIsFullScreen(!1),
          children: "\xD7"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 71,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          className: "absolute left-4 text-white text-2xl",
          onClick: handlePrevPhoto,
          children: "\u25C0"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            src: `/assets/${filePath}/${photos[currentPhotoIndex].src}`,
            alt: photos[currentPhotoIndex].alt,
            className: "max-w-full max-h-full"
          },
          void 0,
          !1,
          {
            fileName: "app/components/PhotoContainer.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white z-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "font-bold text-md", children: photos[currentPhotoIndex].title }, void 0, !1, {
            fileName: "app/components/PhotoContainer.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm", children: photos[currentPhotoIndex].description }, void 0, !1, {
            fileName: "app/components/PhotoContainer.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PhotoContainer.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          className: "absolute right-4 text-white text-2xl",
          onClick: handleNextPhoto,
          children: "\u25B6"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PhotoContainer.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/PhotoContainer.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PhotoContainer.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/data/sponsorData.ts
var sponsorData = [
  {
    name: "Fields Automotive",
    img: "fields.jpg",
    url: "fieldsauto.com",
    discountCode: "",
    description: "At the Fields Auto Group, we work to provide our customers with vehicle options to suit every taste and style",
    new: !1
  },
  {
    name: "Rush 2 Crush Cancer",
    img: "r2c.svg",
    url: "https://www.rushtocrushcancer.org/",
    discountCode: "",
    description: "UPMC Hillman Cancer Center\u2019s goal is life without cancer and Rush to Crush Cancer\u2019s sole mission is to help achieve this goal with each push of the pedal.",
    new: !1
  },
  {
    name: "Big Dog Coffee",
    img: "bigdog.jpg",
    url: "https://www.bigdogcoffeeshop.com/",
    discountCode: "",
    description: "",
    new: !1
  },
  {
    name: "ATP Race Consulting",
    img: "atp.jpg",
    url: "https://www.atpraceconsulting.info/",
    discountCode: "",
    description: "ATP Race Consulting is a cycling coaching service committed to making better cyclists of all levels. Whether you want to finish the local group ride or be at the front at a national championship, ATP Race Consulting can help you achieve top performance.",
    new: !1
  },
  {
    name: "Silca",
    img: "silca.avif",
    url: "silca.cc",
    discountCode: "Team Store",
    description: "",
    new: !1
  },
  {
    name: "Boyd Cycling",
    img: "boyd.avif",
    url: "https://boydcycling.com/",
    discountCode: "",
    description: "Craft wheel manufacturer dedicated to producing the highest quality bicycle wheels.",
    new: !1
  },
  {
    name: "Flow Formulas",
    img: "flow-blue.png",
    url: "https://flowformulas.com/",
    discountCode: "412Project30",
    description: "",
    new: !1
  },
  {
    name: "Summit DevLabs",
    img: "SDL_Logo_float.png",
    url: "https://www.summitdevlabs.com/",
    discountCode: "",
    description: "Custom software development and consulting services.",
    new: !0
  }
];

// app/routes/coming-soon.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ComingSoon() {
  let photos = sponsorData.sort((a, b) => a.name.localeCompare(b.name)).map((sponsor, index) => ({ id: index, src: sponsor.img }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col justify-center min-h-screen text-center text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "items-center justify-center pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-6xl font-bold uppercase", children: "P412 Cycling site coming soon!" }, void 0, !1, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PhotoContainer, { layout: "row", photos, size: "medium", filePath: "logos", photoStyle: "contain" }, void 0, !1, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/coming-soon.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/coming-soon.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/coming-soon.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("footer", { className: "bg-white bottom-0 w-full z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full pb-4  sm:px-4 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      className: "border-t border-gray-100 pt-4 sm:flex sm:items-center sm:justify-between lg:mt-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "flex flex-wrap justify-center gap-4 text-xs lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://www.summitdevlabs.com", className: "text-gray-500 transition text-lg hover:opacity-75", children: [
          " Designed by Summit DevLabs \xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "mt-4  flex justify-center items-center gap-6 sm:mt-0 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "a",
          {
            href: "https://www.instagram.com/p.412.cycling",
            rel: "noreferrer",
            target: "_blank",
            className: "text-gray-700 transition hover:text-primary",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Instagram" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 67,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { className: "h-8 w-8", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 70,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 61,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 22,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AS6AGUAA.css";

// app/root.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("link", { rel: "icon", href: "/assets/logos/p412.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("title", { children: "Project 412 Cycling" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { className: "from-primary flex min-h-screen flex-col bg-gradient-to-b to-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full flex-grow pb-32 pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-screen-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/sponsors.tsx
var sponsors_exports = {};
__export(sponsors_exports, {
  default: () => Sponsors
});

// app/components/FadeIn.tsx
var import_react8 = require("react"), import_framer_motion = require("framer-motion"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), FadeInStaggerContext = (0, import_react8.createContext)(!1), viewport = { once: !0, margin: "0px 0px -200px" };
function FadeIn(props) {
  let shouldReduceMotion = (0, import_framer_motion.useReducedMotion)(), isInStaggerGroup = (0, import_react8.useContext)(FadeInStaggerContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_framer_motion.motion.div,
    {
      variants: {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 }
      },
      transition: { duration: 0.5 },
      ...isInStaggerGroup ? {} : {
        initial: "hidden",
        whileInView: "visible",
        viewport
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/FadeIn.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}

// app/routes/sponsors.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Sponsors() {
  let photos = sponsorData.sort((a, b) => a.name.localeCompare(b.name)).map((sponsor, index) => ({
    id: index,
    src: sponsor.img,
    alt: sponsor.name,
    title: sponsor.name,
    description: sponsor.description,
    newSponsor: sponsor.new
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { role: "list", className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: photos.map((photo) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    FadeIn,
    {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex w-full items-center justify-between space-x-6 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex-1 truncate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "truncate text-sm font-medium text-gray-900", children: photo.title }, void 0, !1, {
              fileName: "app/routes/sponsors.tsx",
              lineNumber: 31,
              columnNumber: 23
            }, this),
            photo.newSponsor ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20", children: "New" }, void 0, !1, {
              fileName: "app/routes/sponsors.tsx",
              lineNumber: 32,
              columnNumber: 43
            }, this) : ""
          ] }, void 0, !0, {
            fileName: "app/routes/sponsors.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "mt-1 truncate text-sm text-gray-500", children: photo.description }, void 0, !1, {
            fileName: "app/routes/sponsors.tsx",
            lineNumber: 34,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sponsors.tsx",
          lineNumber: 29,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { alt: "", src: `/assets/logos/${photo.src}`, className: "size-14 shrink-0 rounded-full bg-gray-300" }, void 0, !1, {
          fileName: "app/routes/sponsors.tsx",
          lineNumber: 36,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sponsors.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this) }, photo.id, !1, {
        fileName: "app/routes/sponsors.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/sponsors.tsx",
      lineNumber: 25,
      columnNumber: 15
    },
    this
  )) }, void 0, !1, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sponsors.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});

// app/data/photoData.ts
var landingPagePhotos = [
  {
    id: 1,
    src: "IMG_6642.jpg",
    alt: "Hero Photo"
  }
], mediaPagePhotos = [
  {
    id: 4,
    src: "IMG_2725.jpg",
    alt: "IMG_2725",
    description: "",
    title: ""
  },
  {
    id: 5,
    src: "IMG_3127.jpg",
    alt: "IMG_3127",
    description: "",
    title: ""
  },
  {
    id: 6,
    src: "IMG_7331.jpg",
    alt: "IMG_7331",
    description: "",
    title: ""
  },
  {
    id: 2,
    src: "IMG_4966.jpg",
    alt: "John and Jon",
    description: "John and Jon at Piermont",
    title: ""
  },
  {
    id: 3,
    src: "IMG_4969.jpg",
    alt: "John and Jon",
    description: "John and Jon at Piermont",
    title: ""
  },
  {
    id: 7,
    src: "DSC01022.jpg",
    alt: "sponsor gear",
    description: "Kit reveal party!",
    title: ""
  },
  {
    id: 8,
    src: "DSC01034-Enhanced-NR.jpg",
    alt: "Small team photo around a table",
    description: "Some of the team at the kit reveal party",
    title: ""
  },
  {
    id: 9,
    src: "IMG_5128.jpg",
    alt: "Luis Jeff and John",
    description: "Luis, Jeff and John on a group ride",
    title: ""
  },
  {
    id: 10,
    src: "IMG_2916.png",
    alt: "Shawn Litster TT",
    description: "Shawn Litster, getting ready for TT course in AZ",
    title: ""
  },
  {
    id: 11,
    src: "IMG_7669.jpg",
    alt: "Dan Uhranowsky",
    description: "Dan Uhranowsky, mid TT in AZ",
    title: ""
  },
  {
    id: 12,
    src: "IMG_9140.jpg",
    alt: "Team at the start line",
    description: "Team photo at the start of Road Apple",
    title: ""
  },
  {
    id: 13,
    src: "IMG_4482.jpg",
    alt: "Steve on the podium",
    description: "Steve Hunchuck 2nd place podium at Road Apple",
    title: ""
  },
  {
    id: 14,
    src: "IMG_7782.jpg",
    alt: "Dan & Shawn mid-crit",
    description: "Dan & Shawn mid-crit in AZ",
    title: ""
  },
  {
    id: 15,
    src: "IMG_6642.jpg",
    alt: "Dan at Newport",
    description: "Dan taking 1st at Newport News",
    title: ""
  },
  {
    id: 16,
    src: "IMG_6643.jpg",
    alt: "Dan at Newport",
    description: "Dan taking 1st at Newport News",
    title: ""
  },
  {
    id: 17,
    src: "IMG_8394.jpg",
    alt: "Dan at Newport",
    description: "Dan on the podium at Newport News",
    title: ""
  },
  {
    id: 18,
    src: "IMG_6235.jpg",
    alt: "John at Newport News",
    description: "Crawford on the sprint podium",
    title: ""
  },
  {
    id: 19,
    src: "IMG_8847.jpg",
    alt: "Jeff at Newport",
    description: "Jeff on the podium at Newport",
    title: ""
  },
  {
    id: 20,
    src: "IMG_20240519.jpg",
    alt: "Rush 2 Crush Cancer finish",
    description: "P412 marshall crew at the finish line of the 2024 Rush 2 Crush Cancer benefit ride",
    title: ""
  },
  {
    id: 21,
    src: "240710-ACACrit-908.jpg",
    alt: "Nate on the front",
    description: "Nate on the front at the ACA Oval Crit - credit: Bob Mucciola",
    title: ""
  },
  {
    id: 22,
    src: "IMG_4242.jpg",
    alt: "John snags 1st at the Pan-Am Masters Games",
    description: "John snags 1st at the Pan-Am Masters Games",
    title: ""
  },
  {
    id: 22,
    src: "IMG_4244.jpg",
    alt: "Jeff on the podium at the Pan-Am Masters Games",
    description: "Jeff on the podium at the Pan-Am Masters Games",
    title: ""
  },
  {
    id: 23,
    src: "IMG_9878.jpg",
    alt: "Josh gets 1st place at the Pan-Am Masters Games",
    description: "Josh gets 1st place at the Pan-Am Masters Games",
    title: ""
  },
  {
    id: 24,
    src: "MDC211.jpg",
    alt: "Curtis on the podium at Mt. Davis",
    description: "Curtis on the podium at Mt. Davis - credit: Bob Mucciola",
    title: ""
  },
  {
    id: 25,
    src: "MDC222.jpg",
    alt: "John racing at Mt. Davis",
    description: "John racing at Mt. Davis - credit: Bob Mucciola",
    title: ""
  },
  {
    id: 26,
    src: "MDC233.jpg",
    alt: "Curtis racing at Mt. Davis",
    description: "Curtis racing at Mt. Davis - credit: Bob Mucciola",
    title: ""
  },
  {
    id: 27,
    src: "MDC244.jpg",
    alt: "Steve getting ready to race at Mt. Davis",
    description: "Steve getting ready to race at Mt. Davis - credit: Bob Mucciola",
    title: ""
  },
  {
    id: 2,
    src: "IMG_8572.jpg",
    alt: "Curtis 3rd GC, Noah 5th GC at 2 Days of Buffalo",
    description: "Curtis 3rd GC, Noah 5th GC at 2 Days of Buffalo",
    title: ""
  }
];

// app/components/NewsSection.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function NewsSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-black text-white py-4 px-6 mb-8 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-2xl font-bold", children: "News Section" }, void 0, !1, {
      fileName: "app/components/NewsSection.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "mt-2", children: "Stay updated with the latest news" }, void 0, !1, {
      fileName: "app/components/NewsSection.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewsSection.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NewsSection.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Index() {
  let photos = landingPagePhotos, sponsorPhotos = sponsorData.map((sponsor, index) => ({
    id: index,
    src: sponsor.img,
    alt: sponsor.name,
    title: sponsor.name,
    description: sponsor.description
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(PhotoContainer, { layout: "col", photos, size: "large", filePath: "media", photoStyle: "cover", hideAnimation: !0 }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-white text-2xl py-12 px-4 lg:py-24 lg:px-24 text-center", children: "Project 412 is focused on competition, philanthropic efforts and community engagement. We are dedicated to promoting the sport of cycling and inspiring the next generation, regardless of background, financial means or experience level. Come ride with us!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(NewsSection, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(PhotoContainer, { layout: "row", photos: sponsorPhotos, size: "medium", filePath: "logos", photoStyle: "contain" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/roster.tsx
var roster_exports = {};
__export(roster_exports, {
  default: () => Roster
});

// app/data/teamData.ts
var teamData = [
  {
    id: 1,
    firstName: "Shawn",
    lastName: "Wilson",
    category: 4,
    isActive: !0,
    img: "shawn-wilson.jpg "
  },
  {
    id: 2,
    firstName: "Dan",
    lastName: "Uhranowsky",
    category: 1,
    isActive: !0,
    img: "dan.jpg"
  },
  {
    id: 3,
    firstName: "Jon",
    lastName: "Carroll",
    category: 2,
    isActive: !0,
    img: "jon.jpg"
  },
  {
    id: 4,
    firstName: "Matthew",
    lastName: "Kitchen",
    category: 1,
    isActive: !0,
    img: "matt.jpg"
  },
  {
    id: 6,
    firstName: "Luis",
    lastName: "Hermoso",
    category: 3,
    isActive: !0,
    img: "luis.jpg"
  },
  {
    id: 7,
    firstName: "Jeff",
    lastName: "Koontz",
    category: 1,
    isActive: !0,
    img: "jeff.jpg"
  },
  {
    id: 8,
    firstName: "Shawn",
    lastName: "Litster",
    category: 1,
    isActive: !0,
    img: "shawn-litster.jpg"
  },
  {
    id: 9,
    firstName: "Steve",
    lastName: "Hunchuck",
    category: 2,
    isActive: !0,
    img: "steve.jpg"
  },
  {
    id: 10,
    firstName: "Zack",
    lastName: "White",
    category: 3,
    isActive: !0,
    img: "zack.jpg"
  },
  {
    id: 11,
    firstName: "Morgan",
    lastName: "Baker",
    category: 1,
    isActive: !0,
    img: "morgan.jpg"
  },
  {
    id: 12,
    firstName: "Colin",
    lastName: "Mihalak",
    category: 3,
    isActive: !0,
    img: "colin.jpeg"
  },
  {
    id: 13,
    firstName: "John",
    lastName: "Crawford",
    category: 3,
    isActive: !0,
    img: "john.jpg"
  },
  {
    id: 14,
    firstName: "Jonah",
    lastName: "Lantzy",
    category: 3,
    isActive: !1,
    img: ""
  },
  {
    id: 15,
    firstName: "Nathan",
    lastName: "Kerchensky",
    category: 3,
    isActive: !0,
    img: "nate.jpg"
  },
  {
    id: 16,
    firstName: "Josh",
    lastName: "Freidman",
    category: 1,
    isActive: !0,
    img: "josh.jpg"
  },
  {
    id: 17,
    firstName: "Curtis",
    lastName: "Smith",
    category: 3,
    isActive: !0,
    img: "curtis.jpg"
  },
  {
    id: 18,
    firstName: "Andrew",
    lastName: "Hilling",
    category: 4,
    isActive: !0,
    img: "andy.jpg"
  },
  {
    id: 19,
    firstName: "Noah",
    lastName: "Petersen",
    category: 3,
    isActive: !0,
    img: "noah.jpeg"
  }
];

// app/components/Card.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Card({ member }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: member.img === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative block h-96 min-h-full w-72 rounded-lg bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute bottom-8 left-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-xl font-bold text-white sm:text-2xl", children: [
    member.firstName,
    " ",
    member.lastName
  ] }, void 0, !0, {
    fileName: "app/components/Card.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 8,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative block h-96 w-72 rounded-lg bg-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "img",
      {
        alt: "Headshot",
        src: `./assets/headshots/${member.img}`,
        className: "h-full w-full rounded-lg object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Card.tsx",
        lineNumber: 17,
        columnNumber: 6
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute bottom-8 rounded-br-lg rounded-tr-lg bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "px-2 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-xl font-bold text-white sm:text-2xl", children: [
      member.firstName,
      " ",
      member.lastName
    ] }, void 0, !0, {
      fileName: "app/components/Card.tsx",
      lineNumber: 24,
      columnNumber: 8
    }, this) }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 22,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Card.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/routes/roster.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Roster() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "sm:pt-12 md:pt-16 lg:pt-8 flex justify-center items-center flex-wrap", children: teamData.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((member) => member.isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Card, { member }, void 0, !1, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this) }, member.id, !1, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 13,
    columnNumber: 15
  }, this) : "") }, void 0, !1, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/media.tsx
var media_exports = {};
__export(media_exports, {
  default: () => Media
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Media() {
  let photos = mediaPagePhotos.reverse();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-8 grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media.tsx",
        lineNumber: 20,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-auto max-w-full rounded-lg", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", alt: "" }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/media.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/media.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "md:mt-12 sm:mt-16 lg:mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(PhotoContainer, { photos, layout: "grid", size: "medium", filePath: "media", photoStyle: "cover" }, void 0, !1, {
      fileName: "app/routes/media.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/media.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/media.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/races.tsx
var races_exports = {};
__export(races_exports, {
  default: () => Races
});

// app/data/raceData.ts
var raceData = [
  {
    date: "16-18 Feb",
    raceName: "Valley of the Sun",
    location: "Phoenix, AZ",
    type: "Road"
  },
  {
    date: "17 Feb",
    raceName: "Trade Zone #1",
    location: "Upper Marlboro, MD",
    type: "Road"
  },
  {
    date: "23-25 Feb",
    raceName: "Tucson Bicycle Classic",
    location: "Tucson, AZ",
    type: "Road"
  },
  {
    date: "2 March",
    raceName: "Trade Zone #2",
    location: "Upper Marlboro, MD",
    type: "Road"
  },
  {
    date: "9 March",
    raceName: "Trade Zone #3",
    location: "Upper Marlboro, MD",
    type: "Road"
  },
  {
    date: "12-14 April",
    raceName: "Tour of Newport News",
    location: "Newport News, VA",
    type: "Road"
  },
  {
    date: "20 April",
    raceName: "Barry Roubaix",
    location: "Barry County, MI",
    type: "Gravel"
  },
  {
    date: "26 April",
    raceName: "Spartanburg Criterium",
    location: "Spartanburg, SC",
    type: "Road"
  },
  {
    date: "27 April",
    raceName: "Athens Twilight",
    location: "Athens, GA",
    type: "Road"
  },
  {
    date: "4 May",
    raceName: "Hagerstown Criterium",
    location: "Hagerstown, MD",
    type: "Road"
  },
  {
    date: "14-19 May",
    raceName: "Pro Road Nationals",
    location: "Charleston, WV",
    type: "Road"
  },
  {
    date: "18 May",
    raceName: "Wilmington Grand Prix",
    location: "Wilmington, DE",
    type: "Road"
  },
  {
    date: "19 May",
    raceName: "Rush to Crush",
    location: "PGH",
    type: "Road"
  },
  {
    date: "24-26 May",
    raceName: "Winston Salem Cycling Classic",
    location: "Winston Salem, NC",
    type: "Road"
  },
  {
    date: "25 May",
    raceName: "Easton Twilight",
    location: "Easton, PA",
    type: "Road"
  },
  {
    date: "26 May",
    raceName: "Tour of Plainfield",
    location: "Plainfield, NJ",
    type: "Road"
  },
  {
    date: "27 May",
    raceName: "Tour of Somerville",
    location: "Somerville, NJ",
    type: "Road"
  },
  {
    date: "15 June",
    raceName: "Giro Di Coppi",
    location: "Barnesville, MD",
    type: "Road"
  },
  {
    date: "16 June",
    raceName: "Race Avenue",
    location: "Lancaster, PA",
    type: "Road"
  },
  {
    date: "22 June",
    raceName: "BWR Asheville",
    location: "Asheville, NC",
    type: "Gravel"
  },
  {
    date: "13 July",
    raceName: "Hummelstown Criterium",
    location: "Hummelstown, PA",
    type: "Road"
  },
  {
    date: "18-28 July",
    raceName: "Intelligentsia Cup",
    location: "Chicago, IL",
    type: "Road"
  },
  {
    date: "3-4 August",
    raceName: "Buffalo Stage Race",
    location: "Buffalo, NY",
    type: "Road"
  },
  {
    date: "8 September",
    raceName: "Bucks County Classic",
    location: "Doylestown, PA",
    type: "Road"
  }
];

// app/components/RaceCard.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function RaceCard({ race, isFuture }) {
  let today = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: `bg-gray-100 p-4 rounded-md mb-4 w-[70%] ${isFuture ? "bg-white" : "bg-gray-400"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("strong", { className: "", children: race.raceName }, void 0, !1, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 8,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: `${isFuture ? "" : "line-through"}`, children: race.date }, void 0, !1, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: race.location }, void 0, !1, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      "Type: ",
      race.type
    ] }, void 0, !0, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RaceCard.tsx",
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

// app/routes/races.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Races() {
  let today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  let races = raceData.map((race) => {
    let parts = race.date.split(" "), days = parts[0].split("-"), month = parts[1], formattedDate = days.length > 1 ? `${month} ${days[0]}-${days[1]}` : `${month} ${days[0]}`, raceDate = new Date(Date.parse(`${month} ${days[0]}, ${(/* @__PURE__ */ new Date()).getFullYear()}`)), isFuture = raceDate > today;
    return { ...race, date: formattedDate, isFuture, raceDate };
  }).sort((a, b) => a.raceDate.getTime() - b.raceDate.getTime());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "px-4 gradient-bg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "text-2xl font-bold mb-4 sm:pt-16 md:pt-16 flex justify-center items-center", children: "Upcoming Races" }, void 0, !1, {
      fileName: "app/routes/races.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    races.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: "More race events coming soon!" }, void 0, !1, {
      fileName: "app/routes/races.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-wrap justify-center items-center", children: races.map((race) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-center items-center m-2 w-full md:w-[40%] lg:w-[40%] xl:w-[30%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(RaceCard, { race, isFuture: race.isFuture }, void 0, !1, {
      fileName: "app/routes/races.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, race.raceName, !1, {
      fileName: "app/routes/races.tsx",
      lineNumber: 30,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/races.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/races.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/races.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AVE5YZJC.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-F6I3JBLQ.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-OTHDCHFR.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SDNDFORW.js", imports: ["/build/_shared/chunk-NEZPRVU6.js", "/build/_shared/chunk-UT5AQGXZ.js", "/build/_shared/chunk-5FHAFLDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-C7TXS7QG.js", imports: ["/build/_shared/chunk-CGM7SS4R.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/coming-soon": { id: "routes/coming-soon", parentId: "root", path: "coming-soon", index: void 0, caseSensitive: void 0, module: "/build/routes/coming-soon-KZYG7CKL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/media": { id: "routes/media", parentId: "root", path: "media", index: void 0, caseSensitive: void 0, module: "/build/routes/media-7SWY4RWH.js", imports: ["/build/_shared/chunk-CGM7SS4R.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/races": { id: "routes/races", parentId: "root", path: "races", index: void 0, caseSensitive: void 0, module: "/build/routes/races-GSEJ4UAT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/roster": { id: "routes/roster", parentId: "root", path: "roster", index: void 0, caseSensitive: void 0, module: "/build/routes/roster-MIFJDU7I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sponsors": { id: "routes/sponsors", parentId: "root", path: "sponsors", index: void 0, caseSensitive: void 0, module: "/build/routes/sponsors-3NI7PNIL.js", imports: ["/build/_shared/chunk-2QJY4JOV.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5f2b08f3", hmr: { runtime: "/build/_shared/chunk-OTHDCHFR.js", timestamp: 1736459321104 }, url: "/build/manifest-5F2B08F3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/coming-soon": {
    id: "routes/coming-soon",
    parentId: "root",
    path: "coming-soon",
    index: void 0,
    caseSensitive: void 0,
    module: coming_soon_exports
  },
  "routes/sponsors": {
    id: "routes/sponsors",
    parentId: "root",
    path: "sponsors",
    index: void 0,
    caseSensitive: void 0,
    module: sponsors_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/roster": {
    id: "routes/roster",
    parentId: "root",
    path: "roster",
    index: void 0,
    caseSensitive: void 0,
    module: roster_exports
  },
  "routes/media": {
    id: "routes/media",
    parentId: "root",
    path: "media",
    index: void 0,
    caseSensitive: void 0,
    module: media_exports
  },
  "routes/races": {
    id: "routes/races",
    parentId: "root",
    path: "races",
    index: void 0,
    caseSensitive: void 0,
    module: races_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
