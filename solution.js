function greetNames(names) {
    names.forEach(name => {
      if (name.toLowerCase().startsWith('j')) {
        console.log(`Goodbye J${name}`);
      } else {
        console.log(`Hello ${name}`);
      }
    });
  }
  
  // Example usage:
  const nameArray = ['John', 'Alice', 'Bob', 'Jennifer', 'Mike', 'Jessica'];
  greetNames(nameArray);