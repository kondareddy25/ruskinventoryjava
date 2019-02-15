(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add User</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input formControlName=\"firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input formControlName=\"lastName\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
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




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.createUser(this.addForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-user']);
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-user/list-user.component */ "./src/app/list-user/list-user.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _currentstock_currentstock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./currentstock/currentstock.component */ "./src/app/currentstock/currentstock.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/material-module */ "./src/material-module.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/inventory.service */ "./src/app/service/inventory.service.ts");
/* harmony import */ var _supplierdetails_supplierdetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./supplierdetails/supplierdetails.component */ "./src/app/supplierdetails/supplierdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__["ListUserComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"],
                _currentstock_currentstock_component__WEBPACK_IMPORTED_MODULE_13__["CurrentstockComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_16__["MasterComponent"],
                _supplierdetails_supplierdetails_component__WEBPACK_IMPORTED_MODULE_18__["SupplierdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                src_material_module__WEBPACK_IMPORTED_MODULE_15__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"]
            ],
            providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _service_inventory_service__WEBPACK_IMPORTED_MODULE_17__["InventoryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-user/list-user.component */ "./src/app/list-user/list-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _currentstock_currentstock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currentstock/currentstock.component */ "./src/app/currentstock/currentstock.component.ts");






var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
    { path: 'list-user', component: _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__["ListUserComponent"] },
    { path: 'edit-user', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"] },
    { path: 'inventorys', component: _currentstock_currentstock_component__WEBPACK_IMPORTED_MODULE_5__["CurrentstockComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/currentstock/currentstock.component.css":
/*!*********************************************************!*\
  !*** ./src/app/currentstock/currentstock.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\r\n    margin-bottom: 48px;\r\n  }\r\n\r\n  /* .example-button-toggle-label {\r\n    display: inline-block;\r\n    margin: 16px;\r\n  } */\r\n\r\n  .mat-tab-group.mat-primary mat-tab-label-active{\r\n    background-color: red;\r\n  }\r\n\r\n  /* Structure */\r\n\r\n  .example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  position: relative;\r\n}\r\n\r\n  .example-header {\r\n  min-height: 64px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n}\r\n\r\n  .example-table {\r\n  overflow: auto;\r\n  min-height: 300px;\r\n}\r\n\r\n  .example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n  .example-rate-limit-reached {\r\n  color: #980000;\r\n  max-width: 360px;\r\n  text-align: center;\r\n}\r\n\r\n  /* Column Widths */\r\n\r\n  .mat-column-number,\r\n.mat-column-state {\r\n  max-width: 64px;\r\n}\r\n\r\n  .mat-column-created {\r\n  max-width: 124px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudHN0b2NrL2N1cnJlbnRzdG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0dBQ3JCOztFQUVEOzs7TUFHSTs7RUFFSjtJQUNFLHNCQUFzQjtHQUN2Qjs7RUFFRCxlQUFlOztFQUNqQjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0VBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztFQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7RUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtDQUN6Qjs7RUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztFQUVELG1CQUFtQjs7RUFDbkI7O0VBRUUsZ0JBQWdCO0NBQ2pCOztFQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY3VycmVudHN0b2NrL2N1cnJlbnRzdG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcblxyXG4gIC8qIC5leGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gIH0gKi9cclxuXHJcbiAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgbWF0LXRhYi1sYWJlbC1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAvKiBTdHJ1Y3R1cmUgKi9cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlciB7XHJcbiAgbWluLWhlaWdodDogNjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtdGFibGUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1NnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XHJcbiAgY29sb3I6ICM5ODAwMDA7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIENvbHVtbiBXaWR0aHMgKi9cclxuLm1hdC1jb2x1bW4tbnVtYmVyLFxyXG4ubWF0LWNvbHVtbi1zdGF0ZSB7XHJcbiAgbWF4LXdpZHRoOiA2NHB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1jcmVhdGVkIHtcclxuICBtYXgtd2lkdGg6IDEyNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/currentstock/currentstock.component.html":
/*!**********************************************************!*\
  !*** ./src/app/currentstock/currentstock.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">    \n    <!-- <div class=\"container\"> -->\n    <!-- <div class=\"row\">\n            <p class=\"text-center\">Inventory App</p>\n            <p class=\"text-right\"> k.yallavula@gmail.com</p>\n        </div> -->\n    <!-- </div> -->\n    <span>Bismi Traders</span>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"fill-space\"></span>\n  \n    <!-- <span>Right Aligned Text</span> -->\n  </mat-toolbar>\n  <div class=\"basic-container\">\n      \n  </div>\n  \n<mat-tab-group [color]=\"white\" [backgroundColor]=\"blue\">\n    <mat-tab label=\"Current Stock\" backgroundColor=\"blue\"> \n        <div class=\"col-md-4\" style=\"margin-left: 30%;border-radius: 10px;border:solid 1px;margin-top: 20px\">\n        <div class=\"row col-sm-15\">\n            <div>\n              <p class=\"text-center\" style=\"font-size: x-large;\">Current Stock <span [innerHTML]=\"totalRusk\"></span> KG</p>\n              <!-- <p class=\"text-right\" style=\"font-size: x-large;\">{{totalRusk}} KG</p> -->\n              <form [formGroup]=\"angForm\" (ngSubmit)=\"onSubmit(angForm)\">\n                    <div class=\"form-group form-group-sm col-sm-12\">\n                            <div class=\"row\">\n                                <label for=\"formGroupArrivalDate\" class=\"col-sm-5 col-form-label\">Arrival Date</label>\n                                <div class=\"col-sm-7\">\n                                        <input type=\"date\" formControlName=\"formGroupArrivalDate\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupArrivalDate.errors }\" />\n                                        <div *ngIf=\"submitted && f.formGroupArrivalDate.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.formGroupArrivalDate.errors.required\">Arrival Date is required</div>\n                                        </div>\n                                </div>\n                            </div>\n                        </div>                 \n                  <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupTypeOfBox\" class=\"col-sm-5 col-form-label\">Type of Box</label>\n                            <div class=\"col-sm-7\">\n                                    <mat-form-field style=\"width: 98%;\">\n                                            <mat-select formControlName=\"formGroupTypeOfBox\" required (selectionChange)=\"calculateTotalKG()\" >\n                                              <mat-option *ngFor=\"let animal of animals\" [value]=\"animal.boxQuantity\">\n                                                {{animal.boxQuantity}}\n                                              </mat-option>\n                                            </mat-select>\n                                            <!-- <mat-error *ngIf=\"f.formGroupTypeOfBox.errors.required\">Please choose an animal</mat-error> -->\n                                            <div *ngIf=\"submitted && f.formGroupTypeOfBox.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.formGroupTypeOfBox.errors.required\">Type of Box is required</div>\n                                            </div>\n                                    </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                 \n                  <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupNoOfBoxes\" class=\"col-sm-5 col-form-label\">No of Boxes</label>\n                            <div class=\"col-sm-7\">\n                                    <input type=\"text\" formControlName=\"formGroupNoOfBoxes\" (blur)=\"calculateTotalKG()\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupNoOfBoxes.errors }\" />\n                                    <div *ngIf=\"submitted && f.formGroupNoOfBoxes.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.formGroupNoOfBoxes.errors.required\">No of Boxes is required</div>                                        \n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                 \n                  <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupTotalInKG\" class=\"col-sm-5 col-form-label\">Total Weight(KG)</label>\n                            <div class=\"col-sm-7\">\n                                    <input type=\"text\" readonly formControlName=\"formGroupTotalInKG\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTotalInKG.errors }\" />\n                                    <!-- <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.formGroupTotalInKG.errors.required\">Total Weight(KG) is required</div>\n                                    </div> -->\n                            </div>\n                        </div>\n                    </div>  \n                    <!-- <div class=\"form-group form-group-sm col-sm-12\">\n                            <div class=\"row\">\n                                <label for=\"formGroupTotalInKG\" class=\"col-sm-5 col-form-label\">Total Current Stock Weight(KG)</label>\n                                <div class=\"col-sm-7\">\n                                        <input type=\"text\"  [(ngModel)] = \"totalRusk\" readonly class=\"form-control\"/>\n                                        <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.formGroupTotalInKG.errors.required\">Total Weight(KG) is required</div>\n                                        </div> \n                                </div>\n                            </div>\n                        </div>                -->\n                  <div class=\"form-group text-right col-sm-12\">\n                      <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n                  </div>\n              </form>\n          </div>\n        </div>\n        </div> \n        <div>\n                <!-- <hello name=\"{{ name }}\"></hello> -->\n                <!-- <mat-divider></mat-divider> -->\n                <mat-list>\n                    <mat-list-item>\n                            <mat-divider></mat-divider> \n                    </mat-list-item>\n                </mat-list>\n                <!-- <mat-devider></mat-devider> -->\n                <div class=\"example-container mat-elevation-z8\">\n                  <mat-table #table [dataSource]=\"dataSource\">\n                \n                    <!--- Note that these columns can be defined in any order.\n                          The actual rendered columns are set as a property on the row definition\" -->\n                \n                    <!-- Position Column -->\n                    <ng-container matColumnDef=\"id\">\n                      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"arrivalDate\">\n                      <mat-header-cell *matHeaderCellDef> Arrival Date </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.arrivalDate}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"typeOfBox\">\n                      <mat-header-cell *matHeaderCellDef> Type of Box </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.typeOfBox}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"noofBoxes\">\n                      <mat-header-cell *matHeaderCellDef> No of Boxes </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.noofBoxes}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"totalweight\">\n                            <mat-header-cell *matHeaderCellDef> Total Weight(KG) </mat-header-cell>\n                            <mat-cell *matCellDef=\"let element\"> {{element.totalweight}} </mat-cell>\n                          </ng-container>\n\n                    \n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  </mat-table>\n                </div>\n</div>\n    </mat-tab>\n    <mat-tab label=\"Sales\">            \n        <app-master></app-master>\n    </mat-tab>\n    <mat-tab label=\"Master Screen\"> \n        <app-supplierdetails></app-supplierdetails>           \n    </mat-tab>\n  </mat-tab-group>\n  \n\n\n<!-- <div class=\"container\" style=\"padding:20px;border-radius: 10px;border:solid 1px;margin-top: 20px;max-width: 800px;    background: silver;\">\n    \n<div class=\"row\">\n  <div class=\"col-md-4 offset-md-3\">\n      <p class=\"text-center\" style=\"font-size: x-large;\">Current Stock</p>\n      <form [formGroup]=\"angForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n              <label>Arrival Date</label>\n              <input type=\"date\" formControlName=\"formGroupArrivalDate\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupArrivalDate.errors }\" />\n              <div *ngIf=\"submitted && f.formGroupArrivalDate.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.formGroupArrivalDate.errors.required\">Arrival Date is required</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Type of Box</label>\n              <input type=\"text\" formControlName=\"formGroupTypeOfBox\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTypeOfBox.errors }\" />\n              <div *ngIf=\"submitted && f.formGroupTypeOfBox.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.formGroupTypeOfBox.errors.required\">Type of Box is required</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>No of Boxes</label>\n              <input type=\"text\" formControlName=\"formGroupNoOfBoxes\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupNoOfBoxes.errors }\" />\n              <div *ngIf=\"submitted && f.formGroupNoOfBoxes.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.formGroupNoOfBoxes.errors.required\">No of Boxes is required</div>\n                 \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Total Weight(KG)</label>\n              <input type=\"text\" formControlName=\"formGroupTotalInKG\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTotalInKG.errors }\" />\n              <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.formGroupTotalInKG.errors.required\">Total Weight(KG) is required</div>\n                  \n              </div>\n          </div>\n          <div class=\"form-group text-right\">\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n          </div>\n      </form>\n  </div>\n</div>\n</div> -->"

/***/ }),

/***/ "./src/app/currentstock/currentstock.component.ts":
/*!********************************************************!*\
  !*** ./src/app/currentstock/currentstock.component.ts ***!
  \********************************************************/
/*! exports provided: browserRefresh, CurrentstockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentstockComponent", function() { return CurrentstockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/inventory.service */ "./src/app/service/inventory.service.ts");
/* harmony import */ var _model_Inventory_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Inventory.model */ "./src/app/model/Inventory.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var browserRefresh = false;
var CurrentstockComponent = /** @class */ (function () {
    function CurrentstockComponent(router, formBuilder, inventoryservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.inventoryservice = inventoryservice;
        this.submitted = false;
        this.name = 'Angular';
        this.displayedColumns = ['id', 'arrivalDate', 'typeOfBox', 'noofBoxes', 'totalweight'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        this.subscription = router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                browserRefresh = !router.navigated;
            }
        });
    }
    CurrentstockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angForm = this.formBuilder.group({
            formGroupArrivalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formGroupTypeOfBox: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formGroupNoOfBoxes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formGroupTotalInKG: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.inventoryservice.getAllModelTypes().subscribe(function (data) {
            _this.animals = JSON.parse(JSON.stringify(data));
        });
        this.inventoryservice.getTotalRuskStock().subscribe(function (data) {
            // this.animals = JSON.parse(JSON.stringify(data));
            var jsonData = JSON.parse(JSON.stringify(data));
            _this.totalRusk = jsonData.totalCurrentStcok;
        });
        this.inventoryservice.getAllInventory().subscribe(function (data) {
            // this.animals = JSON.parse(JSON.stringify(data));
            var jsonData = JSON.parse(JSON.stringify(data));
            _this.ELEMENT_DATA = jsonData;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.ELEMENT_DATA);
        });
        // this.animals = ['dog', 'cat', 'donkey', 'buffello', 'monkey'];
    };
    Object.defineProperty(CurrentstockComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    CurrentstockComponent.prototype.onSubmit = function (angForm) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        // alert('SUCCESS!! :-)');
        // console.log('value' + angForm.controls);
        var inventory = new _model_Inventory_model__WEBPACK_IMPORTED_MODULE_3__["Inventory"]();
        inventory.arrivalDate = angForm.controls.formGroupArrivalDate.value;
        inventory.typeOfBox = angForm.controls.formGroupTypeOfBox.value.split(' ')[0];
        inventory.noofBoxes = angForm.controls.formGroupNoOfBoxes.value;
        inventory.totalweight = angForm.controls.formGroupTotalInKG.value.split(' ')[0];
        console.log('value' + JSON.stringify(inventory));
        this.inventoryservice.createInventory(inventory).subscribe(function (data) {
            alert('successfully saved the data');
            _this.angForm.reset();
            var control = null;
            Object.keys(angForm.controls).forEach(function (name) {
                control = angForm.controls[name];
                control.setErrors(null);
                // this.router.navigate(['login']);
            });
        });
        // this.inventoryservice.getAllInventory().subscribe( data => {
        //   // this.animals = JSON.parse(JSON.stringify(data));
        //   const jsonData = JSON.parse(JSON.stringify(data));
        //   this.ELEMENT_DATA = jsonData;
        //   this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        //  });
    };
    CurrentstockComponent.prototype.calculateTotalKG = function () {
        if (!this.angForm.controls.formGroupNoOfBoxes && !this.angForm.controls.formGroupTypeOfBox) {
            return;
        }
        var typeOfBox = this.angForm.controls.formGroupTypeOfBox.value;
        var noOfBoxes = this.angForm.controls.formGroupNoOfBoxes.value;
        var boxweight = typeOfBox.split(' ');
        var totalWeight = boxweight[0] * noOfBoxes;
        console.log('totalWeight' + totalWeight);
        this.angForm.controls.formGroupTotalInKG.setValue(totalWeight + ' KG');
        this.totalRusk = (this.totalRusk + totalWeight);
    };
    CurrentstockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currentstock',
            template: __webpack_require__(/*! ./currentstock.component.html */ "./src/app/currentstock/currentstock.component.html"),
            styles: [__webpack_require__(/*! ./currentstock.component.css */ "./src/app/currentstock/currentstock.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], CurrentstockComponent);
    return CurrentstockComponent;
}());

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];


/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Edit User</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input formControlName=\"firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input formControlName=\"lastName\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('editUserId');
        if (!userId) {
            alert('Invalid action.');
            this.router.navigate(['list-user']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.userService.getUserById(+userId)
            .subscribe(function (data) {
            _this.editForm.setValue(data);
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.updateUser(this.editForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['list-user']);
        }, function (error) {
            alert(error);
        });
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/list-user/list-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-user/list-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdXNlci9saXN0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-user/list-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-user/list-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2> User Details</h2>\n  <button class=\"btn btn-danger\" (click)=\"addUser()\"> Add User</button>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Id</th>\n      <th>FirstName</th>\n      <th>LastName</th>\n      <th>Email</th>\n      <th>Action</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td class=\"hidden\">{{user.id}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.email}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>\n        <button class=\"btn btn-danger\" (click)=\"editUser(user)\" style=\"margin-left: 20px;\"> Edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/list-user/list-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-user/list-user.component.ts ***!
  \**************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ListUserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user.id)
            .subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== user; });
        });
    };
    ListUserComponent.prototype.editUser = function (user) {
        localStorage.removeItem('editUserId');
        localStorage.setItem('editUserId', user.id.toString());
        this.router.navigate(['edit-user']);
    };
    ListUserComponent.prototype.addUser = function () {
        this.router.navigate(['add-user']);
    };
    ListUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/list-user/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.css */ "./src/app/list-user/list-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\n  color: #FF0000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xuICBjb2xvcjogI0ZGMDAwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"h-100 col-md-4\" style=\"margin-left: 35%;margin-top:10%; border:teal solid 1px;border-radius: 20px; \">\n<div class=\"row h-100 justify-content-center align-items-center\">\n\n  <div class=\"col-md-6 col-md-offset-2\">\n    <h1>Login </h1>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\">\n        <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"error\">\n          <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\">\n        <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"error\">\n          <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required</div>\n        </div>\n      </div>\n      <button class=\"btn btn-default\">Login</button>\n      <div *ngIf=\"invalidLogin\" class=\"error\">\n        <div>Invalid credentials.</div>\n      </div>\n    </form>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.controls.email.value === 'test' && this.loginForm.controls.password.value === 'test') {
            this.router.navigate(['inventorys']);
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" style=\"margin-left: 30%;border-radius: 10px;border:solid 1px;margin-top: 20px\">\n    <div class=\"row col-sm-15\">\n       \n                \n                    <!-- <div class=\"col-xs-3\">\n                        <label for=\"class_type\"><h2><span class=\" label label-primary\">Class Type</span></h2></label>\n                    </div>\n                    <div class=\"col-xs-2\">\n                        <select name=\"class_type\" id=\"class_type\" class=\"  form-control input-lg\" style=\"width:200px\" autocomplete=\"off\">\n                            <option >Economy</option>\n                            <option >Premium Economy</option>\n                            <option >Club World</option>\n                            <option >First Class</option>\n                        </select>\n                    </div> -->\n                 \n        <div>\n          <p class=\"text-center\" style=\"font-size: x-large;\">Sales Info</p>\n          <form [formGroup]=\"transactionForm\" (ngSubmit)=\"onSubmit(transactionForm)\">\n                <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupArrivalDate\" class=\"col-sm-5 col-form-label\">Sales Date</label>\n                            <div class=\"col-sm-7\">\n                                    <input type=\"date\" formControlName=\"formGroupArrivalDate\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupArrivalDate.errors }\" />\n                                    <div *ngIf=\"submitted && f.formGroupArrivalDate.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.formGroupArrivalDate.errors.required\">Arrival Date is required</div>\n                                    </div>\n                            </div>\n                        </div>\n                    </div>   \n            <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupArrivalDate\" class=\"col-sm-5 col-form-label\">Supplier Name</label>\n                             \n                            <div class=\"col-sm-7\">\n                                    <mat-form-field style=\"width: 98%;\">\n                                            <mat-select formControlName=\"supplierName\" required placeholder=\"Please select supplier\">\n                                              <mat-option *ngFor=\"let supplier of suppliers\" [value]=\"supplier.id\">\n                                                {{supplier.supplierName}}\n                                              </mat-option>\n                                            </mat-select>\n                                            <!-- <mat-error *ngIf=\"f.formGroupTypeOfBox.errors.required\">Please choose an animal</mat-error> -->\n                                            <div *ngIf=\"submitted && f.supplierName.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.supplierName.errors.required\">Type of Box is required</div>\n                                            </div>\n                                    </mat-form-field>\n                                \n                            </div>\n                        </div>\n                    </div>\n              <!-- <div class=\"form-group\">\n                  <label>Arrival Date</label>\n                  <input type=\"date\" formControlName=\"formGroupArrivalDate\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupArrivalDate.errors }\" />\n                  <div *ngIf=\"submitted && f.formGroupArrivalDate.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.formGroupArrivalDate.errors.required\">Arrival Date is required</div>\n                  </div>\n              </div> -->\n              <div class=\"form-group form-group-sm col-sm-12\">\n                    <div class=\"row\">\n                        <label for=\"formGroupTypeOfBox\" class=\"col-sm-5 col-form-label\">Type of Box</label>\n                        <div class=\"col-sm-7\">\n                                <mat-form-field style=\"width: 98%;\">\n                                        <mat-select (selectionChange)=\"calculateTotalKG()\" formControlName=\"formGroupTypeOfBox\" required placeholder=\"Please select type of BOX\">\n                                          <mat-option *ngFor=\"let animal of animals\" [value]=\"animal.boxQuantity\">\n                                            {{animal.boxQuantity}}\n                                          </mat-option>\n                                        </mat-select>\n                                        <!-- <mat-error *ngIf=\"f.formGroupTypeOfBox.errors.required\">Please choose an animal</mat-error> -->\n                                        <div *ngIf=\"submitted && f.formGroupTypeOfBox.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.formGroupTypeOfBox.errors.required\">Type of Box is required</div>\n                                        </div>\n                                </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n              <!-- <div class=\"form-group\">\n                  <label>Type of Box</label>\n                 \n                  <mat-form-field style=\"width: 235px;\">\n                    <mat-select formControlName=\"formGroupTypeOfBox\" required>\n                      <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n                        {{animal}}\n                      </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"f.formGroupTypeOfBox.errors.required\">Please choose an animal</mat-error>\n                    <div *ngIf=\"submitted && f.formGroupTypeOfBox.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.formGroupTypeOfBox.errors.required\">Type of Box is required</div>\n                    </div>\n                  </mat-form-field>\n              </div> -->\n              <div class=\"form-group form-group-sm col-sm-12\">\n                    <div class=\"row\">\n                        <label for=\"formGroupNoOfBoxes\" class=\"col-sm-5 col-form-label\">No of Boxes</label>\n                        <div class=\"col-sm-7\">\n                                <input type=\"text\" (blur)=\"calculateTotalKG()\" formControlName=\"formGroupNoOfBoxes\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupNoOfBoxes.errors }\" />\n                                <div *ngIf=\"submitted && f.formGroupNoOfBoxes.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.formGroupNoOfBoxes.errors.required\">No of Boxes is required</div>                                        \n                                </div>\n                        </div>\n                    </div>\n                </div>\n              <!-- <div class=\"form-group\">\n                  <label>No of Boxes</label>\n                  <input type=\"text\" formControlName=\"formGroupNoOfBoxes\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupNoOfBoxes.errors }\" />\n                  <div *ngIf=\"submitted && f.formGroupNoOfBoxes.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.formGroupNoOfBoxes.errors.required\">No of Boxes is required</div>\n                     \n                  </div>\n              </div> -->\n              <div class=\"form-group form-group-sm col-sm-12\">\n                    <div class=\"row\">\n                        <label for=\"formGroupTotalInKG\" class=\"col-sm-5 col-form-label\">Total Weight(KG)</label>\n                        <div class=\"col-sm-7\">\n                                <input type=\"text\" readonly formControlName=\"formGroupTotalInKG\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTotalInKG.errors }\" />\n                                <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.formGroupTotalInKG.errors.required\">Total Weight(KG) is required</div>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n              <!-- <div class=\"form-group\">\n                  <label>Total Weight(KG)</label>\n                  <input type=\"text\" formControlName=\"formGroupTotalInKG\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTotalInKG.errors }\" />\n                  <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.formGroupTotalInKG.errors.required\">Total Weight(KG) is required</div>\n                      \n                  </div>\n              </div> -->\n              <div class=\"form-group form-group-sm col-sm-12\">\n                  <div class=\"row\">\n                      <label for=\"formGroupTotalInKG\" class=\"col-sm-5 col-form-label\">Total Amount (INR)</label>\n                      <div class=\"col-sm-7\">\n                              <input type=\"text\" formControlName=\"formGroupTotalAmount\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTotalAmount.errors }\" />\n                              <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                                  <div *ngIf=\"f.formGroupTotalAmount.errors.required\">Total Amount (INR) is required</div>\n                              </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"form-group text-right col-sm-12\">\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n              </div>\n          </form>\n      </div>\n    </div>\n    </div> "

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: browserRefresh, MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/inventory.service */ "./src/app/service/inventory.service.ts");
/* harmony import */ var _model_Supplier_inventory_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Supplier.inventory.model */ "./src/app/model/Supplier.inventory.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var browserRefresh = false;
var MasterComponent = /** @class */ (function () {
    function MasterComponent(router, formBuilder, inventoryservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.inventoryservice = inventoryservice;
        this.submitted = false;
        this.subscription = router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                browserRefresh = !router.navigated;
            }
        });
    }
    MasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sample = 'konda app';
        this.transactionForm = this.formBuilder.group({
            formGroupArrivalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            supplierName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formGroupTypeOfBox: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formGroupNoOfBoxes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formGroupTotalInKG: [''],
            formGroupTotalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.inventoryservice.getAllModelTypes().subscribe(function (data) {
            _this.animals = JSON.parse(JSON.stringify(data));
            console.log('data from modelbox' + JSON.stringify(data));
        });
        this.inventoryservice.getAllSuppliers().subscribe(function (data) {
            _this.suppliers = JSON.parse(JSON.stringify(data));
            console.log('data from modelbox' + JSON.stringify(data));
        });
    };
    Object.defineProperty(MasterComponent.prototype, "f", {
        get: function () { return this.transactionForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterComponent.prototype.onSubmit = function (transactionForm) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.transactionForm.invalid) {
            return;
        }
        // alert('SUCCESS!! :-)');
        console.log('value' + this.transactionForm.controls);
        var supplierInventory = new _model_Supplier_inventory_model__WEBPACK_IMPORTED_MODULE_3__["SupplierInventory"]();
        supplierInventory.arrivalDate = transactionForm.controls.formGroupArrivalDate.value;
        supplierInventory.supplierId = transactionForm.controls.supplierName.value;
        supplierInventory.typeOfBox = transactionForm.controls.formGroupTypeOfBox.value.split(' ')[0];
        supplierInventory.noofBoxes = transactionForm.controls.formGroupNoOfBoxes.value;
        supplierInventory.totalweight = transactionForm.controls.formGroupTotalInKG.value.split(' ')[0];
        supplierInventory.totalAmount = transactionForm.controls.formGroupTotalAmount.value;
        this.inventoryservice.saveSupplierInventory(supplierInventory).subscribe(function (data) {
            alert('successfully saved the data');
            transactionForm.reset();
            var control = null;
            Object.keys(transactionForm.controls).forEach(function (name) {
                control = transactionForm.controls[name];
                control.setErrors(null);
                // this.router.navigate(['login']);
            });
        });
    };
    MasterComponent.prototype.calculateTotalKG = function () {
        if (!this.transactionForm.controls.formGroupNoOfBoxes && !this.transactionForm.controls.formGroupTypeOfBox) {
            return;
        }
        var typeOfBox = this.transactionForm.controls.formGroupTypeOfBox.value;
        var noOfBoxes = this.transactionForm.controls.formGroupNoOfBoxes.value;
        var boxweight = typeOfBox.split(' ');
        var totalWeight = boxweight[0] * noOfBoxes;
        console.log('totalWeight' + totalWeight);
        this.transactionForm.controls.formGroupTotalInKG.setValue(totalWeight + ' KG');
        //  this.totalRusk = (this.totalRusk + totalWeight);
    };
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/model/Inventory.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/Inventory.model.ts ***!
  \******************************************/
/*! exports provided: Inventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inventory", function() { return Inventory; });
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());



/***/ }),

