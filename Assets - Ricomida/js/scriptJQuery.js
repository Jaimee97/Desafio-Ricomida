
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
    });

    $(".description-section p span").dblclick(function(){
        $(this).css({
            "color":"red"
        });
    });

    $(".card-title").click(function(){
        var description = $(this).siblings(".card-text")
        description.toggle("slow");
    })
});


