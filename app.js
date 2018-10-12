/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert('The sum of two numbers is: ' + calculator.sum());
alert('The result of multiplying two numbers is: ' + calculator.mul());


/*
Write the applyAll function (func, arg1, arg2 ...) that takes
the func function and an arbitrary number of arguments.
*/

function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

alert( applyAll(sum, 1, 2, 3) );
alert( applyAll(mul, 2, 3, 4) );
alert( applyAll(Math.max, 2, -2, 3) );
alert( applyAll(Math.min, 2, -2, 3) );



/*
Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
*/

function f(x) {
    alert(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}



/*
Write the askPassword() function which should  check the password and then call
user.loginOk/loginFail depending on the answer.
 */

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));





/*Create a function sumArgs (), which will summarize all its arguments:*/

function sumArgs() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

alert( sumArgs(4, 5, 6) );