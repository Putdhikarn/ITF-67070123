
let phone_list = []

document.getElementById("displayusername").innerHTML = "Putdhikarn Krainara 67070123's Notebook";

function set_usrname(){
    let x = document.getElementById("usrname").value;
    document.getElementById("displayusername").innerHTML = x + "'s Notebook";
}

function set_avatarimg(){
    let i = document.getElementById("pfpurl").value;
    document.getElementById("pfp").src = i;
}

function add_phone(){
    let name = document.getElementById("nametext").value;
    let tel = document.getElementById("teltext").value;
    phone_list.push([name, tel]);
    document.getElementById("nametext").value = "";
    document.getElementById("teltext").value = "";
    display_phone_list();
}

function display_phone_list(){
    let table = document.getElementById("phonetable");
    while (table.firstChild){
        table.removeChild(table.lastChild)
    }
    let headd = document.createElement("th");
    headd.innerHTML = "No."
    table.appendChild(headd)
    let headdn = document.createElement("th");
    headdn.innerHTML = "Name"
    table.appendChild(headdn)
    let headdt = document.createElement("th");
    headdt.innerHTML = "Tel"
    table.appendChild(headdt)
    for (i = 0; i < phone_list.length; i++){
        let trow = document.createElement("tr");
        trow.setAttribute("class", "plrow");
        table.appendChild(trow);
        let no = document.createElement("td");
        no.innerHTML = i + 1;
        let namea = document.createElement("td")
        namea.innerHTML = phone_list[i][0];
        let tel = document.createElement("td")
        tel.innerHTML = phone_list[i][1];
        trow.appendChild(no)
        trow.appendChild(namea)
        trow.appendChild(tel)
    }
}

function doExportCSV(){
    headers = ["No.", "Name", "Tel"];
    rows = [];
    rows.push(headers.join(","))
    for (i = 0; i < phone_list.length; i++){
        data = [i, phone_list[i][0], phone_list[i][1]]
        rows.push(data.join(","))
    }
    done = rows.join("\n")
    console.log(done);
    let blob = new Blob([done], {type : "text/csv"});
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "export.csv";
    a.hidden = true;
    a.click();
}

display_phone_list()