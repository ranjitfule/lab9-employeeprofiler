var app = angular.module("turtleFacts", []);
app.controller("listCtrl", myController);
function myController(){
	this.names = data;
	this.activeEmp = {};
	this.changeActiveEmp = changeActiveEmp;
	this.search = "";
	this.activateQuiz = activateQuiz;
	this.quizActive = false;
	function changeActiveEmp(index){
		this.activeEmp = index;
	}
	function activateQuiz(){
		this.quizActive = true;
	}
}
var data = [{
		fname:"Chetan",
		lname:"Bagmare",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:22,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:94000,
		mobile:"9075192925",
		companay:"Coal India"
	},{
		fname:"Ranjit",
		lname:"Fule",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:27,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:24000,
		mobile:"9075192925",
		companay:"Novatech Inc."
	},
	{
		fname:"Bhushan",
		lname:"Ghutke",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:26,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:54000,
		mobile:"75199122925",
		companay:"Infosys"
	},
	{
		fname:"Parikshit",
		lname:"Khandait",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:27,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:48000,
		mobile:"8975192925",
		companay:"Ambuja Cement"
	},
	{
		fname:"Prashant",
		lname:"Khobragade",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:29,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:34000,
		mobile:"9755192925",
		companay:"NYSS College Of Engineering"
	},
	{
		fname:"Mahesh",
		lname:"Hirade",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:29,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:24000,
		mobile:"8705192925",
		companay:"Essense Software"
	},
	{
		fname:"Avinash",
		lname:"Avkali",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:20,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:433700,
		mobile:"9915192925",
		companay:"Allana"
	},
	{
		fname:"Akshay",
		lname:"Fadnis",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:29,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:45700,
		mobile:"9915192925",
		companay:"Bank Of India"
	},
	{
		fname:"Mayur",
		lname:"Shah",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:28,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:34000,
		mobile:"7907192925",
		companay:"Kratin Software"
	},
	{
		fname:"Ashis",
		lname:"Kale",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:26,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:29000,
		mobile:"9075192925",
		companay:"Amdocs"
	},
	,
	{
		fname:"Sandip",
		lname:"Lokhande",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:28,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:18000,
		mobile:"9075192925",
		companay:"Polytech"
	},
	{
		fname:"Yuvraj",
		lname:"Somkuwar",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:29,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:6000,
		mobile:"97908192925",
		companay:"Classes"
	},
	{
		fname:"Vijay",
		lname:"Dixit",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:29,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:150000,
		mobile:"8962292925",
		companay:"Walmart"
	},
	{
		fname:"Deepak",
		lname:"Panth",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:28,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:85000,
		mobile:"7825192925",
		companay:"Walmart"
	},
	{
		fname:"Ashwajit",
		lname:"Ramteke",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:29,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:22000,
		mobile:"99775192925",
		companay:"Ionet"
	},
	{
		fname:"Gaurav",
		lname:"Gulhane",
		name:function(){
			return this.fname+" "+this.lname;
		},
		age:30,
		desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		salary:35000,
		mobile:"9075192925",
		companay:"Persistent"
	}
	
];