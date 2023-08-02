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

function labUpdate(labNum) {
    debugger;
    const labTable = document.getElementById(`lab-${labNum}`).lastChild;

    for (var i = 0; i < 27; i++) {
        var labRow = labTable.rows[i];

        for (var j = 0; j < 8; j++) {
            var labCell = labRow.cells[j];
            labCell.innerHTML = "";

            if (j == 0) {
                labCell.style.textAlign = 'center';
                labCell.style.fontWeight = 'bold';
                labCell.append(document.createTextNode(reservationIntervals[i]));
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

                            if (dateTime == user.reserveDateTime && labNum == user.labnum && seatChecker(k + 1, user.seatnum)) {
                                debugger;
                                slotsTaken += 1;

                                if (user.isAnonymous == false) {
                                    var studentLink = document.createElement('LI');
                                    studentLink.innerHTML = "<a href= '/user_profile?email=" + user.email + "'> " + user.username + " </a>";
                                    

                                    if (studentList == null)
                                        studentList = document.createElement('UL');

                                    studentList.appendChild(studentLink);
                                }
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

                labCell.append(viewSlotsButton);
                slotList.style.display = 'none';
                labCell.append(slotList);

                if (studentList != null) {
                    var studentHeading = document.createElement('p');
                    studentHeading.innerHTML = "<b> Students Reserved </b>";
                    labCell.append(studentHeading);
                    labCell.append(studentList);
                }

                labCell.append(slotsTakenString);
            }
        }
    }
}

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
    debugger;
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

                            if (dateTime == user.reserveDateTime && labNum == user.labnum && seatChecker(k + 1, user.seatnum)) {
                                debugger;
                                slotsTaken += 1;

                                if (user.isAnonymous == false) {
                                    var studentLink = document.createElement('LI');
                                    studentLink.innerHTML = "<a href= '/user_profile?email=" + user.email + "'> " + user.username + " </a>";
                                    

                                    if (studentList == null)
                                        studentList = document.createElement('UL');

                                    studentList.appendChild(studentLink);
                                }
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

// ------------------------------------- CREATING LABS -------------------------------------

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

    debugger;

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
    });

    window.setInterval(function () {
        debugger;
        for (var i = 1; i <= 3; i++) {
            debugger;
            labUpdate(i);

            $(".view-slots-button").on("click", function() {
                var slotList = $(this).parent().children('.slot-list');
                slotList.toggle();
                $(this).html(slotList.css('display') === 'none' ? "View Slots" : "Hide Slots");
            });
        }
    }, 120000);
});

// ------------------------------------- OPENING A RESERVATION -------------------------------------

const reservecont = document.querySelector(".reserve_container");
var reserveClickHandler = (index) => {
    return () => {
        AdminCheck().then(isAdmin => {isAdmin === true ? getemails() : null; console.log(isAdmin);});
        console.log("Button clicked. Index:", index);
        document.getElementById('labchosen').value= index+1;
        reservecont.classList.add("show");
        reserveinput.classList.add("active");
        listreserve.classList.remove("active");
        editdeletereserve.classList.remove("active");

        document.getElementById('datersv').value = getCurrentDateTime().toString().split('T')[0];
        document.getElementById('datersv').min = getCurrentDateTime().toString().split('T')[0];
        document.getElementById('datersvedit').min = getCurrentDateTime().toString().split('T')[0];

        var defaultdatetime = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
        fetchseats(index+1, defaultdatetime);
        fetchlabs();
    };
};

// BUTTONS ON LABS FOR OPENING A RESERVATION
labsavailable.forEach(function(item, index) {
    var button = document.getElementById(item.btnId);
    button.addEventListener("click", reserveClickHandler(index));
});

// ------------------------------------- ADD RESERVATION -------------------------------------

document.getElementById("buttonrsv").onclick = function() {
    // GET VALUES
    var reservername = document.getElementById("namersv").value;
    var labnum = parseInt(document.getElementById("labchosen").value);
    var datetime = document.getElementById("datersv").value + "T" + document.getElementById("timersv").value;

    // DEFAULT IF NAME IS ANONYMOUS
    var Anonymous = false;
    if (reservername.length==0) {
        var num = availablereservations.length + 1;
        reservername = "reserver" + num;
        Anonymous = true;
    }

    // GET STUDENT EMAIL IF ADMIN
    AdminCheck().then(isAdmin => {
        if (isAdmin) {
            email = document.getElementById("labtechemail").value;
            createNewReservation(email);
            console.log("ADMIN ADDED EMAIL: " + email);
        } else {
            createNewReservation(null);
        }
    });

    // ADD NEW RESERVATION
    function createNewReservation(email) {
        var newreserve = {
            email: email,
            username: reservername,
            lab: labnum,
            seatnum: selectedseats,
            requestDateTime: getCurrentDateTime(),
            reserveDateTime: datetime,
            isAnonymous: Anonymous,
            markasDone: false
        };
        console.log("ADMIN ADDED NEWRESERVE: " + newreserve.email);

        // POST TO ROUTES.js --> RESERVATIONCONTROLLER.js
        fetch('/slot_availability/add_reserve', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(newreserve),
        })
        .then(result => {
            console.log(result);
            fetchlabs();
        })
        .catch(error => {console.error('Error:', error);});

        resetSeats();
        reservecont.classList.remove("show");
        resetinput();
    }
}

// ------------------------------------- EDIT RESERVATION -------------------------------------

var availablereservations = [];

