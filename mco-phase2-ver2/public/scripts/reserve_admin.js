// ------------------------------------- CHECK IF CURRENT USER IS ADMIN -------------------------------------
function AdminCheck() {
    return fetch ('/slot_availability/checkadmin', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {return data;})
        .catch(error => {console.error('Error:', error); throw error;});
}

// ------------------------------------- GET ALL STUDENT EMAILS -------------------------------------
var studentemails = [];
function getemails() {
    fetch('/slot_availability/get_emails', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(dataArray => {
        studentemails = [].concat(...dataArray.map(item => item.email));;
        fetchstudentemails(studentemails);
    })
    .catch(error => {console.error('Error:', error);});
}

function fetchstudentemails(studentemails) {
    var emailcontent;
    for (const email of studentemails) {
        emailcontent += `<option value="${email}"> ${email} </option>`;
    }

    document.querySelectorAll("#labtechemailroot, #labtechemaileditroot").forEach(element => {
        if (element.id === "labtechemailroot") {
            element.innerHTML = `
                <div class="textbox">
                    <select class="inputtext" name="labtechemail" id="labtechemail" size="1" placeholder="" required>
                        ${emailcontent}
                    </select>
                    <i class="uil uil-envelope"></i>
                </div>`;
        } else if (element.id === "labtechemaileditroot") {
            element.innerHTML = `
                <div class="textbox">
                    <select class="inputtext" name="labtechemailedit" id="labtechemailedit" size="1" placeholder="" required disabled>
                        ${emailcontent}
                    </select>
                    <i class="uil uil-envelope"></i>
                </div>`;
        }
    });
}
