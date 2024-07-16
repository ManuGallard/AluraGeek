/**
 * @param {HTMLInputElement} input
 */
export function isValidPrice (input) {
  if (input.validity.valueMissing) {
    input.setCustomValidity('El campo no puede estar vacío');
    return false
  }
  return true;
}