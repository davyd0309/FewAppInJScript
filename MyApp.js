/**
 * Created by Konrad on 03.12.2016.
 */



    function MyApp(appName) {

        this.constructor.appNumber++;

        var appName = appName;
        var appJsCode;
        var appHtmlCode;


        this.getAppName = function () {
            return appName;
        };

        this.getAppHtmlCode = function () {
            return appHtmlCode;
        };

        this.setAppJsCod = function (newAppJsCode) {
            appJsCode = newAppJsCode;
        };

        this.setAppHtmlCod = function (newAppHtmlCode) {
            appHtmlCode = newAppHtmlCode;
        }

        this.toString = function () {
            return "Nazwa aplikacji :" + appName;


        }

    }

    MyApp.appNumber = 0;

    MyApp.prototype.changeAppInMainDiv = function () {
        var mainDiv = document.querySelector('mainDiv');

        if (this.getAppName() == 'formValidApp') {
            this.setAppHtmlCod("htmlsdsadasdasdasdasdad")
        }

        console.log(this.getAppName())
        console.log(this.getAppHtmlCode())

        // mainDiv.appendChild(this.getAppHtmlCode());

    };








