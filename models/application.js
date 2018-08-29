var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ApplicationSchema = new Schema(
  {
	email:{type: String, required: true},
	title: {type: String, required: true},
    country: {type: String, required: true},
    region: {type: String, required: true},
	/*costInDollars: {type: Number, required: true},
	 We'll use this later for algorithm'*/
	costInDollars: {type: Number, required: true},
    specificRequest: {type: String, required: true},
	fundingAllocation: {type: String, required: true},
    questionSeven: {type: String, required: true},
	questionEight: {type: String, required: true},
    questionNine: {type: String, required: true},
	questionTen: {type: String, required: true},
    questionEleven: {type: String, required: true},
	questionTwelve: {type: String, required: true},
    questionThirteen: {type: String, required: true},
	questionFourteen: {type: String, required: true},
    questionFifteen: {type: String, required: true},
	questionSixteen: {type: String, required: true},
    questionSeventeen: {type: String, required: true},
	questionEighteen: {type: String, required: true},
	comment:{type:String, required: false}
	//date: {type: Date, required: true}
	  
  }
);


/* Virtual for description--> MAKES WORD FILTER ALGORITHM EASIER
ApplicationSchema
.virtual('description')
.get(function () {
  return this.questionSeven + ', ' + this.questionEight + ', ' + this.questionNine + ', ' + this.questionTen + ', ' + this.questionEleven + ', ' + this.questionTwelve + ', ' + this.questionThirteen + ', ' + this.questionFourteen + ', ' + this.questionFifteen + ', ' + this.questionSixteen + ', ' + this.questionSeventeen + ', ' + this.questionEighteen;
});
*/
// Virtual for location--> Used for User View
ApplicationSchema
.virtual('place')
.get(function () {
  return this.region + ', ' + this.country;
});



ApplicationSchema
.virtual('score')
.get(function(){
//Word Filtering Function
	function wordFilter(someText, keyWords){
	var lowerCaseText = someText.toLowerCase()
    var textArray = lowerCaseText.split(" ")
    var wordCount = 0;
    for (element in textArray){
        for (word in keyWords){
			if (textArray[element] == keyWords[word]){
			   //to test
			   wordCount++;
        	}
        }
    }
    if(wordCount > 0) {
		return 10;
	}else {
		return 0;
	}
	}
		
//Define the arrays we will use for the word filtering
	salaryArray = ['salary', 'salaries', 'wage', 'wages', 'income', 'incomes' , 'salario', 'salarios', 'sueldo', 'sueldos', 'ingreso', 'ingresos', 'salaire', 'salaires', 'paie', 'paies', 'paye', 'payes', 'revenu', 'revenus']
	religionArray = ['church','churches','mosque', 'mosques','temple','temples','islam', 'hindu','muslim','christian','catholic','protestant', 'iglesia', 'iglesias', 'mezquita', 'mezquitas', 'templo', 'templos', 'islámico', 'musulmán', 'hindú', 'cristiano', 'católico', 'protestante', 'église', 'églises', 'mosquée', 'mosquées', 'temple', 'temples', 'islamic', 'muslim', 'hindou', 'chrétien', 'catholique', 'protestant']
	
//Is Country Okay?
	function isCountryOkay(exampleCountry){
		var lowerCaseCountry = exampleCountry.toLowerCase()
		if (exampleCountry == 'india'){
			return 25;
		}else if(exampleCountry == 'kenya'){
			return 25;
		}else if(exampleCountry == 'sierra leone'){
			return 25;
		}else if(exampleCountry == 'uganda'){
			return 25;
		}else{
			return 0;
		}
	}
	
//Is Cost Okay?
	function isCostOkay(exampleCost){
		if(exampleCost >= 5500){
			return 15;
		}else{
			return 0;
		}
	}
//description from rest of questions
	var description = this.questionSeven + ', ' + this.questionEight + ', ' + this.questionNine + ', ' + this.questionTen + ', ' + this.questionEleven + ', ' + this.questionTwelve + ', ' + this.questionThirteen + ', ' + this.questionFourteen + ', ' + this.questionFifteen + ', ' + this.questionSixteen + ', ' + this.questionSeventeen + ', ' + this.questionEighteen
	
	var score = 100 - wordFilter(this.fundingAllocation, salaryArray) - wordFilter(description, religionArray) - isCountryOkay(this.country) - isCostOkay(this.costInDollars);
	
	return score;
});
/*
//CERTAIN WORRIES/QUESTIONS: IS IT ALLOWED FOR US TO USE FUNCTIONS OR ARRAYS DEFINED OUTSIDE ANY SCHEMA TO CALL WITHIN THE VIRTUALS

//Word Filter Function for the algorithm
function wordFilter(someText, keyWords){
	var lowerCaseText = someText.toLowerCase
    var textArray = lowerCaseText.split(" ")
    var wordCount = 0;
    for (element in textArray){
        for (word in keyWords){
			if (textArray[element] == keyWords[word]){
			   //to test
			   wordCount++;
        	}
        }
    }
    return wordCount;
};

//Arrays used for the word-filtering function's applications
salaryArray = ['salary', 'salaries', 'wage', 'wages', 'income', 'incomes' , 'salario', 'salarios', 'sueldo', 'sueldos', 'ingreso', 'ingresos', 'salaire', 'salaires', 'paie', 'paies', 'paye', 'payes', 'revenu', 'revenus']
religionArray = ['iglesia', 'iglesias', 'mezquita', 'mezquitas', 'templo', 'templos', 'islámico', 'musulmán', 'hindú', 'cristiano', 'católico', 'protestante', 'église', 'églises', 'mosquée', 'mosquées', 'temple', 'temples', 'islamic', 'muslim', 'hindou', 'chrétien', 'catholique', 'protestant']

//Checking if Country is Okay for Algorithm
function ifCountryIsOkay(exampleCountry){
	var countryPenalty = 0;
    if(exampleCountry == 'India'){
      countryPenalty = 10;
    } else if(exampleCountry == 'Kenya'){
      countryPenalty = 10;
    } else if(exampleCountry == 'Sierra Leone'){
      countryPenalty = 10;
    } else if(exampleCountry == 'Uganda'){
      countryPenalty = 10;
    } 
	return countryPenalty;
};

function ifCostIsOkay(exampleCost){
	costPenalty = 0;
    if (exampleCost > 6000){
      costPenalty = 20;
    } 
	return costPenalty;
};




//Virtual for score according to wordfiltering, location, and cost
ApplicationSchema
.virtual('score')
.get(function(){
	//ATTENTION: ONE OF THE WORD FILTERS IS BASED ON ANOTHER VIRTUAL--> CAN YOU DO VIRTUAL WITHIN VIRTUAL FUNCTION??? ALSO CHECK IF THERE ARE FORMATTING ISSUES WITHIN EACH 
	return 100 - wordFilter(this.fundingAllocation, salaryArrayArray) - wordFilter(this.description, religionArray) - ifCountryIsOkay(this.country) - ifCostIsOkay(this.costInDollars);
});

*/

//Export model
module.exports = mongoose.model('Application', ApplicationSchema);