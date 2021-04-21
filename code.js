$(document).ready(function () {
    $("button").on("click", viewSchedule);
});

function viewSchedule(event) {
    event.preventDefault();


    let display = $("input[name=day]:checked").attr("id");

    if (display === "monday") {

        $("p#event").text(`Monday Javascript 6:00`);

    }

    else if (display === "tuesday") {

        $("p#event").text(`Tuesday Gym 12:00`);

    }

    else if (display === "wednesday") {

        $("p#event").text(`Wednesday Javascript 6:00`);

    }

    else if (display === "thursday") {

        $("p#event").text(`Thursday 4:00 meeting`);

    }

    else if (display === "friday") {

        $("p#event").text(`Friday 4:00 Tennis`);

    }

    else if (display === "saturday") {

        $("p#event").text(`Saturday 2:00 Play`);

    }

    else if (display === "sunday") {

        $("p#event").text(`Sunday All Day Family Time`);

    }





}