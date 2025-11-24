let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let addBook = document.getElementById("submit");
let tbody = document.getElementById("book-list");

function addRow() {
  let row = document.createElement("tr");

  let data1 = document.createElement("td");
  data1.textContent = title.value;

  let data2 = document.createElement("td");
  data2.textContent = author.value;

  let data3 = document.createElement("td");
  data3.textContent = isbn.value;

  let cut = document.createElement("td");

  // Create delete button (new for every row)
  let delBtn = document.createElement("button");
  delBtn.innerHTML = "&times;";
  delBtn.classList.add("delete-btn");

  // Delete only this row
  delBtn.addEventListener("click", () => {
    row.remove();
  });

  cut.appendChild(delBtn);

  row.appendChild(data1);
  row.appendChild(data2);
  row.appendChild(data3);
  row.appendChild(cut);

  tbody.appendChild(row);
}

addBook.addEventListener("click", function (e) {
  e.preventDefault();

  // Add row
  addRow();

  // Clear inputs
  title.value = "";
  author.value = "";
  isbn.value = "";
});
