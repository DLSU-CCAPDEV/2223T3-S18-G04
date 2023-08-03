var active;
var occupiedseats = [];
var selectedseats = [];
var numberofselectedseats = 0;
var seatsremaining;

// FETCH SEATS OF SPECIFIC LAB AND DATETIME FROM DATABASE
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

// DISPLAY SEATS
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
        </div>`;

    for (const sseat of document.querySelectorAll('.seat:not(.occupied)')) {
        if (!active) {
            occupiedseats = occupiedseats.filter((element) => !selectedseats.includes(element));
        }
        if (occupiedseats.includes(sseat.id)) {
            sseat.classList.add("occupied");
        }
        if (selectedseats.includes(sseat.id)) {
            sseat.classList.add("selected");
        }
    }
    seatsremaining = document.getElementsByClassName("seat").length - (occupiedseats.length + selectedseats.length);
}

// ------------------------------------- DISPLAY SEATS WHEN SEAT INPUT IS CLICKED -------------------------------------

const seatcontainer = document.querySelector(".seatcontainer");
const displayseats = document.querySelectorAll(".inputtextseat");
for (const displayseat of displayseats) {
    displayseat.addEventListener("click", (e) => {
        e.preventDefault();
        active = false;
        if (reserveinput.classList.contains("active")) {
            active = true;
        }
        SeatLayout();
        const seatElements = document.querySelectorAll('.seat:not(.occupied)');
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

// ------------------------------------- CHANGE SEAT STATUS IF SELECTED OR DESELECTED -------------------------------------

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

// ------------------------------------- CHANGE OCCUPIED SEATS BASED ON LAB AND DATETIME -------------------------------------

const datechange = document.querySelector("#datersv");
const timechange = document.querySelector("#timersv");
const dateeditchange = document.querySelector("#datersvedit");
const timeeditchange = document.querySelector("#timersvedit");

datechange.addEventListener("change", (e) => {
    e.preventDefault();
    seatschangedate(reserveinput.classList.contains("active"));
});

timechange.addEventListener("change", (e) => {
    e.preventDefault();
    seatschangedate(reserveinput.classList.contains("active"));
});

dateeditchange.addEventListener("change", (e) => {
    e.preventDefault();
    seatschangedate(reserveinput.classList.contains("active"));
});

timeeditchange.addEventListener("change", (e) => {
    e.preventDefault();
    seatschangedate(reserveinput.classList.contains("active"));
});

function seatschangedate(active) {
    resetSeats();
    var getchangedate;
    if (active) {
        getchangedate = document.getElementById('datersv').value + "T" + document.getElementById('timersv').value;
        if (!isDatePast(new Date(getCurrentDateTime()), new Date(getchangedate))) {
            document.getElementById('errormessageadd').textContent = '';
        }
    } else {
        getchangedate = document.getElementById('datersvedit').value + "T" + document.getElementById('timersvedit').value;
        if (!isDatePast(new Date(getCurrentDateTime()), new Date(getchangedate))) {
            document.getElementById('errormessageedit').textContent = '';
        }
    }
    var labchosen = parseInt(document.getElementById("labchosen").value);
    fetchseats(labchosen, getchangedate);
    Validattioncheck(isDatePast(new Date(getCurrentDateTime()), new Date(getchangedate)), "date_error");
}

// ------------------------------------- ADDITIONAL FUNCTIONS -------------------------------------

// RETURN TO EITHER ADD RESERVE OR EDIT RESERVE TAB WHEN SELECT BUTTON IS CLICKED
const seatselectbutton = document.querySelector("#seatselectbutton");
seatselectbutton.addEventListener('click', (e) => {
    e.preventDefault();
    seatcontainer.classList.remove("active");
    if (active) {
        document.getElementById('seatsrsv').value = numberofselectedseats;
        reserveinput.classList.add("active");
    } else {
        document.getElementById('seatsrsvedit').value = numberofselectedseats;
        editdeletereserve.classList.add("active");
    }
    Validattioncheck(selectedseats.length === 0, "seat_error");
});

// RESET SEATS
function resetSeats() {
    selectedseats = [];
    occupiedseats = [];
    seatsremaining += numberofselectedseats;
    numberofselectedseats = 0;
    document.getElementById('seatsremaining').value = seatsremaining;
    document.getElementById('seatschosen').value = numberofselectedseats;
    document.getElementById('seatsrsv').value= '';
    document.getElementById('seatsrsvedit').value= '';
}
