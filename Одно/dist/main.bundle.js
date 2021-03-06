webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--auth-comp *ngIf=\"this.authState === 'false'\" (onChanged)=\"onChanged($event)\"></auth-comp>\n\n<menu-comp *ngIf=\"this.authState === 'true'\" (onChanged)=\"onChangedMenu($event)\"></menu-comp>\n\n<game-comp *ngIf=\"this.authState === 'game'\"></game-comp-->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.authState = 'false';
    }
    AppComponent.prototype.onChanged = function (increased) {
        if (increased == 'true') {
            this.authState = 'true';
        }
    };
    AppComponent.prototype.onChangedMenu = function (increased) {
        if (increased == 'game') {
            this.authState = 'game';
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_8__game_game_component__["a" /* GameComponent */] },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__game_game_component__["a" /* GameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_service__ = __webpack_require__("../../../../../src/app/auth/reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = (function () {
    function AuthComponent(router) {
        this.router = router;
        this.selectState = 'inactive';
    }
    AuthComponent.prototype.formSelectorBtnClick = function () {
        this.selectState = this.selectState === 'active' ? 'inactive' : 'active';
    };
    AuthComponent.prototype.goToMenu = function () {
        if (this.mail == 'player1' && this.pass == 'qwerty') {
            this.router.navigate(['menu']);
        }
        else if (this.mail == 'player2' && this.pass == 'qwerty') {
            this.router.navigate(['menu']);
        }
        else {
            console.log('auth err');
        }
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'auth-comp',
            template: __webpack_require__("../../../../../src/app/auth/auth.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__reg_service__["a" /* RegService */]
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('selectItemActive', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: 'block',
                        opacity: '1',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: 'none',
                        opacity: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s 200ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '1' }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }))]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('selectItem', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: 'none',
                        opacity: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inaction', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: 'block',
                        opacity: '1',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s 200ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '1' }))]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n    width: 100%;\n    height: 100vh;\n    /*background-image: url(src/background.png);*/\n    background-image: url(" + __webpack_require__("../../../../../src/app/auth/src/Logo.png") + ");\n    background-size: 50% 100%;\n    background-position: left;\n    background-repeat: no-repeat;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.form-enter {\n    position: absolute;\n    right: 40px;\n    padding: 20px;\n    margin-right: 100px;\n    background-color: rgba(0, 0, 0, 0.8);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n.form-input {\n    margin: 20px 0;\n    border-bottom: 2px solid #757575;\n    transition: .2s;\n}\n.form-input:hover {\n    border-bottom: 2px solid #EEEEEE;\n}\n.form-input input {\n    color: #EEEEEE;\n    background-color: transparent;\n    border: none;\n    outline: none;\n}\n.form-btn {\n    font-size: 14px;\n    cursor: pointer;\n    transition: .2s;\n    color: #EEEEEE;\n}\n.form-btn:hover {\n    color: #757575;\n}\n.form-selector {\n    margin-top: 15px;\n    font-size: 12px;\n    cursor: pointer;\n    transition: .2s;\n    color: #EEEEEE;\n}\n.form-selector:hover {\n    color: #757575;\n}\n\n.form-reg {\n    position: absolute;\n    right: 40px;\n    padding: 20px;\n    margin-right: 100px;\n    background-color: rgba(0, 0, 0, 0.8);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n.form-reg-title {\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <div class=\"form-reg\" [@selectItemActive]=\"this.selectState\">\n        <div class=\"form-reg-title\">Регистрация</div>\n        <div class=\"form-input\">\n            <input type=\"email\" placeholder=\"логин\">\n        </div>\n        <div class=\"form-input\">\n            <input type=\"password\" placeholder=\"пароль\">\n        </div>\n        <div class=\"form-btn\" (click)=\"submitReg(userReg)\">\n            Зарегистрироваться\n        </div>\n        <div class=\"form-selector\" (click)=\"formSelectorBtnClick()\">\n            Вход\n        </div>\n    </div>\n    <div class=\"form-enter\" [@selectItem]=\"this.selectState\">\n        <div class=\"form-input\">\n            <input type=\"email\" placeholder=\"логин\" [(ngModel)]=\"this.mail\">\n        </div>\n        <div class=\"form-input\">\n            <input type=\"password\" placeholder=\"пароль\" [(ngModel)]=\"this.pass\">\n        </div>\n        <div class=\"form-btn\" (click)=\"goToMenu()\">\n            Войти\n        </div>\n        <div class=\"form-selector\" (click)=\"formSelectorBtnClick()\">\n            Регистрация\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.postData = function (user) {
        var body = { name: user.name, pass: user.pass };
        return this.http.post('http://localhost:3000/auth', body);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/reg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegService = (function () {
    function RegService(http) {
        this.http = http;
    }
    RegService.prototype.postData = function (user) {
        var body = { name: user.name, pass: user.pass };
        return this.http.post('http://localhost:3000/reg', body);
    };
    RegService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegService);
    return RegService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/src/Logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Logo.e632d460b60846e7024d.png";

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.userState = 'inactive';
        this.botState = 'inactive';
        this.nullState = 'inactive';
        this.arrUser = [];
        this.userAttack = 0;
        this.arrBot = [];
        this.botAttack = 0;
    }
    ;
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getData().subscribe(function (data) {
            for (var i = 0; i < 3; i++) {
                _this.randDeck = Math.floor(Math.random() * (4 - 0)) + 0;
                if (_this.randDeck == 0) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck1[_this.rand]);
                    arrTemp1.push('deck1');
                    _this.arrUser.push(arrTemp1);
                }
                else if (_this.randDeck == 1) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck2[_this.rand]);
                    arrTemp1.push('deck2');
                    _this.arrUser.push(arrTemp1);
                }
                else if (_this.randDeck == 2) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck3[_this.rand]);
                    arrTemp1.push('deck3');
                    _this.arrUser.push(arrTemp1);
                }
                else if (_this.randDeck == 3) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck4[_this.rand]);
                    arrTemp1.push('deck4');
                    _this.arrUser.push(arrTemp1);
                }
            }
            for (var i = 0; i < 3; i++) {
                _this.randDeck = Math.floor(Math.random() * (4 - 0)) + 0;
                if (_this.randDeck == 0) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck1[_this.rand]);
                    arrTemp1.push('deck1');
                    _this.arrBot.push(arrTemp1);
                }
                else if (_this.randDeck == 1) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck2[_this.rand]);
                    arrTemp1.push('deck2');
                    _this.arrBot.push(arrTemp1);
                }
                else if (_this.randDeck == 2) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck3[_this.rand]);
                    arrTemp1.push('deck3');
                    _this.arrBot.push(arrTemp1);
                }
                else if (_this.randDeck == 3) {
                    _this.rand = Math.floor(Math.random() * (4 - 0)) + 0;
                    var arrTemp1 = [];
                    arrTemp1.push(data.alldeck.deck4[_this.rand]);
                    arrTemp1.push('deck4');
                    _this.arrBot.push(arrTemp1);
                }
            }
        });
    };
    GameComponent.prototype.block = function () {
    };
    GameComponent.prototype.attack = function () {
        for (var i = 0; i <= this.arrUser.length - 1; i++) {
            this.userAttack = this.userAttack + this.arrUser[i][0].attack;
        }
        for (var i = 0; i <= this.arrBot.length - 1; i++) {
            this.botAttack = this.botAttack + this.arrBot[i][0].attack;
        }
        console.log(this.userAttack);
        console.log(this.botAttack);
        if (this.userAttack > this.botAttack) {
            this.userState = 'user';
        }
        else if (this.userAttack < this.botAttack) {
            this.botState = 'bot';
        }
        else {
            this.nullState = 'null';
        }
    };
    GameComponent.prototype.next = function () {
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'game-comp',
            template: __webpack_require__("../../../../../src/app/game/game.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */],
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('userItem', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        display: 'none',
                        opacity: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('user', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        display: 'flex',
                        opacity: '1',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => user', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.8s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '1' }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('user => inactive', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.8s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0' }))]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('botItem', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        display: 'none',
                        opacity: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('bot', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        display: 'flex',
                        opacity: '1',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => user', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.8s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '1' }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('user => inactive', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.8s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0' }))]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('nullItem', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        display: 'none',
                        opacity: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('null', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        display: 'flex',
                        opacity: '1',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => user', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.8s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '1' }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('user => inactive', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.8s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0' }))]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n    width: 100%;\n    height: 100vh;\n    background-image: url(" + __webpack_require__("../../../../../src/app/game/src/background.png") + ");\n    background-size: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.players {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.players-adversary {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.players-adversary-ava {\n    width: 100px;\n    height: 100px;\n    margin: 20px;\n    border-radius: 100px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n.players-adversary-name {\n    width: 200px;\n    height: 50px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n.players-user {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.players-user-ava {\n    width: 100px;\n    height: 100px;\n    margin: 20px;\n    border-radius: 100px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n.players-user-name {\n    width: 200px;\n    height: 50px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n\n\n.adversary {\n    position: relative;\n    margin-top: -50px;\n    z-index: 1;\n}\n.adversary-cards {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.adversary-cards-item {\n    width: 100px;\n    height: 120px;\n    margin: 0 10px;\n    background-size: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/app/game/src/shirtM.png") + ");\n    background-repeat: no-repeat;\n    border-radius: 10px;\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.4), 0 6px 10px 0 rgba(0,0,0,.16), 0 1px 18px 0 rgba(0,0,0,.14);\n    cursor: pointer;\n    transition: .2s;\n}\n.adversary-cards-item:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\n\n.place {\n    width: 800px;\n    height: 600px;\n    margin-top: -250px;\n    background-image: url(" + __webpack_require__("../../../../../src/app/game/src/place.png") + ");\n    background-size: 100%;\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n    border-radius: 20px;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: perspective(400px) rotateX(20deg);\n            transform: perspective(400px) rotateX(20deg);\n}\n\n.user {\n    position: relative;\n    margin-top: -150px;\n    z-index: 1;\n}\n.user-cards {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.user-cards-item {\n    width: 150px;\n    height: 180px;\n    margin: 0 10px;\n    margin-top: -50px;\n    background-size: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/app/game/src/shirtM.png") + ");\n    background-repeat: no-repeat;\n    border-radius: 10px;\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n    cursor: pointer;\n    transition: .2s;\n    overflow: hidden;\n}\n.user-cards-item:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n.user-cards-item-info {\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.8);\n}\n.user-cards-item-info div {\n    padding: 10px;\n}\n\n.bottom {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    background-color: rgba(0,0,0,.5);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.bottom-btn {\n    padding: 10px;\n    background-color: rgba(0,0,0,.5);\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n    border-radius: 5px;\n    cursor: pointer;\n    color: #eeeeee;\n    transition: .2s;\n}\n.bottom-btn:hover {\n    color: #212121;\n    background-color: rgba(255,255,255,.5);\n}\n\n.gameOver {\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #212121;\n    width: 100%;\n    height: 100vh;\n    font-size: 54px;\n    font-weight: 800;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <div class=\"players\">\n        <div class=\"players-adversary\">\n            <div class=\"players-adversary-ava\"></div>\n            <div class=\"players-adversary-name\"></div>\n        </div>\n        <div class=\"players-user\">\n            <div class=\"players-user-name\"></div>\n            <div class=\"players-user-ava\"></div>\n        </div>        \n    </div>\n\n    <div class=\"adversary\">\n        <div class=\"adversary-cards\">\n            <div class=\"adversary-cards-item\"></div>\n            <div class=\"adversary-cards-item\"></div>\n            <div class=\"adversary-cards-item\"></div>\n        </div>\n    </div>\n\n    <div class=\"place\"></div>\n\n    <div class=\"user\">\n        <div class=\"user-cards\">\n            <div class=\"user-cards-item\" *ngFor=\"let item of arrUser\">\n                <div class=\"user-cards-item-info\">\n                    <div class=\"user-cards-item-deck\">\n                        {{ item[1] }}\n                    </div>\n                    <div class=\"user-cards-item-attack\">\n                        Attack {{ item[0].attack }}\n                    </div>\n                    <div class=\"user-cards-item-bonus\">\n                        Bonus {{ item[0].bonus }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"gameOver\" [@userItem]=\"this.userState\">\n        Вы выиграли\n    </div>\n    <div class=\"gameOver\" [@botItem]=\"this.botState\">\n        Вы проиграли\n    </div>\n    <div class=\"gameOver\" [@nullItem]=\"this.nullState\">\n        Ничья\n    </div>\n\n    <div class=\"bottom\">\n        <div class=\"bottom-btn\" (click)=this.block()>\n            Защита\n        </div>\n        <div class=\"bottom-btn\" (click)=this.attack()>\n            Атака\n        </div>\n        <div class=\"bottom-btn\" (click)=this.next()>\n            Взять карту\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getData = function () {
        this.allDeck = this.http.get('assets/deck.json');
        return this.allDeck;
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../src/app/game/src/background.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.679ef4e35361b28aa85e.png";

/***/ }),

/***/ "../../../../../src/app/game/src/place.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "place.744f1c6df7576966c4d7.png";

/***/ }),

/***/ "../../../../../src/app/game/src/shirtM.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "shirtM.7497aea33025447b4a81.png";

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.goToGame = function () {
        this.router.navigate(['game']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'menu-comp',
            template: __webpack_require__("../../../../../src/app/menu/menu.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n    width: 100%;\n    height: 100vh;\n    background-image: url(" + __webpack_require__("../../../../../src/app/menu/src/background.png") + ");\n    background-size: 100%;\n}\n.top {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.top-logo {\n    width: 400px;\n    height: 370px;\n    background-image: url(" + __webpack_require__("../../../../../src/app/menu/src/LogoM.png") + ");\n}\n.top-user {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.top-user-ava {\n    width: 200px;\n    height: 200px;\n    border-radius: 100px;\n    background-color: rgba(255, 255, 255, .2);\n}\n.top-user-name {\n    width: 250px;\n    height: 50px;\n    margin: 20px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, .2);\n}\n\n.bottom {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    background-color: rgba(255, 255, 255, .2);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.bottom-btn {\n    padding: 10px;\n    background-color: rgba(255, 255, 255, .2);\n    border-radius: 5px;\n    color: #eeeeee;\n    transition: .2s;\n    cursor: pointer;\n}\n.bottom-btn:hover {\n    background-color: rgba(0, 0, 0, .2);\n    color: #FFFFFF;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <div class=\"top\">\n        <div class=\"top-logo\"></div>\n        <div class=\"top-user\">\n            <div class=\"top-user-ava\"></div>\n            <div class=\"top-user-name\"></div>\n        </div>\n    </div>\n    <div class=\"bottom\">\n        <div class=\"bottom-btn\">\n            Рейтинг\n        </div>\n        <div class=\"bottom-btn\" (click)=\"this.goToGame()\">\n            В бой!\n        </div>\n        <div class=\"bottom-btn\">\n            Выход\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/src/LogoM.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "LogoM.2ce6d6783f41bb5c2409.png";

/***/ }),

/***/ "../../../../../src/app/menu/src/background.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.679ef4e35361b28aa85e.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map