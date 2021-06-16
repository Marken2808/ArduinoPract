function getassetnumber(){

    var assetnumber = document.getElementById('assetnumber').value;

    console.log(assetnumber.value);

    var settings = {
        "url": "http://localhost:3000/getdata/"+assetnumber,
        "method": "GET",
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}