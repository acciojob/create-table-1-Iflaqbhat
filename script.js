let count = 3; // Initialize count to keep track of row numbers

function insert_Row() {
    let table = document.querySelector("#sampleTable"); // Use querySelector for single element

    // Add a new row with `insertAdjacentHTML`
    table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>Row${count} cell1</td>
            <td>Row${count} cell2</td>
        </tr>
    `);

    count++; // Increment count for the next row
}

