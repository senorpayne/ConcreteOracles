
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0LPhuOd_YM-DLXyzeu19rahDwf0nq8D8",
    authDomain: "concreteoracles.firebaseapp.com",
    databaseURL: "https://concreteoracles.firebaseio.com",
    projectId: "concreteoracles",
    storageBucket: "",
    messagingSenderId: "955595377645"
  };
  firebase.initializeApp(config);


  var messagesRef = firebase.database().ref('messages');



document.getElementById('formid').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

var name = getInputVal('name');
var email = getInputVal('email');

savedMessage(name,email);

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);
document.getElementById('formid').reset();
setTimeout(function(){
    document.getElementById('id01').style.display = 'none';
},2000);


}
function getInputVal(id){
    return document.getElementById(id).value;
}

function savedMessage(name,email){
var newSub = messagesRef.push();
newSub.set({
name:name,
email:email

})

}


       
// $(document).ready(function(){
//     $("#subscribe").click(function(){
//       var info = prompt("THANK YOU!" ,"Enter Email")
//       var userInput = [];
//      userInput.push(info);

//      database.ref().push({
//          email:userInput,
//         datetime: new Date()
//      })
     
//      console.log(userInput);
//     });
// });
   