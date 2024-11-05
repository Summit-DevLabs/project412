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

// app/data/raceData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/raceData.ts"
  );
  import.meta.hot.lastModified = "1707076008193.368";
}
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/RaceCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/RaceCard.tsx"
  );
  import.meta.hot.lastModified = "1707089255196.8538";
}
function RaceCard({
  race,
  isFuture
}) {
  const today = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-gray-100 p-4 rounded-md mb-4 w-[70%] ${isFuture ? "bg-white" : "bg-gray-400"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "", children: race.raceName }, void 0, false, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `${!isFuture ? "line-through" : ""}`, children: race.date }, void 0, false, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: race.location }, void 0, false, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Type: ",
      race.type
    ] }, void 0, true, {
      fileName: "app/components/RaceCard.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RaceCard.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = RaceCard;
var _c;
$RefreshReg$(_c, "RaceCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/races.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/races.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/races.tsx"
  );
  import.meta.hot.lastModified = "1708267522559.699";
}
function Races() {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const formattedRaces = raceData.map((race) => {
    const parts = race.date.split(" ");
    const days = parts[0].split("-");
    const month = parts[1];
    const formattedDate = days.length > 1 ? `${month} ${days[0]}-${days[1]}` : `${month} ${days[0]}`;
    const raceDate = new Date(Date.parse(`${month} ${days[0]}, ${(/* @__PURE__ */ new Date()).getFullYear()}`));
    const isFuture = raceDate > today;
    return {
      ...race,
      date: formattedDate,
      isFuture,
      raceDate
    };
  }).sort((a, b) => a.raceDate.getTime() - b.raceDate.getTime());
  const races = formattedRaces;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 gradient-bg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold mb-4 sm:pt-16 md:pt-16 flex justify-center items-center", children: "Upcoming Races" }, void 0, false, {
      fileName: "app/routes/races.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    races.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "More race events coming soon!" }, void 0, false, {
      fileName: "app/routes/races.tsx",
      lineNumber: 45,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap justify-center items-center", children: races.map((race) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center items-center m-2 w-full md:w-[40%] lg:w-[40%] xl:w-[30%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RaceCard, { race, isFuture: race.isFuture }, void 0, false, {
      fileName: "app/routes/races.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, race.raceName, false, {
      fileName: "app/routes/races.tsx",
      lineNumber: 46,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/races.tsx",
      lineNumber: 45,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/races.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/races.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c2 = Races;
var _c2;
$RefreshReg$(_c2, "Races");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Races as default
};
//# sourceMappingURL=/build/routes/races-LEPJ6Q4P.js.map
