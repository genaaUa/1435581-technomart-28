var openCart = document.querySelectorAll(".button-goods-buy");
var popupCart = document.querySelector(".popup-order");
var closeOrder = document.querySelector(".popup-order-close");
var resumeOrder = document.querySelector(".button-popup-order-resume");
var countBtn = document.querySelector('.buttom-header-basket');
var counter = countBtn.querySelector('.count');

for (var i = 0; i < openCart.length; i++) {
        openCart[i].addEventListener('click', function (event) {
            event.preventDefault();
            popupCart.classList.add('modal-show-map');
            countBtn.classList.add('count-active');
            var count = Number(counter.innerHTML);
            counter.innerHTML = count += 1;
        });
    }

closeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-show-map");
});

resumeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal-show-map")) {
      popupCart.classList.remove("modal-show-map");
    }
  }
});




var linkMessage = document.querySelector(".button-message");
var popupForm = document.querySelector(".message-form");
var closeForm = document.querySelector(".form-close");
//var countBtn = document.querySelector('.bar-cart-count');
//var counter = countBtn.querySelector('.count');

linkMessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
    }
  }
});

var linkMap = document.querySelector(".mini-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".map-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show-map");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show-map")) {
      popupMap.classList.remove("modal-show-map");
    }
  }
});

 var linkArrow = document.querySelectorAll('.features-slider-arrows a');
    var inputNav = document.querySelectorAll('[name="features-toggle"]');

    if (linkArrow) {
        for (var i = 0; i < linkArrow.length; i++) {
            linkArrow[i].addEventListener('click', function (event) {
                event.preventDefault();
                var currentInput = document.querySelector('.features-slider input:checked');
                var currentInputIndex = [].indexOf.call(inputNav, currentInput);
                var inputCount = inputNav.length;
                switch (this.dataset.direction) {
                case 'left':
                    if (currentInputIndex == 0) {
                        inputNav[inputCount - 1].checked = true;
                    } else {
                        inputNav[currentInputIndex - 1].checked = true;
                    }
                    break;

                case 'right':
                    if ((inputCount - 1) == currentInputIndex) {
                        inputNav[0].checked = true;
                    } else {
                        inputNav[currentInputIndex + 1].checked = true;
                    }
                    break;
                }
            });
        };
    }