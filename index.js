const modal = document.getElementById("product-modal");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price")
const modalDescription = document.querySelector(".modal-description");
const closeModal = document.querySelector(".close-modal");
const continueShopping = document.querySelector(".continue-shopping");
console.log(modalPrice)

document.querySelectorAll(".add-to-bag").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;
        const price = button.dataset.price;
        console.log(price)
        console.log(product)
        if (product === "cherry") {
            modalImage.src = "./images/item1.png";
            modalTitle.textContent = "Cherry Blossom Hand Lotion";
            modalDescription.textContent = "Nurture and comfort skin from top to toe with The Ritual of Sakura Body Cream.";
            modalPrice.textContent=`$ ${price}`
        } else if (product === "himalaya") {
            modalImage.src = "./images/item2.png";
            modalTitle.textContent = "Himalaya Honey Body Cream";
            modalDescription.textContent = "Harmonious honey, mind & soul with this luxurious body cream from The Ritual of Ayurveda.";
            modalPrice.textContent=`$ ${price}`

        } else if (product === "rice") {
            modalImage.src = "./images/item3.png";
            modalTitle.textContent = "Organic Rice Milk Body Cream";
            modalDescription.textContent = "Indulge your senses with the calming fragrance of organic rice milk.";
            modalPrice.textContent=`$ ${price}`

        }else if (product === "ayurveda") {
            modalImage.src = "./images/gift_set1.png";
            modalTitle.textContent = "Organic Rice Milk Body Cream";
            modalDescription.textContent = "Indulge your senses with the calming fragrance of organic rice milk.";
            modalPrice.textContent=`$ ${price}`

        }else if (product === "sakura") {
            modalImage.src = "./images/gift_set2.png";
            modalTitle.textContent = "Organic Rice Milk Body Cream";
            modalDescription.textContent = "Indulge your senses with the calming fragrance of organic rice milk.";
             modalPrice.textContent=`$ ${price}`
        }else if (product === "karmar") {
            modalImage.src = "./images/gift_set3.png";
            modalTitle.textContent = "Organic Rice Milk Body Cream";
            modalDescription.textContent = "Indulge your senses with the calming fragrance of organic rice milk.";
        }
        modal.style.display = "flex";
    });
});

[closeModal, continueShopping].forEach(el =>
    el.addEventListener("click", () => {
        modal.style.display = "none";
    })
);
