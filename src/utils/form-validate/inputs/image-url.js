/**
 * @param {HTMLInputElement} input
 */
export function isValidUrlImage (input) {
  try {
    const url = new URL(input.value)

    if (url) return true;
  } catch (error) {
    if (error.message.includes('Invalid URL')) {
      input.setCustomValidity('Ingrese una url válida');
    }
    return false;
  }
}