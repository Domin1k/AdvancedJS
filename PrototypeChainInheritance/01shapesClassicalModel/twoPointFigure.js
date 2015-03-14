var worldObject = worldObject || {};

(function (worldObject) {
    function TwoPointFigure(x, y, color, bX, bY) {
        worldObject.Shape.apply(this, arguments);
        this._bX = bX;
        this._bY = bY;
    };

    TwoPointFigure.extends(worldObject.Shape);

    TwoPointFigure.prototype.getbX = function() {
        return this._bX;
    };

    TwoPointFigure.prototype.setbX = function(bX) {
        this._bX = bX;
        return this;
    };

    TwoPointFigure.prototype.getbY = function() {
        return this._bY;
    };

    TwoPointFigure.prototype.setbY = function(bY) {
        this._bY = bY;
        return this;
    };

    TwoPointFigure.prototype.toString = function () {
        var twoPointFigureAsString = worldObject.Shape.prototype.toString.call(this) +
            ", bX = " + this.getbX() + ", bY = " + this.getbY();
        return twoPointFigureAsString;
    };

    worldObject.TwoPointFigure = TwoPointFigure;
}(worldObject));