function loadAppointments(){
	$.ajax({
    url: ROOT_PATH + "/citizen/appointments",
    type: "GET",
    dataType : "json",
    contentType:"application/json",
    success: function (data) {
        console.log(data);
		$("#appointmentsTable").append("<tbody>");
        for (let appointmentIndex in data) {
            $("#appointmentsTable").append("<tr id=" + appointmentIndex + "'><td>" + data[appointmentIndex].createdAt + "</td><td>" + data[appointmentIndex].doctor.user["lastname"] + "</td></tr>");
        }
		$("#appointmentsTable").append("<tbody>");
		
		$("#appointmentsTable tr").click(function() {
        //loadAppointInfo($(this).children("td").html());
		});
		
    },
    error: function (xhr, resp, text) {
        alert("Error: " + text);
    }
	});
}

function loadAppointInfo(id) {
    $.ajax({
        url: ROOT_PATH + "/citizen/appointments/" + id
    }).then(function(data) {
        $("option[name=specialty]").val(book.id);
        $("option[name=doctor]").val(book.id);

        $("input[name=Date]").val(data.date);
        $("input[name=usr_time]").val(data.time);

        $("textarea[name=description]").val(data.description);
        $("textarea[name=more_comments]").val(data.more_comments);
    });
};

