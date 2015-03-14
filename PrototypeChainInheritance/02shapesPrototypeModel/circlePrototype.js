var Circle = Shape.extends({
    constructor: function(x, y, color, radius) {
        this._base.constructor.apply(this, arguments);
        this._radius = radius;
        return this;
    },
    getRadius: function() {
        return this._radius;
    },
    setRadius: function(radius) {
        this._radius = radius;
        return this;
    },
    toString: function() {
        var circleAsString = this._base.toString.call(this) + ", Radius: " + this.getRadius();
        return circleAsString;
    }
});