var Shape = {
    constructor: function(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;

        return this;
    },
    getX: function() {
        return this._x;
    },
    setX: function(x){
        this._x = x;
        return this;
    },
    getY: function() {
        return this._y;
    },
    setY: function(y){
        this._y = y;
        return this;
    },
    getColor: function() {
        return this._color;
    },
    setColor: function(color){
        this._color = color;
        return this;
    },
    toString: function () {
        var shapeAsString = "X: " + this._x + ", Y: " + this._y + ", Color: " + this._color;

        return shapeAsString;
    }
};
