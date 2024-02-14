/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Light.ttf */ "./src/fonts/Lato-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Bold.ttf */ "./src/fonts/Lato-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/icons/8666681_edit_icon.png */ "./src/icons/8666681_edit_icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/icons/3844460_can_trash_icon.png */ "./src/icons/3844460_can_trash_icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/images/project.image.jpeg */ "./src/images/project.image.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'lato';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'lato-bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
    font-weight: 700;
    font-style: bold;
}

@font-face {
    font-family: 'lato-regular';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
    font-weight: 400;
}


body {
    margin: 0; 
    padding: 0; 
    background-color: #fff;
    overflow-y: hidden;
}

#content {
    display: grid;
    grid-template-columns: minmax(auto, 13rem) 1fr; /* Adjust the first value based on sidebar width */
    height: 100vh;
    overflow-y: hidden;
}

.sidebar {
    height: 100vh;
    min-width: 10rem;
    background-color: #f2f5f7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 8px rgb(144, 144, 144);
    
}

.body {
    overflow-y: auto; /* This allows scrolling */
    height: 100vh; /* Adjust if necessary */
}

.main-pages {
    padding-bottom: 3rem;
}

ul {
    padding-left: 1.5rem;  
    list-style: none;
    margin-top: 2rem; 
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 
    font-size: 1.2em;
    color: black;
}

li {
    font-family: 'lato';
    list-style-type: none;
}

li:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.homeButton {
    width: fit-content;
}

.homeButton.active {
    transform: scale(1.1);
    font-family: 'lato-regular';
}

#todaypage-button.active {
    transform: scale(1.1);
}

.create-new {
    font-family: 'lato-bold';
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    background-color: #5c9cf5;
    color: white;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    box-shadow: 0px 4px 6px rgb(144, 144, 144);
}

.modal, .details-modal, .edit-modal, .add-task-modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    min-height: 100vh; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    display: flex; /* Use flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

.modal-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #5c9cf5;
    font-size: 2.5rem;
    padding: 1rem;
    font-family: 'lato-regular';
    border-bottom: 1px solid rgba(0, 0, 0, 0.266); 
    color: white;
}

.modal-content, .task-content {
    display: flex;
    flex-direction: row;
    height: 83.1%; 
}

.modal-text {
    width: 100%;
    min-width: max-content;
}

.modal-sidebar {
    background-color: #f2f5f7;
    width: 9rem;
    box-shadow: 0px 2px 8px rgb(144, 144, 144);
    max-height: 100%;
}

.modal-sidebar-options {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem; 
    padding-top: 1.5rem;
    gap: 1rem; 
    font-size: 1.2rem;
}

/* Modal Content */
.modal-container {
    height: 100%;
    background-color: #fefefe;
    margin: 10% auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width: 50%; 
    height: 30rem;
    border: 1px solid rgba(0, 0, 0, 0.556);
    min-width: 40rem; 
}

.edit-modal-container, .task-modal-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fefefe;
    margin: 10% auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width: 40%; 
    height: 20rem;
    border: 1px solid rgba(0, 0, 0, 0.556);
    min-width: 30rem; 
    border-radius: 10px;
}



/* The Close Button */
.close {
    color: #ffffff;
    float: right;
    font-weight: bold;
    margin-right: 1rem;
}

.close:hover,
.close:focus {
    color: rgb(0, 0, 0);
    text-decoration: none;
    cursor: pointer;
}

#todo-page, #project-container, #note-container {
    height: 95%;
    padding-top: 0.6rem;
    padding-left: 2rem; 
    padding-bottom: 0.6rem;
    padding-right: 0.6rem; 
    width: 92%;
}

.todo-content, .edit-content, .task-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.edit-content, .task-content {
    height: 90%;
    padding-left: 2rem; 
    padding-bottom: 1.6rem;
    width: 92%;
}

.edit-page, #add-task-page {
    height: 100%;
    margin-right: 0.8rem; 
}



.upper-todo-inputs, .note-upper, .upper-task-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#title-input,
#details-input,
#project-title, 
#modal-note-title, 
#modal-note-details, 
#edit-title-input, 
#edit-details-input,
#task-title-input,
#task-details-input {
    border: none; 
    outline: none;
    background-color: transparent;
}

.edit-title-input {
    border: none; 
    outline: none;
    background-color: transparent;
}

#title-input, 
#project-title, 
#modal-note-title, 
#edit-title-input,
#task-title-input {
    font-size: 1.2rem;
}

#details-input, 
#modal-note-details, 
#edit-details-input,
#task-details-input {
    font-size: 1rem;
    width: 100%; 
}


.lower-todo-inputs, .lower-task-inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

.date-and-priority {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.priority-box{
    display: flex;
    align-items: center;
    gap: 1.3rem;
    font-family: 'lato-regular';
}

.date-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'lato-regular';
}

#date, #edit-date, #task-date {
    border: 1px solid lightgray; 
    border-radius: 5px;
    width: 6.6rem;
    height: 1.6rem;
    color: gray;
    padding-right: 1rem;
    padding-left: 1rem;
}

#priority-selector {
    display: flex;
    gap: 1rem;
}

.priority-button {
    border-radius: 5px;
    background-color: transparent;
    height: 1.5rem;
    width: 5rem;
}

.priority-button:hover {
    cursor: pointer;
}

.add-todo, .add-task-button {
    font-size: 0.8rem;
    height: 1.9rem;
    width: 6.5rem;
    border-radius: 4px;
    border: 1.5px solid #5c9cf5;  
    background-color: transparent;
    color: #5c9cf5;
    font-family: 'lato-bold';
}

.confirm-edit-button {
    font-size: 0.8rem;
    height: 1.9rem;
    width: 7.2rem;
    border-radius: 4px;
    border: 1.5px solid #5c9cf5;  
    background-color: transparent;
    color: #5c9cf5;
    font-family: 'lato-bold';
}

.add-todo:hover,
.create-project-btn:hover,
.create-note-btn:hover,
.details-button:hover,
.confirm-edit-button:hover,
.add-task-button:hover {
    cursor: pointer;
    border: 1px solid #5c9cf5;  
    background-color: #5c9cf5;
    color: white;
}


.project-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.create-project-btn, .create-note-btn {
    width: 25%;
    height: 1.9rem;
    border-radius: 4px;
    font-family: 'lato-bold';
    border: 1.5px solid #5c9cf5; 
    color: #5c9cf5;
    background-color: transparent;
}

.note-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.home-page, .homepage-content, .notepage.content, .projectpage-content, .todaypage-content, .thisweekpage-content {
    max-width: 100%;
    max-height: 100%;
}

.homepage-content, .notepage-content, .projectpage-content, .i-project-content, .todaypage-content, .thisweekpage-content {
    margin-left: 15rem;
    margin-right: 15rem;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem; 
}

.homepage-todo-content, .project-todo-content, .todaypage-todo-content, .thisweekpage-todo-content {
    display: flex;
    flex-direction: column;
    gap: 1rem; 
}

.page-title, .note-page-title, .projectpage-title, .project-title-name {
    font-family: 'lato-bold';
    font-size: 2rem;
}

.todo-element {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    gap: 8rem;
    background-color: #f2f5f7;
    border: 1px solid rgba(0, 0, 0, 0.15); 
    border-radius: 2px;
    border-left: 4px solid #5c9cf5;
    font-family: 'lato';
    font-size: 1.2rem;
}

.todo-element:hover {
    box-shadow: 3px 3px 7px rgb(144, 144, 144);
    transform: scale(1.003);
}

.left-bar, .right-bar {
    display: flex;
    align-items: center;
    gap: 1.3rem; 
}

.right-buttons {
    display: flex;
    gap: 0.6rem; 
}

.date-text {
    width: 3.9rem; 
    font-size: 0.95rem;
    font-family: 'lato-regular';
    
}

.details-button {
    font-size: 0.8rem;
    height: 1.9rem;
    width: 6.5rem;
    border-radius: 4px;
    border: 1px solid #5c9cf5;  
    background-color: transparent;
    color: #5c9cf5;
    font-family: 'lato-bold';
}

.edit-button  {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-position: center;
    
}

.delete-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-position: center;
}

.delete-button, .edit-button {
    width: 2rem;
    height: 2rem;
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px;
    border: none;
    text-align: center;
    background-color: transparent;
}

.delete-button:hover, .edit-button:hover {
    opacity: 0.3;
    cursor: pointer;
}

.details-modal-container {
    display: flex;
    justify-content: space-between;
    background-color: #f2f5f7;
    border: 1px solid #888;
    width: 30%; 
    height: 15rem; 
    border: 1px solid rgba(0, 0, 0, 0.556);
    min-width: 40rem; 
    border-radius: 10px;
    border-left: 5px solid #5c9cf5; 
}

.details-close-button {
    color: #000000;
    float: right;
    font-family: 'lato-regular';
    margin-right: 1rem;
    margin-top: 0.4rem;
    font-size: 1.8rem;
    height: max-content;
}

.details-close-button:hover,
.details-close-button:focus,
.edit-close-button:hover,
.edit-close-button:focus,
.note-delete-button:hover,
.note-delete-button:focus {
    color: rgba(0, 0, 0, 0.586);
    text-decoration: none;
    cursor: pointer;
}

.todo-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3rem;
}

.details-title {
    font-size: 2rem;
    font-family: 'lato-regular';
    text-decoration: underline;
}

.details-box {
    display: flex;
    gap: 1.5rem;
}

.left-details, .right-details {
    display: flex;
    flex-direction: column;
    gap: 0.3rem; 
}

.left-details {
    font-family: 'lato-bold';
}

.right-details {
    font-family: 'lato-regular';
}

.close-button-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 1.2rem;
    margin-top: 0.8rem;
}

.edit-close-button {
    font-size: 1.6rem;
    width: min-content;
}

.todo-title-completed {
    text-decoration: line-through; /* Draws a line through the text */
}

.todo-element-completed {
    opacity: 0.5; /* Reduces the opacity */
}

.notes-container {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3;    /* Firefox */
    column-count: 3;         /* Standard syntax */

    -webkit-column-gap: 1em; /* Chrome, Safari, Opera */
    -moz-column-gap: 1em;    /* Firefox */
    column-gap: 1em;         /* Standard syntax */

    width: 100%; /* Adjust the width as necessary */
}

.note-box {
    display: inline-block;
    width: 100%;
    min-width: 15rem;
    margin-bottom: 1em; /* This sets the vertical gap between items */
    break-inside: avoid-column;
}

.note-element {
    position: relative;
    display: inline-block;
    background-color: #f2f5f7;
    width: 100%;
    padding-top: 0.5rem; 
    padding-bottom: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.165);
    border-radius: 5px;
    overflow-wrap: normal;
    
}

.note-element textarea {
    width: calc(100% - 2 * 4px); /* Adjust for padding */
    resize: none;
    box-sizing: border-box;
    border: none; /* Assuming you don't want a border inside .note-element */
    overflow-y: hidden; /* Hide scrollbar, but won't make it grow */
    padding-left: 1.5rem; 
}

.note-element textarea:focus {
    outline: none;
}

.note-element:hover {
    box-shadow: 3px 3px 7px rgb(144, 144, 144);
    transform: scale(1.005);
}

.note-delete-btn-container {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
}

.note-delete-button {
    font-size: 1.5rem;
    padding-right: 0.8rem;
}

#note-title, #note-details {
    background-color: transparent;
    padding-right: 1.5rem;
}

#note-title {
    margin-top: -0.3rem;
    font-size: 1.7rem;
    font-family: 'lato-regular';
    height: 35px;
}

#note-details {
    font-family: 'lato';
    font-size: 1.2rem;
}

.projects-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.project-box {
    width: 48%;
    min-width: 25rem;
    height: 13rem;
    border-radius: 10px;
    transition: transform 0.2s ease; /* Smooth transition for scaling */
}

.project-element {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; /* Needed for the pseudo-element positioning */
}

.project-element::before {
    border-radius: 10px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
    box-shadow: 5px 5px 5px rgb(0, 0, 0);
}

.project-box:hover {
    transform: scale(1.03);
}


.project-title {
    margin-top: 4.5rem;
    margin-right: -1rem; 
    font-family: 'lato-regular';
    font-size: 2.5rem;
    color: black;
    cursor: pointer;
}

.project-title-content {
    font-family: 'lato-light';
}

.project-delete-container {
    width: 100%; 
    display: flex;
    justify-content: flex-end;
    margin-right: 1.8rem; 
    margin-top: 2.5rem;
}

.project-delete-btn:hover {
    border: 1px solid black; 
    background-color: red;
    cursor: pointer; 
}

.project-delete-btn {
    font-size: 0.8rem;
    height: 1.9rem;
    width: 7.4rem;
    border-radius: 4px;
    border: none;
    background-color: transparent;
    color: #5c9cf5;
    font-family: 'lato-bold';
    color: black; 
}

.title-content {
    display: flex;
    gap: 0.7rem; 
}

.i-project-title {
    font-size: 2rem;
    font-family: 'lato-regular';
}

.add-todo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    font-family: 'lato-regular';
    font-size: 1.2rem;
    cursor: pointer;
}

.add-todo-content:hover {
    background-color: #f2f5f7;
    border-radius: 5px;
}

.plus-symbol {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
}


/* styling for checkbox */
.checkbox-wrapper-19 {
display: flex;
box-sizing: border-box;
--background-color: #fff;
--checkbox-height: 25px;
}
/*
@-moz-keyframes dothabottomcheck-19 {
0% {
    height: 0;
}
100% {
    height: calc(var(--checkbox-height) / 2);
}
}

@-webkit-keyframes dothabottomcheck-19 {
0% {
    height: 0;
}
100% {
    height: calc(var(--checkbox-height) / 2);
}
}

@keyframes dothabottomcheck-19 {
0% {
    height: 0;
}
100% {
    height: calc(var(--checkbox-height) / 2);
}
}

@keyframes dothatopcheck-19 {
0% {
    height: 0;
}
50% {
    height: 0;
}
100% {
    height: calc(var(--checkbox-height) * 1.2);
}
}

@-webkit-keyframes dothatopcheck-19 {
0% {
    height: 0;
}
50% {
    height: 0;
}
100% {
    height: calc(var(--checkbox-height) * 1.2);
}
}

@-moz-keyframes dothatopcheck-19 {
0% {
    height: 0;
}
50% {
    height: 0;
}
100% {
    height: calc(var(--checkbox-height) * 1.2);
}
}

.checkbox-wrapper-19 input[type=checkbox] {
display: none;
}

.checkbox-wrapper-19 .check-box {
height: var(--checkbox-height);
width: var(--checkbox-height);
background-color: transparent;
border: calc(var(--checkbox-height) * .1) solid #5c9cf5;
border-radius: 5px;
position: relative;
display: inline-block;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
-moz-transition: border-color ease 0.2s;
-o-transition: border-color ease 0.2s;
-webkit-transition: border-color ease 0.2s;
transition: border-color ease 0.2s;
cursor: pointer;
}
.checkbox-wrapper-19 .check-box::before,
.checkbox-wrapper-19 .check-box::after {
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: absolute;
height: 0;
width: calc(var(--checkbox-height) * .2);
background-color: #5c9cf5;
display: inline-block;
-moz-transform-origin: left top;
-ms-transform-origin: left top;
-o-transform-origin: left top;
-webkit-transform-origin: left top;
transform-origin: left top;
border-radius: 5px;
content: " ";
-webkit-transition: opacity ease 0.5;
-moz-transition: opacity ease 0.5;
transition: opacity ease 0.5;
}
.checkbox-wrapper-19 .check-box::before {
top: calc(var(--checkbox-height) * .72);
left: calc(var(--checkbox-height) * .41);
box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
-moz-transform: rotate(-135deg);
-ms-transform: rotate(-135deg);
-o-transform: rotate(-135deg);
-webkit-transform: rotate(-135deg);
transform: rotate(-135deg);
}
.checkbox-wrapper-19 .check-box::after {
top: calc(var(--checkbox-height) * .37);
left: calc(var(--checkbox-height) * .05);
-moz-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
transform: rotate(-45deg);
}

.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,
.checkbox-wrapper-19 .check-box.checked {
border-color: #5c9cf5;
}
.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,
.checkbox-wrapper-19 .check-box.checked::after {
height: calc(var(--checkbox-height) / 2);
-moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
-o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
-webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
animation: dothabottomcheck-19 0.2s ease 0s forwards;
}
.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,
.checkbox-wrapper-19 .check-box.checked::before {
height: calc(var(--checkbox-height) * 1.2);
-moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
-o-animation: dothatopcheck-19 0.4s ease 0s forwards;
-webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
animation: dothatopcheck-19 0.4s ease 0s forwards;
}





*/






