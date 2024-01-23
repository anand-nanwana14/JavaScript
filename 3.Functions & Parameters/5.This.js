const obj = {
    name: "MyObject",
    sayHello: function() {
      console.log("Hello, " + this.name + "!");
    }
  };
  
  obj.sayHello(); // Outputs: Hello, MyObject!
  