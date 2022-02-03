const firebaseConfig = {
    apiKey: "AIzaSyBxU2pcXDb8C5y_itQ27k6dxzkzGYFls60",
    authDomain: "yayya-59856.firebaseapp.com",
    projectId: "yayya-59856",
    storageBucket: "yayya-59856.appspot.com",
    messagingSenderId: "922597736759",
    appId: "1:922597736759:web:afcca9c9eda3ef8eed1ab2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name;
  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
 