var Application = require('../models/application');
var async = require ('async')
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//Application Language Selector
exports.index = function(req, res) {
    res.render('applicationlanguageselector');
};



//Form for submitting Application in English, French, Spanish
exports.application_en_create_get = function(req, res) {
    res.render('applicationformen');
};

exports.application_fr_create_get = function(req, res) {
    res.render('applicationformfr');
};

exports.application_es_create_get = function(req, res) {
    res.render('applicationformes');
};

//POST data to server in English, French, Spanish
exports.application_en_create_post = [
   
    // Validate that the name field is not empty.
    body('email', 'Email?').isEmail().trim(),
	body('title', 'QUESTION 1?').isLength({ min: 1 }).trim(),
	body('country', 'QUESTION 2?').isLength({ min: 1 }).trim(),
	body('region', 'QUESTION 3?').isLength({ min: 1 }).trim(),
	body('cost', 'QUESTION 4? Must be a number. Do not put any words.').isDecimal().trim(), //THIS NEEDS TO BE NUMBER
	body('specificrequest', 'QUESTION 5?').isLength({ min: 1 }).trim(),
	body('fundingallocation', 'QUESTION 6?').isLength({ min: 1 }).trim(),
	body('seven', 'QUESTION 7?').isLength({ min: 1 }).trim(),
	body('eight', 'QUESTION 8?').isLength({ min: 1 }).trim(),
	body('nine', 'QUESTION 9?').isLength({ min: 1 }).trim(),
	body('ten', 'QUESTION 10?').isLength({ min: 1 }).trim(),
	body('eleven', 'QUESTION 11?').isLength({ min: 1 }).trim(),
	body('twelve', 'QUESTION 12?').isLength({ min: 1 }).trim(),
	body('thirteen', 'QUESTION 13?').isLength({ min: 1 }).trim(),
	body('fourteen', 'QUESTION 14?').isLength({ min: 1 }).trim(),
	body('fifteen', 'QUESTION 15?').isLength({ min: 1 }).trim(),
	body('sixteen', 'QUESTION 16?').isLength({ min: 1 }).trim(),
	body('seventeen', 'QUESTION 17?').isLength({ min: 1 }).trim(),
	body('eighteen', 'QUESTION 18?').isLength({ min: 1 }).trim(),
	body('comment').trim(),
	
	
    
    // Sanitize (trim and escape) the name field.
    sanitizeBody('email').trim().escape(),
	sanitizeBody('title').trim().escape(),
	sanitizeBody('country').trim().escape(),
	sanitizeBody('region').trim().escape(),
	sanitizeBody('cost').trim().escape(),
	sanitizeBody('specificrequest').trim().escape(),
	sanitizeBody('fundingallocation').trim().escape(),
	sanitizeBody('seven').trim().escape(),
	sanitizeBody('eight').trim().escape(),
	sanitizeBody('nine').trim().escape(),
	sanitizeBody('ten').trim().escape(),
	sanitizeBody('eleven').trim().escape(),
	sanitizeBody('twelve').trim().escape(),
	sanitizeBody('thirteen').trim().escape(),
	sanitizeBody('fourteen').trim().escape(),
	sanitizeBody('fifteen').trim().escape(),
	sanitizeBody('sixteen').trim().escape(),
	sanitizeBody('seventeen').trim().escape(),
	sanitizeBody('eighteen').trim().escape(),
	sanitizeBody('comment').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create an application object with escaped and trimmed data.
        var application = new Application(
			{email: req.body.email,
			title: req.body.title,
			country: req.body.country,
			region: req.body.region,
			costInDollars: req.body.cost,
			specificRequest: req.body.specificrequest,
			fundingAllocation: req.body.fundingallocation,
			questionSeven: req.body.seven,
			questionEight: req.body.eight,
			questionNine: req.body.nine,
			questionTen: req.body.ten,
			questionEleven: req.body.eleven,
			questionTwelve: req.body.twelve,
			questionThirteen: req.body.thirteen,
			questionFourteen: req.body.fourteen,
			questionFifteen: req.body.fifteen,
			questionSixteen: req.body.sixteen,
			questionSeventeen: req.body.seventeen,
			questionEighteen: req.body.eighteen,
			 comment: req.body.comment,
			//date: req.body.
		  } 
		  	
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('applicationformen', { title: 'Application', application: application, errors: errors.array()});
        return;
        }
        else {
			application.save(function (err) {
                           if (err) { return next(err); }
                           // Application saved. Redirect to thank you page.
                           res.redirect('/formthanks');
                         });
        }
    }
];

