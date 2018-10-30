(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./firebase-config.json":
/*!******************************!*\
  !*** ./firebase-config.json ***!
  \******************************/
/*! exports provided: apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, default */
/***/ (function(module) {

module.exports = {"apiKey":"AIzaSyAg8NCtGzWZAIzTu39znZZUYn-82Ir5ehM","authDomain":"application-angular-firebase.firebaseapp.com","databaseURL":"https://application-angular-firebase.firebaseio.com","projectId":"application-angular-firebase","storageBucket":"","messagingSenderId":"911560564969"};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<!--\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n-->\r\n<body>\r\n  <div id=\"coords\">\r\n    <label for=\"longitude\">Longitude: </label>\r\n    <input id=\"longitude\" type=\"number\" [(ngModel)]=\"longitude\" placeholder=\"Longitude\">\r\n    <label for=\"latitude\">Latitude: </label>\r\n    <input id=\"latitude\" type=\"number\" [(ngModel)]=\"latitude\" placeholder=\"Latitude\">\r\n    <button (click)=\"setCenter()\">Go</button>\r\n  </div>\r\n  <div id=\"map\" class=\"map\"></div>\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: absolute;\n  top: 15%;\n  left: 10%;\n  height: 80%;\n  width: 80%;\n  border: 2px dashed;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERvY3VtZW50c1xcUHJvZ3JhbW1hdGlvblxcb2MtYW5ndWxhcmpzVHV0b3JpYWwvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVc7RUFDWCxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1JTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-config.json */ "./firebase-config.json");
var firebase_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! firebase-config.json */ "./firebase-config.json", 1);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/interaction/Draw */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'oc-angularjsTutorial';
        this.latitude = 60.776372;
        this.longitude = 10.675170;
        var config = {
            apiKey: firebase_config_json__WEBPACK_IMPORTED_MODULE_1__["apiKey"],
            authDomain: firebase_config_json__WEBPACK_IMPORTED_MODULE_1__["authDomain"],
            databaseURL: firebase_config_json__WEBPACK_IMPORTED_MODULE_1__["databaseURL"],
            projectId: firebase_config_json__WEBPACK_IMPORTED_MODULE_1__["projectId"],
            storageBucket: firebase_config_json__WEBPACK_IMPORTED_MODULE_1__["storageBucket"],
            messagingSenderId: firebase_config_json__WEBPACK_IMPORTED_MODULE_1__["messagingSenderId"]
        };
        if (!firebase__WEBPACK_IMPORTED_MODULE_2__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
            target: 'map',
            layers: [
                new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Tile"]({
                    source: new ol_source__WEBPACK_IMPORTED_MODULE_7__["OSM"]()
                })
            ],
            view: new ol_View__WEBPACK_IMPORTED_MODULE_4__["default"]({
                center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_8__["fromLonLat"])([this.longitude, this.latitude]),
                zoom: 8
            })
        });
        this.drawLineInteraction();
    };
    AppComponent.prototype.setCenter = function () {
        var view = this.map.getView();
        view.setCenter(Object(ol_proj__WEBPACK_IMPORTED_MODULE_8__["fromLonLat"])([this.longitude, this.latitude]));
        view.setZoom(8);
    };
    AppComponent.prototype.drawLineInteraction = function () {
        var draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_5__["default"]({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_7__["Vector"]({ wrapX: false }),
            type: 'LineString'
        });
        this.map.addInteraction(draw);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-list/single-book/single-book.component */ "./src/app/book-list/single-book/single-book.component.ts");
