/**
 * QuestionsController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 questions = [
	 'Quin es el significat de la vida?',
	 'A que huelen las nubes?',
	 'Si tienes 0 caramelos y los repartes entre 0 amigos, cuantos caramelos le quedan a cada amigo?',
	 '01000111 01110101 01100001 01101110 01111001 01100001 01110010 01100001 00100000 01100101 01101100?',
	 'Why would we stand when we will fall?',
	 'This is the question to the univers, to the stars, to everything?'
 ]

module.exports = {

	getQuestion: function getQuestion(req, res) {
		// This is a sample code
		return res.send(questions[Math.floor(Math.random() * (questions.length-1))])
	},

	showQuestions: function(req, res) {

		var topic = 0 // This will change based on the request url
		// var questions = getQuestion(topic)

		return res.view('questions')
	}, // showQuestions

};
