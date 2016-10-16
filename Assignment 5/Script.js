function createSchools()
{
	return{"CitySchools":[
{ "name":"1rst School",
 "nrOfClasses":"4",
 "classes":[
     {"className":"A",
	 "students":[
	             {
	              "studentName":"Felicia",
	              "grade":"8"
				  
	             },
				 {"studentName":"Mark",
	              "grade":"9"
				 },
	             {"studentName":"Steve",
	              "grade":"7"
				 }
				 ]
	 },
	 {"className":"B",
	 "students":[
	             {
	              "studentName":"Bob",
	              "grade":"7"
	             },
				 {"studentName":"Mark JR",
	              "grade":"8"
				 },
	             {"studentName":"Jay",
	              "grade":"6"
				 }
				 ]
	 },
	 {"className":"C",
	  "students":[
	             {
	              "studentName":"Tom",
	              "grade":"5"
	             },
				 {"studentName":"Daniela",
	              "grade":"7"
				 },
	             {"studentName":"Stefan",
	              "grade":"7"
				 }
				 ]
	 },
	 {"className":"D",
	 "students":[
	             {
	              "studentName":"Bernie",
	              "grade":"6"
	             },
				 {"studentName":"Bill",
	              "grade":"7"
				 },
	             {"studentName":"Hillary",
	              "grade":"6"
				 },
				 {
	              "studentName":"Thrump",
	              "grade":"5"
	             }
				 ]
	 }
]},
 
 { "name":"2nd School",
 "nrOfClasses":"3",
 "classes":[
 {"className":"A",
	 "students":[
	             {
	              "studentName":"Antony",
	              "grade":"6"
	             },
				 {"studentName":"Marcus",
	              "grade":"7"
				 }
				 ]
	 },
	 {"className":"B",
	 "students":[
	             {
	              "studentName":"Michaela",
	              "grade":"10"
	             },
				 {"studentName":"Antonya",
	              "grade":"7"
				 },
	             {"studentName":"Jovany",
	              "grade":"7"
				 },
				 {
				  "studentName":"Anna",
				  "grade":"7"
				 }
				 ]
	 },
	 {"className":"C",
	 "students":[
	             {
	              "studentName":"Magdalena",
	              "grade":"9"
	             },
				 {"studentName":"Mark",
	              "grade":"9"
				 },
	             {"studentName":"Estela",
	              "grade":"7"
				 },
				 {"studentName":"Aaron",
	              "grade":"8"
				 }
				 ]
	 }
 ]}
 ]}
		
	
}
 function getStudents(schools)
 {
	 for (var i=0; i<schools.CitySchools.length; i++)
		// alert(schools.CitySchools[i].name);
	{    var Schools=schools.CitySchools[i];
	       
                 document.body.innerHTML+="School name: "+""+Schools.name+"";
				 document.body.innerHTML+="<br/>";
         for (var j=0; j<Schools.classes.length; j++)
		 {   
	         var schoolClass= Schools.classes[j];
			 document.body.innerHTML+="Class"+""+schoolClass.className+"";
			 document.body.innerHTML+="<br/>";
			 for (var k=0; k<schoolClass.students.length; k++)
			 {  
		         var student =schoolClass.students[k];;
				 document.body.innerHTML+=""+student.studentName+"";
				 document.body.innerHTML+="<br/>";
				 
			 }
		      document.body.innerHTML+="<br/>";
		      
		 }
		document.body.innerHTML+="<br/>";
		
	}
 }
// function addGender(school, name, gender )
// {   
    // var theSchool=school;
	// var 
	// var Gender= gender;
	// if (schools.)
// }
 $(document).ready(function()
 
 {
 var schools = createSchools();
 
 
 getStudents(schools);
 }
 );
 