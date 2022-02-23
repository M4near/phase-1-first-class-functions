function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    function myFunc (x,y){
        return x+y
    }
    return myFunc
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('something')
    }
}