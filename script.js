let count = 3; // Start with 3 since you have 2 rows initially

function insert_Row() {
    let table = document.querySelector("#sampleTable");

    table.innerHTML += `
        <tr>
            <td>Row${count} cell1</td>
            <td>Row${count} cell2</td>
        </tr>
    `;

    count++; // Increment count for the next row
}

