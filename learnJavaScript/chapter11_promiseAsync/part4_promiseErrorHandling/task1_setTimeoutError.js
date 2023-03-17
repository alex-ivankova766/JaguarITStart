new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);

//ошибка генерируется асинхронно, поэтому кетч не ловит её.