`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'lato';\n    src: url('./fonts/Lato-Light.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'lato-bold';\n    src: url('./fonts/Lato-Bold.ttf') format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n\n@font-face {\n    font-family: 'lato-regular';\n    src: url('./fonts/Lato-Regular.ttf') format('truetype');\n    font-weight: 400;\n}\n\n\nbody {\n    margin: 0; \n    padding: 0; \n    background-color: #fff;\n    overflow-y: hidden;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: minmax(auto, 13rem) 1fr; /* Adjust the first value based on sidebar width */\n    height: 100vh;\n    overflow-y: hidden;\n}\n\n.sidebar {\n    height: 100vh;\n    min-width: 10rem;\n    background-color: #f2f5f7;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 0px 2px 8px rgb(144, 144, 144);\n    \n}\n\n.body {\n    overflow-y: auto; /* This allows scrolling */\n    height: 100vh; /* Adjust if necessary */\n}\n\n.main-pages {\n    padding-bottom: 3rem;\n}\n\nul {\n    padding-left: 1.5rem;  \n    list-style: none;\n    margin-top: 2rem; \n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem; \n    font-size: 1.2em;\n    color: black;\n}\n\nli {\n    font-family: 'lato';\n    list-style-type: none;\n}\n\nli:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n.homeButton {\n    width: fit-content;\n}\n\n.homeButton.active {\n    transform: scale(1.1);\n    font-family: 'lato-regular';\n}\n\n#todaypage-button.active {\n    transform: scale(1.1);\n}\n\n.create-new {\n    font-family: 'lato-bold';\n    width: 4rem;\n    height: 4rem;\n    line-height: 4rem;\n    margin-left: 1.5rem;\n    margin-bottom: 2rem;\n    font-size: 1.5rem;\n    background-color: #5c9cf5;\n    color: white;\n    border-radius: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 4rem;\n    box-shadow: 0px 4px 6px rgb(144, 144, 144);\n}\n\n.modal, .details-modal, .edit-modal, .add-task-modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    min-height: 100vh; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    display: flex; /* Use flexbox */\n    justify-content: center; /* Center horizontally */\n    align-items: center; /* Center vertically */\n}\n\n.modal-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #5c9cf5;\n    font-size: 2.5rem;\n    padding: 1rem;\n    font-family: 'lato-regular';\n    border-bottom: 1px solid rgba(0, 0, 0, 0.266); \n    color: white;\n}\n\n.modal-content, .task-content {\n    display: flex;\n    flex-direction: row;\n    height: 83.1%; \n}\n\n.modal-text {\n    width: 100%;\n    min-width: max-content;\n}\n\n.modal-sidebar {\n    background-color: #f2f5f7;\n    width: 9rem;\n    box-shadow: 0px 2px 8px rgb(144, 144, 144);\n    max-height: 100%;\n}\n\n.modal-sidebar-options {\n    display: flex;\n    flex-direction: column;\n    padding-left: 1.5rem; \n    padding-top: 1.5rem;\n    gap: 1rem; \n    font-size: 1.2rem;\n}\n\n/* Modal Content */\n.modal-container {\n    height: 100%;\n    background-color: #fefefe;\n    margin: 10% auto; /* 15% from the top and centered */\n    border: 1px solid #888;\n    width: 50%; \n    height: 30rem;\n    border: 1px solid rgba(0, 0, 0, 0.556);\n    min-width: 40rem; \n}\n\n.edit-modal-container, .task-modal-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background-color: #fefefe;\n    margin: 10% auto; /* 15% from the top and centered */\n    border: 1px solid #888;\n    width: 40%; \n    height: 20rem;\n    border: 1px solid rgba(0, 0, 0, 0.556);\n    min-width: 30rem; \n    border-radius: 10px;\n}\n\n\n\n/* The Close Button */\n.close {\n    color: #ffffff;\n    float: right;\n    font-weight: bold;\n    margin-right: 1rem;\n}\n\n.close:hover,\n.close:focus {\n    color: rgb(0, 0, 0);\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#todo-page, #project-container, #note-container {\n    height: 95%;\n    padding-top: 0.6rem;\n    padding-left: 2rem; \n    padding-bottom: 0.6rem;\n    padding-right: 0.6rem; \n    width: 92%;\n}\n\n.todo-content, .edit-content, .task-content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.edit-content, .task-content {\n    height: 90%;\n    padding-left: 2rem; \n    padding-bottom: 1.6rem;\n    width: 92%;\n}\n\n.edit-page, #add-task-page {\n    height: 100%;\n    margin-right: 0.8rem; \n}\n\n\n\n.upper-todo-inputs, .note-upper, .upper-task-inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#title-input,\n#details-input,\n#project-title, \n#modal-note-title, \n#modal-note-details, \n#edit-title-input, \n#edit-details-input,\n#task-title-input,\n#task-details-input {\n    border: none; \n    outline: none;\n    background-color: transparent;\n}\n\n.edit-title-input {\n    border: none; \n    outline: none;\n    background-color: transparent;\n}\n\n#title-input, \n#project-title, \n#modal-note-title, \n#edit-title-input,\n#task-title-input {\n    font-size: 1.2rem;\n}\n\n#details-input, \n#modal-note-details, \n#edit-details-input,\n#task-details-input {\n    font-size: 1rem;\n    width: 100%; \n}\n\n\n.lower-todo-inputs, .lower-task-inputs {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.date-and-priority {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.priority-box{\n    display: flex;\n    align-items: center;\n    gap: 1.3rem;\n    font-family: 'lato-regular';\n}\n\n.date-box {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-family: 'lato-regular';\n}\n\n#date, #edit-date, #task-date {\n    border: 1px solid lightgray; \n    border-radius: 5px;\n    width: 6.6rem;\n    height: 1.6rem;\n    color: gray;\n    padding-right: 1rem;\n    padding-left: 1rem;\n}\n\n#priority-selector {\n    display: flex;\n    gap: 1rem;\n}\n\n.priority-button {\n    border-radius: 5px;\n    background-color: transparent;\n    height: 1.5rem;\n    width: 5rem;\n}\n\n.priority-button:hover {\n    cursor: pointer;\n}\n\n.add-todo, .add-task-button {\n    font-size: 0.8rem;\n    height: 1.9rem;\n    width: 6.5rem;\n    border-radius: 4px;\n    border: 1.5px solid #5c9cf5;  \n    background-color: transparent;\n    color: #5c9cf5;\n    font-family: 'lato-bold';\n}\n\n.confirm-edit-button {\n    font-size: 0.8rem;\n    height: 1.9rem;\n    width: 7.2rem;\n    border-radius: 4px;\n    border: 1.5px solid #5c9cf5;  \n    background-color: transparent;\n    color: #5c9cf5;\n    font-family: 'lato-bold';\n}\n\n.add-todo:hover,\n.create-project-btn:hover,\n.create-note-btn:hover,\n.details-button:hover,\n.confirm-edit-button:hover,\n.add-task-button:hover {\n    cursor: pointer;\n    border: 1px solid #5c9cf5;  \n    background-color: #5c9cf5;\n    color: white;\n}\n\n\n.project-page {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.create-project-btn, .create-note-btn {\n    width: 25%;\n    height: 1.9rem;\n    border-radius: 4px;\n    font-family: 'lato-bold';\n    border: 1.5px solid #5c9cf5; \n    color: #5c9cf5;\n    background-color: transparent;\n}\n\n.note-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n}\n\n.home-page, .homepage-content, .notepage.content, .projectpage-content, .todaypage-content, .thisweekpage-content {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.homepage-content, .notepage-content, .projectpage-content, .i-project-content, .todaypage-content, .thisweekpage-content {\n    margin-left: 15rem;\n    margin-right: 15rem;\n    margin-top: 6rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem; \n}\n\n.homepage-todo-content, .project-todo-content, .todaypage-todo-content, .thisweekpage-todo-content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem; \n}\n\n.page-title, .note-page-title, .projectpage-title, .project-title-name {\n    font-family: 'lato-bold';\n    font-size: 2rem;\n}\n\n.todo-element {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 0.8rem;\n    padding-left: 0.8rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem;\n    gap: 8rem;\n    background-color: #f2f5f7;\n    border: 1px solid rgba(0, 0, 0, 0.15); \n    border-radius: 2px;\n    border-left: 4px solid #5c9cf5;\n    font-family: 'lato';\n    font-size: 1.2rem;\n}\n\n.todo-element:hover {\n    box-shadow: 3px 3px 7px rgb(144, 144, 144);\n    transform: scale(1.003);\n}\n\n.left-bar, .right-bar {\n    display: flex;\n    align-items: center;\n    gap: 1.3rem; \n}\n\n.right-buttons {\n    display: flex;\n    gap: 0.6rem; \n}\n\n.date-text {\n    width: 3.9rem; \n    font-size: 0.95rem;\n    font-family: 'lato-regular';\n    \n}\n\n.details-button {\n    font-size: 0.8rem;\n    height: 1.9rem;\n    width: 6.5rem;\n    border-radius: 4px;\n    border: 1px solid #5c9cf5;  \n    background-color: transparent;\n    color: #5c9cf5;\n    font-family: 'lato-bold';\n}\n\n.edit-button  {\n    background-image: url('/src/icons/8666681_edit_icon.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    \n}\n\n.delete-button {\n    background-image: url('/src/icons/3844460_can_trash_icon.png');\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.delete-button, .edit-button {\n    width: 2rem;\n    height: 2rem;\n    background-size: 70%;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 10px;\n    border: none;\n    text-align: center;\n    background-color: transparent;\n}\n\n.delete-button:hover, .edit-button:hover {\n    opacity: 0.3;\n    cursor: pointer;\n}\n\n.details-modal-container {\n    display: flex;\n    justify-content: space-between;\n    background-color: #f2f5f7;\n    border: 1px solid #888;\n    width: 30%; \n    height: 15rem; \n    border: 1px solid rgba(0, 0, 0, 0.556);\n    min-width: 40rem; \n    border-radius: 10px;\n    border-left: 5px solid #5c9cf5; \n}\n\n.details-close-button {\n    color: #000000;\n    float: right;\n    font-family: 'lato-regular';\n    margin-right: 1rem;\n    margin-top: 0.4rem;\n    font-size: 1.8rem;\n    height: max-content;\n}\n\n.details-close-button:hover,\n.details-close-button:focus,\n.edit-close-button:hover,\n.edit-close-button:focus,\n.note-delete-button:hover,\n.note-delete-button:focus {\n    color: rgba(0, 0, 0, 0.586);\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.todo-details {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 3rem;\n}\n\n.details-title {\n    font-size: 2rem;\n    font-family: 'lato-regular';\n    text-decoration: underline;\n}\n\n.details-box {\n    display: flex;\n    gap: 1.5rem;\n}\n\n.left-details, .right-details {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem; \n}\n\n.left-details {\n    font-family: 'lato-bold';\n}\n\n.right-details {\n    font-family: 'lato-regular';\n}\n\n.close-button-container {\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 1.2rem;\n    margin-top: 0.8rem;\n}\n\n.edit-close-button {\n    font-size: 1.6rem;\n    width: min-content;\n}\n\n.todo-title-completed {\n    text-decoration: line-through; /* Draws a line through the text */\n}\n\n.todo-element-completed {\n    opacity: 0.5; /* Reduces the opacity */\n}\n\n.notes-container {\n    -webkit-column-count: 3; /* Chrome, Safari, Opera */\n    -moz-column-count: 3;    /* Firefox */\n    column-count: 3;         /* Standard syntax */\n\n    -webkit-column-gap: 1em; /* Chrome, Safari, Opera */\n    -moz-column-gap: 1em;    /* Firefox */\n    column-gap: 1em;         /* Standard syntax */\n\n    width: 100%; /* Adjust the width as necessary */\n}\n\n.note-box {\n    display: inline-block;\n    width: 100%;\n    min-width: 15rem;\n    margin-bottom: 1em; /* This sets the vertical gap between items */\n    break-inside: avoid-column;\n}\n\n.note-element {\n    position: relative;\n    display: inline-block;\n    background-color: #f2f5f7;\n    width: 100%;\n    padding-top: 0.5rem; \n    padding-bottom: 1.5rem;\n    border: 1px solid rgba(0, 0, 0, 0.165);\n    border-radius: 5px;\n    overflow-wrap: normal;\n    \n}\n\n.note-element textarea {\n    width: calc(100% - 2 * 4px); /* Adjust for padding */\n    resize: none;\n    box-sizing: border-box;\n    border: none; /* Assuming you don't want a border inside .note-element */\n    overflow-y: hidden; /* Hide scrollbar, but won't make it grow */\n    padding-left: 1.5rem; \n}\n\n.note-element textarea:focus {\n    outline: none;\n}\n\n.note-element:hover {\n    box-shadow: 3px 3px 7px rgb(144, 144, 144);\n    transform: scale(1.005);\n}\n\n.note-delete-btn-container {\n    display: flex;\n    justify-content: flex-end;\n    margin: 0;\n    padding: 0;\n}\n\n.note-delete-button {\n    font-size: 1.5rem;\n    padding-right: 0.8rem;\n}\n\n#note-title, #note-details {\n    background-color: transparent;\n    padding-right: 1.5rem;\n}\n\n#note-title {\n    margin-top: -0.3rem;\n    font-size: 1.7rem;\n    font-family: 'lato-regular';\n    height: 35px;\n}\n\n#note-details {\n    font-family: 'lato';\n    font-size: 1.2rem;\n}\n\n.projects-container {\n    display: flex;\n    gap: 2rem;\n    flex-wrap: wrap;\n}\n\n.project-box {\n    width: 48%;\n    min-width: 25rem;\n    height: 13rem;\n    border-radius: 10px;\n    transition: transform 0.2s ease; /* Smooth transition for scaling */\n}\n\n.project-element {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative; /* Needed for the pseudo-element positioning */\n}\n\n.project-element::before {\n    border-radius: 10px;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('/src/images/project.image.jpeg');\n    background-size: cover;\n    background-position: center;\n    opacity: 0.5;\n    z-index: -1;\n    box-shadow: 5px 5px 5px rgb(0, 0, 0);\n}\n\n.project-box:hover {\n    transform: scale(1.03);\n}\n\n\n.project-title {\n    margin-top: 4.5rem;\n    margin-right: -1rem; \n    font-family: 'lato-regular';\n    font-size: 2.5rem;\n    color: black;\n    cursor: pointer;\n}\n\n.project-title-content {\n    font-family: 'lato-light';\n}\n\n.project-delete-container {\n    width: 100%; \n    display: flex;\n    justify-content: flex-end;\n    margin-right: 1.8rem; \n    margin-top: 2.5rem;\n}\n\n.project-delete-btn:hover {\n    border: 1px solid black; \n    background-color: red;\n    cursor: pointer; \n}\n\n.project-delete-btn {\n    font-size: 0.8rem;\n    height: 1.9rem;\n    width: 7.4rem;\n    border-radius: 4px;\n    border: none;\n    background-color: transparent;\n    color: #5c9cf5;\n    font-family: 'lato-bold';\n    color: black; \n}\n\n.title-content {\n    display: flex;\n    gap: 0.7rem; \n}\n\n.i-project-title {\n    font-size: 2rem;\n    font-family: 'lato-regular';\n}\n\n.add-todo-content {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 0.6rem;\n    padding-right: 0.8rem;\n    padding-left: 0.8rem;\n    padding-top: 0.1rem;\n    padding-bottom: 0.1rem;\n    font-family: 'lato-regular';\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n.add-todo-content:hover {\n    background-color: #f2f5f7;\n    border-radius: 5px;\n}\n\n.plus-symbol {\n    font-size: 1.8rem;\n    margin-bottom: 0.2rem;\n}\n\n\n/* styling for checkbox */\n.checkbox-wrapper-19 {\ndisplay: flex;\nbox-sizing: border-box;\n--background-color: #fff;\n--checkbox-height: 25px;\n}\n/*\n@-moz-keyframes dothabottomcheck-19 {\n0% {\n    height: 0;\n}\n100% {\n    height: calc(var(--checkbox-height) / 2);\n}\n}\n\n@-webkit-keyframes dothabottomcheck-19 {\n0% {\n    height: 0;\n}\n100% {\n    height: calc(var(--checkbox-height) / 2);\n}\n}\n\n@keyframes dothabottomcheck-19 {\n0% {\n    height: 0;\n}\n100% {\n    height: calc(var(--checkbox-height) / 2);\n}\n}\n\n@keyframes dothatopcheck-19 {\n0% {\n    height: 0;\n}\n50% {\n    height: 0;\n}\n100% {\n    height: calc(var(--checkbox-height) * 1.2);\n}\n}\n\n@-webkit-keyframes dothatopcheck-19 {\n0% {\n    height: 0;\n}\n50% {\n    height: 0;\n}\n100% {\n    height: calc(var(--checkbox-height) * 1.2);\n}\n}\n\n@-moz-keyframes dothatopcheck-19 {\n0% {\n    height: 0;\n}\n50% {\n    height: 0;\n}\n100% {\n    height: calc(var(--checkbox-height) * 1.2);\n}\n}\n\n.checkbox-wrapper-19 input[type=checkbox] {\ndisplay: none;\n}\n\n.checkbox-wrapper-19 .check-box {\nheight: var(--checkbox-height);\nwidth: var(--checkbox-height);\nbackground-color: transparent;\nborder: calc(var(--checkbox-height) * .1) solid #5c9cf5;\nborder-radius: 5px;\nposition: relative;\ndisplay: inline-block;\n-moz-box-sizing: border-box;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;\n-moz-transition: border-color ease 0.2s;\n-o-transition: border-color ease 0.2s;\n-webkit-transition: border-color ease 0.2s;\ntransition: border-color ease 0.2s;\ncursor: pointer;\n}\n.checkbox-wrapper-19 .check-box::before,\n.checkbox-wrapper-19 .check-box::after {\n-moz-box-sizing: border-box;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;\nposition: absolute;\nheight: 0;\nwidth: calc(var(--checkbox-height) * .2);\nbackground-color: #5c9cf5;\ndisplay: inline-block;\n-moz-transform-origin: left top;\n-ms-transform-origin: left top;\n-o-transform-origin: left top;\n-webkit-transform-origin: left top;\ntransform-origin: left top;\nborder-radius: 5px;\ncontent: \" \";\n-webkit-transition: opacity ease 0.5;\n-moz-transition: opacity ease 0.5;\ntransition: opacity ease 0.5;\n}\n.checkbox-wrapper-19 .check-box::before {\ntop: calc(var(--checkbox-height) * .72);\nleft: calc(var(--checkbox-height) * .41);\nbox-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);\n-moz-transform: rotate(-135deg);\n-ms-transform: rotate(-135deg);\n-o-transform: rotate(-135deg);\n-webkit-transform: rotate(-135deg);\ntransform: rotate(-135deg);\n}\n.checkbox-wrapper-19 .check-box::after {\ntop: calc(var(--checkbox-height) * .37);\nleft: calc(var(--checkbox-height) * .05);\n-moz-transform: rotate(-45deg);\n-ms-transform: rotate(-45deg);\n-o-transform: rotate(-45deg);\n-webkit-transform: rotate(-45deg);\ntransform: rotate(-45deg);\n}\n\n.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,\n.checkbox-wrapper-19 .check-box.checked {\nborder-color: #5c9cf5;\n}\n.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,\n.checkbox-wrapper-19 .check-box.checked::after {\nheight: calc(var(--checkbox-height) / 2);\n-moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n-o-animation: dothabottomcheck-19 0.2s ease 0s forwards;\n-webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;\nanimation: dothabottomcheck-19 0.2s ease 0s forwards;\n}\n.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,\n.checkbox-wrapper-19 .check-box.checked::before {\nheight: calc(var(--checkbox-height) * 1.2);\n-moz-animation: dothatopcheck-19 0.4s ease 0s forwards;\n-o-animation: dothatopcheck-19 0.4s ease 0s forwards;\n-webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;\nanimation: dothatopcheck-19 0.4s ease 0s forwards;\n}\n\n\n\n\n\n*/\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UIhelper.js":
/*!*************************!*\
  !*** ./src/UIhelper.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createIconButton: () => (/* binding */ createIconButton),
/* harmony export */   createInputElement: () => (/* binding */ createInputElement),
/* harmony export */   createValueInputElement: () => (/* binding */ createValueInputElement),
/* harmony export */   createValueTextarea: () => (/* binding */ createValueTextarea),
/* harmony export */   deleteStoredNotes: () => (/* binding */ deleteStoredNotes),
/* harmony export */   deleteStoredProjects: () => (/* binding */ deleteStoredProjects),
/* harmony export */   deleteStoredTodayTodos: () => (/* binding */ deleteStoredTodayTodos),
/* harmony export */   deleteStoredTodos: () => (/* binding */ deleteStoredTodos),
/* harmony export */   deleteStoredWeekTodos: () => (/* binding */ deleteStoredWeekTodos),
/* harmony export */   deleteTodoElementInToday: () => (/* binding */ deleteTodoElementInToday),
/* harmony export */   deleteTodoElementInWeek: () => (/* binding */ deleteTodoElementInWeek),
/* harmony export */   deleteTodoElements: () => (/* binding */ deleteTodoElements),
/* harmony export */   getCurrentProjectPageIndex: () => (/* binding */ getCurrentProjectPageIndex),
/* harmony export */   getSelectedPriority: () => (/* binding */ getSelectedPriority),
/* harmony export */   hideAllHomePages: () => (/* binding */ hideAllHomePages),
/* harmony export */   hideAllPages: () => (/* binding */ hideAllPages),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   updateExistingTodoBox: () => (/* binding */ updateExistingTodoBox)
/* harmony export */ });
function createInputElement(type, id, name, placeholder, classList) {
    const input = document.createElement('input'); 
    input.type = type; 
    input.id = id; 
    input.name = name; 
    input.classList.add(classList); 
    if (placeholder) { // Only set placeholder if a value is provided
        input.placeholder = placeholder;
    }
    
    return input; 
}

function createValueInputElement(type, id, name, value, classList) {
    const input = document.createElement('input'); 
    input.type = type; 
    input.id = id; 
    input.name = name; 
    input.classList.add(classList); 
    if (value) { // Only set placeholder if a value is provided
        input.value = value;
    }

    return input; 
}

function createValueTextarea(id, name, value, classList) {
    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.name = name;
    textarea.classList.add(classList);
    //textarea.wrap = "hard";

    // Function to adjust textarea height
    function adjustHeight() {
        // Ensure element is in the DOM and visible to calculate scrollHeight
        if (textarea.scrollHeight > 0) {
            //textarea.style.height = '1px'; // Reset height to recalculate
            textarea.style.height = textarea.scrollHeight + 'px'; // Adjust to content
        }
    }

    // Initial value set and adjust height
    if (value) {
        textarea.value = value;
    }

    // Adjust height after appending to DOM to ensure accurate scrollHeight calculation
    setTimeout(adjustHeight, 10);
    // Add event listener for input to dynamically adjust height
    textarea.addEventListener('input', adjustHeight);
    adjustHeight(); 

    return textarea;
}


function hideAllPages() {
    const pages = document.querySelectorAll('.page'); 
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function hideAllHomePages() {
    const pages = document.querySelectorAll('.main-pages'); 
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function createButton(type, text, classList, onClick, id) {
    const button = document.createElement(type); 
    button.textContent = text; 
    button.classList.add(classList); 
    button.addEventListener('click', onClick);
    button.id = id; 
    return button; 
}

function createIconButton(type, classList, onClick) {
    const button = document.createElement(type); 
    button.classList.add(classList); 
    button.addEventListener('click', onClick);
    return button; 
}

function getCurrentProjectPageIndex() {
    // Select all individual project pages
    const projectPages = document.querySelectorAll('[id^="individual-project-page"]');
    
    // Find the one that is currently visible (display !== 'none')
    const visiblePage = Array.from(projectPages).find(page => page.style.display === 'block');
    
    if (visiblePage) {
        // Extract the index from the id using a regular expression
        const match = visiblePage.id.match(/individual-project-page(\d+)/);
        if (match && match[1]) {
            return parseInt(match[1], 10); // Convert the extracted index to a number
        }
    }
    
    return null; // Return null if no page is visible or the index cannot be found
}

function deleteTodoElements(index) {
    // Select all elements with the class 'todo-item' that have the matching 'data-index'
    const todoElements = document.querySelectorAll(`.todo-element[data-index="${index}"]`);

    // Loop through the NodeList and remove each element from its parent
    todoElements.forEach(todoElement => {
        const parent = todoElement.parentElement;
        if (parent) {
            parent.removeChild(todoElement);
            parent.style.display = 'none'; 
        }
    });

}

function deleteStoredTodos(index) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function deleteStoredTodayTodos(index) {
    const todaytodos = JSON.parse(localStorage.getItem('todayTodos') || '[]');
    const updatedTodayTodos = todaytodos.filter((todo, todoIndex) => todoIndex !== index);
    localStorage.setItem('todayTodos', JSON.stringify(updatedTodayTodos)); 
}

function deleteStoredWeekTodos(index) {
    const weekTodos = JSON.parse(localStorage.getItem('weekTodos') || '[]');
    const updatedWeekTodos = weekTodos.filter((todo, todoIndex) => todoIndex !== index);
    localStorage.setItem('weekTodos', JSON.stringify(updatedWeekTodos));
}

function deleteStoredNotes(index) {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const updatedNotes = notes.filter((note, noteIndex) => noteIndex !== index);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
}

function deleteStoredProjects(index) {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const updatedProjects = projects.filter((project, projectIndex) => projectIndex !== index);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
}


function getSelectedPriority() {
    const priority = document.querySelector('.selected'); 
    return priority.textContent; 
}

function deleteTodoElementInWeek(index) {
    const todayContent = document.querySelector('#thisweekpage-container');
    const grandchild = todayContent.querySelector(`.thisweekpage-content .thisweekpage-todo-content .todo-element[data-index="${index}"]`);

    if (grandchild) {
        const todoBox = grandchild.parentElement;
        todoBox.style.display = 'none'; 
        grandchild.innerHTML = '';
        // If you want to remove the element completely, use:
        grandchild.remove();
    }

}

function deleteTodoElementInToday(index) {
    const todayContent = document.querySelector('#todaypage-container');
    const grandchild = todayContent.querySelector(`.todaypage-content .todaypage-todo-content .todo-element[data-index="${index}"]`);

    if (grandchild) {
        const todoBox = grandchild.parentElement;
        todoBox.style.display = 'none'; 
        grandchild.innerHTML = '';
        // If you want to remove the element completely, use:
        grandchild.remove();
    } 
}

function updateExistingTodoBox(todoBox, title, date, details, priority) {
    const titleElement = todoBox.querySelector('.todo-title');
    const dateElement = todoBox.querySelector('.date-text');
    const detailsElement = todoBox.querySelector('.todo-details'); 
    const priorityElement = todoBox.querySelector('.todo-priority'); 
    
    if (titleElement) titleElement.textContent = title;
    if (dateElement) dateElement.textContent = date;
    if (detailsElement) detailsElement.textContent = details;
    if (priorityElement) priorityElement.textContent = priority;
}

function isVisible(elem) {
    if (!elem) return false; // Element does not exist
    const style = window.getComputedStyle(elem);
    return style.display !== 'none';
}

 

/***/ }),

/***/ "./src/addTaskModal.js":
/*!*****************************!*\
  !*** ./src/addTaskModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeAddTaskModal: () => (/* binding */ closeAddTaskModal),
/* harmony export */   showAddTaskModal: () => (/* binding */ showAddTaskModal)
/* harmony export */ });
/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoUI */ "./src/todoUI.js");
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");




function renderAddTaskPage() {
    const addTaskPage = document.createElement('form'); 
    addTaskPage.id = 'add-task-page'; 
    addTaskPage.classList.add('page'); 

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');


    const closebuttonContainer = document.createElement('div'); 
    closebuttonContainer.classList.add('close-button-container');

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('edit-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeAddTaskModal(); 
    });

    closebuttonContainer.appendChild(closeButton);

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-task-inputs'); 

    upperInputs.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createInputElement)('text', 'task-title-input', 'title', 'Title: Pay Bills', 'input'),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createInputElement)('text', 'task-details-input', 'details', 'Details: eg internet, phone, rent.', 'input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-task-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createInputElement)('date', 'task-date', 'date')
    ); 

    const priorityBox = document.createElement('div'); 
    priorityBox.classList.add('priority-box');

    const prioritySelector = (0,_todoUI__WEBPACK_IMPORTED_MODULE_0__.createPrioritySelector)(); 
    const priorityLabel = document.createElement('label'); 
    priorityLabel.textContent = 'Priority: '; 

    priorityBox.append(
        priorityLabel,
        prioritySelector
    )

    const dateAndPriorityBox = document.createElement('div'); 
    dateAndPriorityBox.classList.add('date-and-priority'); 

    dateAndPriorityBox.append(
        dateInput,
        priorityBox
    );

    lowerInputs.append(
        dateAndPriorityBox,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'ADD TASK', 'add-task-button', () => {
            (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.addNewTodo)();
            closeAddTaskModal(); 
        })
    );

    taskContent.append(upperInputs, lowerInputs); 
    addTaskPage.appendChild(taskContent);

    const modalContent = document.querySelector('.task-modal-container'); 
    modalContent.append(closebuttonContainer, addTaskPage); 

    addTaskPage.style.display = 'flex'; 
}

function renderAddTaskModal() {
    const addTaskModal = document.createElement('div'); 
    addTaskModal.classList.add('add-task-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('task-modal-container');


    addTaskModal.appendChild(modalContainer);

    document.body.appendChild(addTaskModal); 

    return addTaskModal; 
}

function closeAddTaskModal() {
    const addTaskModal = document.querySelector('.add-task-modal'); // Adjust selector as needed
    addTaskModal.style.display = 'none';

    const modalContent = document.querySelector('.task-modal-container');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openAddTaskModal() {
    const addTaskModal = renderAddTaskModal(); 
    addTaskModal.style.display = 'block'; 
}

function clearAddTaskModalContent() {
    // Reset text inputs
    const taskContent = document.querySelector('.upper-task-inputs');
    const taskInputs = taskContent ? taskContent.querySelectorAll('input') : []; 

    taskInputs.forEach(input => {
        input.value = ''; 
    }); 

    // Reset date input
    const dateInput = document.getElementById('date'); 
    dateInput.value = ''; 

    // Reset priority buttons
    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor;   // Reset to original background
    });
}

window.addEventListener('click', function(event) {
    const addTaskModal = document.querySelector('.add-task-modal');
    if (event.target === addTaskModal) {
        closeAddTaskModal(); 
        //clearAddTaskModalContent(); 
    }
});

function showAddTaskModal() {
    let addTaskModal = document.querySelector('.add-task-modal');
    if (!addTaskModal) {
        openAddTaskModal(); 
        renderAddTaskPage();
    } else {
        renderAddTaskPage();
        addTaskModal.style.display = 'block';
    }
}

 

/***/ }),

/***/ "./src/detailsModal.js":
/*!*****************************!*\
  !*** ./src/detailsModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDetailsModal: () => (/* binding */ showDetailsModal)
/* harmony export */ });
function renderDetailsModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('details-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('details-modal-container');

    const todoDetails = document.createElement('div'); 
    todoDetails.classList.add('todo-details');  

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('details-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeDetailsModal(); 
    });

    modalContainer.append(todoDetails, closeButton);  
    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function renderTodoDetails(todo) {
    const content = document.querySelector('.todo-details');

    const detailsTitle = document.createElement('div');
    detailsTitle.classList.add('details-title');
    detailsTitle.textContent = `${todo.title}`;

    const detailsBox = document.createElement('div');
    detailsBox.classList.add('details-box');

    const leftDetails = document.createElement('div');
    leftDetails.classList.add('left-details');

    const rightDetails = document.createElement('div');
    rightDetails.classList.add('right-details');

    const project = document.createElement('div');
    project.textContent = 'Project:';
    const priority = document.createElement('div');
    priority.textContent = 'Priority:';
    const date = document.createElement('div');
    date.textContent = 'Due Date:';
    const details = document.createElement('div');
    details.textContent = 'Details:';

    const todoProject = document.createElement('div');
    todoProject.textContent = `${todo.project}`;
    const todoPriority = document.createElement('div');
    todoPriority.textContent = `${todo.priority}`;
    const todoDate = document.createElement('div');
    todoDate.textContent = `${todo.formatDate}`;
    const todoDetails = document.createElement('div');
    todoDetails.textContent = `${todo.details}`;

    leftDetails.append(project, priority, date, details);
    rightDetails.append(todoProject, todoPriority, todoDate, todoDetails); 
     
    detailsBox.append(leftDetails, rightDetails); 

    content.append(detailsTitle, detailsBox); 
}

function closeDetailsModal() {
    const modal = document.querySelector('.details-modal'); 
    modal.style.display = 'none';

    const modalContent = document.querySelector('.todo-details');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openDetailsModal() {
    const modal = renderDetailsModal(); 
    modal.style.display = 'flex'; 
    return modal; 
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.details-modal');
    if (event.target === modal) {
        closeDetailsModal(); 
    }
});

function showDetailsModal(todo) {
    let modal = document.querySelector('.details-modal');
    if (!modal) {
        openDetailsModal(); 
    } else {
        modal.style.display = 'flex';
    }

    renderTodoDetails(todo);
}

 


/***/ }),

/***/ "./src/editModal.js":
/*!**************************!*\
  !*** ./src/editModal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showEditModal: () => (/* binding */ showEditModal)
/* harmony export */ });
/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoUI */ "./src/todoUI.js");
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");




function renderEditModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('edit-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('edit-modal-container');

    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function renderEditPage(todo, index) {
    const editForm = document.createElement('form'); 
    editForm.id = 'edit-page'; 
    editForm.classList.add('edit-page'); 

    const editContent = document.createElement('div');
    editContent.id = 'edit-c' + index; 
    editContent.classList.add('edit-content');

    const closebuttonContainer = document.createElement('div'); 
    closebuttonContainer.classList.add('close-button-container');

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('edit-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeEditModal(); 
    });

    closebuttonContainer.appendChild(closeButton);

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-todo-inputs'); 

    upperInputs.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createValueInputElement)('text', 'edit-title-input', 'title', `${todo.title}`, 'input'),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createValueInputElement)('text', 'edit-details-input', 'details', `${todo.details}`, 'input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-todo-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createValueInputElement)('date', 'edit-date', 'edit-date', `${todo.date}`)
    ); 


    const priorityBox = document.createElement('div'); 
    priorityBox.classList.add('priority-box');

    const prioritySelector = (0,_todoUI__WEBPACK_IMPORTED_MODULE_0__.createFilledPriroitySelector)(todo.priority); 
    const priorityLabel = document.createElement('label'); 
    priorityLabel.textContent = 'Priority: '; 


    priorityBox.append(
        priorityLabel,
        prioritySelector
    )

    const dateAndPriorityBox = document.createElement('div'); 
    dateAndPriorityBox.classList.add('date-and-priority'); 

    dateAndPriorityBox.append(
        dateInput,
        priorityBox
    );

    lowerInputs.append(
        dateAndPriorityBox,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'CONFIRM EDIT', 'confirm-edit-button', () => {
            (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.editTodoAndDetails)(index); 
            closeEditModal(); 
        }) 
    );
    
    editContent.append(upperInputs, lowerInputs); 
    editForm.appendChild(editContent); 

    const modalContent = document.querySelector('.edit-modal-container'); 
    modalContent.append(closebuttonContainer, editForm); 

    editContent.style.display = 'flex'; 
}


function closeEditModal() {
    const modal = document.querySelector('.edit-modal'); 
    modal.style.display = 'none';

    const modalContent = document.querySelector('.edit-modal-container');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openEditModal() {
    const modal = renderEditModal(); 
    modal.style.display = 'flex'; 
    return modal; 
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.edit-modal');
    if (event.target === modal) {
        closeEditModal(); 
    }
});

function showEditModal(todo, index) {
    let modal = document.querySelector('.edit-modal');
    if (!modal) {
        openEditModal(); 
    } else {
        modal.style.display = 'flex';
    }

    renderEditPage(todo, index);
}

 


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTodo: () => (/* binding */ addNewTodo),
/* harmony export */   editTodoAndDetails: () => (/* binding */ editTodoAndDetails),
/* harmony export */   showHomePage: () => (/* binding */ showHomePage)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLogic */ "./src/todoLogic.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisISOWeek.mjs");
/* harmony import */ var _projectpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectpage */ "./src/projectpage.js");
/* harmony import */ var _detailsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailsModal */ "./src/detailsModal.js");
/* harmony import */ var _editModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editModal */ "./src/editModal.js");








const todoList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.TodoList(); 
const todayTodoList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.TodoList();
const weekTodoList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.TodoList(); 
const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
const myTodoList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.TodoList(storedTodos);
const storedTodayTodos = JSON.parse(localStorage.getItem("todayTodos") || "[]"); 
const todayList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.TodoList(storedTodayTodos); 
const storedWeekTodos = JSON.parse(localStorage.getItem("weekTodos") || "[]"); 
const weekList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.TodoList(storedWeekTodos); 


function updateTodoBox() {
    const homepageContent = document.querySelector('.homepage-todo-content');
    
    if (homepageContent) {
        // Create a new todoBox and append it to the homepage
        const newTodoBox = renderTodoBox(todoList);
        homepageContent.prepend(newTodoBox);
    }
}

function updateTodoBoxInProject(index) {
    const projectContent = document.querySelector('#individual-project-page' + index);
    const grandchild = projectContent.querySelector('.i-project-content .i-project-container .project-todo-content');

    if (projectContent) {
        // Create a new todoBox and append it to the projectpage
        const newTodoBox = renderTodoBox(todoList);
        grandchild.prepend(newTodoBox);
    }
}

function updateTodoBoxInToday() {
    const todayContent = document.querySelector('#todaypage-container');
    const grandchild = todayContent.querySelector('.todaypage-content .todaypage-todo-content');

    if (todayContent) {
        // Create a new todoBox and append it to the projectpage
        const newTodoBox = renderTodoBox(todoList);
        grandchild.prepend(newTodoBox);
    }
}


function updateTodoBoxInWeek() {
    const thisweekContent = document.querySelector('#thisweekpage-container');
    const grandchild = thisweekContent.querySelector('.thisweekpage-content .thisweekpage-todo-content');

    if (thisweekContent) {
        // Create a new todoBox and append it to the projectpage
        const newTodoBox = renderTodoBox(todoList);
        grandchild.prepend(newTodoBox);
    }
}


function renderTodoBox(todoList) {
    const todoBox = document.createElement('div');
    todoBox.classList.add('todo-box'); 

    let homepage = document.querySelector('#homepage-container');

    // If homepage is in view, append only the latest todo
    if (homepage && todoList.todos.length > 0) { 
        const index = todoList.todos.length - 1;
        const latestTodo = todoList.todos[todoList.todos.length - 1];
        const todoElement = createTodoElement(latestTodo, index);
        todoBox.appendChild(todoElement);
    } else {
        // If homepage is not in view, append the entire list
        todoList.todos.forEach((todo, index) => {
            const todoElement = createTodoElement(todo, index);
            todoBox.appendChild(todoElement);
        });
    }
    
    return todoBox; 
}

function renderTodoBoxesInHome(todoList) {
    const todoboxes = []; 
    const homepage = document.querySelector('.homepage-todo-content')
    todoList.todos.forEach((todo, index) => {
        const todoBox = document.createElement('div');
        todoBox.classList.add('todo-box');  
        const todoElement = createTodoElement(todo, index);
        todoBox.appendChild(todoElement);
        todoboxes.push(todoBox);
    });

    todoboxes.forEach(todobox => homepage.prepend(todobox)); 
}

function renderStoredTodoBoxesInHome(todoList) {
    const todoboxes = []; 
    const homepage = document.querySelector('.homepage-todo-content')
    todoList.todos.forEach((todo, index) => {
        const todoBox = document.createElement('div');
        todoBox.classList.add('todo-box');  
        const todoElement = createTodoElement(todo, index);
        todoBox.appendChild(todoElement);
        todoboxes.push(todoBox);
    });

    todoboxes.forEach(todobox => homepage.prepend(todobox)); 
}

function renderStoredTodoBoxesInToday(todoList) {
    const todoboxes = []; 
    const topdayPage = document.querySelector('.todaypage-todo-content')
    todoList.todos.forEach((todo, index) => {
        const todoBox = document.createElement('div');
        todoBox.classList.add('todo-box');  
        const todoElement = createTodoElement(todo, index);
        todoBox.appendChild(todoElement);
        todoboxes.push(todoBox);
    });

    todoboxes.forEach(todobox => topdayPage.prepend(todobox)); 
}

function renderStoredTodoBoxesInWeek(todoList) {
    const todoboxes = []; 
    const weekPage = document.querySelector('.thisweekpage-todo-content')
    todoList.todos.forEach((todo, index) => {
        const todoBox = document.createElement('div');
        todoBox.classList.add('todo-box');  
        const todoElement = createTodoElement(todo, index);
        todoBox.appendChild(todoElement);
        todoboxes.push(todoBox);
    });

    todoboxes.forEach(todobox => weekPage.prepend(todobox)); 
}




function createTodoElement(todo, index) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-element');
    todoElement.setAttribute('data-index', index); 

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');
    
    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('data-checkbox-index', index);
    const checkboxID = 'cbtest-19';
    checkbox.id = checkboxID; 
    checkbox.classList.add('todo-checkbox'); // Added 'checkbox' for selection
    
    // Create the label
    const label = document.createElement('label');
    label.classList.add('check-box');
    label.setAttribute('data-checkbox-index', index);
    
    
    // Append the checkbox and label to the wrapper
    checkboxWrapper.append(checkbox, label);
    
    const dateText = document.createElement('div'); 
    dateText.classList.add('date-text'); 
    dateText.append(todo.formatDate); 

    const detailsButton = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DETAILS', 'details-button', () => {
        (0,_detailsModal__WEBPACK_IMPORTED_MODULE_4__.showDetailsModal)(todoList.todos[index]);
    }); 

    const editButton = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createIconButton)('button', 'edit-button', () => {
        (0,_editModal__WEBPACK_IMPORTED_MODULE_5__.showEditModal)(todoList.todos[index], index);
    }); 

    const deleteButton = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createIconButton)('button', 'delete-button', () => {
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteTodoElements)(index);
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteStoredTodos)(index); 
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteStoredTodayTodos)(index); 
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteStoredWeekTodos)(index); 
    }); 

    const leftItems = document.createElement('div'); 
    leftItems.classList.add('left-bar'); 
    const rightItems = document.createElement('div'); 
    rightItems.classList.add('right-bar'); 
    const rightButtons = document.createElement('div')
    rightButtons.classList.add('right-buttons'); 

    const todoTitle = document.createElement('div');
    todoTitle.textContent = todo.title; 
    todoTitle.classList.add('todo-title');

    leftItems.append(checkboxWrapper, todoTitle); 
    rightButtons.append(editButton, deleteButton);
    rightItems.append(detailsButton, dateText, rightButtons); 
    todoElement.append(leftItems, rightItems); 

    return todoElement;
}


function editTodoAndDetails(index) {
    event.preventDefault(); 
    // Retrieve the edit form content first to get the new values
    const editContent = document.getElementById('edit-c' + index);
    const newTitle = editContent.querySelector('#edit-title-input').value; 
    let newDate = editContent.querySelector('#edit-date').value.trim(); 
    const formattedNewDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(newDate), "LLL do");
    const newDetails = editContent.querySelector('#edit-details-input').value; 
    const priority = editContent.querySelector('.selected'); 
    const newPriority = priority.textContent; 

    // Update the todo item in TodoList
    todoList.todos[index]
        .changeTitle(newTitle)
        .changeDate(newDate)
        .changeDetails(newDetails)
        .changePriority(newPriority);
        

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isToday)(newDate)) {
        const existingTodoBox = document.querySelector(`#todaypage-container .todo-element[data-index="${index}"]`);
        if (existingTodoBox) {
            // Update the existing todo box
            (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.updateExistingTodoBox)(existingTodoBox, newTitle, formattedNewDate, newDetails, newPriority);

        } else {
            // Add a new todo box to 'todaypage'
            updateTodoBoxInToday();
        }
    } else {
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteTodoElementInToday)(index);
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.isThisISOWeek)(newDate)) {
        const existingTodoBox = document.querySelector(`#thisweekpage-container .todo-element[data-index="${index}"]`);
        if (existingTodoBox) {
            // Update the existing todo box
            (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.updateExistingTodoBox)(existingTodoBox, newTitle, formattedNewDate, newDetails, newPriority);
        } else {
            // Add a new todo box to 'todaypage'
            updateTodoBoxInWeek();
        }
    } else {
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteTodoElementInWeek)(index);
    } 

    // Update the DOM elements for the todo item display
    const todoBoxes = document.querySelectorAll(`[data-index="${index}"]`);

    todoBoxes.forEach(todoBox => {
        const titleElement = todoBox.querySelector('.todo-title');
        const dateElement = todoBox.querySelector('.date-text');
    
        if (titleElement) {
            titleElement.textContent = newTitle;
        }
    
        if (dateElement) {
            const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(newDate), "LLL do");
            dateElement.textContent = formattedDate;
        }

    });
}