/***/ "./src/app/model/Supplier.inventory.model.ts":
/*!***************************************************!*\
  !*** ./src/app/model/Supplier.inventory.model.ts ***!
  \***************************************************/
/*! exports provided: SupplierInventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierInventory", function() { return SupplierInventory; });
var SupplierInventory = /** @class */ (function () {
    function SupplierInventory() {
    }
    return SupplierInventory;
}());



/***/ }),

/***/ "./src/app/model/Supplier.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/Supplier.model.ts ***!
  \*****************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    return Supplier;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/inventory.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/inventory.service.ts ***!
  \**********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost/inventory';
    }
    InventoryService.prototype.getUsers = function () {
        /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
         {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
         {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
         {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
       ];
       return Observable.of(fakeUsers).delay(5000);*/
        return this.http.get(this.baseUrl);
    };
    InventoryService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    InventoryService.prototype.createInventory = function (inventory) {
        return this.http.post(this.baseUrl + '/create', inventory);
    };
    InventoryService.prototype.saveSupplier = function (supplier) {
        return this.http.post(this.baseUrl + '/saveSupplier', supplier);
    };
    InventoryService.prototype.saveSupplierInventory = function (supplierInventory) {
        return this.http.post(this.baseUrl + '/saveSupplierInventory', supplierInventory);
    };
    InventoryService.prototype.getAllSuppliers = function () {
        return this.http.get(this.baseUrl + '/getAllSuppliers');
    };
    InventoryService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/' + user.id, user);
    };
    InventoryService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + '/' + id);
    };
    InventoryService.prototype.getAllModelTypes = function () {
        return this.http.get(this.baseUrl + '/getAllModelTypes');
    };
    InventoryService.prototype.getTotalRuskStock = function () {
        return this.http.get(this.baseUrl + '/getTotalRusk');
    };
    InventoryService.prototype.getAllInventory = function () {
        return this.http.get(this.baseUrl + '/getAllInventory');
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:80/user-portal/users';
    }
    UserService.prototype.getUsers = function () {
        /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
         {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
         {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
         {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
       ];
       return Observable.of(fakeUsers).delay(5000);*/
        return this.http.get(this.baseUrl);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl, user);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/' + user.id, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + '/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/supplierdetails/supplierdetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/supplierdetails/supplierdetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyZGV0YWlscy9zdXBwbGllcmRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/supplierdetails/supplierdetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/supplierdetails/supplierdetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" style=\"margin-left: 30%;border-radius: 10px;border:solid 1px;margin-top: 20px\">\n        <div class=\"row col-sm-15\">\n            <div>\n              <p class=\"text-center\" style=\"font-size: x-large;\">Register Supplier</p>\n              <form [formGroup]=\"supplierForm\" (ngSubmit)=\"onSubmit(supplierForm)\">\n                    <div class=\"form-group form-group-sm col-sm-12\">\n                            <div class=\"row\">\n                                <label for=\"supplierName\" class=\"col-sm-5 col-form-label\">Supplier Name</label>\n                                <div class=\"col-sm-7\">\n                                        <input type=\"text\" formControlName=\"supplierName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.supplierName.errors }\" />\n                                        <div *ngIf=\"submitted && f.supplierName.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.supplierName.errors.required\">Supplier Name is required</div>\n                                        </div>\n                                </div>\n                            </div>\n                        </div>                 \n                  <!-- <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupTypeOfBox\" class=\"col-sm-5 col-form-label\">Type of Box</label>\n                            <div class=\"col-sm-7\">\n                                    <mat-form-field style=\"width: 98%;\">\n                                            <mat-select formControlName=\"formGroupTypeOfBox\" required>\n                                              <mat-option *ngFor=\"let animal of animals\" [value]=\"animal.id\">\n                                                {{animal.boxQuantity}}\n                                              </mat-option>\n                                            </mat-select>-->\n                                            <!-- <mat-error *ngIf=\"f.formGroupTypeOfBox.errors.required\">Please choose an animal</mat-error> \n                                            <div *ngIf=\"submitted && f.formGroupTypeOfBox.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.formGroupTypeOfBox.errors.required\">Type of Box is required</div>\n                                            </div>\n                                    </mat-form-field>\n                            </div>\n                        </div>\n                    </div> -->\n                 \n                  <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"supplierAddress\" class=\"col-sm-5 col-form-label\">Supplier Address</label>\n                            <div class=\"col-sm-7\">\n                                    <!-- <input type=\"textarea\" formControlName=\"formGroupNoOfBoxes\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupNoOfBoxes.errors }\" />\n                                    <div *ngIf=\"submitted && f.formGroupNoOfBoxes.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.formGroupNoOfBoxes.errors.required\">No of Boxes is required</div>                                        \n                                    </div> -->\n                                    <mat-form-field>\n                                            <textarea matInput \n                                                placeholder=\"supplierAddress\" \n                                                formControlName=\"supplierAddress\">\n                                            </textarea>\n                                    </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                 \n                  <!-- <div class=\"form-group form-group-sm col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"formGroupTotalInKG\" class=\"col-sm-5 col-form-label\">Total Weight(KG)</label>\n                            <div class=\"col-sm-7\">\n                                    <input type=\"text\" readonly formControlName=\"formGroupTotalInKG\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.formGroupTotalInKG.errors }\" />\n                                    <div *ngIf=\"submitted && f.formGroupTotalInKG.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.formGroupTotalInKG.errors.required\">Total Weight(KG) is required</div>\n                                    </div>\n                            </div>\n                        </div>\n                    </div>                 -->\n                  <div class=\"form-group text-right col-sm-12\">\n                      <button [disabled]=\"loading\" class=\"btn btn-primary\">Save Supplier</button>\n                  </div>\n              </form>\n          </div>\n        </div>\n        </div>"

/***/ }),

