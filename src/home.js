export function createNewDiv() {
  const newDiv = document.createElement("div");

  newDiv.className = "homePage";
  newDiv.id = "newDivId";
  const paraHomeOne = document.createElement("p");
  paraHomeOne.textContent = "Best pizza in your country";
  newDiv.appendChild(paraHomeOne);

  const paraHomeTwo = document.createElement("p");
  paraHomeTwo.textContent = "Made with passion since 1908";
  newDiv.appendChild(paraHomeTwo);

  const chef = document.createElement("div");
  chef.className = "chef";
  newDiv.appendChild(chef);

  const img = document.createElement("img");
  img.className = "cheImg";
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZwf9Ma6VjxFjDsyfVPUwhElpcOd-MpQ_Sw&s";

  chef.appendChild(img);
  newDiv.appendChild(chef);
  const paraHomeThree = document.createElement("p");
  paraHomeThree.textContent = "Order online or visit us!";
  newDiv.appendChild(paraHomeThree);

  return newDiv;
}
