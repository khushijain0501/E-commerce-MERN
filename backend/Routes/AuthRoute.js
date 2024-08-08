/*const {Signup}=require("../Controllers/AuthController")

const router= require("express").Router();

router.post('/signup',Signup);

module.exports=router*/

const { Signup,Login,SaveCart,GetCart } = require("../Controllers/AuthController");
const {userVerification}=require("../Middlewares/AuthMiddleware.js")
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification, (req, res) => res.json({ status: true, user: req.user }))
router.post("/saveCart", SaveCart); 
router.get("/getCart",GetCart)

module.exports = router;