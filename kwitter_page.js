const firebaseConfig = {
    apiKey: "AIzaSyBxU2pcXDb8C5y_itQ27k6dxzkzGYFls60",
    authDomain: "yayya-59856.firebaseapp.com",
    projectId: "yayya-59856",
    storageBucket: "yayya-59856.appspot.com",
    messagingSenderId: "922597736759",
    appId: "1:922597736759:web:afcca9c9eda3ef8eed1ab2"
  };
  function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data[ 'name' ];
    message = message_data[ 'message' ];
    like = message_data[ 'like' ];
    name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
}

});}); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firbase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}
 function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location.replace("index.html");
 }
function send() {
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}