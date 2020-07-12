var linkPopup = document.querySelector(".write-to-us");
var popup = document.querySelector(".popup");
var closePopup = popup.querySelector(".button-close");
var formPopup = popup.querySelector(".popup-feedback");
var namePopup = popup.querySelector(".popup-name");
var emailPopup = popup.querySelector(".popup-email");
var areaPopup = popup.querySelector(".popup-textarea");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


linkPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add ("popup-feedback-active");

 if (storageName && storageEmail) {
    namePopup.value = storageName;
    emailPopup.value = storageEmail;
    areaPopup.focus();
  } else {
    if (storageName) {
    namePopup.value = storageName;  
  	emailPopup.focus();
  
}
  }
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-feedback-active");
  popup.classList.remove("popup-error");
});

formPopup.addEventListener("submit", function (evt) {
  if (!namePopup.value || !emailPopup.value || !areaPopup.value) {
    evt.preventDefault();
    popup.classList.add("popup-error");

  } else {
  	if (isStorageSupport) {
    localStorage.setItem("login", namePopup.value);
    localStorage.setItem("email", emailPopup.value);
    }
	 }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-feedback-active")) {
      evt.preventDefault();
      popup.classList.remove("popup-feedback-active");
      popup.classList.add("popup-error");
    }
  }
});