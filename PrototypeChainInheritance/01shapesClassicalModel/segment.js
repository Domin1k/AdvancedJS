var worldObject = worldObject || {};

(function (worldObject) {
    function Segment(x, y, color, bX, bY) {
        worldObject.TwoPointFigure.apply(this, arguments);
    };

    Segment.extends(worldObject.TwoPointFigure);

    worldObject.Segment = Segment;
}(worldObject));