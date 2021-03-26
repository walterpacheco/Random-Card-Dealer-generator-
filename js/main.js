const orderNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  
  const orderSuits = ["\u2660", "\u2663", "\u2665", "\u2666"];
  
  const unorderedCard = document.querySelector("#unorderedCard");
  const article = document.querySelector("#sortCards");
  
  const inputCard = document.querySelector("#inputForCards");
  
  const draw = document.querySelector("#draw");
  const sortBubble = document.querySelector("#bubbleSort");
  const sortSelect = document.querySelector("#selectSort");
  
  window.onload = function() {
    clickDraw();
    clickBubbleSort();
    clickSelectSort();
  };
  
  // SORTS ALGORITHMS
  
  const bubbleSort = arr => {
    let wall = arr.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        cardSort(arr);
        if (
          orderNumbers.indexOf(arr[index].number) >
          orderNumbers.indexOf(arr[index + 1].number)
        ) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--;
    }
    return arr;
  };
  
  const selectSort = arr => {
    let min = 0;
    while (min < arr.length - 1) {
      for (let index = min + 1; index < arr.length; index++) {
        cardSort(arr);
        if (
          orderNumbers.indexOf(arr[min].number) >
          orderNumbers.indexOf(arr[index].number)
        ) {
          let aux = arr[min];
          arr[min] = arr[index];
          arr[index] = aux;
        }
      }
      min++;
    }
    return arr;
  };
  
  // FROM HERE 4 FUNCTIONS TO GENERATE THE CARDS
  
  const generateNumbers = () => {
    let randomNumber = Math.floor(Math.random() * orderNumbers.length);
    let cardNumber = orderNumbers[randomNumber];
    return cardNumber;
  };
  
  const generateSuits = () => {
    let randomSuit = Math.floor(Math.random() * orderSuits.length);
    let cardSuit = orderSuits[randomSuit];
    return cardSuit;
  };
  
  const generateCard = () => {
    let theEntireCard = {
      number: generateNumbers(),
      suit: generateSuits()
    };
    return theEntireCard;
  };
  
  const cardsGenerator = n => {
    let cardObject = [];
    for (let i = 0; i < n; i++) {
      cardObject.push(generateCard());
    }
    return cardObject;
  };
  
  // FROM HERE WE CREATE 3 FUNCTIONS FOR EACH BUTTON
  
  var arrayCards = []; // WE USE THIS EMPTY ARRAY FOR THE 3 DIFFERENT BUTTON AND THEN THE ARRAY DOSENT CHANGE
  
  const clickDraw = () => {
    draw.addEventListener("click", event => {
      event.preventDefault();
      unorderedCard.textContent = "";
      article.textContent = "";
      arrayCards = Array.from(cardsGenerator(inputCard.value));
      newCard(arrayCards);
    });
  };
  
  const clickBubbleSort = () => {
    sortBubble.addEventListener("click", event => {
      event.preventDefault();
      article.textContent = "";
      cardSort(bubbleSort(arrayCards));
    });
  };
  
  const clickSelectSort = () => {
    sortSelect.addEventListener("click", event => {
      event.preventDefault();
      article.textContent = "";
      cardSort(selectSort(arrayCards));
    });
  };
  
  // FROM HERE 2 DIFFERENT FUNCTION TO DRAW THE CARDS. UNORDERED CARDS AND ORDER CARDS
  
  const newCard = arr => {
    for (let i = 0; i < arr.length; i++) {
      let unorderedCard = document.querySelector("#unorderedCard");
      let newCard = document.createElement("div");
      newCard.classList.add("col-lg-1", "card");
      unorderedCard.appendChild(newCard);
  
      if (arr[i].suit == "\u2665" || arr[i].suit == "\u2666") {
        newCard.classList.add("text-danger");
      }
      let cardTop = document.createElement("div");
      cardTop.classList.add("card-title");
      newCard.appendChild(cardTop);
  
      let suitTop = document.createElement("p");
      suitTop.classList.add("ml-0", "mt-1", "suit");
      cardTop.appendChild(suitTop);
      let textTop = document.createTextNode(arr[i].suit);
      suitTop.appendChild(textTop);
  
      let cardNumber = document.createElement("div");
      newCard.appendChild(cardNumber);
      cardNumber.classList.add(
        "card-body",
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "cardHeight",
        "mb-1"
      );
      let number = document.createElement("p");
      number.classList.add("number");
      cardNumber.appendChild(number);
      let textNumber = document.createTextNode(arr[i].number);
      number.appendChild(textNumber);
  
      let cardBottom = document.createElement("div");
      cardBottom.classList.add(
        "card-title",
        "align-items-end",
        "suit",
        "bottomSuit"
      );
  
      newCard.appendChild(cardBottom);
      let suitBottom = document.createElement("p");
      suitBottom.classList.add(
        "ml-0",
        "d-flex",
        "justify-content-end",
        "mb-0",
        "flip"
      );
      cardBottom.appendChild(suitBottom);
      let textBottom = document.createTextNode(arr[i].suit);
      suitBottom.appendChild(textBottom);
    }
    return arr;
  };
  
  const cardSort = arr => {
    let ulList = document.createElement("ul");
    ulList.classList.add("row", "justify-content-center", "mr-3");
    for (let i = 0; i < arr.length; i++) {
      let list = document.createElement("li");
      let newCard = document.createElement("div");
      newCard.classList.add("card");
      article.appendChild(ulList);
      ulList.appendChild(list);
      list.appendChild(newCard);
  
      if (arr[i].suit == "\u2665" || arr[i].suit == "\u2666") {
        newCard.classList.add("text-danger");
      }
  
      let cardTop = document.createElement("div");
      cardTop.classList.add("card-title");
      newCard.appendChild(cardTop);
      let suitTop = document.createElement("p");
      suitTop.classList.add("ml-3", "mt-1", "suit");
      cardTop.appendChild(suitTop);
      let textTop = document.createTextNode(arr[i].suit);
      suitTop.appendChild(textTop);
  
      let cardNumber = document.createElement("div");
      newCard.appendChild(cardNumber);
      cardNumber.classList.add(
        "card-body",
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "cardHeight",
        "mb-1"
      );
      let number = document.createElement("p");
      number.classList.add("number");
      cardNumber.appendChild(number);
      let textNumber = document.createTextNode(arr[i].number);
      number.appendChild(textNumber);
  
      let cardBottom = document.createElement("div");
      cardBottom.classList.add(
        "card-title",
        "align-items-end",
        "suit",
        "bottomSuit"
      );
      newCard.appendChild(cardBottom);
      let suitBottom = document.createElement("p");
      suitBottom.classList.add(
        "mr-3",
        "d-flex",
        "justify-content-end",
        "mb-0",
        "flip"
      );
      cardBottom.appendChild(suitBottom);
      let textBottom = document.createTextNode(arr[i].suit);
      suitBottom.appendChild(textBottom);
    }
    return arr;
  };