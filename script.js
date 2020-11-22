let myPromise = new Promise(function(myResolve) {
    setTimeout(function() {myResolve("Hello-hello! This is so nice to see you using ES6");}, 3000);
});
myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
});


// Hello-hello! This is so nice to see you using ES6