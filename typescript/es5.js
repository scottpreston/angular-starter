var oo = {
    foo: function() {
        return 'bar';
    }
};

var ooo = function() {
    this.foo = function() {
        return 'barbar';
    }
};

console.log(oo.foo());
console.log(new ooo().foo());