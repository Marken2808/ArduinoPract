
let data;

function getassetnumber(){

    var assetnumber = document.getElementById('assetnumber').value;

    console.log(assetnumber.value);

    var settings = {
        "url": "http://localhost:3000/getdata/"+assetnumber,
        "method": "GET",
      };
      
      $.ajax(settings).done(function (response) {

        data = response;

        if(data.length != []){
          let newtab = "";
          let serialno = 1;

          

          for(let i=(data.length)-1; i>=0; i--) {

            console.log(i);

            newtab = newtab + ` <tr>
            <td> ` + serialno + ` </td>
            <td> ` + data[i].assetnumber + ` </td>
            <td> ` + data[i].latitude + ` </td>
            <td> ` + data[i].longitude + ` </td>
            <td> ` + data[i].updatedate + ` </td>
            <td> <button type="button" class="btn btn-primary" id="`+i+`" onclick="updatelocation(this.id)">Track Me</button></td>
            </tr> `;
            serialno++;
          }
          
          $('table').find('tbody').html("");
          $('table').find('tbody').append(newtab);

          // console.log(data);
        }
        else {
          console.log("No data found");
        }

      });
}