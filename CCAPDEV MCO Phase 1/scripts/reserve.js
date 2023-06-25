// Editable labs
var labs = [
    {
        reservenumber: 0,
        labnumber: "1",
        reservename: "John Doe",
        reservedseat: "2",
        reservedate: "2023-06-12",
        time: "11:30AM - 12:00PM",
    },
    {
        reservenumber: 1,
        labnumber: "3",
        reservename: "Johnybravo",
        reservedseat: "1",
        reservedate: "2023-06-18",
        time: "03:30PM - 04:00PM",
    },
    {
        reservenumber: 2,
        labnumber: "3",
        reservename: "JDoe",
        reservedseat: "4",
        reservedate: "2023-06-18",
        time: "03:30PM - 04:00PM",
    }
]


// Open reservation
const reservecont = document.querySelector(".reserve_container");
const closereserve = document.querySelector(".close");
const testbtn = document.querySelector('#testbtn');

testbtn.addEventListener("click", () => {
    reservecont.classList.add("show")
    reserveinput.classList.add("active");
    listreserve.classList.remove("active");
    editdeletereserve.classList.remove("active");
    displaylabs(labs);
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
                                <p> Lab: <span id="labnum${labnumber}">${labnumber}</span></p>
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
    if (reservername.length==0) {
        num++;
        reservername = "reserver" + num;
    }

    // Default value for seats reserved
    seatassignn = document.getElementById("seatsrsv").value;
    if (seatassignn.length==0) {
        seatassignn = 1;
    }

    // Add new reservation
    newreserve = {
        reservenumber: reservecount += 1,
        labnumber: 1,
        reservename: reservername,
        seatnumber: seatassignn,
        reservedate: document.getElementById("datersv").value,
        time: document.getElementById("timersv").value,

    };

    // Add new reservation to the JSON labs array
    labs.push(newreserve)
    console.log(labs);
    displaylabs(labs);
}

//EDIT RESERVATION

function editmyreservation(labnumber) {
    // display editing reservation tab
    displayedreservation();

    // find index of JSON array
    var index = labs.findIndex(function(item, j){
        return item.reservenumber === labnumber
        });
        console.log(index);

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
