function dateOffset(date, dateOffset) {
    return date.setDate(date.getDate() + dateOffset);
}

function dateISOToJSON(dateInput) {
    return dateInput.toJSON();
}

function parseDateToWords(date) {
    return moment(date).format('MMMM DD, YYYY');
}

function parseTimeToAMPM(time) {
    var inputTime = dateISOToJSON(time).slice(11, 16);
    var hour = inputTime.slice(0, 2);
    var min = inputTime.substring(3);
    var twelveHour;
    var meridiem;

    if (parseInt(hour) == 12)
        twelveHour = 12;
    else
        twelveHour = parseInt(hour) % 12

    if (parseInt(hour) > 11)
        meridiem = "PM";
    else
        meridiem = "AM";

    return twelveHour.toString().concat(":", min, " ", meridiem);
}

function timezoneOffset(datetime) {
    var offset = datetime.getTimezoneOffset() * 60000;
    var returnValue = new Date(datetime.getTime() - offset)
    return returnValue;
}