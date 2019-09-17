function popualteUserTable(users){
    var html = ""
    for(var i = 0; i< users.length; i++){
      html+=`
          <tr>
            <td>${users[i].id}</td>
            <td>${users[i].title}</td>
            <td><button onclick="fetchTodos(${users[i].id})">Load Image</button></td>
          </tr>`
    }
    document.getElementById('userTableBody').innerHTML = html
  }

  function fetchUser(){
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1&fbclid=IwAR1YjL7mjfd5qdzhj3WF6DLUUNupEmxWQ_pd4hVcygO8QtenexrCiTzjSNM`)
      .then(function(res){
          console.log(res, "response")
          return res.json()
      }).then(function(users){
          console.log(users, "users")
          popualteUserTable(users)
      }).catch(err => console.log(err, "error"))
  }

  function popualteImages(todos){
    var html = ""
    for(var i = 0; i< todos.length; i++){
      html+=`
      <div class="gallery">
      <a href="${todos[i].url}" data-lightbox="mygallery" >
          <img src="${todos[i].url}" ></a> </div>`
    }
    document.getElementById('imageBody').innerHTML = html
  }
const ul = document.getElementById("imageList");
  function fetchTodos(Id){
      alert(Id)
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1&fbclid=IwAR1YjL7mjfd5qdzhj3WF6DLUUNupEmxWQ_pd4hVcygO8QtenexrCiTzjSNM=${Id}`)
      .then(function(res){
          console.log(res, "response")
          return res.json()
      }).then(function(todos){
          console.log(todos, "todos")
          popualteImages(todos)
      }).catch(err => console.log(err, "error"))
  }

  window.onload = function(){
    // popualteUserTable()
    document.getElementById('loadUsersButton').addEventListener('click' , function(){
      // popualteUserTable()
      fetchUser()
      // fetchTodos()
    })
  }