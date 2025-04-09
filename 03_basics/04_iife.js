// Immediately Invoked Function Expressions (IIFE)


/***JavaScript to create private scopes,
preventing variable collisions and global 
namespace pollution, while also enabling
immediate execution of code and facilitating 
the Module Pattern***/

(function chai(){// named iife
    // named IIFE
    console.log(`DB CONNECTED`); 
})();

( (name) => { // unnamed iifi
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
