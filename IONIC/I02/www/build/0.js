webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pag2PageModule", function() { return Pag2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pag2__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Pag2PageModule = /** @class */ (function () {
    function Pag2PageModule() {
    }
    Pag2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pag2__["a" /* Pag2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pag2__["a" /* Pag2Page */]),
            ],
        })
    ], Pag2PageModule);
    return Pag2PageModule;
}());

//# sourceMappingURL=pag2.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pag2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Pag2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Pag2Page = /** @class */ (function () {
    function Pag2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Pag2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pag2Page');
    };
    Pag2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pag2',template:/*ion-inline-start:"C:\LABORATORIO\IONIC\I02\src\pages\pag2\pag2.html"*/'<!--\n  Generated template for the Pag2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pag2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light">A</ion-item-divider>\n    <ion-item>Angola</ion-item>\n    <ion-item>Argentina</ion-item>\n	<ion-item-divider color="light">E</ion-item-divider>\n    <ion-item>España</ion-item>\n    <ion-item>Ecuador</ion-item>\n  </ion-item-group>\n\n  <ion-list>\n  <ion-item>\n    <ion-label>Gaming</ion-label>\n    <ion-select [(ngModel)]="gaming">\n      <ion-option value="nes">NES</ion-option>\n      <ion-option value="n64">Nintendo64</ion-option>\n      <ion-option value="ps">PlayStation</ion-option>\n      <ion-option value="genesis">Sega Genesis</ion-option>\n      <ion-option value="saturn">Sega Saturn</ion-option>\n      <ion-option value="snes">SNES</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\LABORATORIO\IONIC\I02\src\pages\pag2\pag2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Pag2Page);
    return Pag2Page;
}());

//# sourceMappingURL=pag2.js.map

/***/ })

});
//# sourceMappingURL=0.js.map