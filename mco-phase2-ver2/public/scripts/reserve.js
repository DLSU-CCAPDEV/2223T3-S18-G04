// Lab Timeslot Calendar

var reservations;

var reservationIntervals = [
    "07:30AM - 08:00AM",
    "08:00AM - 08:30AM",
    "08:30AM - 09:00AM",
    "09:00AM - 09:30AM",
    "09:30AM - 10:00AM",
    "10:00AM - 10:30AM",
    "10:30PM - 11:00AM",
    "11:00AM - 11:30AM",
    "11:30AM - 12:00PM",
    "12:00PM - 12:30PM",
    "12:30PM - 01:00PM",
    "01:00PM - 01:30PM",
    "01:30PM - 02:00PM",
    "02:00PM - 02:30PM",
    "02:30PM - 03:00PM",
    "03:00PM - 03:30PM",
    "03:30PM - 04:00PM",
    "04:00PM - 04:30PM",
    "04:30PM - 05:00PM",
    "05:00PM - 05:30PM",
    "05:30PM - 06:00PM",
    "06:00PM - 06:30PM",
    "06:30PM - 07:00PM",
    "07:00PM - 07:30PM",
    "07:30PM - 08:00PM",
    "08:00PM - 08:30PM",
    "08:30PM - 09:00PM"
]

var times = [
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00"
]

function seatChecker(targetSeat, seats) {
    debugger;
    var returnValue = 0;

    for (i = 0; i < seats.length; i++) {
        if (targetSeat == seats[i])
            returnValue = 1;
    }
    return returnValue;
}

function createCalendar(labNum) {
    const table = document.createElement('table');
    table.style.border = '1px solid black';

    var tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);
    for (var i = 0; i < 8; i++) {

        var tHeadCell = tableHeader.appendChild(document.createElement('th'));

        switch (i) {
            case 1:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 0)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 0))));
                break;
            case 2:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 1)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 1))));
                break;
            case 3:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 2)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 2))));
                break;
            case 4:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 3)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 3))));
                break;
            case 5:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 4)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 4))));
                break;
            case 6:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 5)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 5))));
                break;
            case 7:
                tHeadCell.appendChild(document.createTextNode(moment(dateOffset(new Date(), 6)).format('dddd')));
                tHeadCell.appendChild(document.createElement('br'));
                tHeadCell.appendChild(document.createTextNode(parseDateToWords(dateOffset(new Date(), 6))));
                break;
        }
    }

    for (var i = 0; i < 27; i++) {
        debugger;
            const tableRow = table.insertRow();
        for (var j = 0; j < 8; j++) {
            const tableCell = tableRow.insertCell();
            tableCell.style.width = '30px';
            tableCell.style.height = 'auto';
            tableCell.style.border = '1px solid black';
            tableCell.style.padding = '5px';
            if (j == 0) {
                tableCell.style.textAlign = 'center';
                tableCell.style.fontWeight = 'bold';
                tableCell.append(document.createTextNode(reservationIntervals[i]));
            }
            else {
                var slotList = document.createElement("p");
                $(slotList).addClass('slot-list');

                var slotsTaken = 0;
                var slotsTakenString;

                var time = $(times)[i];
                var date = moment(dateOffset(new Date(), j - 1)).format();
                date = date.substring(0, 10);
                var dateTime = date.concat("T", time);
                var studentList = null;

                var viewSlotsButton = document.createElement('button');
                $(viewSlotsButton).addClass('view-slots-button');
                viewSlotsButton.innerText = "View Slots";

                slotList.innerHTML = "Available: <br>";
                for (var k = 0; k < 40; k++) {
                    var iterations = 0;
                    if (reservations.length > 0) {
                        for (var l = 0; l < reservations.length; l++) {
                            var user = reservations[l];

                            if (dateTime == user.reserveDateTime && labNum == user.labnum && seatChecker(k + 1, user.seatnum) && user.isAnonymous == false) {
                                debugger;
                                var studentLink = document.createElement('LI');
                                studentLink.innerHTML = "<a href= '/user_profile?email=" + user.email + "'> " + user.username + " </a>";
                                slotsTaken += 1;

                                if (studentList == null)
                                    studentList = document.createElement('UL');

                                studentList.appendChild(studentLink);
                                iterations = 1;
                            }
                        }
                    }

                    if (iterations == 0) {
                        iterations = 1;
                        slotList.innerHTML = slotList.innerHTML.concat(k + 1);

                        if (k < 39)
                            slotList.innerHTML = slotList.innerHTML.concat(", ");
                    }
                }

                slotsTakenString = document.createElement('p');
                slotsTakenString.innerHTML = slotsTaken + " / 40 Slots Taken";

                tableCell.append(viewSlotsButton);
                slotList.style.display = 'none';
                tableCell.append(slotList);

                if (studentList != null) {
                    var studentHeading = document.createElement('p');
                    studentHeading.innerHTML = "<b> Students Reserved </b>";
                    tableCell.append(studentHeading);
                    tableCell.append(studentList);
                }

                tableCell.append(slotsTakenString);
            }
        }
    }

    return table;
}

