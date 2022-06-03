let carts = document.querySelectorAll(".add-cart");

let products = [
	{
		name: "Chilaquiles",
		tag: "chilaquiles",
		price: 120,
		incart: 0,
	},
	{
		name: "Enchiladas",
		tag: "enchiladas",
		price: 120,
		incart: 0,
	},
	{
		name: "Guacamole",
		tag: "guacamole",
		price: 80,
		incart: 0,
	},
	{
		name: "Huarache",
		tag: "huarache",
		price: 90,
		incart: 0,
	},
	{
		name: "Pambazo",
		tag: "pambazo",
		price: 90,
		incart: 0,
	},
	{
		name: "Pollo con mole",
		tag: "polloconmole",
		price: 130,
		incart: 0,
	},
	{
		name: "Pozole",
		tag: "pozole",
		price: 120,
		incart: 0,
	},
	{
		name: "Quesadillas",
		tag: "quesadillas",
		price: 20,
		incart: 0,
	},
	{
		name: "Tacos",
		tag: "tacos",
		price: 12,
		incart: 0,
	},
	{
		name: "Tamales",
		tag: "tamales",
		price: 20,
		incart: 0,
	},
];

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	});
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem("cartNumbers");
	if (productNumbers) {
		document.querySelector(".cart span").textContent = productNumbers;
	}
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem("cartNumbers");
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector(".cart span").textContent = productNumbers + 1;
	} else {
		localStorage.setItem("cartNumbers", 1);
		document.querySelector(".cart span").textContent = 1;
	}

	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems !== null) {
		if (cartItems[product.tag] === undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product,
			};
		}
		cartItems[product.tag].incart += 1;
	} else {
		product.incart = 1;
		cartItems = {
			[product.tag]: product,
		};
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
	let cartCost = localStorage.getItem("totalCost");

	if (cartCost !== null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

onLoadCartNumbers();
