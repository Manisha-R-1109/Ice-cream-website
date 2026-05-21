fetch("http://13.232.46.251:8000/products")
  .then(response => response.json())
  .then(data => {
      console.log(data);

      data.forEach(item => {
          console.log(item.name);
      });
  })
  .catch(error => {
      console.log(error);
  });
