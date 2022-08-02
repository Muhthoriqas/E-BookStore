function displayPassword() {
  var password = document.getElementById("password");
  var displayPass = document.getElementById("display-pass");
  var hidenPass = document.getElementById("hiden-pass");

  if (password.type === "password") {
    password.type = "text";
    displayPass.style.display = "block";
    hidenPass.style.display = "none";
  } else {
    password.type = "password";
    displayPass.style.display = "none";
    hidenPass.style.display = "block";
  }
}

function displayPasswordConfirm() {
  var passConfirm = document.getElementById("passwordConfirm");
  var displayPassConfirm = document.getElementById("display-passConfirm");
  var hidenPassConfirm = document.getElementById("hiden-passConfirm");

  if (passConfirm.type === "password") {
    console.log("click if");
    passConfirm.type = "text";
    displayPassConfirm.style.display = "block";
    hidenPassConfirm.style.display = "none";
  } else {
    console.log("click else");
    passConfirm.type = "password";
    displayPassConfirm.style.display = "none";
    hidenPassConfirm.style.display = "block";
  }
}

searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