/***/ "./src/app/supplierdetails/supplierdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/supplierdetails/supplierdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: browserRefresh, SupplierdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierdetailsComponent", function() { return SupplierdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/inventory.service */ "./src/app/service/inventory.service.ts");
/* harmony import */ var _model_Supplier_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Supplier.model */ "./src/app/model/Supplier.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var browserRefresh = false;
var SupplierdetailsComponent = /** @class */ (function () {
    function SupplierdetailsComponent(router, formBuilder, inventoryservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.inventoryservice = inventoryservice;
        this.submitted = false;
        this.name = 'Angular';
        this.subscription = router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                browserRefresh = !router.navigated;
            }
        });
    }
    SupplierdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.supplierForm = this.formBuilder.group({
            supplierName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            supplierAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.inventoryservice.getAllModelTypes().subscribe(function (data) {
            _this.animals = JSON.parse(JSON.stringify(data));
            console.log('data from modelbox' + JSON.stringify(data));
        });
    };
    Object.defineProperty(SupplierdetailsComponent.prototype, "f", {
        get: function () { return this.supplierForm.controls; },
        enumerable: true,
        configurable: true
    });
    SupplierdetailsComponent.prototype.onSubmit = function (supplierForm) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.supplierForm.invalid) {
            return;
        }
        // alert('SUCCESS!! :-)');
        // console.log('value' + angForm.controls);
        var supplier = new _model_Supplier_model__WEBPACK_IMPORTED_MODULE_3__["Supplier"]();
        supplier.supplierName = supplierForm.controls.supplierName.value;
        supplier.supplierAddress = supplierForm.controls.supplierAddress.value;
        console.log('value' + JSON.stringify(supplier));
        this.inventoryservice.saveSupplier(supplier).subscribe(function (data) {
            alert('successfully saved the data');
            //  supplierForm.resetForm();
            supplierForm.reset();
            var control = null;
            Object.keys(supplierForm.controls).forEach(function (name) {
                control = supplierForm.controls[name];
                control.setErrors(null);
                // this.router.navigate(['login']);
            });
            //  supplierForm.controls.supplierAddress.setValue('');
            //  supplierForm.controls.supplierAddress.value = '';
            // this.router.navigate(['inventory']);
        });
    };
    SupplierdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplierdetails',
            template: __webpack_require__(/*! ./supplierdetails.component.html */ "./src/app/supplierdetails/supplierdetails.component.html"),
            styles: [__webpack_require__(/*! ./supplierdetails.component.css */ "./src/app/supplierdetails/supplierdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], SupplierdetailsComponent);
    return SupplierdetailsComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\invenntry\angular6-example-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map