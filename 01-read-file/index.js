const  fs  = require('fs');
const  path   = require('path');

const stream_on = fs.createReadStream(path.resolve(__dirname, 'text.txt'), 'utf8');

stream_on.on('data', data => console.log(data.toString()));