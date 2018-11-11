require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect with MongoDB
require('./lib/mongooseConnect');

// Cors
app.use(cors());

// parse applicartion/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// Error handler
app.use( (err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({ ok: false, error: err.message });
})

app.listen(process.env.PORT, () => {
    console.log('Listen in port: ', process.env.PORT);
});

module.exports = app;