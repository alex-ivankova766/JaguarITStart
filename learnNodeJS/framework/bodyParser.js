// module.exports = (req, res) => {
//     let body = "";
//     console.log('body created')

//     req.on('data', (chunk) => {
//         body += chunk;
//         console.log(body)
//     })

//     req.on('end', () => {
//         if(body) {
//             req.body = JSON.parse(body);
//             console.log(req.body)
//         }
        
//     })
// };