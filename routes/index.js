// Requiring all the packages
var express = require("express"),
    nodemailer = require("nodemailer"),
    { google } = require("googleapis"),
    OAuth2 = google.auth.OAuth2,
    router = express.Router({ mergeParams: true });


///////////////////////////////////////////////
///////-------------Home Page--------------////
///////////////////////////////////////////////
router.get("/", function (req, res) {
  res.redirect("/home");
});
///////////////////////////////////////////////
///////------Rander Home Page========-----////
///////////////////////////////////////////////
router.get("/home", function (req, res) {
  res.render("index");
});


//////////////////////////////////////////////
//////////////////////////////////////////////
/////////RESIDENTIAL GARAGE DOORS/////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

///////////////////////////////////////////////
//---Rander garage-door-installation Page----//
///////////////////////////////////////////////
router.get("/garage-door-installation", function (req, res) {
  res.render("garage-door-installation", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
////--Rander garage-door-repair Page-----//////
///////////////////////////////////////////////
router.get("/garage-door-repair", function (req, res) {
  res.render("garage-door-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------Rander garage-door-opener Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-opener", function (req, res) {
  res.render("garage-door-opener", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------Rander garage-door-tension-cables-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-tension-cables-repair", function (req, res) {
  res.render("garage-door-tension-cables-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------Rander overhead-garage-door-repair Page========-----////
///////////////////////////////////////////////
router.get("/overhead-garage-door-repair", function (req, res) {
  res.render("overhead-garage-door-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-spring-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-spring-repair", function (req, res) {
  res.render("garage-door-spring-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-opener-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-opener-repair", function (req, res) {
  res.render("garage-door-opener-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-maintenance Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-maintenance", function (req, res) {
  res.render("garage-door-maintenance", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-safety-sensor-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-safety-sensor-repair", function (req, res) {
  res.render("garage-door-safety-sensor-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------emergency-garage-door-repair-and-maintenance Page========-----////
///////////////////////////////////////////////
router.get("/emergency-garage-door-repair-and-maintenance", function (req, res) {
  res.render("emergency-garage-door-repair-and-maintenance", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-tension-spring-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-tension-spring-repair", function (req, res) {
  res.render("garage-tension-spring-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-extension-spring-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-extension-spring-repair", function (req, res) {
  res.render("garage-extension-spring-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-cable-repair Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-cable-repair", function (req, res) {
  res.render("garage-door-cable-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-opener-installation Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-opener-installation", function (req, res) {
  res.render("garage-door-opener-installation", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-tune-ups Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-tune-ups", function (req, res) {
  res.render("garage-door-tune-ups", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------commercial-garage-doors Page========-----////
///////////////////////////////////////////////
router.get("/commercial-garage-doors", function (req, res) {
  res.render("commercial-garage-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------residential-garage-doors Page========-----////
///////////////////////////////////////////////
router.get("/residential-garage-doors", function (req, res) {
  res.render("residential-garage-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------custom-made-garage-doors Page========-----////
///////////////////////////////////////////////
router.get("/custom-made-garage-doors", function (req, res) {
  res.render("custom-made-garage-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------rolling-door-repair-and-maintenance Page========-----////
///////////////////////////////////////////////
router.get("/rolling-door-repair-and-maintenance", function (req, res) {
  res.render("rolling-door-repair-and-maintenance", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-door-track-rollers Page========-----////
///////////////////////////////////////////////
router.get("/garage-door-track-rollers", function (req, res) {
  res.render("garage-door-track-rollers", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------off-track-garage-door-repair Page========-----////
///////////////////////////////////////////////
router.get("/off-track-garage-door-repair", function (req, res) {
  res.render("off-track-garage-door-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------garage-motor-belt-chain-replacement Page========-----////
///////////////////////////////////////////////
router.get("/garage-motor-belt-chain-replacement", function (req, res) {
  res.render("garage-motor-belt-chain-replacement", { currentUrl: req.originalUrl });
});

//////////////////////////////////////////////
//////////////////////////////////////////////
/////////RESIDENTIAL GARAGE///////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

///////////////////////////////////////////////
///////------sibling-gate-repair Page========-----////
///////////////////////////////////////////////
router.get("/sibling-gate-repair", function (req, res) {
    res.render("sibling-gate-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------overhead-gate-repair Page========-----////
///////////////////////////////////////////////
router.get("/overhead-gate-repair", function (req, res) {
    res.render("overhead-gate-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------residential-driveway-gate-repair Page========-----////
///////////////////////////////////////////////
router.get("/residential-driveway-gate-repair", function (req, res) {
    res.render("residential-driveway-gate-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------emergency-gate-repair Page========-----////
///////////////////////////////////////////////
router.get("/emergency-gate-repair", function (req, res) {
    res.render("emergency-gate-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------gate-operator-repair Page========-----////
///////////////////////////////////////////////
router.get("/gate-operator-repair", function (req, res) {
    res.render("gate-operator-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------preventative-gate-maintenance Page========-----////
///////////////////////////////////////////////
router.get("/preventative-gate-maintenance", function (req, res) {
    res.render("preventative-gate-maintenance", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------rolling-wheel-replacement Page========-----////
///////////////////////////////////////////////
router.get("/rolling-wheel-replacement", function (req, res) {
    res.render("rolling-wheel-replacement", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------gate-chain-repair Page========-----////
///////////////////////////////////////////////
router.get("/gate-chain-repair", function (req, res) {
    res.render("gate-chain-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------gate-motor-repair Page========-----////
///////////////////////////////////////////////
router.get("/gate-motor-repair", function (req, res) {
    res.render("gate-motor-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------welding-service Page========-----////
///////////////////////////////////////////////
router.get("/welding-service", function (req, res) {
    res.render("welding-service", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------iron-gate-repair-and-maintenance Page========-----////
///////////////////////////////////////////////
router.get("/iron-gate-repair-and-maintenance", function (req, res) {
    res.render("iron-gate-repair-and-maintenance", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------rolling-gate-operator-installation-and-repaire Page========-----////
///////////////////////////////////////////////
router.get("/rolling-gate-operator-installation-and-repair", function (req, res) {
    res.render("rolling-gate-operator-installation-and-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------overhead-gate-operator-installation-and-repair Page========-----////
///////////////////////////////////////////////
router.get("/overhead-gate-operator-installation-and-repair", function (req, res) {
    res.render("overhead-gate-operator-installation-and-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------emergency-gate-operator-repair Page========-----////
///////////////////////////////////////////////
router.get("/emergency-gate-operator-repair", function (req, res) {
    res.render("emergency-gate-operator-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------residential-and-commercial-driveway-gate-operator-repair Page========-----////
///////////////////////////////////////////////
router.get("/residential-and-commercial-driveway-gate-operator-repair", function (req, res) {
    res.render("residential-and-commercial-driveway-gate-operator-repair", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------preventative-gate-operator-maintenance Page========-----////
///////////////////////////////////////////////
router.get("/preventative-gate-operator-maintenance", function (req, res) {
    res.render("preventative-gate-operator-maintenance", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------gate-operator-programming Page========-----////
///////////////////////////////////////////////
router.get("/gate-operator-programming", function (req, res) {
    res.render("gate-operator-programming", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------gate-track-installation Page========-----////
///////////////////////////////////////////////
router.get("/gate-track-installation", function (req, res) {
    res.render("gate-track-installation", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------custom-wood-sliding-swing-gates Page========-----////
///////////////////////////////////////////////
router.get("/custom-wood-sliding-swing-gates", function (req, res) {
    res.render("custom-wood-sliding-swing-gates", { currentUrl: req.originalUrl });
});

//////////////////////////////////////////////
//////////////////////////////////////////////
/////////////Commercial///////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

///////////////////////////////////////////////
///////------rolling-steel-door Page========-----////
///////////////////////////////////////////////
router.get("/rolling-steel-door", function (req, res) {
  res.render("rolling-steel-door", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------service-doors Page========-----////
///////////////////////////////////////////////
router.get("/service-doors", function (req, res) {
  res.render("service-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------insulated-service-doors Page========-----////
///////////////////////////////////////////////
router.get("/insulated-service-doors", function (req, res) {
  res.render("insulated-service-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------counter-shutters Page========-----////
///////////////////////////////////////////////
router.get("/counter-shutters", function (req, res) {
  res.render("counter-shutters", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------sectional-doors Page========-----////
///////////////////////////////////////////////
router.get("/sectional-doors", function (req, res) {
  res.render("sectional-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------security-doors Page========-----////
///////////////////////////////////////////////
router.get("/security-doors", function (req, res) {
  res.render("security-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------storefront-security-doors Page========-----////
///////////////////////////////////////////////
router.get("/storefront-security-doors", function (req, res) {
  res.render("storefront-security-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------security-and-hurricane-shutters Page========-----////
///////////////////////////////////////////////
router.get("/security-and-hurricane-shutters", function (req, res) {
  res.render("security-and-hurricane-shutters", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------pharmacy-doors Page========-----////
///////////////////////////////////////////////
router.get("/pharmacy-doors", function (req, res) {
  res.render("pharmacy-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------security-cases Page========-----////
///////////////////////////////////////////////
router.get("/security-cases", function (req, res) {
  res.render("security-cases", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------specialty-doors Page========-----////
///////////////////////////////////////////////
router.get("/specialty-doors", function (req, res) {
  res.render("specialty-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------sound-doors Page========-----////
///////////////////////////////////////////////
router.get("/sound-doors", function (req, res) {
  res.render("sound-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------hanger-doors Page========-----////
///////////////////////////////////////////////
router.get("/hanger-doors", function (req, res) {
  res.render("hanger-doors", { currentUrl: req.originalUrl });
});
///////////////////////////////////////////////
///////------accordian-doors Page========-----////
///////////////////////////////////////////////
router.get("/accordian-doors", function (req, res) {
  res.render("accordian-doors", { currentUrl: req.originalUrl });
});

///////////////////////////////////////////////
///////------Rander Contact Page========-----////
///////////////////////////////////////////////
router.get("/contact", function (req, res) {
  res.render("contact");
});

router.post("/contact", function (req, res) {

  const userName = req.body.username;
  const phoneNumber = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  try {

    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID, // ClientID
      process.env.CLIENT_SECRET, // Client Secret
      process.env.REDIRECT_URL // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = oauth2Client.getAccessToken();

    const output = `
              <h2>From WestSide Garage Door and Gates Contact Us Page</h2>
              <p><b>User Info: </b> ${userName} with ${email} and ${phoneNumber} sends you a message.</p>
              <p>${message}</p>
    `;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // send mail with defined transport object
    const mailOptions = {
      from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: "Contact Us Form ✔", // Subject line
      html: output, // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail sent : %s", info.response);
        return res.render("contact", { success: true });
      }
    });
  
  }catch(err) {
    // return next(new ErrorResponse(err, 400));
  }
});

///////////////////////////////////////////////
///////------Rander Portfolioo Page========-----////
///////////////////////////////////////////////
router.get("/portfolio", function (req, res) {
  res.render("portfolio");
});

module.exports = router;
