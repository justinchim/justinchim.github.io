function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var amPm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	amPm = " PM";
    } else if (h == 12){
        h = 12;
    	amPm = " AM";
    } else if (h < 12){
        amPm = " AM";
    } else {
        amPm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+amPm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var ranNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[ranNum];
}

//quote array
var quotes = ["\"A good programmer looks both ways before crossing a one-way street.\"<br>-  Unknown ", "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney", "\"Learning never exhausts the mind.\"<br>- Leonardo da Vinci",
"\"It does not matter how slowly you go as long as you do not stop.\"<br>- Confucius", "\"There is only one thing that makes a dream impossible to achieve: the fear of failure.\"<br>- Paulo Coelho", "\"To give anything less than your best is to sacrifice the gift.\"<br>- Steve Prefontaine",
"\" Just do it.\"<br>- Nike",
"\"There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",];


//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

//slides
/*
var slideNum = 1;
showSlides(slideNum);

function plusSlides(x) {
  showSlides(slideNum += x);
}

function currentSlide(x) {
  showSlides(slideNum = x);
}

function showSlides(x) {
  var i;
  var slides = document.getElementsByClassName("quotes");
  var dots = document.getElementsByClassName("dot");
  if (x > slides.length) {slideNum = 1}    
  if (x < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block";  
  dots[slideNum-1].className += " active";
}
*/