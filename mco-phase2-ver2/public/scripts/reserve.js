// Lab Timeslot Calendar

var reservations = [
    {
        "username" : "Blaise Corbin",
        "link" : "user_profile2.html",
        "lab" : 1,
        "seat": 25,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : true
    },
    {
        "username" : "Blaise Corbin",
        "link" : "user_profile2.html",
        "lab" : 2,
        "seat": 14,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : true
    },
    {
        "username" : "Blaise Corbin",
        "link" : "user_profile2.html",
        "lab" : 3,
        "seat": 16,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : true
    },
    {
        "username" : "Blaise Corbin",
        "link" : "user_profile2.html",
        "lab" : 3,
        "seat": 16,
        "datetime" : "2023-07-02T13:00",
        "isAnonymous" : true
    },
    {
        "username" : "Blaise Corbin",
        "link" : "user_profile2.html",
        "lab" : 3,
        "seat": 16,
        "datetime" : "2023-07-02T13:30",
        "isAnonymous" : true
    },
    {
        "username" : "Antonio Veloso",
        "link" : "user_profile3.html",
        "lab" : 1,
        "seat": 26,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Antonio Veloso",
        "link" : "user_profile3.html",
        "lab" : 2,
        "seat": 15,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Antonio Veloso",
        "link" : "user_profile3.html",
        "lab" : 3,
        "seat": 17,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Antonio Veloso",
        "link" : "user_profile3.html",
        "lab" : 3,
        "seat": 17,
        "datetime" : "2023-07-02T13:00",
        "isAnonymous" : false
    },
    {
        "username" : "Antonio Veloso",
        "link" : "user_profile3.html",
        "lab" : 3,
        "seat": 17,
        "datetime" : "2023-07-02T13:30",
        "isAnonymous" : false
    },
    {
        "username" : "Bien Magdamo",
        "link" : "user_profile4.html",
        "lab" : 1,
        "seat": 27,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Bien Magdamo",
        "link" : "user_profile4.html",
        "lab" : 2,
        "seat": 16,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Bien Magdamo",
        "link" : "user_profile4.html",
        "lab" : 3,
        "seat": 18,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Bien Magdamo",
        "link" : "user_profile4.html",
        "lab" : 3,
        "seat": 18,
        "datetime" : "2023-07-02T13:00",
        "isAnonymous" : false
    },
    {
        "username" : "Bien Magdamo",
        "link" : "user_profile4.html",
        "lab" : 3,
        "seat": 18,
        "datetime" : "2023-07-02T13:30",
        "isAnonymous" : false
    },
    {
        "username" : "Sandeon Gavan",
        "link" : "user_profile5.html",
        "lab" : 1,
        "seat": 28,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Sandeon Gavan",
        "link" : "user_profile5.html",
        "lab" : 2,
        "seat": 17,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Sandeon Gavan",
        "link" : "user_profile5.html",
        "lab" : 3,
        "seat": 19,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Sandeon Gavan",
        "link" : "user_profile5.html",
        "lab" : 3,
        "seat": 19,
        "datetime" : "2023-07-02T13:00",
        "isAnonymous" : false
    },
    {
        "username" : "Sandeon Gavan",
        "link" : "user_profile5.html",
        "lab" : 3,
        "seat": 19,
        "datetime" : "2023-07-02T13:30",
        "isAnonymous" : false
    },
    {
        "username" : "Karl Asares",
        "link" : "user_profile6.html",
        "lab" : 1,
        "seat": 29,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Karl Asares",
        "link" : "user_profile5.html",
        "lab" : 2,
        "seat": 18,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Karl Asares",
        "link" : "user_profile6.html",
        "lab" : 3,
        "seat": 20,
        "datetime" : "2023-07-02T12:30",
        "isAnonymous" : false
    },
    {
        "username" : "Karl Asares",
        "link" : "user_profile6.html",
        "lab" : 3,
        "seat": 20,
        "datetime" : "2023-07-02T13:00",
        "isAnonymous" : false
    },
    {
        "username" : "Karl Asares",
        "link" : "user_profile6.html",
        "lab" : 3,
        "seat": 20,
        "datetime" : "2023-07-02T13:30",
        "isAnonymous" : false
    },
]

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

                        if (dateTime == user.datetime && labNum == user.lab && k + 1 == user.seat && user.isAnonymous == false) {
                            var studentLink = document.createElement('LI');
                            studentLink.innerHTML = "<a href='" + user.link + "'> " + user.username + " </a>";
                            slotsTaken += 1;

                            if (studentList == null)
                                studentList = document.createElement('UL');

                            studentList.appendChild(studentLink);
                        } else if (iterations === 0) {
                            iterations = 1;
                            slotList.innerHTML = slotList.innerHTML.concat(k + 1);

                            if (k < 39)
                                slotList.innerHTML = slotList.innerHTML.concat(", ");
                        }
                    }
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

    // Create calendars for each lab
    for (var i = 1; i <= 3; i++) {
        const labTable = document.getElementById(`lab-${i}`).appendChild(createCalendar(i));
        $(labTable).addClass('calendar-table');
        labTable.style.display = "none";
    }

    // Click event for lab buttons (using event delegation)
    $('.lab-button').click(function() {
        var lab = this.id.split('-')[2];
        var calendar = $(`#lab-${lab} > .calendar-table`)[0];
        toggleCalendar(calendar, this);
    });

    // Click event for view slots buttons
    $(".view-slots-button").click(function() {
        var slotList = $(this).parent().children('.slot-list');
        slotList.toggle();
        $(this).html(slotList.css('display') === 'none' ? "View Slots" : "Hide Slots");
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
        displaylabs(labs);
    };
};

