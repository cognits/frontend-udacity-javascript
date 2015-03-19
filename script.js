var data = {
	"bio": [
		{
			"namee": "Moi Guerra",
			"role": "Web Developer",
			"welcomeMessage": "Welcome to JavaScript project Cognits organization!",
			"biotoipic": "https://github.com/mg1167",
			"contacts": {
				"mobile": "3216-6672",
				"email": "moiimkwii@gmail.com",
				"github": "mg1167",
				"twitter": "@JrMoii",
				"location": "Guatemala City"	
			}
		}
	]};

var a0 = document.getElementById('moi');
a0.innerHTML = data["bio"][0]["namee"];

var a01 = document.getElementById('role_moi');
a01.innerHTML = data["bio"][0]["role"];

var a10 = document.getElementById('message');
a10.innerHTML = data["bio"][0]["welcomeMessage"];


var a = document.getElementById('mob1');
var aa = document.getElementById('mob2');
a.innerHTML = data["bio"][0]["contacts"]["mobile"];
aa.innerHTML = data["bio"][0]["contacts"]["mobile"];

var  a2 = document.getElementById('mail');
var aa2 = document.getElementById('mail2');
a2.innerHTML = data["bio"][0]["contacts"]["email"];
aa2.innerHTML = data["bio"][0]["contacts"]["email"];

var a3 = document.getElementById('git');
var aa3 = document.getElementById('git2');
a3.innerHTML = data["bio"][0]["contacts"]["github"];
aa3.innerHTML = data["bio"][0]["contacts"]["github"];

var a4 = document.getElementById('tweet');
var aa4 = document.getElementById('tweet2');
a4.innerHTML = data["bio"][0]["contacts"]["twitter"];
aa4.innerHTML = data["bio"][0]["contacts"]["twitter"];

var a5 = document.getElementById('loc');
var aa5 = document.getElementById('loc2');
a5.innerHTML = data["bio"][0]["contacts"]["location"];
aa5.innerHTML = data["bio"][0]["contacts"]["location"];


var data2 = {
	"work": [
		{
			"name": "Work Experience",
			"location": "Guatemala",
			"degree": "Student",
			"url": "www.Cognits.com",
			"title": "Cognits Training Team",
			"title2": "Library Employer",
			"dates": {
				"date1": "October 13, 2014",
				"date2": "2013-2014"
			}
		}
	]
};

var b = document.getElementById('experience');
b.innerHTML = data2["work"][0]["name"];

var b2 = document.getElementById('work1');
b2.innerHTML = data2["work"][0]["title"];

var b3 = document.getElementById('work2');
b3.innerHTML = data2["work"][0]["title2"];

var b4 = document.getElementById('date_cognits');
b4.innerHTML = data2["work"][0]["dates"]["date1"];

var b5 = document.getElementById('date_library');
b5.innerHTML = data2["work"][0]["dates"]["date2"];

var data3 = {
	"projectss":[
		{
			"name": "Projects",
			"project": "Python Battle Ship",
			"date": "November, 2014"
		}
	]
}

var c = document.getElementById('projects');
c.innerHTML = data3["projectss"][0]["name"];

var c2 = document.getElementById('name_project');
c2.innerHTML = data3["projectss"][0]["project"];

var c3 = document.getElementById('date_project');
c3.innerHTML = data3["projectss"][0]["date"];

var data4 = {
	"education":[
		{
			"name": "Education",
			"university": "San Carlos University",
			"school": "America Latina College",
			"date1": "2015",
			"date2": "2015"
		}
	]
}

var d = document.getElementById('education_id');
d.innerHTML = data4["education"][0]["name"];

var d2 = document.getElementById('university');
d2.innerHTML = data4["education"][0]["university"];

var d3 = document.getElementById('college');
d3.innerHTML = data4["education"][0]["school"];

var d4 = document.getElementById('date_university');
d4.innerHTML = data4["education"][0]["date1"];

var d5 = document.getElementById('date_college');
d5.innerHTML = data4["education"][0]["date2"];



















// Uso para recolección de varios datos de un mismo tipo //

/*function despliegue_banner(parametro){
	var lista = [];
	for (i in parametro.bio){
		var variable = parametro.bio[i].mobile;

		lista.push(variable);
	}

	return lista;
}
x = document.getElementById('mob1');
x.innerHTML = despliegue(moi);
console.log(despliegue(moi));*/