function receivesAFunction(callback){
    callback(()=> console.log (`Call this ${callback}`));
}

function returnsANamedFunction(namedfcn){
    return function namedfcn(){
        console.log("This is a named function");
    }
}

function returnsAnAnonymousFunction(anonfcn){
    return function(){
        console.log("This is an anonymous function");
    }
}