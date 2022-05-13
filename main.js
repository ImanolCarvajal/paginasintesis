
fetch("./menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("menu").innerHTML = data;
  });

fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

  fetch("./content.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("content").innerHTML = data;
    });

  fetch("./procedimiento.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("procedimiento").innerHTML = data;
    });



  fetch("./fotos.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("fotos").innerHTML = data;
    });
