var Rectangle = Shape.extends({
   constructor: function(x, y, color, width, height) {
       this._base.constructor.apply(this, arguments);
       this._width = width;
       this._height = height;
       return this;
   },
   getWidth: function() {
       return this._width;
   },
   setWidth: function(width) {
       this._width = width;
       return this;
   },
   getHeight: function() {
       return this._height;
   },
   setHeight: function(height) {
       this._height = height;
       return this;
   },
   toString: function() {
       var rectangleAsString = this._base.toString.call(this) + ", Width = " + this.getWidth() +
                                ", Height = " + this.getHeight();
       return rectangleAsString;
   }
});