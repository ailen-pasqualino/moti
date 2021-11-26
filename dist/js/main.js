//Links de semana y mes
var calendarWeek = $("#week");
var calendarMonth = $("#month");


console.log(calendarWeek);
console.log(calendarMonth);


calendarMonth.click(function(){
    $(this).addClass("active");
    calendarWeek.removeClass("active");
    $("#calendar-month").removeClass("d-none");
    $("#calendar-month").addClass("d-block");
    $("#calendar-week").addClass("d-none");
    $("#desafios").addClass("d-none");
});

calendarWeek.click(function(){
    $(this).addClass("active");
    calendarMonth.removeClass("active");
    $("#calendar-month").addClass("d-none");
    $("#calendar-week").removeClass("d-none");
    $("#desafios").removeClass("d-none");
    $("#desafios").addClass("d-block");
});
