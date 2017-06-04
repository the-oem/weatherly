// browserMock.js
// var localStorageMock = (function() {
//     var store = {};
//
//     return {
//         getItem: function(key) {
//             return store[key] || null;
//         },
//         setItem: function(key, value) {
//             store[key] = value.toString();
//         },
//         clear: function() {
//             store = {};
//         }
//     };
//
// })();
//
// Object.defineProperty(window, 'localStorage', {
//      value: localStorageMock
// });


// ------------------------------------------------------------------------- //
// __mocks__/localStorage.js
// http://booksyoudontread.com/2016/10/10/mocking-window-localstorage-in-jest/
// let localStorage = {};
//
// export default {
//     setItem(key, value) {
//         return Object.assign(localStorage, {[key]: value});
//     },
//     getItem(key) {
//         return localStorage[key];
//     },
//     clear() {
//         localStorage = {};
//     }
// };
