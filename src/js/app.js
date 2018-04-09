require('../index.html'); //zeby webpack przeladowywal html -  nic innego nie robi
require('../scss/main.scss');// załadowanie sassa

$(function () {
    var input = $('taskInput');
    var listUl = $("taskList");
    var $button = $("addTaskButton");
    var remAll = $("removeFinishedTasksButton");
    // var levelOfPrio = document.getElementById()
    // console.log(remAll);
    var n = 1;
    var dateOfDeadline = $('deadLine');
    // console.log(dateOfDeadline);

    $button.addEventListener("click", function () {
        var textInput = input.value;
        var setDeadline = dateOfDeadline.value;
        console.log(setDeadline);
        var firstSection = $(".first-section");


        var element = document.createElement("li");

        element.innerHTML = '<h1>Task ' + n + "</h1>\n<p>" + textInput + '</p>' +
            '<input class="checkBox"' + n + ' type="checkbox">' +
            '<h2>' + setDeadline + '</h2>';

        n++;




        console.log(checkDone);
        $('.checkBox').selected(function () {
            element.classList.toggle("done");
        });

        // function deleteButton() {
        //
        //     $("button #del").each(function () {
        //         $(this).parent().remove();
        //     });
        // };
    });

    // remAll.addEventListener('click', function () {
    //     var completedElements = document.querySelectorAll("#checkBox");
    //
    //     for(var i =0; i < completedElements.length; i++){
    //         listUl.removeChild(completedElements[i]);
    //         // console.log("asdas");
    //     }
    //
    //
    // })
});