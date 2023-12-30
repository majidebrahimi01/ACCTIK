
let $ = document;

/******* start navbar toggler animation *******/
$.addEventListener('click', function(e) {
if (e.target.classList.contains('hamburger_toggle')) {
	e.target.children[0].classList.toggle('active');
}
})    

/******* start toggle switch ********/
// Function saveThemeState to save the state of the theme
function saveThemeState(theme) {
    localStorage.setItem('theme', theme);
}
// Function applyTheme to set the theme according to the saved state
function applyTheme() {
const savedTheme = localStorage.getItem('theme');
const body = $.body;
	if (savedTheme === 'dark') {
		body.classList.add('dark_theme');
	} else {
		body.classList.remove('dark_theme');
	}
}
  // Call the applyTheme function when the page loads
  $.addEventListener('DOMContentLoaded', applyTheme);
  // toggleTheme function to change the theme and save its state
  function toggleTheme() {
    const body = $.body;
    body.classList.toggle('dark_theme');
    const currentTheme = body.classList.contains('dark_theme') ? 'dark' : 'light';
    saveThemeState(currentTheme);
  }

/******* particle background ********/
particlesJS("particles-js", {
    "particles": {
		"number": {
			"value": 140,
			"density": {
				"enable": true,
				"value_area": 1000
			}
		},
		"color": {
			"value": "#0d6efd"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#0d6efd"
			},
			"polygon": {
				"nb_sides": 12
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.7,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
        "enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
      "enable": true,
			"distance": 300,
			"color": "#0d6efd",
			"opacity": 0.3,
			"width": 1
		},
		"move": {
      "enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
    "detect_on": "canvas",
		"events": {
      "onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true, //fals
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
      "grab": {
        "distance": 413,
				"line_linked": {
          "opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},

			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}); 

/******* show/hide password ********/
 function password_show_hide() {
	var x = $.getElementById("validationPassword");
	var show_eye = $.getElementById("show_eye");
	var hide_eye = $.getElementById("hide_eye");
	hide_eye.classList.remove("d-none");
	if (x.type === "password") {
	  x.type = "text";
	  show_eye.style.display = "none";
	  hide_eye.style.display = "block";
	} else {
	  x.type = "password";
	  show_eye.style.display = "block";
	  hide_eye.style.display = "none";
	}
  }


/****************************/
// این تابع زمانی که فرم ارسال می‌شود اجرا می‌شود
$.getElementById('login').onsubmit = function(e) {
  // جلوگیری از ارسال فرم
  e.preventDefault();

  // پیدا کردن المان‌ها
  var usernameInput = $.getElementById('validationUsername');
  var passwordInput = $.getElementById('validationPassword');
  var userNameNote = $.querySelector('.username_message');
  var passwordNote = $.querySelector('.password_message');
  
  // بررسی اندازه و محتوی نام کاربری
  if (usernameInput.value.length < 11 || isNaN(usernameInput.value)) {
	usernameInput.style.borderColor = '#dc3545';
	userNameNote.innerHTML = 'نام کاربری وارد شده معتبر نمی‌باشد';
	userNameNote.style.display = 'block';
	userNameNote.style.color = '#dc3545';
  } else {
	usernameInput.style.borderColor = '#2EBC84';
  }

  // بررسی رمز عبور
  if (passwordInput.value === '') {
	passwordInput.style.borderColor = '#dc3545';
	passwordNote.innerHTML = 'لطفاً رمز عبور را وارد کنید';
	passwordNote.style.display = 'block';
	passwordNote.style.color = '#dc3545';
  }else if(passwordInput.value.length < 8){
	passwordInput.style.borderColor = '#dc3545';
	passwordNote.innerHTML = 'رمز عبور وارد شده صحیح نیست';
	passwordNote.style.display = 'block';
	passwordNote.style.color = '#dc3545';
  }else {
	passwordInput.style.borderColor = '#2EBC84';
  }

  // اگر هیچ خطایی وجود نداشت، فرم ارسال می‌شود
  if (passwordInput.style.borderColor === '#2EBC84' && usernameInput.style.borderColor === 'green') {
	this.submit();
  }
};