exports.application_fr_create_post = [
   
    // Validate that the name field is not empty.
    body('email', 'Email?').isEmail().trim(),
	body('title', 'QUESTION 1?').isLength({ min: 1 }).trim(),
	body('country', 'QUESTION 2?').isLength({ min: 1 }).trim(),
	body('region', 'QUESTION 3?').isLength({ min: 1 }).trim(),
	body('cost', 'QUESTION 4? Doit être un nombre. Ne mettez pas de mots.').isDecimal().trim(), //THIS NEEDS TO BE NUMBER
	body('specificrequest', 'QUESTION 5?').isLength({ min: 1 }).trim(),
	body('fundingallocation', 'QUESTION 6?').isLength({ min: 1 }).trim(),
	body('seven', 'QUESTION 7?').isLength({ min: 1 }).trim(),
	body('eight', 'QUESTION 8?').isLength({ min: 1 }).trim(),
	body('nine', 'QUESTION 9?').isLength({ min: 1 }).trim(),
	body('ten', 'QUESTION 10?').isLength({ min: 1 }).trim(),
	body('eleven', 'QUESTION 11?').isLength({ min: 1 }).trim(),
	body('twelve', 'QUESTION 12?').isLength({ min: 1 }).trim(),
	body('thirteen', 'QUESTION 13?').isLength({ min: 1 }).trim(),
	body('fourteen', 'QUESTION 14?').isLength({ min: 1 }).trim(),
	body('fifteen', 'QUESTION 15?').isLength({ min: 1 }).trim(),
	body('sixteen', 'QUESTION 16?').isLength({ min: 1 }).trim(),
	body('seventeen', 'QUESTION 17?').isLength({ min: 1 }).trim(),
	body('eighteen', 'QUESTION 18?').isLength({ min: 1 }).trim(),
	body('comment').trim(),
	
	
    
    // Sanitize (trim and escape) the name field.
    sanitizeBody('email').trim().escape(),
	sanitizeBody('title').trim().escape(),
	sanitizeBody('country').trim().escape(),
	sanitizeBody('region').trim().escape(),
	sanitizeBody('cost').trim().escape(),
	sanitizeBody('specificrequest').trim().escape(),
	sanitizeBody('fundingallocation').trim().escape(),
	sanitizeBody('seven').trim().escape(),
	sanitizeBody('eight').trim().escape(),
	sanitizeBody('nine').trim().escape(),
	sanitizeBody('ten').trim().escape(),
	sanitizeBody('eleven').trim().escape(),
	sanitizeBody('twelve').trim().escape(),
	sanitizeBody('thirteen').trim().escape(),
	sanitizeBody('fourteen').trim().escape(),
	sanitizeBody('fifteen').trim().escape(),
	sanitizeBody('sixteen').trim().escape(),
	sanitizeBody('seventeen').trim().escape(),
	sanitizeBody('eighteen').trim().escape(),
	sanitizeBody('comment').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create an application object with escaped and trimmed data.
        var application = new Application(
			{email: req.body.email,
			title: req.body.title,
			country: req.body.country,
			region: req.body.region,
			costInDollars: req.body.cost,
			specificRequest: req.body.specificrequest,
			fundingAllocation: req.body.fundingallocation,
			questionSeven: req.body.seven,
			questionEight: req.body.eight,
			questionNine: req.body.nine,
			questionTen: req.body.ten,
			questionEleven: req.body.eleven,
			questionTwelve: req.body.twelve,
			questionThirteen: req.body.thirteen,
			questionFourteen: req.body.fourteen,
			questionFifteen: req.body.fifteen,
			questionSixteen: req.body.sixteen,
			questionSeventeen: req.body.seventeen,
			questionEighteen: req.body.eighteen,
			 comment: req.body.comment,
			//date: req.body.
		  } 
		  	
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('applicationformfr', { title: 'Application', application: application, errors: errors.array()});
        return;
        }
        else {
			application.save(function (err) {
                           if (err) { return next(err); }
                           // Application saved. Redirect to thank you page.
                           res.redirect('/formthanks');
                         });
        }
    }
];