// Assign the event listener to each button dynamically
labsavailable.forEach(function(item, index) {
    var button = document.getElementById(item.btnId);
    button.addEventListener("click", reserveClickHandler(index));
});

// Display the reservations
function displaylabs() {
    //get all reserves and add to labs

    fetch('/slot_availability/get_reservations')
        .then(res => res.json())
        .then(labs => labs)
        .catch(err => console.log(err));
    console.log(labs);

    if (labs.length === 0) {
        document.getElementById('rootlab').innerHTML = "Reservation list is empty";
    } else {
        document.getElementById('rootlab').innerHTML = labs.map((reserveinfo) => {
            var { reservenumber, lab, username, seat, reservedate, isAnonymous} = reserveinfo;
            return (
                `<a class="tablelist" href="javascript:editmyreservation(${reservenumber})">
                    <div class="editablelab" id="labrsv${reservenumber}">
                        <table>
                            <tr colspan="2">
                                <p>Lab: <span id="labnum${lab}">${lab}</span></p>
                            </tr>
                            <tr>
                                <td>
                                    <p> Name: <span id="rsvname${reservenumber}">${username}</span></p>
                                    <p> Slots: <span id="seatnum${reservenumber}">${seat}</span> </p>
                                </td>
                                <td>
                                    <p> Date: <span id="rsvdate${reservenumber}">${reservedate}</span> </p>
                                    <p> Anonymous: <span id="isanon${reservenumber}">${isAnonymous}</p></span> </span></p>
                                </td>
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

function displayedreservation() {
    listreserve.classList.remove("active");
    editdeletereserve.classList.add("active");
}

function gobacktolistreserve() {
    listreserve.classList.add("active");
    editdeletereserve.classList.remove("active");
}

showlistreserve.addEventListener("click", (e) => {
    e.preventDefault();
    listreserve.classList.add("active");
    reserveinput.classList.remove("active");
});

addreserve.addEventListener("click", (e) => {
    e.preventDefault();
    displaylabs();
    numberofselectedseats = 0;
    listreserve.classList.remove("active");
    reserveinput.classList.add("active");
});

// CLOSE RESERVATIONS
closereserve.addEventListener("click", (e) => {
    e.preventDefault();
    reservecont.classList.remove("show");
    seatcontainer.classList.remove("active");
    setTimeout(() => {
        resetinput();
        resetSeats();
    }, 1000);
});

// ADD RESERVATION
var newreserve = {};
var reservecount;
fetch('/slot_availability/get_size')
        .then(res => res.json())
        .then(reservecount => parseInt(reservecount))
        .catch(err => console.log(err));
var reservername, seatassignn;
var num = 0;

function getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based (0 - 11), so add 1 to get the correct month.
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    // You can format the date and time as needed
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Or you can return the Date object itself if you need to work with it further
    return formattedDateTime;
  }

document.getElementById("buttonrsv").onclick = function() {
    reservecont.classList.remove("show");
    // Default value for name
    reservername = document.getElementById("namersv").value;
    var Anonymous = false;
    if (reservername.length==0) {
        num = reservecount + 1;
        reservername = "reserver" + num;
        Anonymous = true;
    }

    // Default value for seats reserved
    var labnum = document.getElementById("labchosen").value;
    var reserveddatee = document.getElementById("datersv").value;
    var time = document.getElementById("timersv").value;

    // Add new reservation
    newreserve = {
        reservenumber: reservecount += 1,
        username: reservername,
        lab: labnum,
        seat: selectedseats,
        requestdatetime: getCurrentDateTime(),
        reservedate: reserveddatee,
        time: time,
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
    setTimeout(() => {
        resetinput();
    }, 1000);
}

function resetinput() {
    document.getElementById("namersv").value = "";
    document.getElementById("datersv").value = "";
    document.getElementById("seatsrsv").value = "";
    document.getElementById("timersv").selectedIndex = 0;
}

//EDIT RESERVATION
function editmyreservation(rsvnumber) {
    // find index of JSON array
    var reserverindex = labs.findIndex(function(item){
        return item.reservenumber === lab
        });

    // display editing reservation tab
        document.getElementById('labchosenedit').value= labs[reserverindex].lab;
        document.getElementById('namersvedit').value= labs[reserverindex].username;
        document.getElementById('seatsrsv').value= labs[reserverindex].seat;
        document.getElementById('datersvedit').value= labs[reserverindex].reservedate;
        document.getElementById('timersvedit').value= labs[reserverindex].time;
        displayedreservation();

    // Update reservation information
    document.getElementById("editrsv").onclick = function() {
        if (document.getElementById('namersvedit').value !== '') {
            nameedit = document.getElementById('namersvedit').value;
            Anonymous = false;
        }
        updatereserve = {
            reservenumber: rsvnumber,
            username: reservername,
            lab: labs[reserverindex].lab,
            seat: selectedseats,
            requestdatetime: getCurrentDateTime(),
            reservedate: document.getElementById('datersvedit').value,
            time: document.getElementById('timersvedit').value,
            isAnonymous: Anonymous
        };

        fetch('/slot_availability/edit_reserve', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(updatereserve),
            }).catch(error => {console.error('Error:', error);});

        if (selectedseats.length !== 0) {
            if (selectedseats.length !== 0) {
                occupiedseats[labseat][reserverindex] = selectedseats;
            }
            selectedseats = [];
            numberofselectedseats = 0;
        }
        displaylabs(labs);
        gobacktolistreserve();
    }

    document.getElementById("deletersv").onclick = function() {
        fetch('/slot_availability/delete_reservation', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(rsvnumber)
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

function SeatLayout(labseat) {
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
        </div>`;

    var array = [].concat(...occupiedseats[labseat]);
    for (const sseat of document.querySelectorAll('.seat:not(.occupied)')) {
        if (array.includes(sseat.id)) {
            console.log(sseat.id);
            sseat.classList.add("occupied");
        }
        if (selectedseats.includes(sseat.id)) {
            console.log(sseat.id);
            sseat.classList.add("selected");
        }
    }
}

var occupiedseats = [];
var selectedseats = [];
for(var lab of labsavailable) {
    occupiedseats.push([])
}
var numberofselectedseats = 0
var seatsremaining = 40;
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
        labseat= parseInt(document.getElementById("labchosen").value)-1;
        if (active) {
            SeatLayout(labseat);
        } else {
            SeatLayout(parseInt(document.getElementById('labchosenedit').value)-1)
        }
        seatElements = document.querySelectorAll('.seat:not(.occupied)');
        numberofselectedseats = document.querySelectorAll('.seat.selected').length;
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
                SeatSelecting.call(this, newseat);
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
    if (!occupiedseats[labseat].some(seatsArray => seatsArray.includes(newseat))) {
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
    if (selectedseats.length !== 0) {
        occupiedseats[labseat].push(selectedseats);
    }
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