// Editable labs
var labs = [];

var labsavailable = [
    {lab: "Lab 1", id: "lab-1", btnId: "mainrsvbtn1"},
    {lab: "Lab 2", id: "lab-2", btnId: "mainrsvbtn2"},
    {lab: "Lab 3", id: "lab-3", btnId: "mainrsvbtn3"},
];

if(labsavailable.length==0) {
    document.getElementById('roottimeslot').innerHTML = "Labs list is empty";
} else {
    document.getElementById('roottimeslot').innerHTML = labsavailable.map((labsinfo)=>
    {
        var {lab, id, btnId} = labsinfo;
        return(
        `<div class="lab-dropdown" id="${id}">
            <div class="lab-dropdown-row">
                <h2 style="float: left; font-size: 30px;">${lab}</h2>
                <button class="Reservebuttonmain" id="${btnId}">Reserve</button>
                <button class="lab-button button-font" id="lab-button-${id.split('-')[1]}">+</button>
            </div>
        </div>`
        )
    }).join('')
}

$(document).ready(function() {
    $.get('/getSAReservations', {}, function(result) {
        debugger;
        reservations = new Array();
        for(var i = 0; i < result.length; i++) {
                    for (var j = 0; j < result[i].seatnum.length; j++){
                        if (result[i].seatnum[j].includes('seat')){
                            result[i].seatnum[j] = result[i].seatnum[j].replace('seat', "");
                        }
                    }
        
                    reservations.push(result[i]);
        }

        // Create calendars for each lab
        for (var i = 1; i <= 3; i++) {
            const labTable = document.getElementById(`lab-${i}`).appendChild(createCalendar(i));
            $(labTable).addClass('calendar-table');
            labTable.style.display = "none";
        }

            // Click event for view slots buttons
        $(".view-slots-button").on("click", function() {
            var slotList = $(this).parent().children('.slot-list');
            slotList.toggle();
            $(this).html(slotList.css('display') === 'none' ? "View Slots" : "Hide Slots");
        });

    });

    // Function to toggle calendar display and change button text
    function toggleCalendar(calendar, button) {
        if (calendar.style.display === "none") {
            calendar.style.display = "table";
            button.innerText = '-';
        } else {
            calendar.style.display = "none";
            button.innerText = '+';
        }
    }

    // Click event for lab buttons (using event delegation)
    $('.lab-button').click(function() {
        var labNumber = this.id.split('-')[2];
        var calendar = $(`#lab-${labNumber} > .calendar-table`)[0];
        toggleCalendar(calendar, this);
        document.getElementById('datersv').value = getCurrentDateTime().toString().split('T')[0];
        var defaultdatetime = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
        fetchseats(labNumber, defaultdatetime);
    });
});

const reservecont = document.querySelector(".reserve_container");
const closereserve = document.querySelector(".close");

var reserveClickHandler = (index) => {
    return () => {
        console.log("Button clicked. Index:", index);
        document.getElementById('labchosen').value= index+1;
        reservecont.classList.add("show");
        reserveinput.classList.add("active");
        listreserve.classList.remove("active");
        editdeletereserve.classList.remove("active");
        displaylabs();
    };
};

// Assign the event listener to each button dynamically
labsavailable.forEach(function(item, index) {
    var button = document.getElementById(item.btnId);
    button.addEventListener("click", reserveClickHandler(index));
});

