const menuItems = [
  {
    emoji: "🍪",
    title: "Salsiccia",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    emoji: "🍕",
    title: "Margherita",
    description: "Tomato sauce, Mozarella, Basil, Olive oil",
  },
  {
    emoji: "🍝",
    title: "Pasta",
    description: "Fresh pasta with marinara sauce, parmesan, and basil",
  },
  {
    emoji: "🍪",
    title: "Salsicci",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    emoji: "🍪",
    title: "Salsiccia",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    emoji: "🍪",
    title: "Salsiccia",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
];

export function menuPage() {
  const menuDiv = document.createElement("div");

  menuDiv.className = "menuPage";
  menuDiv.id = "newDivId";

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const emoji = document.createElement("p");
    emoji.textContent = item.emoji;
    emoji.className = "emoji";
    card.appendChild(emoji);

    const title = document.createElement("h2");
    title.textContent = item.title;
    title.className = "header";
    card.appendChild(title);

    const description = document.createElement("h3");
    description.textContent = item.description;

    description.className = "paraMenu";
    card.appendChild(description);

    menuDiv.appendChild(card);
  });

  return menuDiv;
}
