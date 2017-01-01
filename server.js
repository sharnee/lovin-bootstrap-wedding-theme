var express = require('express')
var nodemailer = require('nodemailer');
var app = express()
var bodyParser = require('body-parser');
var router = express.Router();
app.use(bodyParser.json()); // for parsing application/json
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello


function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sharneefrancis11@gmail.com', // Your email id
            pass: 'anaquii1' // Your password
        }
    });

    var text = 'Hello world from \n\n' + req.body.name;
    var mailOptions = {
        from: 'sharneefrancis11@gmail.com', // sender address
        to: 'sharneefrancis11@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: req.body.message //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
}

app.use(express.static('public'))


app.listen(3000, function () {
console.log('Example app listening on port 3000!')
})