/* harmony import */ var _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-list/book-form/book-form.component */ "./src/app/book-list/book-form/book-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/books.service */ "./src/app/services/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'auth/signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'auth/signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
    { path: 'books', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]], component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"] },
    { path: 'books/new', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]], component: _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_10__["BookFormComponent"] },
    { path: 'books/view/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]], component: _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_9__["SingleBookComponent"] },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '**', redirectTo: 'books' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"],
                _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_9__["SingleBookComponent"],
                _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_10__["BookFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_books_service__WEBPACK_IMPORTED_MODULE_14__["BooksService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-8 col-sm-offset-2\">\r\n    <h2>Se connecter</h2>\r\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Adresse mail</label>\r\n        <input type=\"text\"\r\n               id=\"email\"\r\n               class=\"form-control\"\r\n               formControlName=\"email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Mot de passe</label>\r\n        <input type=\"password\"\r\n               id=\"password\"\r\n               class=\"form-control\"\r\n               formControlName=\"password\">\r\n      </div>\r\n      <button class=\"btn btn-primary\"\r\n              type=\"submit\"\r\n              [disabled]=\"signinForm.invalid\">Se connecter\r\n      </button>\r\n    </form>\r\n    <p class=\"text-danger\">{{ errorMessage }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninComponent.prototype.initForm = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signinForm.get('email').value;
        var password = this.signinForm.get('password').value;
        this.authService.signInUser(email, password).then(function () {
            _this.router.navigate(['/books']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-8 col-sm-offset-2\">\r\n    <h2>Créer un compte</h2>\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Adresse mail</label>\r\n        <input type=\"text\"\r\n               id=\"email\"\r\n               class=\"form-control\"\r\n               formControlName=\"email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Mot de passe</label>\r\n        <input type=\"password\"\r\n               id=\"password\"\r\n               class=\"form-control\"\r\n               formControlName=\"password\">\r\n      </div>\r\n      <button class=\"btn btn-primary\"\r\n              type=\"submit\"\r\n              [disabled]=\"signupForm.invalid\">Créer mon compte\r\n      </button>\r\n    </form>\r\n    <p class=\"text-danger\">{{ errorMessage }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.initForm = function () {
        this.signupForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        this.authService.createNewUser(email, password).then(function () {
            _this.router.navigate(['/books']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-8 col-sm-offset-2\">\r\n    <h2>Enregistrer un nouveau livre</h2>\r\n    <form [formGroup]=\"bookForm\" (ngSubmit)=\"onSaveBook()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Titre</label>\r\n        <input type=\"text\" id=\"title\"\r\n               class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"author\">Auteur</label>\r\n        <input type=\"text\" id=\"author\"\r\n               class=\"form-control\" formControlName=\"author\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"synopsis\">Synopsis</label>\r\n        <textarea id=\"synopsis\"\r\n                  class=\"form-control\" formControlName=\"synopsis\">\r\n        </textarea>\r\n      </div>\r\n      <button class=\"btn btn-success\" [disabled]=\"bookForm.invalid\"\r\n              type=\"submit\">Enregistrer\r\n      </button>\r\n      <div class=\"form-group\">\r\n        <h4>Ajouter une photo</h4>\r\n        <input type=\"file\" (change)=\"detectFiles($event)\"\r\n               class=\"form-control\" accept=\"image/*\">\r\n        <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\r\n      </div>\r\n      <button class=\"btn btn-success\" [disabled]=\"bookForm.invalid || fileIsUploading\"\r\n              type=\"submit\">Enregistrer\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWZvcm0vYm9vay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.ts ***!
  \************************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(formBuilder, booksService, router) {
        this.formBuilder = formBuilder;
        this.booksService = booksService;
        this.router = router;
        this.fileIsUploading = false;
        this.fileUploaded = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    BookFormComponent.prototype.initForm = function () {
        this.bookForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            synopsis: ''
        });
    };
    BookFormComponent.prototype.onSaveBook = function () {
        var title = this.bookForm.get('title').value;
        var author = this.bookForm.get('author').value;
        var synopsis = this.bookForm.get('synopsis').value;
        var newBook = new _models_book_model__WEBPACK_IMPORTED_MODULE_4__["Book"](title, author);
        newBook.synopsis = synopsis;
        if (this.fileUrl && this.fileUrl !== '') {
            newBook.photo = this.fileUrl;
        }
        this.booksService.createNewBook(newBook);
        this.router.navigate(['/books']);
    };
    BookFormComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.booksService.uploadFile(file).then(function (url) {
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
        });
    };
    BookFormComponent.prototype.detectFiles = function (event) {
        this.onUploadFile(event.target.files[0]);
    };
    BookFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-list/book-form/book-form.component.html"),
            styles: [__webpack_require__(/*! ./book-form.component.scss */ "./src/app/book-list/book-form/book-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h2>Vos livres</h2>\r\n    <div class=\"list-group\">\r\n      <button\r\n        class=\"list-group-item\"\r\n        *ngFor=\"let book of books; let i = index\"\r\n        (click)=\"onViewBook(i)\">\r\n        <h3 class=\"list-group-item-heading\">\r\n          {{ book.title }}\r\n          <button class=\"btn btn-default pull-right\" (click)=\"onDeleteBook(book)\">\r\n            <span class=\"glyphicon glyphicon-minus\"></span>\r\n          </button>\r\n        </h3>\r\n        <p class=\"list-group-item-text\">{{ book.author }}</p>\r\n      </button>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"onNewBook()\">Nouveau livre</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(booksService, router) {
        this.booksService = booksService;
        this.router = router;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksSubscription = this.booksService.booksSubject.subscribe(function (books) {
            _this.books = books;
        });
        this.booksService.emitBooks();
    };
    BookListComponent.prototype.onNewBook = function () {
        this.router.navigate(['/books', 'new']);
    };
    BookListComponent.prototype.onDeleteBook = function (book) {
        this.booksService.removeBook(book);
    };
    BookListComponent.prototype.onViewBook = function (id) {
        this.router.navigate(['/books', 'view', id]);
    };
    BookListComponent.prototype.ngOnDestroy = function () {
        this.booksSubscription.unsubscribe();
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.scss */ "./src/app/book-list/book-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.html":
/*!******************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <img style=\"max-width:400px;\" *ngIf=\"book.photo\" [src]=\"book.photo\">\r\n    <h1>{{ book.title }}</h1>\r\n    <h3>{{ book.author }}</h3>\r\n    <p>{{ book.synopsis }}</p>\r\n    <button class=\"btn btn-default\" (click)=\"onBack()\">Retour</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9zaW5nbGUtYm9vay9zaW5nbGUtYm9vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBookComponent", function() { return SingleBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleBookComponent = /** @class */ (function () {
    function SingleBookComponent(route, booksService, router) {
        this.route = route;
        this.booksService = booksService;
        this.router = router;
    }
    SingleBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book = new _models_book_model__WEBPACK_IMPORTED_MODULE_3__["Book"]('', '');
        var id = this.route.snapshot.params['id'];
        this.booksService.getSingleBook(+id).then(function (book) {
            _this.book = book;
        });
    };
    SingleBookComponent.prototype.onBack = function () {
        this.router.navigate(['/books']);
    };
    SingleBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-book',
            template: __webpack_require__(/*! ./single-book.component.html */ "./src/app/book-list/single-book/single-book.component.html"),
            styles: [__webpack_require__(/*! ./single-book.component.scss */ "./src/app/book-list/single-book/single-book.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SingleBookComponent);
    return SingleBookComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"books\">Livres</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\r\n        <a routerLink=\"auth/signup\">Créer un compte</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\r\n        <a routerLink=\"auth/signin\">Connexion</a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"onSignOut()\"\r\n           style=\"cursor:pointer\"\r\n           *ngIf=\"isAuth\">Déconnexion</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #176087; }\n\ndiv {\n  color: cornflowerblue;\n  border: 2px dashed #53A2BB;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxEb2N1bWVudHNcXFByb2dyYW1tYXRpb25cXG9jLWFuZ3VsYXJqc1R1dG9yaWFsL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQiwyQkFBMEI7RUFDMUIsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjA4NztcclxufVxyXG5cclxuZGl2IHtcclxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICM1M0EyQkI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    };
    HeaderComponent.prototype.onSignOut = function () {
        this.authService.signOutUser();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/book.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/book.model.ts ***!
  \**************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/auth', 'signin']);
                    resolve(false);
                }
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.createNewUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOutUser = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    function BooksService() {
        this.booksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getBooks();
    }
    BooksService.prototype.emitBooks = function () {
        this.booksSubject.next(this.books);
    };
    BooksService.prototype.saveBooks = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books').set(this.books);
    };
    BooksService.prototype.getBooks = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books')
            .on('value', function (data) {
            _this.books = data.val() ? data.val() : [];
            _this.emitBooks();
        });
    };
    BooksService.prototype.getSingleBook = function (id) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books/' + id).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                reject(error);
            });
        });
    };
    BooksService.prototype.createNewBook = function (newBook) {
        this.books.push(newBook);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.removeBook = function (book) {
        if (book.photo) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().refFromURL(book.photo);
            storageRef.delete().then(function () {
                console.log('Photo removed!');
            }, function (error) {
                console.log('Could not remove photo! : ' + error);
            });
        }
        var bookIndexToRemove = this.books.findIndex(function (bookEl) {
            if (bookEl === book) {
                return true;
            }
        });
        this.books.splice(bookIndexToRemove, 1);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var almostUniqueFileName = Date.now().toString();
            var upload = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref()
                .child('images/' + almostUniqueFileName + file.name).put(file);
            upload.on(firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function () {
                console.log('Chargement...');
            }, function (error) {
                console.log('Erreur de chargement ! : ' + error);
                reject();
            }, function () {
                resolve(upload.snapshot.downloadURL);
            });
        });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Programmation\oc-angularjsTutorial\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map