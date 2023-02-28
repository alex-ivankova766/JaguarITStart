String.prototype.capitalize = function () {
    if (this == "") return;
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
};