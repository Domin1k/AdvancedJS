var poppy = poppy || {};

(function (scope) {
    'use strict';

    var OPACITY_STEP = 0.04,
        FADE_IN_INTERVAL = 20,
        FADE_OUT_INTERVAL = 40,
        ERROR_POPUP_TIMEOUT = 4;

    function pop(type, title, message) {
        var popup;
        switch (type) {
            case 'success':
                popup = new poppy._modules.Success(title, message);
                break;
            case 'info':
                popup = new poppy._modules.Info(title, message, FADE_IN_INTERVAL);
                break;
            case 'error':
                popup = new poppy._modules.Error(title, message, ERROR_POPUP_TIMEOUT);
                break;
            case 'warning':
                popup = new poppy._modules.Warning(title, message, redirect);
                break;
        }

        // generate view from view factory
        var view = poppy._factory.createPopupView(popup);

        processPopup(view, popup);
        autoHide();
    }

    function redirect() {
        window.location = 'https://www.youtube.com/watch?v=HMUDVMiITOU';
    }


    function processPopup(domView, popup) {
        document.body.appendChild(domView).setAttribute('id', popup._popupData.title);
        fadeIn(domView, FADE_IN_INTERVAL);

        if (popup._popupData.closeButton === true) {
            domView.getElementsByClassName('poppy-close-button')[0]
                .addEventListener('click', function() {
                    fadeOut(domView, FADE_OUT_INTERVAL);
                });
        }

        var warningPopup = document.getElementById('WarningTitle');
        if (warningPopup) {
            warningPopup.addEventListener('click', function() {
                redirect();
            })
        }
    }

    function autoHide(element, timeInterval) {
        ERROR_POPUP_TIMEOUT--;
        if (ERROR_POPUP_TIMEOUT === 0 ) {
            var errorBox = document.getElementById('ErrorTitle');
            fadeOut(errorBox, FADE_OUT_INTERVAL);
        }
    }

    function fadeOut(element, timeInterval) {
        var opacity = 1,
            disappearInterval = setInterval(function() {
                if (opacity <= 0) {
                    document.body.removeChild(element);
                    clearInterval(disappearInterval);
                }

                element.style.opacity = opacity;
                opacity -= OPACITY_STEP;
            }, timeInterval);
    }

    function fadeIn(element, timeInterval) {
        var opacity = 0,
            appearInterval = setInterval(function() {
                if (opacity >= 1) {
                    document.body.appendChild(element);
                    clearInterval(appearInterval);
                }

                element.style.opacity = opacity;
                opacity += OPACITY_STEP;
            }, timeInterval);
    }

    scope._coreLogic = {
        pop: pop
    };

}(poppy));