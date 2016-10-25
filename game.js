
function doXMLHttpRequest() {
  var xhr = new XMLHttpRequest(); 

  xhr.onreadystatechange=function()  {
   if (xhr.readyState==4) {
     if(xhr.status == 200) {
        processResponse(xhr.responseText);
    } else {
      responseArea.innerHTML="Error code " + xhr.status;
    }
   }
  }
  xhr.open("GET", "begin.json", true); 
  xhr.send(null); 
  } 
//javascript
  function processResponse(responseJSON) {
        var responseObject = JSON.parse(responseJSON);
        var displayText = "WELCOME";
        for (var i = 0; i<responseObject.tests.length; i++) {
                var test = responseObject.tests[i];
                displayText += "<li>"
                                        +test.quote + " " + "<\/li>";
                }
        displayText += "<\/ol>";
        document.getElementById("responseArea").innerHTML = displayText;
        }

//jQuery
  $(function() {    // do once original document loaded and ready
        $('#mybutton').click(function() {
                $.getJSON("instructions.json", function(responseObject, diditwork) {
                        console.log(diditwork);
                        var displayText = "Follow the instructions given below: <ol>";
                        for (var i = 0; i<responseObject.tests.length; i++) {
                                var test = responseObject.tests[i];
                                displayText += "<li>"
                                                        +test.quote + " " + "</li>";
                          
                        displayText += "</ul>";
                      }
                $("#responseArea2").html(displayText);
                } );  // getJSON
        } );  // click
  } ); // onReady

$(document).ready(function(){
  $("#mybutton").click(function(){
    $("#responseArea2").slideToggle(); //query1 - .slideToggle()
  });
  $("#mybutton1").click(function(){
    $("#responseArea3").css({"width": "600px","height":"300px", "padding": "10px","border": "10px solid navy","margin": "25px", "background-color": "#F5EBCB"}); //query2 - .css()
    });

$("#mybutton2").one("click",function(){
   $('#responseArea3').prepend($('<img>',{id:'theImg',src:'./img/stamp.png'})); //query3 - .prepend()
    });

$("#mybutton3").one("click",function(){
   $('#responseArea4').text("MY POSTCARD").animate({left: '225px'}); //query4 (CHAIN) - .text().animate()
    });

$("#responseArea4").mouseover(function(){
    $("#responseArea4").css("background-color", "#04066E"); //query5 - .mouseover()
});

$("#mybutton4").one("click",function(){
  var today=new Date();
  var currentDate = (today.getMonth()) + '/' + today.getDate()+ '/' + today.getFullYear();
   $('#responseArea5').text(currentDate); //query6 - .text()
    });

  var times = 0;
  var interval = setInterval(function(){
   times += 1;
   $('#responseArea6').text(times+ " Seconds");
    if(times === 20){
     alert("Times up"); //query7 - alert()
     times=0;
    }
    
}, 1000);

$("#mybutton5").one("click",function(){
   $('#responseArea5').hide(); //query8 - .hide()
      alert("This cannot be undone");
    });

$("#mybutton6").one("click",function(){
   $('#responseArea7').append("Greeting from Carnegie Mellon University!<br/> Cannot get over summer memories and the <br/>weekends just seem to get shorter everytime.<br/>The situation along with the busy life at CMU <br/>just makes me wait for the next holiday. <br/><br/> See you soon. <br/> <br/> Much love, <br/> Melody <3").slideUp(10000,function(){});  //query9 (CHAIN) - .append().slideUp()
    });
 
$("#mybutton7").one("click",function(){
$("#responseArea8").append($('<img>',{id:'sig',src:'./img/sig.png'})) //query10 - .append()
});



});



window.addEventListener("DOMContentLoaded", function() {

    });
  