// Display the reservations
function displaylabs() {
    fetch('/slot_availability/get_reservations')
        .then(response => response.json())
        .then(dataArray => {labs = dataArray;})
        .catch(error => {console.error('Error:', error);});

    if (labs.length === 0) {
        document.getElementById('rootlab').innerHTML = "Reservation list is empty";
    } else {
        document.getElementById('rootlab').innerHTML = labs.map((reserveinfo) => {
            var { _id, labnum, username, seatnum, reserveDateTime} = reserveinfo;
            return (
                `<a class="tablelist" href="javascript:editmyreservation(${_id.toString()})">
                    <div class="editablelab" id="labrsv${_id}">
                        <table>
                            <tr colspan="2">
                                <p>Lab: <span id="labnum${labnum}">${labnum}</span></p>
                            </tr>
                            <tr colspan="2">
                                <p> Name: <span id="rsvname${_id}">${username}</span></p>
                            </tr>
                            <tr colspan="2">
                                <p> Slots: <span id="seatnum${_id}">${seatnum}</span> </p>
                            </tr>
                            <tr colspan="2">
                                <p> Date: <span id="rsvdate${_id}">${reserveDateTime}</span> </p>
                            </tr>
                        </table>
                    </div>
                </a>`
            )
        }).join('')
    }
}

// Switch between Adding and Editing reservations
const showlistreserve = document.querySelector("#showlistrsv");
const addreserve = document.querySelector("#addrsv");
var listreserve = document.querySelector(".listreserve");
var reserveinput = document.querySelector(".reserveinput");
var editdeletereserve = document.querySelector(".editdeletereserve");
const datechange = document.querySelector("#datersv");
const timechange = document.querySelector("#timersv");

const dateeditchange = document.querySelector("#datersvedit");
const timeeditchange = document.querySelector("#timersvedit");

function displayedreservation() {
    listreserve.classList.remove("active");
    editdeletereserve.classList.add("active");
}

function gobacktolistreserve() {
    listreserve.classList.add("active");
    editdeletereserve.classList.remove("active");
}

dateeditchange.addEventListener("change", (e) => {
    e.preventDefault();
    var labchosen = parseInt(document.getElementById("labchosen").value);
    var getchangedate = document.getElementById('datersvedit').value + "T" + document.getElementById('timersvedit').value;
    fetchseats(labchosen, getchangedate);
});

timeeditchange.addEventListener("change", (e) => {
    e.preventDefault();
    var labchosen = parseInt(document.getElementById("labchosen").value);
    var getchangedate = document.getElementById('datersvedit').value + "T" + document.getElementById('timersvedit').value;
    fetchseats(labchosen, getchangedate);
});

datechange.addEventListener("change", (e) => {
    e.preventDefault();
    var labchosen = parseInt(document.getElementById("labchosen").value);
    var getchangedate = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
    fetchseats(labchosen, getchangedate);
});

timechange.addEventListener("change", (e) => {
    e.preventDefault();
    var labchosen = parseInt(document.getElementById("labchosen").value);
    var getchangedate = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
    fetchseats(labchosen, getchangedate);
});

showlistreserve.addEventListener("click", (e) => {
    e.preventDefault();
    displaylabs();
    listreserve.classList.add("active");
    reserveinput.classList.remove("active");
});

addreserve.addEventListener("click", (e) => {
    e.preventDefault();
    var labchosen = parseInt(document.getElementById("labchosen").value);
    var getchangedate = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
    fetchseats(labchosen, getchangedate);
    listreserve.classList.remove("active");
    reserveinput.classList.add("active");
});

// CLOSE RESERVATIONS
closereserve.addEventListener("click", (e) => {
    e.preventDefault();
    reservecont.classList.remove("show");
    seatcontainer.classList.remove("active");

});

// Get current time
function getCurrentDateTime() {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear()).padStart(4, '0');
    const month = String(currentDate.getMonth()+1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    return formattedDateTime;
}

// Reset values to default
function resetinput() {
    document.getElementById("namersv").value = "";
    document.getElementById("datersv").value = "";
    document.getElementById("seatsrsv").value = "";
    document.getElementById("timersv").selectedIndex = 0;
}

// ADD RESERVATION
document.getElementById("buttonrsv").onclick = function() {
    reservecont.classList.remove("show");
    // Default value for name

    var reservername = document.getElementById("namersv").value;
    var Anonymous = false;
    if (reservername.length==0) {
        var num = labs.length + 1;
        reservername = "reserver" + num;
        Anonymous = true;
    }
    var labnum = parseInt(document.getElementById("labchosen").value);
    var datetime = document.getElementById("datersv").value + "T" + document.getElementById("timersv").value;

    // Add new reservation
    var newreserve = {
        username: reservername,
        lab: labnum,
        seatnum: selectedseats,
        requestDateTime: getCurrentDateTime(),
        reserveDateTime: datetime,
        isAnonymous: Anonymous
    };

    //post newreserve as JSON from server
    fetch('/slot_availability/add_reserve', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(newreserve),
        }).catch(error => {console.error('Error:', error);});
    lockInSelectedSeats();
    displaylabs();
}

