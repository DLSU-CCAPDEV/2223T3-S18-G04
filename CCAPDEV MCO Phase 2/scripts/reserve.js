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

var labsavailable = [
    {
        lab: "Lab 1",
        id: "lab-1",
        btnId: "mainrsvbtn1"
    },
    {
        lab: "Lab 2",
        id: "lab-2",
        btnId: "mainrsvbtn2"
    },
    {
        lab: "Lab 3",
        id: "lab-3",
        btnId: "mainrsvbtn3"
    },
];

var listslotslabs = [...new Set(labsavailable.map((labsinfo)=>
    {return labsinfo}))]
    let i=0;

if(labsavailable.length==0) {
    document.getElementById('roottimeslot').innerHTML = "Labs list is empty";
} else {
    document.getElementById('roottimeslot').innerHTML = listslotslabs.map((labsinfo)=>
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

function makeList() {

}

$(document).ready(function() {
for (var i = 0; i < 3; i++) {
    var lab;
    switch(i) {
        case 0:
            lab = document.getElementById("lab-1");
            break;
        case 1:
            lab = document.getElementById("lab-2");
            break;
        case 2:
            lab = document.getElementById("lab-3");
            break;
    }

    const labTable = lab.appendChild(createCalendar(i + 1));
    $(labTable).addClass('calendar-table');
    labTable.style.display = "none";
}

$("#lab-button-1").click(function() {
    var calendar = document.querySelector('#lab-1 > .calendar-table')
    if (document.getElementById("lab-button-1").innerText == '+')
        document.getElementById("lab-button-1").innerText = '-';
    else
        document.getElementById("lab-button-1").innerText = '+';

    if (calendar.style.display == "none")
        calendar.style.display = "table";
    else
        calendar.style.display = "none";
})

$("#lab-button-2").click(function() {
    var calendar = document.querySelector('#lab-2 > .calendar-table')
    if (document.getElementById("lab-button-2").innerText == '+')
        document.getElementById("lab-button-2").innerText = '-';
    else
        document.getElementById("lab-button-2").innerText = '+';

    if (calendar.style.display == "none")
        calendar.style.display = "table";
    else
        calendar.style.display = "none";
})

$("#lab-button-3").click(function() {
    var calendar = document.querySelector('#lab-3 > .calendar-table')
    if (document.getElementById("lab-button-3").innerText == '+')
        document.getElementById("lab-button-3").innerText = '-';
    else
        document.getElementById("lab-button-3").innerText = '+';

        if (calendar.style.display == "none")
        calendar.style.display = "table";
    else
        calendar.style.display = "none";
})

$(".view-slots-button").click(function() {
    var slotList = $(this).parent().children('.slot-list');
    if (slotList.css('display') == 'none') {
        slotList.css('display', 'block');
        $(this).html("Hide Slots");
    }

    else {
        slotList.css('display', 'none');
        $(this).html("View Slots");
    }
});
})

// Editable labs
var labs = [
    {
        reservenumber: 0,
        labnumber: 1,
        reservename: "John Doe",
        reservedseat: "2",
        reservedate: "2023-06-12",
        time: "11:30AM - 12:00PM",
    },
    {
        reservenumber: 1,
        labnumber: 3,
        reservename: "Johnybravo",
        reservedseat: "1",
        reservedate: "2023-06-18",
        time: "03:30PM - 04:00PM",
    },
    {
        reservenumber: 2,
        labnumber: 3,
        reservename: "JDoe",
        reservedseat: "4",
        reservedate: "2023-06-18",
        time: "03:30PM - 04:00PM",
    }
]

// Open reservation
var labsavailable = [
    {lab: "#mainrsvbtn1"},
    {lab: "#mainrsvbtn2"},
    {lab: "#mainrsvbtn3"},
];

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

// Getter function for the index value
var getIndex = () => {
    return currentIndex;
};

// Setter function for the index value
var setIndex = (index) => {
    currentIndex = index;
};

// Assign the event listener to each button dynamically
labsavailable.forEach(function(item, index) {
    var button = document.querySelector(item.lab);
    button.addEventListener("click", reserveClickHandler(index));
});
closereserve.addEventListener("click", () => reservecont.classList.remove("show"));


// Switch between Adding and Editing reservations
const showlistreserve = document.querySelector("#showlistrsv");
const addreserve = document.querySelector("#addrsv");
var listreserve = document.querySelector(".listreserve");
var reserveinput = document.querySelector(".reserveinput");

showlistreserve.addEventListener("click", (e) => {
    e.preventDefault();
    listreserve.classList.add("active");
    reserveinput.classList.remove("active");
});

addreserve.addEventListener("click", (e) => {
    e.preventDefault();
    listreserve.classList.remove("active");
    reserveinput.classList.add("active");
});

// Display the reservations
function displaylabs(labs) {
    var listlabs = [...new Set(labs.map((reserveinfo)=>
        {return reserveinfo}))]
        let i=0;

    if(labs.length==0) {
        document.getElementById('rootlab').innerHTML = "Reservation list is empty";
    } else {
        document.getElementById('rootlab').innerHTML = listlabs.map((reserveinfo)=>
        {
            var {reservenumber, labnumber, reservename, reservedseat, reservedate, time} = reserveinfo;
            return(
                `<a class="tablelist" href="javascript:editmyreservation(${reservenumber})">
                    <div class="editablelab" id="labrsv${reservenumber}">
                        <table>
                            <tr colspan="2">
                                <p>Lab: <span id="labnum${labnumber}">${labnumber}</span></p>
                            </tr>
                            <tr>
                                <td>

                                    <p> Name: <span id="rsvname${reservenumber}">${reservename}</span></p>
                                    <p> Slots: <span id="seatnum${reservenumber}">${reservedseat}</span> </p>
                                </td>
                                <td>
                                    <p> Date: <span id="rsvdate${reservenumber}">${reservedate}</span> </p>
                                    <p> Time: <span id="rsvtime${reservenumber}">${time}</p></span> </span></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </a>`
            )
        }).join('')
    }
}

// ADD RESERVATION

var newreserve = {};
var newreservation = {};
var reservename;
var reservecount = 0;
var reservername;
var seatassignn;
var num = 0;

reservecount += 2; // hardcoding purposes (Delete when no longer needed)

document.getElementById("buttonrsv").onclick = function() {
    reservecont.classList.remove("show");

    // Default value for name
    reservername = document.getElementById("namersv").value;
    var isAnonymous = false;
    if (reservername.length==0) {
        num++;
        reservername = "reserver" + num;
        isAnonymous = true;
    }

    // Default value for seats reserved
    seatassignn = document.getElementById("seatsrsv").value;
    if (seatassignn.length==0) {
        seatassignn = 1;
    }

    var labnumberr = document.getElementById("labchosen").value;
    var reserveddatee = document.getElementById("datersv").value;
    var time = document.getElementById("timersv").value;

    // Add new reservation
    newreserve = {
        reservenumber: reservecount += 1,
        labnumber: labnumberr,
        reservename: reservername,
        reservedseat: seatassignn,
        reservedate: reserveddatee,
        time: time,
    };
    newreservation = {
        "username": reservername,
        "link": "(insertprofile)",
        "lab": document.getElementById("labchosen").value,
        "seat": 2,
        "datetime": document.getElementById("datersv").value + "T" + document.getElementById("timersv").value,
        "isAnonymous": isAnonymous,
    };
    // Add new reservation to the JSON labs array
    labs.push(newreserve);
    reservations.push(newreservation);
    displaylabs(labs);
}

//EDIT RESERVATION

function editmyreservation(labnumber) {
    // find index of JSON array
    var index = labs.findIndex(function(item, j){
        return item.reservenumber === labnumber
        });

    // display editing reservation tab
        document.getElementById('labchosenedit').value= labs[index].labnumber;
        document.getElementById('namersvedit').value= labs[index].reservename;
        document.getElementById('seatsrsvedit').value= labs[index].reservedseat;
        document.getElementById('datersvedit').value= labs[index].reservedate;
        document.getElementById('timersvedit').value= labs[index].time;
        displayedreservation();

    // Update reservation information
    document.getElementById("editrsv").onclick = function() {
        labs[index].reservename = document.getElementById('namersvedit').value;
        labs[index].reservedseat = document.getElementById('seatsrsvedit').value;
        labs[index].reservedate = document.getElementById('datersvedit').value;
        labs[index].time = document.getElementById('timersvedit').value;
        displaylabs(labs);
        gobacktolistreserve();
    }

    document.getElementById("deletersv").onclick = function() {
        labs.splice(index, 1);
        displaylabs(labs);
        gobacktolistreserve();
    }

    document.getElementById("cancelbutton").onclick = function() {
        gobacktolistreserve();
    }
}

var editdeletereserve = document.querySelector(".editdeletereserve");

function displayedreservation() {
    listreserve.classList.remove("active");
    editdeletereserve.classList.add("active");
}

function gobacktolistreserve() {
    listreserve.classList.add("active");
    editdeletereserve.classList.remove("active");
}