// FETCH EXISTING RESERVATIONS FROM DATABASE
function fetchlabs() {
    fetch('/slot_availability/get_reservations')
        .then(response => response.json())
        .then(dataArray => {
            availablereservations = dataArray;
            showExistingReservations(availablereservations);
        })
        .catch(error => {console.error('Error:', error);});
}

// DISPLAY EXISTING RESERVATION
function showExistingReservations(availablereservations) {
    if (availablereservations.length === 0) {
        document.getElementById('rootlab').innerHTML = "Reservation list is empty";
    } else {
        document.getElementById('rootlab').innerHTML = availablereservations.map((reserveinfo) => {
            var { _id, email, username, labnum, seatnum, reserveDateTime} = reserveinfo;
            return (
                `<a class="tablelist" href="javascript:editmyreservation('${_id}')">
                    <div class="editablelab" id="labrsv${_id}">
                        <table>
                            <tr colspan="2">
                                <p>Email: <span id="email${email}">${email}</span></p>
                            </tr>
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
        }).join('');
    }
}

// EDITING SPECIFIC RESERVATION
function editmyreservation(objectId) {
    // find index of JSON array
    var reserverindex = availablereservations.findIndex(function(item, j){
        return item._id === objectId;
    });

    // display editing reservation tab
    var [date, time] = availablereservations[reserverindex].reserveDateTime.split('T');
    document.getElementById('labchosenedit').value= availablereservations[reserverindex].labnum;
    document.getElementById('namersvedit').value= availablereservations[reserverindex].username;
    document.getElementById('datersvedit').value= date;
    document.getElementById('timersvedit').value= time;
    document.getElementById('seatsrsvedit').value= availablereservations[reserverindex].seatnum.length;

    selectedseats = availablereservations[reserverindex].seatnum;
    numberofselectedseats = selectedseats.length;

    fetchseats(availablereservations[reserverindex].labnum, availablereservations[reserverindex].reserveDateTime);
    displayedreservation();

    // UPDATE RESERVATION
    document.getElementById("editrsv").onclick = function() {
        // GET VALUES
        var reservername = document.getElementById('namersvedit').value;
        var labchosen = parseInt(availablereservations[reserverindex].labnum);
        var reserveDateTime = document.getElementById('datersvedit').value + "T" + document.getElementById('timersvedit').value;

        // DEFAULT IF NAME IS ANONYMOUS
        var Anonymous = false;
        if (reservername.length==0) {
            reservername = availablereservations[reserverindex].username;
            Anonymous = true;
        }

        updatereserve = {
            _id: objectId,
            username: reservername,
            lab: labchosen,
            seatnum: selectedseats,
            requestDateTime: getCurrentDateTime(),
            reserveDateTime: reserveDateTime,
            isAnonymous: Anonymous,
            markasDone: false
        };

        fetch('/slot_availability/edit_reserve', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(updatereserve),
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            fetchlabs();
            resetSeats();
            gobacktolistreserve();
        })
        .catch(error => {console.error('Error:', error);});
    }

    // DELETE CURRENT RESERVATION
    document.getElementById("deletersv").onclick = function() {
        fetch(`/slot_availability/${objectId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            fetchlabs();
            resetSeats();
            gobacktolistreserve();
        })
        .catch(error => {console.error('Error:', error);});
    }

    // CANCEL EDITING
    document.getElementById("cancelbutton").onclick = function() {
        resetSeats();
        fetchlabs();
        gobacktolistreserve();
        document.getElementById('seatsrsvedit').value = '';
    }
}

// ------------------------------------- ADDITIONAL FUNCTIONS -------------------------------------

const listreserve = document.querySelector(".listreserve");
const reserveinput = document.querySelector(".reserveinput");
const editdeletereserve = document.querySelector(".editdeletereserve");

// SWITCH FROM ADDING RESERVATION TO EDITING RESERVATION
const showlistreserve = document.querySelector("#showlistrsv");
showlistreserve.addEventListener("click", (e) => {
    e.preventDefault();
    fetchlabs();
    listreserve.classList.add("active");
    reserveinput.classList.remove("active");
});

// SWITCH FROM EDITING RESERVATION TO ADDING RESERVATION
const addreserve = document.querySelector("#addrsv");
addreserve.addEventListener("click", (e) => {
    e.preventDefault();
    var labchosen = parseInt(document.getElementById("labchosen").value);
    var getchangedate = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
    fetchseats(labchosen, getchangedate);
    listreserve.classList.remove("active");
    reserveinput.classList.add("active");
});

// SWITCH FROM EDITING INDIVIDUAL LAB TO DISPLAYING LAB LIST
function displayedreservation() {
    listreserve.classList.remove("active");
    editdeletereserve.classList.add("active");
}

// SWITCH FROM DISPLAYING LAB LIST TO EDITING INDIVIDUAL LAB
function gobacktolistreserve() {
    listreserve.classList.add("active");
    editdeletereserve.classList.remove("active");
}

// CLOSE RESERVATIONS TAB
const closereserve = document.querySelector(".close");
closereserve.addEventListener("click", (e) => {
    e.preventDefault();
    resetSeats();
    resetinput();
    reservecont.classList.remove("show");
    seatcontainer.classList.remove("active");
});

// GET CURRENT TIME
function getCurrentDateTime() {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear()).padStart(4, '0');
    const month = String(currentDate.getMonth()+1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// RESET INPUT VALUES
function resetinput() {
    document.getElementById("namersv").value = "";
    document.getElementById("datersv").value = "";
    document.getElementById("seatsrsv").value = "";
    document.getElementById("timersv").selectedIndex = 0;
}
