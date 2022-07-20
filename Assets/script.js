
$(document).ready(function(){
    var date = moment().format('YYYY-MM-DD')
   
    $("#currentDay").text(date);

    var timeSlots = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]
for(var i = 0 ; i <= timeSlots.length; i++){
    var timeSlot= timeSlots[i]
    var appointment= localStorage.getItem(timeSlot)
    timeSlot="#"+timeSlot
    $(timeSlot).val(appointment);
}
   
    

    $(".saveButton").click(
        function(event) {
            console.log(event)
            var buttonClicked = event.target; 
            var inputField = buttonClicked.previousElementSibling 
            var inputValue = inputField.value 

            var time = inputField.previousElementSibling.textContent 
            localStorage.setItem(time, inputValue)
            
        }
    )

});