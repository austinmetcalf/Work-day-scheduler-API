
$(document).ready(function(){
    var date = moment().format('YYYY-MM-DD')
    // need to do something similar to set the calendar values if they are in local storage
    $("#currentDay").text(date);

    var timeSlots = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]

   


    var timeSlot
    var appointment= localStorage.getItem(timeSlot)
    $("#appointment").val(appointment);

    $(".saveButton").click(
        function(event) {
            console.log(event)
            var buttonClicked = event.target; // <button>Save</button>
            var inputField = buttonClicked.previousElementSibling // <input>
            var inputValue = inputField.value // whatever text is in the field

            var time = inputField.previousElementSibling.textContent // <span>9:00am</span>
            localStorage.setItem(time, inputValue)
            
        }
    )

});