var Triangle = Shape.extends({
    constructor: function(x, y, color, bX, bY, cX, cY) {
        this._base.constructor.apply(this, arguments);
        this._bX = bX;
        this._bY = bY;
        this._cX = cX;
        this._cY = cY;
        return this;
    },
    getbX: function () {
        return this._bX;
    },
    setbX:function(bX) {
        this._bX = bX;
        return this;
    },
    getbY: function () {
        return this._bY;
    },
    setbY:function(bY) {
        this._bY = bY;
        return this;
    },
    getcX: function () {
        return this._cX;
    },
    setcX:function(cX) {
        this._cX = cX;
        return this;
    },
    getcY: function () {
        return this._cY;
    },
    setcY:function(cY) {
        this._cY = cY;
    },
    toString: function() {
        var triangleAsString = this._base.toString.call(this) +
            ", bX = " + this.getbX() + ", bY = " + this.getbY() +
            ", cX = " + this.getcX() + ", cY = " + this.getcY();

        return triangleAsString;
    }
});