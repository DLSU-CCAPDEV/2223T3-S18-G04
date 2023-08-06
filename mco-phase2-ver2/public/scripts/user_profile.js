var reservations;

function getReservations() {
    debugger;
    const urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email');
    
    $.get('/seeReservations', {email: email}, function (result) {
        debugger;
        reservations = new Array();
        for (i = 0; i < result.length; i++) {
            for (var j = 0; j < result[i].seatnum.length; j++){
                if (result[i].seatnum[j].includes('seat')){
                    result[i].seatnum[j] = result[i].seatnum[j].replace('seat', "");
                }
            }
            reservations.push(result[i]);
        }

        //console.log(reservations);
        displayReservations();
    })
}

function writeSeats(seats) {
    debugger;
    var returnString = "";

    for (i = 0; i < seats.length; i++) {
        returnString = returnString.concat(seats[i]);
        if (i < seats.length - 1)
            returnString = returnString.concat(", ");
    }

    return returnString;
}

function displayReservations() {
    debugger;
    for (var i = 0; i < reservations.length; i++) {
        var reserveNum = "Reservation #".concat(i + 1);
        var lab = reservations[i].labnum;
        var seats = reservations[i].seatnum;
        var reserveDT;
        var requestDT;
        var tempDate;
        var tempTime;
        const reservationBox = document.createElement('section');
        const table = document.createElement('table');
        const heading = document.createElement('h3');
        
        tempDate = parseDateToWords(new Date(reservations[i].reserveDateTime));
        tempTime = parseTimeToAMPM(timezoneOffset(new Date(reservations[i].reserveDateTime)));

        reserveDT = tempDate.concat(" / ", tempTime);

        tempDate = parseDateToWords(new Date(reservations[i].requestDateTime));
        tempTime = parseTimeToAMPM(timezoneOffset(new Date(reservations[i].requestDateTime)));

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
                    text = document.createTextNode(writeSeats(seats));
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