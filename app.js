var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var urlencodedparser = bodyParser.urlencoded({ extended: false });

var index = require("./routes/index");

var app = express();

// view engine setup
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

//Email setup

var maillist = [
  "services@squareconsultant.com",
  "er.sanketkariya@gmail.com"
];

var transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "services@squareconsultant.com",
    pass: "Sanko@admin@24697"
  }
});

app.post("/data", urlencodedparser, function(req, res) {
  var data = req.body;
  console.log(data);

  var mailOptions = {
    from: "services@squareconsultant.com",
    to: maillist,
    subject: "New Client Query",
    text:
      "Client Details" +
      "\n" +
      "Name: " +
      JSON.stringify(data.name) +
      "\n Email: " +
      JSON.stringify(data.email) +
      "\n Phone: " +
      JSON.stringify(data.phone) +
      "\n Country: " +
      JSON.stringify(data.country) +
      "\n Message: " +
      JSON.stringify(data.message)
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send("something went wrong");
    } else {
      console.log("Email sent: " + info.response);
      // res.send("email send");
    }
  });
  res.redirect("/contact");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
