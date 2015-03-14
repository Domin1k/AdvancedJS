var worldObject = worldObject || {};

(function (worldObject) {
    function Circle(x, y,color, radius) {
        worldObject.Shape.apply(this, arguments);
        this._radius = radius;
    }
    Circle.extends(worldObject.Shape);
    Circle.prototype.getRadius = function () {
        return this._radius;
    };

    Circle.prototype.setRadius = function (radius) {
        this._radius = radius;

        return this;
    };

    Circle.prototype.toString = function () {
        return worldObject.Shape.prototype.toString.call(this) + " Radius: "  + this._radius;
    };

    worldObject.Circle = Circle;

}(worldObject));