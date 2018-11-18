(function(){
    'use strict';

    var basedate = document.getElementById('basedate');
    var btn = document.getElementById('btn');
    var resultYesterday = document.getElementById('result-yesterday');
    var resultTommorrow = document.getElementById('result-tommorrow');
    var resultNextMonth = document.getElementById('result-next-month');
    var resultPrevMonth = document.getElementById('result-prev-month');
    var resultNextYear = document.getElementById('result-next-year');
    var resultPrevYear = document.getElementById('result-prev-year');


    function checkInput(){
        if(
            basedate.value.match(/^(19[0-9]{2}|20[0-9]{2})\/([1-9]|1[0-2])\/([1-9]|[12][0-9]|3[01])$/) != null
        ){
            btn.classList.remove('disabled');
        }else{
            btn.classList.add('disabled');
        }
    }

    function addMonth(date, months) {
        var resultDate = new Date(date.getTime());
        resultDate.setMonth(date.getMonth() + 1);
        if (date.getDate() > resultDate.getDate()) {
            resultDate.setDate(0);
        }
        return resultDate;
    }
    
    basedate.addEventListener('keyup', checkInput);

    btn.addEventListener('click', function(){
        if(btn.classList.contains('disabled')){
            return;
        }
        let basedateValue  = basedate.value
        console.log(basedate.value)

        let tommorrow = new Date(basedateValue);
        tommorrow.setDate(tommorrow.getDate() + 1);
        let yesterday = new Date(basedateValue);
        yesterday.setDate(yesterday.getDate() - 1);
        let nextMonth = addMonth(new Date(basedateValue), 1);
        let prevMonth = new Date(basedateValue);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        let nextYear = new Date(basedateValue);
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        let prevYear = new Date(basedateValue);
        prevYear.setFullYear(prevYear.getFullYear() - 1);

        resultTommorrow.textContent = tommorrow.getFullYear() + '/' + (tommorrow.getMonth() + 1) + '/' + tommorrow.getDate();
        resultYesterday.textContent = yesterday.getFullYear() + '/' + (yesterday.getMonth() + 1) + '/' + yesterday.getDate();
        resultNextMonth.textContent = nextMonth.getFullYear() + '/' + (nextMonth.getMonth() + 1) + '/' + nextMonth.getDate();
        resultPrevMonth.textContent = prevMonth.getFullYear() + '/' + (prevMonth.getMonth() + 1) + '/' + prevMonth.getDate();
        resultNextYear.textContent = nextYear.getFullYear() + '/' + (nextYear.getMonth() + 1) + '/' + nextYear.getDate();
        resultPrevYear.textContent = prevYear.getFullYear() + '/' + (prevYear.getMonth() + 1) + '/' + prevYear.getDate();
    });

})();