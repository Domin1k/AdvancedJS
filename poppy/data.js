var poppy = poppy || {};

(function (scope) {
    'use strict';

    var TYPE_CONSTANTS = {
        SUCCESS: 'success',
        INFO: 'info',
        ERROR: 'error',
        WARNING: 'warning'
    };

    var POSITION_CONSTANTS = {
        SUCCESS_POSITION: 'bottomLeft',
        INFO_POSITION: 'topLeft',
        ERROR_POSITION: 'topRight',
        WARNING_POSITION: 'bottomRight'
    };

    var BasePopup = (function () {
            function BasePopup(title, message, position, type, autoHide, timeout, closeButton, callback) {
                this._popupData = {
                    title: title,
                    message: message,
                    position: position,
                    type: type,
                    autoHide: autoHide,
                    timeout: timeout,
                    closeButton: closeButton,
                    callback: callback
                }
            }

        return BasePopup;
    }());

    var Succes = (function () {
        function Success(title, message) {
            BasePopup.call(this, title, message,POSITION_CONSTANTS.SUCCESS_POSITION, TYPE_CONSTANTS.SUCCESS,
                           false, false, false, false);
        }

        Success.extends(BasePopup);

        return Success;
    }());

    var Info = (function () {
        function Info(title, message, timeout) {
            BasePopup.call(this, title, message,POSITION_CONSTANTS.INFO_POSITION, TYPE_CONSTANTS.INFO,
                           false, timeout, true, false);
        }

        Info.extends(BasePopup);

        return Info;
    }());

    var Error = (function () {
        function Error(title, message, timeout) {
            BasePopup.call(this, title, message,POSITION_CONSTANTS.ERROR_POSITION, TYPE_CONSTANTS.ERROR,
                            true, timeout, false, false);
        }

        Error.extends(BasePopup);

        return Error;
    }());

    var Warning = (function () {
        function Warning(title, message, callback) {
            BasePopup.call(this, title, message,POSITION_CONSTANTS.WARNING_POSITION, TYPE_CONSTANTS.WARNING,
                            false, false, false, callback);
        }

        Warning.extends(BasePopup);

        return Warning;
    }());

    scope._modules = {
        Success: Succes,
        Info: Info,
        Error: Error,
        Warning: Warning
    };

}(poppy));