function renderHomePage() {
    const homepage = document.createElement('div'); 
    homepage.classList.add('main-pages'); 
    homepage.id = 'homepage-container'; 

    const homepageContent = document.createElement('div'); 
    homepageContent.classList.add('homepage-content'); 

    const homepageTodos = document.createElement('div'); 
    homepageTodos.classList.add('homepage-todo-content');

    const homepageTitle = document.createElement('div'); 
    homepageTitle.classList.add('page-title'); 
    homepageTitle.textContent = '🏠 All Tasks';

    homepageContent.append(homepageTitle, homepageTodos); 
    
    homepage.appendChild(homepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(homepage); 
    
    homepage.style.display = 'block'; 
}


function addNewTodo() {
    event.preventDefault();

    const addTaskModal = document.querySelector('.add-task-modal'); 
    const modal = document.querySelector('.modal'); 

    // Get values from input fields
    let title, details, date, project;
    if ((0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.isVisible)(addTaskModal)) {
        date = document.getElementById('task-date').value; 
        title = document.getElementById('task-title-input').value; 
        console.log(title); 
        details = document.getElementById('task-details-input').value;
        const projectPageIndex = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.getCurrentProjectPageIndex)(); 
        project = (0,_projectpage__WEBPACK_IMPORTED_MODULE_3__.getProjectList)().getTitleOfIndex(projectPageIndex);
        console.log(project);
    } else if (_UIhelper__WEBPACK_IMPORTED_MODULE_0__.isVisible){
        title = document.getElementById('title-input').value;
        console.log(title); 
        details = document.getElementById('details-input').value;
        date = document.getElementById('date').value;
        project = 'Home'; 
    }

    const priority = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.getSelectedPriority)();
    
    const newTodo = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Todo(title, details, date, priority, project);

    if (!todoList.doesTitleExist(newTodo)) {
        todoList.addTodo(newTodo);
        localStorage.setItem('todos', JSON.stringify(todoList.todos)); 
    } else {
        // Handle the case where the title already exists
        alert (`A todo with the title "${newTodo.title}" already exists.`);
        return;
    }

    if ((0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.isVisible)(addTaskModal)) {
        document.getElementById('task-details-input').value = '';
        document.getElementById('task-title-input').value = '';
        document.getElementById('task-date').value = '';
    } else if((0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.isVisible)(modal)) {
        document.getElementById('title-input').value = '';
        document.getElementById('details-input').value = '';
        document.getElementById('date').value = '';
    }

    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor; 
    });

    if (addTaskModal) {
        let projectList = (0,_projectpage__WEBPACK_IMPORTED_MODULE_3__.getProjectList)(); 
        console.log(_projectpage__WEBPACK_IMPORTED_MODULE_3__.getProjectList); 
        let index = projectList.getIndexOfTitle(project); 

        updateTodoBoxInProject(index); 
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isToday)(newTodo.date)) {
        updateTodoBoxInToday();
        todayTodoList.addTodo(newTodo);
        localStorage.setItem('todayTodos', JSON.stringify(todayTodoList.todos));
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.isThisISOWeek)(newTodo.date)) {
        updateTodoBoxInWeek();
        weekTodoList.addTodo(newTodo); 
        localStorage.setItem('weekTodos', JSON.stringify(weekTodoList.todos)); 
    } 
    
    
    // Update the homepage to display the new todo
    updateTodoBox(); 
    //close modal after adding
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(); 
}

document.body.addEventListener('click', function(event) {
    if (event.target.matches('.todo-checkbox')) {
        const index = event.target.getAttribute('data-checkbox-index');
        // Toggle completion state for todo items with the same index
        document.querySelectorAll(`.todo-element[data-index="${index}"]`).forEach(todoElement => {
            const todoTitle = todoElement.querySelector('.todo-title');
            if (todoTitle) {
                todoTitle.classList.toggle('todo-title-completed');
            }
            todoElement.classList.toggle('todo-element-completed');
        });
    }
});

function showHomePage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllHomePages)(); 
    let homepage = document.querySelector('#homepage-container');
    if (!homepage) {
        renderHomePage(); 
    } else {
        homepage.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
     // Initialize with stored todos
    storedTodos.forEach(todo => todoList.addTodo(new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Todo(todo.title, todo.details, todo.date, todo.priority, todo.project)));

    storedTodayTodos.forEach(todo => todayTodoList.addTodo(new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Todo(todo.title, todo.details, todo.date, todo.priority, todo.project)));

    storedWeekTodos.forEach(todo => weekTodoList.addTodo(new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Todo(todo.title, todo.details, todo.date, todo.priority, todo.project)));

    renderStoredTodoBoxesInHome(myTodoList);
    renderStoredTodoBoxesInToday(todayList); 
    renderStoredTodoBoxesInWeek(weekList); 

    
});

 

/***/ }),

/***/ "./src/individualProjectPage.js":
/*!**************************************!*\
  !*** ./src/individualProjectPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showIdividualProjectPage: () => (/* binding */ showIdividualProjectPage)
/* harmony export */ });
/* harmony import */ var _addTaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskModal */ "./src/addTaskModal.js");
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");




function renderProject(project, index) {
    const individualProjectPage = document.createElement('div'); 
    individualProjectPage.classList.add('main-pages');
    individualProjectPage.id = 'individual-project-page' + index; 

    const content = document.createElement('div'); 
    content.classList.add('i-project-content');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('i-project-container');

    const todoContent = document.createElement('div'); 
    todoContent.classList.add('project-todo-content')
    
    projectContainer.append(todoContent, renderAddTodo()); 

    const titleText = document.createElement('div')
    titleText.classList.add('i-project-title'); 
    titleText.textContent = `Project:`; 

    const titleName = document.createElement('div'); 
    titleName.classList.add('project-title-name'); 
    titleName.textContent = project.title; 
    
    const titleContent = document.createElement('div'); 
    titleContent.classList.add('title-content');

    titleContent.append(titleText, titleName);

    content.append(titleContent, projectContainer); 
    individualProjectPage.appendChild(content);

    const mainProjectPage = document.querySelector('#projectpage-container'); 
    mainProjectPage.style.display = 'none';

    const body = document.querySelector('.body'); 
    body.appendChild(individualProjectPage); 

    individualProjectPage.style.display = 'block'; 
}

function renderAddTodo() {
    const addTodoBox = document.createElement('div'); 
    addTodoBox.classList.add('add-todo-box');
     
    const content = document.createElement('div');
    content.classList.add('add-todo-content');

    const plusSymbol = document.createElement('div'); 
    plusSymbol.classList.add('plus-symbol');
    plusSymbol.textContent = '+'; 

    const addTask = document.createElement('div'); 
    addTask.classList.add('add-task');
    addTask.textContent = 'Add Task';    

    content.append(plusSymbol, addTask);
    addTodoBox.appendChild(content);

    addTodoBox.addEventListener('click', () => {
        (0,_addTaskModal__WEBPACK_IMPORTED_MODULE_0__.showAddTaskModal)(); 
    });

    return addTodoBox;
}

function showIdividualProjectPage(project, index) {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_1__.hideAllHomePages)(); 
    let homepage = document.querySelector('#individual-project-page' + index);
    if (!homepage) {
        renderProject(project, index); 
    } else {
        homepage.style.display = 'block';
    }
}

 


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoUI */ "./src/todoUI.js");
/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectUI */ "./src/projectUI.js");
/* harmony import */ var _noteUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noteUI */ "./src/noteUI.js");
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");





function createModalHeader(modal) {
    const modalHeader = document.createElement('div'); 
    modalHeader.classList.add('modal-header'); 
    modalHeader.textContent = 'Create a new...'; 

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('close'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; 
        clearModalContent();
    });

    modalHeader.appendChild(closeButton); 

    return modalHeader; 
}

function createModalSidebar() {
    const modalSidebar = document.createElement('div'); 
    modalSidebar.classList.add('modal-sidebar'); 

    const sidebarOptions = document.createElement('div'); 
    sidebarOptions.classList.add('modal-sidebar-options');
    sidebarOptions.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', 'To Do', 'modal-button', () => (0,_todoUI__WEBPACK_IMPORTED_MODULE_0__.showToDoPage)()),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', 'Project',  'modal-button', () => (0,_projectUI__WEBPACK_IMPORTED_MODULE_1__["default"])()),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', 'Note',  'modal-button', () => (0,_noteUI__WEBPACK_IMPORTED_MODULE_2__.showNotePage)())
    ); 

    modalSidebar.appendChild(sidebarOptions); 

    return modalSidebar; 
}

function renderModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('modal-container');

    const modalHeader = createModalHeader(modal);
    const modalSideBar = createModalSidebar(); 

    const modalContent = document.createElement('div'); 
    modalContent.classList.add('modal-content'); 

    const modalText = document.createElement('p'); 
    modalText.classList.add('modal-text'); 

    modalContent.append(modalSideBar, modalText)

    modalContainer.append(modalHeader, modalContent);  
    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function closeModal() {
    const modal = document.querySelector('.modal');
    const projectModal = document.querySelector('.add-task-modal');
    
    if ((0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.isVisible)(modal)) {
        modal.style.display = 'none';
    } else if ((0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.isVisible)(projectModal)) {
        projectModal.style.display = 'none';
    }
    
}

function openModal() {
    const modal = renderModal(); 
    modal.style.display = 'block'; 
}

function clearModalContent() {
    //reset text inputs
    const projectContent = document.querySelector('.project-page');
    const todoContent = document.querySelector('.upper-todo-inputs');
    const noteContent = document.querySelector('.note-upper'); 
    
    const projectInputs = projectContent ? projectContent.querySelectorAll('input') : []; 
    const todoInputs = todoContent ? todoContent.querySelectorAll('input') : []; 
    const noteInputs = noteContent ? noteContent.querySelectorAll('input') : []; 

    const allInputs = Array.from(projectInputs).concat(Array.from(todoInputs), Array.from(noteInputs));

    allInputs.forEach(input => {
        input.value = ''; 
    }); 

    //reset date input
    const dateInput = document.getElementById('date'); 
    dateInput.value = ''; 

    //reset priority buttons
    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor;   // Reset to original background
    });
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        closeModal(); 
        clearModalContent(); 
    }
});

function showModal() {
    let modal = document.querySelector('.modal');
    if (!modal) {
        openModal(); 
        (0,_todoUI__WEBPACK_IMPORTED_MODULE_0__.showToDoPage)();
    } else {
        (0,_todoUI__WEBPACK_IMPORTED_MODULE_0__.showToDoPage)();
        modal.style.display = 'block';
    }
}

 

/***/ }),

/***/ "./src/noteUI.js":
/*!***********************!*\
  !*** ./src/noteUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderNotePage: () => (/* binding */ renderNotePage),
/* harmony export */   showNotePage: () => (/* binding */ showNotePage)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _notepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notepage */ "./src/notepage.js");



function renderNotePage() {
    const notePage = document.createElement('div'); 
    notePage.classList.add('page'); 
    notePage.id = 'note-container'; 

    const noteContent = document.createElement('form'); 
    noteContent.classList.add('note-page'); 

    const upperContent = document.createElement('div');
    upperContent.classList.add('note-upper');

    upperContent.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createInputElement)('text', 'modal-note-title', 'note-title', 'Title: Study session monday', 'input'),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createInputElement)('text', 'modal-note-details', 'note-details', 'Details: Study session details...', 'input')
    );

    noteContent.append(
        upperContent,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'CREATE NOTE', 'create-note-btn', () => {
            (0,_notepage__WEBPACK_IMPORTED_MODULE_1__.addNewNote)(); 
        })
    ); 

    notePage.appendChild(noteContent);     

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(notePage); 

    notePage.style.display = 'block'; 
}




function showNotePage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllPages)(); 
    let notePage = document.getElementById('note-container');
    if (!notePage) {
        renderNotePage(); 
    } else {
        notePage.style.display = 'block';
    }
}



/***/ }),

/***/ "./src/notepage.js":
/*!*************************!*\
  !*** ./src/notepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewNote: () => (/* binding */ addNewNote),
/* harmony export */   showNotePage: () => (/* binding */ showNotePage),
/* harmony export */   updateNoteBox: () => (/* binding */ updateNoteBox)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLogic */ "./src/todoLogic.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");





const notesList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.NotesList(); 

function renderNotePage() {
    const notepage = document.createElement('div'); 
    notepage.classList.add('main-pages'); 
    notepage.id = 'notepage-container'; 

    const notepageContent = document.createElement('div'); 
    notepageContent.classList.add('notepage-content'); 

    const notepageTitle = document.createElement('div'); 
    notepageTitle.classList.add('note-page-title'); 
    notepageTitle.textContent = '📖 Notes';

    const notesContainer = document.createElement('div'); 
    notesContainer.classList.add('notes-container'); 

    notepageContent.append(notepageTitle, notesContainer); 
    
    notepage.appendChild(notepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(notepage); 
    
    notepage.style.display = 'none'; 
}

function addNewNote() {
    event.preventDefault();

    const title = document.getElementById('modal-note-title').value;
    const details = document.getElementById('modal-note-details').value;

    const newNote = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Note(title, details); 
    notesList.addNote(newNote); 
    localStorage.setItem('notes', JSON.stringify(notesList.notes)); 

    document.getElementById('modal-note-title').value = '';
    document.getElementById('modal-note-details').value = ''; 

    updateNoteBox();
    
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(); 
}

function renderNoteBox() {
    const noteBox = document.createElement('div'); 
    noteBox.classList.add('note-box'); 

    let notesPage = document.querySelector('#notepage-container'); 

    // If homepage is in view, append only the latest note
    
    if (notesPage && notesList.notes.length > 0) { 
        const index = notesList.notes.length - 1;
        const latestNote = notesList.notes[notesList.notes.length - 1];
        const noteElement = createNoteElement(latestNote, index);
        noteBox.appendChild(noteElement);
    } else {
        // If homepage is not in view, append the entire list
        notesList.notes.forEach((note, index) => {
            const noteElement = createNoteElement(note, index);
            noteBox.appendChild(noteElement);
        });
    }
    
    return noteBox; 
}

function createNoteElement(note, index) {
    const noteElement = document.createElement('div'); 
    noteElement.classList.add('note-element'); 
    noteElement.id = 'note' + index; 

    const deletebuttonContainer = document.createElement('div'); 
    deletebuttonContainer.classList.add('note-delete-btn-container');

    const deleteButton = document.createElement('span'); 
    deleteButton.classList.add('note-delete-button'); 
    deleteButton.id = 'note-delete' + index; 
    deleteButton.innerHTML = '&times;';

    deleteButton.addEventListener('click', () => {
        deleteNoteBox('note' + index);
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteStoredNotes)(index);
    })

    deletebuttonContainer.appendChild(deleteButton);

    const noteTitle = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createValueTextarea)('note-title', 'note-title', `${note.title}`, 'note-titles');
    noteTitle.contentEditable = true; 

    const noteDetails = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createValueTextarea)('note-details', 'note-details', `${note.details}`, 'note-details');
    noteDetails.contentEditable = true; 

    noteElement.append(deletebuttonContainer, noteTitle, noteDetails); 

    return noteElement; 
}

function renderStoredNotes(notesList) {
    const noteBoxes = []; 
    const notePage = document.querySelector('.notes-container')
    notesList.notes.forEach((note, index) => {
        const notesBox = document.createElement('div');
        notesBox.classList.add('note-box');  
        const noteElement = createNoteElement(note, index);
        notesBox.appendChild(noteElement);
        noteBoxes.push(notesBox);
    });

    noteBoxes.forEach(notebox => notePage.prepend(notebox)); 
}

function deleteNoteBox(index) {
    const noteBox = document.getElementById(index);
    const parent = noteBox.parentElement;

    // Remove the parent element from its own parent
    if (parent && parent.parentElement) {
        parent.parentElement.removeChild(parent);
    }
}


function updateNoteBox() {
    const notepageContainer = document.querySelector('.notes-container');

    if (notepageContainer) {
        // Create a new noteBox and append it to the notepage
        const newNoteBox = renderNoteBox();
        notepageContainer.prepend(newNoteBox);
    }
}

function showNotePage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllHomePages)(); 
    let notepage = document.querySelector('#notepage-container');
    if (!notepage) {
        renderNotePage(); 
    } else {
        notepage.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {   
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]"); 
    const renderedNotesList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.NotesList(storedNotes); 
    storedNotes.forEach(note => notesList.addNote(new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Note(note.title, note.details)));

    // Assuming you have a container element where todoBox should be appended
    renderStoredNotes(renderedNotesList); 
});

 

/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _projectpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectpage */ "./src/projectpage.js");



function renderProjectPage() {
    const projectPage = document.createElement('div'); 
    projectPage.classList.add('page'); 
    projectPage.id = 'project-container'; 

    const projectContent = document.createElement('form'); 
    projectContent.classList.add('project-page'); 

    projectContent.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createInputElement)('text', 'project-title', 'project-title', 'Title: House Renovation', 'input'),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'CREATE PROJECT', 'create-project-btn', () => {
            (0,_projectpage__WEBPACK_IMPORTED_MODULE_1__.addNewProject)(); 
        })
    ); 

    projectPage.appendChild(projectContent);     

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(projectPage); 

    projectPage.style.display = 'block'; 
}


function showProjectPage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllPages)(); 
    let projectPage = document.getElementById('project-container');
    if (!projectPage) {
        renderProjectPage(); 
    } else {
        projectPage.style.display = 'block';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProjectPage); 

/***/ }),

/***/ "./src/projectpage.js":
/*!****************************!*\
  !*** ./src/projectpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   getProjectList: () => (/* binding */ getProjectList),
/* harmony export */   showProjectPage: () => (/* binding */ showProjectPage)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _todoLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLogic */ "./src/todoLogic.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _individualProjectPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./individualProjectPage */ "./src/individualProjectPage.js");





const projectList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.ProjectList(); 

function renderProjectPage() {
    const projectpage = document.createElement('div'); 
    projectpage.classList.add('main-pages'); 
    projectpage.id = 'projectpage-container';

    const projectpageContent = document.createElement('div'); 
    projectpageContent.classList.add('projectpage-content');

    const projectpageTitle = document.createElement('div'); 
    projectpageTitle.classList.add('projectpage-title'); 
    projectpageTitle.textContent = '📗 Projects';

    const projectsContainer = document.createElement('div'); 
    projectsContainer.classList.add('projects-container'); 

    projectpageContent.append(projectpageTitle, projectsContainer);

    projectpage.append(projectpageContent);

    const body = document.querySelector('.body'); 
    body.appendChild(projectpage);

    projectpage.style.display = 'none'; 
}

function renderStoredProjects(projectList) {
    const projectBoxes = []; 
    const projectPage = document.querySelector('.projects-container')
    projectList.projects.forEach((project, index) => {
        const projectBox = document.createElement('div');
        projectBox.classList.add('project-box');  
        const projectElement = createProjectElement(project, index);
        projectBox.appendChild(projectElement);
        projectBoxes.push(projectBox);
    });

    projectBoxes.forEach(projectbox => projectPage.prepend(projectbox)); 
}

function renderProjectBox() {
    const projectBox = document.createElement('div');
    projectBox.classList.add('project-box'); 

    let projectPage = document.querySelector('#projectpage-container');

    // If projectpage is in view, append only the latest project
    if (projectPage && projectList.projects.length > 0) { 
        const index = projectList.projects.length - 1;
        const latestProject = projectList.projects[projectList.projects.length - 1];
        const projectElement = createProjectElement(latestProject, index);
        projectBox.appendChild(projectElement);
    } else {
        // If projectpage is not in view, append the entire list
        projectList.projects.forEach((project, index) => {
            const projectElement = createProjectElement(project, index);
            projectBox.appendChild(projectElement);
        });
    }

    projectBox.appendChild(deleteContainer); 
    
    return projectBox; 
}


function createProjectElement(project, index) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-element');
    projectElement.id = 'project' + index; 

    const deleteContainer = document.createElement('div'); 
    deleteContainer.classList.add('project-delete-container'); 

    const deleteButton = document.createElement('button'); 
    deleteButton.classList.add('project-delete-btn'); 
    deleteButton.textContent = 'DELETE PROJECT'; 

    const projectTitle = document.createElement('div');
    projectTitle.textContent = project.title; 
    projectTitle.classList.add('project-title');

    deleteContainer.appendChild(deleteButton);
    projectElement.append(projectTitle, deleteContainer)

    projectTitle.addEventListener('click', () => {
        ;(0,_individualProjectPage__WEBPACK_IMPORTED_MODULE_3__.showIdividualProjectPage)(project, index); 
    })

    deleteButton.addEventListener('click', () => {
        deleteProjectBox(index); 
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.deleteStoredProjects)(index); 
    })

    return projectElement;
}

function deleteProjectBox(index) {
    const projectBox = document.getElementById('project' + index);
    const parent = projectBox.parentElement;

    // Remove the parent element from its own parent
    if (parent && parent.parentElement) {
        parent.parentElement.removeChild(parent);
    }

    projectList.deleteProject(index);
}


function addNewProject() {
    event.preventDefault();

    // Get value from input field
    const title = document.getElementById('project-title').value;

    const newProject = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Project(title);
    if (!projectList.doesTitleExist(newProject)) {
        projectList.addProject(newProject);
        localStorage.setItem('projects', JSON.stringify(projectList.projects)); 
    } else {
        // Handle the case where the title already exists
        alert (`A project with the title "${newProject.title}" already exists.`);
        return;
    }

    document.getElementById('project-title').value = '';

    // Update the homepage to display the new todo
    updateProjectBox(); 
    //close modal after adding
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(); 
}

function updateProjectBox() {
    const projectContent = document.querySelector('.projects-container');
    
    if (projectContent) {
        // Create a new todoBox and append it to the homepage
        const newProjectBox = renderProjectBox();
        projectContent.appendChild(newProjectBox);
    }

}

function showProjectPage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllHomePages)(); 
    let projectpage = document.querySelector('#projectpage-container');
    if (!projectpage) {
        renderProjectPage(); 
    } else {
        projectpage.style.display = 'block';
    }
}

function getProjectList() {
    return projectList; 
}

document.addEventListener('DOMContentLoaded', () => {   
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]"); 
    const renderdProjectList = new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.ProjectList(storedProjects); 
    storedProjects.forEach(project => projectList.addProject(new _todoLogic__WEBPACK_IMPORTED_MODULE_1__.Project(project.title)));

    // Assuming you have a container element where todoBox should be appended
    renderStoredProjects(renderdProjectList); 
});




/***/ }),

/***/ "./src/thisweekpage.js":
/*!*****************************!*\
  !*** ./src/thisweekpage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showThisWeekPage: () => (/* binding */ showThisWeekPage)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");


function renderThisWeekPage() {
    const thisWeekPage = document.createElement('div');
    thisWeekPage.classList.add('main-pages');
    thisWeekPage.id = 'thisweekpage-container'; // Changed from 'todaypage-container' to 'thisweekpage-container'

    const thisWeekPageContent = document.createElement('div');
    thisWeekPageContent.classList.add('thisweekpage-content'); // Changed from 'todaypage-content' to 'thisweekpage-content'

    const thisWeekPageTodos = document.createElement('div');
    thisWeekPageTodos.classList.add('thisweekpage-todo-content'); // Changed from 'todaypage-todo-content' to 'thisweekpage-todo-content'

    const thisWeekPageTitle = document.createElement('div');
    thisWeekPageTitle.classList.add('page-title');
    thisWeekPageTitle.textContent = '📅 This Week\'s Tasks'; // Updated text content to reflect "This Week's Tasks"

    thisWeekPageContent.append(thisWeekPageTitle, thisWeekPageTodos);

    thisWeekPage.appendChild(thisWeekPageContent);

    const body = document.querySelector('.body');
    body.appendChild(thisWeekPage);

    thisWeekPage.style.display = 'block'; // This remains unchanged
}

function showThisWeekPage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllHomePages)();
    let thisWeekPage = document.querySelector('#thisweekpage-container');
    if (!thisWeekPage) {
        renderThisWeekPage();
    } else {
        thisWeekPage.style.display = 'block';
    }
}



/***/ }),

/***/ "./src/todaypage.js":
/*!**************************!*\
  !*** ./src/todaypage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTodayPage: () => (/* binding */ showTodayPage)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");


function renderTodayPage() {
    const todayPage = document.createElement('div'); 
    todayPage.classList.add('main-pages'); 
    todayPage.id = 'todaypage-container'; // Changed from 'homepage-container' to 'todaypage-container'

    const todayPageContent = document.createElement('div'); 
    todayPageContent.classList.add('todaypage-content'); // Changed from 'homepage-content' to 'todaypage-content'

    const todayPageTodos = document.createElement('div'); 
    todayPageTodos.classList.add('todaypage-todo-content'); // Changed from 'homepage-todo-content' to 'todaypage-todo-content'

    const todayPageTitle = document.createElement('div'); 
    todayPageTitle.classList.add('page-title'); 
    todayPageTitle.textContent = '⭐ Today\'s Tasks'; // Changed text content to reflect "Today's Tasks"

    todayPageContent.append(todayPageTitle, todayPageTodos); 
    
    todayPage.appendChild(todayPageContent); 

    const body = document.querySelector('.body');
    body.appendChild(todayPage); 
    
    todayPage.style.display = 'block'; // This remains unchanged
}

function showTodayPage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllHomePages)(); 
    let todaypage = document.querySelector('#todaypage-container');
    if (!todaypage) {
        renderTodayPage(); 
    } else {
        todaypage.style.display = 'block';
    }
}




/***/ }),

/***/ "./src/todoLogic.js":
/*!**************************!*\
  !*** ./src/todoLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Note: () => (/* binding */ Note),
/* harmony export */   NotesList: () => (/* binding */ NotesList),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectList: () => (/* binding */ ProjectList),
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   TodoList: () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


class Todo {
    constructor(title, details, date, priority, project) {
        this.title = title; 
        this.details = details; 
        this.formatDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(date), "LLL do"); 
        this.date = date; 
        this.priority = this.capitalize(priority); 
        this.project = project; 
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    changeTitle(newTite) {
        this.title = newTite;
        return this;
    }

    changeDetails(newDetails) {
        this.details = newDetails;
        return this;
    }

    changeDate(newDate) {
        this.date = newDate;
        this.formatDate = newDate;
        return this;
    }

    changePriority(newPriority) {
        this.priority = this.capitalize(newPriority);
        return this;
    }
}

class TodoList {
    constructor(todos = []) {
        this.todos = todos; 
    }

    doesTitleExist(todo) {
        // Returns true if the title exists, false otherwise
        return this.todos.some(existingTodo => existingTodo.title === todo.title);
    }

    addTodo(todo) {
        const titleExists = this.todos.some(existingTodo => existingTodo.title === todo.title); 
        if (titleExists) {
            alert (`A todo with the title "${todo.title}" already exists.`); 
            return; 
        }

        this.todos.push(todo); 
        //this.saveToLocalStorage(); 
    }

    getTodoByTitle(title) {
        return this.todos.find(todo => todo.title === title); 
    }

    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

}

class Project {
    constructor(title) {
        this.title = title, 
        this.todos = []; 
    }

    addToDo(todo) {
        if (todo instanceof Todo) {
            this.todos.push(todo); 
        } else {
            alert ("Object must be of instance Todo"); 
            return; 
        }
    }

    getToDos() {
        return this.todos; 
    }
}

class ProjectList {
    constructor(projects = []) {
        this.projects = projects; 
    }

    doesTitleExist(project) {
        // Returns true if the title exists, false otherwise
        return this.projects.some(existingProject => existingProject.title === project.title);
    }

    addProject(project) {
        const titleExists = this.projects.some(exsistingProject => exsistingProject.title === project.title); 
        if (titleExists) {
            alert (`A project with the title "${project.title}" already exists`);
            return; 
        }

        this.projects.push(project); 
    }

    getProjectByTitle(projectTitle) {
        const project = this.projects.find(p => p.title === projectTitle);

        return project || null; 
    }

    getIndexOfTitle(projectTitle) {
        // Find the index of the project in the projects array that matches the projectTitle
        const index = this.projects.findIndex(p => p.title === projectTitle);
        // Return the index of found project or -1 if not found
        return index;
    }
    
