var worldObject = worldObject || {};

(function (worldObject) {
    function Line(x, y, color, bX, bY) {
        worldObject.TwoPointFigure.apply(this, arguments);
        this._bX = bX;
        this._bY = bY;
    };

    Line.extends(worldObject.TwoPointFigure);

    worldObject.Line = Line;
}(worldObject));