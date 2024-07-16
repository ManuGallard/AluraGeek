/**
 * @param {HTMLInputElement} input
 */
export function isValidName (input) {
  if (input.validity.valueMissing) {
    input.setCustomValidity('El campo no puede estar vacío')
    return false;
  }
  if (input.value.length < 5) {
    input.setCustomValidity('El nombre es demaciado corto')
    return false;
  }
  return true;
}