//EDIT RESERVATION
function editmyreservation(ObjectID) {
    console.log(ObjectID);

    // find index of JSON array
    var reserverindex = labs.findIndex(function(item, j){
        return item._id === ObjectID
        });

    // display editing reservation tab
        var [date, time] = labs[reserverindex].reserveDateTime.split('T');
        document.getElementById('labchosenedit').value= labs[reserverindex].labnum;
        document.getElementById('namersvedit').value= labs[reserverindex].username;
        document.getElementById('seatsrsv').value= labs[reserverindex].seatnum.length;
        document.getElementById('datersvedit').value= date;
        document.getElementById('timersvedit').value= time;
        displayedreservation();

        var labchosen = parseInt(document.getElementById("labchosenedit").value);
        var getchangedate = document.getElementById('datersvedit').value + "T" + document.getElementById('timersvedit').value;
        fetchseats(labchosen, getchangedate);

    // Update reservation information
    document.getElementById("editrsv").onclick = function() {
        if (document.getElementById('namersvedit').value !== '') {
            var reservername = document.getElementById('namersvedit').value;
            isAnonymous = false;
        }
        var reserveDateTime = document.getElementById('datersvedit').value + "T" + document.getElementById('timersvedit').value;

        updatereserve = {
            _id: ObjectID,
            username: reservername,
            lab: labs[reserverindex].lab,
            seat: selectedseats,
            requestDateTime: getCurrentDateTime(),
            reserveDateTime: reserveDateTime,
            isAnonymous: Anonymous
        };

        fetch('/slot_availability/edit_reserve', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(updatereserve),
            }).catch(error => {console.error('Error:', error);});

        displaylabs();
        gobacktolistreserve();
    }

    document.getElementById("deletersv").onclick = function() {
        fetch(`/api/data/${ObjectID}`, {
            method: 'DELETE',
        }).catch(error => {console.error('Error:', error);});
        displaylabs();
        gobacktolistreserve();
    }

    document.getElementById("cancelbutton").onclick = function() {
        resetSeats();
        document.getElementById('seatsrsvedit').value = '';
        gobacktolistreserve();
    }
}

// Display Seats

var occupiedseats = [];
var selectedseats = [];

function fetchseats(labseat, datetime) {
    var seatfetch = { labseat, datetime };
    fetch('/slot_availability/seats_postget', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(seatfetch),
    })
    .then(response => response.json())
    .then(dataArray => {occupiedseats = [].concat(...dataArray.map(item => item.seatnum));})
    .catch(error => {console.error('Error:', error);});
}

function SeatLayout() {
    document.getElementById("rootseats").innerHTML= `
        <div class="seatbox">
            <div class="frontdeskcontainer">
                <div class="frontdesk"></div>
            </div>
            <div class="seatrow">
                <div class="seat" id="seat1"></div>
                <div class="seat" id="seat2"></div>
                <div class="seat" id="seat3"></div>
                <div class="seat" id="seat4"></div>
                <div class="seat" id="seat5"></div>
                <div class="seat" id="seat6"></div>
                <div class="seat" id="seat7"></div>
                <div class="seat" id="seat8"></div>
            </div>
            <div class="seatrow">
                <div class="seat" id="seat9"></div>
                <div class="seat" id="seat10"></div>
                <div class="seat" id="seat11"></div>
                <div class="seat" id="seat12"></div>
                <div class="seat" id="seat13"></div>
                <div class="seat" id="seat14"></div>
                <div class="seat" id="seat15"></div>
                <div class="seat" id="seat16"></div>
            </div>
            <div class="seatrow">
                <div class="seat" id="seat17"></div>
                <div class="seat" id="seat18"></div>
                <div class="seat" id="seat19"></div>
                <div class="seat" id="seat20"></div>
                <div class="seat" id="seat21"></div>
                <div class="seat" id="seat22"></div>
                <div class="seat" id="seat23"></div>
                <div class="seat" id="seat24"></div>
            </div>
            <div class="seatrow">
                <div class="seat" id="seat25"></div>
                <div class="seat" id="seat26"></div>
                <div class="seat" id="seat27"></div>
                <div class="seat" id="seat28"></div>
                <div class="seat" id="seat29"></div>
                <div class="seat" id="seat30"></div>
                <div class="seat" id="seat31"></div>
                <div class="seat" id="seat32"></div>
            </div>
            <div class="seatrow">
                <div class="seat" id="seat33"></div>
                <div class="seat" id="seat34"></div>
                <div class="seat" id="seat35"></div>
                <div class="seat" id="seat36"></div>
                <div class="seat" id="seat37"></div>
                <div class="seat" id="seat38"></div>
                <div class="seat" id="seat39"></div>
                <div class="seat" id="seat40"></div>
            </div>
        </div>`;;

    console.log(document.querySelectorAll('.seat:not(.occupied)'));
    for (const sseat of document.querySelectorAll('.seat:not(.occupied)')) {
        console.log(sseat.id);
        if (occupiedseats.includes(sseat.id)) {
            console.log(sseat.id);
            sseat.classList.add("occupied");
        }
        if (selectedseats.includes(sseat.id)) {
            console.log(sseat.id);
            sseat.classList.add("selected");
        }
    }
    console.log(occupiedseats);
    seatsremaining = document.querySelectorAll('.seat').length - occupiedseats.length;
}

