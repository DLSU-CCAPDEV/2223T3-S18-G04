var reservations;

function getReservations() {
    const urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email');
    
    $.get('/seeReservations', {email: email}, function (result) {
        reservations = new Array();
        for (i = 0; i < result.length; i++) {
            reservations.push(result[i]);
        }

        console.log(reservations);
        displayReservations();
    })
}

function displayReservations() {
    debugger;
    for (var i = 0; i < reservations.length; i++) {
        var reserveNum = "Reservation #".concat(i + 1);
        var lab = reservations[i].lab;
        var seat = reservations[i].seat;
        var reserveDT;
        var requestDT;
        var tempDate;
        var tempTime;
        const reservationBox = document.createElement('section');
        const table = document.createElement('table');
        const heading = document.createElement('h3');
        
        tempDate = parseDateToWords(new Date(reservations[i].reservedatetime));
        tempTime = parseTimeToAMPM(timezoneOffset(new Date(reservations[i].reservedatetime)));

        reserveDT = tempDate.concat(" / ", tempTime);

        tempDate = parseDateToWords(new Date(reservations[i].requestdatetime));
        tempTime = parseTimeToAMPM(timezoneOffset(new Date(reservations[i].requestdatetime)));

        requestDT = tempDate.concat(" / ", tempTime);

        heading.innerHTML = reserveNum;

        $(reservationBox).addClass("post");
        $(reservationBox).append(heading);
        $(reservationBox).append(document.createElement('hr'));
        $(reservationBox).append(table);

        for (var j = 0; j < 4; j++) {
            var tableRow = table.insertRow();
            const bold = document.createElement('strong');
            var text;
            switch (j) {
                case 0:
                    var tableCell = tableRow.insertCell();
                    text = document.createTextNode("Lab Number: ");
                    bold.appendChild(text);
                    tableCell.appendChild(bold);
                    text = document.createTextNode(lab);
                    tableCell.appendChild(text);
                    break;
                case 1:
                    var tableCell = tableRow.insertCell();
                    text = document.createTextNode("Seat Number: ");
                    bold.appendChild(text);
                    tableCell.appendChild(bold);
                    text = document.createTextNode(seat);
                    tableCell.appendChild(text);
                    break;
                case 2:
                    var tableCell = tableRow.insertCell();
                    text = document.createTextNode("Reservation Date / Time: ");
                    bold.appendChild(text);
                    tableCell.appendChild(bold);
                    text = document.createTextNode(reserveDT);
                    tableCell.appendChild(text);
                    break;
                case 3:
                    var tableCell = tableRow.insertCell();
                    text = document.createTextNode("Request Date / Time: ");
                    bold.appendChild(text);
                    tableCell.appendChild(bold);
                    text = document.createTextNode(requestDT);
                    tableCell.appendChild(text);
                    break;
            }
        }

        $('.posts').append(reservationBox);
    }

}

$(document).ready(function() {

    getReservations();
    
})