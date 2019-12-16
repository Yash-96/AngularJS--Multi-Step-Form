const Form = require('../models/form.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.formCreate = function (req, res) {

    let form = new Form(
        {
            fname: req.body.fname,
            lname: req.body.lname,
            gender: req.body.gender,
            dob: req.body.dob,
            loc: req.body.loc,
            nationality: req.body.nationality,
            sports: req.body.sports,
            ass: req.body.ass,
            team: req.body.team,
            abt: req.body.abt,
            interests: req.body.interests,
            charities: req.body.charities,
            pets: req.body.pets,
            alcohol: req.body.alcohol,
            marraige: req.body.marraige,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            youtube: req.body.youtube,
            twitch: req.body.twitch,
            snapchat: req.body.snapchat
        }
    );

    form.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Details Has Been Saved successfully')
    })
};
