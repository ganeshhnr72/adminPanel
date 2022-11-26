$(document).ready(() => {
  var url =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
  $.get(url, (value) => {
    var tableData = document.getElementById("table-data");
    let table = $("<table>");
    let tbody = $("<tbody>");
    for (let i = 0; i < value.length; i++) {
      let tr = $("<tr>").attr("class", "data-row");
      tr.attr("id", i);
      let td1 = $("<td>").attr("class", "column1").html(value[i].id);
      let td2 = $("<td>").attr("class", "column2").html(value[i].firstName);
      let td3 = $("<td>").attr("class", "column3").html(value[i].lastName);
      let td4 = $("<td>").attr("class", "column4").html(value[i].email);
      let td5 = $("<td>").attr("class", "column5").html(value[i].phone);
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.append(td5);
      tbody.append(tr);
    }
    table.append(tbody);
    table.attr("id", "myTable");
    tableData.append(table[0]);
    console.log(table[0]);

    let tdCount = document.getElementsByTagName("tr");
    for (let k = 0; k < tdCount.length; k++) {
      tdCount[k].onclick = function () {
        var x = document.getElementsByClassName("active");
        if (x.length != 0) {
          x[0].className = "";
        }
        this.className = "active";
        $("#info-content").css({ display: "block" });
        $("#userSelected").html(value[k - 1].firstName);
        document.getElementById("description").innerHTML =
          value[k - 1].description;
        document.getElementById("address").innerHTML =
          value[k - 1].address.streetAddress;
        document.getElementById("city").innerHTML = value[k - 1].address.city;
        document.getElementById("state").innerHTML = value[k - 1].address.state;
        document.getElementById("zip").innerHTML = value[k - 1].address.zip;
      };
    }
  });

  $("#search-box").keyup(() => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      let td1 = tr[i].getElementsByTagName("td")[1];
      let td2 = tr[i].getElementsByTagName("td")[2];
      let td3 = tr[i].getElementsByTagName("td")[3];
      let td4 = tr[i].getElementsByTagName("td")[4];

      // console.log(td);
      if (true) {
        txtValue = td.textContent || td.innerText;
        let txtValue1 = td1.textContent || td1.innerText;
        let txtValue2 = td2.textContent || td2.innerText;
        let txtValue3 = td3.textContent || td3.innerText;
        let txtValue4 = td4.textContent || td4.innerText;
        if (
          txtValue.toUpperCase().indexOf(filter) > -1 ||
          txtValue1.toUpperCase().indexOf(filter) > -1 ||
          txtValue2.toUpperCase().indexOf(filter) > -1 ||
          txtValue3.toUpperCase().indexOf(filter) > -1 ||
          txtValue4.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });
});
