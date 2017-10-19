module.exports = function(app, db) {
  app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('On Login')
  });
};
