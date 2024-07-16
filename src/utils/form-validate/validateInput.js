import { isValidCategory, isValidName, isValidPrice, isValidUrlImage} from "./inputs/index.js";

/**
 * @param {HTMLInputElement} input
 */
export function validateInput (input) {
  let message = '';
  input.setCustomValidity('');

  if (input.name === 'name') isValidName(input);
  if (input.name === 'price') isValidPrice(input);
  if (input.name === 'image') isValidUrlImage(input);
  if (input.name === 'category') isValidCategory(input);

  const errorMessageElement = input.parentNode.querySelector('.input__error--message')

  const isChecked = input.checkValidity();

  if (!isChecked) {
    message = input.validationMessage;
    input.classList.add('error');
    errorMessageElement.textContent = input.validationMessage;
  } else {
    input.classList.remove('error');
    errorMessageElement.textContent = '';
  }
}