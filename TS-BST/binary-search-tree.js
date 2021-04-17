"use strict";
var binarySearchTree;
(function (binarySearchTree) {
    var BinarySearchTree = /** @class */ (function () {
        function BinarySearchTree(key, value) {
            this.key = key;
            this.value = value;
            this.leftTree = null;
            this.rightTree = null;
        }
        BinarySearchTree.prototype.add = function (key, value) {
            if (key === this.key) {
                this.value = value;
            }
            else if (key < this.key) {
                if (this.leftTree == null) {
                    this.leftTree = new BinarySearchTree(key, value);
                }
                else {
                    this.leftTree.add(key, value);
                }
            }
            else {
                if (this.rightTree == null) {
                    this.rightTree = new BinarySearchTree(key, value);
                }
                else {
                    this.rightTree.add(key, value);
                }
            }
            return this;
        };
        BinarySearchTree.prototype.balance = function () {
            return this.balanceRes(this);
        };
        BinarySearchTree.prototype.balanceRes = function (res) {
            var leftLvl = -1;
            var rightLvl = -1;
            if (res.leftTree) {
                res.leftTree = res.leftTree.balance();
                leftLvl = res.leftTree.lvl();
            }
            if (res.rightTree) {
                res.rightTree = res.rightTree.balance();
                rightLvl = res.rightTree.lvl();
            }
            if (leftLvl - rightLvl > 1) {
                res = res.rightRotate().balance();
            }
            else if (leftLvl - rightLvl < -1) {
                res = res.leftRotate().balance();
            }
            return res;
        };
        BinarySearchTree.prototype.rightRotate = function () {
            if (this.leftTree === null) {
                throw onerror;
            }
            var res = this.leftTree;
            this.leftTree = res.rightTree;
            res.rightTree = this;
            return res;
        };
        BinarySearchTree.prototype.leftRotate = function () {
            if (this.rightTree === null) {
                throw onerror;
            }
            var res = this.rightTree;
            this.rightTree = res.leftTree;
            res.leftTree = this;
            return res;
        };
        BinarySearchTree.prototype.lvl = function () {
            var left = -1;
            var right = -1;
            if (this.leftTree) {
                left = this.leftTree.lvl();
            }
            if (this.rightTree) {
                right = this.rightTree.lvl();
            }
            return (left > right ? left : right) + 1;
        };
        BinarySearchTree.prototype.find = function (key) {
            if (this.key === key) {
                return this.value;
            }
            if (this.key > key) {
                if (this.leftTree) {
                    return this.leftTree.find(key);
                }
            }
            if (this.key < key) {
                if (this.rightTree) {
                    return this.rightTree.find(key);
                }
            }
            return null;
        };
        BinarySearchTree.prototype.leftList = function () {
            var res;
            if (this.leftTree) {
                res = this.leftTree.leftList();
                if (res == null) {
                    res = this.leftTree;
                    this.leftTree = res.rightTree;
                }
            }
            else {
                res = null;
            }
            return res;
        };
        BinarySearchTree.prototype.rightList = function () {
            var res;
            if (this.rightTree) {
                res = this.rightTree.rightList();
                if (res == null) {
                    res = this.rightTree;
                    this.rightTree = res.leftTree;
                }
            }
            else {
                res = null;
            }
            return res;
        };
        BinarySearchTree.prototype.delete = function (key) {
            var _a, _b;
            var res = [this, null];
            if (this.key === key) {
                var newTree = null;
                if (this.leftTree) {
                    newTree = this.leftTree.rightList();
                    if (newTree == null) {
                        newTree = this.leftTree;
                        this.leftTree = this.leftTree.leftTree;
                    }
                }
                else if (this.rightTree) {
                    newTree = this.rightTree.leftList();
                    if (newTree == null) {
                        newTree = this.rightTree;
                        this.rightTree = this.rightTree.rightTree;
                    }
                }
                else {
                    res[0] = null;
                }
                res[1] = this.value;
                if (newTree) {
                    this.key = newTree.key;
                    this.value = newTree.value;
                }
            }
            else if (this.key > key) {
                if (this.leftTree) {
                    _a = this.leftTree.delete(key), this.leftTree = _a[0], res[1] = _a[1];
                }
            }
            else if (this.key < key) {
                if (this.rightTree) {
                    _b = this.rightTree.delete(key), this.rightTree = _b[0], res[1] = _b[1];
                }
            }
            return res;
        };
        BinarySearchTree.prototype.toString = function (lvl) {
            if (lvl === void 0) { lvl = 0; }
            var i;
            var res = "";
            if (this.rightTree) {
                res += this.rightTree.toString(lvl + 1);
            }
            for (i = 0; i < lvl; i++) {
                res += "  |";
            }
            res += "--* " + this.key + " : " + this.value + "\n";
            if (this.leftTree) {
                res += this.leftTree.toString(lvl + 1);
            }
            return res;
        };
        BinarySearchTree.prototype.toSVG = function (width, height) {
            var lvl = this.lvl();
            var r = 35;
            var svgHeight = r * Math.pow(2, lvl);
            var svgWidth = svgHeight * 4;
            var vertCoef = 1 / (svgHeight / height);
            var horizCoef = 1 / (svgWidth / width);
            var coef = vertCoef < horizCoef ? vertCoef : horizCoef;
            return "<g transform=\"scale(" + coef + ")\">" + this.nonScaledSVG(svgWidth / 2, r + 10, r) + "</g>";
        };
        BinarySearchTree.prototype.nonScaledSVG = function (x, y, r) {
            var lvl = this.lvl();
            var res = "\n";
            if (this.leftTree) {
                var xl = x - r * Math.pow(2, lvl);
                var yl = y + r * 2;
                res += "\t\t<line x1=\"" + x + "\" y1=\"" + y + "\" x2=\"" + xl + "\" y2=\"" + yl + "\" stroke=\"lightgrey\" stroke-width=\"3\" />";
                res += this.leftTree.nonScaledSVG(xl, yl, r);
            }
            if (this.rightTree) {
                var xr = x + r * Math.pow(2, lvl);
                var yr = y + r * 2;
                res += "\t\t<line x1=\"" + x + "\" y1=\"" + y + "\" x2=\"" + xr + "\" y2=\"" + yr + "\" stroke=\"lightgrey\" stroke-width=\"3\" />";
                res += this.rightTree.nonScaledSVG(xr, yr, r);
            }
            res += "\t\t<circle cx=\"" + x + "\" cy=\"" + y + "\" r=\"" + r + "\" stroke=\"lightgrey\" stroke-width=\"4\" fill=\"grey\"/>\n" +
                "\t\t<text alignment-baseline=\"middle\" text-anchor=\"middle\" fill=\"lightgrey\" x=\"" + x + "\" y=\"" + y + "\">" + this.key + "|" + this.value + "</text>";
            return res.replace("NaN", "-");
        };
        BinarySearchTree.prototype.getWidth = function () {
            var res = 80;
            if (this.rightTree) {
                res += this.rightTree.getWidth();
            }
            if (this.leftTree) {
                res += this.leftTree.getWidth();
            }
            return res;
        };
        return BinarySearchTree;
    }());
    binarySearchTree.BinarySearchTree = BinarySearchTree;
})(binarySearchTree || (binarySearchTree = {}));
