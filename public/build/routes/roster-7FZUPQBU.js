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

// app/data/teamData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/teamData.ts"
  );
  import.meta.hot.lastModified = "1718284119635.935";
}
var teamData = [
  {
    id: 1,
    firstName: "Shawn",
    lastName: "Wilson",
    category: 4,
    isActive: true,
    img: "shawn-wilson.jpg "
  },
  {
    id: 2,
    firstName: "Dan",
    lastName: "Uhranowsky",
    category: 1,
    isActive: true,
    img: "dan.jpg"
  },
  {
    id: 3,
    firstName: "Jon",
    lastName: "Carroll",
    category: 2,
    isActive: true,
    img: "jon.jpg"
  },
  {
    id: 4,
    firstName: "Matthew",
    lastName: "Kitchen",
    category: 1,
    isActive: true,
    img: "matt.jpg"
  },
  {
    id: 6,
    firstName: "Luis",
    lastName: "Hermoso",
    category: 3,
    isActive: true,
    img: "luis.jpg"
  },
  {
    id: 7,
    firstName: "Jeff",
    lastName: "Koontz",
    category: 1,
    isActive: true,
    img: "jeff.jpg"
  },
  {
    id: 8,
    firstName: "Shawn",
    lastName: "Litster",
    category: 1,
    isActive: true,
    img: "shawn-litster.jpg"
  },
  {
    id: 9,
    firstName: "Steve",
    lastName: "Hunchuck",
    category: 2,
    isActive: true,
    img: "steve.jpg"
  },
  {
    id: 10,
    firstName: "Zack",
    lastName: "White",
    category: 3,
    isActive: true,
    img: "zack.jpg"
  },
  {
    id: 11,
    firstName: "Morgan",
    lastName: "Baker",
    category: 1,
    isActive: true,
    img: "morgan.jpg"
  },
  {
    id: 12,
    firstName: "Colin",
    lastName: "Mihalak",
    category: 3,
    isActive: true,
    img: "colin.jpeg"
  },
  {
    id: 13,
    firstName: "John",
    lastName: "Crawford",
    category: 3,
    isActive: true,
    img: "john.jpg"
  },
  {
    id: 14,
    firstName: "Jonah",
    lastName: "Lantzy",
    category: 3,
    isActive: false,
    img: ""
  },
  {
    id: 15,
    firstName: "Nathan",
    lastName: "Kerchensky",
    category: 3,
    isActive: true,
    img: "nate.jpg"
  },
  {
    id: 16,
    firstName: "Josh",
    lastName: "Freidman",
    category: 1,
    isActive: true,
    img: "josh.jpg"
  },
  {
    id: 17,
    firstName: "Curtis",
    lastName: "Smith",
    category: 3,
    isActive: true,
    img: "curtis.jpg"
  },
  {
    id: 18,
    firstName: "Andrew",
    lastName: "Hilling",
    category: 4,
    isActive: true,
    img: "andy.jpg"
  },
  {
    id: 19,
    firstName: "Noah",
    lastName: "Petersen",
    category: 3,
    isActive: true,
    img: "noah.jpeg"
  }
];

// app/components/Card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Card.tsx"
  );
  import.meta.hot.lastModified = "1710859011899.358";
}
function Card({
  member
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: member.img === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative block h-96 min-h-full w-72 rounded-lg bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-8 left-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-bold text-white sm:text-2xl", children: [
    member.firstName,
    " ",
    member.lastName
  ] }, void 0, true, {
    fileName: "app/components/Card.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Card.tsx",
    lineNumber: 26,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/components/Card.tsx",
    lineNumber: 25,
    columnNumber: 25
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative block h-96 w-72 rounded-lg bg-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "Headshot", src: `./assets/headshots/${member.img}`, className: "h-full w-full rounded-lg object-cover" }, void 0, false, {
      fileName: "app/components/Card.tsx",
      lineNumber: 33,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-8 rounded-br-lg rounded-tr-lg bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-bold text-white sm:text-2xl", children: [
      member.firstName,
      " ",
      member.lastName
    ] }, void 0, true, {
      fileName: "app/components/Card.tsx",
      lineNumber: 36,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/components/Card.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/Card.tsx",
      lineNumber: 34,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Card.tsx",
    lineNumber: 32,
    columnNumber: 14
  }, this) }, void 0, false, {
    fileName: "app/components/Card.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Card;
var _c;
$RefreshReg$(_c, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/roster.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/roster.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/roster.tsx"
  );
  import.meta.hot.lastModified = "1708610674554.392";
}
function Roster() {
  const team = teamData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:pt-12 md:pt-16 lg:pt-8 flex justify-center items-center flex-wrap", children: team.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((member) => member.isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { member }, void 0, false, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) }, member.id, false, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 27,
    columnNumber: 100
  }, this) : "") }, void 0, false, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/roster.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Roster;
var _c2;
$RefreshReg$(_c2, "Roster");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Roster as default
};
//# sourceMappingURL=/build/routes/roster-7FZUPQBU.js.map
