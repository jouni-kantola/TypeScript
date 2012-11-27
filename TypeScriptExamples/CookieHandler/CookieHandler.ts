// Reference declaration or other TypeScript file 
/// <reference path="javascript.global.functions.d.ts" />
// Usage: References TypeScript declarations. To see effect, try to compile without the code line.

// Interface
interface ICookieHandler {
    save(value: string, cookieName: string, expiryInDays: number);
    read(cookieName: string): string;
}

// Module
module Browser {

    // Class
    export class CookieHandler implements ICookieHandler {
        save(value: string, cookieName: string, expiryInDays: number) {
            var expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + expiryInDays);
            var formattedValue: string = escape(value) + ((expiryInDays === null) ? '' : '; expires=' + expiryDate.toUTCString());
            document.cookie = cookieName + "=" + formattedValue;
        }

        read(cookieName: string): string {
            var browserCookies: string[] = document.cookie.split(';');
            for (var i: number = 0; i < browserCookies.length; i++) {
                var x: string = browserCookies[i].substr(0, browserCookies[i].indexOf('='));
                var y: string = browserCookies[i].substr(browserCookies[i].indexOf('=') + 1);
                var pattern = new RegExp('/^\s+|\s+$/g');
                x = x.replace(pattern, '');
                if (x === cookieName) {
                    return unescape(y);
                }
            }
        }
    }
}