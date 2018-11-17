(function(){
    'use strict';

    var basedate = document.getElementById('basedate');
    var days = document.getElementById('days');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');

    function checkInput(){
        if(
            basedate.value.match(/^(19[0-9]{2}|20[0-9]{2})\/([1-9]|1[0-2])\/([1-9]|[12][0-9]|3[01])$/) != null &&
            days.value.match(/^[1-9][0-9]*$/) != null
        ){
            btn.classList.remove('disabled');
        }else{
            btn.classList.add('disabled');
        }
    }
    basedate.addEventListener('keyup', checkInput);
    days.addEventListener('keyup', checkInput);
    btn.addEventListener('click', function(){
        if(btn.classList.contains('disabled')){
            return;
        }
        var date = new Date(basedate.value);
        console.log(days.value);


        date.setDate(date.getDate() + days.value);

        result.textContent = basedate.value + 'の' + days.value + '日後は' + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
    });

})();