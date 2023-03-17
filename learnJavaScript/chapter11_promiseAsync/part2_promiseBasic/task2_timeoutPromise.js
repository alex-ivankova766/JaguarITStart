function delay(ms) {
    return new Promise((resolve, reject) => { // reject прописан для себя, чтобы запомнился :)
        setTimeout(() => resolve("done"), ms) // ЗАПОМНИТЬ можно без done
    });
  }
  
delay(3000).then(() => console.log('выполнилось через 3 секунды'));