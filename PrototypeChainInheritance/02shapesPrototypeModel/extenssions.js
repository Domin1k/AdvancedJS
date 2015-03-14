Object.prototype.extends = function (properties) {
    function F() {};
    F.prototype = Object.create(this);
    for (var property in properties) {
        F.prototype[property] = properties[property];
    };

    if (this._base) {
        F.prototype._base = this._base;
    }else {
        F.prototype._base = this;
    }
    return new F();
};