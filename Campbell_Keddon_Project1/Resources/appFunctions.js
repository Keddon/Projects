var favoriteFruits = ["1. Apples", "2. Bananas", "3. Plums", "4. Oranges", "5. Grapes"];

var fruitCounter = 0;


var nextFruit = function(){
		if (fruitCounter === 4){
		fruitCounter = 0;
		textLabelmain.text = favoriteFruits[Number(fruitCounter)];
		} else {
		fruitCounter++;
		textLabelmain.text = favoriteFruits[Number(fruitCounter)];}
};

var previousFruit = function(){
		if (fruitCounter === 0){
		fruitCounter = 4;
		textLabelmain.text = favoriteFruits[Number(fruitCounter)];
		} else {
		fruitCounter--;
		textLabelmain.text = favoriteFruits[Number(fruitCounter)];}
};

nextButton.addEventListener("click", nextFruit);



previousButton.addEventListener("click", previousFruit);
