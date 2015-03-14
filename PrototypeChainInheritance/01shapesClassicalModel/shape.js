var worldObject = worldObject || {};

(function(worldObject) {
    function Shape(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    Shape.prototype.getX = function () {
        return this._x;
    };

    Shape.prototype.setX = function (x) {
        this._x = x;

        return this;
    };

    Shape.prototype.getColor = function () {
        return this._color;
    };

    Shape.prototype.setColor = function (color) {
        this._color = color;;

        return this;
    };

    Shape.prototype.getY = function () {
        return this._y;
    };

    Shape.prototype.setY = function (y) {
        this._y = y;

        return this;
    };

    Shape.prototype.toString = function () {
        var shapeAsString = "X: " + this._x + " Y: " + this._y + " Color: " + this._color;

        return shapeAsString;
    };

    worldObject.Shape = Shape;

}(worldObject));