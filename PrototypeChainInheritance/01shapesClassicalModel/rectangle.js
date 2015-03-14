var worldObject = worldObject || {};

(function (worldObject) {
    function Rectangle(x, y, color, width, height){
        worldObject.Shape.apply(this, arguments);
        this._width = width;
        this._height = height;

        return this;
    }
    Rectangle.extends(worldObject.Shape);

    Rectangle.prototype.getWidth = function () {
        return this._width;
    };

    Rectangle.prototype.setWidth = function(width){
        this._width = width;

        return this;
    };

    Rectangle.prototype.getHeight = function () {
        return this._height;
    };

    Rectangle.prototype.setHeight = function(height){
        this._height = height;

        return this;
    };

    Rectangle.prototype.toString = function () {
        var rectAsString = worldObject.Shape.prototype.toString.call(this) + " Width: " + this.getWidth() + " Height: " + this.getHeight();

        return rectAsString;
    };

    worldObject.Rectangle = Rectangle;
}(worldObject));