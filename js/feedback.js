var LinkPopup = document.querySelector(".write-to-us");
var Popup = document.querySelector(".popup");
var ClosePopup = Popup.querySelector(".button-close");
var FormPopup = Popup.querySelector(".popup-feedback");
var NamePopup = Popup.querySelector(".popup-name");
var EmailPopup = Popup.querySelector(".popup-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

LinkPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.add ("popup-feedback-active");

 if (storage) {
    NamePopup.value = storage;
    EmailPopup.focus();
  } else {
  	NamePopup.focus();
  }
});

ClosePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("popup-feedback-active");
  Popup.classList.remove("popup-error");
});

FormPopup.addEventListener("submit", function (evt) {
  if (!NamePopup.value || !EmailPopup.value) {
    evt.preventDefault();
    Popup.classList.add("popup-error");

  } else {
  	if (isStorageSupport) {
    localStorage.setItem("login", NamePopup.value);
	}
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (Popup.classList.contains("popup-feedback-active")) {
      evt.preventDefault();
      Popup.classList.remove("popup-feedback-active");
      Popup.classList.add("popup-error");
    }
  }
});