var users;

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

var labOneSlots;
var labTwoSlots;
var labThreeSlots;

function searchUsers() {
    debugger;

    var name = $("#user").val();

    $.get('/getSearchUsers', {username: name}, function (result) {
        debugger;
        users = new Array();
        for (i = 0; i < result.length; i++) {
            users.push(result[i]);
        }
        $("#output").append(showUsers());
    });
}

function showUsers() {
    debugger;
    var box = document.createElement('div');
    var heading = document.createElement('h3');

    heading.innerHTML = "Users Found:";

    $(box).addClass('box');
    box.appendChild(heading);
    box.appendChild(document.createElement('hr'));

    for (i = 0; i < users.length; i++) {
        var user = document.createElement('p');
        user.innerHTML = "<a href= '/user_profile?email=" + users[i].email + "'> " + users[i].username + " </a>";
        box.appendChild(user);
    }

    return box;
}

function getDateTime() {
    var time = times[$("#times").val()];
    var date = $("#date").val();
    var dateTime = date.concat("T", time);

    return dateTime;
}

function addToSlots(reservation) {
    debugger;
    var lab;
    
    switch(reservation.labnum){
        case 1:
            lab = labOneSlots;
            break;
        case 2:
            lab = labTwoSlots;
            break;
        case 3: 
            lab = labThreeSlots;
            break;
        default:
            lab = null;
            break;
    }

    lab.push(reservation);              
}

function slotChecker(targetSlot, slots) {
    debugger;
    var returnValue = 0;

    for (i = 0; i < slots.length; i++) {
        if (targetSlot == slots[i])
            returnValue = 1;
    }

    return returnValue;
}

function showFreeSlots(labNum, dateTime) {
    debugger;
    var box = document.createElement('div');
    var heading = document.createElement('h3');
    var text = document.createElement('p');
    var lab;
    var list = document.createElement('UL');
    $(list).addClass('seat-list');
    heading.innerHTML = "Free Slots";
    text.innerHTML = "The following seats are free: ";
    
    $(box).addClass('box');
    box.appendChild(heading);
    box.appendChild(document.createElement('hr'));
    box.appendChild(text);

    switch(parseInt(labNum)){
        case 1:
            lab = labOneSlots;
            break;
        case 2:
            lab = labTwoSlots;
            break;
        case 3: 
            lab = labThreeSlots;
            break;
    }

    for (let i = 0; i < 40; i++) {
        //console.log(i);
        if (lab.length == 0) {
            var seat = document.createElement('LI');
            seat.innerHTML = i + 1;
            list.appendChild(seat);
        }
        else {
            var slotTaken = 0;
            for (j = 0; j < lab.length; j++) {
                //console.log(i);
                if (slotChecker(i + 1, lab[j].seatnum) == 1 && lab[j].reserveDateTime == dateTime)
                    slotTaken = 1;
            }

            if (slotTaken == 0) {
                var seat = document.createElement('LI');
                seat.innerHTML = i + 1;
                list.appendChild(seat);
            }
        }
    }

    box.appendChild(list);
    
    return box;
}

$(document).ready(function() {
    debugger;

    $("#search").click(function() {
        debugger;

        if ($("#output").children() != null) {
            $("#output").empty();
        }

        if (!$("#user").val()) {
            var lab = $("#labs").val();
            var dateTime = getDateTime();

            $.get('/searchSlots', {labnum: lab, reserveDateTime: dateTime}, function (result) {
                debugger;

                labOneSlots = new Array();
                labTwoSlots = new Array();
                labThreeSlots = new Array();

                for(i = 0; i < result.length; i++) {
                    for (var j = 0; j < result[i].seatnum.length; j++){
                        if (result[i].seatnum[j].includes('seat')){
                            result[i].seatnum[j] = result[i].seatnum[j].replace('seat', "");
                        }
                    }
                    addToSlots(result[i]);
                }
                $("#output").append(showFreeSlots(lab, dateTime));
            });
        }

        else {
            searchUsers();
        }
    })
})
