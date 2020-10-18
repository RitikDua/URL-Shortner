const router = require("express").Router();

let URL = require("../model/url.model");

module.exports = app => {
  app.route("/").post((req, res) => {
    //console.log(req.body.url + " Ritik ");
    if (checkUrl(req.body.url)) {
      const originalurl = req.body.url;
      const shorturl = Number(new Date().getTime());
      const url = new URL({
        originalurl,
        shorturl
      });
      url
        .save()
        .then(() =>
          res.json({ original_url: req.body.url, short_url: shorturl })
        )
        .catch(err => res.status(400).json({ error: "invalid URL" }));
    } else {
      res.json({ error: "invalid URL" });
    }
    //  res.json({ h: "s" });
    // console.log(req.body.url);
  });

  /*
  app.route("/find").get((req, res) => {
    URL.find()
      .then((r) => res.json(r))
      .catch((err) => res.status(400).json("Error"));
  });*/
  app.route("/:query").get((req, res) => {
    if (/^\d+$/.test(req.params.query)) {
      var nums = parseInt(req.params.query);
      URL.findOne({ shorturl: nums })
        .then(r => {
          console.log(r.originalurl);
          res.writeHead(301, { location: r.originalurl });
          res.end();
        })
        .catch(err => res.status(400).json("Error " + err));
    } else {
      res.json({ error: "invalid URL" });
    }
  });
};

function checkUrl(url) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    url
  );
}
