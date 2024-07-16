import { Products } from '../services/products.js';
const $ = document;
const productsContainer = $.querySelector('[data-product-container]');

const ProductCard = ({name, image, price, id}) => {
  const template =  /*html*/`
    <img class="product-card__image" src="${image}" alt="${name}">
    <div class="product-card__info">
      <h3 class="product-card__info--title">${name}</h3>
      <div class="product-card__info--actions">
        <span class="product-price">$ ${price}</span>
        <button class="product-delete-btn" data-delete-button>
          <img src="./src/assets/icons/delete-trash-icon.svg" alt="icono de eliminar producto">
        </button>
      </div>
    </div>
  `

  const card = $.createElement('article');
  card.classList.add('section__products--card');
  card.innerHTML = template;

  const deleteButton = card.querySelector('[data-delete-button]')
  deleteButton.onclick = () => deleteProduct(id);

  return card;
}

export default async function renderProducts () {
  const [error, products] = await Products.getAll();

  if (error) return console.log(error);

  const productsElements = products.map(product => ProductCard(product))

  productsContainer.append(...productsElements);
}

async function deleteProduct (id) {
  const [error, deletedProduct] = await Products.delete(id);

  console.log({error, deletedProduct});
}