exports.application_es_create_post = [
   
    // Validate that the name field is not empty.
    body('email', 'Email?').isEmail().trim(),
	body('title', 'REVISA PREGUNTA 1').isLength({ min: 1 }).trim(),
	body('country', 'REVISA PREGUNTA 2').isLength({ min: 1 }).trim(),
	body('region', 'REVISA PREGUNTA 3').isLength({ min: 1 }).trim(),
	body('cost', 'REVISA PREGUNTA 4. Tiene que ser un número. No pongas ninguna palabra').isDecimal().trim(), //THIS NEEDS TO BE NUMBER
	body('specificrequest', 'REVISA PREGUNTA 5').isLength({ min: 1 }).trim(),
	body('fundingallocation', 'REVISA PREGUNTA 6').isLength({ min: 1 }).trim(),
	body('seven', 'REVISA PREGUNTA 7').isLength({ min: 1 }).trim(),
	body('eight', 'REVISA PREGUNTA 8').isLength({ min: 1 }).trim(),
	body('nine', 'REVISA PREGUNTA 9').isLength({ min: 1 }).trim(),
	body('ten', 'REVISA PREGUNTA 10').isLength({ min: 1 }).trim(),
	body('eleven', 'REVISA PREGUNTA 11').isLength({ min: 1 }).trim(),
	body('twelve', 'REVISA PREGUNTA 12').isLength({ min: 1 }).trim(),
	body('thirteen', 'REVISA PREGUNTA 13').isLength({ min: 1 }).trim(),
	body('fourteen', 'REVISA PREGUNTA 14').isLength({ min: 1 }).trim(),
	body('fifteen', 'REVISA PREGUNTA 15').isLength({ min: 1 }).trim(),
	body('sixteen', 'REVISA PREGUNTA 16').isLength({ min: 1 }).trim(),
	body('seventeen', 'REVISA PREGUNTA 17').isLength({ min: 1 }).trim(),
	body('eighteen', 'REVISA PREGUNTA 18').isLength({ min: 1 }).trim(),
	body('comment').trim(),
	
	
    
    // Sanitize (trim and escape) the name field.
    sanitizeBody('email').trim().escape(),
	sanitizeBody('title').trim().escape(),
	sanitizeBody('country').trim().escape(),
	sanitizeBody('region').trim().escape(),
	sanitizeBody('cost').trim().escape(),
	sanitizeBody('specificrequest').trim().escape(),
	sanitizeBody('fundingallocation').trim().escape(),
	sanitizeBody('seven').trim().escape(),
	sanitizeBody('eight').trim().escape(),
	sanitizeBody('nine').trim().escape(),
	sanitizeBody('ten').trim().escape(),
	sanitizeBody('eleven').trim().escape(),
	sanitizeBody('twelve').trim().escape(),
	sanitizeBody('thirteen').trim().escape(),
	sanitizeBody('fourteen').trim().escape(),
	sanitizeBody('fifteen').trim().escape(),
	sanitizeBody('sixteen').trim().escape(),
	sanitizeBody('seventeen').trim().escape(),
	sanitizeBody('eighteen').trim().escape(),
	sanitizeBody('comment').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create an application object with escaped and trimmed data.
        var application = new Application(
			{email: req.body.email,
			title: req.body.title,
			country: req.body.country,
			region: req.body.region,
			costInDollars: req.body.cost,
			specificRequest: req.body.specificrequest,
			fundingAllocation: req.body.fundingallocation,
			questionSeven: req.body.seven,
			questionEight: req.body.eight,
			questionNine: req.body.nine,
			questionTen: req.body.ten,
			questionEleven: req.body.eleven,
			questionTwelve: req.body.twelve,
			questionThirteen: req.body.thirteen,
			questionFourteen: req.body.fourteen,
			questionFifteen: req.body.fifteen,
			questionSixteen: req.body.sixteen,
			questionSeventeen: req.body.seventeen,
			questionEighteen: req.body.eighteen,
			 comment: req.body.comment,
			//date: req.body.
		  } 
		  	
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('applicationformes', { title: 'Application', application: application, errors: errors.array()});
        return;
        }
        else {
			application.save(function (err) {
                           if (err) { return next(err); }
                           // Application saved. Redirect to thank you page.
                           res.redirect('/formthanks');
                         });
        }
    }
];


//Thank you for submitting application
exports.application_thanks = function(req, res) {
    res.render('applicationthanks')
};


//Viewer for all Applications
exports.application_viewer = function(req, res, next) {
        async.parallel({
       /*
	   book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
		
	*USE AS REFERENCE* */	
        application_list: function(callback) {
            Application.find({}, callback);
        },
    }, function(err, results) {
        res.render('applicationviewer', { title: 'Application Viewer', error: err, application_list: results.application_list});
    });
};
