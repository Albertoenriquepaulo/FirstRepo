function User() {

    var name = "my name";

    this.foo = function() {
        // one function per User instance
        // can access 'name' variable
    };
}

User.prototype.bar = function() {
    // one function shared by all User instances
    // cannot access 'name' variable
    //this.name = "Alberto";
};

var a = new User();
var b = new User();

//console.log(a.foo === b.foo); // false; each instance has its own foo()
//console.log(a.bar === b.bar); // true; both instances use the same bar()

console.log(a.name);
console.log(b.name);