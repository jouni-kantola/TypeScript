var Browser;
(function (Browser) {
    var CookieHandler = (function () {
        function CookieHandler() { }
        CookieHandler.prototype.save = function (value, cookieName, expiryInDays) {
            var expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + expiryInDays);
            var formattedValue = escape(value) + ((expiryInDays === null) ? '' : '; expires=' + expiryDate.toUTCString());
            document.cookie = cookieName + "=" + formattedValue;
        };
        CookieHandler.prototype.read = function (cookieName) {
            var browserCookies = document.cookie.split(';');
            for(var i = 0; i < browserCookies.length; i++) {
                var x = browserCookies[i].substr(0, browserCookies[i].indexOf('='));
                var y = browserCookies[i].substr(browserCookies[i].indexOf('=') + 1);
                var pattern = new RegExp('/^\s+|\s+$/g');
                x = x.replace(pattern, '');
                if(x === cookieName) {
                    return unescape(y);
                }
            }
        };
        return CookieHandler;
    })();
    Browser.CookieHandler = CookieHandler;    
})(Browser || (Browser = {}));
//@ sourceMappingURL=CookieHandler.js.map
