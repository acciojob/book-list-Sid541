//your JS code here. If required.
let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let addBook = document.getElementById("submit");
let tbody=document.getElementById("book-list");


function addRow(){
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    data1.textContent = title.value;
    let data2 = document.createElement("td");
    data2.textContent = author.value;
    let data3 = document.createElement("td");
    data3.textContent = isbn.value;
    let cut = document.createElement("td");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "&times;";
    delBtn.classList.add("delete-btn");
    cut.appendChild(delBtn)
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(cut);
    tbody.appendChild(row);
    delBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        deleteRow();
       })
}

function deleteRow(){
    if(tbody.lastElementChild){
        tbody.lastElementChild.remove();
    }
}


addBook.addEventListener("click",function(e){
    e.preventDefault();
    console.log(title.value);
    console.log(author.value);
    console.log(isbn.value);
    addRow();

})






