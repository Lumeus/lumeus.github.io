"use strict";
var index;
(function (index) {
    var BinarySearchTree = binarySearchTree.BinarySearchTree;
    function add(key, value, width, height) {
        if (tree) {
            tree.add(key, value);
        }
        else {
            tree = new BinarySearchTree(key, value);
        }
        // @ts-ignore
        svg.innerHTML = tree.toSVG(width, height); // точно не null
    }
    function del(key, width, height) {
        var _a;
        if (tree) {
            var res = void 0;
            _a = tree.delete(key), tree = _a[0], res = _a[1];
            // @ts-ignore
            document.getElementById("del-res").innerHTML = (res != null && !isNaN(res)) ? res.toString() : "-"; // точно не null
        }
        else {
            // @ts-ignore
            document.getElementById("del-res").innerHTML = "tree is missing"; // точно не null
        }
        // @ts-ignore
        svg.innerHTML = tree ? tree.toSVG(width, height) : ""; // точно не null
    }
    function find(key) {
        if (tree) {
            var res = tree.find(key);
            var result = "-";
            if (res != null && !isNaN(res)) {
                result = res.toString();
            }
            // @ts-ignore
            document.getElementById("find-res").innerHTML = result; // точно не null
        }
        else {
            // @ts-ignore
            document.getElementById("find-res").innerHTML = "tree is missing"; // точно не null
        }
    }
    function balance(width, height) {
        if (tree) {
            tree = tree.balance();
            // @ts-ignore
            svg.innerHTML = tree.toSVG(width, height); // точно не null
        }
    }
    function handleChange(event) {
        var value = parseFloat(event.value);
        if (value < -99) {
            value = -99;
        }
        if (value > 99) {
            value = 99;
        }
        event.value = value.toFixed(0);
    }
    function click(event) {
        event.value = "";
    }
    function createListeners() {
        svg = document.getElementById("svg");
        if (svg && tree) {
            svg.innerHTML = tree.toSVG(1000, 700);
        }
        var addKey = document.getElementById("add-key");
        if (addKey) {
            addKey.onclick = function () { click(document.getElementById("add-key")); };
            addKey.onchange = function () { handleChange(document.getElementById("add-key")); };
        }
        var addVal = document.getElementById("add-val");
        if (addVal) {
            addVal.onclick = function () { click(document.getElementById("add-val")); };
            addVal.onchange = function () { handleChange(document.getElementById("add-val")); };
        }
        var findKey = document.getElementById("find-key");
        if (findKey) {
            findKey.onclick = function () { click(document.getElementById("find-key")); };
            findKey.onchange = function () { handleChange(document.getElementById("find-key")); };
        }
        var delKey = document.getElementById("del-key");
        if (delKey) {
            delKey.onclick = function () { click(document.getElementById("del-key")); };
            delKey.onchange = function () { handleChange(document.getElementById("del-key")); };
        }
        var addButton = document.getElementById("add");
        if (addButton) {
            addButton.onclick = function () {
                if (addKey.value !== "" && addVal.value !== "") {
                    add(parseFloat(addKey.value), parseFloat(addVal.value), 1000, 700);
                }
            };
        }
        var findButton = document.getElementById("find");
        if (findButton) {
            findButton.onclick = function () {
                if (findKey.value !== "") {
                    find(parseFloat(findKey.value));
                }
            };
        }
        var delButton = document.getElementById("del");
        if (delButton) {
            delButton.onclick = function () {
                if (findKey.value !== "") {
                    del(parseFloat(delKey.value), 1000, 700);
                }
            };
        }
        var balButton = document.getElementById("bal");
        if (balButton) {
            balButton.onclick = function () { balance(1000, 700); };
        }
    }
    var svg;
    var tree = null;
    document.addEventListener("DOMContentLoaded", createListeners);
})(index || (index = {}));
