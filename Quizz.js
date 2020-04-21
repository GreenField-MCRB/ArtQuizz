var questions =[{
	image:"https://e-cours-arts-plastiques.com/wp-content/uploads/2013/03/guernica-Picasso_thumb.jpg",
	question:"Which artist painted this ?",
	answers:{
		a:"Picasso",
		b:"Van Gogh",
		c:"Monet"	
	},
	correctAnswer:"a"
},
	{
	image:"https://cdn.radiofrance.fr/s3/cruiser-production/2018/11/ee2b07c8-2082-4929-9f9b-0a7fef23f3d3/838_les-nympheas-chapelle-sixtine-de-limpressionnisme.jpg",
	question:"In which movement belongs the Nymphéas of Claude Monet ?",
	answers:{
		a:"Expressionism",
		b:"Imrepssionism",
		c:"Contemporary"
	},
	correctAnswer:"b"	
},
	{
	image:"https://images-na.ssl-images-amazon.com/images/I/91iS91eizUL._AC_SL1500_.jpg",
	question:"What's the name of this painting ?",
	answers:{
		a:"Starry Night",
		b:"Long Night",
		c:"Cosmic Night"
	},
	correctAnswer:"a"
},
	{
	image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
	question:"Everyone knows The Joconde but do you know to which movement belongs this masterpiece ?",
	answers:{
		a:"Expressionism",
		b:"Imrepssionism",
		c:"Renaissance"
	},
	correctAnswer:'c'
},
	{
	image:"https://www.kazoart.com/blog/wp-content/uploads/2017/07/Picasso_demoiselles_davignon1.jpg",
	question:"What's the name of this painting?",
	answers:{
		a:"Les demoiselles d'avignon",
		b:"Les demoiselles de guingamps",
		c:"Les demoiselles parisiennes"
	},
	correctAnswer:"a"
},
	{
	image:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Carr%C3%A9_noir_%28MNAM%29.jpg",
	question:"Who drawed this ?",
	answers:{
		a:"Lavelitch",
		b:"Malevitch",
		c:"Mavelitch"
	},
	correctAnswer:'b'
},
	{ 
	image:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Carr%C3%A9_noir_%28MNAM%29.jpg",
	question:"Which architect designed this ?",
	answers:{
		a:"Zaha Hadid",
		b:"Frank Gehry",
		c:"Sir Norman Foster"
		},
	correctAnswer:"b"
},
	{
	image:"https://tourisme.euskadi.eus/contenidos/d_destinos_turisticos/0000004981_d2_rec_turismo/fr_4981/images/PT_cabecerabilbaoguggen1024.jpg",
	question:"to which movement belongs the design of this building ?",
	answers:{
		a:"Modernism",
		b:"Deconstructivism",
		c:"Contemporary"
	},
	correctAnswer:"b"
},
	{
	image:"https://img.aws.la-croix.com/2019/10/10/1201053280/LInstitut-monde-arabe-inaugure-lundi-7-octobre-grande-pompe-lexposition-Al-Ula-merveilles-dArabie_0_1400_933.jpg",
	question:"What's the name of this building ?",
	answers:{
		a:"The institute of arabic world - Paris",
		b:"The institute of science - London",
		c:"the institute of arab and islamic art - Dubai "
	},
	correctAnswer:'a'
	}
	
];
var quizContainer = document.getElementById('quiz');
var quizImage=document.getElementById('image');
var quizAnswer=document.getElementById('submit');
var result=document.getElementById("result")
$('#submit').hide()

function display(object){
	$("#quiz").append("<img src="+object.image+">"+"<br>");
	$("img").css("width","50%");
	var question=object.answers
	$("#quiz").append('<p>'+object.question+'</p>'+'<div><input type="radio"'+'id='+question.a+'name="question"'+'value='+question.a+'<label for='+question.a+">"+question.a+'</label></div>'+'<div><input type="radio"'+'id='+question.b+'name="question"'+'value='+question.b+'<label for='+question.b+">"+question.b+'</label></div>'+
	'<div><input type="radio"'+'id='+question.c+'name="question"'+'value='+question.c+'<label for='+question.c+">"+question.c+'</label></div>')
	$('#submit').append('<button>'+'Go next'+'</button>')

}
var count =0
 function game(array){
 		display(questions[count]);
 		$('#submit').on("click",function(){
 				$('#quiz').fadeOut()
 				count++
 				$('#quiz').fadeIn()

 			})
 	}

$('#start').on("click",function(){
	$('#submit').toggle()
	$('#start').fadeOut()
	game(questions)
})	



