let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(console.log); // 1 - это как с return и функцией,
  //как только промис принимает значение, он схлапывается.