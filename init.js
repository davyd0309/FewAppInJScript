/**
 * Created by Konrad on 03.12.2016.
 */


(function () {


    var formValidAppObject = new MyApp('formValidApp');
    document.querySelector('#formValidAppStartButton').onclick = formValidAppObject.changeAppInMainDiv();

    console.log(formValidAppObject.toString())

})();