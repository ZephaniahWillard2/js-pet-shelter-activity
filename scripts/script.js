document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    let shelterPets = [];

  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPet(name, type, age){
      let pet = {
        name: name,
        type: type,
        age: age,
      }
      shelterPets.push(pet);
      console.log(shelterPets);
    }

  
    // Function to display pets in the shelter - given to you!
    function displayPets() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(i = 0; i < shelterPets.length; i++){
        let pet = shelterPets[i];
        let petItem = document.createElement("li")
        petItem.textContent = `${pet.name}: ${pet.type} (${pet.age})`;
  
        petList.appendChild(petItem); //will assist with adding each pet item to be shown in the list on the browser
     }
    }
    // Add some sample pets to the shelter
    addPet("Fido", "Dog", 3); //example
    addPet("Gorg", "Dog", 77);
    addPet("Denis", "Dog", 33);
    addPet("Fish", "Dog", 44);
    addPet("Archibald Mancato Saint Benjamin jr", "Dog", 0.1);



    
    // Display the pets in the shelter
    displayPets();
  

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    
    // !!!!!CODE!!!!! function animalNum (){
    //   let homeless = "";
    //   if (shelterPets.length > 1){
    //      homeless = "Animals need home";
         
    //   }
    //   else {
    //     homeless = "No pets need home";
    //   }
    //   document.getElementById("Petsneedhome").innerHTML = homeless;

    // };

    // animalNum();

    // below function is what i originally did, changed to above function cuz i thought we needed to display animals need a home


    function numTest (){
      if (shelterPets.length > 1) {
          console.log("Animals need home")
      }
      else{
        console.log("Animals don't need home")
      }
    };
    numTest();
  
    // Check if the pet shelter has animals that need homes by calling the previous function

  
    // Function to calculate the average age of pets in the shelter
    function aveAge (shelterPets){
      let total = 0;
      for(i = 0; i < shelterPets.length; i++){ 
         total += shelterPets[i].age;
    }
    let avg = total / shelterPets.length;
    console.log(avg);


  }

   
  
    // Calculate the average age of pets in the shelter by calling the previous function
    aveAge(shelterPets);


  });
  