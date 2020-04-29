/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

require('dotenv').config();

var chalk = require('chalk');
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = process.env.REDIRECT_URI; // Your redirect uri
var frontend_uri = process.env.FRONTEND_URI // front end uri

var PORT = 8888;

var app = express();

// added body parser to parse json payload. Otherwise the request will not send the given payload
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public')).use(cors());

app.get('/login', function (req, res) {
  // your application requests authorization
  var scope = process.env.SCOPE;
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    }),
  );
});

app.get('/callback', function (req, res) {
  var code = req.query.code || null;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(client_id + ':' + client_secret).toString('base64'),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
        refresh_token = body.refresh_token;

      // res.status(200).send({
      //   access_token: access_token,
      //   refresh_token: refresh_token,
      // });
      res.redirect(frontend_uri + '?access_token=' + access_token);
    } else {
      res.status(response.statusCode).send({
        message: 'invalid_code',
        body: body,
      });
    }
  });
});

app.get('/refresh_token', function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(client_id + ':' + client_secret).toString('base64'),
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    } else {
      res.status(401).end();
    }
  });
});

app.all('*', function (req, res, next) {
  var auth_token = req.get('Authorization');
  var method = req.method.toLowerCase();
  var url = req.url;

  var options = {
    url: process.env.API_BASE + url,
    headers: {
      Authorization: auth_token,
    },
    json: true,
  };

  //Only get method otherwise error status 400. Maybe there is a better fix
  method !== 'get' ? (options.body = req.body) : options;

  request[method](options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.status(200).send(body);
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});

var prefix = '==>';

// clear console
process.stdout.write('\x1B[2J\x1B[0f');
// print messages
console.info('\n\n\n');
console.log(prefix, chalk.white('Spotify proxy server'));
console.log(prefix, chalk.white('Listening on port: '), chalk.red(PORT));
console.log('\n');
console.log(
  chalk.white('Go to following URL: '),
  chalk.white.underline('http://localhost:' + PORT),
);

app.listen(PORT);