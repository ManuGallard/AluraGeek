/**
 * @param {HTMLInputElement} input
 */
export function isValidCategory (input) {
  if (categories.includes(input.value)) return true;

  input.setCustomValidity('Debes selecionar una categoría');
  return false;
}

const categories = [
  'starwars',
  'consolas'
]