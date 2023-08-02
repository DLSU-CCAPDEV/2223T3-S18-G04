// ------------------------------------- OPENING A RESERVATION -------------------------------------

const reservecont = document.querySelector(".reserve_container");
var reserveClickHandler = (index) => {
    return () => {
        AdminCheck().then(isAdmin => {isAdmin === true ? getemails() : null;});
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
            var email = document.getElementById("labtechemail").value;
            createNewReservation(email);
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
    AdminCheck().then(isAdmin => {
        if (isAdmin) {
            document.getElementById('labtechemailedit').value = availablereservations[reserverindex].email;
            console.log(availablereservations[reserverindex].email);
        }
    });

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

        AdminCheck().then(isAdmin => {
            if (isAdmin) {
                var email = document.getElementById("labtechemail").value;
                updateReservation(email);
            } else {
                updateReservation(null);
            }
        });

        function updateReservation(email){
            updatereserve = {
                email: email,
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

// Todo:
// validate seats
// make a notification function
// update reservations with currentdate to mark as done
// polish edit reservation with admin privileges
// set some buttons to turn mouse into cursors
