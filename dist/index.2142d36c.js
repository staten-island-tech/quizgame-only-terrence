// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"21c8X":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _Dom = require("./Dom");
var _Functions = require("./Functions");
// IIFE that runs game
(() => {
  _Dom.DOMSelectors.startButton.addEventListener("click", () => {
    _Functions.start();
    _Functions.load();
  });
  _Dom.DOMSelectors.nextButton.addEventListener("click", () => {
    // First increments currentIndex
    _Functions.nextPage();
    // Stores user answer based on element w/ active class
    _Functions.budgetLocalStorageNext();
    // As long as it isn't at final page, removes any element w/ active class to unselect
    _Functions.unselect();
    // Changes nextbtn to Submit if at final index value
    _Functions.submitBtn();
    // If user wants to go back or forward, search from answers array to reselect btns
    _Functions.recall();
  });
  _Dom.DOMSelectors.previousButton.addEventListener("click", () => {
    // First decrements currentIndex
    _Functions.goBack();
    // Stores user answer based on element w/ active class (Difference is currentIndex + 1 instead of - 1])
    _Functions.budgetLocalStorageBack();
    // Removes any element w/ active class to unselect
    _Functions.unselect();
    // If user wants to go back or forward, search from answers array to reselect btns
    _Functions.recall();
    // Visual change to make unnecessary prevbtn invisible on first page
    _Functions.goodLooks();
  });
  _Dom.DOMSelectors.submitButton.addEventListener("click", () => {
    // Just to log selected answers on final index
    _Functions.budgetLocalStorageFinal();
    // Uses missed answers to see if there is need to show confirmation page
    _Functions.doubleCheck();
  });
  // Restarts page
  _Dom.DOMSelectors.restartButton.addEventListener("click", function reset() {
    location.reload();
  });
})();

},{"./Dom":"5Nh5r","./Functions":"4Blfm"}],"5Nh5r":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "DOMSelectors", function () {
  return DOMSelectors;
});
const DOMSelectors = {
  startButton: document.getElementById("startbtn"),
  nextButton: document.getElementById("nextbtn"),
  previousButton: document.getElementById("prevbtn"),
  submitButton: document.getElementById("submitbtn"),
  restartButton: document.getElementById("restart")
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"4Blfm":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "unselect", function () {
  return unselect;
});
_parcelHelpers.export(exports, "recall", function () {
  return recall;
});
_parcelHelpers.export(exports, "start", function () {
  return start;
});
_parcelHelpers.export(exports, "load", function () {
  return load;
});
_parcelHelpers.export(exports, "nextPage", function () {
  return nextPage;
});
_parcelHelpers.export(exports, "submitBtn", function () {
  return submitBtn;
});
_parcelHelpers.export(exports, "budgetLocalStorageBack", function () {
  return budgetLocalStorageBack;
});
_parcelHelpers.export(exports, "budgetLocalStorageNext", function () {
  return budgetLocalStorageNext;
});
_parcelHelpers.export(exports, "budgetLocalStorageFinal", function () {
  return budgetLocalStorageFinal;
});
_parcelHelpers.export(exports, "goBack", function () {
  return goBack;
});
_parcelHelpers.export(exports, "goodLooks", function () {
  return goodLooks;
});
_parcelHelpers.export(exports, "doubleCheck", function () {
  return doubleCheck;
});
var _questions = require("./questions");
// Creates changeable array to store user answers
let userAnswers = [, , , , , , , , , , ];
// Sets variable for first set
let currentIndex = 0;
// Get all answer elements
const allAnswers = document.querySelectorAll("div.questionbox button");
// IIFE for select mechanism
const selectMechanism = () => {
  for (i = 0; i < allAnswers.length; i++) {
    let button = allAnswers[i];
    button.addEventListener("click", function selected() {
      // Loop through all answer elements
      for (i = 0; i < allAnswers.length; i++) {
        // Remove the class 'active' if it exists
        allAnswers[i].classList.remove("active");
      }
      // Add 'active' classs to the element that was clicked
      this.classList.add("active");
    });
  }
};
selectMechanism();
const goodLooks = () => {
  // If index = 0, don't display previous button
  if (currentIndex === 0) {
    prevbtn.style.display = "none";
  }
  // If it isn't final page, going back will change submitbtn back to nextbtn
  if (currentIndex < 9) {
    nextbtn.style.display = "inline-block";
    document.getElementById("submitbtn").style.display = "none";
  }
};
goodLooks();
const unselect = () => {
  // Loop through all answer elements
  for (i = 0; i < allAnswers.length; i++) {
    // Remove the class 'active' if it exists
    allAnswers[i].classList.remove("active");
  }
};
const recall = () => {
  // Takes the current index to find corresponding user answer from answers array (current since increment already happened)
  const nextAnswer = userAnswers[currentIndex];
  // Grabs the element that has that same ID (reason why it is stored in ID form)
  const recallSelected = document.getElementById(nextAnswer);
  // As long as the nextAnswer is not null, run this function
  if (nextAnswer != null) {
    // Reselects answer
    recallSelected.classList.add("active");
  }
};
const start = () => {
  // Changes screens by changing display
  document.getElementById("intropage").style.display = "none";
  document.getElementById("template").style.display = "flex";
  for (i = 0; i < userAnswers.length; i++) {
    userAnswers[i] = null;
  }
};
const load = () => {
  // Starts replacing templates for when index is less than 9
  if (currentIndex <= 9) {
    document.getElementById("question-temp").innerHTML = _questions.questions[currentIndex]["question"];
    document.getElementById("ans1").innerHTML = _questions.questions[currentIndex]["answer"][0]["text"];
    document.getElementById("ans2").innerHTML = _questions.questions[currentIndex]["answer"][1]["text"];
    document.getElementById("ans3").innerHTML = _questions.questions[currentIndex]["answer"][2]["text"];
    document.getElementById("ans4").innerHTML = _questions.questions[currentIndex]["answer"][3]["text"];
  }
};
// Since it's not a final page yet, pressing next button will keep increasing index until it gets to max allowed index, which is 9
const nextPage = () => {
  if (currentIndex < 9) {
    currentIndex++;
    load();
    prevbtn.style.display = "inline-block";
  }
};
// If it is at final page, represented by index of 9 change HTML of next button to Submit
const submitBtn = () => {
  if (currentIndex === 9) {
    nextbtn.style.display = "none";
    document.getElementById("submitbtn").style.display = "inline-block";
  }
};
const goBack = () => {
  // If index is not equal to 0:
  if (currentIndex != 0) {
    // Minus 1 from index
    --currentIndex;
    load();
    // Change next button back to next if it turned to submit
    nextbtn.innerHTML = "Next";
  }
};
const budgetLocalStorageNext = () => {
  // Searches for all DOM elements with class of active
  const selectedAnswer = document.querySelector(".active");
  // As long as the selectedAnswer is not null, run this function
  if (selectedAnswer != null) {
    // Replace the corresponding slot based on index of answers array with the id of element
    // Since this activates AFTER increment, -1 from index to find previous
    userAnswers[currentIndex - 1] = selectedAnswer.id;
  } else {
    // If there is no answer, replace instead with null
    userAnswers[currentIndex - 1] = null;
  }
};
const budgetLocalStorageBack = () => {
  // Searches for all DOM elements with class of active
  const selectedAnswer = document.querySelector(".active");
  // As long as the selectedAnswer is not null, run this function
  if (selectedAnswer != null) {
    // Replace the corresponding slot based on index of answers array with the id of element
    // Since this activates AFTER decrement, +1 from index to find next
    userAnswers[currentIndex + 1] = selectedAnswer.id;
  } else {
    // If there is no answer, replace instead with null
    userAnswers[currentIndex + 1] = null;
  }
};
const budgetLocalStorageFinal = () => {
  // Searches for all DOM elements with class of active
  const selectedAnswer = document.querySelector(".active");
  // As long as the selectedAnswer is not null, run this function
  if (selectedAnswer != null) {
    // Replace the corresponding slot based on index of answers array with the id of element
    // Since this activates at final page, only need to select currentIndex
    userAnswers[currentIndex] = selectedAnswer.id;
  } else {
    // If there is no answer, replace instead with null
    userAnswers[currentIndex] = null;
  }
};
const doubleCheck = () => {
  // Sets initial score
  let initialScore = 0;
  // First grades
  const grader = () => {
    // loops through everything in answers array
    for (i = 0; i < userAnswers.length; i++) {
      // If answers is not null, which means if user put in an answer
      if (userAnswers[i] != null) {
        // First sets the number from the answerElement ids, ex "3" from ans3
        let substitute = userAnswers[i].charAt(3);
        // Correlates it with the question of the same index, then the subtracts 1 from the substitute since indexes start from 0, and then checks correct value
        let choice = _questions.questions[i].answer[substitute - 1].correct;
        // If it is true add 1 to score
        if (choice === true) {
          initialScore++;
                  // If it is false add nothing
} else // If it is false add nothing
        if (choice === false) {
          initialScore;
        }
              // If there is no user answer, add nothing
} else // If there is no user answer, add nothing
      if (userAnswers[i] === null) {
        initialScore;
      }
    }
  };
  // Then goes to results page
  const resultsPage = () => {
    // Switches to results page by swapping displays
    document.getElementById("template").style.display = "none";
    document.getElementById("results").style.display = "flex";
    document.getElementById("name").innerText = `You got ${initialScore}/10 correct!`;
    // Different responses based on score
    if (initialScore < 5) {
      document.getElementById("text").innerHTML = "You don't know much about video games.";
    }
    if (initialScore > 5 && initialScore < 10) {
      document.getElementById("text").innerHTML = "You know some things about video games.";
    }
    if (initialScore === 10) {
      document.getElementById("text").innerHTML = "You know a lot about video games.";
    }
  };
  // Set variable for missed answers
  let missedAnswers = 0;
  // Loops through all indexes of answers array and check for nulls
  for (i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === null) {
      // Adds 1 to missedAnswers if found
      missedAnswers++;
    }
  }
  // If there are missed answers, display confirmation page
  if (missedAnswers > 0) {
    document.getElementById("confirmation").style.display = "flex";
    document.getElementById("prompt").innerHTML = `You are missing ${missedAnswers} answers. Do you still want to submit?`;
    // Creates transparent overlay that prevents interaction with background
    document.getElementById("overlay").style.zIndex = "1";
    document.getElementById("confirmation").style.zIndex = "2";
    // If yes button is clicked, go to results page
    document.getElementById("yes").addEventListener("click", () => {
      grader();
      resultsPage();
    });
    // If no if clicked, revert previous actions and missed answers since it will be recalculated
    document.getElementById("no").addEventListener("click", () => {
      document.getElementById("confirmation").style.display = "none ";
      document.getElementById("prompt").innerHTML = "";
      document.getElementById("overlay").style.zIndex = "-1";
      document.getElementById("confirmation").style.zIndex = "0";
      missedAnswers = 0;
    });
      // Otherwise go to results page
} else // Otherwise go to results page
  if (missedAnswers === 0) {
    grader();
    resultsPage();
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./questions":"46Zod"}],"46Zod":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "questions", function () {
  return questions;
});
// Array for questions and answers
const questions = [{
  question: "1. Which of these games was released the earliest?",
  answer: [{
    text: "A. Final Fantasy VII",
    correct: false
  }, {
    text: "B. Pokemon Red and Blue",
    correct: false
  }, {
    text: "C. Super Mario Bros",
    correct: true
  }, {
    text: "D. The Legend of Zelda: Ocarina of Time",
    correct: false
  }]
}, {
  question: "2. What is the best-selling video of all time?",
  answer: [{
    text: "A. GTA V",
    correct: false
  }, {
    text: "B. Minecraft",
    correct: true
  }, {
    text: "C. Tetris",
    correct: false
  }, {
    text: "D. Terraria",
    correct: false
  }]
}, {
  question: "3. What game is the company Epic Games most well known for?",
  answer: [{
    text: "A. Fortnite",
    correct: true
  }, {
    text: "B. Call of Duty: Warzone",
    correct: false
  }, {
    text: "C. PlayerUnkown's Battlegrounds ",
    correct: false
  }, {
    text: "D. Apex Legends",
    correct: false
  }]
}, {
  question: "4. Which of these games is from the MOBA genre?",
  answer: [{
    text: "A. Minecraft",
    correct: false
  }, {
    text: "B. GTA V",
    correct: false
  }, {
    text: "C. League of Legends",
    correct: true
  }, {
    text: "D. World of Warcraft",
    correct: false
  }]
}, {
  question: "5. Which of these games was released in 2020?",
  answer: [{
    text: "A. Stardew Valley",
    correct: false
  }, {
    text: "B. The Legend of Zelda: Breath of the Wild",
    correct: false
  }, {
    text: "C. Overwatch",
    correct: false
  }, {
    text: "D. Cyberpunk 2077",
    correct: true
  }]
}, {
  question: "6. Which of these is NOT a genre of video games?",
  answer: [{
    text: "A. Eating",
    correct: true
  }, {
    text: "B. Shooter",
    correct: false
  }, {
    text: "C. Sandbox",
    correct: false
  }, {
    text: "D. Strategy",
    correct: false
  }]
}, {
  question: "7. Which of these is a platform where you can download video games?",
  answer: [{
    text: "A. Steam",
    correct: true
  }, {
    text: "B. ITunes",
    correct: false
  }, {
    text: "C. Hulu",
    correct: false
  }, {
    text: "D. Soundcloud",
    correct: false
  }]
}, {
  question: "8. Which of these games was released before the 1990s?",
  answer: [{
    text: "A. Street Fighter II",
    correct: false
  }, {
    text: "B. Super Mario World",
    correct: false
  }, {
    text: "C. GTA",
    correct: false
  }, {
    text: "D. Tetris",
    correct: true
  }]
}, {
  question: "9. Which of these was NOT an arcade game?",
  answer: [{
    text: "A. Pac-Man",
    correct: false
  }, {
    text: "B. Halo: Combat Evolved",
    correct: true
  }, {
    text: "C. Donkey Kong",
    correct: false
  }, {
    text: "D. Space Invaders",
    correct: false
  }]
}, {
  question: "10. Which is these is a singleplayer game only?",
  answer: [{
    text: "A. Minecraft",
    correct: false
  }, {
    text: "B. The Legend of Zelda: Breath of the Wild",
    correct: true
  }, {
    text: "C. The Escapists 2",
    correct: false
  }, {
    text: "D. Starcraft 2",
    correct: false
  }]
}];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["21c8X","3L8AI"], "3L8AI", "parcelRequire5a55")

//# sourceMappingURL=index.2142d36c.js.map
