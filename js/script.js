/* Diccionario donde se almacenará la información personal */
var data ={};

/* Información General */
data.name="Erick González";
data.job="DESIGNER WEB";
data.mobile="3262-2228";
data.email="betto793@gmail.com";
data.github="https://github.com/Bettogc?tab=repositories";
data.location="Villa Nueva, Guatemala";
data.information="I have experience in the field HTML5, CSS3, JavaScript, Bootstrap, AngularJS, JQuery and Python.";
data.secondInfo="I have learned many things related to the field of Development and Design WEB...";
data.proyects="Frontend-udacity-html-css, Frontend-udacity-javascript, Frontend-pokedex-parse, Frontend-angularjs-lasfm, Frontend-jasmine, Frontend-music, Frontend-weather-forecast, Frontend-blog, Frontend-portfolio, Python-guess-number, Python-maquina-registradora, Python-search-engine, Python-batalla-naval, Python-paises-capitales and Python-factorial.";
data.skills="I'm Punctual.";
data.skills1="I'm Responsible.";
data.skills2="I'm Honored";
data.skills3="I'm Friendly";


/* Generación del ID para imprimir nombre */
MyName= document.getElementById('name');
MyName.innerHTML = data.name;

/* Generación del ID para imprimir trabajo */
Job= document.getElementById('job');
Job.innerHTML = data.job;

/* Generación del ID para imprimir el numero de telefono */
Mobile= document.getElementById('mobile');
Mobile.innerHTML = data.mobile;

/* Generación del ID para imprimir el correo electronico */
Email= document.getElementById('email');
Email.innerHTML = data.email;

/* Generación del ID para imprimir cuenta de GitHub */
Github= document.getElementById('github');
Github.innerHTML = data.github;

/* Generación del ID para imprimir localidad */
MyLocation= document.getElementById('location');
MyLocation.innerHTML = data.location;

/* Generación del ID para imprimir Cognits Training */
Description= document.getElementById('information');
Description.innerHTML = data.information;

/* Generación del ID para imprimir Cognits Experience */
DescriptionTwo= document.getElementById('secondInfo');
DescriptionTwo.innerHTML = data.secondInfo;

/* Generación del ID para imprimir Listado de Proyectos trabajados */
ListProyects= document.getElementById('proyects');
ListProyects.innerHTML = data.proyects;

/* Generación del ID para imprimir 1er Cualidad */
Skills= document.getElementById('skills');
Skills.innerHTML = data.skills;

/* Generación del ID para imprimir 2da Cualidad */
Skills1= document.getElementById('skills1');
Skills1.innerHTML = data.skills1;

/* Generación del ID para imprimir 3era Cualidad */
Skills2= document.getElementById('skills2');
Skills2.innerHTML = data.skills2;

/* Generación del ID para imprimir 4ta Cualidad */
Skills3= document.getElementById('skills3');
Skills3.innerHTML = data.skills3;
