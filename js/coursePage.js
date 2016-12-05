// $(document).read(function() {
//     $('.instructor-accordion-toggle').on('click', function(event) {
//         event.preventDefault();

//         var accordion = $(this);
//         var accordionContent = accordion.next('instructor-accordion-content');


//         accordion.toggleClass("open");
//         accordionContent.slideToggle(250);
//     });
// });



$(document).ready(function() {
    $('.accordion-toggle').on('click', function(event) {
        event.preventDefault();
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('.accordion-content');

        // toggle accordion link open class
        accordion.toggleClass("open");
        // toggle accordion content
        accordionContent.slideToggle(250);

    });


    $(".content-row").click(function() {

        // console.log($(this).data("href"));

        window.document.location = $(this).data("href");
    });

    $('#calendar').datepicker();

});