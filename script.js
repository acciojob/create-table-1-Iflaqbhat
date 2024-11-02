function insert_Row() {
    let table = document.querySelector("#sampleTable"); // Select the table

    // Insert a new row with specific cell text at the top
    table.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>New Cell1</td>
            <td>New Cell2</td>
        </tr>
    `);
}

