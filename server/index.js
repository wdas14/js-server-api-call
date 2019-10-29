const  express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.route('/jobs').get((req,res) => {
    // how to get query options vvvv
    // console.log(req.query.location);
    request(
        { url: `https://5fa29f61-91af-41fe-bac6-22275a1be02e@www.reed.co.uk/api/1.0/search` },
        (error, response, body) => {
            // console.log(response);
          if (response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: 'ah shit summit broke' });
          }

          res.json(JSON.parse(body));
        }
      )
});

app.get('/',((req,res) => {
    res.send('Welcome');
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));