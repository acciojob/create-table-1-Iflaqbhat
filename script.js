function insert_Row() {
    let table = document.querySelector("#sampleTable"); // Select the table

    // Create a new row and cells
    let newRow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    // Set the text content of each cell
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";

    // Append cells to the row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Insert the new row at the top of the table
    table.insertBefore(newRow, table.firstChild);
}