var numberofselectedseats = 0;
var seatsremaining;
var seatElements;
const seatcontainer = document.querySelector(".seatcontainer");
const displayseats = document.querySelectorAll(".inputtextseat");
const seatselectbutton = document.querySelector("#seatselectbutton");
const cancelseatbutton = document.querySelector("#cancelseatbutton");
const seatrsvedit = document.querySelector('#seatsrsvedit')

for (const displayseat of displayseats) {
    displayseat.addEventListener("click", (e) => {
        e.preventDefault();
        active = false;
        if (reserveinput.classList.contains("active")) {
            active = true;
        }
        var labseat = parseInt(document.getElementById("labchosen").value);
        console.log(labseat);
        if (active) {
            SeatLayout(labseat);
        } else {
            SeatLayout(parseInt(document.getElementById('labchosenedit').value))
        }
        seatElements = document.querySelectorAll('.seat:not(.occupied)');
        document.getElementById('seatsremaining').value = seatsremaining;
        document.getElementById('seatschosen').value = numberofselectedseats;

        editdeletereserve.classList.remove("active");
        reserveinput.classList.remove("active");
        seatcontainer.classList.add("active");

        // Assign the click handler function to each seat element
        for (let i = 0; i < seatElements.length; i++) {
            const seatElement = seatElements[i];
            seatElement.addEventListener('click', function(e) {
                e.preventDefault();
                var newseat = this.id;
                SeatSelecting.call(this, newseat, labseat);
            });
        }
    });
}

// lock in the seats to be selected
seatselectbutton.addEventListener('click', (e) => {
    e.preventDefault();
    if (active) {
        document.getElementById('seatsrsv').value = numberofselectedseats;
        reserveinput.classList.add("active");
    } else {
        document.getElementById('seatsrsvedit').value = numberofselectedseats;
        editdeletereserve.classList.add("active");
    }
    seatcontainer.classList.remove("active");
});


function SeatSelecting(newseat) {
    if (!occupiedseats.some(seatsArray => seatsArray.includes(newseat))) {
        if (selectedseats.includes(newseat)) {
            foundseat = selectedseats.indexOf(newseat);
            selectedseats.splice(foundseat, 1);
            console.log("spliced");
            this.classList.remove("selected");
            numberofselectedseats -= 1;
            seatsremaining += 1;
        } else {
            selectedseats.push(newseat);
            this.classList.add("selected");
            numberofselectedseats += 1;
            seatsremaining -= 1;
        }
        document.getElementById('seatschosen').value = numberofselectedseats;
        document.getElementById('seatsremaining').value = seatsremaining;
    }
}

function lockInSelectedSeats() {
    selectedseats = [];
    numberofselectedseats = 0;
}

function resetSeats() {
    for (const seatElement of seatElements) {
        if (selectedseats.includes(seatElement.id)) {
            seatElement.classList.remove("selected");
        }
    }
    seatsremaining += numberofselectedseats;
    selectedseats = [];
    numberofselectedseats = 0;
    document.getElementById('seatsremaining').value = seatsremaining;
    document.getElementById('seatschosen').value = numberofselectedseats;
}

