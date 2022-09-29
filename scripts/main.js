window.onload = function() {
    console.log(Cookies.get('darkmode'))

    if (Cookies.get('darkmode') == 'false') {
        document.getElementById("toggle").src = "images/icons/dark.svg";
        document.getElementById('stylesheet').href='styles/global.css';
    } else {
        document.getElementById("toggle").src = "images/icons/light.svg";
        document.getElementById('stylesheet').href='styles/global_dark.css';
    }
}

function toggle_style() {
    if (Cookies.get('darkmode') == 'true') {
        document.getElementById("toggle").src = "images/icons/dark.svg";
        document.getElementById('stylesheet').href='styles/global.css';

        Cookies.set("darkmode", 'false')
    } else {
        document.getElementById("toggle").src = "images/icons/light.svg";
        document.getElementById('stylesheet').href='styles/global_dark.css';

        Cookies.set("darkmode", 'true')
    }

    console.log(Cookies.get('darkmode'))
  }

function login() {
    console.log("Login: " + document.getElementById("username").value + " : " + document.getElementById("password").value);
  }
