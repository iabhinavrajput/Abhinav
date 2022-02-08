
function sendmail(){
 
  var name = $('#Name').val();
  var email = $('#Sender').val();
  var phonenumber = $('#PhoneNumber').val();
  var subject = $('#Subject').val();
  var message = $('#Message').val();



  // var body = $('#body').val();

  var Body='<b>Name (📍) :-</b> '+name+'<br><b>Email (📧) :-</b> '+email+'<br><b>PhoneNumber (☎️) :-</b> '+phonenumber+'<br><b>Subject (🔖) :-</b> '+subject+'<br><br><b>Message (📝) :-</b> '+message;
  //console.log(name, phone, email, message);

  Email.send({
    Host : "smtp.gmail.com",
    Username : "ethicalhackernasa@gmail.com", 
    Password : "ufwxzrcktgqlmbnq",
    To: 'ethicalhackernasa@gmail.com',	//must be less secure
    From: "ethicalhackernasa@gmail.com",
    Subject: "New message on contact from "+name,
    Body: Body
  }).then(
    message =>{
      //console.log (message);
      if(message=='OK'){
        setInterval(()=>{
          location.reload();
        },1000)
        alert('Your mail has been send. Thank you for connecting.');
      }
    }
  );
}