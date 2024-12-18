// Dark Mode
function togglemode() {
        const themeLink = document.getElementById('themeStyle');
        const toggleIcon = document.getElementById('toggle');
        const shapeTop = document.getElementById('shapeTop');
        const logoBottom = document.getElementById('logoBottom');
        const bottomGrey = document.getElementById('bottomGrey');
       

if (themeStyle.getAttribute('href') === 'css/light.css') {
        themeLink.setAttribute('href', 'css/dark.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        shapeTop.src = '../assets/img/shape-top-black-80.png';
        logoBottom.src = '../assets/img/shape-bottom-black-80.png';
        bottomGrey.src = '../assets/img/shape-top-dark-grey-80.png';
}

else {
        themeStyle.setAttribute('href', 'css/light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        shapeTop.src = '../assets/img/shape-top-white-80.png';
        logoBottom.src = '../assets/img/shape-bottom-white-80.png';
        bottomGrey.src = '../assets/img/shape-top-grey-80.png';
}
}

//     Set the date we're counting down to
    var countDownDate = new Date("Oct 31, 2024 23:59:59").getTime();

//     Update the count down every 1 second
    var x = setInterval(function() {
    
//       Get today's date and time
      var now = new Date().getTime();
        
//       Find the distance between now and the countdown date
      var distance = countDownDate - now;
        
//       Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
//       Output the result in an element with id="demo"
      document.getElementById("days").innerHTML = days + ":";
      document.getElementById("hours").innerHTML = hours + ":";
      document.getElementById("minutes").innerHTML = minutes + ":";
      document.getElementById("seconds").innerHTML = seconds;
        
//       If the count down is over, write some text 
      if (distance <= 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);