    getTitleOfIndex(index) {
        // Check if the index is within the bounds of the projects array
        if (index >= 0 && index < this.projects.length) {
            // Return the title of the project at the given index
            return this.projects[index].title;
        } else {
            // Return null or some indication that the index is invalid
            return null;
        }
    }

    deleteProject(index) {
        // Check if the index is valid
        if (index >= 0 && index < this.projects.length) {
            // Remove the project at the specified index
            this.projects.splice(index, 1);
        } else {
            // Optionally handle the case where the index is invalid
            console.error("Invalid index for deletion.");
        }
    }
}

class Note {
    constructor(title, details) {
        this.title = title; 
        this.details = details; 
    }
}

class NotesList {
    constructor(notes = []) {
        this.notes = notes; 
    }

    addNote(note) {
        const titleExists = this.notes.some(exsistingNote => exsistingNote === note.title);
        if (titleExists) {
            alert (`A note with the title "${note.title}" already exists.`);
            return; 
        }

        this.notes.push(note); 
    }
}



 

/***/ }),

/***/ "./src/todoUI.js":
/*!***********************!*\
  !*** ./src/todoUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFilledPriroitySelector: () => (/* binding */ createFilledPriroitySelector),
/* harmony export */   createPrioritySelector: () => (/* binding */ createPrioritySelector),
/* harmony export */   showToDoPage: () => (/* binding */ showToDoPage)
/* harmony export */ });
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");



function createPrioritySelector() {
    const prioritySelector = document.createElement('div'); 
    prioritySelector.id = 'priority-selector'; 

    const priorities = [
        { name: 'LOW', color: 'green' },
        { name: 'MEDIUM', color: 'orange'},
        { name: 'HIGH', color: 'red' }
    ]; 

    priorities.forEach((priority) => {
        const button = createPriorityButton(priority); 
        prioritySelector.appendChild(button);
    });

    return prioritySelector; 
}

function createFilledPriroitySelector(selectedPriority) {
    const prioritySelector = document.createElement('div'); 
    prioritySelector.id = 'priority-selector';

    const priorities = [
        { name: 'LOW', color: 'green' },
        { name: 'MEDIUM', color: 'orange'},
        { name: 'HIGH', color: 'red' }
    ]; 

    priorities.forEach((priority) => {
        const button = createPriorityButton(priority);
        if (priority.name.toLowerCase() === selectedPriority.toLowerCase()) {
            button.classList.add('selected');
            button.style.backgroundColor = priority.color;
            button.style.color = 'white';
        }
        prioritySelector.appendChild(button);
    });

    return prioritySelector; 
}


function createPriorityButton(priority) {
    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.classList.add('priority-button');
    button.style.border = `1px solid ${priority.color}`;
    button.style.color = priority.color;
    button.textContent = priority.name; 
    button.id = priority.name; 
    button.dataset.priority = priority.name.toLowerCase(); 

    button.addEventListener('click', () => {
        // Remove 'selected' class and reset style for all buttons
        document.querySelectorAll('.priority-button').forEach(btn => {
            btn.classList.remove('selected');
            btn.style.backgroundColor = '';
            btn.style.color = btn.dataset.priorityColor;   // Reset to original background
        });
    
        // Add 'selected' class and change style for the clicked button
        button.classList.add('selected');
        button.style.backgroundColor = priority.color;
        button.style.color = 'white';  // Set your desired color
    });

    //store the original color in a data attribute for each button
    button.dataset.priorityColor = priority.color; 

    return button; 
}


function renderToDoPage() {
    const todoPage = document.createElement('form'); 
    todoPage.id = 'todo-page'; 
    todoPage.classList.add('page'); 

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-todo-inputs'); 

    upperInputs.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createInputElement)('text', 'title-input', 'title', 'Title: Pay Bills', 'input'),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createInputElement)('text', 'details-input', 'details', 'Details: eg internet, phone, rent.', 'input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-todo-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createInputElement)('date', 'date', 'date')
    ); 

    const priorityBox = document.createElement('div'); 
    priorityBox.classList.add('priority-box');

    const prioritySelector = createPrioritySelector(); 
    const priorityLabel = document.createElement('label'); 
    priorityLabel.textContent = 'Priority: '; 

    priorityBox.append(
        priorityLabel,
        prioritySelector
    )

    const dateAndPriorityBox = document.createElement('div'); 
    dateAndPriorityBox.classList.add('date-and-priority'); 

    dateAndPriorityBox.append(
        dateInput,
        priorityBox
    );

    lowerInputs.append(
        dateAndPriorityBox,
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'ADD TO DO', 'add-todo', () => {
            (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.addNewTodo)(); 
        })
    );
    

    todoContent.append(upperInputs, lowerInputs); 
    todoPage.appendChild(todoContent);

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(todoPage); 

    todoPage.style.display = 'block'; 
}

function showToDoPage() {
    (0,_UIhelper__WEBPACK_IMPORTED_MODULE_0__.hideAllPages)(); 
    let todoPage = document.getElementById('todo-page');
    if (!todoPage) {
        renderToDoPage(); 
    } else {
        todoPage.style.display = 'block';
    }
}

 

/***/ }),

/***/ "./src/fonts/Lato-Bold.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Lato-Bold.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "636be8de934918e38ed9.ttf";

/***/ }),

/***/ "./src/fonts/Lato-Light.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Lato-Light.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7400fcad9e48ca9043f.ttf";

/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d883d540ee2b4de8024.ttf";

/***/ }),

/***/ "./src/icons/3844460_can_trash_icon.png":
/*!**********************************************!*\
  !*** ./src/icons/3844460_can_trash_icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2324c23bdc37254d72b5.png";

/***/ }),

/***/ "./src/icons/8666681_edit_icon.png":
/*!*****************************************!*\
  !*** ./src/icons/8666681_edit_icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae76596c032054257278.png";

/***/ }),

/***/ "./src/images/project.image.jpeg":
/*!***************************************!*\
  !*** ./src/images/project.image.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd536635f313cc2ce56b.jpeg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.trunc((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.trunc(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.trunc(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameISOWeek.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isSameISOWeek.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameISOWeek: () => (/* binding */ isSameISOWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.mjs */ "./node_modules/date-fns/isSameWeek.mjs");


/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
function isSameISOWeek(dateLeft, dateRight) {
  return (0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(dateLeft, dateRight, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/isThisISOWeek.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/isThisISOWeek.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisISOWeek: () => (/* binding */ isThisISOWeek)
/* harmony export */ });
/* harmony import */ var _isSameISOWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameISOWeek.mjs */ "./node_modules/date-fns/isSameISOWeek.mjs");


/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */

function isThisISOWeek(date) {
  return (0,_isSameISOWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameISOWeek)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _UIhelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIhelper */ "./src/UIhelper.js");
/* harmony import */ var _notepage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notepage.js */ "./src/notepage.js");
/* harmony import */ var _projectpage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectpage.js */ "./src/projectpage.js");
/* harmony import */ var _todaypage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todaypage.js */ "./src/todaypage.js");
/* harmony import */ var _thisweekpage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thisweekpage.js */ "./src/thisweekpage.js");
 
 







function createSidebar(){
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar'); 
    
    const sidebarOptions = document.createElement('ul'); 
    sidebarOptions.append(
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', '🏠 All Tasks', 'homeButton', () => (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.showHomePage)()),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', '⭐ Today', 'homeButton', () => (0,_todaypage_js__WEBPACK_IMPORTED_MODULE_6__.showTodayPage)(), 'todaypage-button'),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', '📅 This week', 'homeButton', () => (0,_thisweekpage_js__WEBPACK_IMPORTED_MODULE_7__.showThisWeekPage)()),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', '📗 Projects', 'homeButton', () => (0,_projectpage_js__WEBPACK_IMPORTED_MODULE_5__.showProjectPage)()),
        (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', '📖 Notes', 'homeButton', () => (0,_notepage_js__WEBPACK_IMPORTED_MODULE_4__.showNotePage)())
    );

    const createNew = (0,_UIhelper__WEBPACK_IMPORTED_MODULE_3__.createButton)('li', '+', 'homeButton', () => (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.showModal)()); 
    createNew.classList.add('create-new'); 

    sidebar.append(sidebarOptions, createNew); 

    return sidebar; 
}


const content = document.getElementById('content');
const body = document.createElement('div'); 
body.classList.add('body'); 
content.append(createSidebar(), body);  
(0,_thisweekpage_js__WEBPACK_IMPORTED_MODULE_7__.showThisWeekPage)(); 
(0,_projectpage_js__WEBPACK_IMPORTED_MODULE_5__.showProjectPage)(); 
(0,_notepage_js__WEBPACK_IMPORTED_MODULE_4__.showNotePage)(); 
(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.showHomePage)();
(0,_todaypage_js__WEBPACK_IMPORTED_MODULE_6__.showTodayPage)(); 

const todaypageButton = document.getElementById('todaypage-button'); 
todaypageButton.classList.add('active'); 

// Add event listeners to all buttons with the class 'homeButton'
document.querySelectorAll('.homeButton').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'active' class from all buttons
        document.querySelectorAll('.homeButton').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add the 'active' class to the clicked button
        this.classList.add('active');
    });
});

