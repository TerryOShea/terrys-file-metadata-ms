'use strict';

const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
})

app.post('/get_file_size', upload.single('uploadedFile'), (req, res) => {
  res.send(JSON.stringify({size: req.file.size + ' bytes'}));
})

app.listen(process.env.PORT || 3500, () => {
	console.log('listening on 3500');
});