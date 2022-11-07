var ownerName =  document.querySelector("#owner");
var carName = document.querySelector("#car");
var licenceNo = document.querySelector("#licence");
var startDate = document.querySelector("#startDate");
var endDate = document.querySelector("#endDate");
var formEl = document.querySelector("form");
var table = document.querySelector("table");

formEl.addEventListener("submit" , (e)=>{
    var owner = ownerName.value ;
    var car = carName.value ;
    var licence = licenceNo.value;
    var start = startDate.value;
    var end = endDate.value;
    var trFormat =  settingInputs(owner , car , licence , start , end );
    table.appendChild(trFormat);
    e.preventDefault();
});

function settingInputs(name,car,lincence,start,end){
    var inputs = [name , car , lincence , start , end ,icon=""];
    var classes = ["name" , "car" , "lincence" , "start" ,"end" , "icon"];
    var trEl = document.createElement("tr");

    for(let i = 0 ; i < inputs.length ; i++){
        let text = document.createTextNode(inputs[i]);
        let tdEl = document.createElement("td");
        tdEl.appendChild(text);
        trEl.appendChild(tdEl);
        if(i==inputs.length-1){
            let inputEl = document.createElement("input");
            inputEl.setAttribute("type","button");
            inputEl.setAttribute("value", "X");
            inputEl.setAttribute("onclick", "remove(this)")
            tdEl.appendChild(inputEl);
        }
    }
    return trEl;
}

function remove(r){
    var i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}
