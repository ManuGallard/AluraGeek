import { Products } from "../services/products.js";
import { validateInput } from "../utils/form-validate/validateInput.js";

const $ = document;

const form = $.querySelector('[data-form]');
const inputsList = form.querySelectorAll('input,select');

inputsList.forEach(input => {
  input.addEventListener('input', () => validateInput(input));
  input.addEventListener('invalid', (e) => e.preventDefault());
});

export default function createProduct () {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const product = Object.fromEntries(formData);

    const [error, data] = await Products.create(product);

    if (error) {
      console.error(error);
    }
  });
}
