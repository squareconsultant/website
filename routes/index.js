var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/about", function(req, res, next) {
  res.render("about", { title: "Express" });
});
router.get("/blog-detail", function(req, res, next) {
  res.render("blog-detail", { title: "Express" });
});
router.get("/blog-single", function(req, res, next) {
  res.render("blog-single", { title: "Express" });
});
router.get("/blog", function(req, res, next) {
  res.render("blog", { title: "Express" });
});
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Express" });
});
router.get("/donate", function(req, res, next) {
  res.render("donate", { title: "Express" });
});
router.get("/error-page", function(req, res, next) {
  res.render("error-page", { title: "Express" });
});
router.get("/gallery-single", function(req, res, next) {
  res.render("gallery-single", { title: "Express" });
});
router.get("/gallery", function(req, res, next) {
  res.render("gallery", { title: "Express" });
});
router.get("/index-2", function(req, res, next) {
  res.render("index-2", { title: "Express" });
});
router.get("/project-single", function(req, res, next) {
  res.render("project-single", { title: "Express" });
});
router.get("/services-single", function(req, res, next) {
  res.render("services-single", { title: "Express" });
});
router.get("/services", function(req, res, next) {
  res.render("services", { title: "Express" });
});
module.exports = router;