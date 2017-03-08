/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _SearchLight$prototyp;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @name SearchLight
 * @version 0.1.4
 * @author Nolan Neustaeter <nolan@neustaeter.ca>
 * @class
 */
function SearchLight() {};
SearchLight.prototype = (_SearchLight$prototyp = {

  /** @typedef {Array|Object} Collection */

  /**
   * @typedef {Array} Match
   * @property {*} 0 - key
   * @property {number} 1 - relevance
   * @property {string} 2 - missing terms
   */

  /** @typedef {Match[]} Matches */

  /**
   * @typedef FilterObject
   * @type {Object}
   * @property {*} key - the property the filter applies to
   * @property {string} [operator='=='] - the comparison operator to use
   * @property {*} value - the value to check the items against
   */

  /**
   * @typedef {Array} FilterArray
   * @property {*} 0 - the property the filter applies to
   * @property {*} 1 - the comparison operator to use
   * @property {*} [2] - the value to check the items against
   * if only two elements, the second one is assumed to be the value and the operator is set to '=='
   */

  /** @typedef {(string|FilterArray|FilterObject)} Constraint */

  /**
   * @typedef {Object} NextIterator
   * @property {function} next - iterator function to use
   */

  /**
   * @callback SuccessCallback
   * @param {Object} results
   */

  /**
   * @callback FailureCallback
   * @param {Error} error
   */

  /**
   * Creates a new SearchLight instance and sets the collection
   * @param {Collection} collection - Array or object of items or properties to search
   * @returns {SearchLight} instance - new SearchLight instance
   * @example
   * search( ['one', 'two', 'three'] );
   */
  search: function search(items) {
    var sl = Object.create(SearchLight.prototype, {
      /**
       * State
       * @private
       */
      state_: {
        value: {
          matches: [],
          partial: [],
          allItems: [],
          searchText: '',
          searchTerms: [],
          keys: [],
          filters: [],
          error: false,
          errorMessage: '',
          index: 0,
          lastIndex: 0,
          totalMatches: 0,
          ready: false,
          complete: false,
          searched: false
        }
      },

      /**
       * Settings
       * @private
       */
      settings_: {
        value: {
          collectionType: 'array',
          case: false,
          threshold: 1,
          sort: false,
          inject: {
            property: 'searchResults',
            enabled: false
          }
        }
      }
    });

    return sl.functions_.collection_.call(sl, items);
  },


  /**
   * Set search terms or filters
   * @method
   * @param {Constraint} constraint - Search text or filter to replace current constraints with
   * @returns {SearchLight}
   * @example
   * // sets the search text to be 'something'
   * search(collection).for('something');
   */
  for: function _for(constraint) {
    this.state_.searchText = '';
    this.state_.filters = [];

    return this.and.call(this, constraint);
  },

  /**
   * Add additional search terms or filters
   * @param {Constraint} constraint - Search text or filter to replace current constraints with
   * @returns {SearchLight}
   * @example
   * // adds 'nothing' to the existing search text of 'something'
   * search(items).for('something').and('nothing');
   */
  and: function and(constraint) {

    this.state_.ready = false;
    this.state_.complete = false;
    this.state_.searched = false;

    if (typeof constraint === 'string') {
      this.state_.searchText = (this.state_.searchText + ' ' + constraint).trim();
    } else if ((typeof constraint === 'undefined' ? 'undefined' : _typeof(constraint)) === 'object') {
      var key, operator, value;

      if (Array.isArray(constraint)) {
        var _constraint = _slicedToArray(constraint, 3);

        key = _constraint[0];
        operator = _constraint[1];
        value = _constraint[2];
      } else {
        key = constraint.key;
        operator = constraint.operator;
        value = constraint.value;
      }

      if (typeof value === 'undefined') {
        value = operator;
        operator = '==';
      }

      this.state_.filters.push([key, operator, value]);
    } else {
      console.warn('Invalid constraint type: ', typeof constraint === 'undefined' ? 'undefined' : _typeof(constraint));
    }

    return this;
  },

  /**
   * Set keys to search by
   *
   * @param {(string|Array)} keys - key or array of keys
   * @returns {SearchLight}
   *
   * @example
   * // sets keys to be ['an_object_property']
   * search(items).for('something').in('an_object_property');
   */
  in: function _in(keys) {
    this.state_.keys = [];
    return this.or.call(this, keys);
  },

  /**
   * Add additional keys to search by
   *
   * @param {(string|Array)} keys - key or array of keys
   * @returns {SearchLight}
   *
   * @example
   * // adds 3 to existing array of keys ([1, 3])
   * search(items).for('something').in(1).or(3);
   */
  or: function or(keys) {
    this.state_.ready = false;
    this.state_.complete = false;
    this.state_.searched = false;

    if (typeof keys === 'string') {
      this.state_.keys.push(keys);
    } else {
      var _state_$keys;

      (_state_$keys = this.state_.keys).push.apply(_state_$keys, _toConsumableArray(keys));
    }

    return this;
  },


  /**
   * Sets the sort setting to true
   * @returns {SearchLight}
   */
  sorted: function sorted() {
    if (!this.settings_.sort) {
      this.settings_.sort = true;
      this.state_.complete = false;
    }

    return this;
  },


  /**
   * Sets the sort setting to false
   * @returns {SearchLight}
   */
  unsorted: function unsorted() {
    if (this.settings_.sort) {
      this.settings_.sort = false;
      this.state_.complete = false;
    }

    return this;
  },


  /**
   * Sets the case-sensitive setting to true
   * @returns {SearchLight}
   */
  compareCase: function compareCase() {
    if (!this.settings_.case) {
      this.settings_.case = true;
      this.state_.complete = false;
      this.state_.searched = false;
    }

    return this;
  },


  /**
   * Sets the case-sensitive setting to false
   * @returns {SearchLight}
   */
  ignoreCase: function ignoreCase() {
    if (this.settings_.case) {
      this.settings_.case = false;
      this.state_.complete = false;
      this.state_.searched = false;
    }

    return this;
  },


  /**
   * Sets the inject.enabled setting to true and optionally sets the inject.property setting too
   * @param {*} [property] - the property stats are injected as
   * @returns {SearchLight}
   */
  withStats: function withStats(property) {
    this.settings_.inject.enabled = true;

    if (typeof property !== 'undefined') {
      this.settings_.inject.property = property;
    }

    return this;
  },


  /**
   * Sets the inject.enabled setting to false
   * @returns {SearchLight}
   */
  withoutStats: function withoutStats() {
    this.settings_.inject.enabled = false;
    return this;
  },


  /**
   * Promise support
   * Allows for asynchronous processing of large collections
   *
   * @param {SuccessCallback} [success] - callback to run when/if promise completes successfully
   * @param {FailureCallback} [failure] - callback to run when/if promise completes unsuccessfully
   * @return {SearchLight}
   *
   * @example
   * search(items).for('something')
   *              .then(
   *                  function(results) { console.log(results.matches); },
   *                  function(error) { console.log(error); }
   *              );
   */
  then: function then(success, failure) {
    var promise = new Promise(function (resolve, reject) {
      this.functions_.updateMatches_.call(this);

      if (this.state_.error) {
        reject(Error(this.state_.errorMessage));
      } else {
        var sl = this;
        resolve({
          get matches() {
            return sl.matches;
          },
          get partialMatchess() {
            return sl.partialMatches;
          },
          get allMatchess() {
            return sl.allMatches;
          }
        });
      }
    }.bind(this));

    promise.then(success, failure);
    return this;
  },


  /**
   * Allows promises to be written in a more readable format
   *
   * @param {FailureCallback} failure - callback to run when/if promise completes unsuccessfully
   * @returns {SearchLight}
   *
   * @example
   * search(items).for('something')
   *              .then((results) => do_something(results.matches))
   *              .catch((error) => { console.log(error); });
   */
  catch: function _catch(failure) {
    return this.then(undefined, failure);
  },


  /**
   * Length of matches
   * @returns {Number} count - total number of matches
   */
  get length() {
    this.functions_.updateMatches_.call(this);
    return this.state_.totalMatches;
  },

  /**
   * Gets all items that match all the constraints
   * @returns {Collection} items
   */
  get matches() {
    this.functions_.updateMatches_.call(this);
    var output = this.functions_.toOriginalFormat_.call(this, this.state_.matches);
    return output;
  },

  /**
   * Gets all items that only match some of the constraints
   * @returns {Collection} items
   */
  get partialMatches() {

    this.functions_.updateMatches_.call(this);
    this.functions_.performSort_.call(this, this.state_.partial);

    return this.functions_.toOriginalFormat_.call(this, this.state_.partial);
  },

  /**
   * Gets all items that match any of the constraints
   * @returns {Collection} items
   */
  get allMatches() {
    this.functions_.updateMatches_.call(this);
    var allMatches = this.state_.matches.concat(this.state_.partial);
    this.functions_.performSort_.call(this, allMatches);

    return this.functions_.toOriginalFormat_.call(this, allMatches);
  },

  /**
   * Gets all items in the collection
   * @returns {Collection} matches
   */
  get allItems() {
    this.functions_.updateMatches_.call(this);
    this.functions_.performSort_.call(this, this.state_.allItems);

    return this.functions_.toOriginalFormat_.call(this, this.state_.allItems);
  }

}, _defineProperty(_SearchLight$prototyp, Symbol.iterator, function () {
  this.updateMatches_();

  if (this.settings_.inject.enabled) {
    return { next: this.iterators_.nextInject_.bind(this) };
  } else {
    return { next: this.iterators_.next_.bind(this) };
  }
}), _defineProperty(_SearchLight$prototyp, 'functions_', {

  /**
   * Set the collection to be searched
   * @param {Collection} collection - Array or object of items or properties to search
   * @returns {SearchLight}
   * @example
   * search( ['one', 'two', 'three'] );
   */
  collection_: function collection_(collection) {
    var keys = [];

    if (Array.isArray(collection)) {
      keys = Array.from(collection.keys());
    } else if ((typeof collection === 'undefined' ? 'undefined' : _typeof(collection)) === 'object') {
      keys = Object.keys(collection).filter(function (key) {
        return collection.hasOwnProperty(key);
      });
      this.settings_.collectionType = 'object';
    } else {
      this.state_.error = true;
      this.state_.errorMessage = 'Invalid collection type: ', typeof collection === 'undefined' ? 'undefined' : _typeof(collection);
      console.warn(this.state_.errorMessage);
    }

    this.state_.collection = new Map(keys.map(this.iterators_.collection_.bind(this, collection)));

    this.state_.complete = false;
    this.state_.searched = false;

    return this;
  },

  /**
   * Sets up the search terms and calculates
   * the relevance of each item in the collection
   */
  performSearch_: function performSearch_() {
    // check if there are any constraints
    if (this.functions_.isConstrained.call(this)) {
      this.state_.allItems = [];
      this.state_.matches = [];
      this.state_.partial = [];

      this.state_.collection.forEach(this.iterators_.calculateRelevance_.bind(this));
    } else {
      // no constraints so the entire collection matches
      this.state_.allItems = Array.from(this.state_.collection.keys()).map(this.iterators_.emptyMatch_);

      this.state_.matches = this.state_.allItems;
      this.state_.partial = [];
    }

    this.state_.searched = true;
  },


  /**
   * Searches and sorts items only if needed
   */
  updateMatches_: function updateMatches_() {
    // do nothing if no changes to items or constraints
    if (!this.state_.complete) {

      if (!this.state_.searched) {
        this.functions_.performSearch_.call(this);
      }

      this.functions_.performSort_.call(this, this.state_.matches);

      this.state_.totalMatches = this.state_.matches.length;
      this.state_.index = 0;
      this.state_.lastIndex = this.state_.totalMatches - 1;
      this.state_.complete = true;
    }
  },


  /**
   * Sorts items if needed
   * @param {Matches} matches
   */
  performSort_: function performSort_(matches) {
    if (this.settings_.sort && this.functions_.isConstrained.call(this) && matches.length) {
      matches.sort(this.iterators_.sortComparator_);
    }
  },


  /**
   * Gets an item from the collection
   * @param {Match} match
   * @returns {*} item
   */
  getItem_: function getItem_(match) {
    return this.state_.collection.get(match[0]);
  },


  /**
   * Gets an item with stats injected
   * @param {Match} match
   * @returns {*} item
   */
  getItemInject_: function getItemInject_(match) {
    var item = this.state_.collection.get(match[0]);

    if (Array.isArray(item)) {
      item.push({ relevance: match[1], missing: match[2] });
    } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
      item[this.settings_.inject.property] = {
        relevance: match[1],
        missing: match[2]
      };
    } else {
      return item;
    }
  },


  /**
   * Gets a subset of the collection and converts it to the same format it was added as
   * @param {Matches} matches
   * @returns {Collection} items
   */
  toOriginalFormat_: function toOriginalFormat_(matches) {
    if (this.settings_.collectionType === 'array') {
      if (this.settings_.inject.enabled) {
        return matches.map(this.functions_.getItemInject_, this);
      } else {
        return matches.map(this.functions_.getItem_, this);
      }
    } else {
      if (this.settings_.inject.enabled) {
        return matches.reduce(this.iterators_.reduceInject_.bind(this), {});
      } else {
        return matches.reduce(this.iterators_.reduce_.bind(this), {});
      }
    }
  },


  /**
   * Process and update search terms
   */
  updateConstraints_: function updateConstraints_() {
    if (!this.state_.ready) {
      if (this.state_.searchText === '') {
        this.state_.searchTerms = [];
      } else {
        this.state_.searchTerms = (this.settings_.case ? this.state_.searchText : this.state_.searchText.toLowerCase()).split(' ');
      }

      this.state_.ready = true;
    }
  },


  /**
   * Checks if there are any constraints
   * @returns {boolean} constrained
   */
  isConstrained: function isConstrained() {
    // update constraints if needed
    this.functions_.updateConstraints_.call(this);
    return this.state_.searchTerms.length || this.state_.filters.length;
  }
}), _defineProperty(_SearchLight$prototyp, 'iterators_', {

  /**
   * Used to make an item for the collection
   * @param {Collection} collection
   * @param {*} key
   * @returns {Array} item
   */
  collection_: function collection_(collection, key) {
    return [key, collection[key]];
  },


  /**
   * Used to iterate through the matches
   * @implements Iterator
   * @returns {Object} iterator
   * @property {boolean} done
   * @property {*} [value]
   */
  next_: function next_() {
    if (this.state_.index > this.state_.lastIndex) {
      return { done: true };
    } else {
      return {
        done: false,
        value: this.functions_.getItem_(this.state_.matches[this.state_.index++])
      };
    }
  },


  /**
   * Used to iterate through the matches and inject the stats into each match
   * @implements Iterator
   * @returns {Object} iterator
   * @property {boolean} done
   * @property {*} [value]
   */
  nextInject_: function nextInject_() {
    if (this.state_.index > this.state_.lastIndex) {
      return { done: true };
    } else {
      return {
        done: false,
        value: this.functions_.getItemInject_(this.state_.matches[this.state_.index++])
      };
    }
  },


  /**
   * Used to build the searched string for each item in the collection
   * @param {Array|Object} item
   * @param {*} property
   * @returns {*} [value]
   */
  property_: function property_(item, property) {
    return item[property] || null;
  },


  /**
   * Checks each item in the collection against each search term
   * @param {Match} match
   * @param {string} subject
   * @param {string} term
   */
  search_: function search_(match, subject, term) {
    var relevance = subject.split(term).length - 1;
    if (relevance) {
      match[1] += relevance;
    } else {
      match[2] += ' ' + term;
    }
  },


  /**
   * Checks the appropriate property of each item in the collection
   * against each filter
   * @param {Array|Object} item
   * @param {Match} match
   * @param {FilterArray} filter
   */
  filter_: function filter_(item, match, filter) {
    var key = filter[0],
        operator = filter[1],
        value = filter[2];

    if (typeof item !== 'string') {

      switch (operator) {
        case '==':
          match[1] += item[key] == value;break;
        case '===':
          match[1] += item[key] === value;break;

        case '!=':
          match[1] += item[key] != value;break;
        case '!==':
          match[1] += item[key] !== value;break;

        case '>':
          match[1] += item[key] > value;break;
        case '>=':
          match[1] += item[key] >= value;break;

        case '<':
          match[1] += item[key] < value;break;
        case '<=':
          match[1] += item[key] <= value;break;

        default:
          console.warn('Invalid filter operator:', operator);
      }
    }
  },


  /**
   * Calculates the relevance of an item in the collection
   * against the filters and search terms
   * @param {*} item
   * @param {*} key
   */
  calculateRelevance_: function calculateRelevance_(item, key) {
    var match = [key, 0, ''],
        subject = '';

    this.state_.filters.forEach(this.iterators_.filter_.bind(this, item, match));

    if (typeof item === 'string') {
      // search entire string
      subject = item;
    } else if (this.state_.keys.length) {
      // only search in given keys
      subject = this.state_.keys.map(this.iterators_.property_.bind(this, item)).join('|');
    } else {
      // search in every enumerable property
      if (Array.isArray(item)) {
        subject = item.join('|');
      } else {
        subject = Object.keys(item).reduce(this.iterators_.reduceProperties_.bind(this, item), '');
      }
    }

    if (!this.settings_.case) {
      subject = subject.toLowerCase();
    }

    this.state_.searchTerms.forEach(this.iterators_.search_.bind(this, match, subject));

    // add matches to appropriate arrays
    this.state_.allItems.push(match);

    if (match[1] === 0) {
      // not a match
    } else if (match[1] < this.settings_.threshold) {
      this.state_.partial.push(match); // below threshold
    } else {
      this.state_.matches.push(match); // above threshold
    }
  },


  /**
   * Creates an empty match
   * @param {*} key
   * @returns {Match} match
   */
  emptyMatch_: function emptyMatch_(key) {
    return [key, 0, ''];
  },


  /**
   * Reduce iterator that converts the collection to an object
   * @param {Object} items - accumulator
   * @param {Match} match - currentValue
   * @returns {Object} items
   */
  reduce_: function reduce_(items, match) {
    items[match[0]] = this.functions_.getItem_.call(this, match);
    return items;
  },


  /**
   * Reduce iterator that converts the collection to an object with the
   * stats for each item injected
   * @param {Object} items - accumulator
   * @param {Match} match - currentValue
   * @returns {Object} items
   */
  reduceInject_: function reduceInject_(items, match) {
    items[match[0]] = this.functions_.getItemInject_.call(this, match);
    return items;
  },


  /**
   * Reduce iterator that creates a string of all enumerable properties of an object
   * @param {Object} item - item from the collection
   * @param {string} subject - accumulator
   * @param {*} key - currentValue
   * @returns {string} subject
   */
  reduceProperties_: function reduceProperties_(item, subject, key) {
    return subject += '|' + item[key];
  },


  /**
   * Used for sorting the matches by relevance (highest relevance first)
   * If two items have equal relevance, it checks the original
   * insertion order to keep the sort stable
   * @param {Match} matchA
   * @param {Match} matchB
   * @returns {number} comparison - can be -1, 0, or 1
   */
  sortComparator_: function sortComparator_(matchA, matchB) {
    if (matchB[1] > matchA[1]) {
      return 1;
    } else if (matchB[1] === matchA[1]) {
      return matchB[0] < matchA[0];
    } else {
      return -1;
    }
  }
}), _SearchLight$prototyp);

if (typeof window !== 'undefined') {
  window._search = SearchLight.prototype.search;
}

/* harmony default export */ __webpack_exports__["default"] = SearchLight.prototype.search;

/***/ })
/******/ ]);