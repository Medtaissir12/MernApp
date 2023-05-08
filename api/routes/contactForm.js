const router = require("express").Router();
const ContactForm = require("../models/contactForm");

router.post("/", async (req, res) => {
  const newContactForm = new ContactForm({
    name: req.body.name,
    subject: req.body.subject,
    message: req.body.message,
    email: req.body.email,
  });

  try {
    const savedContactForm = await newContactForm.save();
    res.status(201).json(savedContactForm);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error submitting contact form");
  }
});

module.exports = router;
