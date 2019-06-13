const express = require('express');
const app = express();
var   myObj, x;
myObj = {"all":{
	"GENARAL_INFORMATON":{
	"First-name": "Moynul",
	"Last-name" : "Islam",
	"Name" : "Moynl islam",
	"Father_name" : "MD Abdul Mumin, a bussinessman",
	"Mother_name" : "Ms Asma Begum, a house wife", 
	"Age" : 19,
	"Birth_of_date" : "4 may 2000",
	"Birth_place" : "noshirpur,boalzor,goalabazar,balagonj,sylhet,sylhet",
	"Blood_group": "O+",
	"Nationality":"Bangladeshi",
	"Religion"   : "islam",

	"study_in " : "BA(pass) 1st year from sylhet govt college",
	"student_from":{
		"primary_school" : "chandair para kinder garden school , CHANDAIR PARA",
		"secondary_school" : "chandair para high school",
		"college" : "shaha jalal jamia islamia school and college , mirabazar",
	},
},
    "studid_from": {
    	"primary_school" : {
    		"name":"chandair para kinder garden school , CHANDAIR PARA",
    		"stady-year":"6 years , from 2005",
    		"class":"class(nursary) to class(5) ",
    		"school-informations" : {
    			"name":"chandair para kinder garden school",
    			"estd" : "2004",
    			"locaton":{
    				"village":"chandair para",
    				"post-office":"osmaninogor",
    				"up-district ": "balagong",
    				"district" : "sylhet",
    				"divition" : "sylhet",
    				"country" : "bangladesh"
    			},
    			"class": "play to 5",
    			"school-dress": "blck and white",
    			"all students" : "200 students ... boyes -> 120,girls -> 80",
    			"per-class":{
    				"class (play)" : "20 students",
    				"class(nursary)": "25 students",
    				"class(1)":"35 students",
    				"class(2)":"50 students",
    				"class(3)":"40 students",
    				"class(4)":"30 students",
    				"class(5)":"20 students"
    			},

    			"teachers-informations":{
    				"head-teacher":{
    					"name":"atiqur rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"assistant-teacher":{
    					"name":"abu jaher ",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"bangla-teacher":{
    					"name":"kalom rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"english-teacher":{
    					"name":"koddos ali",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"math-teacher":{
    					"name":"ashraful haq",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},
    				"science-teacher":{
    					"name":"alinir rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				}
    			}
    		}
    	},

    	"college" : {
    		"name":"shaha jalal jamia islamia school and college , mirabazar",
    		"stady-year":"2 years , from 2005",
    		"class":"class(11) to class(12) ",
    		"school-informations" : {
    			"name":"shaha jalal jamia islamia school and college ",
    			"estd" : "1988",
    			"locaton":{
    				"village":"mira bazar",
    				"post-office":"sylhet-sadar",
    				"up-district ": "sylhet-sadar",
    				"district" : "sylhet",
    				"divition" : "sylhet",
    				"country" : "bangladesh"
    			},
    			"class": "play to 12",
    			"school-dress": "blck and white",
    			"all students" : "2000 students ... boyes -> 120,girls -> 80",
    			"per-class":{
    				"class (play)" : "20 students",
    				"class(nursary)": "25 students",
    				"class(1)":"35 students",
    				"class(2)":"250 students",
    				"class(3)":"240 students",
    				"class(4)":"130 students",
    				"class(5)":"120 students",
    				"class(6)":"130 students",
    				"class(7)":"230 students",
    				"class(8)":"130 students",
    				"class(9)":"230 students",
    				"class(10)":"130 students",
    				"class(11)":"230 students",
    				"class(12)":"230 students"
    				
    				
    			},

    			"teachers-informations":{
    				"head-teacher":{
    					"name":"alfatur rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"assistant-teacher":{
    					"name":"abu jaher ",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"bangla-teacher":{
    					"name":"kalom rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"english-teacher":{
    					"name":"koddos ali",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"math-teacher":{
    					"name":"ashraful haq",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},
    				"science-teacher":{
    					"name":"alinir rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				}
    			}
    		}
    	},

    	"university" : {
    		"name":"sylhet govt. college, tilagor",
    		"stady-year":"first year",
    		"class":"BA(pass)",
    		"school-informations" : {
    			"name":"sylhet govt. college",
    			"estd" : "1955",
    			"locaton":{
    				"village":"tilagor",
    				"post-office":"sylhet-sadar",
    				"up-district ": "sylhet-sadar",
    				"district" : "sylhet",
    				"divition" : "sylhet",
    				"country" : "bangladesh"
    			},
    			"class": "11 and 14",
    			"school-dress": "black and white",
    			"all students" : "6000 students ... boyes -> 120,girls -> 80",
    			"per-class":{
    			
    				"class(nursary)": "25 students",
    				"class(11)":"435 students",
    				"class(12)":"550 students",
    				"class(13)":"740 students",
    				"class(14)":"830 students",
    				"class(15)":"730 students",
    				"class(16)":"930 students",
    				"class(17)":"330 students",
    				"class(18)":"430 students"
    				
    			},

    			"teachers-informations":{
    				"head-teacher":{
    					"name":"atiqur rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"assistant-teacher":{
    					"name":"abu jaher ",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"bangla-teacher":{
    					"name":"kalom rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"english-teacher":{
    					"name":"koddos ali",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"math-teacher":{
    					"name":"ashraful haq",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},
    				"science-teacher":{
    					"name":"alinir rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				}
    			}
    		}
    	}
    },

    "AFTER ALL": "WE ARE PLEASER TO GIVE YOU SOMEINFORMATIONS",
    "COPYRIGHT": "OUR ALL INFORMATON IS UNDER COPYRIGHT 2019",
    "ADVICE"  :"IF WE ARE DONE A MISTAKE PLEASE FORGIV US",

    "GRANTY" : "OUR ALL INFORMATONS ARE REAL THERE IS NO FAKE INFORMATIONS"
}
},
myObj = {"all1":{
	"GENARAL_INFORMATON1":{
	"First-name": "Rahim",
	"Last-name" : "Mia",
	"Name" : "Rahim Mia",
	"Father_name" : "MD Akbor Alom, a bussinessman",
	"Mother_name" : "Ms Rokshana Begum, a house wife", 
	"Age" : 19,
	"Birth_of_date" : "4 may 2000",
	"Birth_place" : "noshirpur,boalzor,goalabazar,balagonj,sylhet,sylhet",
	"Blood_group": "O+",
	"Nationality":"Bangladeshi",
	"Religion"   : "islam",

	"study_in " : "BA(pass) 1st year from sylhet govt college",
	"student_from":{
		"primary_school" : "chandair para kinder garden school , CHANDAIR PARA",
		"secondary_school" : "chandair para high school",
		"college" : "shaha jalal jamia islamia school and college , mirabazar",
	},
},
    "studid_from": {
    	"primary_school" : {
    		"name":"chandair para kinder garden school , CHANDAIR PARA",
    		"stady-year":"6 years , from 2005",
    		"class":"class(nursary) to class(5) ",
    		"school-informations" : {
    			"name":"chandair para kinder garden school",
    			"estd" : "2004",
    			"locaton":{
    				"village":"chandair para",
    				"post-office":"osmaninogor",
    				"up-district ": "balagong",
    				"district" : "sylhet",
    				"divition" : "sylhet",
    				"country" : "bangladesh"
    			},
    			"class": "play to 5",
    			"school-dress": "blck and white",
    			"all students" : "200 students ... boyes -> 120,girls -> 80",
    			"per-class":{
    				"class (play)" : "20 students",
    				"class(nursary)": "25 students",
    				"class(1)":"35 students",
    				"class(2)":"50 students",
    				"class(3)":"40 students",
    				"class(4)":"30 students",
    				"class(5)":"20 students"
    			},

    			"teachers-informations":{
    				"head-teacher":{
    					"name":"atiqur rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"assistant-teacher":{
    					"name":"abu jaher ",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"bangla-teacher":{
    					"name":"kalom rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"english-teacher":{
    					"name":"koddos ali",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"math-teacher":{
    					"name":"ashraful haq",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},
    				"science-teacher":{
    					"name":"alinir rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				}
    			}
    		}
    	},

    	"college" : {
    		"name":"shaha jalal jamia islamia school and college , mirabazar",
    		"stady-year":"2 years , from 2005",
    		"class":"class(11) to class(12) ",
    		"school-informations" : {
    			"name":"shaha jalal jamia islamia school and college ",
    			"estd" : "1988",
    			"locaton":{
    				"village":"mira bazar",
    				"post-office":"sylhet-sadar",
    				"up-district ": "sylhet-sadar",
    				"district" : "sylhet",
    				"divition" : "sylhet",
    				"country" : "bangladesh"
    			},
    			"class": "play to 12",
    			"school-dress": "blck and white",
    			"all students" : "2000 students ... boyes -> 120,girls -> 80",
    			"per-class":{
    				"class (play)" : "20 students",
    				"class(nursary)": "25 students",
    				"class(1)":"35 students",
    				"class(2)":"250 students",
    				"class(3)":"240 students",
    				"class(4)":"130 students",
    				"class(5)":"120 students",
    				"class(6)":"130 students",
    				"class(7)":"230 students",
    				"class(8)":"130 students",
    				"class(9)":"230 students",
    				"class(10)":"130 students",
    				"class(11)":"230 students",
    				"class(12)":"230 students"
    				
    				
    			},

    			"teachers-informations":{
    				"head-teacher":{
    					"name":"alfatur rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"assistant-teacher":{
    					"name":"abu jaher ",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"bangla-teacher":{
    					"name":"kalom rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"english-teacher":{
    					"name":"koddos ali",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"math-teacher":{
    					"name":"ashraful haq",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},
    				"science-teacher":{
    					"name":"alinir rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				}
    			}
    		}
    	},

    	"university" : {
    		"name":"sylhet govt. college, tilagor",
    		"stady-year":"first year",
    		"class":"BA(pass)",
    		"school-informations" : {
    			"name":"sylhet govt. college",
    			"estd" : "1955",
    			"locaton":{
    				"village":"tilagor",
    				"post-office":"sylhet-sadar",
    				"up-district ": "sylhet-sadar",
    				"district" : "sylhet",
    				"divition" : "sylhet",
    				"country" : "bangladesh"
    			},
    			"class": "11 and 14",
    			"school-dress": "black and white",
    			"all students" : "6000 students ... boyes -> 120,girls -> 80",
    			"per-class":{
    			
    				"class(nursary)": "25 students",
    				"class(11)":"435 students",
    				"class(12)":"550 students",
    				"class(13)":"740 students",
    				"class(14)":"830 students",
    				"class(15)":"730 students",
    				"class(16)":"930 students",
    				"class(17)":"330 students",
    				"class(18)":"430 students"
    				
    			},

    			"teachers-informations":{
    				"head-teacher":{
    					"name":"atiqur rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"assistant-teacher":{
    					"name":"abu jaher ",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"bangla-teacher":{
    					"name":"kalom rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"english-teacher":{
    					"name":"koddos ali",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},

    				"math-teacher":{
    					"name":"ashraful haq",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				},
    				"science-teacher":{
    					"name":"alinir rahman",
    					"id-card":"https://stackoverflow.com/questions/41836943/create-json-array-with-object-name-android"
    				}
    			}
    		}
    	}
    },

    "AFTER ALL": "WE ARE PLEASER TO GIVE YOU SOMEINFORMATIONS",
    "COPYRIGHT": "OUR ALL INFORMATON IS UNDER COPYRIGHT 2019",
    "ADVICE"  :"IF WE ARE DONE A MISTAKE PLEASE FORGIV US",

    "GRANTY" : "OUR ALL INFORMATONS ARE REAL THERE IS NO FAKE INFORMATIONS"
}
}


app.get('/rahim_mia',(req,res)=>{
	i = myObj.all1;
	res.send(i);
})

app.get('/rahim_mia/genaral_informations',(req,res)=>{
	m = myObj.GENARAL_INFORMATON;
	console.log('this is still working')
	res.send(m);
})



app.get('/moynul_islam',(req,res)=>{
	i = myObj.all;
	res.send(i);
})



app.get('/moynul_islam/studid_from',(req,res)=>{

	l = myObj.studid_from;

	res.send(l);
})


app.get('/moynul_islam/studid_from/primary_school',(req,res)=>{
	l = myObj.studid_from["primary_school"];
	res.send(l);
})

app.get('/moynul_islam/genaral_informations',(req,res)=>{
	m = myObj.GENARAL_INFORMATON;
	res.send(m);
})



app.listen(3000,()=>{
	console.log('server is runnig on port 3000')
})