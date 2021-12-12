function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./dist/open-plant-ng/fesm2015/open-plant-ng.js":
  /*!******************************************************!*\
    !*** ./dist/open-plant-ng/fesm2015/open-plant-ng.js ***!
    \******************************************************/

  /*! exports provided: CentreMsgComponent, CentreMsgObject, MsgBoxComponent, MsgBoxObj, OpchartComponent, OpenPlantNgComponent, OpenPlantNgModule, OpenPlantNgService, Selected */

  /***/
  function distOpenPlantNgFesm2015OpenPlantNgJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentreMsgComponent", function () {
      return CentreMsgComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentreMsgObject", function () {
      return CentreMsgObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MsgBoxComponent", function () {
      return MsgBoxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MsgBoxObj", function () {
      return MsgBoxObj;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpchartComponent", function () {
      return OpchartComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpenPlantNgComponent", function () {
      return OpenPlantNgComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpenPlantNgModule", function () {
      return OpenPlantNgModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpenPlantNgService", function () {
      return OpenPlantNgService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Selected", function () {
      return Selected;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-color/sketch */
    "./node_modules/ngx-color/sketch/fesm2015/ngx-color-sketch.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/open-plant-ng.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var OpenPlantNgService = function OpenPlantNgService() {
      _classCallCheck(this, OpenPlantNgService);
    };

    OpenPlantNgService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OpenPlantNgService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    OpenPlantNgService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function OpenPlantNgService_Factory() {
        return new OpenPlantNgService();
      },
      token: OpenPlantNgService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/open-plant-ng.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var OpenPlantNgComponent =
    /*#__PURE__*/
    function () {
      function OpenPlantNgComponent() {
        _classCallCheck(this, OpenPlantNgComponent);
      }
      /**
       * @return {?}
       */


      _createClass(OpenPlantNgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OpenPlantNgComponent;
    }();

    OpenPlantNgComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'lib-open-plant-ng',
        template: "\n    <p>\n      open-plant-ng works!\n    </p>\n  "
      }]
    }];
    /** @nocollapse */

    OpenPlantNgComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/msg-box/msg-box.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MsgBoxComponent =
    /*#__PURE__*/
    function () {
      function MsgBoxComponent() {
        _classCallCheck(this, MsgBoxComponent);

        this.msgBoxObj = new MsgBoxObj();
        this.btnPassDisable = true;
        this.msgBoxReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(MsgBoxComponent, [{
        key: "inputFocus",
        value: function inputFocus() {
          if (this.inputTextEl != null) this.inputTextEl.nativeElement.focus();
          return true;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onInputKeyDown",
        value: function onInputKeyDown(event) {
          if (event.key == "Enter") this.onInputTextOKClick();
          if (event.key == "Escape") this.onInputTextCancelClick();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.msgBoxReady.emit(this.msgBoxObj);
        }
        /**
         * @return {?}
         */

      }, {
        key: "yesClick",
        value: function yesClick() {
          this.msgBoxObj.selectedDel(Selected.Yes);
          this.msgBoxObj.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "noClick",
        value: function noClick() {
          this.msgBoxObj.selectedDel(Selected.No);
          this.msgBoxObj.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "okPassClick",
        value: function okPassClick() {
          this.msgBoxObj.passChangeDel(Selected.Ok, this.tbPass2);
          this.msgBoxObj.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelPassClick",
        value: function cancelPassClick() {
          this.msgBoxObj.passChangeDel(Selected.Cancel, null);
          this.msgBoxObj.hide();
        }
        /**
         * @param {?} param
         * @return {?}
         */

      }, {
        key: "onTextChangeP1",
        value: function onTextChangeP1(param) {
          this.tbPass1 = param;
          if (this.tbPass1.length < 5) this.btnPassDisable = true;else {
            this.btnPassDisable = this.tbPass1 != this.tbPass2;
          }
        }
        /**
         * @param {?} param
         * @return {?}
         */

      }, {
        key: "onTextChangeP2",
        value: function onTextChangeP2(param) {
          this.tbPass2 = param;
          if (this.tbPass2.length < 5) this.btnPassDisable = true;else {
            this.btnPassDisable = this.tbPass1 != this.tbPass2;
          }
        }
        /**
         * @param {?} param
         * @return {?}
         */

      }, {
        key: "onInputTextChange",
        value: function onInputTextChange(param) {
          this.tbInput = param;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onInputTextOKClick",
        value: function onInputTextOKClick() {
          this.msgBoxObj.textInputDel(Selected.Ok, this.tbInput);
          this.msgBoxObj.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onInputTextCancelClick",
        value: function onInputTextCancelClick() {
          this.msgBoxObj.textInputDel(Selected.Cancel, this.tbInput);
          this.msgBoxObj.hide();
        }
      }]);

      return MsgBoxComponent;
    }();

    MsgBoxComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'op-msg-box',
        template: "<style>\n    .buttonYes {\n        height: 70px;\n        width: 130px;\n        margin: 5px;\n        border: #28be37 solid 3px;\n        background: #28be370f;\n        color: #28be37;\n        border-radius: .25rem;\n    }\n\n    .buttonNo {\n        height: 70px;\n        width: 130px;\n        margin: 5px;\n        border: #d42e2e solid 3px;\n        background: #d42e2e14;\n        color: #d42e2e;\n        border-radius: .25rem;\n    }\n\n    .buttonCancel {\n        height: 70px;\n        width: 130px;\n        margin: 5px;\n        border: orange solid 3px;\n        background: #d42e2e14;\n        color: orange;\n        border-radius: .25rem;\n    }\n\n    .divtitle {\n        color: white;\n        text-align: center;\n        margin-left: 5px;\n        margin-right: 5px;\n    }\n\n    .div1 {\n        display: flex;\n        position: fixed;\n        align-items: center;\n        justify-content: center;\n        background: #000;\n        opacity: 0.8;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n    }\n\n    .div2 {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .div3 {\n        display: flex;\n        flex-direction: row;\n        margin-top: 5px;\n    }\n\n    .div4 {\n        text-align: left;\n        color: white;\n        width: 130px;\n        margin-right: 10px;\n    }\n\n    .div4c {\n        color: white;\n    }\n\n    .divgrey {\n        border: grey solid 3px;\n        background: #28be370f;\n        color: grey;\n    }\n\n    .div4b {\n        width: 150px;\n    }\n</style>\n\n<div *ngIf=\"msgBoxObj.showMsgYesNo\" class=\"div1\">\n    <div class=\"div2\">\n        <h2 style=\"color: white\">{{msgBoxObj.text}}</h2>\n        <div class=\"div3\">\n            <button class=\"buttonYes\" (click)=\"yesClick()\">\n                <h2>Yes</h2>\n            </button>\n            <button class=\"buttonNo\" (click)=\"noClick()\">\n                <h2>No</h2>\n            </button>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"msgBoxObj.showMsgPassChange\" class=\"div1\">\n    <div class=\"div2\">\n        <h2 class=\"divtitle\">{{msgBoxObj.text}}</h2>\n\n        <div class=\"div3\">\n            <div class=\"div4\">New Pasword:</div>\n            <input class=\"div4b\" #newPass (input)=\"onTextChangeP1($event.target.value)\" type=\"password\">\n        </div>\n        <div class=\"div3\" style=\"margin-top: 1px\">\n            <div class=\"div4\">Password Retype:</div>\n            <input class=\"div4b\" (input)=\"onTextChangeP2($event.target.value)\" type=\"password\">\n        </div>\n\n\n        <div class=\"div3\">\n            <button class=\"buttonYes\" [class.divgrey]=\"btnPassDisable\" [disabled]=\"btnPassDisable\"\n                (click)=\"okPassClick()\">\n                <h2>OK</h2>\n            </button>\n            <button class=\"buttonCancel\" (click)=\"cancelPassClick()\">\n                <h2>Cancel</h2>\n            </button>\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf=\"msgBoxObj.showMsgTextInput?inputFocus():false\" class=\"div1\">\n    <div class=\"div2\">\n        <h2 class=\"divtitle\">{{msgBoxObj.text}}</h2>\n\n        <div class=\"div3\">\n            <div class=\"div4c\">{{msgBoxObj.textPrompt}}</div>\n            <input class=\"div4b ml-1 msgTextInputClass\" #inputTextEl (input)=\"onInputTextChange($event.target.value)\"\n                (keydown)=\"onInputKeyDown($event)\" type=\"text\">\n        </div>\n\n        <div class=\"div3\">\n            <button class=\"buttonYes\" (click)=\"onInputTextOKClick()\">\n                <h2>OK</h2>\n            </button>\n            <button class=\"buttonCancel\" (click)=\"onInputTextCancelClick()\">\n                <h2>Cancel</h2>\n            </button>\n        </div>\n    </div>\n</div>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    MsgBoxComponent.ctorParameters = function () {
      return [];
    };

    MsgBoxComponent.propDecorators = {
      msgBoxReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputTextEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['inputTextEl', {
          static: false
        }]
      }]
    };

    if (false) {} // subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;


    var MsgBoxObj =
    /*#__PURE__*/
    function () {
      function MsgBoxObj() {
        _classCallCheck(this, MsgBoxObj);

        this.text = "Ok to proceed?";
        this.textPrompt = "";
        this.showMsgYesNo = false;
        this.showMsgPassChange = false;
        this.showMsgTextInput = false;
      }
      /**
       * @param {?} textS
       * @param {?} selected
       * @return {?}
       */


      _createClass(MsgBoxObj, [{
        key: "showYesNo",
        value: function showYesNo(textS, selected) {
          this.showMsgYesNo = true;
          this.showMsgPassChange = false;
          this.showMsgTextInput = false;
          this.text = textS;
          this.selectedDel = selected;
        }
        /**
         * @param {?} textPC
         * @param {?} passChangeDel
         * @return {?}
         */

      }, {
        key: "showPassChange",
        value: function showPassChange(textPC, passChangeDel) {
          this.showMsgYesNo = false;
          this.showMsgPassChange = true;
          this.showMsgTextInput = false;
          this.text = textPC;
          this.passChangeDel = passChangeDel;
        }
        /**
         * @param {?} textQuestion
         * @param {?} textPrompt
         * @param {?} textInputDel
         * @return {?}
         */

      }, {
        key: "showTextInput",
        value: function showTextInput(textQuestion, textPrompt, textInputDel) {
          this.showMsgYesNo = false;
          this.showMsgPassChange = false;
          this.showMsgTextInput = true;
          this.text = textQuestion;
          this.textPrompt = textPrompt;
          this.textInputDel = textInputDel;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this.showMsgYesNo = false;
          this.showMsgPassChange = false;
          this.showMsgTextInput = false;
        }
      }]);

      return MsgBoxObj;
    }();

    if (false) {}
    /** @enum {number} */


    var Selected = {
      No: 0,
      Cancel: 1,
      Ok: 2,
      Yes: 3
    };
    Selected[Selected.No] = 'No';
    Selected[Selected.Cancel] = 'Cancel';
    Selected[Selected.Ok] = 'Ok';
    Selected[Selected.Yes] = 'Yes';
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/centre-msg/centre-msg.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CentreMsgComponent =
    /*#__PURE__*/
    function () {
      function CentreMsgComponent() {
        _classCallCheck(this, CentreMsgComponent);

        this.centreMsgReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CMObj = new CentreMsgObject();
      }
      /**
       * @return {?}
       */


      _createClass(CentreMsgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.centreMsgReady.emit(this.CMObj);
        }
      }]);

      return CentreMsgComponent;
    }();

    CentreMsgComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'op-centre-msg',
        template: "<style>\n    .div2 {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n    }\n\n    .divbg {\n        position: fixed;\n        background: #000;\n        opacity: 0.82;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n    }\n\n\n    @-webkit-keyframes flash {\n\n        from,\n        50%,\n        to {\n            opacity: 1;\n        }\n\n        25%,\n        75% {\n            opacity: 0;\n        }\n    }\n\n    @keyframes flash {\n\n        from,\n        50%,\n        to {\n            opacity: 1;\n        }\n\n        25%,\n        75% {\n            opacity: 0;\n        }\n    }\n\n\n    .opflash {\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        -webkit-animation-fill-mode: both;\n        animation-fill-mode: both;\n        -webkit-animation-name: flash;\n        animation-name: flash;\n        -webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n    }\n\n    .opflashFreeze {\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        -webkit-animation-fill-mode: both;\n        animation-fill-mode: both;\n        -webkit-animation-name: flash;\n        animation-name: flash;\n        -webkit-animation-iteration-count: 2;\n        animation-iteration-count: 2;\n    }\n\n    .div1 {\n        display: flex;\n        position: fixed;\n        align-items: center;\n        justify-content: center;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n    }\n\n\n    .divG {\n        color: green;\n    }\n\n    .divR {\n        color: red;\n    }\n</style>\n\n<div *ngIf=\"CMObj.showCM\">\n    <div class=\"divbg\">\n    </div>\n    <div class=\"div1\">\n        <div class=\"div2\">\n            <h2 *ngIf=\"CMObj.cMProcess\" class=\"divG opflash\">{{CMObj.textMsg}}</h2>\n            <h2 *ngIf=\"CMObj.cMSuccess\" class=\"divG opflash\">{{CMObj.textMsg}}</h2>\n            <h2 *ngIf=\"CMObj.cMError\" class=\"divR opflash\">{{CMObj.textMsg}}</h2>\n            <h2 *ngIf=\"CMObj.cMErrorF\" class=\"divR opflashFreeze\">{{CMObj.textMsg}}</h2>\n        </div>\n    </div>\n</div>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    CentreMsgComponent.ctorParameters = function () {
      return [];
    };

    CentreMsgComponent.propDecorators = {
      centreMsgReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}

    var CentreMsgObject =
    /*#__PURE__*/
    function () {
      function CentreMsgObject() {
        _classCallCheck(this, CentreMsgObject);

        this.showCM = false;
        this.cMProcess = false;
        this.cMSuccess = false;
        this.cMError = false;
        this.cMErrorF = false;
        this.textMsg = 'Processing...';
      }
      /**
       * @param {?} msg
       * @return {?}
       */


      _createClass(CentreMsgObject, [{
        key: "showProcess",
        value: function showProcess(msg) {
          this.textMsg = msg;
          this.showCM = true;
          this.cMProcess = true;
          this.cMSuccess = false;
          this.cMError = false;
          this.cMErrorF = false;
        }
        /**
         * @param {?} msg
         * @param {?=} aftershow
         * @param {?=} duration
         * @return {?}
         */

      }, {
        key: "showSuccess",
        value: function showSuccess(msg, aftershow) {
          var _this = this;

          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;
          this.textMsg = msg;
          this.showCM = true;
          this.cMProcess = false;
          this.cMSuccess = true;
          this.cMError = false;
          this.cMErrorF = false;

          if (duration > 0) {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (aftershow != null) aftershow();

              _this.stop();
            }, duration);
          }
        }
        /**
         * @param {?} msg
         * @param {?=} aftershow
         * @param {?=} duration
         * @param {?=} Freeze
         * @return {?}
         */

      }, {
        key: "showError",
        value: function showError(msg, aftershow) {
          var _this2 = this;

          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;
          var Freeze = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.textMsg = msg;
          this.showCM = true;
          this.cMProcess = false;
          this.cMSuccess = false;

          if (Freeze) {
            this.cMErrorF = true;
            this.cMError = false;
          } else {
            this.cMErrorF = false;
            this.cMError = true;

            if (duration > 0) {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                if (aftershow != null) aftershow();

                _this2.stop();
              }, duration);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "stop",
        value: function stop() {
          this.showCM = false;
          this.cMProcess = false;
          this.cMSuccess = false;
          this.cMError = false;
          this.cMErrorF = false;
        }
      }]);

      return CentreMsgObject;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/opchart/opchart.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var OpchartComponent =
    /*#__PURE__*/
    function () {
      function OpchartComponent() {
        _classCallCheck(this, OpchartComponent);
      }
      /**
       * @return {?}
       */


      _createClass(OpchartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OpchartComponent;
    }();

    OpchartComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'op-chart-line',
        template: "<p>opchart works 33!</p>",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    OpchartComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/open-plant-ng.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var OpenPlantNgModule = function OpenPlantNgModule() {
      _classCallCheck(this, OpenPlantNgModule);
    };

    OpenPlantNgModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [OpenPlantNgComponent, MsgBoxComponent, CentreMsgComponent, OpchartComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_1__["ColorSketchModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
        exports: [OpenPlantNgComponent, MsgBoxComponent, CentreMsgComponent, OpchartComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: open-plant-ng.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=open-plant-ng.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n<!-- \n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chart/chart.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chart/chart.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChartChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>chart works!</p>\n<app-charttest></app-charttest>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charttest/charttest.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charttest/charttest.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCharttestCharttestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<highcharts-chart [Highcharts]=\"highcharts\" [constructorType]=\"chartConstructor\" [options]=\"options\"\n    [callbackFunction]=\"chartCallback\" [(update)]=\"updateFlag\" [oneToOne]=\"oneToOneFlag\"\n    [runOutsideAngular]=\"runOutsideAngularFlag\" style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrEditGridConfCtrlrEditGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-row\">\n    <button class=\"btn btn-secondary\" (click)=\"newClick()\" type=\"button\">New {{ctrlrConfTab.tabName}}</button>\n</div>\n<ag-grid-angular style=\"height: calc(100vh - 300px);\" class=\"op-shadow mt-1 ag-theme-balham mx-auto mb-3 w-100\"\n    rowHeight=\"29\" [rowData]=\"ctrlrConfRowVws\" [columnDefs]=\"columnDefs\" (gridReady)=\"onGridReady($event)\"\n    [suppressFieldDotNotation]=\"false\">\n</ag-grid-angular>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrEditNewConfCtrlrEditNewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<div class=\"container d-flex flex-column\">\n    <div class=\"d-flex flex-row mt-3\">\n        <h3>New Controller</h3>\n        <div class=\"ml-auto\">\n            <button class=\"ml-auto btn btn-secondary\" routerLink=\"/configure-controller\"><i\n                    class=\"fa fa-arrow-left mr-1\"></i>Back</button>\n        </div>\n    </div>\n\n    <div>\n        <div class=\"form-group\">\n            <label for=\"inputTagName\" style=\"color: #838383;\" class=\"ml-1  \">Controller Tag\n                Name</label>\n            <input name=\"inputTagNameNew\" opFocus cssSelector=\"#inputTagNameNew\" type=\"text\"\n                class=\"form-control form-control-sm\" id=\"inputTagNameNew\" [(ngModel)]=\"newCtrlrTagName\" />\n        </div>\n\n        <div class=\"form-group d-flex flex-column\">\n            <label for=\"inputSelTemplNew\" style=\"color: #838383;\" class=\"ml-1  \">Controller Template</label>\n            <select name=\"ctrlTemplId\" id=\"inputSelTemplNew\" class=\"custom-select-sm\" [(ngModel)]=\"newCtrlTemplId\">\n                <option value=\"\">Select Controller Template</option>\n                <option *ngFor=\"let ctrlTempl of ctrlrTempls\" [value]=\"ctrlTempl.id\">\n                    {{ctrlTempl.name}}\n                </option>\n            </select>\n        </div>\n\n\n        <button [disabled]=\"newCtrlTemplId==''||newCtrlrTagName==''\" class=\"w-100 btn btn-secondary mt-1\" type=\"submit\"\n            (click)=\"newNextClick();\"><i class=\"fa fa-save mr-1\"></i>Next</button>\n    </div>\n</div>\n\n\n\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrEditConfCtrlrEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<div class=\"container d-flex flex-column mb-5\">\n    <div class=\"d-flex flex-row mt-3\">\n        <h3>Edit Controller</h3>\n        <div class=\"ml-auto\">\n            <button class=\"ml-auto btn btn-secondary\" routerLink=\"/configure-controller\"><i\n                    class=\"fa fa-arrow-left mr-1\"></i>Back</button>\n        </div>\n    </div>\n\n    <form>\n        <div class=\"form-group\">\n            <label for=\"inputTagName\" style=\"color: #838383;\" class=\"ml-1  \">Controller Tag\n                Name</label>\n            <input name=\"inputTagName\" type=\"text\" class=\"form-control form-control-sm\" id=\"inputTagName\"\n                [(ngModel)]=\"selCtrlrConf.ctrlrTagName\" />\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"inputDescription\" style=\"color: #838383;\" class=\"ml-1  \">Controller Description</label>\n            <input name=\"inputDescription\" type=\"text\" class=\"form-control form-control-sm\" id=\"inputDescription\"\n                [(ngModel)]=\"selCtrlrConf.description\" />\n        </div>\n\n        <div *ngIf='editText==\"New\"' class=\"form-group d-flex flex-column\">\n            <label for=\"inputSelTempl\" style=\"color: #838383;\" class=\"ml-1  \">Controller Template</label>\n            <select name=\"ctrlTemplId\" id=\"inputSelTempl\" class=\"custom-select-sm\">\n                <option selected>Select Controller Template</option>\n                <option *ngFor=\"let ctrlTempl of ctrlrTempls\" [value]=\"ctrlTempl.id\">{{ctrlTempl.name}}\n                </option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"inputEditTemplName\" style=\"color: #838383;\" class=\"ml-1 \">Controller Template</label>\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"inputEditTemplName\" disabled\n                [value]=\"selCtrlrConf.ctrlrTempl.name\" />\n        </div>\n\n        <div *ngFor=\"let param of selCtrlrConf.mainParams\" class=\"form-group\">\n            <label for=\"input{{param.ctrlrTemplParam.name}}\" style=\"color: #838383;\"\n                class=\"ml-1 \">{{param.ctrlrTemplParam.desc}}</label>\n            <div class=\"d-flex flex-column align-items-end\">\n                <input type=\"text\" name=\"inputValue{{param.ctrlrTemplParam.name}}\"\n                    class=\"form-control form-control-sm mr-1\" [disabled]=\"!param.ctrlrTemplParam.canEdit\"\n                    [(ngModel)]=\"param.value\" />\n                <div *ngIf=\"param.ctrlrTemplParam.canUseOPTag\" class=\"form-check d-flex\">\n                    <input type=\"checkbox\" name=\"inputIsOPTag{{param.ctrlrTemplParam.name}}\"\n                        [disabled]=\"!(param.ctrlrTemplParam.canUseOPTag && param.ctrlrTemplParam.canEdit)\"\n                        class=\"form-check-input big-checkbox\" [(ngModel)]=\"param.isOPTag\" />\n                    <label class=\"form-check-label text-nowrap\" style=\"color: #838383;\">Open-Plant Tag</label>\n                    <button\n                        [disabled]=\"!(param.isOPTag && param.ctrlrTemplParam.canUseOPTag && param.ctrlrTemplParam.canEdit)\"\n                        class=\"ml-1 btn btn-primary btn-sm d-flex justify-content-center\" (click)=\"onClick($event)\"\n                        type=\"button\" style=\"height: 22px;width: 22px; margin-top: 2px;\">\n                        <i class=\"fa fa-external-link d-flex\" style=\"margin-left: 2px;\"></i>\n                    </button>\n\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"mt-5\">\n            <ul class=\"nav nav-tabs\">\n                <li *ngFor=\"let tab of selCtrlrConf.ctrlrConfTabs; let i = index\" class=\"nav-item\"><a role=\"tab\"\n                        data-toggle=\"tab\" class=\"nav-link\" [class.active]=\"i==0\"\n                        href=\"#tabVEdit-{{i}}\">{{tab.tabName}}</a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n                <div *ngFor=\"let tab of selCtrlrConf.ctrlrConfTabs; let i = index\" role=\"tabpanel\" class=\"tab-pane\"\n                    [class.active]=\"i==0\" id=\"tabVEdit-{{i}}\">\n                    <div class=\"p-3 border\">\n                        <app-conf-ctrlr-edit-grid [ctrlrConfTab]=\"tab\" [saveInitiated]=\"saveInitiated\"\n                            (modelUpdated)=\"onModelUpdated($event)\" [msgBox]=\"msgBox\"></app-conf-ctrlr-edit-grid>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <button class=\"w-100 btn btn-secondary mt-1\" type=\"submit\" (click)=\"onSaveCtrlrConf()\"><i\n                class=\"fa fa-save mr-1\"></i>Save</button>\n    </form>\n</div>\n\n\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-list/conf-ctrlr-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-list/conf-ctrlr-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrListConfCtrlrListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<!-- CONTROLLER LIST -->\n<div class=\"container d-flex flex-column flex-wrap\">\n    <div class=\"d-flex flex-row flex-wrap mt-3\">\n        <div class=\"flex-fill\">\n            <h3 class=\"text-nowrap\">Configure Controllers</h3>\n        </div>\n        <div class=\"d-flex flex-row justify-content-end\">\n            <button class=\"btn btn-secondary mr-1\" routerLink=\"/new-controller\"><i class=\"fa fa-plus mr-1\"></i>New\n            </button>\n            <button class=\"btn btn-danger\" [disabled]=\"delCount==0\" (click)=\"deleteBtnClick()\"><i\n                    class=\"fa fa-trash mr-1\"></i>Delete {{delCount}}\n            </button>\n        </div>\n    </div>\n    <ag-grid-angular style=\"height: calc(100vh - 300px);\" class=\"op-shadow mt-1 ag-theme-balham mx-auto mb-1 w-100\"\n        rowHeight=\"30\" [rowData]=\"ctrlrConfListVws\" [columnDefs]=\"columnDefs\" (gridReady)=\"onGridReady($event)\">\n    </ag-grid-angular>\n\n</div>\n\n\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrTemplConfCtrlrTemplComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<!-- Template List -->\n<div *ngIf=\"selCtrlrTempl==null\" class=\"container d-flex flex-column mb-5\">\n    <div class=\"d-flex flex-row mt-3\">\n        <h3>Configure Controller Templates</h3>\n        <button class=\"ml-auto btn btn-secondary\" (click)=\"newTemplClick()\">New Template</button>\n    </div>\n\n\n    <ag-grid-angular style=\"height: calc(100vh - 300px);\" class=\"op-shadow mt-1 ag-theme-balham mx-auto mb-1 w-100\"\n        rowHeight=\"30\" [rowData]=\"ctrlrTempls\" [columnDefs]=\"columnDefs\" (gridReady)=\"onGridReady($event)\">\n    </ag-grid-angular>\n\n</div>\n\n\n<!-- Edit / Create New Template -->\n<div *ngIf=\"selCtrlrTempl!=null\" class=\"container d-flex flex-column mb-5\">\n    <div class=\"d-flex flex-row mt-3 align-items-center\">\n        <h3 class=\"mt-3\">{{editOrNew}} Controller Template</h3>\n        <button class=\"ml-auto btn btn-secondary\" (click)=\"backClick();\"><i\n                class=\"fa fa-arrow-left mr-1\"></i>Back</button>\n    </div>\n\n\n    <app-tabgrid [ctrlrTempl]=\"selCtrlrTempl\" [msgBox]=\"msgBox\" [centreMsg]=\"centreMsg\"></app-tabgrid>\n</div>\n\n\n\n\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrTemplTabgridTabgridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group mt-3\">\n    <label class=\"mr-1\" style=\"color: #838383;\" for=\"inputTemplName\">Template Name</label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"inputTemplName\" [(ngModel)]=\"ctrlrTemplVw.name\" />\n</div>\n<div class=\"mt-3\">\n    <ul class=\"nav nav-tabs\">\n        <li *ngFor=\"let tab of ctrlrTemplVw.tabs; let i = index\" class=\"nav-item\"><a role=\"tab\" data-toggle=\"tab\"\n                class=\"nav-link\" [class.active]=\"i==0\" href=\"#tab-{{i}}\">{{tab.name}}</a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n        <div *ngFor=\"let tab2 of ctrlrTemplVw.tabs; let i = index\" role=\"tabpanel\" class=\"tab-pane\"\n            [class.active]=\"i==0\" id=\"tab-{{i}}\">\n            <div class=\"px-3 border\">\n                <app-tabgrid2 [(ctrlrTemplTabVw)]=\"tab2\"></app-tabgrid2>\n            </div>\n        </div>\n    </div>\n\n    <div>\n        <label class=\"ml-1 mt-4\" style=\"color: #838383; font-size: 20px;\">Numerical Mappings</label>\n        <div class=\"d-md-flex ag-theme-balham\">\n            <div class=\"m-1\">\n                <ul class=\"list-group op-shadow\">\n                    <li *ngFor=\"let mapping of ctrlrTemplVw.mappings\" [class.active]=\"evaluateActiveMapping(mapping)\"\n                        (click)=\"selectedMapping=mapping\" class=\"list-group-item\">\n                        <span>{{mapping.name}}</span></li>\n                </ul>\n\n                <div class=\"d-flex d-md-none flex-row justify-content-end mb-3 mt-1\">\n                    <button class=\"btn btn-secondary btn-sm mr-1\" (click)=\"newMapping()\">New Mapping</button>\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteMapping()\" type=\"button\"><i\n                            class=\"fa fa-trash mr-1\"></i>Delete Mapping</button>\n                </div>\n                <button class=\"btn btn-secondary btn-sm w-100 d-none d-md-block mt-1\" (click)=\"newMapping()\"\n                    type=\"button\">New</button>\n                <button class=\"btn btn-danger w-100 mt-1 btn-sm  d-none d-md-block mt-1\"\n                    [disabled]=\"evalMappingDisabled()\" type=\"button\" (click)=\"deleteMapping()\"><i\n                        class=\"fa fa-trash mr-1\"></i>Delete</button>\n            </div>\n            <div *ngIf=\"this.selectedMapping==null\"\n                class=\"flex-fill m-1 p-3 border rounded d-flex justify-content-center align-items-center\">\n                <div>Select a mapping</div>\n            </div>\n            <div *ngIf=\"this.selectedMapping!=null\" class=\"op-shadow flex-fill m-1 p-3 border rounded\">\n                <div>\n                    <div class=\"d-flex flex-column\">\n                        <div class=\"form-group\">\n                            <label class=\"mb-2 font-weight-bold\">Mapping Name</label>\n                            <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"selectedMapping.name\">\n                        </div>\n                        <div class=\"table-responsive mr-1 mb-1\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"width: 15%\">Value</th>\n                                        <th>Text</th>\n                                        <th style=\"width: 25%\">Color</th>\n                                        <th>Delete</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let mapPair of selectedMapping.mapPairs\">\n                                        <td><input type=\"text\" class=\"form-control form-control-sm\"\n                                                [(ngModel)]=\"mapPair.val\">\n                                        </td>\n                                        <td><input type=\"text\" class=\"form-control form-control-sm\"\n                                                [(ngModel)]=\"mapPair.text\"></td>\n                                        <td>\n                                            <div class=\"d-flex flex-row align-items-center\">\n                                                <input type=\"text\" class=\"form-control form-control-sm mr-1\"\n                                                    [(ngModel)]=\"mapPair.colorHex\">\n                                                <i class=\"fa fa-circle\" style=\"font-size: 20px;cursor: pointer;\"\n                                                    (click)=\"showColorPicker(mapPair)\"\n                                                    [style.color]=\"mapPair.colorHex\"></i>\n                                            </div>\n                                            <div *ngIf=\"mapPair.showCP\" style=\"background-color: #000000c9\"\n                                                ng-keypress=\"onInputKeyDown($event, mapPair)\"\n                                                class=\"fixed-top w-100 h-100 d-flex flex-column align-items-center justify-content-center\">\n                                                <div style=\"width: 300px; padding: 10px\">\n                                                    <color-sketch [color]=\"mapPair.colorHex\"\n                                                        (onChangeComplete)=\"colorChanged($event,mapPair)\">\n                                                    </color-sketch>\n                                                    <div class=\"mt-1 d-flex flex-row\">\n                                                        <button (click)=\"okCPClick(mapPair)\"\n                                                            class=\"btn btn-sm mr-1 btn-secondary\"\n                                                            style=\"flex: 1\">OK</button>\n                                                        <button (click)=\"cancelCPClick(mapPair)\"\n                                                            class=\"btn btn-sm btn-secondary\"\n                                                            style=\"flex:1\">Cancel</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </td>\n                                        <td style=\"vertical-align: middle !important\">\n                                            <div>\n                                                <button type=\"button\"\n                                                    class=\"btn btn-outline-primary border-0 py-0 px-1 mx-0\"\n                                                    (click)=\"deleteMapPair(mapPair)\"><i class=\"fa fa-trash\"\n                                                        style=\"font-size: 20px\"></i></button>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-end justify-content-sm-end justify-content-md-end\"><button\n                            class=\"btn btn-secondary text-right mt-1 btn-sm\" type=\"button\" (click)=\"newMapPair()\">New\n                            Entry</button></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <button class=\"w-100 btn btn-secondary mt-5\" (click)=\"saveAllClick()\"><i class=\"fa fa-save mr-1\"></i>Save\n        All</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfCtrlrTemplTabgrid2Tabgrid2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-end\">\n    <div class=\"mt-1\">\n        <button class=\"btn btn-secondary mr-1\" (click)=\"newClick()\" type=\"button\"><i\n                class=\"fa fa-plus mr-1\"></i>New</button>\n        <button class=\"btn btn-secondary\" (click)=\"undoClick()\" type=\"button\"><i\n                class=\"fa fa-undo mr-1\"></i>Undo</button>\n    </div>\n</div>\n\n<ag-grid-angular style=\"height: calc(100vh - 300px);\" class=\"op-shadow mt-1 ag-theme-balham mx-auto mb-3 w-100\"\n    rowHeight=\"30\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\" rowDragManaged=\"true\"\n    [rowData]=\"ctrlrTemplTabVw.params\" [columnDefs]=\"columnDefs\" [gridOptions]=\"gridOptions\"\n    (rowDataChanged)=\"handleRowDataChanged($event)\">\n</ag-grid-angular>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-matrix/ctrlr-matrix.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-matrix/ctrlr-matrix.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCtrlrMatrixCtrlrMatrixComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"matrixtablecontainer op-shadow\">\n\n    <table cellpadding=\"6\" class=\"w-100\">\n        <tbody>\n            <tr *ngFor=\"let row of ctrlrMatrixVw?.rows; let r=index\">\n                <ng-container *ngFor=\"let cell of row?.cells; let c=index\">\n                    <th *ngIf=\"cell?.ctrlrMatrixCellType!=CtrlrMatrixCellType.Cell\"\n                        [class.numb-cell]=\"cell?.ctrlrMatrixCellType==CtrlrMatrixCellType.TopLeftMost\">{{cell?.value}}\n                    </th>\n                    <td *ngIf=\"cell?.ctrlrMatrixCellType==CtrlrMatrixCellType.Cell\" (click)=\"cellClick(cell,row)\"\n                        (mouseleave)=\"cellMouseLeave()\" [class.highlight]=\"rowSel==r||colSel==c\"\n                        (mouseenter)=\"cellMouseEnter(r,c)\">\n                        <span *ngIf=\"!cell?.editMode\">{{cell?.value}}</span>\n                        <input class=\"form-control form-control-sm w-100\" NumericRealInput=\"true\" #cellMatrix\n                            (focusout)=\"onFocusOut(cell)\" (keydown.enter)=\"enterKeyPress(cell)\"\n                            (keydown.escape)=\"escapeKeyPress(cell)\" *ngIf=\"cell?.editMode\" [(ngModel)]=\"cell.value\" />\n                    </td>\n                </ng-container>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-top-strip/ctrlr-top-strip.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-top-strip/ctrlr-top-strip.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCtrlrTopStripCtrlrTopStripComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-md-flex d-none flex-row justify-content-between\">\n    <div class=\"d-flex flex-row\">\n        <h6 class=\"mr-1 ctstext text-nowrap\">Controller Mode:</h6>\n        <h6 class=\"\" [style.color]=\"ctrlrTopStripVw?.modeColor\">{{ctrlrTopStripVw?.mode}}</h6>\n    </div>\n    <div class=\"d-flex flex-row\">\n        <h6 class=\"mr-1 ctstext text-nowrap\">Status:</h6>\n        <h6 [style.color]=\"ctrlrTopStripVw?.statusColor\">{{ctrlrTopStripVw?.status}}</h6>\n    </div>\n    <div class=\"d-flex flex-row\">\n        <h6 class=\"mr-1 ctstext text-nowrap\">Expected Benefit:</h6>\n        <h6 [style.color]=\"ctrlrTopStripVw?.benefitColor\">{{ctrlrTopStripVw?.benefitN | currency}}</h6>\n    </div>\n</div>\n\n<div class=\"d-md-none d-flex flex-column align-items-center\">\n    <div class=\"d-flex flex-row\">\n        <h6 class=\"mr-1 ctstext text-nowrap\">Controller Mode:</h6>\n        <h6 class=\"\" [style.color]=\"ctrlrTopStripVw?.modeColor\">{{ctrlrTopStripVw?.mode}}</h6>\n    </div>\n    <div class=\"d-flex flex-row\">\n        <h6 class=\"mr-1 ctstext text-nowrap\">Status:</h6>\n        <h6 [style.color]=\"ctrlrTopStripVw?.statusColor\">{{ctrlrTopStripVw?.status}}</h6>\n    </div>\n    <div class=\"d-flex flex-row\">\n        <h6 class=\"mr-1 ctstext text-nowrap\">Expected Benefit:</h6>\n        <h6 [style.color]=\"ctrlrTopStripVw?.benefitColor\">{{ctrlrTopStripVw?.benefitN | currency}}</h6>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-xv-table/ctrlr-xv-table.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-xv-table/ctrlr-xv-table.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCtrlrXvTableCtrlrXvTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"xvtablecontainer op-shadow\">\n    <table cellpadding=\"6\" class=\"w-100\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let headerTop of ctrlrXVKPIVw.headerTopRow\" [attr.rowspan]=\"headerTop.rowSpan\"\n                    [attr.colspan]=\"headerTop.colSpan\">{{ (headerTop==null)? \"\": headerTop.header}}\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let headerBot of ctrlrXVKPIVw.headerBotRow\"><span\n                        style=\"white-space: pre;\">{{headerBot}}</span>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let dataRow of ctrlrXVKPIVw.dataRows\">\n                <td *ngFor=\"let dataCell of dataRow.dataCells\" [style.color]=\"dataCell.color\">{{dataCell.valueStr}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-xv/ctrlr-xv.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-xv/ctrlr-xv.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCtrlrXvCtrlrXvComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"d-flex flex-column flex-wrap mt-2 container-fluid\">\n    <button class=\"btn btn-secondary align-self-end\" (click)=\"router.navigateByUrl('/home')\">Back</button>\n    <ul class=\"nav nav-tabs\">\n        <li *ngFor=\"let ctrlrXVKPIVw of ctrlrXVKPIVws; let i = index\" class=\"nav-item\"><a role=\"tab\" data-toggle=\"tab\"\n                style=\"border: 1px solid #e7e7e7;\" class=\"nav-link\" [class.active]=\"i==0\"\n                href=\"#tab{{ctrlrXVKPIVw.name}}\">{{ctrlrXVKPIVw.tabLabel}}</a>\n        </li>\n    </ul>\n    <app-ctrlr-top-strip [ctrlrTopStripVw]=\"ctrlrTopStripVw\" class=\"mt-3\"></app-ctrlr-top-strip>\n    <div class=\"tab-content ag-theme-balham w-100\">\n        <div *ngFor=\"let ctrlrXVKPIVw of ctrlrXVKPIVws; let i = index\" role=\"tabpanel\" class=\"tab-pane\"\n            [class.active]=\"i==0\" id=\"tab{{ctrlrXVKPIVw.name}}\">\n            <div>\n                <app-ctrlr-xv-table xVType=\"ctrlrXVKPIVw.ctrlrVarType\" [ctrlrXVKPIVw]=\"ctrlrXVKPIVw\">\n                </app-ctrlr-xv-table>\n            </div>\n        </div>\n    </div>\n</div>\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr/ctrlr.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr/ctrlr.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCtrlrCtrlrComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container mt-3 d-flex flex-wrap flex-column mb-5\">\n    <button class=\"btn btn-secondary align-self-end\" (click)=\"router.navigateByUrl('/home')\">Back</button>\n    <app-ctrlr-top-strip [ctrlrTopStripVw]=\"ctrlrTopStripVw\" class=\"mt-2\"></app-ctrlr-top-strip>\n    <div class=\"d-flex flex-column border mt-2 w-100 pb-4 rounded op-shadow\" style=\"background: #F5F7F7;\">\n        <div class=\"mx-3 d-flex flex-row align-items-center mt-3 flex-wrap flex-md-nowrap\">\n            <div class=\"mr-4 text-nowrap name-col\" style=\"font-weight: bold;\">Controller Tag Name:\n            </div>\n            <input class=\"form-control form-control-lg font-weight-bold\" [value]=\"ctrlrVw?.ctrlrTagName\" type=\"text\"\n                readonly=\"\">\n        </div>\n        <div class=\"mx-3 d-flex flex-row align-items-center mt-3 flex flex-wrap flex-md-nowrap\">\n            <div class=\"mr-4 text-nowrap name-col\">Description:</div>\n            <input class=\"form-control form-control-sm\" [value]=\"ctrlrVw?.description\" type=\"text\" readonly=\"\">\n        </div>\n        <div class=\"mx-3 d-flex flex-row align-items-center mt-3 flex-wrap flex-md-nowrap\">\n            <div class=\"mr-4 text-nowrap name-col\">Number of CVs / MVs / DVs:</div>\n            <div class=\"d-flex flex-row w-100\">\n                <input class=\"form-control form-control-sm\" [value]=\"ctrlrVw?.numCV\" type=\"text\" readonly=\"\">\n                <input class=\"form-control form-control-sm mx-1\" [value]=\"ctrlrVw?.numMV\" type=\"text\" readonly=\"\">\n                <input class=\"form-control form-control-sm\" [value]=\"ctrlrVw?.numDV\" type=\"text\" readonly=\"\">\n            </div>\n        </div>\n\n        <div *ngFor=\"let dataCell of ctrlrVw?.dataCells\"\n            class=\"mx-3 d-flex flex-row align-items-center mt-3 flex-wrap flex-md-nowrap\">\n            <div class=\"mr-4 text-nowrap\">{{dataCell.ctrlrTemplParam.name}}:</div>\n            <input class=\"form-control form-control-sm\" [value]=\"dataCell.valueStr\" type=\"text\" readonly=\"\">\n        </div>\n    </div>\n\n    <app-ctrlr-matrix [editable]=\"true\" [(ctrlrMatrixVw)]=\"ctrlrMatrixVw\" class=\"mt-5\"></app-ctrlr-matrix>\n</div>\n\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n\r\n\r\n<!-- CONTROLLER LIST -->\r\n<div class=\"container d-flex flex-column flex-wrap\">\r\n    <div class=\"d-flex flex-row flex-wrap mt-3\">\r\n        <div class=\"flex-fill\">\r\n\r\n        </div>\r\n        <div class=\"d-flex flex-row justify-content-end\">\r\n            <button class=\"btn btn-secondary mr-1\" (click)=\"refresh();\"><i\r\n                    class=\"fa fa-refresh mr-1\"></i>Refresh</button>\r\n        </div>\r\n    </div>\r\n    <ag-grid-angular style=\"height: calc(100vh - 300px);\" class=\"op-shadow mt-1 ag-theme-balham mx-auto mb-1 w-100\"\r\n        rowHeight=\"30\" (rowClicked)=\"onRowClicked($event)\" [rowData]=\"ctrlrHomeVws\" [columnDefs]=\"columnDefs\"\r\n        suppressRowHoverHighlight=\"true\" (gridReady)=\"onGridReady($event)\" [suppressCellSelection]=\"true\">\r\n    </ag-grid-angular>\r\n\r\n</div>\r\n\r\n<op-centre-msg (centreMsgReady)=\"onCMReady($event)\"></op-centre-msg>\r\n<op-msg-box (msgBoxReady)=\"onMBReady($event)\"></op-msg-box>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-demo/login-demo.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-demo/login-demo.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginDemoLoginDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center\"\n    style=\"width: 100vw; height: 100vh; background-image: url('assets/img/loginbg.jpg'); background-size: cover;\">\n    <div class=\"d-flex flex-column bg-white shadow align-items-center\" style=\"width: 300px;\">\n        <div class=\"w-100 text-center py-1\" style=\"background: #2a4c68; color: white;\">Login to System</div>\n        <div class=\"px-2 py-3 d-flex flex-column align-items-center\">\n            <img src=\"assets\\img\\OpenPlantLogoS.png\" style=\"width: 200px;\" class=\"mb-2\" />\n            <div class=\"border p-2 rounded\" style=\"width: 285px;\">\n                <div class=\"text-center mb-2 font-weight-bold\" style=\"line-height: 1.1; color: #2a4c68; \"><span\n                        style=\"font-size: 20px;\">Advanced\n                        Processs Control</span><br />\n                    <span class=\"font-weight-normal\" style=\"font-size: 16px;\">Performance\n                        Monitoring System</span>\n                </div>\n                <div class=\"border px-2 py-4 rounded\">\n                    <div class=\"mb-2 d-flex flex-row align-items-center\">\n                        <div>\n                            <i class=\"fa fa-user d-sm-flex\"\n                                style=\"font-size: 36px;margin-right: 5px; color: #2a4c68;\"></i>\n                        </div>\n                        <input type=\"text\" name=\"\" style=\"background: #fffee9\" [disabled]=\"formDisabled\"\n                            class=\"form-control input_user w-100 bg-yellow-100\" [(ngModel)]=\"username\"\n                            (keydown.enter)=\"login()\" placeholder=\"username\">\n                    </div>\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <div>\n                            <i class=\"fa fa-lock d-sm-flex\"\n                                style=\"font-size: 36px;margin-right: 5px; color: #2a4c68\"></i>\n                        </div>\n                        <input type=\"password\" name=\"\" [(ngModel)]=\"password\" class=\"form-control input_pass w-100\"\n                            [disabled]=\"formDisabled\" (keydown.enter)=\"login()\" value=\"\" style=\"background: #fffee9\"\n                            placeholder=\"password\">\n                    </div>\n                    <button class=\"btn btn-secondary w-100 mt-2\" [disabled]=\"formDisabled\"\n                        [class.disabled]=\"formDisabled\" (click)=\"login()\">Login</button>\n                    <div *ngIf=\"showLoginError\" style=\"color: red;\"\n                        class=\"position-relative w-100 float-left text-center op-blink\">\n                        Invalid\n                        username/password!</div>\n                    <div *ngIf=\"showLoginSuccess\" style=\"color: green;\"\n                        class=\"position-relative  w-100 float-left text-center op-blink\">\n                        Login success!</div>\n                </div>\n            </div>\n            <small class=\"text-center text-muted mx-1\">To login, username 'demo', password 'demo'</small>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark navbar-expand-md bg-primary shadow\">\n    <div class=\"container-fluid\"><a class=\"navbar-brand\" routerLink=\"/home\"><img\n                src=\"assets/img/OpenPlantLogoWhite-NoTagLine.png\" style=\"height: 35px;\" /></a><button\n            data-toggle=\"collapse\" data-target=\"#navcol-1\" class=\"navbar-toggler text-white\"><span\n                class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon text-white\"></span></button>\n        <div class=\"collapse navbar-collapse justify-content-sm-end show\" id=\"navcol-1\">\n            <ul class=\"nav navbar-nav\">\n                <li role=\"presentation\" class=\"nav-item flex-column\"></li>\n                <li role=\"presentation\" class=\"nav-item flex-column\">\n                    <a class=\"nav-link d-flex d-md-flex d-xl-flex align-items-sm-center align-items-md-center justify-content-xl-center align-items-center\"\n                        style=\"margin-right: 15px;\" routerLink=\"/home\" routerLinkActive=\"text-white\">\n                        <i class=\"fa fa-dashboard d-sm-flex\" style=\"font-size: 30px;margin-right: 5px;\"></i>\n                        Dashboard\n                    </a>\n                </li>\n                <li role=\"presentation\" class=\"nav-item flex-column\"></li>\n                <li class=\"nav-item dropdown\">\n                    <a data-toggle=\"dropdown\" aria-expanded=\"false\"\n                        class=\"dropdown-toggle nav-link d-flex align-items-center align-items-sm-center align-items-md-center\">\n                        <i class=\"fa fa-gear d-sm-flex\" style=\"font-size: 30px;margin-right: 5px;\"></i>Configure\n                    </a>\n                    <div role=\"menu\" class=\"dropdown-menu\">\n                        <a role=\"presentation\" class=\"dropdown-item\" routerLink=\"/configure-controller\"\n                            routerLinkActive=\"text-primary font-weight-bold\">\n                            <i class=\"fa fa-tags\" style=\"margin-right: 5px;\"></i>Controllers\n                        </a>\n                        <a role=\"presentation\" class=\"dropdown-item\" routerLink=\"/configure-controller-template\"\n                            routerLinkActive=\"text-primary font-weight-bold\"><i class=\"fa fa-cubes\"\n                                style=\"margin-right: 5px;\"></i>Controller Templates</a>\n                    </div>\n                </li>\n                <li role=\"presentation\" class=\"nav-item flex-column\"><a\n                        class=\"nav-link d-flex d-md-flex d-xl-flex align-items-sm-center align-items-md-center justify-content-xl-center align-items-xl-center\"\n                        routerLink=\"/login\"><i class=\"fa fa-sign-out d-sm-flex\"\n                            style=\"font-size: 30px;margin-right: 5px;\"></i>Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/animations.ts":
  /*!*******************************!*\
    !*** ./src/app/animations.ts ***!
    \*******************************/

  /*! exports provided: fadeAnimation */

  /***/
  function srcAppAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
      return fadeAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [// The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [// The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', // here we apply a style and use the animate function to apply the style over 0.3 seconds
    [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }))], {
      optional: true
    })])]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _charttest_charttest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./charttest/charttest.component */
    "./src/app/charttest/charttest.component.ts");
    /* harmony import */


    var _conf_ctrlr_edit_new_conf_ctrlr_edit_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./conf-ctrlr-edit-new/conf-ctrlr-edit-new.component */
    "./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.ts");
    /* harmony import */


    var _conf_ctrlr_list_conf_ctrlr_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conf-ctrlr-list/conf-ctrlr-list.component */
    "./src/app/conf-ctrlr-list/conf-ctrlr-list.component.ts");
    /* harmony import */


    var _login_demo_login_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-demo/login-demo.component */
    "./src/app/login-demo/login-demo.component.ts");
    /* harmony import */


    var _ctrlr_xv_ctrlr_xv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ctrlr-xv/ctrlr-xv.component */
    "./src/app/ctrlr-xv/ctrlr-xv.component.ts");
    /* harmony import */


    var _conf_ctrlr_templ_conf_ctrlr_templ_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./conf-ctrlr-templ/conf-ctrlr-templ.component */
    "./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ctrlr_ctrlr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ctrlr/ctrlr.component */
    "./src/app/ctrlr/ctrlr.component.ts");
    /* harmony import */


    var _conf_ctrlr_edit_conf_ctrlr_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./conf-ctrlr-edit/conf-ctrlr-edit.component */
    "./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.ts");

    var routes = [{
      path: '',
      component: _login_demo_login_demo_component__WEBPACK_IMPORTED_MODULE_4__["LoginDemoComponent"]
    }, {
      path: 'login',
      component: _login_demo_login_demo_component__WEBPACK_IMPORTED_MODULE_4__["LoginDemoComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, {
      path: 'controllers/',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, {
      path: 'new-controller',
      component: _conf_ctrlr_edit_new_conf_ctrlr_edit_new_component__WEBPACK_IMPORTED_MODULE_2__["ConfCtrlrEditNewComponent"]
    }, {
      path: 'configure-controller',
      component: _conf_ctrlr_list_conf_ctrlr_list_component__WEBPACK_IMPORTED_MODULE_3__["ConfCtrlrListComponent"]
    }, {
      path: 'configure-controller/:ctrlrTagName',
      component: _conf_ctrlr_edit_conf_ctrlr_edit_component__WEBPACK_IMPORTED_MODULE_11__["ConfCtrlrEditComponent"]
    }, {
      path: 'configure-controller-template',
      component: _conf_ctrlr_templ_conf_ctrlr_templ_component__WEBPACK_IMPORTED_MODULE_6__["ConfCtrlrTemplComponent"]
    }, {
      path: 'controllers/:ctrlrTagName',
      component: _ctrlr_ctrlr_component__WEBPACK_IMPORTED_MODULE_10__["CtrlrComponent"]
    }, {
      path: 'controllers/:ctrlrTagName/:ctrlrVarTypeStr',
      component: _ctrlr_xv_ctrlr_xv_component__WEBPACK_IMPORTED_MODULE_5__["CtrlrXvComponent"]
    }, {
      path: 'test',
      component: _charttest_charttest_component__WEBPACK_IMPORTED_MODULE_1__["CharttestComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animations */
    "./src/app/animations.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(dataService) {
        _classCallCheck(this, AppComponent);

        this.dataService = dataService;
        this.title = 'web';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCMReady",
        value: function onCMReady(cmObj) {
          this.centreMsg = cmObj;
          this.centreMsg.showProcess('Loading...');
          this.dataService.getCtrlrTempls();
          this.centreMsg.stop();
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(msgBoxObj) {
          this.msgBox = msgBoxObj;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var open_plant_ng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! open-plant-ng */
    "./dist/open-plant-ng/fesm2015/open-plant-ng.js");
    /* harmony import */


    var _charttest_charttest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./charttest/charttest.component */
    "./src/app/charttest/charttest.component.ts");
    /* harmony import */


    var _conf_ctrlr_edit_grid_conf_ctrlr_edit_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component */
    "./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.ts");
    /* harmony import */


    var _ctrlr_matrix_ctrlr_matrix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ctrlr-matrix/ctrlr-matrix.component */
    "./src/app/ctrlr-matrix/ctrlr-matrix.component.ts");
    /* harmony import */


    var _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/enum-kvp-renderer.component */
    "./src/app/services/enum-kvp-renderer.component.ts");
    /* harmony import */


    var _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/enum-renderer.component */
    "./src/app/services/enum-renderer.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _conf_ctrlr_templ_conf_ctrlr_templ_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./conf-ctrlr-templ/conf-ctrlr-templ.component */
    "./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/button-renderer.component */
    "./src/app/services/button-renderer.component.ts");
    /* harmony import */


    var _services_checkbox_renderer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/checkbox-renderer.component */
    "./src/app/services/checkbox-renderer.component.ts");
    /* harmony import */


    var _conf_ctrlr_templ_tabgrid_tabgrid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./conf-ctrlr-templ/tabgrid/tabgrid.component */
    "./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.ts");
    /* harmony import */


    var _conf_ctrlr_templ_tabgrid2_tabgrid2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./conf-ctrlr-templ/tabgrid2/tabgrid2.component */
    "./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_ctrlr_cell_renderer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/ctrlr-cell-renderer.component */
    "./src/app/services/ctrlr-cell-renderer.component.ts");
    /* harmony import */


    var _ctrlr_xv_ctrlr_xv_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ctrlr-xv/ctrlr-xv.component */
    "./src/app/ctrlr-xv/ctrlr-xv.component.ts");
    /* harmony import */


    var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-color/sketch */
    "./node_modules/ngx-color/sketch/fesm2015/ngx-color-sketch.js");
    /* harmony import */


    var _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/ahref-renderer.component */
    "./src/app/services/ahref-renderer.component.ts");
    /* harmony import */


    var _ctrlr_top_strip_ctrlr_top_strip_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ctrlr-top-strip/ctrlr-top-strip.component */
    "./src/app/ctrlr-top-strip/ctrlr-top-strip.component.ts");
    /* harmony import */


    var _ctrlr_xv_table_ctrlr_xv_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./ctrlr-xv-table/ctrlr-xv-table.component */
    "./src/app/ctrlr-xv-table/ctrlr-xv-table.component.ts");
    /* harmony import */


    var _ctrlr_ctrlr_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ctrlr/ctrlr.component */
    "./src/app/ctrlr/ctrlr.component.ts");
    /* harmony import */


    var _numeric_real_input_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./numeric-real-input.directive */
    "./src/app/numeric-real-input.directive.ts");
    /* harmony import */


    var _login_demo_login_demo_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./login-demo/login-demo.component */
    "./src/app/login-demo/login-demo.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _conf_ctrlr_list_conf_ctrlr_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./conf-ctrlr-list/conf-ctrlr-list.component */
    "./src/app/conf-ctrlr-list/conf-ctrlr-list.component.ts");
    /* harmony import */


    var _conf_ctrlr_edit_conf_ctrlr_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./conf-ctrlr-edit/conf-ctrlr-edit.component */
    "./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.ts");
    /* harmony import */


    var _conf_ctrlr_edit_new_conf_ctrlr_edit_new_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./conf-ctrlr-edit-new/conf-ctrlr-edit-new.component */
    "./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.ts");
    /* harmony import */


    var _focus_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./focus.directive */
    "./src/app/focus.directive.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./chart/chart.component */
    "./src/app/chart/chart.component.ts");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _conf_ctrlr_templ_conf_ctrlr_templ_component__WEBPACK_IMPORTED_MODULE_12__["ConfCtrlrTemplComponent"], _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_22__["AhrefRendererComponent"], _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_14__["ButtonRendererComponent"], _services_checkbox_renderer_component__WEBPACK_IMPORTED_MODULE_15__["CheckBoxRendererComponent"], _conf_ctrlr_templ_tabgrid_tabgrid_component__WEBPACK_IMPORTED_MODULE_16__["TabgridComponent"], _conf_ctrlr_templ_tabgrid2_tabgrid2_component__WEBPACK_IMPORTED_MODULE_17__["Tabgrid2Component"], _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_6__["EnumRenderer"], _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_5__["EnumKVPRenderer"], _services_ctrlr_cell_renderer_component__WEBPACK_IMPORTED_MODULE_19__["CtrlrCellRendererComponent"], _conf_ctrlr_edit_grid_conf_ctrlr_edit_grid_component__WEBPACK_IMPORTED_MODULE_3__["ConfCtrlrEditGridComponent"], _charttest_charttest_component__WEBPACK_IMPORTED_MODULE_2__["CharttestComponent"], _ctrlr_xv_ctrlr_xv_component__WEBPACK_IMPORTED_MODULE_20__["CtrlrXvComponent"], _ctrlr_top_strip_ctrlr_top_strip_component__WEBPACK_IMPORTED_MODULE_23__["CtrlrTopStripComponent"], _ctrlr_xv_table_ctrlr_xv_table_component__WEBPACK_IMPORTED_MODULE_24__["CtrlrXvTableComponent"], _ctrlr_ctrlr_component__WEBPACK_IMPORTED_MODULE_25__["CtrlrComponent"], _ctrlr_matrix_ctrlr_matrix_component__WEBPACK_IMPORTED_MODULE_4__["CtrlrMatrixComponent"], _numeric_real_input_directive__WEBPACK_IMPORTED_MODULE_26__["NumericRealInput"], _login_demo_login_demo_component__WEBPACK_IMPORTED_MODULE_27__["LoginDemoComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"], _conf_ctrlr_list_conf_ctrlr_list_component__WEBPACK_IMPORTED_MODULE_29__["ConfCtrlrListComponent"], _conf_ctrlr_edit_conf_ctrlr_edit_component__WEBPACK_IMPORTED_MODULE_30__["ConfCtrlrEditComponent"], _conf_ctrlr_edit_new_conf_ctrlr_edit_new_component__WEBPACK_IMPORTED_MODULE_31__["ConfCtrlrEditNewComponent"], _focus_directive__WEBPACK_IMPORTED_MODULE_32__["FocusDirective"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_34__["ChartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_21__["ColorSketchModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], open_plant_ng__WEBPACK_IMPORTED_MODULE_1__["OpenPlantNgModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_35__["HighchartsChartModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__["AgGridModule"].withComponents([_services_button_renderer_component__WEBPACK_IMPORTED_MODULE_14__["ButtonRendererComponent"], _services_checkbox_renderer_component__WEBPACK_IMPORTED_MODULE_15__["CheckBoxRendererComponent"], _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_6__["EnumRenderer"], _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_5__["EnumKVPRenderer"], _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_22__["AhrefRendererComponent"], _services_ctrlr_cell_renderer_component__WEBPACK_IMPORTED_MODULE_19__["CtrlrCellRendererComponent"]])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chart/chart.component.css":
  /*!*******************************************!*\
    !*** ./src/app/chart/chart.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppChartChartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/chart/chart.component.ts":
  /*!******************************************!*\
    !*** ./src/app/chart/chart.component.ts ***!
    \******************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChartComponent =
    /*#__PURE__*/
    function () {
      function ChartComponent() {
        _classCallCheck(this, ChartComponent);
      }

      _createClass(ChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartComponent;
    }();

    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chart/chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart.component.css */
      "./src/app/chart/chart.component.css")).default]
    })], ChartComponent);
    /***/
  },

  /***/
  "./src/app/charttest/charttest.component.css":
  /*!***************************************************!*\
    !*** ./src/app/charttest/charttest.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCharttestCharttestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0dGVzdC9jaGFydHRlc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charttest/charttest.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/charttest/charttest.component.ts ***!
    \**************************************************/

  /*! exports provided: CharttestComponent */

  /***/
  function srcAppCharttestCharttestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharttestComponent", function () {
      return CharttestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var CharttestComponent =
    /*#__PURE__*/
    function () {
      function CharttestComponent() {
        _classCallCheck(this, CharttestComponent);

        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__; // required

        this.chartConstructor = 'chart'; // optional string, defaults to 'chart'

        this.options = {
          chart: {
            pinchType: 'xy',
            zoomType: 'xy',
            animation: false
          },
          plotOptions: {
            line: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            enabled: false
          }
        };
        this.chartCallback = null; //function (chart) { } // optional function, defaults to null

        this.updateFlag = false; // optional boolean

        this.oneToOneFlag = false; // optional boolean, defaults to false

        this.runOutsideAngular = false; // optional boolean, defaults to false

        this.val = 0;
      }

      _createClass(CharttestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options.series = [];
          this.options.series = this.options.series.concat({
            data: [],
            type: 'line'
          });
          var Series;
          Series = this.options.series[0];

          for (var n = 0; n < 50000; n++) {
            this.val = this.val + (Math.random() * 10 - 5);
            Series.data = Series.data.concat(this.val);
          }

          this.updateFlag = true; // setInterval(() => {
          //   this.val = this.val + (Math.random() * 10 - 5);
          //   Series.data = Series.data.concat(this.val);
          //   this.updateFlag = true;
          // }, 25)
        }
      }]);

      return CharttestComponent;
    }();

    CharttestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charttest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./charttest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charttest/charttest.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./charttest.component.css */
      "./src/app/charttest/charttest.component.css")).default]
    })], CharttestComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrEditGridConfCtrlrEditGridComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmYtY3RybHItZWRpdC1ncmlkL2NvbmYtY3RybHItZWRpdC1ncmlkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.ts ***!
    \************************************************************************/

  /*! exports provided: ConfCtrlrEditGridComponent */

  /***/
  function srcAppConfCtrlrEditGridConfCtrlrEditGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfCtrlrEditGridComponent", function () {
      return ConfCtrlrEditGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utility */
    "./src/app/utility.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/button-renderer.component */
    "./src/app/services/button-renderer.component.ts");
    /* harmony import */


    var _services_ctrlr_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/ctrlr-cell-renderer.component */
    "./src/app/services/ctrlr-cell-renderer.component.ts");
    /* harmony import */


    var _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/model-ctrlr-conf */
    "./src/app/model/model-ctrlr-conf.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var open_plant_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! open-plant-ng */
    "./dist/open-plant-ng/fesm2015/open-plant-ng.js");

    var ConfCtrlrEditGridComponent =
    /*#__PURE__*/
    function () {
      function ConfCtrlrEditGridComponent(dataService) {
        _classCallCheck(this, ConfCtrlrEditGridComponent);

        this.dataService = dataService;
        this.msgBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.modelUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.columnDefs = [];
      }

      _createClass(ConfCtrlrEditGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.saveInitiated) {
            this.saveInitiated.subscribe(function (data) {
              var updatedCtrlrConfRows = [];

              var headers = _this3.ctrlrConfTab.getColHeaders();

              _this3.ctrlrConfRowVws.forEach(function (rowVw) {
                var cols = [];

                for (n = 0; n < headers.length; n++) {
                  cols = cols.concat(rowVw.getCtrlrConfRowCol(n));
                }

                var updatedCtrlrConfRow = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_5__["CtrlrConfRow"](rowVw.id, cols);
                updatedCtrlrConfRows = updatedCtrlrConfRows.concat(updatedCtrlrConfRow);
              });

              var updatedCtrlrConfTab = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_5__["CtrlrConfTab"](_this3.ctrlrConfTab.tabName, _this3.ctrlrConfTab.tabId, _this3.ctrlrConfTab.ctrlrTempl, updatedCtrlrConfRows);

              _this3.modelUpdated.emit(updatedCtrlrConfTab);
            });
          }

          this.columnDefs = [];
          var n = 0;
          this.ctrlrConfRowVws = this.ctrlrConfTab.getCtrlrConfRowVws();
          this.columnDefs = this.columnDefs.concat({
            headerName: '',
            cellRendererFramework: _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ButtonRendererComponent"],
            width: 30,
            cellStyle: {
              'display': 'flex',
              'align-items': 'center',
              'justify-content': 'center'
            },
            headerClass: "op-header-center",
            cellRendererParams: {
              onClick: this.deleteBtnClick.bind(this),
              label: '',
              isVisible: true,
              iconClass: 'fa fa-trash',
              btnClass: 'btn btn-outline-primary border-0 py-0 px-1 '
            }
          });
          this.ctrlrConfTab.getColHeaders().forEach(function (h) {
            var newCol = {
              headerName: _this3.ctrlrConfTab.getColHeadersDesc()[n],
              field: 'c' + n,
              resizable: true,
              cellRendererFramework: _services_ctrlr_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["CtrlrCellRendererComponent"],
              headerClass: "op-header-center",
              cellRendererParams: {
                onClick: _this3.onSelectOPTagClick.bind(_this3)
              },
              width: 245
            };

            switch (h) {
              case "Number":
                newCol.width = 60;
                break;
            }

            _this3.columnDefs = _this3.columnDefs.concat(newCol);
            n++;
          });
        }
      }, {
        key: "onSelectOPTagClick",
        value: function onSelectOPTagClick(params) {//console.log(params);
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.columnApi = params.columnApi;
        }
      }, {
        key: "newClick",
        value: function newClick() {
          var _this4 = this;

          this.msgBox.showTextInput("New " + this.ctrlrConfTab.tabName, "Tag Name: ", function (sel, tagName) {
            if (sel == open_plant_ng__WEBPACK_IMPORTED_MODULE_7__["Selected"].Ok) {
              var tabCtrlrTemplParams = _this4.ctrlrConfTab.ctrlrTempl.getParamsOfTabId(_this4.ctrlrConfTab.tabId);

              var newRowM = _utility__WEBPACK_IMPORTED_MODULE_1__["Utility"].generateNewCtrlrConfRow(_this4.ctrlrConfRowVws.length + 1, tagName, tabCtrlrTemplParams);

              var newRowVw = _this4.ctrlrConfTab.genCtrlrConfRowVw(newRowM);

              _this4.ctrlrConfRowVws = _this4.ctrlrConfRowVws.concat(newRowVw);
            } else {
              _this4.msgBox.hide();
            }
          });
        }
      }, {
        key: "deleteBtnClick",
        value: function deleteBtnClick(e) {
          var ctrlrConfRowVw = e.rowData;
          this.ctrlrConfRowVws = this.ctrlrConfRowVws.filter(function (r) {
            return r.id != ctrlrConfRowVw.id;
          });
        }
      }]);

      return ConfCtrlrEditGridComponent;
    }();

    ConfCtrlrEditGridComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])()], ConfCtrlrEditGridComponent.prototype, "ctrlrConfTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])()], ConfCtrlrEditGridComponent.prototype, "centreMsg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])()], ConfCtrlrEditGridComponent.prototype, "msgBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"])()], ConfCtrlrEditGridComponent.prototype, "msgBoxChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])()], ConfCtrlrEditGridComponent.prototype, "saveInitiated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"])()], ConfCtrlrEditGridComponent.prototype, "modelUpdated", void 0);
    ConfCtrlrEditGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-conf-ctrlr-edit-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conf-ctrlr-edit-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conf-ctrlr-edit-grid.component.css */
      "./src/app/conf-ctrlr-edit-grid/conf-ctrlr-edit-grid.component.css")).default]
    })], ConfCtrlrEditGridComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrEditNewConfCtrlrEditNewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmYtY3RybHItZWRpdC1uZXcvY29uZi1jdHJsci1lZGl0LW5ldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ConfCtrlrEditNewComponent */

  /***/
  function srcAppConfCtrlrEditNewConfCtrlrEditNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfCtrlrEditNewComponent", function () {
      return ConfCtrlrEditNewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/model-ctrlr-conf */
    "./src/app/model/model-ctrlr-conf.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfCtrlrEditNewComponent =
    /*#__PURE__*/
    function () {
      function ConfCtrlrEditNewComponent(router, dataService) {
        _classCallCheck(this, ConfCtrlrEditNewComponent);

        this.router = router;
        this.dataService = dataService;
        this.newCtrlrTagName = "";
        this.newCtrlTemplId = "";
      }

      _createClass(ConfCtrlrEditNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!_demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialize();
          this.ctrlrTempls = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].getCtrlrTempls();
          console.log(this.ctrlrTempls);
        }
      }, {
        key: "newNextClick",
        value: function newNextClick() {
          var _this5 = this;

          var newTempl = this.ctrlrTempls.find(function (cT) {
            return cT.id == _this5.newCtrlTemplId;
          });
          var temp = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_3__["CtrlrConf"](null, this.newCtrlrTagName, "", newTempl, null);
          _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs.concat(temp);
          this.router.navigateByUrl("/configure-controller/" + temp.ctrlrTagName);
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(param) {
          this.centreMsg = param;
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(param) {
          this.msgBox = param;
        }
      }]);

      return ConfCtrlrEditNewComponent;
    }();

    ConfCtrlrEditNewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    ConfCtrlrEditNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-conf-ctrlr-edit-new-ctrlr',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conf-ctrlr-edit-new.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conf-ctrlr-edit-new.component.css */
      "./src/app/conf-ctrlr-edit-new/conf-ctrlr-edit-new.component.css")).default]
    })], ConfCtrlrEditNewComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrEditConfCtrlrEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-tabs .nav-link {\r\n    border: 1px solid #e7e7e7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZi1jdHJsci1lZGl0L2NvbmYtY3RybHItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29uZi1jdHJsci1lZGl0L2NvbmYtY3RybHItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConfCtrlrEditComponent */

  /***/
  function srcAppConfCtrlrEditConfCtrlrEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfCtrlrEditComponent", function () {
      return ConfCtrlrEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/model-ctrlr-conf */
    "./src/app/model/model-ctrlr-conf.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ConfCtrlrEditComponent =
    /*#__PURE__*/
    function () {
      function ConfCtrlrEditComponent(route, dataService) {
        _classCallCheck(this, ConfCtrlrEditComponent);

        this.route = route;
        this.dataService = dataService;
        this.delCount = 0; //SAVE ****************************

        this.saveInitiated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // [saveInitiated]="saveInitiated" is set on every tab
      }

      _createClass(ConfCtrlrEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (!_demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialize();
          this.route.params.subscribe(function (params) {
            var ctrlrTagName = params.ctrlrTagName;

            var ctrlrConf = _this6.dataService.getCtrlrConf(ctrlrTagName);

            _this6.selCtrlrConf = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfVw"](ctrlrConf);
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {}
      }, {
        key: "onSaveCtrlrConf",
        value: function onSaveCtrlrConf() {
          console.log('Saving...');
          this.tabUpdated = 0;
          this.saveInitiated.emit(true); //Tell children to export the latest CtrlrConfTab model
        }
      }, {
        key: "onModelUpdated",
        value: function onModelUpdated(updatedCtrlrConfTab) {
          var _this7 = this;

          //console.log(updatedCtrlrConfTab);
          var tempTab = this.selCtrlrConf.ctrlrConfTabs.find(function (t) {
            return t.tabId == updatedCtrlrConfTab.tabId;
          });
          tempTab.rows = updatedCtrlrConfTab.rows;
          this.tabUpdated++;

          if (this.tabUpdated == 4) {
            this.centreMsg.showProcess('Saving...');
            setTimeout(function () {
              var ctrlrConfToSave = _this7.selCtrlrConf.toCtrlrConf();

              _this7.dataService.saveCtrlrConf(ctrlrConfToSave);

              _this7.centreMsg.showSuccess('Save success!', null, 500);

              console.log('Save Completed!');
            }, 250);
          }
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(param) {
          this.centreMsg = param;
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(param) {
          this.msgBox = param;
        }
      }]);

      return ConfCtrlrEditComponent;
    }();

    ConfCtrlrEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    ConfCtrlrEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-conf-ctrlr',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conf-ctrlr-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conf-ctrlr-edit.component.css */
      "./src/app/conf-ctrlr-edit/conf-ctrlr-edit.component.css")).default]
    })], ConfCtrlrEditComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-list/conf-ctrlr-list.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/conf-ctrlr-list/conf-ctrlr-list.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrListConfCtrlrListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmYtY3RybHItbGlzdC9jb25mLWN0cmxyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-list/conf-ctrlr-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/conf-ctrlr-list/conf-ctrlr-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConfCtrlrListComponent */

  /***/
  function srcAppConfCtrlrListConfCtrlrListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfCtrlrListComponent", function () {
      return ConfCtrlrListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_checkbox_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/checkbox-renderer.component */
    "./src/app/services/checkbox-renderer.component.ts");
    /* harmony import */


    var open_plant_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! open-plant-ng */
    "./dist/open-plant-ng/fesm2015/open-plant-ng.js");
    /* harmony import */


    var _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/button-renderer.component */
    "./src/app/services/button-renderer.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfCtrlrListComponent =
    /*#__PURE__*/
    function () {
      function ConfCtrlrListComponent(ngZone, router, dataService) {
        _classCallCheck(this, ConfCtrlrListComponent);

        this.ngZone = ngZone;
        this.router = router;
        this.dataService = dataService;
        this.delCount = 0;
        this.columnDefs = [{
          headerName: 'Tag Name',
          field: 'ctrlrTagName',
          resizable: true,
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 1
        }, {
          headerName: 'Description',
          field: 'description',
          resizable: true,
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 3
        }, {
          headerName: 'CVs',
          field: 'nCV',
          sortable: true,
          resizable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 1
        }, {
          headerName: 'MVs',
          field: 'nMV',
          sortable: true,
          resizable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 1
        }, {
          headerName: 'DVs',
          field: 'nDV',
          sortable: true,
          resizable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 1
        }, {
          headerName: 'Edit',
          cellRendererFramework: _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_5__["ButtonRendererComponent"],
          width: 60,
          cellStyle: {
            'display': 'flex',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            onClick: this.editBtnClick.bind(this),
            label: '',
            iconClass: 'fa fa-edit',
            btnClass: 'btn btn-outline-primary border-0 py-0 px-1 '
          }
        }, {
          headerName: 'Delete',
          field: 'delete',
          editable: false,
          width: 70,
          sortable: true,
          cellRendererFramework: _services_checkbox_renderer_component__WEBPACK_IMPORTED_MODULE_3__["CheckBoxRendererComponent"],
          cellStyle: {
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            checkBoxClass: 'big-checkbox',
            onChange: this.deleteCBClick.bind(this)
          }
        }];
      }

      _createClass(ConfCtrlrListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!_demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialize();
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          console.log('Loading...');
          this.centreMsg.showProcess('Loading...');
          this.ctrlrConfListVws = this.dataService.getCtrlrConfListVw(); //this.ctrlrTempls = this.dataService.getCtrlrTempls();

          this.centreMsg.stop();
        }
      }, {
        key: "editBtnClick",
        value: function editBtnClick(e) {
          var _this8 = this;

          var temp = e.rowData;
          this.ngZone.run(function () {
            return _this8.router.navigateByUrl("configure-controller/" + temp.ctrlrTagName);
          }).then(); //this.router.navigateByUrl("configure-controller/" + temp.ctrlrTagName)
        }
      }, {
        key: "deleteCBClick",
        value: function deleteCBClick(e) {
          this.deleteCountUpdate();
        }
      }, {
        key: "deleteCountUpdate",
        value: function deleteCountUpdate() {
          var delC = 0;
          this.ctrlrConfListVws.forEach(function (e) {
            if (e.delete) delC++;
          });
          this.delCount = delC;
        }
      }, {
        key: "deleteBtnClick",
        value: function deleteBtnClick(e) {
          var _this9 = this;

          this.msgBox.showYesNo('Delete ' + this.delCount + ' controller(s)?', function (selected) {
            if (selected == open_plant_ng__WEBPACK_IMPORTED_MODULE_4__["Selected"].Yes) {
              var ctrlrIdsToDel = [];

              _this9.ctrlrConfListVws.forEach(function (c) {
                if (c.delete) {
                  ctrlrIdsToDel = ctrlrIdsToDel.concat(c.id);
                }

                ;
              });

              _this9.centreMsg.showProcess('Deleting ' + _this9.delCount + ' controller(s)...');

              setTimeout(function () {
                _this9.dataService.deleteCtrlrConf(ctrlrIdsToDel);

                ctrlrIdsToDel.forEach(function (e) {
                  return _this9.ctrlrConfListVws = _this9.ctrlrConfListVws.filter(function (i) {
                    return i.id != e;
                  });
                });

                _this9.deleteCountUpdate();

                _this9.centreMsg.stop();
              }, 500);
            }
          });
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(param) {
          this.centreMsg = param;
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(param) {
          this.msgBox = param;
        }
      }]);

      return ConfCtrlrListComponent;
    }();

    ConfCtrlrListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    ConfCtrlrListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'app-conf-ctrlr-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conf-ctrlr-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-list/conf-ctrlr-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conf-ctrlr-list.component.css */
      "./src/app/conf-ctrlr-list/conf-ctrlr-list.component.css")).default]
    })], ConfCtrlrListComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrTemplConfCtrlrTemplComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmYtY3RybHItdGVtcGwvY29uZi1jdHJsci10ZW1wbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.ts ***!
    \****************************************************************/

  /*! exports provided: ConfCtrlrTemplComponent */

  /***/
  function srcAppConfCtrlrTemplConfCtrlrTemplComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfCtrlrTemplComponent", function () {
      return ConfCtrlrTemplComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utility */
    "./src/app/utility.ts");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/button-renderer.component */
    "./src/app/services/button-renderer.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var open_plant_ng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! open-plant-ng */
    "./dist/open-plant-ng/fesm2015/open-plant-ng.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfCtrlrTemplComponent =
    /*#__PURE__*/
    function () {
      function ConfCtrlrTemplComponent(dataService) {
        _classCallCheck(this, ConfCtrlrTemplComponent);

        this.dataService = dataService;
        this.ctrlrTempls = [];
        this.selCtrlrTempl = null;
        this.editOrNew = "Edit";
        this.columnDefs = [{
          headerName: 'Controller Template',
          field: 'name',
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 1
        }, {
          headerName: 'Edit',
          cellRendererFramework: _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ButtonRendererComponent"],
          width: 60,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            onClick: this.editBtnClick.bind(this),
            label: '',
            iconClass: 'fa fa-edit',
            btnClass: 'btn btn-outline-primary border-0 py-0 px-1 '
          }
        }, {
          headerName: 'Delete',
          cellRendererFramework: _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ButtonRendererComponent"],
          width: 60,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            onClick: this.deleteBtnClick.bind(this),
            label: '',
            iconClass: 'fa fa-trash',
            btnClass: 'btn btn-outline-primary border-0 py-0 px-1 '
          }
        }];
      }

      _createClass(ConfCtrlrTemplComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!_demo__WEBPACK_IMPORTED_MODULE_2__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_2__["DemoData"].initialize();
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.centreMsg.showProcess('Loading...');
          this.ctrlrTempls = this.dataService.getCtrlrTempls();
          this.centreMsg.stop();
        }
      }, {
        key: "editBtnClick",
        value: function editBtnClick(e) {
          this.selCtrlrTempl = e.rowData;
          this.editOrNew = "Edit"; //this.showEdit = true;
        }
      }, {
        key: "deleteBtnClick",
        value: function deleteBtnClick(e) {
          var _this10 = this;

          var ctrlrTempl = e.rowData;
          this.msgBox.showYesNo('Delete \'' + ctrlrTempl.name + '\' Template?', function (selected) {
            if (selected == open_plant_ng__WEBPACK_IMPORTED_MODULE_5__["Selected"].Yes) {
              _this10.centreMsg.showProcess('Deleting \'' + ctrlrTempl.name + '\' Template...');

              setTimeout(function () {
                _this10.dataService.deleteCtrlrTempl(ctrlrTempl.id);

                _this10.ctrlrTempls = _this10.ctrlrTempls.filter(function (i) {
                  return i.id !== ctrlrTempl.id;
                });

                _this10.centreMsg.stop();
              }, 500);
            }
          });
        }
      }, {
        key: "newTemplClick",
        value: function newTemplClick() {
          this.editOrNew = "New";
          this.selCtrlrTempl = _utility__WEBPACK_IMPORTED_MODULE_1__["Utility"].createBasicCtrlrTempl(); //this.showEdit = true;
        }
      }, {
        key: "backClick",
        value: function backClick() {
          this.selCtrlrTempl = null;
          this.centreMsg.showProcess('Loading...');
          this.ctrlrTempls = this.dataService.getCtrlrTempls();
          this.centreMsg.stop();
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(param) {
          this.centreMsg = param;
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(param) {
          this.msgBox = param;
        }
      }]);

      return ConfCtrlrTemplComponent;
    }();

    ConfCtrlrTemplComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    ConfCtrlrTemplComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-conf-ctrlr-templ',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conf-ctrlr-templ.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conf-ctrlr-templ.component.css */
      "./src/app/conf-ctrlr-templ/conf-ctrlr-templ.component.css")).default]
    })], ConfCtrlrTemplComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrTemplTabgridTabgridComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-tabs .nav-link {\r\n    border: 1px solid #e7e7e7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZi1jdHJsci10ZW1wbC90YWJncmlkL3RhYmdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbmYtY3RybHItdGVtcGwvdGFiZ3JpZC90YWJncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.ts ***!
    \***************************************************************/

  /*! exports provided: TabgridComponent */

  /***/
  function srcAppConfCtrlrTemplTabgridTabgridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabgridComponent", function () {
      return TabgridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../model/model-ctrlr-templ */
    "./src/app/model/model-ctrlr-templ.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabgridComponent =
    /*#__PURE__*/
    function () {
      function TabgridComponent(dataService) {
        _classCallCheck(this, TabgridComponent);

        this.dataService = dataService;
        this.showCP = false;
      }

      _createClass(TabgridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ctrlrTemplVw = this.ctrlrTempl.genCtrlrTemplConfVw();
          if (this.ctrlrTemplVw.mappings.length > 0) this.selectedMapping = this.ctrlrTemplVw.mappings[0];else this.selectedMapping = null;
        }
      }, {
        key: "evalMappingDisabled",
        value: function evalMappingDisabled() {
          return this.selectedMapping == null || !this.selectedMapping.canDelete;
        }
      }, {
        key: "evaluateActiveMapping",
        value: function evaluateActiveMapping(mapping) {
          if (this.selectedMapping == null) return false;
          return this.selectedMapping.id == mapping.id;
        }
      }, {
        key: "newMapping",
        value: function newMapping() {
          var newMapping = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["Mapping"](null, "New Mapping " + (this.ctrlrTemplVw.mappings.length + 1), [], true);
          this.ctrlrTemplVw.mappings = this.ctrlrTemplVw.mappings.concat(newMapping);
          this.selectedMapping = newMapping;
        }
      }, {
        key: "deleteMapping",
        value: function deleteMapping() {
          var _this11 = this;

          this.ctrlrTemplVw.mappings = this.ctrlrTemplVw.mappings.filter(function (m) {
            return m.id != _this11.selectedMapping.id;
          });
          this.selectedMapping = null;
        }
      }, {
        key: "newMapPair",
        value: function newMapPair() {
          this.selectedMapping.mapPairs = this.selectedMapping.mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](this.selectedMapping.mapPairs.length, "", ""));
        }
      }, {
        key: "deleteMapPair",
        value: function deleteMapPair(mapPair) {
          this.selectedMapping.mapPairs = this.selectedMapping.mapPairs.filter(function (mp) {
            return mp.text != mapPair.text;
          });
        }
      }, {
        key: "saveAllClick",
        value: function saveAllClick() {
          var _this12 = this;

          this.centreMsg.showProcess("Saving...");
          setTimeout(function () {
            var ctrlrTempl = _this12.ctrlrTemplVw.toCtrlrTempl();

            _this12.dataService.saveCtrlrTempl(ctrlrTempl);

            console.log(_demo__WEBPACK_IMPORTED_MODULE_2__["DemoData"].ctrlrTempls[0]);

            _this12.centreMsg.stop();
          }, 500);
        }
      }, {
        key: "colorChanged",
        value: function colorChanged(event, mapPair) {
          this.selectedColor = event.color.hex;
        }
      }, {
        key: "showColorPicker",
        value: function showColorPicker(mapPair) {
          mapPair.showCP = true;
          this.shownMapPair = mapPair;
        }
      }, {
        key: "okCPClick",
        value: function okCPClick(mapPair) {
          mapPair.colorHex = this.selectedColor;
          mapPair.showCP = false;
        }
      }, {
        key: "cancelCPClick",
        value: function cancelCPClick(mapPair) {
          mapPair.showCP = false;
          this.shownMapPair = null;
        }
      }, {
        key: "onInputKeyDown",
        value: function onInputKeyDown(event, mapPair) {
          //if (event.key == "Enter") this.onInputTextOKClick();
          //console.log(mapPair);
          if (event.key == "Escape") this.cancelCPClick(mapPair);
        }
      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          if (this.shownMapPair != null) {
            if (event.key == "Escape") this.cancelCPClick(this.shownMapPair);
          }
        }
      }]);

      return TabgridComponent;
    }();

    TabgridComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], TabgridComponent.prototype, "ctrlrTempl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], TabgridComponent.prototype, "centreMsg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], TabgridComponent.prototype, "msgBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('document:keydown.escape', ['$event'])], TabgridComponent.prototype, "handleKeyboardEvent", null);
    TabgridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-tabgrid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabgrid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabgrid.component.css */
      "./src/app/conf-ctrlr-templ/tabgrid/tabgrid.component.css")).default]
    })], TabgridComponent);
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfCtrlrTemplTabgrid2Tabgrid2ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-tabs .nav-link {\r\n    border: 1px solid #e7e7e7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZi1jdHJsci10ZW1wbC90YWJncmlkMi90YWJncmlkMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29uZi1jdHJsci10ZW1wbC90YWJncmlkMi90YWJncmlkMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.ts ***!
    \*****************************************************************/

  /*! exports provided: Tabgrid2Component */

  /***/
  function srcAppConfCtrlrTemplTabgrid2Tabgrid2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabgrid2Component", function () {
      return Tabgrid2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../model/enums */
    "./src/app/model/enums.ts");
    /* harmony import */


    var _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/enum-kvp-renderer.component */
    "./src/app/services/enum-kvp-renderer.component.ts");
    /* harmony import */


    var _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/enum-renderer.component */
    "./src/app/services/enum-renderer.component.ts");
    /* harmony import */


    var _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/model-ctrlr-templ */
    "./src/app/model/model-ctrlr-templ.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/button-renderer.component */
    "./src/app/services/button-renderer.component.ts");

    var Tabgrid2Component =
    /*#__PURE__*/
    function () {
      function Tabgrid2Component() {
        _classCallCheck(this, Tabgrid2Component);

        this.ctrlrTemplTabVwChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.columnDefs = [];
        this.pTemplBef = [];
        this.gridOptions = {
          suppressScrollOnNewData: true
        };
      }

      _createClass(Tabgrid2Component, [{
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.ctrlrTemplTabVw.params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var obj = _step.value;
              this.pTemplBef = this.pTemplBef.concat(obj);
              obj.viewHeader;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var mappingKVPs = [];
          mappingKVPs = mappingKVPs.concat(new _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_2__["EnumKVP"](null, "No Mapping"));
          this.ctrlrTemplTabVw.ctrlrTempl.mappings.forEach(function (m) {
            return mappingKVPs = mappingKVPs.concat(new _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_2__["EnumKVP"](m.id, m.name));
          });
          this.columnDefs = [{
            headerName: 'Parameter',
            field: 'name',
            resizable: true,
            editable: function editable(e) {
              return e.data.canEditTempl;
            },
            cellStyle: {
              'display': 'flex',
              'align-items': 'center'
            },
            flex: 1
          }, {
            headerName: 'Description',
            field: 'desc',
            editable: function editable(e) {
              return e.data.canEditTempl;
            },
            cellStyle: {
              'display': 'flex',
              'align-items': 'center'
            },
            flex: 1
          }, {
            headerName: 'Data Type',
            cellStyle: {
              'display': 'flex',
              'align-items': 'center',
              'justify-content': 'center'
            },
            headerClass: "op-header-center",
            field: "dType",
            width: 100,
            cellRendererFramework: _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_3__["EnumRenderer"],
            cellRendererParams: {
              enumVals: ["Number", "Text", "Boolean"],
              isVisible: function isVisible(e) {
                return true;
              },
              disabled: function disabled(e) {
                return !e.canEditTempl;
              }
            }
          }, {
            headerName: 'Number Format',
            cellStyle: {
              'display': 'flex',
              'align-items': 'center',
              'justify-content': 'center'
            },
            headerClass: "op-header-center",
            field: "numberFormat",
            width: 130,
            cellRendererFramework: _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_3__["EnumRenderer"],
            cellRendererParams: {
              enumVals: ["None", "TwoDecimals", "Percentage"],
              isVisible: function isVisible(e) {
                return true;
              },
              disabled: function disabled(e) {
                return !e.canEditTempl;
              }
            }
          }, {
            headerName: 'Mapping',
            cellStyle: {
              'display': 'flex',
              'align-items': 'center',
              'justify-content': 'center'
            },
            headerClass: "op-header-center",
            field: "mapping",
            width: 120,
            cellRendererFramework: _services_enum_kvp_renderer_component__WEBPACK_IMPORTED_MODULE_2__["EnumKVPRenderer"],
            cellRendererParams: {
              enumKVPs: mappingKVPs,
              isVisible: function isVisible(e) {
                return true;
              },
              disabled: function disabled(e) {
                return !e.canEditTempl;
              }
            }
          }, {
            headerName: 'KPI Group',
            hide: !this.ctrlrTemplTabVw.showKPIGroup,
            cellStyle: {
              'display': 'flex',
              'align-items': 'center',
              'justify-content': 'center'
            },
            headerClass: "op-header-center",
            field: "kPIGroup",
            width: 100,
            cellRendererFramework: _services_enum_renderer_component__WEBPACK_IMPORTED_MODULE_3__["EnumRenderer"],
            cellRendererParams: {
              enumVals: ["Performance", "Optimization", "Control", "Process"],
              isVisible: function isVisible(e) {
                return e.canEditTempl;
              }
            }
          }, {
            headerName: 'View Header Name',
            field: 'viewHeader',
            editable: true,
            cellStyle: {
              'display': 'flex',
              'align-items': 'center'
            },
            flex: 1
          }, {
            headerName: 'View Header Group',
            field: 'viewHeaderGr',
            editable: true,
            cellStyle: {
              'display': 'flex',
              'align-items': 'center'
            },
            flex: 1
          }, {
            headerName: 'Delete',
            cellRendererFramework: _services_button_renderer_component__WEBPACK_IMPORTED_MODULE_6__["ButtonRendererComponent"],
            width: 60,
            cellStyle: {
              'display': 'flex',
              'align-items': 'center',
              'justify-content': 'center'
            },
            headerClass: "op-header-center",
            cellRendererParams: {
              onClick: this.deleteBtnClick.bind(this),
              label: '',
              isVisible: function isVisible(e) {
                return e.canEditTempl;
              },
              iconClass: 'fa fa-trash',
              btnClass: 'btn btn-outline-primary border-0 py-0 px-1 '
            }
          }];
        }
      }, {
        key: "deleteBtnClick",
        value: function deleteBtnClick(e) {
          var ctrlrTemplParam = e.rowData;
          this.ctrlrTemplTabVw.params = this.ctrlrTemplTabVw.params.filter(function (i) {
            return i.name != ctrlrTemplParam.name;
          });
        }
      }, {
        key: "undoClick",
        value: function undoClick() {
          this.ctrlrTemplTabVw.params = this.ctrlrTemplTabVw.params.slice(0, 0);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.pTemplBef[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var obj = _step2.value;
              this.ctrlrTemplTabVw.params = this.ctrlrTemplTabVw.params.concat(obj);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "handleRowDataChanged",
        value: function handleRowDataChanged(event) {
          var index = this.ctrlrTemplTabVw.params.length - 1;
          this.gridOptions.api.ensureIndexVisible(index, 'bottom');
        }
      }, {
        key: "newClick",
        value: function newClick() {
          this.ctrlrTemplTabVw.params = this.ctrlrTemplTabVw.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("NewParameter" + (this.ctrlrTemplTabVw.params.length + 1), "New Parameter" + (this.ctrlrTemplTabVw.params.length + 1), _model_enums__WEBPACK_IMPORTED_MODULE_1__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_1__["KPIGroup"].NA, this.ctrlrTemplTabVw.ctrlrTemplTabId, true, "", null, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].TwoDecimals)); //this.gridApi.setFocusedCell(this.ctrlrTemplTabVw.params.length, 0, null);
        }
      }]);

      return Tabgrid2Component;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])()], Tabgrid2Component.prototype, "ctrlrTemplTabVw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])()], Tabgrid2Component.prototype, "ctrlrTemplTabVwChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])()], Tabgrid2Component.prototype, "centreMsg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])()], Tabgrid2Component.prototype, "msgBox", void 0);
    Tabgrid2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-tabgrid2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabgrid2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabgrid2.component.css */
      "./src/app/conf-ctrlr-templ/tabgrid2/tabgrid2.component.css")).default]
    })], Tabgrid2Component);
    /***/
  },

  /***/
  "./src/app/ctrlr-matrix/ctrlr-matrix.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/ctrlr-matrix/ctrlr-matrix.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCtrlrMatrixCtrlrMatrixComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matrixtablecontainer {\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    table-layout: fixed;\r\n}\r\n\r\ntable,td,th {\r\n    border: 1.5px solid #BDC3C7;\r\n    text-align: center;    \r\n}\r\n\r\nth {\r\n    background-color: #F5F7F7;\r\n    font-weight: 600;\r\n}\r\n\r\n.ag-theme-balham {\r\n    color: #838383;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n}\r\n\r\ntbody {\r\n    font-weight: 400;\r\n}\r\n\r\n.numb-cell {\r\n    background: #E9ECEF;\r\n}\r\n\r\n.highlight {\r\n    background: #ffffeb;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3RybHItbWF0cml4L2N0cmxyLW1hdHJpeC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2N0cmxyLW1hdHJpeC9jdHJsci1tYXRyaXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRyaXh0YWJsZWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxudGFibGUsdGQsdGgge1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjQkRDM0M3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG50aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGN0Y3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFnLXRoZW1lLWJhbGhhbSB7XHJcbiAgICBjb2xvcjogIzgzODM4MztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5udW1iLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZDogI0U5RUNFRjtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmViO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ctrlr-matrix/ctrlr-matrix.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ctrlr-matrix/ctrlr-matrix.component.ts ***!
    \********************************************************/

  /*! exports provided: CtrlrMatrixComponent */

  /***/
  function srcAppCtrlrMatrixCtrlrMatrixComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrMatrixComponent", function () {
      return CtrlrMatrixComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/enums */
    "./src/app/model/enums.ts");

    var CtrlrMatrixComponent =
    /*#__PURE__*/
    function () {
      function CtrlrMatrixComponent(cdr) {
        _classCallCheck(this, CtrlrMatrixComponent);

        this.cdr = cdr;
        this.ctrlrMatrixVwChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CtrlrMatrixCellType = _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrMatrixCellType"];
      }

      _createClass(CtrlrMatrixComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cdr.detectChanges();
        }
      }, {
        key: "cellClick",
        value: function cellClick(cell, row) {
          var _this13 = this;

          if (this.editable == false) return;
          this.ctrlrMatrixVw.rows.forEach(function (r) {
            return r.cells.forEach(function (c) {
              return c.editMode = false;
            });
          });
          cell.editMode = true;
          cell.prevValue = cell.value;
          setTimeout(function () {
            if (_this13.cellMatrix != null) _this13.cellMatrix.nativeElement.focus();
          }, 0);
        }
      }, {
        key: "enterKeyPress",
        value: function enterKeyPress(cell) {
          cell.editMode = false;
        }
      }, {
        key: "escapeKeyPress",
        value: function escapeKeyPress(cell) {
          cell.value = cell.prevValue;
          cell.editMode = false;
        }
      }, {
        key: "onFocusOut",
        value: function onFocusOut(cell) {
          cell.editMode = false;
        }
      }, {
        key: "cellMouseEnter",
        value: function cellMouseEnter(r, c) {
          this.rowSel = r;
          this.colSel = c;
        }
      }, {
        key: "cellMouseLeave",
        value: function cellMouseLeave() {
          this.rowSel = -1;
          this.colSel = -1;
        }
      }]);

      return CtrlrMatrixComponent;
    }();

    CtrlrMatrixComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CtrlrMatrixComponent.prototype, "ctrlrMatrixVw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CtrlrMatrixComponent.prototype, "ctrlrMatrixVwChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cellMatrix', {
      static: false
    })], CtrlrMatrixComponent.prototype, "cellMatrix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CtrlrMatrixComponent.prototype, "editable", void 0);
    CtrlrMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ctrlr-matrix',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ctrlr-matrix.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-matrix/ctrlr-matrix.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ctrlr-matrix.component.css */
      "./src/app/ctrlr-matrix/ctrlr-matrix.component.css")).default]
    })], CtrlrMatrixComponent);
    /***/
  },

  /***/
  "./src/app/ctrlr-top-strip/ctrlr-top-strip.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/ctrlr-top-strip/ctrlr-top-strip.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCtrlrTopStripCtrlrTopStripComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ctstext {\r\n    color: #2a4c68;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3RybHItdG9wLXN0cmlwL2N0cmxyLXRvcC1zdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2N0cmxyLXRvcC1zdHJpcC9jdHJsci10b3Atc3RyaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdHN0ZXh0IHtcclxuICAgIGNvbG9yOiAjMmE0YzY4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ctrlr-top-strip/ctrlr-top-strip.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ctrlr-top-strip/ctrlr-top-strip.component.ts ***!
    \**************************************************************/

  /*! exports provided: CtrlrTopStripComponent */

  /***/
  function srcAppCtrlrTopStripCtrlrTopStripComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrTopStripComponent", function () {
      return CtrlrTopStripComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CtrlrTopStripComponent =
    /*#__PURE__*/
    function () {
      function CtrlrTopStripComponent(cdr) {
        _classCallCheck(this, CtrlrTopStripComponent);

        this.cdr = cdr;
      }

      _createClass(CtrlrTopStripComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cdr.detectChanges();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CtrlrTopStripComponent;
    }();

    CtrlrTopStripComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CtrlrTopStripComponent.prototype, "ctrlrTopStripVw", void 0);
    CtrlrTopStripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ctrlr-top-strip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ctrlr-top-strip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-top-strip/ctrlr-top-strip.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ctrlr-top-strip.component.css */
      "./src/app/ctrlr-top-strip/ctrlr-top-strip.component.css")).default]
    })], CtrlrTopStripComponent);
    /***/
  },

  /***/
  "./src/app/ctrlr-xv-table/ctrlr-xv-table.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/ctrlr-xv-table/ctrlr-xv-table.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCtrlrXvTableCtrlrXvTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n    border-collapse: collapse;\r\n}\r\ntable,td,th {\r\n    border: 1.5px solid #BDC3C7;\r\n}\r\nth {\r\n    background-color: #F5F7F7;\r\n    font-weight: 600;\r\n    text-align: center;    \r\n}\r\n.ag-theme-balham {\r\n    color: #838383;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n}\r\ntbody {\r\n    font-weight: 400;\r\n}\r\n.xvtablecontainer {\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3RybHIteHYtdGFibGUvY3RybHIteHYtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jdHJsci14di10YWJsZS9jdHJsci14di10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50YWJsZSx0ZCx0aCB7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNCREMzQzc7XHJcbn1cclxudGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjdGNztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcblxyXG4uYWctdGhlbWUtYmFsaGFtIHtcclxuICAgIGNvbG9yOiAjODM4MzgzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ueHZ0YWJsZWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ctrlr-xv-table/ctrlr-xv-table.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ctrlr-xv-table/ctrlr-xv-table.component.ts ***!
    \************************************************************/

  /*! exports provided: CtrlrXvTableComponent */

  /***/
  function srcAppCtrlrXvTableCtrlrXvTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrXvTableComponent", function () {
      return CtrlrXvTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CtrlrXvTableComponent =
    /*#__PURE__*/
    function () {
      function CtrlrXvTableComponent(cdr) {
        _classCallCheck(this, CtrlrXvTableComponent);

        this.cdr = cdr;
      }

      _createClass(CtrlrXvTableComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          //this.ctrlrXVKPIVw.headerBotRow[0]
          this.cdr.detectChanges();
        }
      }]);

      return CtrlrXvTableComponent;
    }();

    CtrlrXvTableComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CtrlrXvTableComponent.prototype, "ctrlrXVKPIVw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CtrlrXvTableComponent.prototype, "xVType", void 0);
    CtrlrXvTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ctrlr-xv-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ctrlr-xv-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-xv-table/ctrlr-xv-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ctrlr-xv-table.component.css */
      "./src/app/ctrlr-xv-table/ctrlr-xv-table.component.css")).default]
    })], CtrlrXvTableComponent);
    /***/
  },

  /***/
  "./src/app/ctrlr-xv/ctrlr-xv.component.css":
  /*!*************************************************!*\
    !*** ./src/app/ctrlr-xv/ctrlr-xv.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCtrlrXvCtrlrXvComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N0cmxyLXh2L2N0cmxyLXh2LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ctrlr-xv/ctrlr-xv.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ctrlr-xv/ctrlr-xv.component.ts ***!
    \************************************************/

  /*! exports provided: CtrlrXvComponent */

  /***/
  function srcAppCtrlrXvCtrlrXvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrXvComponent", function () {
      return CtrlrXvComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../global */
    "./src/app/global.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../model/enums */
    "./src/app/model/enums.ts");
    /* harmony import */


    var _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../model/model-ctrlr */
    "./src/app/model/model-ctrlr.ts");

    var CtrlrXvComponent =
    /*#__PURE__*/
    function () {
      function CtrlrXvComponent(route, dataService, router, cdr) {
        _classCallCheck(this, CtrlrXvComponent);

        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.cdr = cdr;
      }

      _createClass(CtrlrXvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.params.subscribe(function (params) {
            _this14.ctrlrTagName = params.ctrlrTagName;
            if (params.ctrlrVarTypeStr == "cv") _this14.ctrlrVarType = _model_enums__WEBPACK_IMPORTED_MODULE_6__["CtrlrVarType"].CV;
            if (params.ctrlrVarTypeStr == "mv") _this14.ctrlrVarType = _model_enums__WEBPACK_IMPORTED_MODULE_6__["CtrlrVarType"].MV;
            if (params.ctrlrVarTypeStr == "dv") _this14.ctrlrVarType = _model_enums__WEBPACK_IMPORTED_MODULE_6__["CtrlrVarType"].DV;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cdr.detectChanges();
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(cMObj) {
          var _this15 = this;

          this.centreMsg = cMObj;
          this.centreMsg.showProcess('Loading...'); //DEMO DATA GENERATE
          //await Global.delay(500);

          this.ctrlrConf = this.dataService.getCtrlrConf(this.ctrlrTagName); //TRANSFORM CtrlrConf INTO VIEW MODEL CtrlrXVVw WHILE BUILDING THE DATA FETCH (OPFETCH)

          var prevHeaderCell = null;
          this.ctrlrXVKPIVws = [];
          this.oPFetch = new _global__WEBPACK_IMPORTED_MODULE_2__["OPFetch"](); //BUILD TOP STRIP FOR MODE, STATUS AND BENEFIT

          this.ctrlrTopStripVw = this.ctrlrConf.getCtrlrTopStripVw();
          this.ctrlrTopStripVw.fetchItems.forEach(function (fi) {
            return _this15.oPFetch.add(fi.tagId, fi.propName, fi.fetchOnce);
          }); //BUILD ctrlrXVVws - Go through KPIGroup (Summary, Performance, Optimization, Tuning, Process)

          var _loop = function _loop(item) {
            if (!isNaN(Number(item)) || item == "NA") return "continue"; //Ignore KPIGroup.NA     
            //check how many properties are in the KPI Group, if there is none, return.   

            var nProp = 0;

            _this15.ctrlrConf.ctrlrTempl.params.forEach(function (p) {
              if (p.ctrlrTemplTabId != _this15.ctrlrVarType) return;
              if (p.kPIGroup != Number(_model_enums__WEBPACK_IMPORTED_MODULE_6__["KPIGroup"][item])) return;
              if (p.name == "Number" || p.name == "Description") return;
              nProp++;
            });

            if (nProp == 0) return "continue";
            var fetchOnce = item != "Summary";
            var headerTopRow = [];
            var headerBotRow = [];

            var numberTempl = _this15.ctrlrConf.ctrlrTempl.params.find(function (p) {
              return p.name == "Number";
            });

            headerTopRow = headerTopRow.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["HeaderCell"](2, 1, numberTempl.viewHeader));

            var descTempl = _this15.ctrlrConf.ctrlrTempl.params.find(function (p) {
              return p.name == "Description";
            });

            headerTopRow = headerTopRow.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["HeaderCell"](2, 1, descTempl.viewHeader));

            _this15.ctrlrConf.ctrlrTempl.params.forEach(function (p) {
              if (p.kPIGroup == Number(_model_enums__WEBPACK_IMPORTED_MODULE_6__["KPIGroup"][item]) && p.ctrlrTemplTabId == _this15.ctrlrVarType) {
                //Find params that matches an xVType and KPIGroup
                if (p.name == "Number" || p.name == "Description") return; //don't process Number and Description cause it is added
                //BUILD HEADER

                if (p.viewHeaderGr == null) {
                  headerTopRow = headerTopRow.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["HeaderCell"](2, 1, p.viewHeader));
                } else {
                  if (prevHeaderCell == null || prevHeaderCell.header != p.viewHeaderGr) {
                    prevHeaderCell = new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["HeaderCell"](1, 1, p.viewHeaderGr);
                    headerTopRow = headerTopRow.concat(prevHeaderCell);
                  } else prevHeaderCell.colSpan++;

                  headerBotRow = headerBotRow.concat(p.viewHeader.replace(" ", "\n"));
                }
              }
            });

            var tabLabel = _model_enums__WEBPACK_IMPORTED_MODULE_6__["CtrlrVarType"][_this15.ctrlrVarType] + " " + item;
            var name = _model_enums__WEBPACK_IMPORTED_MODULE_6__["CtrlrVarType"][_this15.ctrlrVarType] + item; //BUILD DATA ROWS AND OP FETCH   

            var dataRows = [];

            var ctrlrConfTab = _this15.ctrlrConf.ctrlrConfTabs.find(function (t) {
              return t.tabId == _this15.ctrlrVarType;
            });

            ctrlrConfTab.rows.forEach(function (r, ri) {
              var dataCells = [];
              var numberParam = r.cols.find(function (c) {
                return c.ctrlrTemplParam.name == "Number";
              });
              dataCells = dataCells.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["DataCell"](numberParam.value, null, null, numberParam.ctrlrTemplParam));
              var descParam = r.cols.find(function (c) {
                return c.ctrlrTemplParam.name == "Description";
              });
              dataCells = dataCells.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["DataCell"](descParam.value, null, null, descParam.ctrlrTemplParam));
              r.cols.forEach(function (c, ci) {
                if (c.ctrlrTemplParam.kPIGroup == Number(_model_enums__WEBPACK_IMPORTED_MODULE_6__["KPIGroup"][item])) {
                  if (c.ctrlrTemplParam.name == "Number" || c.ctrlrTemplParam.name == "Description") return;

                  if (c.isOPTag) {
                    _this15.oPFetch.add(c.value, c.ctrlrTemplParam.name, fetchOnce);

                    dataCells = dataCells.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["DataCell"](null, c.value, null, c.ctrlrTemplParam));
                  } else dataCells = dataCells.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["DataCell"](null, c.value, null, c.ctrlrTemplParam));
                }
              });
              dataRows = dataRows.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["DataRow"](dataCells));
            });
            _this15.ctrlrXVKPIVws = _this15.ctrlrXVKPIVws.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_7__["CtrlrXVKPIVw"](name, tabLabel, _this15.ctrlrVarType, headerTopRow, headerBotRow, dataRows));
          };

          for (var item in _model_enums__WEBPACK_IMPORTED_MODULE_6__["KPIGroup"]) {
            var _ret = _loop(item);

            if (_ret === "continue") continue;
          } //REFRESH THE DEMO DATA


          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 2000);
          source.subscribe(function (val) {
            _this15.oPFetch.refresh(); //Update the Top Strip


            var ctrlrStatusN = _this15.oPFetch.getResultByProp("Status");

            if (_this15.ctrlrTopStripVw.statusMapping != null) {
              _this15.ctrlrTopStripVw.status = _this15.ctrlrTopStripVw.statusMapping.getValueText(ctrlrStatusN);
              _this15.ctrlrTopStripVw.statusColor = _this15.ctrlrTopStripVw.statusMapping.getValueColor(ctrlrStatusN);
            } else _this15.ctrlrTopStripVw.status = ctrlrStatusN.toString();

            var ctrlrModeN = _this15.oPFetch.getResultByProp("Mode");

            if (_this15.ctrlrTopStripVw.modeMapping != null) {
              _this15.ctrlrTopStripVw.mode = _this15.ctrlrTopStripVw.modeMapping.getValueText(ctrlrModeN);
              _this15.ctrlrTopStripVw.modeColor = _this15.ctrlrTopStripVw.modeMapping.getValueColor(ctrlrModeN);
            } else _this15.ctrlrTopStripVw.mode = ctrlrModeN.toString();

            _this15.ctrlrTopStripVw.benefitN = _this15.oPFetch.getResultByProp("Benefit");
            _this15.ctrlrTopStripVw.benefitColor = "#28a745"; //Update the Tab Tables

            _this15.ctrlrXVKPIVws.forEach(function (ctrlrXVKPIVw) {
              var Temp = ctrlrXVKPIVw;
              Temp.dataRows.forEach(function (dataRow) {
                dataRow.dataCells.forEach(function (dataCell) {
                  if (dataCell.tagId != null) dataCell.setValue(_this15.oPFetch.getResult(dataCell.tagId));
                });
              });
            });
          });
          this.centreMsg.stop();
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(mBObj) {
          this.msgBox = mBObj;
        }
      }]);

      return CtrlrXvComponent;
    }();

    CtrlrXvComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    CtrlrXvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-ctrlr-xv',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ctrlr-xv.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr-xv/ctrlr-xv.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ctrlr-xv.component.css */
      "./src/app/ctrlr-xv/ctrlr-xv.component.css")).default]
    })], CtrlrXvComponent);

    function delay(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
    /***/

  },

  /***/
  "./src/app/ctrlr/ctrlr.component.css":
  /*!*******************************************!*\
    !*** ./src/app/ctrlr/ctrlr.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCtrlrCtrlrComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".name-col {\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3RybHIvY3RybHIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2N0cmxyL2N0cmxyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS1jb2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ctrlr/ctrlr.component.ts":
  /*!******************************************!*\
    !*** ./src/app/ctrlr/ctrlr.component.ts ***!
    \******************************************/

  /*! exports provided: CtrlrComponent */

  /***/
  function srcAppCtrlrCtrlrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrComponent", function () {
      return CtrlrComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../global */
    "./src/app/global.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../model/model-ctrlr-conf */
    "./src/app/model/model-ctrlr-conf.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../model/model-ctrlr */
    "./src/app/model/model-ctrlr.ts");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../model/enums */
    "./src/app/model/enums.ts");

    var CtrlrComponent =
    /*#__PURE__*/
    function () {
      function CtrlrComponent(route, router, cdr, dataService) {
        _classCallCheck(this, CtrlrComponent);

        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.dataService = dataService;
      }

      _createClass(CtrlrComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cdr.detectChanges();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          if (!_demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialize();
          this.route.params.subscribe(function (params) {
            _this16.ctrlrTagName = params.ctrlrTagName;
            console.log(_this16.ctrlrTagName);
          });
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(cMObj) {
          var _this17 = this;

          this.centreMsg = cMObj;
          this.centreMsg.showProcess('Loading...'); //DEMO DATA GENERATE

          this.ctrlrConf = this.dataService.getCtrlrConf(this.ctrlrTagName); //Create The Views    

          this.ctrlrTopStripVw = this.ctrlrConf.getCtrlrTopStripVw(); //topstrip view

          this.ctrlrVw = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_5__["CtrlrVw"](); //controller details view

          this.ctrlrVw.ctrlrTagName = this.ctrlrConf.ctrlrTagName;
          this.ctrlrVw.description = this.ctrlrConf.description;
          this.ctrlrVw.numCV = this.ctrlrConf.ctrlrConfTabs.find(function (t) {
            return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_9__["CtrlrVarType"].CV;
          }).rows.length;
          this.ctrlrVw.numMV = this.ctrlrConf.ctrlrConfTabs.find(function (t) {
            return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_9__["CtrlrVarType"].MV;
          }).rows.length;
          this.ctrlrVw.numDV = this.ctrlrConf.ctrlrConfTabs.find(function (t) {
            return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_9__["CtrlrVarType"].DV;
          }).rows.length;
          this.ctrlrVw.dataCells = [];
          this.ctrlrConf.mainParams.forEach(function (mp) {
            if (mp.ctrlrTemplParam.name == "Mode" || mp.ctrlrTemplParam.name == "Status" || mp.ctrlrTemplParam.name == "Benefit") return;
            if (mp.isOPTag) _this17.ctrlrVw.dataCells = _this17.ctrlrVw.dataCells.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_8__["DataCell"](null, mp.value, null, mp.ctrlrTemplParam));else _this17.ctrlrVw.dataCells = _this17.ctrlrVw.dataCells.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_8__["DataCell"](mp.value, null, null, mp.ctrlrTemplParam));
          });
          this.ctrlrMatrixVw = this.ctrlrConf.getCtrlrMatrixVw(); //controller matrix
          //Create OP Fetch

          this.oPFetch = new _global__WEBPACK_IMPORTED_MODULE_3__["OPFetch"]();
          this.ctrlrTopStripVw.fetchItems.forEach(function (fi) {
            return _this17.oPFetch.add(fi.tagId, fi.propName, fi.fetchOnce);
          });
          this.ctrlrVw.dataCells.forEach(function (dc) {
            if (dc.tagId != null) _this17.oPFetch.add(dc.tagId, dc.ctrlrTemplParam.name, false);
          }); //REFRESH THE DEMO DATA

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 2000);
          source.subscribe(function (val) {
            _this17.oPFetch.refresh(); //Update the Top Strip


            var ctrlrStatusN = _this17.oPFetch.getResultByProp("Status");

            if (_this17.ctrlrTopStripVw.statusMapping != null) {
              _this17.ctrlrTopStripVw.status = _this17.ctrlrTopStripVw.statusMapping.getValueText(ctrlrStatusN);
              _this17.ctrlrTopStripVw.statusColor = _this17.ctrlrTopStripVw.statusMapping.getValueColor(ctrlrStatusN);
            } else _this17.ctrlrTopStripVw.status = ctrlrStatusN.toString();

            var ctrlrModeN = _this17.oPFetch.getResultByProp("Mode");

            if (_this17.ctrlrTopStripVw.modeMapping != null) {
              _this17.ctrlrTopStripVw.mode = _this17.ctrlrTopStripVw.modeMapping.getValueText(ctrlrModeN);
              _this17.ctrlrTopStripVw.modeColor = _this17.ctrlrTopStripVw.modeMapping.getValueColor(ctrlrModeN);
            } else _this17.ctrlrTopStripVw.mode = ctrlrModeN.toString();

            _this17.ctrlrTopStripVw.benefitN = _this17.oPFetch.getResultByProp("Benefit");
            _this17.ctrlrTopStripVw.benefitColor = "#28a745"; //Update the View

            _this17.ctrlrVw.dataCells.forEach(function (dc) {
              if (dc.tagId != null) dc.setValue(_this17.oPFetch.getResultStr(dc.tagId, dc.ctrlrTemplParam.mapping));
            });
          });
          this.centreMsg.stop();
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(mBObj) {
          this.msgBox = mBObj;
        }
      }]);

      return CtrlrComponent;
    }();

    CtrlrComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    CtrlrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'app-ctrlr',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ctrlr.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ctrlr/ctrlr.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ctrlr.component.css */
      "./src/app/ctrlr/ctrlr.component.css")).default]
    })], CtrlrComponent);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.enableDemo = true;
        this.baseLocation = window.location.host;
      } //******************************
      //Controller Templates
      //******************************


      _createClass(DataService, [{
        key: "getCtrlrTempls",
        value: function getCtrlrTempls() {
          var Templates; //if (this.enableDemo) Templates = DemoData.getCtrlrTempls();

          if (this.enableDemo) Templates = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].getCtrlrTempls(); //Global.ctrlrTempls = Templates;

          return Templates;
        }
      }, {
        key: "deleteCtrlrTempl",
        value: function deleteCtrlrTempl(id) {
          if (this.enableDemo) {
            _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrTempls = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrTempls.filter(function (t) {
              return t.id != id;
            }); //Global.ctrlrTempls = Global.ctrlrTempls.filter(t => t.id != id);
          }

          return true;
        }
      }, {
        key: "saveCtrlrTempl",
        value: function saveCtrlrTempl(ctrlrTempl) {
          if (this.enableDemo) {
            var i = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrTempls.findIndex(function (t) {
              return t.id == ctrlrTempl.id;
            });

            if (i >= 0) {
              console.log("Saving Controller Template '" + ctrlrTempl.name + "'");
              _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrTempls[i] = ctrlrTempl; //Global.ctrlrTempls[i] = ctrlrTempl;

              return true;
            } else {
              console.log("Inserting new Controller Template '" + ctrlrTempl.name + "'");
              _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrTempls = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrTempls.concat(ctrlrTempl); //Global.ctrlrTempls = Global.ctrlrTempls.concat(ctrlrTempl);

              return true;
            }
          }

          return true;
        } //******************************
        //Controllers
        //******************************

      }, {
        key: "getCtrlrConfListVw",
        value: function getCtrlrConfListVw() {
          if (this.enableDemo) return _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].getCtrlrConfListVw();
          return [];
        }
      }, {
        key: "getCtrlrHomeVws",
        value: function getCtrlrHomeVws() {
          if (this.enableDemo) return _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].getCtrlrHomeVws();
          return [];
        }
      }, {
        key: "getCtrlrConfs",
        value: function getCtrlrConfs() {
          var ctrlrConfs = [];
          if (this.enableDemo) ctrlrConfs = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].getCtrlrConfs();
          return ctrlrConfs;
        }
      }, {
        key: "getCtrlrConf",
        value: function getCtrlrConf(ctrlrTagName) {
          var ctrlrConf = null;
          if (this.enableDemo) ctrlrConf = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].getCtrlrConf(ctrlrTagName);
          return ctrlrConf;
        } // createCtrlrConf(tagName: string, ctrlrTempl: CtrlrTempl, ctrlrId: string = null) {
        //   if (this.enableDemo) 
        //   if (Global.ctrlrTempls == null) this.getCtrlrTempls();
        //   let newCtrlr: CtrlrConf = this.generateDemoCtrlrConf(ctrlrTempl);
        //   return newCtrlr;
        // }

      }, {
        key: "deleteCtrlrConf",
        value: function deleteCtrlrConf(ctrlrIds) {
          if (this.enableDemo) {
            ctrlrIds.forEach(function (id) {
              _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs.filter(function (c) {
                return c.id != id;
              });
            });
          }

          return true;
        }
      }, {
        key: "saveCtrlrConf",
        value: function saveCtrlrConf(ctrlrConf) {
          if (this.enableDemo) {
            var i = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs.findIndex(function (c) {
              return c.id == ctrlrConf.id;
            });

            if (i >= 0) {
              _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs[i] = ctrlrConf;
            } else {
              _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs = _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].ctrlrConfs.concat(ctrlrConf);
            }
          }

          return true;
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/demo.ts":
  /*!*************************!*\
    !*** ./src/app/demo.ts ***!
    \*************************/

  /*! exports provided: DemoData */

  /***/
  function srcAppDemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoData", function () {
      return DemoData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./src/app/global.ts");
    /* harmony import */


    var _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model/model-ctrlr-conf */
    "./src/app/model/model-ctrlr-conf.ts");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./model/enums */
    "./src/app/model/enums.ts");
    /* harmony import */


    var _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model/model-ctrlr-templ */
    "./src/app/model/model-ctrlr-templ.ts");
    /* harmony import */


    var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./utility */
    "./src/app/utility.ts");
    /* harmony import */


    var _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./model/model-ctrlr */
    "./src/app/model/model-ctrlr.ts");

    var DemoData =
    /*#__PURE__*/
    function () {
      function DemoData() {
        _classCallCheck(this, DemoData);
      }

      _createClass(DemoData, null, [{
        key: "getCtrlrTempls",
        value: function getCtrlrTempls() {
          var ret = [];
          DemoData.ctrlrTempls.forEach(function (t) {
            ret = ret.concat(DemoData.getCtrlrTempl(t.id));
          });
          return ret;
        }
      }, {
        key: "getCtrlrTempl",
        value: function getCtrlrTempl(ctrlrTemplId) {
          var ret = null;
          var tempT = this.ctrlrTempls.find(function (t) {
            return t.id == ctrlrTemplId;
          });

          if (tempT != null) {
            var ret2 = [];
            tempT.mappings.forEach(function (t) {
              var ret3 = [];
              t.mapPairs.forEach(function (mp) {
                return ret3 = ret3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["MapPair"](mp.val, mp.text, mp.colorHex));
              });
              ret2 = ret2.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["Mapping"](t.id, t.name, ret3, t.canDelete));
            });
            ret = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTempl"](tempT.id, tempT.name, tempT.params, ret2);
          }

          return ret;
        }
      }, {
        key: "getCtrlrConfListVw",
        value: function getCtrlrConfListVw() {
          var ret = [];
          DemoData.ctrlrConfs.forEach(function (c) {
            var nCV = c.ctrlrConfTabs.find(function (t) {
              return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].CV;
            }).rows.length;
            var nMV = c.ctrlrConfTabs.find(function (t) {
              return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].MV;
            }).rows.length;
            var nDV = c.ctrlrConfTabs.find(function (t) {
              return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].DV;
            }).rows.length;
            var nINF = c.ctrlrConfTabs.find(function (t) {
              return t.tabId == _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].INF;
            }).rows.length;
            ret = ret.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfListVw"](c.id, c.description, c.ctrlrTagName, nCV, nMV, nDV));
          });
          return ret;
        }
      }, {
        key: "getCtrlrHomeVws",
        value: function getCtrlrHomeVws() {
          var ret = [];
          DemoData.ctrlrConfs.forEach(function (c) {
            ret = ret.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_6__["CtrlrHomeVw"](c));
          });
          return ret;
        }
      }, {
        key: "getCtrlrConfs",
        value: function getCtrlrConfs() {
          var ret = [];
          DemoData.ctrlrConfs.forEach(function (c) {
            var retTempl = DemoData.getCtrlrTempl(c.ctrlrTempl.id);
            var retMainParams = [];
            if (c.mainParams == null) retMainParams = null;else {
              c.mainParams.forEach(function (c) {
                var mapping = null;

                if (c.ctrlrTemplParam.mapping != null) {
                  var mapPairs = [];
                  if (c.ctrlrTemplParam.mapping.mapPairs == null) mapPairs = null;else c.ctrlrTemplParam.mapping.mapPairs.forEach(function (mp) {
                    return mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["MapPair"](mp.val, mp.text, mp.colorHex));
                  });
                  mapping = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["Mapping"](c.ctrlrTemplParam.mapping.id, c.ctrlrTemplParam.mapping.name, mapPairs, c.ctrlrTemplParam.mapping.canDelete);
                }

                var cTP = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"](c.ctrlrTemplParam.name, c.ctrlrTemplParam.desc, c.ctrlrTemplParam.dType, c.ctrlrTemplParam.canUseOPTag, c.ctrlrTemplParam.canEdit, c.ctrlrTemplParam.kPIGroup, c.ctrlrTemplParam.ctrlrTemplTabId, c.ctrlrTemplParam.canEditTempl, c.ctrlrTemplParam.cssClass, c.ctrlrTemplParam.viewHeader, c.ctrlrTemplParam.viewHeaderGr, mapping, c.ctrlrTemplParam.numberFormat);
                retMainParams = retMainParams.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRowCol"](c.value, c.isOPTag, cTP));
              });
            }
            var retCtrlrConf = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConf"](c.id, c.ctrlrTagName, c.description, retTempl, retMainParams);
            var retCtrlrConfTabs = c.ctrlrConfTabs;

            if (c.ctrlrConfTabs != null) {
              retCtrlrConfTabs = [];
              c.ctrlrConfTabs.forEach(function (t) {
                var retRows = null;

                if (t.rows != null) {
                  retRows = [];
                  t.rows.forEach(function (r) {
                    var retCols = null;

                    if (r.cols != null) {
                      retCols = [];
                      r.cols.forEach(function (c) {
                        var retMapping = null;

                        if (c.ctrlrTemplParam.mapping != null) {
                          var retMapPairs = [];
                          if (c.ctrlrTemplParam.mapping.mapPairs == null) retMapPairs = null;else c.ctrlrTemplParam.mapping.mapPairs.forEach(function (mp) {
                            return retMapPairs = retMapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["MapPair"](mp.val, mp.text, mp.colorHex));
                          });
                          retMapping = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["Mapping"](c.ctrlrTemplParam.mapping.id, c.ctrlrTemplParam.mapping.name, retMapPairs, c.ctrlrTemplParam.mapping.canDelete);
                        }

                        var retCTP = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"](c.ctrlrTemplParam.name, c.ctrlrTemplParam.desc, c.ctrlrTemplParam.dType, c.ctrlrTemplParam.canUseOPTag, c.ctrlrTemplParam.canEdit, c.ctrlrTemplParam.kPIGroup, c.ctrlrTemplParam.ctrlrTemplTabId, c.ctrlrTemplParam.canEditTempl, c.ctrlrTemplParam.cssClass, c.ctrlrTemplParam.viewHeader, c.ctrlrTemplParam.viewHeaderGr, retMapping, c.ctrlrTemplParam.numberFormat);
                        retCols = retCols.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRowCol"](c.value, c.isOPTag, retCTP));
                      });
                    }

                    retRows = retRows.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRow"](r.id, retCols));
                  });
                }

                retCtrlrConfTabs = retCtrlrConfTabs.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfTab"](t.tabName, t.tabId, retTempl, retRows));
              });
            }

            retCtrlrConf.ctrlrConfTabs = retCtrlrConfTabs;
            ret = ret.concat(retCtrlrConf);
          });
          return ret;
        }
      }, {
        key: "getCtrlrConf",
        value: function getCtrlrConf(ctrlrTagName) {
          var ret = null;
          var dbCtrlrConf = DemoData.ctrlrConfs.find(function (c) {
            return c.ctrlrTagName == ctrlrTagName;
          });
          if (dbCtrlrConf == null) return null;
          var retTempl = DemoData.getCtrlrTempl(dbCtrlrConf.ctrlrTempl.id);
          var retMainParams = [];
          if (dbCtrlrConf.mainParams == null) retMainParams = null;else {
            dbCtrlrConf.mainParams.forEach(function (c) {
              var mapping = null;

              if (c.ctrlrTemplParam.mapping != null) {
                var mapPairs = [];
                if (c.ctrlrTemplParam.mapping.mapPairs == null) mapPairs = null;else c.ctrlrTemplParam.mapping.mapPairs.forEach(function (mp) {
                  return mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["MapPair"](mp.val, mp.text, mp.colorHex));
                });
                mapping = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["Mapping"](c.ctrlrTemplParam.mapping.id, c.ctrlrTemplParam.mapping.name, mapPairs, c.ctrlrTemplParam.mapping.canDelete);
              }

              var cTP = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"](c.ctrlrTemplParam.name, c.ctrlrTemplParam.desc, c.ctrlrTemplParam.dType, c.ctrlrTemplParam.canUseOPTag, c.ctrlrTemplParam.canEdit, c.ctrlrTemplParam.kPIGroup, c.ctrlrTemplParam.ctrlrTemplTabId, c.ctrlrTemplParam.canEditTempl, c.ctrlrTemplParam.cssClass, c.ctrlrTemplParam.viewHeader, c.ctrlrTemplParam.viewHeaderGr, mapping, c.ctrlrTemplParam.numberFormat);
              retMainParams = retMainParams.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRowCol"](c.value, c.isOPTag, cTP));
            });
          }
          ret = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConf"](dbCtrlrConf.id, dbCtrlrConf.ctrlrTagName, dbCtrlrConf.description, retTempl, retMainParams);
          var retCtrlrConfTabs = dbCtrlrConf.ctrlrConfTabs;

          if (dbCtrlrConf.ctrlrConfTabs != null) {
            retCtrlrConfTabs = [];
            dbCtrlrConf.ctrlrConfTabs.forEach(function (t) {
              var retRows = null;

              if (t.rows != null) {
                retRows = [];
                t.rows.forEach(function (r) {
                  var retCols = null;

                  if (r.cols != null) {
                    retCols = [];
                    r.cols.forEach(function (c) {
                      var retMapping = null;

                      if (c.ctrlrTemplParam.mapping != null) {
                        var retMapPairs = [];
                        if (c.ctrlrTemplParam.mapping.mapPairs == null) retMapPairs = null;else c.ctrlrTemplParam.mapping.mapPairs.forEach(function (mp) {
                          return retMapPairs = retMapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["MapPair"](mp.val, mp.text, mp.colorHex));
                        });
                        retMapping = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["Mapping"](c.ctrlrTemplParam.mapping.id, c.ctrlrTemplParam.mapping.name, retMapPairs, c.ctrlrTemplParam.mapping.canDelete);
                      }

                      var retCTP = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"](c.ctrlrTemplParam.name, c.ctrlrTemplParam.desc, c.ctrlrTemplParam.dType, c.ctrlrTemplParam.canUseOPTag, c.ctrlrTemplParam.canEdit, c.ctrlrTemplParam.kPIGroup, c.ctrlrTemplParam.ctrlrTemplTabId, c.ctrlrTemplParam.canEditTempl, c.ctrlrTemplParam.cssClass, c.ctrlrTemplParam.viewHeader, c.ctrlrTemplParam.viewHeaderGr, retMapping, c.ctrlrTemplParam.numberFormat);
                      retCols = retCols.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRowCol"](c.value, c.isOPTag, retCTP));
                    });
                  }

                  retRows = retRows.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRow"](r.id, retCols));
                });
              }

              retCtrlrConfTabs = retCtrlrConfTabs.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfTab"](t.tabName, t.tabId, retTempl, retRows));
            });
          }

          ret.ctrlrConfTabs = retCtrlrConfTabs;
          ret.ctrlrMatrixPairs = null;

          if (dbCtrlrConf.ctrlrMatrixPairs != null) {
            ret.ctrlrMatrixPairs = [];
            dbCtrlrConf.ctrlrMatrixPairs.forEach(function (mp) {
              ret.ctrlrMatrixPairs = ret.ctrlrMatrixPairs.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrMatrixPair"](mp.cVNum, mp.mVNum, mp.value));
            });
          }

          return ret;
        } // public static getCtrlrConf(tagName: string): CtrlrConf {
        //   let inDB = DemoData.ctrlrConfs.find(c => c.ctrlrTagName == tagName);
        //   if (inDB != null) return Object.assign({}, inDB);
        //   else return null;
        // }

      }, {
        key: "initialize",
        value: function initialize(numberOfCtrlrs) {
          if (numberOfCtrlrs == null) numberOfCtrlrs = 3;
          DemoData.ctrlrTempls = DemoData.generateCtrlrTempls();
          DemoData.ctrlrConfs = [];

          for (var n = 0; n < numberOfCtrlrs; n++) {
            DemoData.ctrlrConfs = DemoData.ctrlrConfs.concat(DemoData.generateDemoCtrlrConf(DemoData.ctrlrTempls[0]));
          }

          DemoData.initialized = true;
        }
      }, {
        key: "generateCtrlrTempls",
        value: function generateCtrlrTempls() {
          var templates = [DemoData.generateDemoCtrlrTempl('0e5c0c19-8105-4cd3-8e32-2fe5e69e35ce', "Honeywell RMPCT", true), DemoData.generateDemoCtrlrTempl('da814954-d70a-4adf-8c56-5b29044f54df', "Yokogawa ExaSMOC", true), DemoData.generateDemoCtrlrTempl('9effc7bc-0f26-449b-86a4-06dc63c31916', "Aspen Tech DMC", true)];
          return templates;
        }
      }, {
        key: "generateDemoCtrlrTempl",
        value: function generateDemoCtrlrTempl(id, name) {
          var addDemoParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var ctrlrTempl = _utility__WEBPACK_IMPORTED_MODULE_5__["Utility"].createBasicCtrlrTempl();

          ctrlrTempl.id = id;
          ctrlrTempl.name = name;

          if (addDemoParams) {
            //These 4 will appear at the Ctrlr Details Pages
            ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]('CustomParameter1', 'Custom Parameter 1', _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].NA, true, "", "Custom1", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
            ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]('CustomParameter2', 'Custom Parameter 2', _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].NA, true, "Custom2", null, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
            ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]('CustomParameter3', 'Custom Parameter 3', _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].NA, true, "Custom3", null, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
            ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]('CustomParameter4', 'Custom Parameter 4', _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].NA, true, "Custom4", null, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals)); //These will appear in CV/MV/DV/INF Pages

            for (var i = 1; i < 10; i++) {
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomCVOP" + i, "Custom CV Optimization Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Optimization, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].CV, true, "", "Custom CV Opt " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomCVTP" + i, "Custom CV Tuning Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Tuning, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].CV, true, "", "Custom CV Tuning " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomCVPP" + i, "Custom CV Process Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Process, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].CV, true, "", "Custom CV Process " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomMVOP" + i, "Custom MV Optimization Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Optimization, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].MV, true, "", "Custom MV Opt " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomMVTP" + i, "Custom MV Tuning Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Tuning, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].MV, true, "", "Custom MV Tuning " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomMVPP" + i, "Custom MV Process Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Process, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].MV, true, "", "Custom MV Process " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomDVOP" + i, "Custom DV Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].DV, true, "", "Custom DV Opt " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
              ctrlrTempl.params = ctrlrTempl.params.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_4__["CtrlrTemplParam"]("CustomINFP" + i, "Custom Inferential Parameter " + i, _model_enums__WEBPACK_IMPORTED_MODULE_3__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_3__["KPIGroup"].NA, _model_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].INF, true, "", "Custom INF Opt " + i, null, null, _model_enums__WEBPACK_IMPORTED_MODULE_3__["NumberFormat"].TwoDecimals));
            }
          }

          return ctrlrTempl;
        }
      }, {
        key: "generateDemoCtrlrConf",
        value: function generateDemoCtrlrConf(ctrlrTempl) {
          //Get the Main Parameter (ctrlrTemplVw.tabs[0])
          var ctrlrTemplVw = ctrlrTempl.genCtrlrTemplConfVw();
          var demoMParams = [];
          var demoCtrlrTN = this.generateDemoCtrlrTagName();
          ctrlrTemplVw.tabs[0].params.forEach(function (p) {
            if (p.canUseOPTag) demoMParams = demoMParams.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRowCol"](demoCtrlrTN + '.' + p.name, true, p));else demoMParams = demoMParams.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfRowCol"]('Random Stuff', true, p));
          });
          var newCtrlrConf = new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConf"](null, demoCtrlrTN, demoCtrlrTN + " description", DemoData.ctrlrTempls[0], demoMParams); //Get CV, MV, DV, INF Parameters

          var demoCtrlrConfTabs = [];

          for (var t = 1; t <= 4; t++) {
            //Go through the Tabs (CV, MV, DV, INF) in the Controller Template
            var ctrlrConfRows = [];

            for (var r = 0; r < 10; r++) {
              //create 10 rows
              var xVTag = DemoData.generateDemoTagName();

              var newCtrlrConfRow = _utility__WEBPACK_IMPORTED_MODULE_5__["Utility"].generateNewCtrlrConfRow(r + 1, xVTag, ctrlrTemplVw.tabs[t].params);

              ctrlrConfRows = ctrlrConfRows.concat(newCtrlrConfRow);
            }

            demoCtrlrConfTabs = demoCtrlrConfTabs.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_2__["CtrlrConfTab"](_global__WEBPACK_IMPORTED_MODULE_1__["Global"].ctrlrConfTabNames[t], t, ctrlrTempl, ctrlrConfRows));
          }

          newCtrlrConf.ctrlrConfTabs = demoCtrlrConfTabs;
          return newCtrlrConf;
        }
      }, {
        key: "generateDemoCtrlrTagName",
        value: function generateDemoCtrlrTagName() {
          var tempa = Math.floor(Math.random() * 9999) + 1;

          var zeroPad = function zeroPad(num, places) {
            return String(num).padStart(places, '0');
          };

          var fulltagname = 'XC' + zeroPad(tempa, 5);
          return fulltagname;
        }
      }, {
        key: "generateDemoTagName",
        value: function generateDemoTagName() {
          var tempa = Math.floor(Math.random() * 9999) + 1;
          var tempb = Math.floor(Math.random() * 17);
          var tempd;

          switch (tempb) {
            case 0:
              tempd = "FIC";
              break;

            case 1:
              tempd = "TIC";
              break;

            case 2:
              tempd = "PIC";
              break;

            case 3:
              tempd = "LIC";
              break;

            case 4:
              tempd = "QIC";
              break;

            case 5:
              tempd = "WIC";
              break;

            case 6:
              tempd = "FI";
              break;

            case 7:
              tempd = "TI";
              break;

            case 8:
              tempd = "QR";
              break;

            case 9:
              tempd = "QI";
              break;

            case 10:
              tempd = "PI";
              break;

            case 11:
              tempd = "LI";
              break;

            case 12:
              tempd = "FRC";
              break;

            case 13:
              tempd = "TRC";
              break;

            case 14:
              tempd = "LRC";
              break;

            case 15:
              tempd = "WC";
              break;

            case 16:
              tempd = "WI";
              break;

            default:
              tempd = "FCV";
              break;
          }

          var zeroPad = function zeroPad(num, places) {
            return String(num).padStart(places, '0');
          };

          var fulltagname = tempd + zeroPad(tempa, 5);
          return fulltagname;
        }
      }]);

      return DemoData;
    }();

    DemoData.ctrlrTempls = [];
    DemoData.ctrlrConfs = [];
    DemoData.initialized = false;
    /***/
  },

  /***/
  "./src/app/focus.directive.ts":
  /*!************************************!*\
    !*** ./src/app/focus.directive.ts ***!
    \************************************/

  /*! exports provided: FocusDirective */

  /***/
  function srcAppFocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusDirective", function () {
      return FocusDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FocusDirective =
    /*#__PURE__*/
    function () {
      function FocusDirective(ngZone, renderer) {
        _classCallCheck(this, FocusDirective);

        this.ngZone = ngZone;
        this.renderer = renderer;
      }

      _createClass(FocusDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          console.log(this.cssSelector);
          this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
              _this18.renderer.selectRootElement(_this18.cssSelector).focus();
            }, 0);
          });
        }
      }]);

      return FocusDirective;
    }();

    FocusDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FocusDirective.prototype, "cssSelector", void 0);
    FocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[opFocus]'
    })], FocusDirective);
    /***/
  },

  /***/
  "./src/app/global.ts":
  /*!***************************!*\
    !*** ./src/app/global.ts ***!
    \***************************/

  /*! exports provided: Global, OPFetch, FetchItem, OPSample */

  /***/
  function srcAppGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Global", function () {
      return Global;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPFetch", function () {
      return OPFetch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchItem", function () {
      return FetchItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPSample", function () {
      return OPSample;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Global =
    /*#__PURE__*/
    function () {
      function Global() {
        _classCallCheck(this, Global);
      }

      _createClass(Global, null, [{
        key: "newGuid",
        value: function newGuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return new Promise(function (resolve) {
                      return setTimeout(function () {
                        return resolve();
                      }, ms);
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return Global;
    }();

    Global.curUser = null; //'Administrator';

    Global.ctrlrConfTabNames = ['Controller', 'Controlled Variable', 'Manipulated Variable', 'Disturbance Variable', 'Inferential Property'];

    var OPFetch =
    /*#__PURE__*/
    function () {
      function OPFetch() {
        _classCallCheck(this, OPFetch);

        this.items = [];
      }

      _createClass(OPFetch, [{
        key: "refresh",
        value: function refresh() {
          //SIMULATE FECTHING OF ITEMS FROM SERVER
          this.items.forEach(function (f) {
            if (f.fetchOnce) if (f.fetchDone) return;else f.fetchDone = true;

            switch (f.propName) {
              case 'Mode':
                f.result = 1; //0 to 3
                //f.result = Math.floor(Math.random() * 2); //0 to 3

                break;

              case 'Status':
                var Test = Math.random();
                if (Test > 0.90) f.result = 0;else f.result = 1; //if (Test > 0.50) f.result = 0; else f.result = 1;
                //f.result = Math.floor(Math.random() * 4); //0 to 3

                break;

              case 'Benefit':
                f.result = 10000 + Math.floor(Math.random() * 100) - 50; //0 to 3

                break;

              default:
                f.result = Math.random() * 100;
                break;
            }
          });
        }
      }, {
        key: "add",
        value: function add(tagId, propName, fetchOnce) {
          this.items = this.items.concat(new FetchItem(tagId, propName, fetchOnce));
        }
      }, {
        key: "addRange",
        value: function addRange(fetchItems) {
          var _this19 = this;

          fetchItems.forEach(function (f) {
            return _this19.items = _this19.items.concat(f);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.items = [];
        }
      }, {
        key: "getResult",
        value: function getResult(tagId) {
          var fI = this.items.find(function (i) {
            return i.tagId == tagId;
          });
          if (fI == null) return null;else return fI.result;
        }
      }, {
        key: "getResultStr",
        value: function getResultStr(tagId, mapping) {
          var fI = this.items.find(function (i) {
            return i.tagId == tagId;
          });

          if (mapping == null) {
            if (fI == null) return null;else return fI.result.toString();
          } else {
            return mapping.getValueText(fI.result);
          }
        }
      }, {
        key: "getResultByProp",
        value: function getResultByProp(propName) {
          var fI = this.items.find(function (i) {
            return i.propName == propName;
          });
          if (fI == null) return null;else return fI.result;
        }
      }, {
        key: "getResultStrByProp",
        value: function getResultStrByProp(propName, mapping) {
          var fI = this.items.find(function (i) {
            return i.propName == propName;
          });

          if (mapping == null) {
            if (fI == null) return null;else return fI.result.toString();
          } else {
            return mapping.getValueText(fI.result);
          }
        }
      }]);

      return OPFetch;
    }();

    var FetchItem = function FetchItem(tagId, propName, fetchOnce) {
      _classCallCheck(this, FetchItem);

      this.fetchOnce = fetchOnce;
      this.tagId = tagId;
      this.propName = propName;
      this.fetchDone = false;
    };

    var OPSample = function OPSample() {
      _classCallCheck(this, OPSample);
    };
    /***/

  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../global */
    "./src/app/global.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/model-ctrlr */
    "./src/app/model/model-ctrlr.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/ahref-renderer.component */
    "./src/app/services/ahref-renderer.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(dataService) {
        _classCallCheck(this, HomeComponent);

        this.dataService = dataService;
        this.oPFetch = new _global__WEBPACK_IMPORTED_MODULE_3__["OPFetch"]();
        this.columnDefs = [{
          headerName: 'Controller',
          cellRendererFramework: _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_7__["AhrefRendererComponent"],
          width: 110,
          resizable: true,
          cellStyle: {
            'display': 'flex',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            routerLinkText: function routerLinkText(object) {
              return "/controllers/" + object.ctrlrTagName;
            },
            hrefText: function hrefText(object) {
              return object.ctrlrTagName;
            },
            isEnabled: true,
            isVisible: true,
            aStyle: {
              'font-weight': 'bold',
              'color': 'blue'
            }
          }
        }, {
          headerName: 'Description',
          field: 'description',
          resizable: true,
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'align-items': 'center'
          },
          flex: 3
        }, {
          headerName: 'Mode',
          field: 'mode',
          resizable: true,
          sortable: true,
          flex: 1,
          cellStyle: function cellStyle(params) {
            var ctrlrHomeVw = params.data;

            if (ctrlrHomeVw.modeMapping != null) {
              var hexColor = ctrlrHomeVw.modeMapping.getValueColor(ctrlrHomeVw.modeNumber);
              return {
                'display': 'flex',
                'align-items': 'center',
                'color': hexColor
              };
            } else return {
              'display': 'flex',
              'align-items': 'center'
            };
          }
        }, {
          headerName: 'Status',
          field: 'status',
          resizable: true,
          sortable: true,
          flex: 1,
          cellStyle: function cellStyle(params) {
            var ctrlrHomeVw = params.data;

            if (ctrlrHomeVw.statusMapping != null) {
              var hexColor = ctrlrHomeVw.statusMapping.getValueColor(ctrlrHomeVw.statusNumber);
              return {
                'display': 'flex',
                'align-items': 'center',
                'color': hexColor
              };
            } else return {
              'display': 'flex',
              'align-items': 'center'
            };
          }
        }, {
          headerName: 'CVs',
          cellRendererFramework: _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_7__["AhrefRendererComponent"],
          width: 110,
          resizable: true,
          flex: 1,
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            routerLinkText: function routerLinkText(object) {
              return "/controllers/" + object.ctrlrTagName + "/cv";
            },
            hrefText: function hrefText(object) {
              return object.nCV;
            },
            isEnabled: true,
            isVisible: true,
            aStyle: {
              'font-weight': 'bold',
              'color': 'blue'
            }
          }
        }, {
          headerName: 'MVs',
          cellRendererFramework: _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_7__["AhrefRendererComponent"],
          width: 110,
          resizable: true,
          flex: 1,
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            routerLinkText: function routerLinkText(object) {
              return "/controllers/" + object.ctrlrTagName + "/mv";
            },
            hrefText: function hrefText(object) {
              return object.nCV;
            },
            isEnabled: true,
            isVisible: true,
            aStyle: {
              'font-weight': 'bold',
              'color': 'blue'
            }
          }
        }, {
          headerName: 'DVs',
          cellRendererFramework: _services_ahref_renderer_component__WEBPACK_IMPORTED_MODULE_7__["AhrefRendererComponent"],
          width: 110,
          resizable: true,
          flex: 1,
          sortable: true,
          cellStyle: {
            'display': 'flex',
            'justify-content': 'center'
          },
          headerClass: "op-header-center",
          cellRendererParams: {
            routerLinkText: function routerLinkText(object) {
              return "/controllers/" + object.ctrlrTagName + "/dv";
            },
            hrefText: function hrefText(object) {
              return object.nCV;
            },
            isEnabled: true,
            isVisible: true,
            aStyle: {
              'font-weight': 'bold',
              'color': 'blue'
            }
          }
        }];
        this.ctrlrHomeVws = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!_demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialize();
        } //HOW UPDATE WORKS:
        //First, time is refreshed every 2 seconds below. 
        //In refreshData() sub, opFetch object which contains all the tags to fetch will perform the fetch itself
        //ctlrHomeVw runs ctlrHomeVw.update(oPFetch) to update the model with new data
        //oPFetch is given the list of TagIds to fetch during the start during refresh(), and subsequently in the CtrlrHomeVw Constructor

      }, {
        key: "onGridReady",
        value: function onGridReady(event) {
          var _this20 = this;

          this.gridApi = event.api;
          this.refresh();
          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 2000);
          source.subscribe(function (val) {
            _this20.refreshData();
          });
        }
      }, {
        key: "onCMReady",
        value: function onCMReady(cmObj) {
          this.cmObj = cmObj;
        }
      }, {
        key: "onMBReady",
        value: function onMBReady(msgBox) {
          this.msgBox = msgBox;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this21 = this;

          this.ctrlrHomeVws = []; //Build Tag List

          var ctrlrConfs = this.dataService.getCtrlrConfs();
          ctrlrConfs.forEach(function (c) {
            return _this21.ctrlrHomeVws = _this21.ctrlrHomeVws.concat(new _model_model_ctrlr__WEBPACK_IMPORTED_MODULE_5__["CtrlrHomeVw"](c));
          }); //Build Data Fetch

          this.oPFetch.clear();
          this.ctrlrHomeVws.forEach(function (c) {
            return _this21.oPFetch.add(c.statusTagId, "Status", false);
          });
          this.ctrlrHomeVws.forEach(function (c) {
            return _this21.oPFetch.add(c.modeTagId, "Mode", false);
          });
        }
      }, {
        key: "refreshData",
        value: function refreshData() {
          var _this22 = this;

          //Refresh Data Fetch
          this.oPFetch.refresh();
          this.ctrlrHomeVws.forEach(function (ctlrHomeVw) {
            return ctlrHomeVw.update(_this22.oPFetch);
          });
          this.gridApi.refreshCells();
        }
      }, {
        key: "onRowClicked",
        value: function onRowClicked(event) {//console.log(event);
        }
      }, {
        key: "cVClick",
        value: function cVClick(e) {
          console.log(e);
        }
      }, {
        key: "mVClick",
        value: function mVClick(e) {
          console.log(e);
        }
      }, {
        key: "dVClick",
        value: function dVClick(e) {
          console.log(e);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login-demo/login-demo.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/login-demo/login-demo.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginDemoLoginDemoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWRlbW8vbG9naW4tZGVtby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login-demo/login-demo.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-demo/login-demo.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginDemoComponent */

  /***/
  function srcAppLoginDemoLoginDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginDemoComponent", function () {
      return LoginDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../demo */
    "./src/app/demo.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginDemoComponent =
    /*#__PURE__*/
    function () {
      function LoginDemoComponent(router) {
        _classCallCheck(this, LoginDemoComponent);

        this.router = router;
        this.showLoginError = false;
        this.showLoginSuccess = false;
        this.formDisabled = false;
      }

      _createClass(LoginDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!_demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialized) _demo__WEBPACK_IMPORTED_MODULE_1__["DemoData"].initialize();
        }
      }, {
        key: "login",
        value: function login() {
          var _this23 = this;

          console.log(this.username);
          console.log(this.password);
          this.formDisabled = true;

          if (this.username == "demo" && this.password == "demo") {
            this.showLoginSuccess = true;
            setTimeout(function () {
              _this23.router.navigateByUrl("home");

              _this23.formDisabled = false;
            }, 2000);
          } else {
            this.showLoginError = true;
            setTimeout(function () {
              _this23.showLoginError = false;
              _this23.formDisabled = false;
            }, 2000);
          }
        }
      }]);

      return LoginDemoComponent;
    }();

    LoginDemoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-demo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-demo/login-demo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-demo.component.css */
      "./src/app/login-demo/login-demo.component.css")).default]
    })], LoginDemoComponent);
    /***/
  },

  /***/
  "./src/app/model/enums.ts":
  /*!********************************!*\
    !*** ./src/app/model/enums.ts ***!
    \********************************/

  /*! exports provided: DType, KPIGroup, CtrlrVarType, NumberFormat, CtrlrMatrixCellType */

  /***/
  function srcAppModelEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DType", function () {
      return DType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KPIGroup", function () {
      return KPIGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrVarType", function () {
      return CtrlrVarType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberFormat", function () {
      return NumberFormat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrMatrixCellType", function () {
      return CtrlrMatrixCellType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //**************** ENUMS ****************************


    var DType;

    (function (DType) {
      DType[DType["number"] = 0] = "number";
      DType[DType["string"] = 1] = "string";
      DType[DType["boolean"] = 2] = "boolean";
      DType[DType["CVType"] = 3] = "CVType";
    })(DType || (DType = {}));

    var KPIGroup;

    (function (KPIGroup) {
      KPIGroup[KPIGroup["NA"] = 0] = "NA";
      KPIGroup[KPIGroup["Summary"] = 1] = "Summary";
      KPIGroup[KPIGroup["Performance"] = 2] = "Performance";
      KPIGroup[KPIGroup["Optimization"] = 3] = "Optimization";
      KPIGroup[KPIGroup["Tuning"] = 4] = "Tuning";
      KPIGroup[KPIGroup["Process"] = 5] = "Process";
    })(KPIGroup || (KPIGroup = {}));

    var CtrlrVarType;

    (function (CtrlrVarType) {
      CtrlrVarType[CtrlrVarType["NA"] = 0] = "NA";
      CtrlrVarType[CtrlrVarType["CV"] = 1] = "CV";
      CtrlrVarType[CtrlrVarType["MV"] = 2] = "MV";
      CtrlrVarType[CtrlrVarType["DV"] = 3] = "DV";
      CtrlrVarType[CtrlrVarType["INF"] = 4] = "INF";
    })(CtrlrVarType || (CtrlrVarType = {}));

    var NumberFormat;

    (function (NumberFormat) {
      NumberFormat[NumberFormat["None"] = 0] = "None";
      NumberFormat[NumberFormat["TwoDecimals"] = 1] = "TwoDecimals";
      NumberFormat[NumberFormat["Percentage"] = 2] = "Percentage";
    })(NumberFormat || (NumberFormat = {}));

    var CtrlrMatrixCellType;

    (function (CtrlrMatrixCellType) {
      CtrlrMatrixCellType[CtrlrMatrixCellType["TopLeftMost"] = 0] = "TopLeftMost";
      CtrlrMatrixCellType[CtrlrMatrixCellType["Cell"] = 1] = "Cell";
      CtrlrMatrixCellType[CtrlrMatrixCellType["XVCell"] = 2] = "XVCell";
    })(CtrlrMatrixCellType || (CtrlrMatrixCellType = {}));
    /***/

  },

  /***/
  "./src/app/model/model-ctrlr-conf.ts":
  /*!*******************************************!*\
    !*** ./src/app/model/model-ctrlr-conf.ts ***!
    \*******************************************/

  /*! exports provided: CtrlrConf, CtrlrConfListVw, CtrlrConfVw, CtrlrConfTab, CtrlrConfRow, CtrlrConfRowCol, CtrlrConfRowVw, CtrlrMatrixPair, CtrlrVw, XVBasicInfoVw, CtrlrMatrixVw, CtrlrMatrixRowVw, CtrlrMatrixCellVw */

  /***/
  function srcAppModelModelCtrlrConfTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConf", function () {
      return CtrlrConf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConfListVw", function () {
      return CtrlrConfListVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConfVw", function () {
      return CtrlrConfVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConfTab", function () {
      return CtrlrConfTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConfRow", function () {
      return CtrlrConfRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConfRowCol", function () {
      return CtrlrConfRowCol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrConfRowVw", function () {
      return CtrlrConfRowVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrMatrixPair", function () {
      return CtrlrMatrixPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrVw", function () {
      return CtrlrVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XVBasicInfoVw", function () {
      return XVBasicInfoVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrMatrixVw", function () {
      return CtrlrMatrixVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrMatrixRowVw", function () {
      return CtrlrMatrixRowVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrMatrixCellVw", function () {
      return CtrlrMatrixCellVw;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../global */
    "./src/app/global.ts");
    /* harmony import */


    var _model_ctrlr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model-ctrlr */
    "./src/app/model/model-ctrlr.ts");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./enums */
    "./src/app/model/enums.ts"); //******* CONTROLLER CONFIGS *******************************
    //This is the model (for configuration) for each type of controller. E.g. XC001, XC002


    var CtrlrConf =
    /*#__PURE__*/
    function () {
      //constructor(id: string, ctrlrTagName: string, description: string, ctrlrTempl: CtrlrTempl, mainParams: CtrlrConfRowCol[], ctrlrConfTabs: CtrlrConfTab[]) {
      function CtrlrConf(id, ctrlrTagName, description, ctrlrTempl, mainParams) {
        _classCallCheck(this, CtrlrConf);

        if (id == null) this.id = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].newGuid();else this.id = id;
        this.description = description;
        this.ctrlrTagName = ctrlrTagName;
        this.ctrlrTempl = ctrlrTempl;
        this.mainParams = mainParams; //Get CV, MV, DV, INF Parameters

        this.ctrlrConfTabs = [];

        for (var t = 1; t <= 4; t++) {
          //Go through the Tabs (CV, MV, DV, INF) in the Controller Template            
          this.ctrlrConfTabs = this.ctrlrConfTabs.concat(new CtrlrConfTab(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].ctrlrConfTabNames[t], t, this.ctrlrTempl, []));
        }

        this.ctrlrMatrixPairs = [];
      }

      _createClass(CtrlrConf, [{
        key: "findCtrlrMatrixValue",
        value: function findCtrlrMatrixValue(cVNum, mVNum) {
          var mp = this.ctrlrMatrixPairs.find(function (mp) {
            return mp.cVNum == cVNum && mp.mVNum == mVNum;
          });
          if (mp == null) return null;
          return mp.value;
        }
      }, {
        key: "getMainTab",
        value: function getMainTab() {
          return this.ctrlrConfTabs[0];
        }
      }, {
        key: "getCtrlrRowCol",
        value: function getCtrlrRowCol(paramName) {
          var ctrlrConfRowCol = this.mainParams.find(function (p) {
            return p.ctrlrTemplParam.name == paramName;
          });
          return ctrlrConfRowCol;
        }
      }, {
        key: "getCtrlrTopStripVw",
        value: function getCtrlrTopStripVw() {
          var ctrlrTopStripVw = new _model_ctrlr__WEBPACK_IMPORTED_MODULE_2__["CtrlrTopStripVw"]();
          var fetchItems = [];
          var topStripRC = this.getCtrlrRowCol("Status");

          if (topStripRC.isOPTag) {
            fetchItems = fetchItems.concat(new _global__WEBPACK_IMPORTED_MODULE_1__["FetchItem"](topStripRC.value, topStripRC.ctrlrTemplParam.name, false));
            ctrlrTopStripVw.statusMapping = topStripRC.ctrlrTemplParam.mapping;
          } else {
            if (topStripRC.ctrlrTemplParam.mapping != null) {
              ctrlrTopStripVw.status = topStripRC.ctrlrTemplParam.mapping.getValueText(topStripRC.value);
              ctrlrTopStripVw.statusColor = topStripRC.ctrlrTemplParam.mapping.getValueColor(ctrlrTopStripVw.status);
            } else ctrlrTopStripVw.status = topStripRC.value;
          }

          topStripRC = this.getCtrlrRowCol("Mode");

          if (topStripRC.isOPTag) {
            fetchItems = fetchItems.concat(new _global__WEBPACK_IMPORTED_MODULE_1__["FetchItem"](topStripRC.value, topStripRC.ctrlrTemplParam.name, false));
            ctrlrTopStripVw.modeMapping = topStripRC.ctrlrTemplParam.mapping;
          } else {
            if (topStripRC.ctrlrTemplParam.mapping != null) {
              ctrlrTopStripVw.mode = topStripRC.ctrlrTemplParam.mapping.getValueText(topStripRC.value);
              ctrlrTopStripVw.modeColor = topStripRC.ctrlrTemplParam.mapping.getValueColor(ctrlrTopStripVw.mode);
            } else ctrlrTopStripVw.mode = topStripRC.value;
          }

          topStripRC = this.getCtrlrRowCol("Benefit");

          if (topStripRC.isOPTag) {
            fetchItems = fetchItems.concat(new _global__WEBPACK_IMPORTED_MODULE_1__["FetchItem"](topStripRC.value, topStripRC.ctrlrTemplParam.name, false));
          } else ctrlrTopStripVw.benefitN = topStripRC.value;

          ctrlrTopStripVw.fetchItems = fetchItems;
          return ctrlrTopStripVw;
        }
      }, {
        key: "getCtrlrMatrixVw",
        value: function getCtrlrMatrixVw() {
          var _this24 = this;

          var ctrlrMatrixVw = new CtrlrMatrixVw(this.ctrlrMatrixPairs); //Build First Row View (MVs)

          var mVRow = new CtrlrMatrixRowVw();
          mVRow.cells = mVRow.cells.concat(new CtrlrMatrixCellVw(_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrMatrixCellType"].TopLeftMost));
          this.ctrlrConfTabs.find(function (t) {
            return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].MV;
          }).rows.forEach(function (r, i) {
            var mVCell = new CtrlrMatrixCellVw(_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrMatrixCellType"].XVCell, false, "MV" + _this24.padLeft(i.toString(), '0', 2), i, r.getBasicInfo(), r.cols);
            mVRow.cells = mVRow.cells.concat(mVCell);
          });
          ctrlrMatrixVw.rows = ctrlrMatrixVw.rows.concat(mVRow); //Build Other Rows

          this.ctrlrConfTabs.find(function (t) {
            return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].CV;
          }).rows.forEach(function (cv) {
            var cVInfo = cv.getBasicInfo();
            var row = new CtrlrMatrixRowVw();
            mVRow.cells.forEach(function (mv) {
              if (mv.ctrlrMatrixCellType == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrMatrixCellType"].TopLeftMost) {
                //This indicates the top left most cell, which entire column holds cvs
                var cVHeader = new CtrlrMatrixCellVw(_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrMatrixCellType"].XVCell, false, "CV" + _this24.padLeft(cVInfo.number.toString(), '0', 2), cVInfo.number, cVInfo, cv.cols);
                row.cells = row.cells.concat(cVHeader);
              } else {
                var cell = new CtrlrMatrixCellVw(_enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrMatrixCellType"].Cell, false, _this24.findCtrlrMatrixValue(cVInfo.number, mv.xVBasicInfoVw.number));
                row.cells = row.cells.concat(cell);
              }
            });
            ctrlrMatrixVw.rows = ctrlrMatrixVw.rows.concat(row);
          });
          console.log(ctrlrMatrixVw);
          return ctrlrMatrixVw;
        }
      }, {
        key: "padLeft",
        value: function padLeft(text, padChar, size) {
          return (String(padChar).repeat(size) + text).substr(size * -1, size);
        }
      }]);

      return CtrlrConf;
    }();

    var CtrlrConfListVw = function CtrlrConfListVw(id, description, ctrlrTagName, nCV, nMV, nDV) {
      _classCallCheck(this, CtrlrConfListVw);

      this.id = id;
      this.description = description;
      this.ctrlrTagName = ctrlrTagName;
      this.nCV = nCV;
      this.nMV = nMV;
      this.nDV = nDV;
      this.delete = false;
    };

    var CtrlrConfVw =
    /*#__PURE__*/
    function (_CtrlrConf) {
      _inherits(CtrlrConfVw, _CtrlrConf);

      function CtrlrConfVw(ctrlrConf) {
        var _this25;

        _classCallCheck(this, CtrlrConfVw);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(CtrlrConfVw).call(this, ctrlrConf.id, ctrlrConf.ctrlrTagName, ctrlrConf.description, ctrlrConf.ctrlrTempl, ctrlrConf.mainParams));

        if (ctrlrConf.mainParams == null) {
          _this25.mainParams = [];

          _this25.ctrlrTempl.params.forEach(function (p) {
            if (p.ctrlrTemplTabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].NA) {
              _this25.mainParams = _this25.mainParams.concat(new CtrlrConfRowCol("", false, p));
            }
          });
        } else {
          _this25.mainParams = ctrlrConf.mainParams;
        }

        _this25.ctrlrConfTabs = ctrlrConf.ctrlrConfTabs;
        _this25.delete = false;

        _this25.updateXVCounts();

        return _this25;
      }

      _createClass(CtrlrConfVw, [{
        key: "updateXVCounts",
        value: function updateXVCounts() {
          this.nCV = this.ctrlrConfTabs.find(function (t) {
            return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].CV;
          }).rows.length;
          this.nMV = this.ctrlrConfTabs.find(function (t) {
            return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].MV;
          }).rows.length;
          this.nDV = this.ctrlrConfTabs.find(function (t) {
            return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].DV;
          }).rows.length;
          this.nINF = this.ctrlrConfTabs.find(function (t) {
            return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_3__["CtrlrVarType"].INF;
          }).rows.length;
        }
      }, {
        key: "toCtrlrConf",
        value: function toCtrlrConf() {
          var ret = new CtrlrConf(this.id, this.ctrlrTagName, this.description, this.ctrlrTempl, this.mainParams);
          ret.ctrlrConfTabs = this.ctrlrConfTabs;
          ret.ctrlrMatrixPairs = this.ctrlrMatrixPairs;
          return ret;
        }
      }]);

      return CtrlrConfVw;
    }(CtrlrConf);

    var CtrlrConfTab =
    /*#__PURE__*/
    function () {
      function CtrlrConfTab(tabName, tabId, ctrlrTempl, rows) {
        _classCallCheck(this, CtrlrConfTab);

        this.headers = null;
        this.headerDescs = null;
        this.tabName = tabName;
        this.tabId = tabId;
        this.ctrlrTempl = ctrlrTempl;
        this.rows = rows;
      }

      _createClass(CtrlrConfTab, [{
        key: "getColHeaders",
        value: function getColHeaders() {
          var _this26 = this;

          if (this.headers == null) {
            this.headers = [];
            this.ctrlrTempl.params.forEach(function (p) {
              if (p.ctrlrTemplTabId == _this26.tabId) _this26.headers = _this26.headers.concat(p.name);
            });
          }

          return this.headers;
        }
      }, {
        key: "getColHeadersDesc",
        value: function getColHeadersDesc() {
          var _this27 = this;

          if (this.headerDescs == null) {
            this.headerDescs = [];
            this.ctrlrTempl.params.forEach(function (p) {
              if (p.ctrlrTemplTabId == _this27.tabId) _this27.headerDescs = _this27.headerDescs.concat(p.desc);
            });
          }

          return this.headerDescs;
        }
      }, {
        key: "getCtrlrConfRowVws",
        value: function getCtrlrConfRowVws() {
          var _this28 = this;

          var rowVws = [];
          this.rows.forEach(function (r) {
            return rowVws = rowVws.concat(_this28.genCtrlrConfRowVw(r));
          });
          return rowVws;
        }
      }, {
        key: "genCtrlrConfRowVw",
        value: function genCtrlrConfRowVw(r) {
          var rowVw = new CtrlrConfRowVw();
          rowVw.id = r.id;
          var hdrs = this.getColHeaders();

          for (var n = 0; n < hdrs.length; n++) {
            //console.log(r.cols);
            var rC = r.cols.find(function (i) {
              return i.ctrlrTemplParam.name == hdrs[n];
            });

            if (n == 0) {
              rowVw.c0 = rC;
              continue;
            }

            if (n == 1) {
              rowVw.c1 = rC;
              continue;
            }

            if (n == 2) {
              rowVw.c2 = rC;
              continue;
            }

            if (n == 3) {
              rowVw.c3 = rC;
              continue;
            }

            if (n == 4) {
              rowVw.c4 = rC;
              continue;
            }

            if (n == 5) {
              rowVw.c5 = rC;
              continue;
            }

            if (n == 6) {
              rowVw.c6 = rC;
              continue;
            }

            if (n == 7) {
              rowVw.c7 = rC;
              continue;
            }

            if (n == 8) {
              rowVw.c8 = rC;
              continue;
            }

            if (n == 9) {
              rowVw.c9 = rC;
              continue;
            }

            if (n == 10) {
              rowVw.c10 = rC;
              continue;
            }

            if (n == 11) {
              rowVw.c11 = rC;
              continue;
            }

            if (n == 12) {
              rowVw.c12 = rC;
              continue;
            }

            if (n == 13) {
              rowVw.c13 = rC;
              continue;
            }

            if (n == 14) {
              rowVw.c14 = rC;
              continue;
            }

            if (n == 15) {
              rowVw.c15 = rC;
              continue;
            }

            if (n == 16) {
              rowVw.c16 = rC;
              continue;
            }

            if (n == 17) {
              rowVw.c17 = rC;
              continue;
            }

            if (n == 18) {
              rowVw.c18 = rC;
              continue;
            }

            if (n == 19) {
              rowVw.c19 = rC;
              continue;
            }

            if (n == 20) {
              rowVw.c20 = rC;
              continue;
            }

            if (n == 21) {
              rowVw.c21 = rC;
              continue;
            }

            if (n == 22) {
              rowVw.c22 = rC;
              continue;
            }

            if (n == 23) {
              rowVw.c23 = rC;
              continue;
            }

            if (n == 24) {
              rowVw.c24 = rC;
              continue;
            }

            if (n == 25) {
              rowVw.c25 = rC;
              continue;
            }

            if (n == 26) {
              rowVw.c26 = rC;
              continue;
            }

            if (n == 27) {
              rowVw.c27 = rC;
              continue;
            }

            if (n == 28) {
              rowVw.c28 = rC;
              continue;
            }

            if (n == 29) {
              rowVw.c29 = rC;
              continue;
            }

            if (n == 30) {
              rowVw.c30 = rC;
              continue;
            }

            if (n == 31) {
              rowVw.c31 = rC;
              continue;
            }

            if (n == 32) {
              rowVw.c32 = rC;
              continue;
            }

            if (n == 33) {
              rowVw.c33 = rC;
              continue;
            }

            if (n == 34) {
              rowVw.c34 = rC;
              continue;
            }

            if (n == 35) {
              rowVw.c35 = rC;
              continue;
            }

            if (n == 36) {
              rowVw.c36 = rC;
              continue;
            }

            if (n == 37) {
              rowVw.c37 = rC;
              continue;
            }

            if (n == 38) {
              rowVw.c38 = rC;
              continue;
            }

            if (n == 39) {
              rowVw.c39 = rC;
              continue;
            }

            if (n == 40) {
              rowVw.c40 = rC;
              continue;
            }

            if (n == 41) {
              rowVw.c41 = rC;
              continue;
            }

            if (n == 42) {
              rowVw.c42 = rC;
              continue;
            }

            if (n == 43) {
              rowVw.c43 = rC;
              continue;
            }

            if (n == 44) {
              rowVw.c44 = rC;
              continue;
            }

            if (n == 45) {
              rowVw.c45 = rC;
              continue;
            }

            if (n == 46) {
              rowVw.c46 = rC;
              continue;
            }

            if (n == 47) {
              rowVw.c47 = rC;
              continue;
            }

            if (n == 48) {
              rowVw.c48 = rC;
              continue;
            }

            if (n == 49) {
              rowVw.c49 = rC;
              continue;
            }

            if (n == 50) {
              rowVw.c50 = rC;
              continue;
            }

            if (n == 51) {
              rowVw.c51 = rC;
              continue;
            }

            if (n == 52) {
              rowVw.c52 = rC;
              continue;
            }

            if (n == 53) {
              rowVw.c53 = rC;
              continue;
            }

            if (n == 54) {
              rowVw.c54 = rC;
              continue;
            }

            if (n == 55) {
              rowVw.c55 = rC;
              continue;
            }

            if (n == 56) {
              rowVw.c56 = rC;
              continue;
            }

            if (n == 57) {
              rowVw.c57 = rC;
              continue;
            }

            if (n == 58) {
              rowVw.c58 = rC;
              continue;
            }

            if (n == 59) {
              rowVw.c59 = rC;
              continue;
            }

            if (n == 60) {
              rowVw.c60 = rC;
              continue;
            }

            if (n == 61) {
              rowVw.c61 = rC;
              continue;
            }

            if (n == 62) {
              rowVw.c62 = rC;
              continue;
            }

            if (n == 63) {
              rowVw.c63 = rC;
              continue;
            }

            if (n == 64) {
              rowVw.c64 = rC;
              continue;
            }

            if (n == 65) {
              rowVw.c65 = rC;
              continue;
            }

            if (n == 66) {
              rowVw.c66 = rC;
              continue;
            }

            if (n == 67) {
              rowVw.c67 = rC;
              continue;
            }

            if (n == 68) {
              rowVw.c68 = rC;
              continue;
            }

            if (n == 69) {
              rowVw.c69 = rC;
              continue;
            }

            if (n == 70) {
              rowVw.c70 = rC;
              continue;
            }

            if (n == 71) {
              rowVw.c71 = rC;
              continue;
            }

            if (n == 72) {
              rowVw.c72 = rC;
              continue;
            }

            if (n == 73) {
              rowVw.c73 = rC;
              continue;
            }

            if (n == 74) {
              rowVw.c74 = rC;
              continue;
            }

            if (n == 75) {
              rowVw.c75 = rC;
              continue;
            }

            if (n == 76) {
              rowVw.c76 = rC;
              continue;
            }

            if (n == 77) {
              rowVw.c77 = rC;
              continue;
            }

            if (n == 78) {
              rowVw.c78 = rC;
              continue;
            }

            if (n == 79) {
              rowVw.c79 = rC;
              continue;
            }

            if (n == 80) {
              rowVw.c80 = rC;
              continue;
            }

            if (n == 81) {
              rowVw.c81 = rC;
              continue;
            }

            if (n == 82) {
              rowVw.c82 = rC;
              continue;
            }

            if (n == 83) {
              rowVw.c83 = rC;
              continue;
            }

            if (n == 84) {
              rowVw.c84 = rC;
              continue;
            }

            if (n == 85) {
              rowVw.c85 = rC;
              continue;
            }

            if (n == 86) {
              rowVw.c86 = rC;
              continue;
            }

            if (n == 87) {
              rowVw.c87 = rC;
              continue;
            }

            if (n == 88) {
              rowVw.c88 = rC;
              continue;
            }

            if (n == 89) {
              rowVw.c89 = rC;
              continue;
            }

            if (n == 90) {
              rowVw.c90 = rC;
              continue;
            }

            if (n == 91) {
              rowVw.c91 = rC;
              continue;
            }

            if (n == 92) {
              rowVw.c92 = rC;
              continue;
            }

            if (n == 93) {
              rowVw.c93 = rC;
              continue;
            }

            if (n == 94) {
              rowVw.c94 = rC;
              continue;
            }

            if (n == 95) {
              rowVw.c95 = rC;
              continue;
            }

            if (n == 96) {
              rowVw.c96 = rC;
              continue;
            }

            if (n == 97) {
              rowVw.c97 = rC;
              continue;
            }

            if (n == 98) {
              rowVw.c98 = rC;
              continue;
            }

            if (n == 99) {
              rowVw.c99 = rC;
              continue;
            }
          }

          return rowVw;
        }
      }]);

      return CtrlrConfTab;
    }();

    var CtrlrConfRow =
    /*#__PURE__*/
    function () {
      function CtrlrConfRow(id, cols) {
        _classCallCheck(this, CtrlrConfRow);

        this.cols = cols;
        if (id == null) this.id = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].newGuid();else this.id = id;
      }

      _createClass(CtrlrConfRow, [{
        key: "getBasicInfo",
        value: function getBasicInfo() {
          var num = this.cols.find(function (c) {
            return c.ctrlrTemplParam.name == "Number";
          }).value;
          var desc = this.cols.find(function (c) {
            return c.ctrlrTemplParam.name == "Description";
          }).value;
          return new XVBasicInfoVw(num, desc);
        }
      }]);

      return CtrlrConfRow;
    }();

    var CtrlrConfRowCol = function CtrlrConfRowCol(value, isOPTag, ctrlrTemplParam) {
      _classCallCheck(this, CtrlrConfRowCol);

      this.value = value;
      this.isOPTag = isOPTag;
      this.ctrlrTemplParam = ctrlrTemplParam;
    };

    var CtrlrConfRowVw =
    /*#__PURE__*/
    function () {
      function CtrlrConfRowVw() {
        _classCallCheck(this, CtrlrConfRowVw);
      }

      _createClass(CtrlrConfRowVw, [{
        key: "getCtrlrConfRowCol",
        value: function getCtrlrConfRowCol(n) {
          if (n == 0) return this.c0;
          if (n == 1) return this.c1;
          if (n == 2) return this.c2;
          if (n == 3) return this.c3;
          if (n == 4) return this.c4;
          if (n == 5) return this.c5;
          if (n == 6) return this.c6;
          if (n == 7) return this.c7;
          if (n == 8) return this.c8;
          if (n == 9) return this.c9;
          if (n == 10) return this.c10;
          if (n == 11) return this.c11;
          if (n == 12) return this.c12;
          if (n == 13) return this.c13;
          if (n == 14) return this.c14;
          if (n == 15) return this.c15;
          if (n == 16) return this.c16;
          if (n == 17) return this.c17;
          if (n == 18) return this.c18;
          if (n == 19) return this.c19;
          if (n == 20) return this.c20;
          if (n == 21) return this.c21;
          if (n == 22) return this.c22;
          if (n == 23) return this.c23;
          if (n == 24) return this.c24;
          if (n == 25) return this.c25;
          if (n == 26) return this.c26;
          if (n == 27) return this.c27;
          if (n == 28) return this.c28;
          if (n == 29) return this.c29;
          if (n == 30) return this.c30;
          if (n == 31) return this.c31;
          if (n == 32) return this.c32;
          if (n == 33) return this.c33;
          if (n == 34) return this.c34;
          if (n == 35) return this.c35;
          if (n == 36) return this.c36;
          if (n == 37) return this.c37;
          if (n == 38) return this.c38;
          if (n == 39) return this.c39;
          if (n == 40) return this.c40;
          if (n == 41) return this.c41;
          if (n == 42) return this.c42;
          if (n == 43) return this.c43;
          if (n == 44) return this.c44;
          if (n == 45) return this.c45;
          if (n == 46) return this.c46;
          if (n == 47) return this.c47;
          if (n == 48) return this.c48;
          if (n == 49) return this.c49;
          if (n == 50) return this.c50;
          if (n == 51) return this.c51;
          if (n == 52) return this.c52;
          if (n == 53) return this.c53;
          if (n == 54) return this.c54;
          if (n == 55) return this.c55;
          if (n == 56) return this.c56;
          if (n == 57) return this.c57;
          if (n == 58) return this.c58;
          if (n == 59) return this.c59;
          if (n == 60) return this.c60;
          if (n == 61) return this.c61;
          if (n == 62) return this.c62;
          if (n == 63) return this.c63;
          if (n == 64) return this.c64;
          if (n == 65) return this.c65;
          if (n == 66) return this.c66;
          if (n == 67) return this.c67;
          if (n == 68) return this.c68;
          if (n == 69) return this.c69;
          if (n == 70) return this.c70;
          if (n == 71) return this.c71;
          if (n == 72) return this.c72;
          if (n == 73) return this.c73;
          if (n == 74) return this.c74;
          if (n == 75) return this.c75;
          if (n == 76) return this.c76;
          if (n == 77) return this.c77;
          if (n == 78) return this.c78;
          if (n == 79) return this.c79;
          if (n == 80) return this.c80;
          if (n == 81) return this.c81;
          if (n == 82) return this.c82;
          if (n == 83) return this.c83;
          if (n == 84) return this.c84;
          if (n == 85) return this.c85;
          if (n == 86) return this.c86;
          if (n == 87) return this.c87;
          if (n == 88) return this.c88;
          if (n == 89) return this.c89;
          if (n == 90) return this.c90;
          if (n == 91) return this.c91;
          if (n == 92) return this.c92;
          if (n == 93) return this.c93;
          if (n == 94) return this.c94;
          if (n == 95) return this.c95;
          if (n == 96) return this.c96;
          if (n == 97) return this.c97;
          if (n == 98) return this.c98;
          if (n == 99) return this.c99;
        }
      }]);

      return CtrlrConfRowVw;
    }();

    var CtrlrMatrixPair = function CtrlrMatrixPair(cVNum, mVNum, value) {
      _classCallCheck(this, CtrlrMatrixPair);

      this.cVNum = cVNum;
      this.mVNum = mVNum;
      this.value = value;
    };

    var CtrlrVw = function CtrlrVw() {
      _classCallCheck(this, CtrlrVw);
    }; //this is a view


    var XVBasicInfoVw = function XVBasicInfoVw(num, desc) {
      _classCallCheck(this, XVBasicInfoVw);

      this.description = desc;
      this.number = num;
    };

    var CtrlrMatrixVw = function CtrlrMatrixVw(ctrlrMatrixPairs) {
      _classCallCheck(this, CtrlrMatrixVw);

      this.ctrlrMatrixPairs = ctrlrMatrixPairs;
      this.rows = [];
    };

    var CtrlrMatrixRowVw = function CtrlrMatrixRowVw() {
      _classCallCheck(this, CtrlrMatrixRowVw);

      this.cells = [];
    };

    var CtrlrMatrixCellVw = function CtrlrMatrixCellVw(ctrlrMatrixCellType, editMode, value, xvnum, xVBasicInfoVw, xVRowCols) {
      _classCallCheck(this, CtrlrMatrixCellVw);

      this.ctrlrMatrixCellType = ctrlrMatrixCellType;
      this.editMode = editMode;
      this.value = value;
      this.xvnum = xvnum;
      this.xVBasicInfoVw = xVBasicInfoVw;
      this.xVRowCols = xVRowCols;
    }; // export class CtrlrMainParamVw extends CtrlrConfRowCol {
    //     constructor(ctrlrConfRowCol: CtrlrConfRowCol) {
    //         super(ctrlrConfRowCol.value, ctrlrConfRowCol.isOPTag, ctrlrConfRowCol.ctrlrTemplParam);
    //     }
    //     result: string;
    // }

    /***/

  },

  /***/
  "./src/app/model/model-ctrlr-templ.ts":
  /*!********************************************!*\
    !*** ./src/app/model/model-ctrlr-templ.ts ***!
    \********************************************/

  /*! exports provided: CtrlrTempl, MapPair, Mapping, CtrlrTemplParam, CtrlrTemplVw, CtrlrTemplTabVw */

  /***/
  function srcAppModelModelCtrlrTemplTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrTempl", function () {
      return CtrlrTempl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPair", function () {
      return MapPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mapping", function () {
      return Mapping;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrTemplParam", function () {
      return CtrlrTemplParam;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrTemplVw", function () {
      return CtrlrTemplVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrTemplTabVw", function () {
      return CtrlrTemplTabVw;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../global */
    "./src/app/global.ts"); //import { CtrlrTempl, CtrlrTemplParam } from './../model/model-ctrlr-templ';
    //******* CONTROLLER TEMPLATES *******************************


    var CtrlrTempl =
    /*#__PURE__*/
    function () {
      function CtrlrTempl(id, name, params, mappings) {
        _classCallCheck(this, CtrlrTempl);

        this.mappings = [];
        if (id == null) this.id = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].newGuid();else this.id = id;
        this.name = name;
        this.params = params;
        this.mappings = mappings;
      }

      _createClass(CtrlrTempl, [{
        key: "genCtrlrTemplConfVw",
        value: function genCtrlrTemplConfVw() {
          var _this29 = this;

          var tabs = [];

          var _loop2 = function _loop2() {
            var ctrlrTemplParams = [];

            _this29.params.forEach(function (r) {
              if (r.ctrlrTemplTabId == n) {
                ctrlrTemplParams = ctrlrTemplParams.concat(new CtrlrTemplParam(r.name, r.desc, r.dType, r.canUseOPTag, r.canEdit, r.kPIGroup, r.ctrlrTemplTabId, r.canEditTempl, r.cssClass, r.viewHeader, r.viewHeaderGr, r.mapping, r.numberFormat));
              }
            });

            tabs = tabs.concat(new CtrlrTemplTabVw(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].ctrlrConfTabNames[n], n == 1 || n == 2, _this29, ctrlrTemplParams, n));
          };

          for (var n = 0; n <= 4; n++) {
            _loop2();
          }

          var cT = new CtrlrTemplVw(this.id, this.name, tabs, this.mappings);
          return cT;
        }
      }, {
        key: "getParamsOfTabId",
        value: function getParamsOfTabId(tabId) {
          var psT = [];
          this.params.forEach(function (r) {
            if (r.ctrlrTemplTabId == tabId) {
              psT = psT.concat(new CtrlrTemplParam(r.name, r.desc, r.dType, r.canUseOPTag, r.canEdit, r.kPIGroup, r.ctrlrTemplTabId, r.canEditTempl, r.cssClass, r.viewHeader, r.viewHeaderGr, r.mapping, r.numberFormat));
            }
          });
          return psT;
        }
      }]);

      return CtrlrTempl;
    }();

    var MapPair = function MapPair(val, text, colorHex) {
      _classCallCheck(this, MapPair);

      this.val = val;
      this.text = text;
      this.colorHex = colorHex;
      this.showCP = false;
    };

    var Mapping =
    /*#__PURE__*/
    function () {
      function Mapping() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 ? arguments[1] : undefined;
        var mapPairs = arguments.length > 2 ? arguments[2] : undefined;
        var canDelete = arguments.length > 3 ? arguments[3] : undefined;

        _classCallCheck(this, Mapping);

        if (this.id == null) this.id = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].newGuid();else this.id = id;
        this.name = name;
        this.mapPairs = mapPairs;
        this.canDelete = canDelete;
      }

      _createClass(Mapping, [{
        key: "getValueText",
        value: function getValueText(val) {
          var mp = this.mapPairs.find(function (mp) {
            return mp.val == val;
          });
          if (mp == null) return null;
          return mp.text;
        }
      }, {
        key: "getValueColor",
        value: function getValueColor(val) {
          var mp = this.mapPairs.find(function (mp) {
            return mp.val == val;
          });
          if (mp == null) return null;
          return mp.colorHex;
        }
      }]);

      return Mapping;
    }();

    var CtrlrTemplParam = function CtrlrTemplParam(name, desc, dType, canUseOPTag, canEdit, kPIGroup, ctrlrTemplTabId, canEditTempl, cssClass, viewHeader, viewHeaderGr, mapping, numberFormat) {
      _classCallCheck(this, CtrlrTemplParam);

      this.name = name;
      this.desc = desc;
      this.dType = dType;
      this.canUseOPTag = canUseOPTag;
      this.canEdit = canEdit;
      this.kPIGroup = kPIGroup;
      this.ctrlrTemplTabId = ctrlrTemplTabId;
      this.canEditTempl = canEditTempl;
      this.cssClass = cssClass;
      this.viewHeader = viewHeader;
      this.viewHeaderGr = viewHeaderGr;
      this.mapping = mapping;
      this.numberFormat = numberFormat;
    }; //This is used during Controller template configuration


    var CtrlrTemplVw =
    /*#__PURE__*/
    function () {
      function CtrlrTemplVw(id, name, ctrlrTemplTabVws, mappings) {
        _classCallCheck(this, CtrlrTemplVw);

        if (id == null) this.id = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].newGuid();else this.id = id;
        this.name = name;
        this.tabs = ctrlrTemplTabVws;
        this.mappings = mappings;
      }

      _createClass(CtrlrTemplVw, [{
        key: "toCtrlrTempl",
        value: function toCtrlrTempl() {
          var params = [];
          this.tabs.forEach(function (t) {
            return params = params.concat(t.params);
          });
          var ret = new CtrlrTempl(this.id, this.name, params, this.mappings);
          return ret;
        }
      }]);

      return CtrlrTemplVw;
    }();

    var CtrlrTemplTabVw = function CtrlrTemplTabVw(name, showKPIGroup, ctrlrTempl, params, ctrlrTemplTabId) {
      _classCallCheck(this, CtrlrTemplTabVw);

      this.name = name;
      this.showKPIGroup = showKPIGroup;
      this.params = params;
      this.ctrlrTempl = ctrlrTempl;
      this.ctrlrTemplTabId = ctrlrTemplTabId;
    };
    /***/

  },

  /***/
  "./src/app/model/model-ctrlr.ts":
  /*!**************************************!*\
    !*** ./src/app/model/model-ctrlr.ts ***!
    \**************************************/

  /*! exports provided: CtrlrHomeVw, CtrlrXVKPIVw, HeaderCell, DataRow, DataCell, CtrlrTopStripVw */

  /***/
  function srcAppModelModelCtrlrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrHomeVw", function () {
      return CtrlrHomeVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrXVKPIVw", function () {
      return CtrlrXVKPIVw;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderCell", function () {
      return HeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRow", function () {
      return DataRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataCell", function () {
      return DataCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrTopStripVw", function () {
      return CtrlrTopStripVw;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./enums */
    "./src/app/model/enums.ts");

    var CtrlrHomeVw =
    /*#__PURE__*/
    function () {
      function CtrlrHomeVw(ctrlrConf) {
        _classCallCheck(this, CtrlrHomeVw);

        this.id = ctrlrConf.id;
        this.ctrlrTagName = ctrlrConf.ctrlrTagName;
        this.description = ctrlrConf.description;
        this.nCV = ctrlrConf.ctrlrConfTabs.find(function (t) {
          return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_1__["CtrlrVarType"].CV;
        }).rows.length;
        this.nMV = ctrlrConf.ctrlrConfTabs.find(function (t) {
          return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_1__["CtrlrVarType"].MV;
        }).rows.length;
        this.nDV = ctrlrConf.ctrlrConfTabs.find(function (t) {
          return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_1__["CtrlrVarType"].DV;
        }).rows.length;
        this.nINF = ctrlrConf.ctrlrConfTabs.find(function (t) {
          return t.tabId == _enums__WEBPACK_IMPORTED_MODULE_1__["CtrlrVarType"].INF;
        }).rows.length;
        this.modeMapping = ctrlrConf.getCtrlrRowCol("Mode").ctrlrTemplParam.mapping;
        this.mode = "";
        var Temp = ctrlrConf.mainParams.find(function (mp) {
          return mp.ctrlrTemplParam.name == "Mode";
        });

        if (Temp != null) {
          if (Temp.isOPTag) this.modeTagId = Temp.value;else {
            this.modeTagId = null;
            this.mode = Temp.value;
          }
        }

        this.statusMapping = ctrlrConf.getCtrlrRowCol("Status").ctrlrTemplParam.mapping;
        this.status = "";
        var Temp2 = ctrlrConf.mainParams.find(function (mp) {
          return mp.ctrlrTemplParam.name == "Status";
        });

        if (Temp2 != null) {
          if (Temp2.isOPTag) this.statusTagId = Temp2.value;else {
            this.statusTagId = null;
            this.status = Temp2.value;
          }
        }

        this.ctrlrConf = ctrlrConf;
      } // private getFetchItems(): FetchItem[] {
      //     let fetchItems: FetchItem[] = [];
      //     this.ctrlrConf.mainParams.forEach(mp => {
      //         if (mp.isOPTag) fetchItems = fetchItems.concat(new FetchItem(mp.value, mp.ctrlrTemplParam.name));
      //         else this.status = mp.value;
      //     });
      //     return fetchItems;
      // }


      _createClass(CtrlrHomeVw, [{
        key: "update",
        value: function update(opFetch) {
          if (this.statusTagId != null) {
            this.statusNumber = opFetch.getResult(this.statusTagId);
            if (this.statusMapping == null) this.status = this.statusNumber.toString();else this.status = this.statusMapping.getValueText(this.statusNumber);
          }

          if (this.modeTagId != null) {
            this.modeNumber = opFetch.getResult(this.modeTagId);
            if (this.modeMapping == null) this.mode = this.modeNumber.toString();else this.mode = this.modeMapping.getValueText(this.modeNumber);
          }
        }
      }]);

      return CtrlrHomeVw;
    }();

    var CtrlrXVKPIVw = function CtrlrXVKPIVw(name, tabLabel, ctrlrVarType, headerTopRow, headerBotRow, dataRows) {
      _classCallCheck(this, CtrlrXVKPIVw);

      this.name = name;
      this.tabLabel = tabLabel;
      this.ctrlrVarType = ctrlrVarType;
      this.headerTopRow = headerTopRow;
      this.headerBotRow = headerBotRow;
      this.dataRows = dataRows;
    }; //This is for view


    var HeaderCell = function HeaderCell(rowSpan, colSpan, header) {
      _classCallCheck(this, HeaderCell);

      this.rowSpan = rowSpan;
      this.colSpan = colSpan;
      this.header = header;
    }; //This is for view


    var DataRow = function DataRow(dataCells) {
      _classCallCheck(this, DataRow);

      this.dataCells = dataCells;
    }; //This is for view


    var DataCell =
    /*#__PURE__*/
    function () {
      function DataCell(value, tagId, color, ctrlrTemplParam) {
        _classCallCheck(this, DataCell);

        this.value = value;
        this.tagId = tagId;
        this.color = color;
        this.ctrlrTemplParam = ctrlrTemplParam;
        this.setValue(value);
      }

      _createClass(DataCell, [{
        key: "setValue",
        value: function setValue(valueIn) {
          this.value = valueIn;

          if (this.ctrlrTemplParam.dType == _enums__WEBPACK_IMPORTED_MODULE_1__["DType"].string) {
            this.valueStr = this.value;
          } else {
            switch (this.ctrlrTemplParam.numberFormat) {
              case _enums__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].TwoDecimals:
                this.valueStr = (Math.round(this.value * 100) / 100).toFixed(2).toString();
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].Percentage:
                this.valueStr = (Math.round(this.value * 10) / 10).toFixed(1).toString() + '%';
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].None:
                if (this.ctrlrTemplParam.mapping == null) this.valueStr = valueIn;else {
                  var mp = this.ctrlrTemplParam.mapping.mapPairs.find(function (mp) {
                    return mp.val == valueIn;
                  });

                  if (mp != null) {
                    this.valueStr = mp.text;
                    this.color = mp.colorHex;
                  } else this.valueStr = valueIn;
                }
                break;
            }
          }
        }
      }]);

      return DataCell;
    }();

    var CtrlrTopStripVw = function CtrlrTopStripVw() {
      _classCallCheck(this, CtrlrTopStripVw);

      // this.mode = null;
      // this.modeColor = "";
      // this.modeMapping = null;
      // this.status = null;
      // this.statusColor = "";
      // this.statusMapping = null;
      // this.benefitN = null;
      // this.benefitColor = "";
      this.fetchItems = [];
    };
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/numeric-real-input.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/numeric-real-input.directive.ts ***!
    \*************************************************/

  /*! exports provided: NumericRealInput */

  /***/
  function srcAppNumericRealInputDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumericRealInput", function () {
      return NumericRealInput;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NumericRealInput =
    /*#__PURE__*/
    function () {
      function NumericRealInput(el) {
        _classCallCheck(this, NumericRealInput);

        this.el = el;
      }

      _createClass(NumericRealInput, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if (this.NumericRealInput) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
            e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
            e.keyCode === 67 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+V
            e.keyCode === 86 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+X
            e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
            e.keyCode >= 35 && e.keyCode <= 39 || e.keyCode == 27 || e.keyCode == 13) {
              // let it happen, don't do anything
              return;
            } // Ensure that it is a number and stop the keypress


            if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
            }
          }
        }
      }]);

      return NumericRealInput;
    }();

    NumericRealInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NumericRealInput.prototype, "NumericRealInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], NumericRealInput.prototype, "onKeyDown", null);
    NumericRealInput = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[NumericRealInput]'
    })], NumericRealInput);
    /***/
  },

  /***/
  "./src/app/services/ahref-renderer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/ahref-renderer.component.ts ***!
    \******************************************************/

  /*! exports provided: AhrefRendererComponent */

  /***/
  function srcAppServicesAhrefRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AhrefRendererComponent", function () {
      return AhrefRendererComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AhrefRendererComponent =
    /*#__PURE__*/
    //*ngIf="ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag"
    function () {
      function AhrefRendererComponent() {
        _classCallCheck(this, AhrefRendererComponent);
      }

      _createClass(AhrefRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
          this.hrefLink = params.hrefLink;
          this.hrefText = params.hrefText;
          this.aClass = params.aClass;
          this.aStyle = params.aStyle;

          if (this.params.routerLinkText instanceof Function) {
            this.routerLinkText = this.params.routerLinkText(this.params.node.data);
          } else this.routerLinkText = params.routerLinkText;

          if (this.params.hrefLink instanceof Function) {
            this.hrefLink = this.params.hrefLink(this.params.node.data);
          } else this.hrefLink = params.hrefLink;

          if (this.params.hrefText instanceof Function) {
            this.hrefText = this.params.hrefText(this.params.node.data);
          } else this.hrefText = params.hrefText;

          if (this.params.isVisible instanceof Function) {
            this.isVisible = this.params.isVisible(this.params.node.data);
          } else this.isVisible = params.isVisible;

          if (this.params.isEnabled instanceof Function) {
            this.isEnabled = this.params.isEnabled(this.params.node.data);
          } else this.isEnabled = params.isEnabled;
        }
      }, {
        key: "refresh",
        value: function refresh(params) {
          return true;
        }
      }]);

      return AhrefRendererComponent;
    }();

    AhrefRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ahref-renderer',
      template: "\n    <a href=\"{{hrefLink}}\" routerLink=\"{{routerLinkText}}\" class=\"{{aClass}}\" [ngStyle]=\"aStyle\" *ngIf=\"isVisible && isEnabled\">{{hrefText}}</a>\n    <span *ngIf=\"!isEnabled\" class=\"{{aClass}}\" [ngStyle]=\"aStyle\">{{hrefText}}</span>\n    "
    }) //*ngIf="ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag"
    ], AhrefRendererComponent);
    /***/
  },

  /***/
  "./src/app/services/button-renderer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/button-renderer.component.ts ***!
    \*******************************************************/

  /*! exports provided: ButtonRendererComponent */

  /***/
  function srcAppServicesButtonRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonRendererComponent", function () {
      return ButtonRendererComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // Author: T4professor


    var ButtonRendererComponent =
    /*#__PURE__*/
    function () {
      function ButtonRendererComponent() {
        _classCallCheck(this, ButtonRendererComponent);

        this.isVisible = true;
      }

      _createClass(ButtonRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
          this.label = this.params.label || null;

          if (this.params.isVisible instanceof Function) {
            this.isVisible = this.params.isVisible(this.params.node.data);
          }

          this.iconClass = this.params.iconClass;
          this.btnClass = this.params.btnClass;
        }
      }, {
        key: "refresh",
        value: function refresh(params) {
          return true;
        }
      }, {
        key: "onClick",
        value: function onClick($event) {
          if (this.params.onClick instanceof Function) {
            var params = {
              object: this,
              event: $event,
              rowData: this.params.node.data
            };
            this.params.onClick(params);
          }
        }
      }]);

      return ButtonRendererComponent;
    }();

    ButtonRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button-renderer',
      template: "\n    <div class=\"d-flex\"><button type=\"button\" class=\"{{btnClass}}\" *ngIf=\"isVisible\" (click)=\"onClick($event)\"><i class=\"{{iconClass}}\"></i>{{label}}</button></div>\n    "
    })], ButtonRendererComponent);
    /***/
  },

  /***/
  "./src/app/services/checkbox-renderer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/checkbox-renderer.component.ts ***!
    \*********************************************************/

  /*! exports provided: CheckBoxRendererComponent */

  /***/
  function srcAppServicesCheckboxRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxRendererComponent", function () {
      return CheckBoxRendererComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // Author: T4professor


    var CheckBoxRendererComponent =
    /*#__PURE__*/
    function () {
      function CheckBoxRendererComponent() {
        _classCallCheck(this, CheckBoxRendererComponent);

        this.disablecb = false;
      }

      _createClass(CheckBoxRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
          this.field = params.colDef.field;

          if (this.params.disabled instanceof Function) {
            this.disablecb = this.params.disabled(this.params.node.data);
          }

          this.checkBoxClass = this.params.checkBoxClass;
        }
      }, {
        key: "refresh",
        value: function refresh(params) {
          return true;
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          this.params.node.data[this.field] = !this.params.node.data[this.field];

          if (this.params.onChange instanceof Function) {
            var params = {
              object: this,
              event: $event,
              rowData: this.params.node.data,
              value: this.params.node.data[this.field]
            };
            this.params.onChange(params);
          }
        }
      }]);

      return CheckBoxRendererComponent;
    }();

    CheckBoxRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkbox-renderer',
      template: "    \n    <div class=\"d-flex\"><input type='checkbox' class=\"{{checkBoxClass}}\" (change)=\"onChange($event)\" [disabled]=\"disablecb\" \n    [checked]=\"params.value\"  /></div>\n    "
    })], CheckBoxRendererComponent);
    /***/
  },

  /***/
  "./src/app/services/ctrlr-cell-renderer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/ctrlr-cell-renderer.component.ts ***!
    \***********************************************************/

  /*! exports provided: CtrlrCellRendererComponent */

  /***/
  function srcAppServicesCtrlrCellRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlrCellRendererComponent", function () {
      return CtrlrCellRendererComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // Author: T4professor


    var CtrlrCellRendererComponent =
    /*#__PURE__*/
    //*ngIf="ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag"
    function () {
      function CtrlrCellRendererComponent() {
        _classCallCheck(this, CtrlrCellRendererComponent);
      }

      _createClass(CtrlrCellRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
          this.ctrlrConfRowCol = params.value;
        }
      }, {
        key: "refresh",
        value: function refresh(params) {
          return true;
        }
      }, {
        key: "onClick",
        value: function onClick($event) {
          if (this.params.onClick instanceof Function) {
            this.params.onClick(this.ctrlrConfRowCol);
          }
        }
      }]);

      return CtrlrCellRendererComponent;
    }();

    CtrlrCellRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ctrlr-cell-renderer',
      template: "\n    <div class=\"d-flex align-items-center justify-content-center\" >\n        <input type=\"text\" [(ngModel)]=\"ctrlrConfRowCol.value\" style=\"height: 22px;\" class=\"{{ctrlrConfRowCol.ctrlrTemplParam.cssClass}}\" \n        [disabled]=\"!(ctrlrConfRowCol.ctrlrTemplParam.canEdit)\" />\n        <div class=\"d-flex flex-row align-items-center\" *ngIf=\"ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag\" >\n            <input class=\"ml-1\" style='margin-top:1px' type='checkbox'\n            [disabled]=\"!(ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag && ctrlrConfRowCol.ctrlrTemplParam.canEdit)\"\n            [(ngModel)]=\"ctrlrConfRowCol.isOPTag\"  />\n            <span>OP Tag</span>\n            <button *ngIf=\"ctrlrConfRowCol.ctrlrTemplParam.canEdit\" [disabled]=\"!(ctrlrConfRowCol.isOPTag && ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag && ctrlrConfRowCol.ctrlrTemplParam.canEdit)\" \n                class=\"ml-1 btn btn-primary btn-sm d-flex justify-content-center\" (click)=\"onClick($event)\" type=\"button\" style=\"height: 22px;width: 22px;\">\n                <i class=\"fa fa-external-link d-flex\" style=\"margin-left: 2px;\"></i>\n            </button>\n        </div>\n    </div>\n    "
    }) //*ngIf="ctrlrConfRowCol.ctrlrTemplParam.canUseOPTag"
    ], CtrlrCellRendererComponent);
    /***/
  },

  /***/
  "./src/app/services/enum-kvp-renderer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/enum-kvp-renderer.component.ts ***!
    \*********************************************************/

  /*! exports provided: EnumKVPRenderer, EnumKVP */

  /***/
  function srcAppServicesEnumKvpRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumKVPRenderer", function () {
      return EnumKVPRenderer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumKVP", function () {
      return EnumKVP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EnumKVPRenderer =
    /*#__PURE__*/
    function () {
      function EnumKVPRenderer() {
        _classCallCheck(this, EnumKVPRenderer);

        this.isVisible = true;
        this.disableC = false;
      }

      _createClass(EnumKVPRenderer, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
          this.selectClass = params.selectClass;
          this.enumKVPs = params.enumKVPs;
          this.selectStyle = params.selectStyle;
          this.field = params.colDef.field;

          if (this.params.isVisible instanceof Function) {
            this.isVisible = this.params.isVisible(this.params.node.data);
          }

          if (this.params.disabled instanceof Function) {
            this.disableC = this.params.disabled(this.params.node.data);
          }
        }
      }, {
        key: "evaluateSelected",
        value: function evaluateSelected(enumKVP) {
          if (this.params.value == null || this.params.value.id == null) return false;
          return this.params.value.id == enumKVP.key;
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          //console.log(Value);
          this.params.node.data[this.field] = $event.target.value;
          console.log(this.params.node.data[this.field]);

          if (this.params.onChange instanceof Function) {
            var params = {
              object: this,
              event: $event,
              rowData: this.params.node.data,
              value: this.params.node.data[this.field]
            };
            this.params.onChange(params);
          }
        }
      }, {
        key: "onChange2",
        value: function onChange2($event) {
          this.params.node.data[this.field] = !this.params.node.data[this.field];

          if (this.params.onChange instanceof Function) {
            var params = {
              object: this,
              event: $event,
              rowData: this.params.node.data,
              value: this.params.node.data[this.field]
            };
            this.params.onChange(params);
          }
        }
      }]);

      return EnumKVPRenderer;
    }();

    EnumKVPRenderer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-enum-kvp-renderer',
      template: "    \n    <select *ngIf=\"isVisible\" [ngStyle]=\"selectStyle\" (change)=\"onChange($event)\" [disabled]=\"disableC\" class=\"{{selectClass}}\">\n        \n        <option [selected]=\"evaluateSelected(enumKVP)\" *ngFor=\"let enumKVP of enumKVPs\" [value]=\"enumKVP.key\">{{enumKVP.value}}\n        </option>\n    </select>\n    "
    })], EnumKVPRenderer);

    var EnumKVP = function EnumKVP(key, value) {
      _classCallCheck(this, EnumKVP);

      this.key = key;
      this.value = value;
    };
    /***/

  },

  /***/
  "./src/app/services/enum-renderer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/enum-renderer.component.ts ***!
    \*****************************************************/

  /*! exports provided: EnumRenderer */

  /***/
  function srcAppServicesEnumRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumRenderer", function () {
      return EnumRenderer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EnumRenderer =
    /*#__PURE__*/
    function () {
      function EnumRenderer() {
        _classCallCheck(this, EnumRenderer);

        this.isVisible = true;
        this.disableC = false;
      }

      _createClass(EnumRenderer, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
          this.selectClass = params.selectClass;
          this.enumVals = params.enumVals;
          this.selectStyle = params.selectStyle;
          this.field = params.colDef.field;

          if (this.params.isVisible instanceof Function) {
            this.isVisible = this.params.isVisible(this.params.node.data);
          }

          if (this.params.disabled instanceof Function) {
            this.disableC = this.params.disabled(this.params.node.data);
          }
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          //console.log(Value);
          this.params.node.data[this.field] = $event.target.value;

          if (this.params.onChange instanceof Function) {
            var params = {
              object: this,
              event: $event,
              rowData: this.params.node.data,
              value: this.params.node.data[this.field]
            };
            this.params.onChange(params);
          }
        }
      }, {
        key: "onChange2",
        value: function onChange2($event) {
          this.params.node.data[this.field] = !this.params.node.data[this.field];

          if (this.params.onChange instanceof Function) {
            var params = {
              object: this,
              event: $event,
              rowData: this.params.node.data,
              value: this.params.node.data[this.field]
            };
            this.params.onChange(params);
          }
        }
      }]);

      return EnumRenderer;
    }();

    EnumRenderer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-enum-renderer',
      template: "    \n    <select *ngIf=\"isVisible\" [ngStyle]=\"selectStyle\" (change)=\"onChange($event)\" [disabled]=\"disableC\" class=\"{{selectClass}}\">\n        <option [selected]=\"params.value==i\" *ngFor=\"let enumVal of enumVals; let i = index\" [value]=\"i\">{{enumVal}}\n        </option>\n    </select>\n    "
    })], EnumRenderer);
    /***/
  },

  /***/
  "./src/app/utility.ts":
  /*!****************************!*\
    !*** ./src/app/utility.ts ***!
    \****************************/

  /*! exports provided: Utility */

  /***/
  function srcAppUtilityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utility", function () {
      return Utility;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model/model-ctrlr-conf */
    "./src/app/model/model-ctrlr-conf.ts");
    /* harmony import */


    var _model_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model/enums */
    "./src/app/model/enums.ts");
    /* harmony import */


    var _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./model/model-ctrlr-templ */
    "./src/app/model/model-ctrlr-templ.ts");

    var Utility =
    /*#__PURE__*/
    function () {
      function Utility() {
        _classCallCheck(this, Utility);
      }

      _createClass(Utility, null, [{
        key: "createBasicCtrlrTempl",
        value: function createBasicCtrlrTempl() {
          var ctrlrTemplParams = [];
          var mappings = [];
          var mapPairs = [];
          var green = "#28a745";
          var orange = "#f88000";
          var red = "#dc3545";
          mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](0, "OFF", red));
          mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](1, "ON", green));
          mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](2, "INITIALIZE", green));
          mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](11, "WARN", orange));
          mapPairs = mapPairs.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](-2, "SHED", orange));
          var MapOnOff = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["Mapping"]("2a15d237-0773-4230-a650-60aa5237aa72", "Controller Mode", mapPairs, false);
          mappings = mappings.concat(MapOnOff);
          var mapPairs2 = [];
          mapPairs2 = mapPairs2.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](0, "CONSTRAINT", red));
          mapPairs2 = mapPairs2.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](1, "OPTIMIZING", green));
          mapPairs2 = mapPairs2.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](4, "CONTROL OK", orange));
          var MapCtrlrStatus = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["Mapping"]("fcacb409-fbbe-4ec7-8049-a1b4f4a7f9b5", "Controller Status", mapPairs2, true);
          mappings = mappings.concat(MapCtrlrStatus);
          var mapPairs3 = [];
          mapPairs3 = mapPairs3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](1, "GOOD", green));
          mapPairs3 = mapPairs3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](2, "PRED", green));
          mapPairs3 = mapPairs3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](3, "DROPPED", red));
          mapPairs3 = mapPairs3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](4, "BAD", green));
          mapPairs3 = mapPairs3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](5, "INIT", green));
          mapPairs3 = mapPairs3.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](10, "INIT", green));
          var MapCVStatus = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["Mapping"]("ec1d99f3-fc58-4669-a0a7-6cb8bdc24e68", "CV Status", mapPairs3, true);
          mappings = mappings.concat(MapCVStatus);
          var mapPairs4 = [];
          mapPairs4 = mapPairs4.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](1, "ON", green));
          mapPairs4 = mapPairs4.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](2, "WINDUPHI", orange));
          mapPairs4 = mapPairs4.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](3, "WINDUPLO", orange));
          mapPairs4 = mapPairs4.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](4, "FFWD", red));
          mapPairs4 = mapPairs4.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](5, "SERV", red));
          mapPairs4 = mapPairs4.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](6, "INIT", green));
          var MapMVStatus = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["Mapping"]("8a8b1423-2f15-4342-8abb-a9c073c74ce0", "MV Status", mapPairs4, true);
          mappings = mappings.concat(MapMVStatus);
          var mapPairs5 = [];
          mapPairs5 = mapPairs5.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](1, "ON", green));
          mapPairs5 = mapPairs5.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["MapPair"](5, "OFF", red));
          var MapDVStatus = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["Mapping"]("328d8c15-d61a-4947-acbe-50205db0fee6", "DV Status", mapPairs5, true);
          mappings = mappings.concat(MapDVStatus); //OVERALL

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Mode", "Controller Mode", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].NA, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].NA, false, "", "MODE", null, MapOnOff, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Status", "Controller Status", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].NA, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].NA, false, "", "STATUS", null, MapCtrlrStatus, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Benefit", "Expected Benefit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].NA, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].NA, false, "", "BENEFIT", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None)); //CV SUMMARY

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Number", "Num", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "opagCellNumber", "#", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Description", "Controller Description", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].string, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "opagCellDesc", "DESCRIPTION", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Status", "Live Status", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "STATUS", null, MapCVStatus, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Value", "Live Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "VALUE", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Steady State", "Live SteadyState", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, 1, false, "", "STEADY STATE", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("LoLimit", "Current Low Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "LO LIMIT", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("HiLimit", "Current High Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "HI LIMIT", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals)); //CV PERFORMANCE

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("UptimePerc", "Uptime Percentage", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "% UPTIME", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].Percentage));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgValue", "Average Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "AVG", "VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("StdDevValue", "Standard Deviation Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "STD DEV", "VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MaxValue", "Max Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "MAX", "VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MinValue", "Min Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "MIN", "VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgSState", "Average Steady State", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "AVG", "STEADY STATE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("StdDevSState", "Standard Deviation Steady State", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "STD DEV", "STEADY STATE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MaxSState", "Max Steady State", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "MAX", "STEADY STATE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MinSState", "Min Steady State", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "MIN", "STEADY STATE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgHiCLimit", "Average High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "AVG", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ViolationHiCLimit", "Violation High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "VIOLTN", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ChFreqHiCLimit", "Change Frequency High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "CHG FREQ", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("DiffHiCLimit", "Diff High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "DIFF", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgLoCLimit", "Average Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "AVG", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ViolationLoCLimit", "Violation Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "VIOLTN", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ChFreqLoCLimit", "Change Frequency Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "CHG FREQ", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("DiffLoCLimit", "Diff Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "DIFF", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ConstraintHi", "Constraint High", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "HIGH", "CONSTRAINT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ConstraintLo", "Constraint Low", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "LOW", "CONSTRAINT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Highlights", "Highlights", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].string, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].CV, false, "", "HIGHLIGHTS", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None)); //MV SUMMARY

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Number", "Num", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "opagCellNumber", "#", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Description", "Description", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].string, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "opagCellDesc", "DESCRIPTION", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Status", "Status", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "STATUS", null, MapMVStatus, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Value", "Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "VALUE", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("LoLimit", "Low Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "LO LIMIT", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("HiLimit", "High Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "HI LIMIT", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals)); //MV PERFORMANCE

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("UptimePerc", "Uptime Percentage", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "% UPTIME", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].Percentage));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgValue", "Average Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "AVG", "SENT VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("StdDevValue", "Standard Deviation Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "STD DEV", "SENT VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MaxValue", "Max Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "MAX", "SENT VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MinValue", "Min Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "MIN", "SENT VALUE", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgHiCLimit", "Average High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "AVG", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ChFreqHiCLimit", "Change Frequency High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "CHNG FREQ", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("DiffHiCLimit", "Diff High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "DIFF", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("WindUpHiCLimit", "Wind Up High Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "WIND UP", "HIGH CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvLoCLimit", "Average Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "AVG", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("ChFreqLoCLimit", "Change Frequency Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "CHNG FREQ", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("DiffLoCLimit", "Diff Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "DIFF", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("WindUpLoCLimit", "Wind Up Low Control Limit", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "WIND UP", "LOW CONTROL LIMIT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgValue", "PID Control Loop Error Average", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "AVG", "PID CONTROL LOOP ERROR", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("StdDevValue", "PID Control Loop Error Standard Deviation", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "STD DEV", "PID CONTROL LOOP ERROR", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MaxValue", "PID Control Loop Error Max Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "MAX", "PID CONTROL LOOP ERROR", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MinValue", "PID Control Loop Error Min Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "MIN", "PID CONTROL LOOP ERROR", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgValue", "PID Control Loop Output Average", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "AVG", "PID CONTROL LOOP OUTPUT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MaxValue", "PID Control Loop Output Max Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "MAX", "PID CONTROL LOOP OUTPUT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("MinValue", "PID Control Loop Output Min Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "MIN", "PID CONTROL LOOP OUTPUT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("WindUpHiPerc", "PID Control Loop Output Wind Up Hi(%)", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "WIND UP HI %", "PID CONTROL LOOP OUTPUT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("WindUpLoPerc", "PID Control Loop Output Wind Up Lo(%)", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "WIND UP LO %", "PID CONTROL LOOP OUTPUT", null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Highlights", "Highlights", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].string, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Performance, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].MV, false, "", "HIGHLIGHTS", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None)); //DV SUMMARY

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Number", "Num", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].DV, false, "opagCellNumber", "#", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Description", "Description", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].string, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].DV, false, "opagCellDesc", "DESCRIPTION", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Status", "Status", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].DV, false, "", "STATUS", null, MapDVStatus, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("AvgValue", "Average Value", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].DV, false, "", "VALUE", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals)); //INF SUMMARY

          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Number", "Num", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].INF, false, "opagCellNumber", "#", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Description", "Description", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].string, false, true, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].INF, false, "opagCellDesc", "DESCRIPTION", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].None));
          ctrlrTemplParams = ctrlrTemplParams.concat(new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTemplParam"]("Bias", "Bias", _model_enums__WEBPACK_IMPORTED_MODULE_2__["DType"].number, true, false, _model_enums__WEBPACK_IMPORTED_MODULE_2__["KPIGroup"].Summary, _model_enums__WEBPACK_IMPORTED_MODULE_2__["CtrlrVarType"].INF, false, "", "BIAS", null, null, _model_enums__WEBPACK_IMPORTED_MODULE_2__["NumberFormat"].TwoDecimals));
          var newAppTemplate = new _model_model_ctrlr_templ__WEBPACK_IMPORTED_MODULE_3__["CtrlrTempl"](null, "New Controller Template", ctrlrTemplParams, mappings);
          return newAppTemplate;
        }
      }, {
        key: "generateNewCtrlrConfRow",
        value: function generateNewCtrlrConfRow(num, tagName, templParams) {
          //console.log(templParams);
          var ctrlrConfRowCols = [];
          templParams.forEach(function (pTempl) {
            switch (pTempl.name) {
              case 'Number':
                ctrlrConfRowCols = ctrlrConfRowCols.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_1__["CtrlrConfRowCol"](num, pTempl.canUseOPTag, pTempl));
                break;

              case 'Description':
                ctrlrConfRowCols = ctrlrConfRowCols.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_1__["CtrlrConfRowCol"](tagName + " Description", pTempl.canUseOPTag, pTempl));
                break;

              default:
                {
                  ctrlrConfRowCols = ctrlrConfRowCols.concat(new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_1__["CtrlrConfRowCol"](tagName + "." + pTempl.name, true, pTempl));
                  break;
                }
            }
          });
          return new _model_model_ctrlr_conf__WEBPACK_IMPORTED_MODULE_1__["CtrlrConfRow"](null, ctrlrConfRowCols);
        }
      }]);

      return Utility;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\my\src\OPAPCWEB\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map