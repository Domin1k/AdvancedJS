var TwoPointAbstractFigure = Shape.extends({
   constructor: function(x,y,color,bX,bY) {
       this._base.constructor.apply(this, arguments);
       this._bX = bX;
       this._bY = bY;
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
   toString: function() {
       var twoPointFigAsString = this._base.toString.call(this) + ", bX = " + this.getbX() + ", bY = " + this.getbY();

       return twoPointFigAsString;
   }
});