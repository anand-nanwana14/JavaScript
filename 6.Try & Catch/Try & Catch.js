try {
    // Code that may throw an exception
    var result = 10 / "0"; // This will throw a division by zero error
    console.log(result); // This line won't be executed if an exception occurs
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred:");
  }
  finally{
    console.log("Hello world");
  }