const express=require("express");
const router=express.Router();

const contactForm=require("../controllers/contact-controller")

router.post("/contact",contactForm.contactForm);


module.exports=router