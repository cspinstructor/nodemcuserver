const express = require('express');
const server = express();

server.get('/', (req, res) => {
  var value1 = req.query.sensor1;

  const responsestr = `sensor1: ${value1}`;

  res.status(200).send(responsestr);
  console.log(responsestr);
});


server.listen(3000, () => {
  console.log('server started on port 3000');
});
