let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          alert(`${urls[num]}: ${result.reason}`);
        }
      });
    });

    /* 
    result:
    [
  {status: 'fulfilled', value: ...объект ответа...},
  {status: 'fulfilled', value: ...объект ответа...},
  {status: 'rejected', reason: ...объект ошибки...}
]*/

// полифил:

if(!Promise.allSettled) {
    Promise.allSettled = function(promises) {
      return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
        status: 'fulfilled',
        value: value
      }), error => ({
        status: 'rejected',
        reason: error
      }))));
    };
  }