function hii(){
    console.log("hello");
}

function hello(callback){
    console.log("hii");
    setTimeout(callback, 5000)
}

hello(hii);

console.log("This will be logged before callbacks");