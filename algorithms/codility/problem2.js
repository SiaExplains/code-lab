var table = `<table><tbody>
<tr style="background-color: red">
    <td>Donna</td>
    <td>2016-10-01</td>
    <td></td>
</tr>
<tr style="background-color: red">
    <td>Nansen</td>
    <td>2016-11-05</td>
    <td>2016-11-14</td>
</tr>
<tr style="background-color: red">
    <td>Peppe</td>
    <td>2016-11-05</td>
    <td>2016-11-14</td>
</tr>
<tr>
    <td>J'Sira</td>
    <td>2012-02-28</td>
    <td>2012-03-14</td>
</tr>
<tr>
    <td>Billie</td>
    <td>2015-08-14</td>
    <td>2015-10-09</td>
</tr>
<tr>
    <td>Peyton</td>
    <td>2015-08-14</td>
    <td>2015-10-09</td>
</tr>
</tbody></table>`;

function solution(today, limit) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log('----------------------------');
    //let table = document.getElementsByTagName('table')[0];
    for (var i = 0, row; (row = table.rows[i]); i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        for (var j = 0, col; (col = row.cells[j]); j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            console.log(tables);
        }
    }
    console.log(table.innerHTML);
}

solution();
