const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//    bcrypt.hash(password, salt, (err, hash) => {
//        console.log(hash);
//    })
// });

let hashedPassword ='$2b$10$V.tZVffvqVICT3HCYZY2IOlZ4h5owVH/x2iFyEZworQzHmd8nd4s.';

bcrypt.compare(password, hashedPassword, (err, res) => {
   console.log(res);
});

// let data = {
//     id: 10
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log(decoded);
// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// };
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();
//
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.error('Data was changed, don\'t trust');
// }
