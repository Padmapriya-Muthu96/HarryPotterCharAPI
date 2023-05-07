var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","col-sm-4");

container.append(row);

 
  async function hpchars() {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await response.json();
      console.log(data);
   
    
    for (i=0; i<data.length-300; i++){

        row.innerHTML+=`
        <div class="col-sm-4">
        <div class="card border-primary mb-3 >
        
        <div class="card-body">
        <img src="${data[i].image}" class="card-img-top" width="200px" height="200">
    <h2 class="name"> ${data[i].name}</h2>
    <p class="actor">Actor: ${data[i].actor}</p>
    <p class="species">species: ${data[i].species}</p>
    <p class="gender">Gender: ${data[i].gender}</p>
    <p class="house">house: ${data[i].house}</p>
    
    </div>
    
    
  </div>
</div>

`;
document.body.append(container);

        
    }
   
    } catch (error) {
      console.log(error);
    }
  }
  
  hpchars();
