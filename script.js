let count = 3; // Initialize count to keep track of row numbers

function insert_Row() {
    let table = document.querySelector("#sampleTable"); // Use querySelector for single element

    // Add a new row with `insertAdjacentHTML`
    table.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>New Cell1</td>
            <td>New Cell2</td>
        </tr>
    `);

    count++; // Increment count for the next row
}

