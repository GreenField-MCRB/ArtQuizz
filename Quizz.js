var questions =[{
	question:"Which artist painted this ?",
	answers:{
		a:"Picasso",
		b:"Van Gogh",
		c:"Monet"	
	},
	correctAnswer:"a"
},
	{
	question:"In which movement belongs the Nymphéas of Claude Monet ?",
	answers:{
		a:"Expressionism",
		b:"Imrepssionism",
		c:"Contemporary"
	},
	correctAnswer:"b"	
},
	{
	question:"What's the name of this painting ?",
	answers:{
		a:"Starry Night",
		b:"Long Night",
		c:"Cosmic Night"
	},
	correctAnswer:"a"
},
	{
	question:"Everyone knows The Joconde but do you know to which movement belongs this masterpiece ?",
	answers:{
		a:"Expressionism",
		b:"Imrepssionism",
		c:"Renaissance"
	},
	correctAnswer:'c'
},
	{
	question:"What's the name of this painting?",
	answers:{
		a:"Les demoiselles d'avignon",
		b:"Les demoiselles de guingamps",
		c:"Les demoiselles parisiennes"
	},
	correctAnswer:"a"
},
	{
	question:"Who drawed this ?",
	answers:{
		a:"Lavelitch",
		b:"Malevitch",
		c:"Mavelitch"
	},
	correctAnswer:'b'
},
	{ 
	question:"Which architect designed this ?",
	answers:{
		a:"Zaha Hadid",
		b:"Frank Gehry",
		c:"Sir Norman Foster"
		},
	correctAnswer:"b"
},
	{
	question:"to which movement belongs the building ?",
	answers:{
		a:"Modernism",
		b:"Deconstructivism",
		c:"Contemporary"
	},
	correctAnswer:"b"
},
	{
	question:"What's the name of this building ?",
	answers:{
		a:"The institute of arabic world - Paris",
		b:"The institute of science - London",
		c:"the institute of arab and islamic art - Dubai "
	},
	correctAnswer:'a'
	}
	
];
function showQuestion(questions){
	var answer=[]
	for (var i=0;i<questions.length;i++){
		for (var key in questions[i]){
			return questions[i].question
		}
	}
}