
// xd-privacy-banner new


    let ensightenCookies = new Map();
  const acceptBtn = document.getElementById("AcceptBtn");

  const optOutBtn = document.getElementById("OptOutBtn");


function setCookie(cname, cvalue, exdays) {

  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires  + ";domain=.statefarm.com;path=/";
  //document.cookie = cname + "=" + cvalue + ";" + ";domain=.statefarm.com;path=/";
}


function setCookieVals(){
 
	event.preventDefault();

    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Marketing', 1, 365);
    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Analytics', 1, 365);
    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Social', 1, 365);
    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Performance', 1, 365);

   /* Bootstrapper.gateway.setCookies({
	
	'Marketing': '1',

      'Analytics': '1',
 
      'Social': '1',
 
      'Performance': '1',

    },31536000000);*/

    document.getElementById('notice-container').style.display = "none";

}

function optOutCookieVals(){

	event.preventDefault();

    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Marketing', 0, 365);
    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Analytics', 0, 365);
    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Social', 0, 365);
    setCookie('STATEFARM_ENSIGHTEN_PRIVACY_Performance', 0, 365);


   /* Bootstrapper.gateway.setCookies({

	'Marketing': '0',

      'Analytics': '0',
 
      'Social': '0',
 
      'Performance': '0',

    },31536000000);*/

    document.getElementById('notice-container').style.display = "none";

}

   function getCookieVals() {

    let allCookies = document.cookie.split(';');

    allCookies.forEach(function(cookie) {

      let cookiePair = cookie.split("=");

      if (cookiePair[0].includes("ENSIGHTEN_PRIVACY")) {

        ensightenCookies.set(cookiePair[0].trim(), cookiePair[1]);

      }

    });

       return ensightenCookies;
       }

window.addEventListener('load', function() {
    var noticeContainer = document.getElementById('notice-container');
     noticeContainer.style.display = "none";

getCookieVals();

if (ensightenCookies.size > 0) {
   noticeContainer.style.display = "none";
  } else {
    noticeContainer.style.display = "block";
      recalculatePageHeight();
  }


});


function recalculatePageHeight() {
	var noticeContainer = document.getElementById('notice-container');
	 document.body.style.paddingBottom = (noticeContainer.offsetHeight)+"px";
}