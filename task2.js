/*
if ("0") {
    alert( 'Hello' );           //it show alert Hello
  }*/
  let students=prompt ("ENTER YOUR NAME")           //here we enter the name    
  let marks =Number(prompt("ENTER YOUR MARKS"))     //here we enter the marks
  console.log(students+ " -MARKS="+marks)            //here we show the students-MARKS=marks
        if (marks < 35){                            //condition
          console.log("Grade : F");                 //show reasult     
          }                                         
        else  if(marks <= 40) {                     //condition
                console.log("Grade : D");           //show reasult
        } 
        else if (marks <= 50) 
             {
                console.log("Grade : C"); 
        } 
        else if(marks <= 70) 
        {
                console.log("Grade : B"); 
        } 
        else if(marks <= 90)
         {
                console.log("Grade : A"); 
        }

  