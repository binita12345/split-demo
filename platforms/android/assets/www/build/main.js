webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_NavProxy_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(76);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemsPage = (function (_super) {
    __extends(ItemsPage, _super);
    function ItemsPage(navCtrl, navParams, navProxy) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.navProxy = navProxy;
        _this.items = [
            { id: 0, description: 'List Item Zero' },
            { id: 1, description: 'List Item One' },
            { id: 2, description: 'List Item Two' },
            { id: 3, description: 'List Item Three' },
            { id: 4, description: 'List Item Four' },
            { id: 5, description: 'List Item Five' },
            { id: 6, description: 'List Item Six' },
            { id: 7, description: 'List Item Seven' },
            { id: 8, description: 'List Item Eight' },
            { id: 9, description: 'List Item Nine' },
        ];
        return _this;
    }
    ItemsPage.prototype.onItemSelected = function (item) {
        // Rather than using:
        //     this.navCtrl.push(...)
        // Use our proxy:
        this.navProxy.pushDetail(__WEBPACK_IMPORTED_MODULE_3____["a" /* ItemPage */], item);
    };
    return ItemsPage;
}(__WEBPACK_IMPORTED_MODULE_3____["e" /* _MasterPage */]));
ItemsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-items',template:/*ion-inline-start:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/pages/items/items.html"*/'<ion-header>\n    <ion-toolbar>\n        <button menuToggle ion-button icon-only>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Items\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="onItemSelected(item)">\n            <h2>\n                {{ item.description }}\n            </h2>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Molestiae dolor nesciunt dolore, esse excepturi nemo, atque doloribus.\n                A praesentium, doloremque, quibusdam esse, fugiat quas, obcaecati non\n                laboriosam ducimus natus vero.\n            </p>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/pages/items/items.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_NavProxy_service__["a" /* NavProxyService */]])
], ItemsPage);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/item/item.module": [
		267,
		2
	],
	"../pages/items/items.module": [
		268,
		1
	],
	"../pages/placeholder/placeholder.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DetailPage; });
var _DetailPage = (function () {
    function _DetailPage() {
    }
    return _DetailPage;
}());

//# sourceMappingURL=_DetailPage.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(76);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemPage = (function (_super) {
    __extends(ItemPage, _super);
    function ItemPage(navCtrl, navParams) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.item = null;
        _this.item = navParams.data;
        return _this;
    }
    return ItemPage;
}(__WEBPACK_IMPORTED_MODULE_2____["d" /* _DetailPage */]));
ItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item',template:/*ion-inline-start:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/pages/item/item.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ item.description }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quasi earum in dolor cupiditate commodi culpa voluptates\n    optio hic architecto saepe enim corporis laborum, ipsum expedita ducimus laudantium. Fugit, sint.\n</ion-content>\n'/*ion-inline-end:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/pages/item/item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ItemPage);

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_NavProxy_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["b" /* ItemsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["c" /* PlaceholderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/item/item.module#ItemPageModule', name: 'ItemPage', segment: 'item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/placeholder/placeholder.module#PlaceholderPageModule', name: 'PlaceholderPage', segment: 'placeholder', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["b" /* ItemsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["c" /* PlaceholderPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_NavProxy_service__["a" /* NavProxyService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MasterPage; });
var _MasterPage = (function () {
    function _MasterPage() {
    }
    return _MasterPage;
}());

//# sourceMappingURL=_MasterPage.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_NavProxy_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_items_items__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_placeholder_placeholder__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, navProxy) {
        var _this = this;
        this.navProxy = navProxy;
        // Empty placeholders for the 'master/detail' pages...
        this.masterPage = null;
        this.detailPage = null;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            // Add our nav controllers to
            // the nav proxy service...
            navProxy.masterNav = _this.masterNav;
            navProxy.detailNav = _this.detailNav;
            // set initial pages for
            // our nav controllers...
            _this.masterNav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_items_items__["a" /* ItemsPage */], { detailNavCtrl: _this.detailNav });
            _this.detailNav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_placeholder_placeholder__["a" /* PlaceholderPage */]);
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('detailNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "detailNav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('masterNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "masterNav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/app/app.html"*/'<ion-menu [content]="masterNav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-menu>\n<ion-split-pane (ionChange)="navProxy.onSplitPaneChanged($event._visible);">\n    <ion-nav [root]="masterPage" #masterNav></ion-nav>\n    <ion-nav [root]="detailPage" #detailNav main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__services_NavProxy_service__["a" /* NavProxyService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceholderPage = (function () {
    function PlaceholderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return PlaceholderPage;
}());
PlaceholderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-placeholder',template:/*ion-inline-start:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/pages/placeholder/placeholder.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>&nbsp;</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/binita/Documents/Binita/ionic-split-pane-demo/src/pages/placeholder/placeholder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PlaceholderPage);

//# sourceMappingURL=placeholder.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DetailPage__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__DetailPage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MasterPage__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__MasterPage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__item_item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_items__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__items_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavProxyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_placeholder_placeholder__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_DetailPage__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NavProxyService = (function () {
    function NavProxyService() {
        this._masterNav = null;
        this._detailNav = null;
        this._isOn = false;
    }
    Object.defineProperty(NavProxyService.prototype, "masterNav", {
        get: function () {
            return this._masterNav;
        },
        set: function (value) {
            this._masterNav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavProxyService.prototype, "detailNav", {
        get: function () {
            return this._detailNav;
        },
        set: function (value) {
            this._detailNav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavProxyService.prototype, "isOn", {
        get: function () {
            return this._isOn;
        },
        set: function (value) {
            this._isOn = value;
        },
        enumerable: true,
        configurable: true
    });
    NavProxyService.prototype.pushDetail = function (page, params) {
        console.log("pushDetail");
        if (this.isOn) {
            this.detailNav.setRoot(page, params);
        }
        else {
            this.masterNav.push(page, params);
        }
    };
    NavProxyService.prototype.pushMaster = function (page, params) {
        console.log("pushMaster");
        this.masterNav.push(page, params);
    };
    NavProxyService.prototype.onSplitPaneChanged = function (isOn) {
        // set local 'isOn' flag...
        console.log("isOn", isOn);
        this.isOn = isOn;
        // if the nav controllers have been instantiated...
        if (this.masterNav && this.detailNav) {
            (isOn) ? this.activateSplitView() :
                this.deactivateSplitView();
        }
    };
    NavProxyService.prototype.activateSplitView = function () {
        console.log("activateSplitView");
        var currentView = this.masterNav.getActive();
        if (currentView.component.prototype instanceof __WEBPACK_IMPORTED_MODULE_2__pages_DetailPage__["a" /* _DetailPage */]) {
            // if the current view is a 'Detail' page...
            // - remove it from the 'master' nav stack...
            this.masterNav.pop();
            // - and add it to the 'detail' nav stack...
            this.detailNav.setRoot(currentView.component, currentView.data);
        }
    };
    NavProxyService.prototype.deactivateSplitView = function () {
        console.log("deactivateSplitView");
        var detailView = this.detailNav.getActive();
        this.detailNav.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_placeholder_placeholder__["a" /* PlaceholderPage */]);
        if (detailView.component.prototype instanceof __WEBPACK_IMPORTED_MODULE_2__pages_DetailPage__["a" /* _DetailPage */]) {
            // if the current detail view is a 'Detail' page...
            // ...so, not the placeholder page:
            var index = this.masterNav.getViews().length;
            // add it to the master view...
            this.masterNav.insert(index, detailView.component, detailView.data);
        }
    };
    return NavProxyService;
}());
NavProxyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], NavProxyService);

//# sourceMappingURL=NavProxy.service.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map