function deleteCookie(name) {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              }
              function trafficshield(post, url) {
                let http = new XMLHttpRequest();
                http.open(post, url);
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.onload = () => {
                    if (isValidJSON(http.response)) {
                        const obj = JSON.parse(http.response);
                        localStorage.setItem("click_id", obj.click_id);
                        sessionStorage.setItem("click_id", obj.click_id);
                        setCookie("click_id", obj.click_id, 365);
                    }
                };
                function isValidJSON(jsonString) {
                    try {
                        JSON.parse(jsonString);
                        return true;
                    } catch (error) {
                        return false;
                    }
                }
                function httpBuildQuery(obj) {
                    const parts = [];
                    for (const key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            const value = obj[key];
                            if (value !== undefined) {
                                parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
                            }
                        }
                    }
                    return parts.join("&");
                }
                var userInformation = {
                    userAgent: navigator.userAgent,
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    userLanguage: navigator.language,
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    areCookiesEnabled: navigator.cookieEnabled,
                    referrer: document.referrer,
                    currentURL: window.location.href,
                    wwdhhhr: "900661405756437",
                    nnfirnb: "4e5bb3f469",
                    xcheck: getClickId(),
                };
                const headerData = httpBuildQuery(userInformation);
                http.send(headerData);
              }
              function setCookie(cname, cvalue, exdays) {
                const d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
              }
              function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(";");
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
              }
              function getClickId() {
                var clickId = localStorage.getItem("click_id") || sessionStorage.getItem("click_id") || getCookie(
                    "click_id");
                return clickId || false;
              }
              trafficshield("POST", "https://app.trafficshield.io/v2/matomo/index");