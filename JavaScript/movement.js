function navBarInWeeks()
{
    var html = ['<section class = "nav-bar">',
            
            '<ul class = "listOfNavButtons">',
            
                '<li class = "nav-buttons"><a href="../../index.html">Home</a></li>',
                '<li class = "nav-buttons"><a href="https://opentimetable.dcu.ie/">Timetabl (external Link)e</a></li>',
                '<li class = "nav-buttons"><a href="../../index.html">My Modules</a></li>',
                '<li class = "nav-buttons"><a href="https://www.dcu.ie/explore">About</a></li>',
                '<li class = "nav-buttons-logout"><a href="../../login.html">Logout</a></li>',
            
            '</ul>',
        
        '</section>'].join("");

    document.write(html);
};

function getDueDateTime(){

    var dueDate = new Date("Dec 20, 2019 11:59:59");

    document.write('<h4 id = "assignmentTime" style="color:#ff4000;">Due Date: ' + dueDate + '</h4>');
};


// x is start of function
// Update the count down every 1 second



function assignmentCountdown() {

  var countDownDate = new Date("Dec 20, 2019 11:59:59").getTime();


  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //document.write("<h4 id = 'countdown' style = 'color:red;'>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "</h4>");   
    
  // If the count down is over, write some text 
  if (distance < 0) {
    document.write("Deadline has Passed");
  }
  else{
      // Output the result in an element with id="demo"
    document.write("<h4 id = 'countdown' style = 'color:#ff4000;'>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "</h4>");
  }
};