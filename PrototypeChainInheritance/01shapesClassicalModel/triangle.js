var worldObject = worldObject || {};

(function (worldObject) {
    function Triangle(x,y,color,bX,bY,cX,cY) {
        worldObject.TwoPointFigure.apply(this, arguments);
        this._bX = bX;
        this._bY = bY;
        this._cX = cX;
        this._cY = cY;
    }

    Triangle.extends(worldObject.TwoPointFigure);

    Triangle.prototype.getcX = function() {
        return this._cX;
    };

    Triangle.prototype.setcX = function(cX) {
        this._cX = cX;

        return this;
    };

    Triangle.prototype.getcY = function() {
        return this._cY;
    };

    Triangle.prototype.setcY = function(cY) {
        this._cY = cY;
        return this;
    };

    Triangle.prototype.toString = function () {
        var triangleAsString = worldObject.TwoPointFigure.prototype.toString.call(this) +
                               ", cX = " + this.getcX() + ", cY = " + this.getcY();
        return triangleAsString;
    };

    worldObject.Triangle = Triangle;
}(worldObject));