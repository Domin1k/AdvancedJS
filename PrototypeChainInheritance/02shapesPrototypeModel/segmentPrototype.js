var Segment = Line.extends({
   constructor: function(x,y,color,bX,bY) {
       this._base.constructor.apply(this, arguments); // Doesn't work
       //Line.constructor(x, y, color, bX, bY); // Works
       return this;
   }
});