document.addEventListener('change', function(e) {
    if (e.target && e.target.matches('.todo-checkbox')) {
        const index = e.target.getAttribute('data-checkbox-index');
        const allCheckboxes = document.querySelectorAll(`.todo-checkbox[data-checkbox-index="${index}"]`);
        allCheckboxes.forEach(cb => {
            cb.checked = e.target.checked;
        });
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCOztBQUU3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2Qjs7QUFFN0IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7QUFPQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSx3QkFBd0IsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyx3QkFBd0IsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHFCQUFxQixXQUFXLFVBQVUsb0JBQW9CLHlCQUF5Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSx5QkFBeUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyx3QkFBd0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLHlCQUF5QixhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssd0JBQXdCLFdBQVcsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVkseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7OztBQzFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN1QjtBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJEQUFVOztBQUVwQztBQUNBLHNCQUFzQix5R0FBK0I7QUFDckQ7QUFDQSx1QkFBdUIseUdBQStCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQWlCO0FBQ3hFOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERpQjtBQUNLO0FBQ0o7QUFDUTtBQUs5QjtBQUNJO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdDOztBQUVoQztBQUNBLFFBQVEsY0FBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVE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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLHlFQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFMMkQ7QUFDYzs7QUFFekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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aUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0I7QUFDMEI7QUFDdkI7QUFDRztBQUNNO0FBQ0o7QUFDTTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBWSwyQ0FBMkMsdURBQVk7QUFDM0UsUUFBUSx1REFBWSxzQ0FBc0MsNERBQWE7QUFDdkUsUUFBUSx1REFBWSwyQ0FBMkMsa0VBQWdCO0FBQy9FLFFBQVEsdURBQVksMENBQTBDLGdFQUFlO0FBQzdFLFFBQVEsdURBQVksdUNBQXVDLDBEQUFZO0FBQ3ZFOztBQUVBLHNCQUFzQix1REFBWSxnQ0FBZ0Msb0RBQVM7QUFDM0U7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBZ0I7QUFDaEIsZ0VBQWU7QUFDZiwwREFBWTtBQUNaLHVEQUFZO0FBQ1osNERBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLCtGQUErRixNQUFNO0FBQ3JHO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRUYXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RldGFpbHNNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kaXZpZHVhbFByb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbm90ZVVJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3RlcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFVJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGhpc3dlZWtwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Mb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc0lTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNWYWxpZC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZlllYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0xhdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MYXRvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9pY29ucy84NjY2NjgxX2VkaXRfaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ljb25zLzM4NDQ0NjBfY2FuX3RyYXNoX2ljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvcHJvamVjdC5pbWFnZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2xhdG8tYm9sZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDsgXG4gICAgcGFkZGluZzogMDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDEzcmVtKSAxZnI7IC8qIEFkanVzdCB0aGUgZmlyc3QgdmFsdWUgYmFzZWQgb24gc2lkZWJhciB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2IoMTQ0LCAxNDQsIDE0NCk7XG4gICAgXG59XG5cbi5ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBUaGlzIGFsbG93cyBzY3JvbGxpbmcgKi9cbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBBZGp1c3QgaWYgbmVjZXNzYXJ5ICovXG59XG5cbi5tYWluLXBhZ2VzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cblxudWwge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtOyAgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAycmVtOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjVyZW07IFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5saSB7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmxpOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uaG9tZUJ1dHRvbiB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uaG9tZUJ1dHRvbi5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XG59XG5cbiN0b2RheXBhZ2UtYnV0dG9uLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY3JlYXRlLW5ldyB7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjOWNmNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2IoMTQ0LCAxNDQsIDE0NCk7XG59XG5cbi5tb2RhbCwgLmRldGFpbHMtbW9kYWwsIC5lZGl0LW1vZGFsLCAuYWRkLXRhc2stbW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgbWluLWhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM5Y2Y1O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjY2KTsgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kYWwtY29udGVudCwgLnRhc2stY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogODMuMSU7IFxufVxuXG4ubW9kYWwtdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLm1vZGFsLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XG4gICAgd2lkdGg6IDlyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiKDE0NCwgMTQ0LCAxNDQpO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1zaWRlYmFyLW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTsgXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICBnYXA6IDFyZW07IFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDEwJSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDUwJTsgXG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTU2KTtcbiAgICBtaW4td2lkdGg6IDQwcmVtOyBcbn1cblxuLmVkaXQtbW9kYWwtY29udGFpbmVyLCAudGFzay1tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDEwJSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDQwJTsgXG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTU2KTtcbiAgICBtaW4td2lkdGg6IDMwcmVtOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RvZG8tcGFnZSwgI3Byb2plY3QtY29udGFpbmVyLCAjbm90ZS1jb250YWluZXIge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtOyBcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNnJlbTsgXG4gICAgd2lkdGg6IDkyJTtcbn1cblxuLnRvZG8tY29udGVudCwgLmVkaXQtY29udGVudCwgLnRhc2stY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lZGl0LWNvbnRlbnQsIC50YXNrLWNvbnRlbnQge1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTsgXG4gICAgcGFkZGluZy1ib3R0b206IDEuNnJlbTtcbiAgICB3aWR0aDogOTIlO1xufVxuXG4uZWRpdC1wYWdlLCAjYWRkLXRhc2stcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMC44cmVtOyBcbn1cblxuXG5cbi51cHBlci10b2RvLWlucHV0cywgLm5vdGUtdXBwZXIsIC51cHBlci10YXNrLWlucHV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuI3RpdGxlLWlucHV0LFxuI2RldGFpbHMtaW5wdXQsXG4jcHJvamVjdC10aXRsZSwgXG4jbW9kYWwtbm90ZS10aXRsZSwgXG4jbW9kYWwtbm90ZS1kZXRhaWxzLCBcbiNlZGl0LXRpdGxlLWlucHV0LCBcbiNlZGl0LWRldGFpbHMtaW5wdXQsXG4jdGFzay10aXRsZS1pbnB1dCxcbiN0YXNrLWRldGFpbHMtaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTsgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmVkaXQtdGl0bGUtaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTsgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3RpdGxlLWlucHV0LCBcbiNwcm9qZWN0LXRpdGxlLCBcbiNtb2RhbC1ub3RlLXRpdGxlLCBcbiNlZGl0LXRpdGxlLWlucHV0LFxuI3Rhc2stdGl0bGUtaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jZGV0YWlscy1pbnB1dCwgXG4jbW9kYWwtbm90ZS1kZXRhaWxzLCBcbiNlZGl0LWRldGFpbHMtaW5wdXQsXG4jdGFzay1kZXRhaWxzLWlucHV0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7IFxufVxuXG5cbi5sb3dlci10b2RvLWlucHV0cywgLmxvd2VyLXRhc2staW5wdXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmRhdGUtYW5kLXByaW9yaXR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucHJpb3JpdHktYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEuM3JlbTtcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XG59XG5cbi5kYXRlLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcbn1cblxuI2RhdGUsICNlZGl0LWRhdGUsICN0YXNrLWRhdGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2LjZyZW07XG4gICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbiNwcmlvcml0eS1zZWxlY3RvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5wcmlvcml0eS1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogNXJlbTtcbn1cblxuLnByaW9yaXR5LWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRvZG8sIC5hZGQtdGFzay1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGhlaWdodDogMS45cmVtO1xuICAgIHdpZHRoOiA2LjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMS41cHggc29saWQgIzVjOWNmNTsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNWM5Y2Y1O1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcbn1cblxuLmNvbmZpcm0tZWRpdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGhlaWdodDogMS45cmVtO1xuICAgIHdpZHRoOiA3LjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMS41cHggc29saWQgIzVjOWNmNTsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNWM5Y2Y1O1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcbn1cblxuLmFkZC10b2RvOmhvdmVyLFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3Zlcixcbi5jcmVhdGUtbm90ZS1idG46aG92ZXIsXG4uZGV0YWlscy1idXR0b246aG92ZXIsXG4uY29uZmlybS1lZGl0LWJ1dHRvbjpob3Zlcixcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWM5Y2Y1OyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjOWNmNTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLnByb2plY3QtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jcmVhdGUtcHJvamVjdC1idG4sIC5jcmVhdGUtbm90ZS1idG4ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxLjlyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM1YzljZjU7IFxuICAgIGNvbG9yOiAjNWM5Y2Y1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubm90ZS1wYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbWUtcGFnZSwgLmhvbWVwYWdlLWNvbnRlbnQsIC5ub3RlcGFnZS5jb250ZW50LCAucHJvamVjdHBhZ2UtY29udGVudCwgLnRvZGF5cGFnZS1jb250ZW50LCAudGhpc3dlZWtwYWdlLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uaG9tZXBhZ2UtY29udGVudCwgLm5vdGVwYWdlLWNvbnRlbnQsIC5wcm9qZWN0cGFnZS1jb250ZW50LCAuaS1wcm9qZWN0LWNvbnRlbnQsIC50b2RheXBhZ2UtY29udGVudCwgLnRoaXN3ZWVrcGFnZS1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07IFxufVxuXG4uaG9tZXBhZ2UtdG9kby1jb250ZW50LCAucHJvamVjdC10b2RvLWNvbnRlbnQsIC50b2RheXBhZ2UtdG9kby1jb250ZW50LCAudGhpc3dlZWtwYWdlLXRvZG8tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTsgXG59XG5cbi5wYWdlLXRpdGxlLCAubm90ZS1wYWdlLXRpdGxlLCAucHJvamVjdHBhZ2UtdGl0bGUsIC5wcm9qZWN0LXRpdGxlLW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi50b2RvLWVsZW1lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xuICAgIGdhcDogOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNWY3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1YzljZjU7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRvZG8tZWxlbWVudDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA3cHggcmdiKDE0NCwgMTQ0LCAxNDQpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xufVxuXG4ubGVmdC1iYXIsIC5yaWdodC1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEuM3JlbTsgXG59XG5cbi5yaWdodC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC42cmVtOyBcbn1cblxuLmRhdGUtdGV4dCB7XG4gICAgd2lkdGg6IDMuOXJlbTsgXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcbiAgICBcbn1cblxuLmRldGFpbHMtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBoZWlnaHQ6IDEuOXJlbTtcbiAgICB3aWR0aDogNi41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWM5Y2Y1OyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM1YzljZjU7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xufVxuXG4uZWRpdC1idXR0b24gIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgXG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5kZWxldGUtYnV0dG9uLCAuZWRpdC1idXR0b24ge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kZWxldGUtYnV0dG9uOmhvdmVyLCAuZWRpdC1idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXRhaWxzLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmNztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiAzMCU7IFxuICAgIGhlaWdodDogMTVyZW07IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NTYpO1xuICAgIG1pbi13aWR0aDogNDByZW07IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNWM5Y2Y1OyBcbn1cblxuLmRldGFpbHMtY2xvc2UtYnV0dG9uIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjRyZW07XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuLmRldGFpbHMtY2xvc2UtYnV0dG9uOmhvdmVyLFxuLmRldGFpbHMtY2xvc2UtYnV0dG9uOmZvY3VzLFxuLmVkaXQtY2xvc2UtYnV0dG9uOmhvdmVyLFxuLmVkaXQtY2xvc2UtYnV0dG9uOmZvY3VzLFxuLm5vdGUtZGVsZXRlLWJ1dHRvbjpob3Zlcixcbi5ub3RlLWRlbGV0ZS1idXR0b246Zm9jdXMge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg2KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogM3JlbTtcbn1cblxuLmRldGFpbHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5kZXRhaWxzLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEuNXJlbTtcbn1cblxuLmxlZnQtZGV0YWlscywgLnJpZ2h0LWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuM3JlbTsgXG59XG5cbi5sZWZ0LWRldGFpbHMge1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcbn1cblxuLnJpZ2h0LWRldGFpbHMge1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcbn1cblxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjhyZW07XG59XG5cbi5lZGl0LWNsb3NlLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4udG9kby10aXRsZS1jb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAvKiBEcmF3cyBhIGxpbmUgdGhyb3VnaCB0aGUgdGV4dCAqL1xufVxuXG4udG9kby1lbGVtZW50LWNvbXBsZXRlZCB7XG4gICAgb3BhY2l0eTogMC41OyAvKiBSZWR1Y2VzIHRoZSBvcGFjaXR5ICovXG59XG5cbi5ub3Rlcy1jb250YWluZXIge1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAtbW96LWNvbHVtbi1jb3VudDogMzsgICAgLyogRmlyZWZveCAqL1xuICAgIGNvbHVtbi1jb3VudDogMzsgICAgICAgICAvKiBTdGFuZGFyZCBzeW50YXggKi9cblxuICAgIC13ZWJraXQtY29sdW1uLWdhcDogMWVtOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAtbW96LWNvbHVtbi1nYXA6IDFlbTsgICAgLyogRmlyZWZveCAqL1xuICAgIGNvbHVtbi1nYXA6IDFlbTsgICAgICAgICAvKiBTdGFuZGFyZCBzeW50YXggKi9cblxuICAgIHdpZHRoOiAxMDAlOyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lY2Vzc2FyeSAqL1xufVxuXG4ubm90ZS1ib3gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgLyogVGhpcyBzZXRzIHRoZSB2ZXJ0aWNhbCBnYXAgYmV0d2VlbiBpdGVtcyAqL1xuICAgIGJyZWFrLWluc2lkZTogYXZvaWQtY29sdW1uO1xufVxuXG4ubm90ZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTsgXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgIFxufVxuXG4ubm90ZS1lbGVtZW50IHRleHRhcmVhIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMiAqIDRweCk7IC8qIEFkanVzdCBmb3IgcGFkZGluZyAqL1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTsgLyogQXNzdW1pbmcgeW91IGRvbid0IHdhbnQgYSBib3JkZXIgaW5zaWRlIC5ub3RlLWVsZW1lbnQgKi9cbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IC8qIEhpZGUgc2Nyb2xsYmFyLCBidXQgd29uJ3QgbWFrZSBpdCBncm93ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07IFxufVxuXG4ubm90ZS1lbGVtZW50IHRleHRhcmVhOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubm90ZS1lbGVtZW50OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDdweCByZ2IoMTQ0LCAxNDQsIDE0NCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG59XG5cbi5ub3RlLWRlbGV0ZS1idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5ub3RlLWRlbGV0ZS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cblxuI25vdGUtdGl0bGUsICNub3RlLWRldGFpbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuI25vdGUtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0wLjNyZW07XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuI25vdGUtZGV0YWlscyB7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJvamVjdC1ib3gge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWluLXdpZHRoOiAyNXJlbTtcbiAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIHNjYWxpbmcgKi9cbn1cblxuLnByb2plY3QtZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogTmVlZGVkIGZvciB0aGUgcHNldWRvLWVsZW1lbnQgcG9zaXRpb25pbmcgKi9cbn1cblxuLnByb2plY3QtZWxlbWVudDo6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigwLCAwLCAwKTtcbn1cblxuLnByb2plY3QtYm94OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA0LjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTsgXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LXRpdGxlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1saWdodCc7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07IFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxuLnByb2plY3QtZGVsZXRlLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuXG4ucHJvamVjdC1kZWxldGUtYnRuIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBoZWlnaHQ6IDEuOXJlbTtcbiAgICB3aWR0aDogNy40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM1YzljZjU7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xuICAgIGNvbG9yOiBibGFjazsgXG59XG5cbi50aXRsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC43cmVtOyBcbn1cblxuLmktcHJvamVjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcbn1cblxuLmFkZC10b2RvLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10b2RvLWNvbnRlbnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGx1cy1zeW1ib2wge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuXG4vKiBzdHlsaW5nIGZvciBjaGVja2JveCAqL1xuLmNoZWNrYm94LXdyYXBwZXItMTkge1xuZGlzcGxheTogZmxleDtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4tLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4tLWNoZWNrYm94LWhlaWdodDogMjVweDtcbn1cbi8qXG5ALW1vei1rZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XG4wJSB7XG4gICAgaGVpZ2h0OiAwO1xufVxuMTAwJSB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbn1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhYm90dG9tY2hlY2stMTkge1xuMCUge1xuICAgIGhlaWdodDogMDtcbn1cbjEwMCUge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XG59XG59XG5cbkBrZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XG4wJSB7XG4gICAgaGVpZ2h0OiAwO1xufVxuMTAwJSB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgLyAyKTtcbn1cbn1cblxuQGtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcbjAlIHtcbiAgICBoZWlnaHQ6IDA7XG59XG41MCUge1xuICAgIGhlaWdodDogMDtcbn1cbjEwMCUge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcbn1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xuMCUge1xuICAgIGhlaWdodDogMDtcbn1cbjUwJSB7XG4gICAgaGVpZ2h0OiAwO1xufVxuMTAwJSB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xufVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZG90aGF0b3BjaGVjay0xOSB7XG4wJSB7XG4gICAgaGVpZ2h0OiAwO1xufVxuNTAlIHtcbiAgICBoZWlnaHQ6IDA7XG59XG4xMDAlIHtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XG59XG59XG5cbi5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbmRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3gge1xuaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xud2lkdGg6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbmJvcmRlcjogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjEpIHNvbGlkICM1YzljZjU7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4tbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZSAwLjJzO1xuLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcbi13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcbnRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUsXG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XG4tbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xucG9zaXRpb246IGFic29sdXRlO1xuaGVpZ2h0OiAwO1xud2lkdGg6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4yKTtcbmJhY2tncm91bmQtY29sb3I6ICM1YzljZjU7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4tbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4td2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xudHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5jb250ZW50OiBcIiBcIjtcbi13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcbi1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcbnRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XG59XG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUge1xudG9wOiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNzIpO1xubGVmdDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjQxKTtcbmJveC1zaGFkb3c6IDAgMCAwIGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSkgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4tbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xudHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG59XG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XG50b3A6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4zNyk7XG5sZWZ0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMDUpO1xuLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4tby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xudHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3gsXG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQge1xuYm9yZGVyLWNvbG9yOiAjNWM5Y2Y1O1xufVxuLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmFmdGVyLFxuLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjphZnRlciB7XG5oZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xuLW1vei1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xuLW8tYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcbi13ZWJraXQtYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrLTE5IDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcbmFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XG59XG4uY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveDo6YmVmb3JlLFxuLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjpiZWZvcmUge1xuaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xuLW1vei1hbmltYXRpb246IGRvdGhhdG9wY2hlY2stMTkgMC40cyBlYXNlIDBzIGZvcndhcmRzO1xuLW8tYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbi13ZWJraXQtYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcbmFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XG59XG5cblxuXG5cblxuKi9cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiwrREFBcUQ7SUFDckQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBb0Q7SUFDcEQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrREFBdUQ7SUFDdkQsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEMsRUFBRSxrREFBa0Q7SUFDbEcsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDBDQUEwQzs7QUFFOUM7O0FBRUE7SUFDSSxnQkFBZ0IsRUFBRSwwQkFBMEI7SUFDNUMsYUFBYSxFQUFFLHdCQUF3QjtBQUMzQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7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Ozs7Ozs7Ozs7Q0F1SkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0xhdG8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tYm9sZCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0xhdG8tQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDEzcmVtKSAxZnI7IC8qIEFkanVzdCB0aGUgZmlyc3QgdmFsdWUgYmFzZWQgb24gc2lkZWJhciB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2IoMTQ0LCAxNDQsIDE0NCk7XFxuICAgIFxcbn1cXG5cXG4uYm9keSB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFRoaXMgYWxsb3dzIHNjcm9sbGluZyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBBZGp1c3QgaWYgbmVjZXNzYXJ5ICovXFxufVxcblxcbi5tYWluLXBhZ2VzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07ICBcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS41cmVtOyBcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5saSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmhvbWVCdXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5ob21lQnV0dG9uLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xcbn1cXG5cXG4jdG9kYXlwYWdlLWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5jcmVhdGUtbmV3IHtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzljZjU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYigxNDQsIDE0NCwgMTQ0KTtcXG59XFxuXFxuLm1vZGFsLCAuZGV0YWlscy1tb2RhbCwgLmVkaXQtbW9kYWwsIC5hZGQtdGFzay1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gICAgZGlzcGxheTogZmxleDsgLyogVXNlIGZsZXhib3ggKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjOWNmNTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNjYpOyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCwgLnRhc2stY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogODMuMSU7IFxcbn1cXG5cXG4ubW9kYWwtdGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubW9kYWwtc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XFxuICAgIHdpZHRoOiA5cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2IoMTQ0LCAxNDQsIDE0NCk7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbC1zaWRlYmFyLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTsgXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICAgIGdhcDogMXJlbTsgXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGhlaWdodDogMzByZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcbiAgICBtaW4td2lkdGg6IDQwcmVtOyBcXG59XFxuXFxuLmVkaXQtbW9kYWwtY29udGFpbmVyLCAudGFzay1tb2RhbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTAlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA0MCU7IFxcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTU2KTtcXG4gICAgbWluLXdpZHRoOiAzMHJlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXBhZ2UsICNwcm9qZWN0LWNvbnRhaW5lciwgI25vdGUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA5NSU7XFxuICAgIHBhZGRpbmctdG9wOiAwLjZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTsgXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNnJlbTsgXFxuICAgIHdpZHRoOiA5MiU7XFxufVxcblxcbi50b2RvLWNvbnRlbnQsIC5lZGl0LWNvbnRlbnQsIC50YXNrLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtY29udGVudCwgLnRhc2stY29udGVudCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07IFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS42cmVtO1xcbiAgICB3aWR0aDogOTIlO1xcbn1cXG5cXG4uZWRpdC1wYWdlLCAjYWRkLXRhc2stcGFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07IFxcbn1cXG5cXG5cXG5cXG4udXBwZXItdG9kby1pbnB1dHMsIC5ub3RlLXVwcGVyLCAudXBwZXItdGFzay1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiN0aXRsZS1pbnB1dCxcXG4jZGV0YWlscy1pbnB1dCxcXG4jcHJvamVjdC10aXRsZSwgXFxuI21vZGFsLW5vdGUtdGl0bGUsIFxcbiNtb2RhbC1ub3RlLWRldGFpbHMsIFxcbiNlZGl0LXRpdGxlLWlucHV0LCBcXG4jZWRpdC1kZXRhaWxzLWlucHV0LFxcbiN0YXNrLXRpdGxlLWlucHV0LFxcbiN0YXNrLWRldGFpbHMtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7IFxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXQtdGl0bGUtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7IFxcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI3RpdGxlLWlucHV0LCBcXG4jcHJvamVjdC10aXRsZSwgXFxuI21vZGFsLW5vdGUtdGl0bGUsIFxcbiNlZGl0LXRpdGxlLWlucHV0LFxcbiN0YXNrLXRpdGxlLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNkZXRhaWxzLWlucHV0LCBcXG4jbW9kYWwtbm90ZS1kZXRhaWxzLCBcXG4jZWRpdC1kZXRhaWxzLWlucHV0LFxcbiN0YXNrLWRldGFpbHMtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyBcXG59XFxuXFxuXFxuLmxvd2VyLXRvZG8taW5wdXRzLCAubG93ZXItdGFzay1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmRhdGUtYW5kLXByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xcbn1cXG5cXG4uZGF0ZS1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xcbn1cXG5cXG4jZGF0ZSwgI2VkaXQtZGF0ZSwgI3Rhc2stZGF0ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDYuNnJlbTtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbiNwcmlvcml0eS1zZWxlY3RvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLCAuYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGhlaWdodDogMS45cmVtO1xcbiAgICB3aWR0aDogNi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzVjOWNmNTsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICM1YzljZjU7XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcXG59XFxuXFxuLmNvbmZpcm0tZWRpdC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgaGVpZ2h0OiAxLjlyZW07XFxuICAgIHdpZHRoOiA3LjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNWM5Y2Y1OyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzVjOWNmNTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXIsXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlcixcXG4uY3JlYXRlLW5vdGUtYnRuOmhvdmVyLFxcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlcixcXG4uY29uZmlybS1lZGl0LWJ1dHRvbjpob3ZlcixcXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWM5Y2Y1OyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzljZjU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnByb2plY3QtcGFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuLCAuY3JlYXRlLW5vdGUtYnRuIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiAxLjlyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM1YzljZjU7IFxcbiAgICBjb2xvcjogIzVjOWNmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ub3RlLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhvbWUtcGFnZSwgLmhvbWVwYWdlLWNvbnRlbnQsIC5ub3RlcGFnZS5jb250ZW50LCAucHJvamVjdHBhZ2UtY29udGVudCwgLnRvZGF5cGFnZS1jb250ZW50LCAudGhpc3dlZWtwYWdlLWNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ob21lcGFnZS1jb250ZW50LCAubm90ZXBhZ2UtY29udGVudCwgLnByb2plY3RwYWdlLWNvbnRlbnQsIC5pLXByb2plY3QtY29udGVudCwgLnRvZGF5cGFnZS1jb250ZW50LCAudGhpc3dlZWtwYWdlLWNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMTVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMTVyZW07XFxuICAgIG1hcmdpbi10b3A6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTsgXFxufVxcblxcbi5ob21lcGFnZS10b2RvLWNvbnRlbnQsIC5wcm9qZWN0LXRvZG8tY29udGVudCwgLnRvZGF5cGFnZS10b2RvLWNvbnRlbnQsIC50aGlzd2Vla3BhZ2UtdG9kby1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtOyBcXG59XFxuXFxuLnBhZ2UtdGl0bGUsIC5ub3RlLXBhZ2UtdGl0bGUsIC5wcm9qZWN0cGFnZS10aXRsZSwgLnByb2plY3QtdGl0bGUtbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udG9kby1lbGVtZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xcbiAgICBnYXA6IDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7IFxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzVjOWNmNTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvLWVsZW1lbnQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDdweCByZ2IoMTQ0LCAxNDQsIDE0NCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcbn1cXG5cXG4ubGVmdC1iYXIsIC5yaWdodC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuM3JlbTsgXFxufVxcblxcbi5yaWdodC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjZyZW07IFxcbn1cXG5cXG4uZGF0ZS10ZXh0IHtcXG4gICAgd2lkdGg6IDMuOXJlbTsgXFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xcbiAgICBcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGhlaWdodDogMS45cmVtO1xcbiAgICB3aWR0aDogNi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YzljZjU7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjNWM5Y2Y1O1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tYm9sZCc7XFxufVxcblxcbi5lZGl0LWJ1dHRvbiAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvaWNvbnMvODY2NjY4MV9lZGl0X2ljb24ucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2ljb25zLzM4NDQ0NjBfY2FuX3RyYXNoX2ljb24ucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24sIC5lZGl0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246aG92ZXIsIC5lZGl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGV0YWlscy1tb2RhbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiAzMCU7IFxcbiAgICBoZWlnaHQ6IDE1cmVtOyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU1Nik7XFxuICAgIG1pbi13aWR0aDogNDByZW07IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM1YzljZjU7IFxcbn1cXG5cXG4uZGV0YWlscy1jbG9zZS1idXR0b24ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuLmRldGFpbHMtY2xvc2UtYnV0dG9uOmhvdmVyLFxcbi5kZXRhaWxzLWNsb3NlLWJ1dHRvbjpmb2N1cyxcXG4uZWRpdC1jbG9zZS1idXR0b246aG92ZXIsXFxuLmVkaXQtY2xvc2UtYnV0dG9uOmZvY3VzLFxcbi5ub3RlLWRlbGV0ZS1idXR0b246aG92ZXIsXFxuLm5vdGUtZGVsZXRlLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg2KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogM3JlbTtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5kZXRhaWxzLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4ubGVmdC1kZXRhaWxzLCAucmlnaHQtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtOyBcXG59XFxuXFxuLmxlZnQtZGV0YWlscyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1ib2xkJztcXG59XFxuXFxuLnJpZ2h0LWRldGFpbHMge1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XFxufVxcblxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuXFxuLmVkaXQtY2xvc2UtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IC8qIERyYXdzIGEgbGluZSB0aHJvdWdoIHRoZSB0ZXh0ICovXFxufVxcblxcbi50b2RvLWVsZW1lbnQtY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogMC41OyAvKiBSZWR1Y2VzIHRoZSBvcGFjaXR5ICovXFxufVxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMzsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXFxuICAgIC1tb3otY29sdW1uLWNvdW50OiAzOyAgICAvKiBGaXJlZm94ICovXFxuICAgIGNvbHVtbi1jb3VudDogMzsgICAgICAgICAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG5cXG4gICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAxZW07IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xcbiAgICAtbW96LWNvbHVtbi1nYXA6IDFlbTsgICAgLyogRmlyZWZveCAqL1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07ICAgICAgICAgLyogU3RhbmRhcmQgc3ludGF4ICovXFxuXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lY2Vzc2FyeSAqL1xcbn1cXG5cXG4ubm90ZS1ib3gge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IC8qIFRoaXMgc2V0cyB0aGUgdmVydGljYWwgZ2FwIGJldHdlZW4gaXRlbXMgKi9cXG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZC1jb2x1bW47XFxufVxcblxcbi5ub3RlLWVsZW1lbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmNztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07IFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTY1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XFxuICAgIFxcbn1cXG5cXG4ubm90ZS1lbGVtZW50IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiA0cHgpOyAvKiBBZGp1c3QgZm9yIHBhZGRpbmcgKi9cXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IG5vbmU7IC8qIEFzc3VtaW5nIHlvdSBkb24ndCB3YW50IGEgYm9yZGVyIGluc2lkZSAubm90ZS1lbGVtZW50ICovXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgLyogSGlkZSBzY3JvbGxiYXIsIGJ1dCB3b24ndCBtYWtlIGl0IGdyb3cgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07IFxcbn1cXG5cXG4ubm90ZS1lbGVtZW50IHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5vdGUtZWxlbWVudDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IHJnYigxNDQsIDE0NCwgMTQ0KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XFxufVxcblxcbi5ub3RlLWRlbGV0ZS1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubm90ZS1kZWxldGUtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuXFxuI25vdGUtdGl0bGUsICNub3RlLWRldGFpbHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbn1cXG5cXG4jbm90ZS10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IC0wLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuI25vdGUtZGV0YWlscyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0LWJveCB7XFxuICAgIHdpZHRoOiA0OCU7XFxuICAgIG1pbi13aWR0aDogMjVyZW07XFxuICAgIGhlaWdodDogMTNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciBzY2FsaW5nICovXFxufVxcblxcbi5wcm9qZWN0LWVsZW1lbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBOZWVkZWQgZm9yIHRoZSBwc2V1ZG8tZWxlbWVudCBwb3NpdGlvbmluZyAqL1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50OjpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9pbWFnZXMvcHJvamVjdC5pbWFnZS5qcGVnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4ucHJvamVjdC1ib3g6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDQuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTsgXFxuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1yZWd1bGFyJztcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1jb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWxpZ2h0JztcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07IFxcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG46aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDEuOXJlbTtcXG4gICAgd2lkdGg6IDcuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzVjOWNmNTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xcbiAgICBjb2xvcjogYmxhY2s7IFxcbn1cXG5cXG4udGl0bGUtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC43cmVtOyBcXG59XFxuXFxuLmktcHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLXJlZ3VsYXInO1xcbn1cXG5cXG4uYWRkLXRvZG8tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1jb250ZW50OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmNztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucGx1cy1zeW1ib2wge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIGZvciBjaGVja2JveCAqL1xcbi5jaGVja2JveC13cmFwcGVyLTE5IHtcXG5kaXNwbGF5OiBmbGV4O1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbi0tY2hlY2tib3gtaGVpZ2h0OiAyNXB4O1xcbn1cXG4vKlxcbkAtbW96LWtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4wJSB7XFxuICAgIGhlaWdodDogMDtcXG59XFxuMTAwJSB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxufVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZG90aGFib3R0b21jaGVjay0xOSB7XFxuMCUge1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcbjEwMCUge1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAvIDIpO1xcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBkb3RoYWJvdHRvbWNoZWNrLTE5IHtcXG4wJSB7XFxuICAgIGhlaWdodDogMDtcXG59XFxuMTAwJSB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxufVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2stMTkge1xcbjAlIHtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG41MCUge1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcbjEwMCUge1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIDEuMik7XFxufVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZG90aGF0b3BjaGVjay0xOSB7XFxuMCUge1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcbjUwJSB7XFxuICAgIGhlaWdodDogMDtcXG59XFxuMTAwJSB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcXG59XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBkb3RoYXRvcGNoZWNrLTE5IHtcXG4wJSB7XFxuICAgIGhlaWdodDogMDtcXG59XFxuNTAlIHtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4xMDAlIHtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAxLjIpO1xcbn1cXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbmRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3gge1xcbmhlaWdodDogdmFyKC0tY2hlY2tib3gtaGVpZ2h0KTtcXG53aWR0aDogdmFyKC0tY2hlY2tib3gtaGVpZ2h0KTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4xKSBzb2xpZCAjNWM5Y2Y1O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbi1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4tbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxuLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG4td2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxudHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3g6OmJlZm9yZSxcXG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjphZnRlciB7XFxuLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbi13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5oZWlnaHQ6IDA7XFxud2lkdGg6IGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4yKTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNWM5Y2Y1O1xcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4tbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbi1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4tby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4td2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbnRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5jb250ZW50OiBcXFwiIFxcXCI7XFxuLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbi1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXG50cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94OjpiZWZvcmUge1xcbnRvcDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjcyKTtcXG5sZWZ0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuNDEpO1xcbmJveC1zaGFkb3c6IDAgMCAwIGNhbGModmFyKC0tY2hlY2tib3gtaGVpZ2h0KSAqIC4wNSkgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG50cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveDo6YWZ0ZXIge1xcbnRvcDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogLjM3KTtcXG5sZWZ0OiBjYWxjKHZhcigtLWNoZWNrYm94LWhlaWdodCkgKiAuMDUpO1xcbi1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4tby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG50cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uY2hlY2tib3gtd3JhcHBlci0xOSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNoZWNrLWJveCxcXG4uY2hlY2tib3gtd3JhcHBlci0xOSAuY2hlY2stYm94LmNoZWNrZWQge1xcbmJvcmRlci1jb2xvcjogIzVjOWNmNTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXItMTkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVjay1ib3g6OmFmdGVyLFxcbi5jaGVja2JveC13cmFwcGVyLTE5IC5jaGVjay1ib3guY2hlY2tlZDo6YWZ0ZXIge1xcbmhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpIC8gMik7XFxuLW1vei1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbi1vLWFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxuLXdlYmtpdC1hbmltYXRpb246IGRvdGhhYm90dG9tY2hlY2stMTkgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbmFuaW1hdGlvbjogZG90aGFib3R0b21jaGVjay0xOSAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxufVxcbi5jaGVja2JveC13cmFwcGVyLTE5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2stYm94OjpiZWZvcmUsXFxuLmNoZWNrYm94LXdyYXBwZXItMTkgLmNoZWNrLWJveC5jaGVja2VkOjpiZWZvcmUge1xcbmhlaWdodDogY2FsYyh2YXIoLS1jaGVja2JveC1oZWlnaHQpICogMS4yKTtcXG4tbW96LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuLW8tYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG4td2Via2l0LWFuaW1hdGlvbjogZG90aGF0b3BjaGVjay0xOSAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxuYW5pbWF0aW9uOiBkb3RoYXRvcGNoZWNrLTE5IDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG59XFxuXFxuXFxuXFxuXFxuXFxuKi9cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUlucHV0RWxlbWVudCh0eXBlLCBpZCwgbmFtZSwgcGxhY2Vob2xkZXIsIGNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXG4gICAgaW5wdXQudHlwZSA9IHR5cGU7IFxuICAgIGlucHV0LmlkID0gaWQ7IFxuICAgIGlucHV0Lm5hbWUgPSBuYW1lOyBcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7IFxuICAgIGlmIChwbGFjZWhvbGRlcikgeyAvLyBPbmx5IHNldCBwbGFjZWhvbGRlciBpZiBhIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnB1dDsgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlSW5wdXRFbGVtZW50KHR5cGUsIGlkLCBuYW1lLCB2YWx1ZSwgY2xhc3NMaXN0KSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcbiAgICBpbnB1dC50eXBlID0gdHlwZTsgXG4gICAgaW5wdXQuaWQgPSBpZDsgXG4gICAgaW5wdXQubmFtZSA9IG5hbWU7IFxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTsgXG4gICAgaWYgKHZhbHVlKSB7IC8vIE9ubHkgc2V0IHBsYWNlaG9sZGVyIGlmIGEgdmFsdWUgaXMgcHJvdmlkZWRcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXQ7IFxufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWx1ZVRleHRhcmVhKGlkLCBuYW1lLCB2YWx1ZSwgY2xhc3NMaXN0KSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhLmlkID0gaWQ7XG4gICAgdGV4dGFyZWEubmFtZSA9IG5hbWU7XG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpO1xuICAgIC8vdGV4dGFyZWEud3JhcCA9IFwiaGFyZFwiO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gYWRqdXN0IHRleHRhcmVhIGhlaWdodFxuICAgIGZ1bmN0aW9uIGFkanVzdEhlaWdodCgpIHtcbiAgICAgICAgLy8gRW5zdXJlIGVsZW1lbnQgaXMgaW4gdGhlIERPTSBhbmQgdmlzaWJsZSB0byBjYWxjdWxhdGUgc2Nyb2xsSGVpZ2h0XG4gICAgICAgIGlmICh0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAvL3RleHRhcmVhLnN0eWxlLmhlaWdodCA9ICcxcHgnOyAvLyBSZXNldCBoZWlnaHQgdG8gcmVjYWxjdWxhdGVcbiAgICAgICAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRleHRhcmVhLnNjcm9sbEhlaWdodCArICdweCc7IC8vIEFkanVzdCB0byBjb250ZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIHZhbHVlIHNldCBhbmQgYWRqdXN0IGhlaWdodFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIEFkanVzdCBoZWlnaHQgYWZ0ZXIgYXBwZW5kaW5nIHRvIERPTSB0byBlbnN1cmUgYWNjdXJhdGUgc2Nyb2xsSGVpZ2h0IGNhbGN1bGF0aW9uXG4gICAgc2V0VGltZW91dChhZGp1c3RIZWlnaHQsIDEwKTtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGlucHV0IHRvIGR5bmFtaWNhbGx5IGFkanVzdCBoZWlnaHRcbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFkanVzdEhlaWdodCk7XG4gICAgYWRqdXN0SGVpZ2h0KCk7IFxuXG4gICAgcmV0dXJuIHRleHRhcmVhO1xufVxuXG5cbmZ1bmN0aW9uIGhpZGVBbGxQYWdlcygpIHtcbiAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlJyk7IFxuICAgIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgIHBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZUFsbEhvbWVQYWdlcygpIHtcbiAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXBhZ2VzJyk7IFxuICAgIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgIHBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHR5cGUsIHRleHQsIGNsYXNzTGlzdCwgb25DbGljaywgaWQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpOyBcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0OyBcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc0xpc3QpOyBcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcbiAgICBidXR0b24uaWQgPSBpZDsgXG4gICAgcmV0dXJuIGJ1dHRvbjsgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUljb25CdXR0b24odHlwZSwgY2xhc3NMaXN0LCBvbkNsaWNrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTsgXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTsgXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG4gICAgcmV0dXJuIGJ1dHRvbjsgXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0UGFnZUluZGV4KCkge1xuICAgIC8vIFNlbGVjdCBhbGwgaW5kaXZpZHVhbCBwcm9qZWN0IHBhZ2VzXG4gICAgY29uc3QgcHJvamVjdFBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cImluZGl2aWR1YWwtcHJvamVjdC1wYWdlXCJdJyk7XG4gICAgXG4gICAgLy8gRmluZCB0aGUgb25lIHRoYXQgaXMgY3VycmVudGx5IHZpc2libGUgKGRpc3BsYXkgIT09ICdub25lJylcbiAgICBjb25zdCB2aXNpYmxlUGFnZSA9IEFycmF5LmZyb20ocHJvamVjdFBhZ2VzKS5maW5kKHBhZ2UgPT4gcGFnZS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKTtcbiAgICBcbiAgICBpZiAodmlzaWJsZVBhZ2UpIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgaW5kZXggZnJvbSB0aGUgaWQgdXNpbmcgYSByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2aXNpYmxlUGFnZS5pZC5tYXRjaCgvaW5kaXZpZHVhbC1wcm9qZWN0LXBhZ2UoXFxkKykvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTsgLy8gQ29udmVydCB0aGUgZXh0cmFjdGVkIGluZGV4IHRvIGEgbnVtYmVyXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG51bGw7IC8vIFJldHVybiBudWxsIGlmIG5vIHBhZ2UgaXMgdmlzaWJsZSBvciB0aGUgaW5kZXggY2Fubm90IGJlIGZvdW5kXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG9FbGVtZW50cyhpbmRleCkge1xuICAgIC8vIFNlbGVjdCBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgJ3RvZG8taXRlbScgdGhhdCBoYXZlIHRoZSBtYXRjaGluZyAnZGF0YS1pbmRleCdcbiAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudG9kby1lbGVtZW50W2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBOb2RlTGlzdCBhbmQgcmVtb3ZlIGVhY2ggZWxlbWVudCBmcm9tIGl0cyBwYXJlbnRcbiAgICB0b2RvRWxlbWVudHMuZm9yRWFjaCh0b2RvRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRvZG9FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgICAgICBwYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG4gICAgICAgIH1cbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBkZWxldGVTdG9yZWRUb2RvcyhpbmRleCkge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSB8fCAnW10nKTtcbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8sIHRvZG9JbmRleCkgPT4gdG9kb0luZGV4ICE9PSBpbmRleCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9zKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVN0b3JlZFRvZGF5VG9kb3MoaW5kZXgpIHtcbiAgICBjb25zdCB0b2RheXRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kYXlUb2RvcycpIHx8ICdbXScpO1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RheVRvZG9zID0gdG9kYXl0b2Rvcy5maWx0ZXIoKHRvZG8sIHRvZG9JbmRleCkgPT4gdG9kb0luZGV4ICE9PSBpbmRleCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5VG9kb3MnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kYXlUb2RvcykpOyBcbn1cblxuZnVuY3Rpb24gZGVsZXRlU3RvcmVkV2Vla1RvZG9zKGluZGV4KSB7XG4gICAgY29uc3Qgd2Vla1RvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2Vla1RvZG9zJykgfHwgJ1tdJyk7XG4gICAgY29uc3QgdXBkYXRlZFdlZWtUb2RvcyA9IHdlZWtUb2Rvcy5maWx0ZXIoKHRvZG8sIHRvZG9JbmRleCkgPT4gdG9kb0luZGV4ICE9PSBpbmRleCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlZWtUb2RvcycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRXZWVrVG9kb3MpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU3RvcmVkTm90ZXMoaW5kZXgpIHtcbiAgICBjb25zdCBub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykgfHwgJ1tdJyk7XG4gICAgY29uc3QgdXBkYXRlZE5vdGVzID0gbm90ZXMuZmlsdGVyKChub3RlLCBub3RlSW5kZXgpID0+IG5vdGVJbmRleCAhPT0gaW5kZXgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWROb3RlcykpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVTdG9yZWRQcm9qZWN0cyhpbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSB8fCAnW10nKTtcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gcHJvamVjdEluZGV4ICE9PSBpbmRleCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb2plY3RzKSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcmlvcml0eSgpIHtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpOyBcbiAgICByZXR1cm4gcHJpb3JpdHkudGV4dENvbnRlbnQ7IFxufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvRWxlbWVudEluV2VlayhpbmRleCkge1xuICAgIGNvbnN0IHRvZGF5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzd2Vla3BhZ2UtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZ3JhbmRjaGlsZCA9IHRvZGF5Q29udGVudC5xdWVyeVNlbGVjdG9yKGAudGhpc3dlZWtwYWdlLWNvbnRlbnQgLnRoaXN3ZWVrcGFnZS10b2RvLWNvbnRlbnQgLnRvZG8tZWxlbWVudFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblxuICAgIGlmIChncmFuZGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Cb3ggPSBncmFuZGNoaWxkLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRvZG9Cb3guc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG4gICAgICAgIGdyYW5kY2hpbGQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgZWxlbWVudCBjb21wbGV0ZWx5LCB1c2U6XG4gICAgICAgIGdyYW5kY2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG9FbGVtZW50SW5Ub2RheShpbmRleCkge1xuICAgIGNvbnN0IHRvZGF5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheXBhZ2UtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZ3JhbmRjaGlsZCA9IHRvZGF5Q29udGVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXlwYWdlLWNvbnRlbnQgLnRvZGF5cGFnZS10b2RvLWNvbnRlbnQgLnRvZG8tZWxlbWVudFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblxuICAgIGlmIChncmFuZGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Cb3ggPSBncmFuZGNoaWxkLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRvZG9Cb3guc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG4gICAgICAgIGdyYW5kY2hpbGQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgZWxlbWVudCBjb21wbGV0ZWx5LCB1c2U6XG4gICAgICAgIGdyYW5kY2hpbGQucmVtb3ZlKCk7XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gdXBkYXRlRXhpc3RpbmdUb2RvQm94KHRvZG9Cb3gsIHRpdGxlLCBkYXRlLCBkZXRhaWxzLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHRvZG9Cb3gucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKTtcbiAgICBjb25zdCBkYXRlRWxlbWVudCA9IHRvZG9Cb3gucXVlcnlTZWxlY3RvcignLmRhdGUtdGV4dCcpO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gdG9kb0JveC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXRhaWxzJyk7IFxuICAgIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IHRvZG9Cb3gucXVlcnlTZWxlY3RvcignLnRvZG8tcHJpb3JpdHknKTsgXG4gICAgXG4gICAgaWYgKHRpdGxlRWxlbWVudCkgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgaWYgKGRhdGVFbGVtZW50KSBkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgaWYgKGRldGFpbHNFbGVtZW50KSBkZXRhaWxzRWxlbWVudC50ZXh0Q29udGVudCA9IGRldGFpbHM7XG4gICAgaWYgKHByaW9yaXR5RWxlbWVudCkgcHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgaWYgKCFlbGVtKSByZXR1cm4gZmFsc2U7IC8vIEVsZW1lbnQgZG9lcyBub3QgZXhpc3RcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHJldHVybiBzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUlucHV0RWxlbWVudCwgXG4gICAgaGlkZUFsbFBhZ2VzLCBcbiAgICBjcmVhdGVCdXR0b24sIFxuICAgIGhpZGVBbGxIb21lUGFnZXMsIFxuICAgIGNyZWF0ZUljb25CdXR0b24sIFxuICAgIGNyZWF0ZVZhbHVlSW5wdXRFbGVtZW50LCBcbiAgICBjcmVhdGVWYWx1ZVRleHRhcmVhLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0UGFnZUluZGV4LFxuICAgIGRlbGV0ZVRvZG9FbGVtZW50cyxcbiAgICBkZWxldGVUb2RvRWxlbWVudEluVG9kYXksXG4gICAgZGVsZXRlVG9kb0VsZW1lbnRJbldlZWssXG4gICAgdXBkYXRlRXhpc3RpbmdUb2RvQm94LFxuICAgIGdldFNlbGVjdGVkUHJpb3JpdHksIFxuICAgIGRlbGV0ZVN0b3JlZFRvZG9zLFxuICAgIGRlbGV0ZVN0b3JlZFRvZGF5VG9kb3MsXG4gICAgZGVsZXRlU3RvcmVkV2Vla1RvZG9zLFxuICAgIGlzVmlzaWJsZSxcbiAgICBkZWxldGVTdG9yZWROb3RlcyxcbiAgICBkZWxldGVTdG9yZWRQcm9qZWN0cyB9OyAiLCJpbXBvcnQgeyBjcmVhdGVQcmlvcml0eVNlbGVjdG9yIH0gZnJvbSBcIi4vdG9kb1VJXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW1lbnQsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gXCIuL1VJaGVscGVyXCI7XG5pbXBvcnQgeyBhZGROZXdUb2RvIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza1BhZ2UoKSB7XG4gICAgY29uc3QgYWRkVGFza1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IFxuICAgIGFkZFRhc2tQYWdlLmlkID0gJ2FkZC10YXNrLXBhZ2UnOyBcbiAgICBhZGRUYXNrUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7IFxuXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcblxuXG4gICAgY29uc3QgY2xvc2VidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY2xvc2VidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IFxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtY2xvc2UtYnV0dG9uJyk7IFxuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZUFkZFRhc2tNb2RhbCgpOyBcbiAgICB9KTtcblxuICAgIGNsb3NlYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IHVwcGVySW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBwZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgndXBwZXItdGFzay1pbnB1dHMnKTsgXG5cbiAgICB1cHBlcklucHV0cy5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbWVudCgndGV4dCcsICd0YXNrLXRpdGxlLWlucHV0JywgJ3RpdGxlJywgJ1RpdGxlOiBQYXkgQmlsbHMnLCAnaW5wdXQnKSxcbiAgICAgICAgY3JlYXRlSW5wdXRFbGVtZW50KCd0ZXh0JywgJ3Rhc2stZGV0YWlscy1pbnB1dCcsICdkZXRhaWxzJywgJ0RldGFpbHM6IGVnIGludGVybmV0LCBwaG9uZSwgcmVudC4nLCAnaW5wdXQnKVxuICAgICk7XG5cbiAgICBjb25zdCBsb3dlcklucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBsb3dlcklucHV0cy5jbGFzc0xpc3QuYWRkKCdsb3dlci10YXNrLWlucHV0cycpOyBcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1ib3gnKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonOyBcblxuICAgIGRhdGVJbnB1dC5hcHBlbmQoXG4gICAgICAgIGRhdGVMYWJlbCxcbiAgICAgICAgY3JlYXRlSW5wdXRFbGVtZW50KCdkYXRlJywgJ3Rhc2stZGF0ZScsICdkYXRlJylcbiAgICApOyBcblxuICAgIGNvbnN0IHByaW9yaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHByaW9yaXR5Qm94LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJveCcpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3RvciA9IGNyZWF0ZVByaW9yaXR5U2VsZWN0b3IoKTsgXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IFxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7IFxuXG4gICAgcHJpb3JpdHlCb3guYXBwZW5kKFxuICAgICAgICBwcmlvcml0eUxhYmVsLFxuICAgICAgICBwcmlvcml0eVNlbGVjdG9yXG4gICAgKVxuXG4gICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGRhdGVBbmRQcmlvcml0eUJveC5jbGFzc0xpc3QuYWRkKCdkYXRlLWFuZC1wcmlvcml0eScpOyBcblxuICAgIGRhdGVBbmRQcmlvcml0eUJveC5hcHBlbmQoXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgcHJpb3JpdHlCb3hcbiAgICApO1xuXG4gICAgbG93ZXJJbnB1dHMuYXBwZW5kKFxuICAgICAgICBkYXRlQW5kUHJpb3JpdHlCb3gsXG4gICAgICAgIGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0FERCBUQVNLJywgJ2FkZC10YXNrLWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgIGFkZE5ld1RvZG8oKTtcbiAgICAgICAgICAgIGNsb3NlQWRkVGFza01vZGFsKCk7IFxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmQodXBwZXJJbnB1dHMsIGxvd2VySW5wdXRzKTsgXG4gICAgYWRkVGFza1BhZ2UuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwtY29udGFpbmVyJyk7IFxuICAgIG1vZGFsQ29udGVudC5hcHBlbmQoY2xvc2VidXR0b25Db250YWluZXIsIGFkZFRhc2tQYWdlKTsgXG5cbiAgICBhZGRUYXNrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyBcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza01vZGFsKCkge1xuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stbW9kYWwnKTsgXG5cbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLW1vZGFsLWNvbnRhaW5lcicpO1xuXG5cbiAgICBhZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrTW9kYWwpOyBcblxuICAgIHJldHVybiBhZGRUYXNrTW9kYWw7IFxufVxuXG5mdW5jdGlvbiBjbG9zZUFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stbW9kYWwnKTsgLy8gQWRqdXN0IHNlbGVjdG9yIGFzIG5lZWRlZFxuICAgIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwtY29udGFpbmVyJyk7XG4gICAgaWYgKG1vZGFsQ29udGVudCkge1xuICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBhZGRUYXNrTW9kYWwgPSByZW5kZXJBZGRUYXNrTW9kYWwoKTsgXG4gICAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRUYXNrTW9kYWxDb250ZW50KCkge1xuICAgIC8vIFJlc2V0IHRleHQgaW5wdXRzXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBwZXItdGFzay1pbnB1dHMnKTtcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gdGFza0NvbnRlbnQgPyB0YXNrQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpIDogW107IFxuXG4gICAgdGFza0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJzsgXG4gICAgfSk7IFxuXG4gICAgLy8gUmVzZXQgZGF0ZSBpbnB1dFxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7IFxuICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnOyBcblxuICAgIC8vIFJlc2V0IHByaW9yaXR5IGJ1dHRvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSBidG4uZGF0YXNldC5wcmlvcml0eUNvbG9yOyAgIC8vIFJlc2V0IHRvIG9yaWdpbmFsIGJhY2tncm91bmRcbiAgICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stbW9kYWwnKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBhZGRUYXNrTW9kYWwpIHtcbiAgICAgICAgY2xvc2VBZGRUYXNrTW9kYWwoKTsgXG4gICAgICAgIC8vY2xlYXJBZGRUYXNrTW9kYWxDb250ZW50KCk7IFxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBzaG93QWRkVGFza01vZGFsKCkge1xuICAgIGxldCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stbW9kYWwnKTtcbiAgICBpZiAoIWFkZFRhc2tNb2RhbCkge1xuICAgICAgICBvcGVuQWRkVGFza01vZGFsKCk7IFxuICAgICAgICByZW5kZXJBZGRUYXNrUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlckFkZFRhc2tQYWdlKCk7XG4gICAgICAgIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHNob3dBZGRUYXNrTW9kYWwsIGNsb3NlQWRkVGFza01vZGFsIH07ICIsImZ1bmN0aW9uIHJlbmRlckRldGFpbHNNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLW1vZGFsJyk7IFxuXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1tb2RhbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscycpOyAgXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1jbG9zZS1idXR0b24nKTsgXG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlRGV0YWlsc01vZGFsKCk7IFxuICAgIH0pO1xuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kKHRvZG9EZXRhaWxzLCBjbG9zZUJ1dHRvbik7ICBcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTsgXG5cbiAgICByZXR1cm4gbW9kYWw7IFxufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvRGV0YWlscyh0b2RvKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRldGFpbHMnKTtcblxuICAgIGNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLXRpdGxlJyk7XG4gICAgZGV0YWlsc1RpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuXG4gICAgY29uc3QgZGV0YWlsc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNCb3guY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1ib3gnKTtcblxuICAgIGNvbnN0IGxlZnREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdERldGFpbHMuY2xhc3NMaXN0LmFkZCgnbGVmdC1kZXRhaWxzJyk7XG5cbiAgICBjb25zdCByaWdodERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodERldGFpbHMuY2xhc3NMaXN0LmFkZCgncmlnaHQtZGV0YWlscycpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnUHJvamVjdDonO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJ0RldGFpbHM6JztcblxuICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByb2plY3R9YDtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZG8uZm9ybWF0RGF0ZX1gO1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0RldGFpbHMudGV4dENvbnRlbnQgPSBgJHt0b2RvLmRldGFpbHN9YDtcblxuICAgIGxlZnREZXRhaWxzLmFwcGVuZChwcm9qZWN0LCBwcmlvcml0eSwgZGF0ZSwgZGV0YWlscyk7XG4gICAgcmlnaHREZXRhaWxzLmFwcGVuZCh0b2RvUHJvamVjdCwgdG9kb1ByaW9yaXR5LCB0b2RvRGF0ZSwgdG9kb0RldGFpbHMpOyBcbiAgICAgXG4gICAgZGV0YWlsc0JveC5hcHBlbmQobGVmdERldGFpbHMsIHJpZ2h0RGV0YWlscyk7IFxuXG4gICAgY29udGVudC5hcHBlbmQoZGV0YWlsc1RpdGxlLCBkZXRhaWxzQm94KTsgXG59XG5cbmZ1bmN0aW9uIGNsb3NlRGV0YWlsc01vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtbW9kYWwnKTsgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRldGFpbHMnKTtcbiAgICBpZiAobW9kYWxDb250ZW50KSB7XG4gICAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSAnJzsgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcGVuRGV0YWlsc01vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gcmVuZGVyRGV0YWlsc01vZGFsKCk7IFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IFxuICAgIHJldHVybiBtb2RhbDsgXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1tb2RhbCcpO1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgIGNsb3NlRGV0YWlsc01vZGFsKCk7IFxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBzaG93RGV0YWlsc01vZGFsKHRvZG8pIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1tb2RhbCcpO1xuICAgIGlmICghbW9kYWwpIHtcbiAgICAgICAgb3BlbkRldGFpbHNNb2RhbCgpOyBcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIHJlbmRlclRvZG9EZXRhaWxzKHRvZG8pO1xufVxuXG5leHBvcnQgeyBzaG93RGV0YWlsc01vZGFsIH07IFxuIiwiaW1wb3J0IHsgY3JlYXRlRmlsbGVkUHJpcm9pdHlTZWxlY3RvciB9IGZyb20gXCIuL3RvZG9VSVwiO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBjcmVhdGVWYWx1ZUlucHV0RWxlbWVudCB9IGZyb20gXCIuL1VJaGVscGVyXCI7XG5pbXBvcnQgeyBlZGl0VG9kb0FuZERldGFpbHMgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJFZGl0TW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZWRpdC1tb2RhbCcpOyBcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kYWwtY29udGFpbmVyJyk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTsgXG5cbiAgICByZXR1cm4gbW9kYWw7IFxufVxuXG5mdW5jdGlvbiByZW5kZXJFZGl0UGFnZSh0b2RvLCBpbmRleCkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyBcbiAgICBlZGl0Rm9ybS5pZCA9ICdlZGl0LXBhZ2UnOyBcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0LXBhZ2UnKTsgXG5cbiAgICBjb25zdCBlZGl0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRDb250ZW50LmlkID0gJ2VkaXQtYycgKyBpbmRleDsgXG4gICAgZWRpdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZWRpdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBjbG9zZWJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjbG9zZWJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1jbG9zZS1idXR0b24nKTsgXG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlRWRpdE1vZGFsKCk7IFxuICAgIH0pO1xuXG4gICAgY2xvc2VidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgY29uc3QgdXBwZXJJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1cHBlcklucHV0cy5jbGFzc0xpc3QuYWRkKCd1cHBlci10b2RvLWlucHV0cycpOyBcblxuICAgIHVwcGVySW5wdXRzLmFwcGVuZChcbiAgICAgICAgY3JlYXRlVmFsdWVJbnB1dEVsZW1lbnQoJ3RleHQnLCAnZWRpdC10aXRsZS1pbnB1dCcsICd0aXRsZScsIGAke3RvZG8udGl0bGV9YCwgJ2lucHV0JyksXG4gICAgICAgIGNyZWF0ZVZhbHVlSW5wdXRFbGVtZW50KCd0ZXh0JywgJ2VkaXQtZGV0YWlscy1pbnB1dCcsICdkZXRhaWxzJywgYCR7dG9kby5kZXRhaWxzfWAsICdpbnB1dCcpXG4gICAgKTtcblxuICAgIGNvbnN0IGxvd2VySW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGxvd2VySW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2xvd2VyLXRvZG8taW5wdXRzJyk7IFxuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlLWJveCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7IFxuXG4gICAgZGF0ZUlucHV0LmFwcGVuZChcbiAgICAgICAgZGF0ZUxhYmVsLFxuICAgICAgICBjcmVhdGVWYWx1ZUlucHV0RWxlbWVudCgnZGF0ZScsICdlZGl0LWRhdGUnLCAnZWRpdC1kYXRlJywgYCR7dG9kby5kYXRlfWApXG4gICAgKTsgXG5cblxuICAgIGNvbnN0IHByaW9yaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHByaW9yaXR5Qm94LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJveCcpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3RvciA9IGNyZWF0ZUZpbGxlZFByaXJvaXR5U2VsZWN0b3IodG9kby5wcmlvcml0eSk7IFxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyBcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnOyBcblxuXG4gICAgcHJpb3JpdHlCb3guYXBwZW5kKFxuICAgICAgICBwcmlvcml0eUxhYmVsLFxuICAgICAgICBwcmlvcml0eVNlbGVjdG9yXG4gICAgKVxuXG4gICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGRhdGVBbmRQcmlvcml0eUJveC5jbGFzc0xpc3QuYWRkKCdkYXRlLWFuZC1wcmlvcml0eScpOyBcblxuICAgIGRhdGVBbmRQcmlvcml0eUJveC5hcHBlbmQoXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgcHJpb3JpdHlCb3hcbiAgICApO1xuXG4gICAgbG93ZXJJbnB1dHMuYXBwZW5kKFxuICAgICAgICBkYXRlQW5kUHJpb3JpdHlCb3gsXG4gICAgICAgIGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NPTkZJUk0gRURJVCcsICdjb25maXJtLWVkaXQtYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdFRvZG9BbmREZXRhaWxzKGluZGV4KTsgXG4gICAgICAgICAgICBjbG9zZUVkaXRNb2RhbCgpOyBcbiAgICAgICAgfSkgXG4gICAgKTtcbiAgICBcbiAgICBlZGl0Q29udGVudC5hcHBlbmQodXBwZXJJbnB1dHMsIGxvd2VySW5wdXRzKTsgXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdENvbnRlbnQpOyBcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW1vZGFsLWNvbnRhaW5lcicpOyBcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKGNsb3NlYnV0dG9uQ29udGFpbmVyLCBlZGl0Rm9ybSk7IFxuXG4gICAgZWRpdENvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgXG59XG5cblxuZnVuY3Rpb24gY2xvc2VFZGl0TW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1tb2RhbCcpOyBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kYWwtY29udGFpbmVyJyk7XG4gICAgaWYgKG1vZGFsQ29udGVudCkge1xuICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IHJlbmRlckVkaXRNb2RhbCgpOyBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyBcbiAgICByZXR1cm4gbW9kYWw7IFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kYWwnKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgICBjbG9zZUVkaXRNb2RhbCgpOyBcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc2hvd0VkaXRNb2RhbCh0b2RvLCBpbmRleCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW1vZGFsJyk7XG4gICAgaWYgKCFtb2RhbCkge1xuICAgICAgICBvcGVuRWRpdE1vZGFsKCk7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG4gICAgcmVuZGVyRWRpdFBhZ2UodG9kbywgaW5kZXgpO1xufVxuXG5leHBvcnQgeyBzaG93RWRpdE1vZGFsIH07IFxuIiwiaW1wb3J0IHsgaGlkZUFsbEhvbWVQYWdlcyxcbiAgICBjcmVhdGVCdXR0b24sIFxuICAgIGNyZWF0ZUljb25CdXR0b24sIFxuICAgIGdldEN1cnJlbnRQcm9qZWN0UGFnZUluZGV4LFxuICAgIGRlbGV0ZVRvZG9FbGVtZW50cyxcbiAgICBkZWxldGVUb2RvRWxlbWVudEluVG9kYXksXG4gICAgZGVsZXRlVG9kb0VsZW1lbnRJbldlZWssXG4gICAgdXBkYXRlRXhpc3RpbmdUb2RvQm94LFxuICAgIGdldFNlbGVjdGVkUHJpb3JpdHksIFxuICAgIGRlbGV0ZVN0b3JlZFRvZG9zLFxuICAgIGRlbGV0ZVN0b3JlZFRvZGF5VG9kb3MsXG4gICAgZGVsZXRlU3RvcmVkV2Vla1RvZG9zLFxuICAgIGlzVmlzaWJsZSB9IGZyb20gXCIuL1VJaGVscGVyXCI7XG5pbXBvcnQgeyBUb2RvLCBUb2RvTGlzdCB9IGZyb20gXCIuL3RvZG9Mb2dpY1wiO1xuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBmb3JtYXQsIGlzVG9kYXksIGlzVGhpc0lTT1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGdldFByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHBhZ2VcIjtcbmltcG9ydCB7IHNob3dEZXRhaWxzTW9kYWwgfSBmcm9tIFwiLi9kZXRhaWxzTW9kYWxcIjtcbmltcG9ydCB7IHNob3dFZGl0TW9kYWwgfSBmcm9tIFwiLi9lZGl0TW9kYWxcIjtcblxuY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTsgXG5jb25zdCB0b2RheVRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5jb25zdCB3ZWVrVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTsgXG5jb25zdCBzdG9yZWRUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSB8fCBcIltdXCIpO1xuY29uc3QgbXlUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdChzdG9yZWRUb2Rvcyk7XG5jb25zdCBzdG9yZWRUb2RheVRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZGF5VG9kb3NcIikgfHwgXCJbXVwiKTsgXG5jb25zdCB0b2RheUxpc3QgPSBuZXcgVG9kb0xpc3Qoc3RvcmVkVG9kYXlUb2Rvcyk7IFxuY29uc3Qgc3RvcmVkV2Vla1RvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndlZWtUb2Rvc1wiKSB8fCBcIltdXCIpOyBcbmNvbnN0IHdlZWtMaXN0ID0gbmV3IFRvZG9MaXN0KHN0b3JlZFdlZWtUb2Rvcyk7IFxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Cb3goKSB7XG4gICAgY29uc3QgaG9tZXBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVwYWdlLXRvZG8tY29udGVudCcpO1xuICAgIFxuICAgIGlmIChob21lcGFnZUNvbnRlbnQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRvZG9Cb3ggYW5kIGFwcGVuZCBpdCB0byB0aGUgaG9tZXBhZ2VcbiAgICAgICAgY29uc3QgbmV3VG9kb0JveCA9IHJlbmRlclRvZG9Cb3godG9kb0xpc3QpO1xuICAgICAgICBob21lcGFnZUNvbnRlbnQucHJlcGVuZChuZXdUb2RvQm94KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Cb3hJblByb2plY3QoaW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRpdmlkdWFsLXByb2plY3QtcGFnZScgKyBpbmRleCk7XG4gICAgY29uc3QgZ3JhbmRjaGlsZCA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pLXByb2plY3QtY29udGVudCAuaS1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC10b2RvLWNvbnRlbnQnKTtcblxuICAgIGlmIChwcm9qZWN0Q29udGVudCkge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdG9kb0JveCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwcm9qZWN0cGFnZVxuICAgICAgICBjb25zdCBuZXdUb2RvQm94ID0gcmVuZGVyVG9kb0JveCh0b2RvTGlzdCk7XG4gICAgICAgIGdyYW5kY2hpbGQucHJlcGVuZChuZXdUb2RvQm94KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Cb3hJblRvZGF5KCkge1xuICAgIGNvbnN0IHRvZGF5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheXBhZ2UtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZ3JhbmRjaGlsZCA9IHRvZGF5Q29udGVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlwYWdlLWNvbnRlbnQgLnRvZGF5cGFnZS10b2RvLWNvbnRlbnQnKTtcblxuICAgIGlmICh0b2RheUNvbnRlbnQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRvZG9Cb3ggYW5kIGFwcGVuZCBpdCB0byB0aGUgcHJvamVjdHBhZ2VcbiAgICAgICAgY29uc3QgbmV3VG9kb0JveCA9IHJlbmRlclRvZG9Cb3godG9kb0xpc3QpO1xuICAgICAgICBncmFuZGNoaWxkLnByZXBlbmQobmV3VG9kb0JveCk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Cb3hJbldlZWsoKSB7XG4gICAgY29uc3QgdGhpc3dlZWtDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXN3ZWVrcGFnZS1jb250YWluZXInKTtcbiAgICBjb25zdCBncmFuZGNoaWxkID0gdGhpc3dlZWtDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGlzd2Vla3BhZ2UtY29udGVudCAudGhpc3dlZWtwYWdlLXRvZG8tY29udGVudCcpO1xuXG4gICAgaWYgKHRoaXN3ZWVrQ29udGVudCkge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdG9kb0JveCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwcm9qZWN0cGFnZVxuICAgICAgICBjb25zdCBuZXdUb2RvQm94ID0gcmVuZGVyVG9kb0JveCh0b2RvTGlzdCk7XG4gICAgICAgIGdyYW5kY2hpbGQucHJlcGVuZChuZXdUb2RvQm94KTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0JveCh0b2RvTGlzdCkge1xuICAgIGNvbnN0IHRvZG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQm94LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm94Jyk7IFxuXG4gICAgbGV0IGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gSWYgaG9tZXBhZ2UgaXMgaW4gdmlldywgYXBwZW5kIG9ubHkgdGhlIGxhdGVzdCB0b2RvXG4gICAgaWYgKGhvbWVwYWdlICYmIHRvZG9MaXN0LnRvZG9zLmxlbmd0aCA+IDApIHsgXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QudG9kb3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbGF0ZXN0VG9kbyA9IHRvZG9MaXN0LnRvZG9zW3RvZG9MaXN0LnRvZG9zLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGNyZWF0ZVRvZG9FbGVtZW50KGxhdGVzdFRvZG8sIGluZGV4KTtcbiAgICAgICAgdG9kb0JveC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgaG9tZXBhZ2UgaXMgbm90IGluIHZpZXcsIGFwcGVuZCB0aGUgZW50aXJlIGxpc3RcbiAgICAgICAgdG9kb0xpc3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gY3JlYXRlVG9kb0VsZW1lbnQodG9kbywgaW5kZXgpO1xuICAgICAgICAgICAgdG9kb0JveC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdG9kb0JveDsgXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9Cb3hlc0luSG9tZSh0b2RvTGlzdCkge1xuICAgIGNvbnN0IHRvZG9ib3hlcyA9IFtdOyBcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lcGFnZS10b2RvLWNvbnRlbnQnKVxuICAgIHRvZG9MaXN0LnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpOyAgXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gY3JlYXRlVG9kb0VsZW1lbnQodG9kbywgaW5kZXgpO1xuICAgICAgICB0b2RvQm94LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgdG9kb2JveGVzLnB1c2godG9kb0JveCk7XG4gICAgfSk7XG5cbiAgICB0b2RvYm94ZXMuZm9yRWFjaCh0b2RvYm94ID0+IGhvbWVwYWdlLnByZXBlbmQodG9kb2JveCkpOyBcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3RvcmVkVG9kb0JveGVzSW5Ib21lKHRvZG9MaXN0KSB7XG4gICAgY29uc3QgdG9kb2JveGVzID0gW107IFxuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVwYWdlLXRvZG8tY29udGVudCcpXG4gICAgdG9kb0xpc3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQm94LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm94Jyk7ICBcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBjcmVhdGVUb2RvRWxlbWVudCh0b2RvLCBpbmRleCk7XG4gICAgICAgIHRvZG9Cb3guYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgICAgICB0b2RvYm94ZXMucHVzaCh0b2RvQm94KTtcbiAgICB9KTtcblxuICAgIHRvZG9ib3hlcy5mb3JFYWNoKHRvZG9ib3ggPT4gaG9tZXBhZ2UucHJlcGVuZCh0b2RvYm94KSk7IFxufVxuXG5mdW5jdGlvbiByZW5kZXJTdG9yZWRUb2RvQm94ZXNJblRvZGF5KHRvZG9MaXN0KSB7XG4gICAgY29uc3QgdG9kb2JveGVzID0gW107IFxuICAgIGNvbnN0IHRvcGRheVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlwYWdlLXRvZG8tY29udGVudCcpXG4gICAgdG9kb0xpc3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQm94LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm94Jyk7ICBcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBjcmVhdGVUb2RvRWxlbWVudCh0b2RvLCBpbmRleCk7XG4gICAgICAgIHRvZG9Cb3guYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgICAgICB0b2RvYm94ZXMucHVzaCh0b2RvQm94KTtcbiAgICB9KTtcblxuICAgIHRvZG9ib3hlcy5mb3JFYWNoKHRvZG9ib3ggPT4gdG9wZGF5UGFnZS5wcmVwZW5kKHRvZG9ib3gpKTsgXG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0b3JlZFRvZG9Cb3hlc0luV2Vlayh0b2RvTGlzdCkge1xuICAgIGNvbnN0IHRvZG9ib3hlcyA9IFtdOyBcbiAgICBjb25zdCB3ZWVrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGlzd2Vla3BhZ2UtdG9kby1jb250ZW50JylcbiAgICB0b2RvTGlzdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Cb3guY2xhc3NMaXN0LmFkZCgndG9kby1ib3gnKTsgIFxuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGNyZWF0ZVRvZG9FbGVtZW50KHRvZG8sIGluZGV4KTtcbiAgICAgICAgdG9kb0JveC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgIHRvZG9ib3hlcy5wdXNoKHRvZG9Cb3gpO1xuICAgIH0pO1xuXG4gICAgdG9kb2JveGVzLmZvckVhY2godG9kb2JveCA9PiB3ZWVrUGFnZS5wcmVwZW5kKHRvZG9ib3gpKTsgXG59XG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9FbGVtZW50KHRvZG8sIGluZGV4KSB7XG4gICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnKTtcbiAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7IFxuXG4gICAgY29uc3QgY2hlY2tib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXdyYXBwZXItMTknKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgdGhlIGNoZWNrYm94IGlucHV0XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1jaGVja2JveC1pbmRleCcsIGluZGV4KTtcbiAgICBjb25zdCBjaGVja2JveElEID0gJ2NidGVzdC0xOSc7XG4gICAgY2hlY2tib3guaWQgPSBjaGVja2JveElEOyBcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrYm94Jyk7IC8vIEFkZGVkICdjaGVja2JveCcgZm9yIHNlbGVjdGlvblxuICAgIFxuICAgIC8vIENyZWF0ZSB0aGUgbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2stYm94Jyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNoZWNrYm94LWluZGV4JywgaW5kZXgpO1xuICAgIFxuICAgIFxuICAgIC8vIEFwcGVuZCB0aGUgY2hlY2tib3ggYW5kIGxhYmVsIHRvIHRoZSB3cmFwcGVyXG4gICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZChjaGVja2JveCwgbGFiZWwpO1xuICAgIFxuICAgIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtdGV4dCcpOyBcbiAgICBkYXRlVGV4dC5hcHBlbmQodG9kby5mb3JtYXREYXRlKTsgXG5cbiAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVUQUlMUycsICdkZXRhaWxzLWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgc2hvd0RldGFpbHNNb2RhbCh0b2RvTGlzdC50b2Rvc1tpbmRleF0pO1xuICAgIH0pOyBcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVJY29uQnV0dG9uKCdidXR0b24nLCAnZWRpdC1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgIHNob3dFZGl0TW9kYWwodG9kb0xpc3QudG9kb3NbaW5kZXhdLCBpbmRleCk7XG4gICAgfSk7IFxuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlSWNvbkJ1dHRvbignYnV0dG9uJywgJ2RlbGV0ZS1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRvZG9FbGVtZW50cyhpbmRleCk7XG4gICAgICAgIGRlbGV0ZVN0b3JlZFRvZG9zKGluZGV4KTsgXG4gICAgICAgIGRlbGV0ZVN0b3JlZFRvZGF5VG9kb3MoaW5kZXgpOyBcbiAgICAgICAgZGVsZXRlU3RvcmVkV2Vla1RvZG9zKGluZGV4KTsgXG4gICAgfSk7IFxuXG4gICAgY29uc3QgbGVmdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGxlZnRJdGVtcy5jbGFzc0xpc3QuYWRkKCdsZWZ0LWJhcicpOyBcbiAgICBjb25zdCByaWdodEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHJpZ2h0SXRlbXMuY2xhc3NMaXN0LmFkZCgncmlnaHQtYmFyJyk7IFxuICAgIGNvbnN0IHJpZ2h0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWJ1dHRvbnMnKTsgXG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlOyBcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuXG4gICAgbGVmdEl0ZW1zLmFwcGVuZChjaGVja2JveFdyYXBwZXIsIHRvZG9UaXRsZSk7IFxuICAgIHJpZ2h0QnV0dG9ucy5hcHBlbmQoZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICByaWdodEl0ZW1zLmFwcGVuZChkZXRhaWxzQnV0dG9uLCBkYXRlVGV4dCwgcmlnaHRCdXR0b25zKTsgXG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kKGxlZnRJdGVtcywgcmlnaHRJdGVtcyk7IFxuXG4gICAgcmV0dXJuIHRvZG9FbGVtZW50O1xufVxuXG5cbmZ1bmN0aW9uIGVkaXRUb2RvQW5kRGV0YWlscyhpbmRleCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgIC8vIFJldHJpZXZlIHRoZSBlZGl0IGZvcm0gY29udGVudCBmaXJzdCB0byBnZXQgdGhlIG5ldyB2YWx1ZXNcbiAgICBjb25zdCBlZGl0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWMnICsgaW5kZXgpO1xuICAgIGNvbnN0IG5ld1RpdGxlID0gZWRpdENvbnRlbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUtaW5wdXQnKS52YWx1ZTsgXG4gICAgbGV0IG5ld0RhdGUgPSBlZGl0Q29udGVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJykudmFsdWUudHJpbSgpOyBcbiAgICBjb25zdCBmb3JtYXR0ZWROZXdEYXRlID0gZm9ybWF0KG5ldyBEYXRlKG5ld0RhdGUpLCBcIkxMTCBkb1wiKTtcbiAgICBjb25zdCBuZXdEZXRhaWxzID0gZWRpdENvbnRlbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGV0YWlscy1pbnB1dCcpLnZhbHVlOyBcbiAgICBjb25zdCBwcmlvcml0eSA9IGVkaXRDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpOyBcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5LnRleHRDb250ZW50OyBcblxuICAgIC8vIFVwZGF0ZSB0aGUgdG9kbyBpdGVtIGluIFRvZG9MaXN0XG4gICAgdG9kb0xpc3QudG9kb3NbaW5kZXhdXG4gICAgICAgIC5jaGFuZ2VUaXRsZShuZXdUaXRsZSlcbiAgICAgICAgLmNoYW5nZURhdGUobmV3RGF0ZSlcbiAgICAgICAgLmNoYW5nZURldGFpbHMobmV3RGV0YWlscylcbiAgICAgICAgLmNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICAgICAgXG5cbiAgICBpZiAoaXNUb2RheShuZXdEYXRlKSkge1xuICAgICAgICBjb25zdCBleGlzdGluZ1RvZG9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kYXlwYWdlLWNvbnRhaW5lciAudG9kby1lbGVtZW50W2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgICAgICBpZiAoZXhpc3RpbmdUb2RvQm94KSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGV4aXN0aW5nIHRvZG8gYm94XG4gICAgICAgICAgICB1cGRhdGVFeGlzdGluZ1RvZG9Cb3goZXhpc3RpbmdUb2RvQm94LCBuZXdUaXRsZSwgZm9ybWF0dGVkTmV3RGF0ZSwgbmV3RGV0YWlscywgbmV3UHJpb3JpdHkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGQgYSBuZXcgdG9kbyBib3ggdG8gJ3RvZGF5cGFnZSdcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9Cb3hJblRvZGF5KCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGVUb2RvRWxlbWVudEluVG9kYXkoaW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChpc1RoaXNJU09XZWVrKG5ld0RhdGUpKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9kb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0aGlzd2Vla3BhZ2UtY29udGFpbmVyIC50b2RvLWVsZW1lbnRbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgIGlmIChleGlzdGluZ1RvZG9Cb3gpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZXhpc3RpbmcgdG9kbyBib3hcbiAgICAgICAgICAgIHVwZGF0ZUV4aXN0aW5nVG9kb0JveChleGlzdGluZ1RvZG9Cb3gsIG5ld1RpdGxlLCBmb3JtYXR0ZWROZXdEYXRlLCBuZXdEZXRhaWxzLCBuZXdQcmlvcml0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGQgYSBuZXcgdG9kbyBib3ggdG8gJ3RvZGF5cGFnZSdcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9Cb3hJbldlZWsoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZVRvZG9FbGVtZW50SW5XZWVrKGluZGV4KTtcbiAgICB9IFxuXG4gICAgLy8gVXBkYXRlIHRoZSBET00gZWxlbWVudHMgZm9yIHRoZSB0b2RvIGl0ZW0gZGlzcGxheVxuICAgIGNvbnN0IHRvZG9Cb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblxuICAgIHRvZG9Cb3hlcy5mb3JFYWNoKHRvZG9Cb3ggPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSB0b2RvQm94LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gdG9kb0JveC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS10ZXh0Jyk7XG4gICAgXG4gICAgICAgIGlmICh0aXRsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChkYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShuZXdEYXRlKSwgXCJMTEwgZG9cIik7XG4gICAgICAgICAgICBkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGU7XG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpIHtcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBob21lcGFnZS5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2VzJyk7IFxuICAgIGhvbWVwYWdlLmlkID0gJ2hvbWVwYWdlLWNvbnRhaW5lcic7IFxuXG4gICAgY29uc3QgaG9tZXBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGhvbWVwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1jb250ZW50Jyk7IFxuXG4gICAgY29uc3QgaG9tZXBhZ2VUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBob21lcGFnZVRvZG9zLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlLXRvZG8tY29udGVudCcpO1xuXG4gICAgY29uc3QgaG9tZXBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBob21lcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtdGl0bGUnKTsgXG4gICAgaG9tZXBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICfwn4+gIEFsbCBUYXNrcyc7XG5cbiAgICBob21lcGFnZUNvbnRlbnQuYXBwZW5kKGhvbWVwYWdlVGl0bGUsIGhvbWVwYWdlVG9kb3MpOyBcbiAgICBcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnQpOyBcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpOyBcbiAgICBcbiAgICBob21lcGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgXG59XG5cblxuZnVuY3Rpb24gYWRkTmV3VG9kbygpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLW1vZGFsJyk7IFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7IFxuXG4gICAgLy8gR2V0IHZhbHVlcyBmcm9tIGlucHV0IGZpZWxkc1xuICAgIGxldCB0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJvamVjdDtcbiAgICBpZiAoaXNWaXNpYmxlKGFkZFRhc2tNb2RhbCkpIHtcbiAgICAgICAgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKS52YWx1ZTsgXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUtaW5wdXQnKS52YWx1ZTsgXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTsgXG4gICAgICAgIGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXRhaWxzLWlucHV0JykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RQYWdlSW5kZXggPSBnZXRDdXJyZW50UHJvamVjdFBhZ2VJbmRleCgpOyBcbiAgICAgICAgcHJvamVjdCA9IGdldFByb2plY3RMaXN0KCkuZ2V0VGl0bGVPZkluZGV4KHByb2plY3RQYWdlSW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICB9IGVsc2UgaWYgKGlzVmlzaWJsZSl7XG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTsgXG4gICAgICAgIGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgcHJvamVjdCA9ICdIb21lJzsgXG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBnZXRTZWxlY3RlZFByaW9yaXR5KCk7XG4gICAgXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgICBpZiAoIXRvZG9MaXN0LmRvZXNUaXRsZUV4aXN0KG5ld1RvZG8pKSB7XG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0LnRvZG9zKSk7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgdGl0bGUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgYWxlcnQgKGBBIHRvZG8gd2l0aCB0aGUgdGl0bGUgXCIke25ld1RvZG8udGl0bGV9XCIgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNWaXNpYmxlKGFkZFRhc2tNb2RhbCkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGV0YWlscy1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIGlmKGlzVmlzaWJsZShtb2RhbCkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gYnRuLmRhdGFzZXQucHJpb3JpdHlDb2xvcjsgXG4gICAgfSk7XG5cbiAgICBpZiAoYWRkVGFza01vZGFsKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RMaXN0KCk7IFxuICAgICAgICBjb25zb2xlLmxvZyhnZXRQcm9qZWN0TGlzdCk7IFxuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5nZXRJbmRleE9mVGl0bGUocHJvamVjdCk7IFxuXG4gICAgICAgIHVwZGF0ZVRvZG9Cb3hJblByb2plY3QoaW5kZXgpOyBcbiAgICB9XG5cbiAgICBpZiAoaXNUb2RheShuZXdUb2RvLmRhdGUpKSB7XG4gICAgICAgIHVwZGF0ZVRvZG9Cb3hJblRvZGF5KCk7XG4gICAgICAgIHRvZGF5VG9kb0xpc3QuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5VG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RheVRvZG9MaXN0LnRvZG9zKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzVGhpc0lTT1dlZWsobmV3VG9kby5kYXRlKSkge1xuICAgICAgICB1cGRhdGVUb2RvQm94SW5XZWVrKCk7XG4gICAgICAgIHdlZWtUb2RvTGlzdC5hZGRUb2RvKG5ld1RvZG8pOyBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlZWtUb2RvcycsIEpTT04uc3RyaW5naWZ5KHdlZWtUb2RvTGlzdC50b2RvcykpOyBcbiAgICB9IFxuICAgIFxuICAgIFxuICAgIC8vIFVwZGF0ZSB0aGUgaG9tZXBhZ2UgdG8gZGlzcGxheSB0aGUgbmV3IHRvZG9cbiAgICB1cGRhdGVUb2RvQm94KCk7IFxuICAgIC8vY2xvc2UgbW9kYWwgYWZ0ZXIgYWRkaW5nXG4gICAgY2xvc2VNb2RhbCgpOyBcbn1cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudG9kby1jaGVja2JveCcpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jaGVja2JveC1pbmRleCcpO1xuICAgICAgICAvLyBUb2dnbGUgY29tcGxldGlvbiBzdGF0ZSBmb3IgdG9kbyBpdGVtcyB3aXRoIHRoZSBzYW1lIGluZGV4XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50b2RvLWVsZW1lbnRbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCkuZm9yRWFjaCh0b2RvRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpO1xuICAgICAgICAgICAgaWYgKHRvZG9UaXRsZSkge1xuICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLXRpdGxlLWNvbXBsZXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndG9kby1lbGVtZW50LWNvbXBsZXRlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc2hvd0hvbWVQYWdlKCkge1xuICAgIGhpZGVBbGxIb21lUGFnZXMoKTsgXG4gICAgbGV0IGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlLWNvbnRhaW5lcicpO1xuICAgIGlmICghaG9tZXBhZ2UpIHtcbiAgICAgICAgcmVuZGVySG9tZVBhZ2UoKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG9tZXBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAvLyBJbml0aWFsaXplIHdpdGggc3RvcmVkIHRvZG9zXG4gICAgc3RvcmVkVG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG9MaXN0LmFkZFRvZG8obmV3IFRvZG8odG9kby50aXRsZSwgdG9kby5kZXRhaWxzLCB0b2RvLmRhdGUsIHRvZG8ucHJpb3JpdHksIHRvZG8ucHJvamVjdCkpKTtcblxuICAgIHN0b3JlZFRvZGF5VG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZGF5VG9kb0xpc3QuYWRkVG9kbyhuZXcgVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRldGFpbHMsIHRvZG8uZGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5wcm9qZWN0KSkpO1xuXG4gICAgc3RvcmVkV2Vla1RvZG9zLmZvckVhY2godG9kbyA9PiB3ZWVrVG9kb0xpc3QuYWRkVG9kbyhuZXcgVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRldGFpbHMsIHRvZG8uZGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5wcm9qZWN0KSkpO1xuXG4gICAgcmVuZGVyU3RvcmVkVG9kb0JveGVzSW5Ib21lKG15VG9kb0xpc3QpO1xuICAgIHJlbmRlclN0b3JlZFRvZG9Cb3hlc0luVG9kYXkodG9kYXlMaXN0KTsgXG4gICAgcmVuZGVyU3RvcmVkVG9kb0JveGVzSW5XZWVrKHdlZWtMaXN0KTsgXG5cbiAgICBcbn0pO1xuXG5leHBvcnQgeyBzaG93SG9tZVBhZ2UsIGFkZE5ld1RvZG8sIGVkaXRUb2RvQW5kRGV0YWlscyB9OyAiLCJcbmltcG9ydCB7IHNob3dBZGRUYXNrTW9kYWwgfSBmcm9tIFwiLi9hZGRUYXNrTW9kYWxcIjtcbmltcG9ydCB7IGhpZGVBbGxIb21lUGFnZXMgfSBmcm9tIFwiLi9VSWhlbHBlclwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgaW5kaXZpZHVhbFByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGluZGl2aWR1YWxQcm9qZWN0UGFnZS5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2VzJyk7XG4gICAgaW5kaXZpZHVhbFByb2plY3RQYWdlLmlkID0gJ2luZGl2aWR1YWwtcHJvamVjdC1wYWdlJyArIGluZGV4OyBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdpLXByb2plY3QtY29udGVudCcpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaS1wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgdG9kb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWNvbnRlbnQnKVxuICAgIFxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRvZG9Db250ZW50LCByZW5kZXJBZGRUb2RvKCkpOyBcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2ktcHJvamVjdC10aXRsZScpOyBcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBgUHJvamVjdDpgOyBcblxuICAgIGNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICB0aXRsZU5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS1uYW1lJyk7IFxuICAgIHRpdGxlTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7IFxuICAgIFxuICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICB0aXRsZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGVudCcpO1xuXG4gICAgdGl0bGVDb250ZW50LmFwcGVuZCh0aXRsZVRleHQsIHRpdGxlTmFtZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZCh0aXRsZUNvbnRlbnQsIHByb2plY3RDb250YWluZXIpOyBcbiAgICBpbmRpdmlkdWFsUHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHBhZ2UtY29udGFpbmVyJyk7IFxuICAgIG1haW5Qcm9qZWN0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7IFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFByb2plY3RQYWdlKTsgXG5cbiAgICBpbmRpdmlkdWFsUHJvamVjdFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUb2RvKCkge1xuICAgIGNvbnN0IGFkZFRvZG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgYWRkVG9kb0JveC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1ib3gnKTtcbiAgICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY29udGVudCcpO1xuXG4gICAgY29uc3QgcGx1c1N5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBwbHVzU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ3BsdXMtc3ltYm9sJyk7XG4gICAgcGx1c1N5bWJvbC50ZXh0Q29udGVudCA9ICcrJzsgXG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJzsgICAgXG5cbiAgICBjb250ZW50LmFwcGVuZChwbHVzU3ltYm9sLCBhZGRUYXNrKTtcbiAgICBhZGRUb2RvQm94LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgYWRkVG9kb0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0FkZFRhc2tNb2RhbCgpOyBcbiAgICB9KTtcblxuICAgIHJldHVybiBhZGRUb2RvQm94O1xufVxuXG5mdW5jdGlvbiBzaG93SWRpdmlkdWFsUHJvamVjdFBhZ2UocHJvamVjdCwgaW5kZXgpIHtcbiAgICBoaWRlQWxsSG9tZVBhZ2VzKCk7IFxuICAgIGxldCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRpdmlkdWFsLXByb2plY3QtcGFnZScgKyBpbmRleCk7XG4gICAgaWYgKCFob21lcGFnZSkge1xuICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QsIGluZGV4KTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG9tZXBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBzaG93SWRpdmlkdWFsUHJvamVjdFBhZ2UgfTsgXG4iLCJpbXBvcnQgeyBzaG93VG9Eb1BhZ2UgfSBmcm9tIFwiLi90b2RvVUlcIjtcbmltcG9ydCBzaG93UHJvamVjdFBhZ2UgZnJvbSBcIi4vcHJvamVjdFVJXCI7XG5pbXBvcnQgeyBzaG93Tm90ZVBhZ2UgfSBmcm9tIFwiLi9ub3RlVUlcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiwgaXNWaXNpYmxlIH0gZnJvbSBcIi4vVUloZWxwZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxIZWFkZXIobW9kYWwpIHtcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTsgXG4gICAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgbmV3Li4uJzsgXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTsgXG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG4gICAgICAgIGNsZWFyTW9kYWxDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7IFxuXG4gICAgcmV0dXJuIG1vZGFsSGVhZGVyOyBcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxTaWRlYmFyKCkge1xuICAgIGNvbnN0IG1vZGFsU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBtb2RhbFNpZGViYXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2lkZWJhcicpOyBcblxuICAgIGNvbnN0IHNpZGViYXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHNpZGViYXJPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNpZGViYXItb3B0aW9ucycpO1xuICAgIHNpZGViYXJPcHRpb25zLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQnV0dG9uKCdsaScsICdUbyBEbycsICdtb2RhbC1idXR0b24nLCAoKSA9PiBzaG93VG9Eb1BhZ2UoKSksXG4gICAgICAgIGNyZWF0ZUJ1dHRvbignbGknLCAnUHJvamVjdCcsICAnbW9kYWwtYnV0dG9uJywgKCkgPT4gc2hvd1Byb2plY3RQYWdlKCkpLFxuICAgICAgICBjcmVhdGVCdXR0b24oJ2xpJywgJ05vdGUnLCAgJ21vZGFsLWJ1dHRvbicsICgpID0+IHNob3dOb3RlUGFnZSgpKVxuICAgICk7IFxuXG4gICAgbW9kYWxTaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJPcHRpb25zKTsgXG5cbiAgICByZXR1cm4gbW9kYWxTaWRlYmFyOyBcbn1cblxuZnVuY3Rpb24gcmVuZGVyTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTsgXG5cbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gY3JlYXRlTW9kYWxIZWFkZXIobW9kYWwpO1xuICAgIGNvbnN0IG1vZGFsU2lkZUJhciA9IGNyZWF0ZU1vZGFsU2lkZWJhcigpOyBcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpOyBcblxuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgXG4gICAgbW9kYWxUZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXRleHQnKTsgXG5cbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsU2lkZUJhciwgbW9kYWxUZXh0KVxuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kKG1vZGFsSGVhZGVyLCBtb2RhbENvbnRlbnQpOyAgXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7IFxuXG4gICAgcmV0dXJuIG1vZGFsOyBcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1tb2RhbCcpO1xuICAgIFxuICAgIGlmIChpc1Zpc2libGUobW9kYWwpKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGlmIChpc1Zpc2libGUocHJvamVjdE1vZGFsKSkge1xuICAgICAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IHJlbmRlck1vZGFsKCk7IFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJNb2RhbENvbnRlbnQoKSB7XG4gICAgLy9yZXNldCB0ZXh0IGlucHV0c1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcGFnZScpO1xuICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwcGVyLXRvZG8taW5wdXRzJyk7XG4gICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS11cHBlcicpOyBcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0SW5wdXRzID0gcHJvamVjdENvbnRlbnQgPyBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpIDogW107IFxuICAgIGNvbnN0IHRvZG9JbnB1dHMgPSB0b2RvQ29udGVudCA/IHRvZG9Db250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykgOiBbXTsgXG4gICAgY29uc3Qgbm90ZUlucHV0cyA9IG5vdGVDb250ZW50ID8gbm90ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSA6IFtdOyBcblxuICAgIGNvbnN0IGFsbElucHV0cyA9IEFycmF5LmZyb20ocHJvamVjdElucHV0cykuY29uY2F0KEFycmF5LmZyb20odG9kb0lucHV0cyksIEFycmF5LmZyb20obm90ZUlucHV0cykpO1xuXG4gICAgYWxsSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnOyBcbiAgICB9KTsgXG5cbiAgICAvL3Jlc2V0IGRhdGUgaW5wdXRcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpOyBcbiAgICBkYXRlSW5wdXQudmFsdWUgPSAnJzsgXG5cbiAgICAvL3Jlc2V0IHByaW9yaXR5IGJ1dHRvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSBidG4uZGF0YXNldC5wcmlvcml0eUNvbG9yOyAgIC8vIFJlc2V0IHRvIG9yaWdpbmFsIGJhY2tncm91bmRcbiAgICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTsgXG4gICAgICAgIGNsZWFyTW9kYWxDb250ZW50KCk7IFxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgaWYgKCFtb2RhbCkge1xuICAgICAgICBvcGVuTW9kYWwoKTsgXG4gICAgICAgIHNob3dUb0RvUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dUb0RvUGFnZSgpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHNob3dNb2RhbCwgY2xvc2VNb2RhbCB9OyAiLCJpbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW1lbnQsIGhpZGVBbGxQYWdlcywgY3JlYXRlQnV0dG9uIH0gZnJvbSBcIi4vVUloZWxwZXJcIjtcbmltcG9ydCB7IGFkZE5ld05vdGUgfSBmcm9tIFwiLi9ub3RlcGFnZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJOb3RlUGFnZSgpIHtcbiAgICBjb25zdCBub3RlUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBub3RlUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7IFxuICAgIG5vdGVQYWdlLmlkID0gJ25vdGUtY29udGFpbmVyJzsgXG5cbiAgICBjb25zdCBub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgXG4gICAgbm90ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZS1wYWdlJyk7IFxuXG4gICAgY29uc3QgdXBwZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBwZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25vdGUtdXBwZXInKTtcblxuICAgIHVwcGVyQ29udGVudC5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbWVudCgndGV4dCcsICdtb2RhbC1ub3RlLXRpdGxlJywgJ25vdGUtdGl0bGUnLCAnVGl0bGU6IFN0dWR5IHNlc3Npb24gbW9uZGF5JywgJ2lucHV0JyksXG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbWVudCgndGV4dCcsICdtb2RhbC1ub3RlLWRldGFpbHMnLCAnbm90ZS1kZXRhaWxzJywgJ0RldGFpbHM6IFN0dWR5IHNlc3Npb24gZGV0YWlscy4uLicsICdpbnB1dCcpXG4gICAgKTtcblxuICAgIG5vdGVDb250ZW50LmFwcGVuZChcbiAgICAgICAgdXBwZXJDb250ZW50LFxuICAgICAgICBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDUkVBVEUgTk9URScsICdjcmVhdGUtbm90ZS1idG4nLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGROZXdOb3RlKCk7IFxuICAgICAgICB9KVxuICAgICk7IFxuXG4gICAgbm90ZVBhZ2UuYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpOyAgICAgXG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGV4dCcpOyBcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZVBhZ2UpOyBcblxuICAgIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cblxuXG5cblxuZnVuY3Rpb24gc2hvd05vdGVQYWdlKCkge1xuICAgIGhpZGVBbGxQYWdlcygpOyBcbiAgICBsZXQgbm90ZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZS1jb250YWluZXInKTtcbiAgICBpZiAoIW5vdGVQYWdlKSB7XG4gICAgICAgIHJlbmRlck5vdGVQYWdlKCk7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGVQYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hvd05vdGVQYWdlLCByZW5kZXJOb3RlUGFnZSB9IiwiaW1wb3J0IHsgaGlkZUFsbEhvbWVQYWdlcyB9IGZyb20gXCIuL1VJaGVscGVyXCI7XG5pbXBvcnQgeyBOb3RlLCBOb3Rlc0xpc3QgfSBmcm9tIFwiLi90b2RvTG9naWNcIjtcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgY3JlYXRlVmFsdWVUZXh0YXJlYSwgZGVsZXRlU3RvcmVkTm90ZXMgfSBmcm9tIFwiLi9VSWhlbHBlclwiO1xuXG5jb25zdCBub3Rlc0xpc3QgPSBuZXcgTm90ZXNMaXN0KCk7IFxuXG5mdW5jdGlvbiByZW5kZXJOb3RlUGFnZSgpIHtcbiAgICBjb25zdCBub3RlcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBub3RlcGFnZS5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2VzJyk7IFxuICAgIG5vdGVwYWdlLmlkID0gJ25vdGVwYWdlLWNvbnRhaW5lcic7IFxuXG4gICAgY29uc3Qgbm90ZXBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIG5vdGVwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdub3RlcGFnZS1jb250ZW50Jyk7IFxuXG4gICAgY29uc3Qgbm90ZXBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBub3RlcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ25vdGUtcGFnZS10aXRsZScpOyBcbiAgICBub3RlcGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ/Cfk5YgTm90ZXMnO1xuXG4gICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZXMtY29udGFpbmVyJyk7IFxuXG4gICAgbm90ZXBhZ2VDb250ZW50LmFwcGVuZChub3RlcGFnZVRpdGxlLCBub3Rlc0NvbnRhaW5lcik7IFxuICAgIFxuICAgIG5vdGVwYWdlLmFwcGVuZENoaWxkKG5vdGVwYWdlQ29udGVudCk7IFxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChub3RlcGFnZSk7IFxuICAgIFxuICAgIG5vdGVwYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxufVxuXG5mdW5jdGlvbiBhZGROZXdOb3RlKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ub3RlLXRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ub3RlLWRldGFpbHMnKS52YWx1ZTtcblxuICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgTm90ZSh0aXRsZSwgZGV0YWlscyk7IFxuICAgIG5vdGVzTGlzdC5hZGROb3RlKG5ld05vdGUpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3Rlc0xpc3Qubm90ZXMpKTsgXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtbm90ZS10aXRsZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLW5vdGUtZGV0YWlscycpLnZhbHVlID0gJyc7IFxuXG4gICAgdXBkYXRlTm90ZUJveCgpO1xuICAgIFxuICAgIGNsb3NlTW9kYWwoKTsgXG59XG5cbmZ1bmN0aW9uIHJlbmRlck5vdGVCb3goKSB7XG4gICAgY29uc3Qgbm90ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBub3RlQm94LmNsYXNzTGlzdC5hZGQoJ25vdGUtYm94Jyk7IFxuXG4gICAgbGV0IG5vdGVzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcGFnZS1jb250YWluZXInKTsgXG5cbiAgICAvLyBJZiBob21lcGFnZSBpcyBpbiB2aWV3LCBhcHBlbmQgb25seSB0aGUgbGF0ZXN0IG5vdGVcbiAgICBcbiAgICBpZiAobm90ZXNQYWdlICYmIG5vdGVzTGlzdC5ub3Rlcy5sZW5ndGggPiAwKSB7IFxuICAgICAgICBjb25zdCBpbmRleCA9IG5vdGVzTGlzdC5ub3Rlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsYXRlc3ROb3RlID0gbm90ZXNMaXN0Lm5vdGVzW25vdGVzTGlzdC5ub3Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3Qgbm90ZUVsZW1lbnQgPSBjcmVhdGVOb3RlRWxlbWVudChsYXRlc3ROb3RlLCBpbmRleCk7XG4gICAgICAgIG5vdGVCb3guYXBwZW5kQ2hpbGQobm90ZUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIGhvbWVwYWdlIGlzIG5vdCBpbiB2aWV3LCBhcHBlbmQgdGhlIGVudGlyZSBsaXN0XG4gICAgICAgIG5vdGVzTGlzdC5ub3Rlcy5mb3JFYWNoKChub3RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm90ZUVsZW1lbnQgPSBjcmVhdGVOb3RlRWxlbWVudChub3RlLCBpbmRleCk7XG4gICAgICAgICAgICBub3RlQm94LmFwcGVuZENoaWxkKG5vdGVFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBub3RlQm94OyBcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZUVsZW1lbnQobm90ZSwgaW5kZXgpIHtcbiAgICBjb25zdCBub3RlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBub3RlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3RlLWVsZW1lbnQnKTsgXG4gICAgbm90ZUVsZW1lbnQuaWQgPSAnbm90ZScgKyBpbmRleDsgXG5cbiAgICBjb25zdCBkZWxldGVidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZGVsZXRlYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGVsZXRlLWJ0bi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGVsZXRlLWJ1dHRvbicpOyBcbiAgICBkZWxldGVCdXR0b24uaWQgPSAnbm90ZS1kZWxldGUnICsgaW5kZXg7IFxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZU5vdGVCb3goJ25vdGUnICsgaW5kZXgpO1xuICAgICAgICBkZWxldGVTdG9yZWROb3RlcyhpbmRleCk7XG4gICAgfSlcblxuICAgIGRlbGV0ZWJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgY29uc3Qgbm90ZVRpdGxlID0gY3JlYXRlVmFsdWVUZXh0YXJlYSgnbm90ZS10aXRsZScsICdub3RlLXRpdGxlJywgYCR7bm90ZS50aXRsZX1gLCAnbm90ZS10aXRsZXMnKTtcbiAgICBub3RlVGl0bGUuY29udGVudEVkaXRhYmxlID0gdHJ1ZTsgXG5cbiAgICBjb25zdCBub3RlRGV0YWlscyA9IGNyZWF0ZVZhbHVlVGV4dGFyZWEoJ25vdGUtZGV0YWlscycsICdub3RlLWRldGFpbHMnLCBgJHtub3RlLmRldGFpbHN9YCwgJ25vdGUtZGV0YWlscycpO1xuICAgIG5vdGVEZXRhaWxzLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7IFxuXG4gICAgbm90ZUVsZW1lbnQuYXBwZW5kKGRlbGV0ZWJ1dHRvbkNvbnRhaW5lciwgbm90ZVRpdGxlLCBub3RlRGV0YWlscyk7IFxuXG4gICAgcmV0dXJuIG5vdGVFbGVtZW50OyBcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3RvcmVkTm90ZXMobm90ZXNMaXN0KSB7XG4gICAgY29uc3Qgbm90ZUJveGVzID0gW107IFxuICAgIGNvbnN0IG5vdGVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpXG4gICAgbm90ZXNMaXN0Lm5vdGVzLmZvckVhY2goKG5vdGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzQm94LmNsYXNzTGlzdC5hZGQoJ25vdGUtYm94Jyk7ICBcbiAgICAgICAgY29uc3Qgbm90ZUVsZW1lbnQgPSBjcmVhdGVOb3RlRWxlbWVudChub3RlLCBpbmRleCk7XG4gICAgICAgIG5vdGVzQm94LmFwcGVuZENoaWxkKG5vdGVFbGVtZW50KTtcbiAgICAgICAgbm90ZUJveGVzLnB1c2gobm90ZXNCb3gpO1xuICAgIH0pO1xuXG4gICAgbm90ZUJveGVzLmZvckVhY2gobm90ZWJveCA9PiBub3RlUGFnZS5wcmVwZW5kKG5vdGVib3gpKTsgXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZU5vdGVCb3goaW5kZXgpIHtcbiAgICBjb25zdCBub3RlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5kZXgpO1xuICAgIGNvbnN0IHBhcmVudCA9IG5vdGVCb3gucGFyZW50RWxlbWVudDtcblxuICAgIC8vIFJlbW92ZSB0aGUgcGFyZW50IGVsZW1lbnQgZnJvbSBpdHMgb3duIHBhcmVudFxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlTm90ZUJveCgpIHtcbiAgICBjb25zdCBub3RlcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKTtcblxuICAgIGlmIChub3RlcGFnZUNvbnRhaW5lcikge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm90ZUJveCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBub3RlcGFnZVxuICAgICAgICBjb25zdCBuZXdOb3RlQm94ID0gcmVuZGVyTm90ZUJveCgpO1xuICAgICAgICBub3RlcGFnZUNvbnRhaW5lci5wcmVwZW5kKG5ld05vdGVCb3gpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd05vdGVQYWdlKCkge1xuICAgIGhpZGVBbGxIb21lUGFnZXMoKTsgXG4gICAgbGV0IG5vdGVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVwYWdlLWNvbnRhaW5lcicpO1xuICAgIGlmICghbm90ZXBhZ2UpIHtcbiAgICAgICAgcmVuZGVyTm90ZVBhZ2UoKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm90ZXBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyAgIFxuICAgIGNvbnN0IHN0b3JlZE5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpIHx8IFwiW11cIik7IFxuICAgIGNvbnN0IHJlbmRlcmVkTm90ZXNMaXN0ID0gbmV3IE5vdGVzTGlzdChzdG9yZWROb3Rlcyk7IFxuICAgIHN0b3JlZE5vdGVzLmZvckVhY2gobm90ZSA9PiBub3Rlc0xpc3QuYWRkTm90ZShuZXcgTm90ZShub3RlLnRpdGxlLCBub3RlLmRldGFpbHMpKSk7XG5cbiAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIGNvbnRhaW5lciBlbGVtZW50IHdoZXJlIHRvZG9Cb3ggc2hvdWxkIGJlIGFwcGVuZGVkXG4gICAgcmVuZGVyU3RvcmVkTm90ZXMocmVuZGVyZWROb3Rlc0xpc3QpOyBcbn0pO1xuXG5leHBvcnQgeyBzaG93Tm90ZVBhZ2UsIGFkZE5ld05vdGUsIHVwZGF0ZU5vdGVCb3ggfTsgIiwiaW1wb3J0IHsgY3JlYXRlSW5wdXRFbGVtZW50LCBoaWRlQWxsUGFnZXMsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gXCIuL1VJaGVscGVyXCI7XG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHBhZ2VcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcHJvamVjdFBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpOyBcbiAgICBwcm9qZWN0UGFnZS5pZCA9ICdwcm9qZWN0LWNvbnRhaW5lcic7IFxuXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IFxuICAgIHByb2plY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFnZScpOyBcblxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZChcbiAgICAgICAgY3JlYXRlSW5wdXRFbGVtZW50KCd0ZXh0JywgJ3Byb2plY3QtdGl0bGUnLCAncHJvamVjdC10aXRsZScsICdUaXRsZTogSG91c2UgUmVub3ZhdGlvbicsICdpbnB1dCcpLFxuICAgICAgICBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDUkVBVEUgUFJPSkVDVCcsICdjcmVhdGUtcHJvamVjdC1idG4nLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGROZXdQcm9qZWN0KCk7IFxuICAgICAgICB9KVxuICAgICk7IFxuXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpOyAgICAgXG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGV4dCcpOyBcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpOyBcblxuICAgIHByb2plY3RQYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbn1cblxuXG5mdW5jdGlvbiBzaG93UHJvamVjdFBhZ2UoKSB7XG4gICAgaGlkZUFsbFBhZ2VzKCk7IFxuICAgIGxldCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGlmICghcHJvamVjdFBhZ2UpIHtcbiAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UoKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UHJvamVjdFBhZ2U7ICIsImltcG9ydCB7IGhpZGVBbGxIb21lUGFnZXMsIGRlbGV0ZVN0b3JlZFByb2plY3RzIH0gZnJvbSBcIi4vVUloZWxwZXJcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RMaXN0IH0gZnJvbSBcIi4vdG9kb0xvZ2ljXCI7XG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IHNob3dJZGl2aWR1YWxQcm9qZWN0UGFnZSB9IGZyb20gXCIuL2luZGl2aWR1YWxQcm9qZWN0UGFnZVwiO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpOyBcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcHJvamVjdHBhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlcycpOyBcbiAgICBwcm9qZWN0cGFnZS5pZCA9ICdwcm9qZWN0cGFnZS1jb250YWluZXInO1xuXG4gICAgY29uc3QgcHJvamVjdHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHByb2plY3RwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cGFnZS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0cGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHByb2plY3RwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHBhZ2UtdGl0bGUnKTsgXG4gICAgcHJvamVjdHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICfwn5OXIFByb2plY3RzJztcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWNvbnRhaW5lcicpOyBcblxuICAgIHByb2plY3RwYWdlQ29udGVudC5hcHBlbmQocHJvamVjdHBhZ2VUaXRsZSwgcHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kKHByb2plY3RwYWdlQ29udGVudCk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTsgXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0cGFnZSk7XG5cbiAgICBwcm9qZWN0cGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3RvcmVkUHJvamVjdHMocHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBwcm9qZWN0Qm94ZXMgPSBbXTsgXG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJylcbiAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZCgncHJvamVjdC1ib3gnKTsgIFxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIGluZGV4KTtcbiAgICAgICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICAgIHByb2plY3RCb3hlcy5wdXNoKHByb2plY3RCb3gpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEJveGVzLmZvckVhY2gocHJvamVjdGJveCA9PiBwcm9qZWN0UGFnZS5wcmVwZW5kKHByb2plY3Rib3gpKTsgXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RCb3goKSB7XG4gICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZCgncHJvamVjdC1ib3gnKTsgXG5cbiAgICBsZXQgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHBhZ2UtY29udGFpbmVyJyk7XG5cbiAgICAvLyBJZiBwcm9qZWN0cGFnZSBpcyBpbiB2aWV3LCBhcHBlbmQgb25seSB0aGUgbGF0ZXN0IHByb2plY3RcbiAgICBpZiAocHJvamVjdFBhZ2UgJiYgcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoID4gMCkgeyBcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsYXRlc3RQcm9qZWN0ID0gcHJvamVjdExpc3QucHJvamVjdHNbcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQobGF0ZXN0UHJvamVjdCwgaW5kZXgpO1xuICAgICAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBwcm9qZWN0cGFnZSBpcyBub3QgaW4gdmlldywgYXBwZW5kIHRoZSBlbnRpcmUgbGlzdFxuICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0LCBpbmRleCk7XG4gICAgICAgICAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpOyBcbiAgICBcbiAgICByZXR1cm4gcHJvamVjdEJveDsgXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudCcpO1xuICAgIHByb2plY3RFbGVtZW50LmlkID0gJ3Byb2plY3QnICsgaW5kZXg7IFxuXG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1jb250YWluZXInKTsgXG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ0bicpOyBcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnREVMRVRFIFBST0pFQ1QnOyBcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7IFxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdFRpdGxlLCBkZWxldGVDb250YWluZXIpXG5cbiAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dJZGl2aWR1YWxQcm9qZWN0UGFnZShwcm9qZWN0LCBpbmRleCk7IFxuICAgIH0pXG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCb3goaW5kZXgpOyBcbiAgICAgICAgZGVsZXRlU3RvcmVkUHJvamVjdHMoaW5kZXgpOyBcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0Qm94KGluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JyArIGluZGV4KTtcbiAgICBjb25zdCBwYXJlbnQgPSBwcm9qZWN0Qm94LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAvLyBSZW1vdmUgdGhlIHBhcmVudCBlbGVtZW50IGZyb20gaXRzIG93biBwYXJlbnRcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBhcmVudCk7XG4gICAgfVxuXG4gICAgcHJvamVjdExpc3QuZGVsZXRlUHJvamVjdChpbmRleCk7XG59XG5cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gR2V0IHZhbHVlIGZyb20gaW5wdXQgZmllbGRcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIGlmICghcHJvamVjdExpc3QuZG9lc1RpdGxlRXhpc3QobmV3UHJvamVjdCkpIHtcbiAgICAgICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QucHJvamVjdHMpKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB0aXRsZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBhbGVydCAoYEEgcHJvamVjdCB3aXRoIHRoZSB0aXRsZSBcIiR7bmV3UHJvamVjdC50aXRsZX1cIiBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWUgPSAnJztcblxuICAgIC8vIFVwZGF0ZSB0aGUgaG9tZXBhZ2UgdG8gZGlzcGxheSB0aGUgbmV3IHRvZG9cbiAgICB1cGRhdGVQcm9qZWN0Qm94KCk7IFxuICAgIC8vY2xvc2UgbW9kYWwgYWZ0ZXIgYWRkaW5nXG4gICAgY2xvc2VNb2RhbCgpOyBcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEJveCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBcbiAgICBpZiAocHJvamVjdENvbnRlbnQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRvZG9Cb3ggYW5kIGFwcGVuZCBpdCB0byB0aGUgaG9tZXBhZ2VcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJveCA9IHJlbmRlclByb2plY3RCb3goKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJveCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0UGFnZSgpIHtcbiAgICBoaWRlQWxsSG9tZVBhZ2VzKCk7IFxuICAgIGxldCBwcm9qZWN0cGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cGFnZS1jb250YWluZXInKTtcbiAgICBpZiAoIXByb2plY3RwYWdlKSB7XG4gICAgICAgIHJlbmRlclByb2plY3RQYWdlKCk7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RwYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0OyBcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgICBcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSB8fCBcIltdXCIpOyBcbiAgICBjb25zdCByZW5kZXJkUHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3Qoc3RvcmVkUHJvamVjdHMpOyBcbiAgICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdExpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlKSkpO1xuXG4gICAgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBjb250YWluZXIgZWxlbWVudCB3aGVyZSB0b2RvQm94IHNob3VsZCBiZSBhcHBlbmRlZFxuICAgIHJlbmRlclN0b3JlZFByb2plY3RzKHJlbmRlcmRQcm9qZWN0TGlzdCk7IFxufSk7XG5cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RQYWdlLCBhZGROZXdQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCB9OyIsImltcG9ydCB7IGhpZGVBbGxIb21lUGFnZXMgfSBmcm9tIFwiLi9VSWhlbHBlclwiO1xuXG5mdW5jdGlvbiByZW5kZXJUaGlzV2Vla1BhZ2UoKSB7XG4gICAgY29uc3QgdGhpc1dlZWtQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpc1dlZWtQYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZXMnKTtcbiAgICB0aGlzV2Vla1BhZ2UuaWQgPSAndGhpc3dlZWtwYWdlLWNvbnRhaW5lcic7IC8vIENoYW5nZWQgZnJvbSAndG9kYXlwYWdlLWNvbnRhaW5lcicgdG8gJ3RoaXN3ZWVrcGFnZS1jb250YWluZXInXG5cbiAgICBjb25zdCB0aGlzV2Vla1BhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpc1dlZWtQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0aGlzd2Vla3BhZ2UtY29udGVudCcpOyAvLyBDaGFuZ2VkIGZyb20gJ3RvZGF5cGFnZS1jb250ZW50JyB0byAndGhpc3dlZWtwYWdlLWNvbnRlbnQnXG5cbiAgICBjb25zdCB0aGlzV2Vla1BhZ2VUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXNXZWVrUGFnZVRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RoaXN3ZWVrcGFnZS10b2RvLWNvbnRlbnQnKTsgLy8gQ2hhbmdlZCBmcm9tICd0b2RheXBhZ2UtdG9kby1jb250ZW50JyB0byAndGhpc3dlZWtwYWdlLXRvZG8tY29udGVudCdcblxuICAgIGNvbnN0IHRoaXNXZWVrUGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpc1dlZWtQYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpO1xuICAgIHRoaXNXZWVrUGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ/Cfk4UgVGhpcyBXZWVrXFwncyBUYXNrcyc7IC8vIFVwZGF0ZWQgdGV4dCBjb250ZW50IHRvIHJlZmxlY3QgXCJUaGlzIFdlZWsncyBUYXNrc1wiXG5cbiAgICB0aGlzV2Vla1BhZ2VDb250ZW50LmFwcGVuZCh0aGlzV2Vla1BhZ2VUaXRsZSwgdGhpc1dlZWtQYWdlVG9kb3MpO1xuXG4gICAgdGhpc1dlZWtQYWdlLmFwcGVuZENoaWxkKHRoaXNXZWVrUGFnZUNvbnRlbnQpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aGlzV2Vla1BhZ2UpO1xuXG4gICAgdGhpc1dlZWtQYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBUaGlzIHJlbWFpbnMgdW5jaGFuZ2VkXG59XG5cbmZ1bmN0aW9uIHNob3dUaGlzV2Vla1BhZ2UoKSB7XG4gICAgaGlkZUFsbEhvbWVQYWdlcygpO1xuICAgIGxldCB0aGlzV2Vla1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpc3dlZWtwYWdlLWNvbnRhaW5lcicpO1xuICAgIGlmICghdGhpc1dlZWtQYWdlKSB7XG4gICAgICAgIHJlbmRlclRoaXNXZWVrUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNXZWVrUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHNob3dUaGlzV2Vla1BhZ2UgfTsiLCJpbXBvcnQgeyBoaWRlQWxsSG9tZVBhZ2VzIH0gZnJvbSBcIi4vVUloZWxwZXJcIjtcblxuZnVuY3Rpb24gcmVuZGVyVG9kYXlQYWdlKCkge1xuICAgIGNvbnN0IHRvZGF5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICB0b2RheVBhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlcycpOyBcbiAgICB0b2RheVBhZ2UuaWQgPSAndG9kYXlwYWdlLWNvbnRhaW5lcic7IC8vIENoYW5nZWQgZnJvbSAnaG9tZXBhZ2UtY29udGFpbmVyJyB0byAndG9kYXlwYWdlLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IHRvZGF5UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgdG9kYXlQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RheXBhZ2UtY29udGVudCcpOyAvLyBDaGFuZ2VkIGZyb20gJ2hvbWVwYWdlLWNvbnRlbnQnIHRvICd0b2RheXBhZ2UtY29udGVudCdcblxuICAgIGNvbnN0IHRvZGF5UGFnZVRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHRvZGF5UGFnZVRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZGF5cGFnZS10b2RvLWNvbnRlbnQnKTsgLy8gQ2hhbmdlZCBmcm9tICdob21lcGFnZS10b2RvLWNvbnRlbnQnIHRvICd0b2RheXBhZ2UtdG9kby1jb250ZW50J1xuXG4gICAgY29uc3QgdG9kYXlQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgdG9kYXlQYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpOyBcbiAgICB0b2RheVBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICfirZAgVG9kYXlcXCdzIFRhc2tzJzsgLy8gQ2hhbmdlZCB0ZXh0IGNvbnRlbnQgdG8gcmVmbGVjdCBcIlRvZGF5J3MgVGFza3NcIlxuXG4gICAgdG9kYXlQYWdlQ29udGVudC5hcHBlbmQodG9kYXlQYWdlVGl0bGUsIHRvZGF5UGFnZVRvZG9zKTsgXG4gICAgXG4gICAgdG9kYXlQYWdlLmFwcGVuZENoaWxkKHRvZGF5UGFnZUNvbnRlbnQpOyBcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodG9kYXlQYWdlKTsgXG4gICAgXG4gICAgdG9kYXlQYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBUaGlzIHJlbWFpbnMgdW5jaGFuZ2VkXG59XG5cbmZ1bmN0aW9uIHNob3dUb2RheVBhZ2UoKSB7XG4gICAgaGlkZUFsbEhvbWVQYWdlcygpOyBcbiAgICBsZXQgdG9kYXlwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5cGFnZS1jb250YWluZXInKTtcbiAgICBpZiAoIXRvZGF5cGFnZSkge1xuICAgICAgICByZW5kZXJUb2RheVBhZ2UoKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kYXlwYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hvd1RvZGF5UGFnZSB9O1xuIiwiaW1wb3J0IHsgZm9ybWF0LCBpc1RvZGF5LCBpc1RoaXNJU09XZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7IFxuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzOyBcbiAgICAgICAgdGhpcy5mb3JtYXREYXRlID0gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCBcIkxMTCBkb1wiKTsgXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7IFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5jYXBpdGFsaXplKHByaW9yaXR5KTsgXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7IFxuICAgIH1cblxuICAgIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUaXRsZShuZXdUaXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGFuZ2VEZXRhaWxzKG5ld0RldGFpbHMpIHtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gbmV3RGV0YWlscztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hhbmdlRGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB0aGlzLmNhcGl0YWxpemUobmV3UHJpb3JpdHkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2RvczsgXG4gICAgfVxuXG4gICAgZG9lc1RpdGxlRXhpc3QodG9kbykge1xuICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHRpdGxlIGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLnNvbWUoZXhpc3RpbmdUb2RvID0+IGV4aXN0aW5nVG9kby50aXRsZSA9PT0gdG9kby50aXRsZSk7XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlRXhpc3RzID0gdGhpcy50b2Rvcy5zb21lKGV4aXN0aW5nVG9kbyA9PiBleGlzdGluZ1RvZG8udGl0bGUgPT09IHRvZG8udGl0bGUpOyBcbiAgICAgICAgaWYgKHRpdGxlRXhpc3RzKSB7XG4gICAgICAgICAgICBhbGVydCAoYEEgdG9kbyB3aXRoIHRoZSB0aXRsZSBcIiR7dG9kby50aXRsZX1cIiBhbHJlYWR5IGV4aXN0cy5gKTsgXG4gICAgICAgICAgICByZXR1cm47IFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pOyBcbiAgICAgICAgLy90aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpOyBcbiAgICB9XG5cbiAgICBnZXRUb2RvQnlUaXRsZSh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kKHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpOyBcbiAgICB9XG5cbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50b2RvcykpO1xuICAgIH1cblxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsIFxuICAgICAgICB0aGlzLnRvZG9zID0gW107IFxuICAgIH1cblxuICAgIGFkZFRvRG8odG9kbykge1xuICAgICAgICBpZiAodG9kbyBpbnN0YW5jZW9mIFRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCAoXCJPYmplY3QgbXVzdCBiZSBvZiBpbnN0YW5jZSBUb2RvXCIpOyBcbiAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUb0RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7IFxuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzID0gW10pIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzOyBcbiAgICB9XG5cbiAgICBkb2VzVGl0bGVFeGlzdChwcm9qZWN0KSB7XG4gICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGl0bGUgZXhpc3RzLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZShleGlzdGluZ1Byb2plY3QgPT4gZXhpc3RpbmdQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFeGlzdHMgPSB0aGlzLnByb2plY3RzLnNvbWUoZXhzaXN0aW5nUHJvamVjdCA9PiBleHNpc3RpbmdQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKTsgXG4gICAgICAgIGlmICh0aXRsZUV4aXN0cykge1xuICAgICAgICAgICAgYWxlcnQgKGBBIHByb2plY3Qgd2l0aCB0aGUgdGl0bGUgXCIke3Byb2plY3QudGl0bGV9XCIgYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7IFxuICAgIH1cblxuICAgIGdldFByb2plY3RCeVRpdGxlKHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdCB8fCBudWxsOyBcbiAgICB9XG5cbiAgICBnZXRJbmRleE9mVGl0bGUocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IGluIHRoZSBwcm9qZWN0cyBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHByb2plY3RUaXRsZVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBpbmRleCBvZiBmb3VuZCBwcm9qZWN0IG9yIC0xIGlmIG5vdCBmb3VuZFxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIFxuICAgIGdldFRpdGxlT2ZJbmRleChpbmRleCkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgaW5kZXggaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHByb2plY3RzIGFycmF5XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3QgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gbnVsbCBvciBzb21lIGluZGljYXRpb24gdGhhdCB0aGUgaW5kZXggaXMgaW52YWxpZFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KGluZGV4KSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBpbmRleCBpcyB2YWxpZFxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3B0aW9uYWxseSBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGluZGV4IGlzIGludmFsaWRcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGluZGV4IGZvciBkZWxldGlvbi5cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIE5vdGUge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7IFxuICAgIH1cbn1cblxuY2xhc3MgTm90ZXNMaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihub3RlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlczsgXG4gICAgfVxuXG4gICAgYWRkTm90ZShub3RlKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlRXhpc3RzID0gdGhpcy5ub3Rlcy5zb21lKGV4c2lzdGluZ05vdGUgPT4gZXhzaXN0aW5nTm90ZSA9PT0gbm90ZS50aXRsZSk7XG4gICAgICAgIGlmICh0aXRsZUV4aXN0cykge1xuICAgICAgICAgICAgYWxlcnQgKGBBIG5vdGUgd2l0aCB0aGUgdGl0bGUgXCIke25vdGUudGl0bGV9XCIgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgICAgICAgICByZXR1cm47IFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpOyBcbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBUb2RvLCBQcm9qZWN0LCBOb3RlLCBUb2RvTGlzdCwgTm90ZXNMaXN0LCBQcm9qZWN0TGlzdCB9OyAiLCJpbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW1lbnQsIGhpZGVBbGxQYWdlcywgY3JlYXRlQnV0dG9uIH0gZnJvbSBcIi4vVUloZWxwZXJcIjtcbmltcG9ydCB7IGFkZE5ld1RvZG8gfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eVNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5pZCA9ICdwcmlvcml0eS1zZWxlY3Rvcic7IFxuXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiAnTE9XJywgY29sb3I6ICdncmVlbicgfSxcbiAgICAgICAgeyBuYW1lOiAnTUVESVVNJywgY29sb3I6ICdvcmFuZ2UnfSxcbiAgICAgICAgeyBuYW1lOiAnSElHSCcsIGNvbG9yOiAncmVkJyB9XG4gICAgXTsgXG5cbiAgICBwcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZVByaW9yaXR5QnV0dG9uKHByaW9yaXR5KTsgXG4gICAgICAgIHByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmlvcml0eVNlbGVjdG9yOyBcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmlsbGVkUHJpcm9pdHlTZWxlY3RvcihzZWxlY3RlZFByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBwcmlvcml0eVNlbGVjdG9yLmlkID0gJ3ByaW9yaXR5LXNlbGVjdG9yJztcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ0xPVycsIGNvbG9yOiAnZ3JlZW4nIH0sXG4gICAgICAgIHsgbmFtZTogJ01FRElVTScsIGNvbG9yOiAnb3JhbmdlJ30sXG4gICAgICAgIHsgbmFtZTogJ0hJR0gnLCBjb2xvcjogJ3JlZCcgfVxuICAgIF07IFxuXG4gICAgcHJpb3JpdGllcy5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVQcmlvcml0eUJ1dHRvbihwcmlvcml0eSk7XG4gICAgICAgIGlmIChwcmlvcml0eS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdGVkUHJpb3JpdHkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJpb3JpdHkuY29sb3I7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgICAgIHByaW9yaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmlvcml0eVNlbGVjdG9yOyBcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eUJ1dHRvbihwcmlvcml0eSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nOyBcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9uJyk7XG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlciA9IGAxcHggc29saWQgJHtwcmlvcml0eS5jb2xvcn1gO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IHByaW9yaXR5LmNvbG9yO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5Lm5hbWU7IFxuICAgIGJ1dHRvbi5pZCA9IHByaW9yaXR5Lm5hbWU7IFxuICAgIGJ1dHRvbi5kYXRhc2V0LnByaW9yaXR5ID0gcHJpb3JpdHkubmFtZS50b0xvd2VyQ2FzZSgpOyBcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlICdzZWxlY3RlZCcgY2xhc3MgYW5kIHJlc2V0IHN0eWxlIGZvciBhbGwgYnV0dG9uc1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICBidG4uc3R5bGUuY29sb3IgPSBidG4uZGF0YXNldC5wcmlvcml0eUNvbG9yOyAgIC8vIFJlc2V0IHRvIG9yaWdpbmFsIGJhY2tncm91bmRcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIEFkZCAnc2VsZWN0ZWQnIGNsYXNzIGFuZCBjaGFuZ2Ugc3R5bGUgZm9yIHRoZSBjbGlja2VkIGJ1dHRvblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByaW9yaXR5LmNvbG9yO1xuICAgICAgICBidXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnOyAgLy8gU2V0IHlvdXIgZGVzaXJlZCBjb2xvclxuICAgIH0pO1xuXG4gICAgLy9zdG9yZSB0aGUgb3JpZ2luYWwgY29sb3IgaW4gYSBkYXRhIGF0dHJpYnV0ZSBmb3IgZWFjaCBidXR0b25cbiAgICBidXR0b24uZGF0YXNldC5wcmlvcml0eUNvbG9yID0gcHJpb3JpdHkuY29sb3I7IFxuXG4gICAgcmV0dXJuIGJ1dHRvbjsgXG59XG5cblxuZnVuY3Rpb24gcmVuZGVyVG9Eb1BhZ2UoKSB7XG4gICAgY29uc3QgdG9kb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IFxuICAgIHRvZG9QYWdlLmlkID0gJ3RvZG8tcGFnZSc7IFxuICAgIHRvZG9QYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTsgXG5cbiAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuXG4gICAgY29uc3QgdXBwZXJJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1cHBlcklucHV0cy5jbGFzc0xpc3QuYWRkKCd1cHBlci10b2RvLWlucHV0cycpOyBcblxuICAgIHVwcGVySW5wdXRzLmFwcGVuZChcbiAgICAgICAgY3JlYXRlSW5wdXRFbGVtZW50KCd0ZXh0JywgJ3RpdGxlLWlucHV0JywgJ3RpdGxlJywgJ1RpdGxlOiBQYXkgQmlsbHMnLCAnaW5wdXQnKSxcbiAgICAgICAgY3JlYXRlSW5wdXRFbGVtZW50KCd0ZXh0JywgJ2RldGFpbHMtaW5wdXQnLCAnZGV0YWlscycsICdEZXRhaWxzOiBlZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuJywgJ2lucHV0JylcbiAgICApO1xuXG4gICAgY29uc3QgbG93ZXJJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbG93ZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgnbG93ZXItdG9kby1pbnB1dHMnKTsgXG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtYm94Jyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JzsgXG5cbiAgICBkYXRlSW5wdXQuYXBwZW5kKFxuICAgICAgICBkYXRlTGFiZWwsXG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbWVudCgnZGF0ZScsICdkYXRlJywgJ2RhdGUnKVxuICAgICk7IFxuXG4gICAgY29uc3QgcHJpb3JpdHlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcHJpb3JpdHlCb3guY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYm94Jyk7XG5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdG9yID0gY3JlYXRlUHJpb3JpdHlTZWxlY3RvcigpOyBcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJzsgXG5cbiAgICBwcmlvcml0eUJveC5hcHBlbmQoXG4gICAgICAgIHByaW9yaXR5TGFiZWwsXG4gICAgICAgIHByaW9yaXR5U2VsZWN0b3JcbiAgICApXG5cbiAgICBjb25zdCBkYXRlQW5kUHJpb3JpdHlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZGF0ZUFuZFByaW9yaXR5Qm94LmNsYXNzTGlzdC5hZGQoJ2RhdGUtYW5kLXByaW9yaXR5Jyk7IFxuXG4gICAgZGF0ZUFuZFByaW9yaXR5Qm94LmFwcGVuZChcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICBwcmlvcml0eUJveFxuICAgICk7XG5cbiAgICBsb3dlcklucHV0cy5hcHBlbmQoXG4gICAgICAgIGRhdGVBbmRQcmlvcml0eUJveCxcbiAgICAgICAgY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQUREIFRPIERPJywgJ2FkZC10b2RvJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkTmV3VG9kbygpOyBcbiAgICAgICAgfSlcbiAgICApO1xuICAgIFxuXG4gICAgdG9kb0NvbnRlbnQuYXBwZW5kKHVwcGVySW5wdXRzLCBsb3dlcklucHV0cyk7IFxuICAgIHRvZG9QYWdlLmFwcGVuZENoaWxkKHRvZG9Db250ZW50KTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10ZXh0Jyk7IFxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvUGFnZSk7IFxuXG4gICAgdG9kb1BhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxufVxuXG5mdW5jdGlvbiBzaG93VG9Eb1BhZ2UoKSB7XG4gICAgaGlkZUFsbFBhZ2VzKCk7IFxuICAgIGxldCB0b2RvUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXBhZ2UnKTtcbiAgICBpZiAoIXRvZG9QYWdlKSB7XG4gICAgICAgIHJlbmRlclRvRG9QYWdlKCk7IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9QYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hvd1RvRG9QYWdlLCBjcmVhdGVGaWxsZWRQcmlyb2l0eVNlbGVjdG9yLCBjcmVhdGVQcmlvcml0eVNlbGVjdG9yIH07ICIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKCksXG4gICAgICBkYXRlLmdldEhvdXJzKCksXG4gICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgudHJ1bmMoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLy8gUmV4cG9ydHMgb2YgaW50ZXJuYWwgZm9yIGxpYnJhcmllcyB0byB1c2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzYzOCNpc3N1ZWNvbW1lbnQtMTg3NzA4Mjg3NFxuZXhwb3J0IHsgZm9ybWF0dGVycywgbG9uZ0Zvcm1hdHRlcnMgfTtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG5leHBvcnQgeyBmb3JtYXQgYXMgZm9ybWF0RGF0ZSB9O1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAYWxpYXMgZm9ybWF0RGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiLi9zdGFydE9mWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnRydW5jKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnRydW5jKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgaXNTYW1lV2VlayB9IGZyb20gXCIuL2lzU2FtZVdlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgSVNPIHdlZWsgKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgSVNPIHdlZWsgKGFuZCB5ZWFyKT9cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIElTTyB3ZWVrIChhbmQgeWVhcilcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgU2VwdGVtYmVyIDIwMTQgYW5kIDcgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgSVNPIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA3KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBTZXB0ZW1iZXIgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBJU08gd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZUlTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTUsIDgsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lSVNPV2VlayhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZUlTT1dlZWs7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZUxlZnQsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVSaWdodCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZXZWVrID09PSArZGF0ZVJpZ2h0U3RhcnRPZldlZWs7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZUlTT1dlZWsgfSBmcm9tIFwiLi9pc1NhbWVJU09XZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc0lTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBJU08gd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIElTTyB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMiBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIElTTyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVJU09XZWVrKGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc0lTT1dlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnOyBcbmltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gJy4vbW9kYWwuanMnOyBcbmltcG9ydCB7IHNob3dIb21lUGFnZSwgcmVuZGVyU3RvcmVkVG9kb0JveGVzIH0gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuL1VJaGVscGVyJztcbmltcG9ydCB7IHNob3dOb3RlUGFnZSB9IGZyb20gJy4vbm90ZXBhZ2UuanMnO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RQYWdlIH0gZnJvbSAnLi9wcm9qZWN0cGFnZS5qcyc7XG5pbXBvcnQgeyBzaG93VG9kYXlQYWdlIH0gZnJvbSAnLi90b2RheXBhZ2UuanMnO1xuaW1wb3J0IHsgc2hvd1RoaXNXZWVrUGFnZSB9IGZyb20gJy4vdGhpc3dlZWtwYWdlLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpe1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7IFxuICAgIFxuICAgIGNvbnN0IHNpZGViYXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTsgXG4gICAgc2lkZWJhck9wdGlvbnMuYXBwZW5kKFxuICAgICAgICBjcmVhdGVCdXR0b24oJ2xpJywgJ/Cfj6AgQWxsIFRhc2tzJywgJ2hvbWVCdXR0b24nLCAoKSA9PiBzaG93SG9tZVBhZ2UoKSksXG4gICAgICAgIGNyZWF0ZUJ1dHRvbignbGknLCAn4q2QIFRvZGF5JywgJ2hvbWVCdXR0b24nLCAoKSA9PiBzaG93VG9kYXlQYWdlKCksICd0b2RheXBhZ2UtYnV0dG9uJyksXG4gICAgICAgIGNyZWF0ZUJ1dHRvbignbGknLCAn8J+ThSBUaGlzIHdlZWsnLCAnaG9tZUJ1dHRvbicsICgpID0+IHNob3dUaGlzV2Vla1BhZ2UoKSksXG4gICAgICAgIGNyZWF0ZUJ1dHRvbignbGknLCAn8J+TlyBQcm9qZWN0cycsICdob21lQnV0dG9uJywgKCkgPT4gc2hvd1Byb2plY3RQYWdlKCkpLFxuICAgICAgICBjcmVhdGVCdXR0b24oJ2xpJywgJ/Cfk5YgTm90ZXMnLCAnaG9tZUJ1dHRvbicsICgpID0+IHNob3dOb3RlUGFnZSgpKVxuICAgICk7XG5cbiAgICBjb25zdCBjcmVhdGVOZXcgPSBjcmVhdGVCdXR0b24oJ2xpJywgJysnLCAnaG9tZUJ1dHRvbicsICgpID0+IHNob3dNb2RhbCgpKTsgXG4gICAgY3JlYXRlTmV3LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXcnKTsgXG5cbiAgICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyT3B0aW9ucywgY3JlYXRlTmV3KTsgXG5cbiAgICByZXR1cm4gc2lkZWJhcjsgXG59XG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7IFxuY29udGVudC5hcHBlbmQoY3JlYXRlU2lkZWJhcigpLCBib2R5KTsgIFxuc2hvd1RoaXNXZWVrUGFnZSgpOyBcbnNob3dQcm9qZWN0UGFnZSgpOyBcbnNob3dOb3RlUGFnZSgpOyBcbnNob3dIb21lUGFnZSgpO1xuc2hvd1RvZGF5UGFnZSgpOyBcblxuY29uc3QgdG9kYXlwYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5cGFnZS1idXR0b24nKTsgXG50b2RheXBhZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7IFxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGFsbCBidXR0b25zIHdpdGggdGhlIGNsYXNzICdob21lQnV0dG9uJ1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVCdXR0b24nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgJ2FjdGl2ZScgY2xhc3MgZnJvbSBhbGwgYnV0dG9uc1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZUJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZCB0aGUgJ2FjdGl2ZScgY2xhc3MgdG8gdGhlIGNsaWNrZWQgYnV0dG9uXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCcudG9kby1jaGVja2JveCcpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNoZWNrYm94LWluZGV4Jyk7XG4gICAgICAgIGNvbnN0IGFsbENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudG9kby1jaGVja2JveFtkYXRhLWNoZWNrYm94LWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICAgICAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICAgIGNiLmNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==