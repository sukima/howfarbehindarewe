import { modifier } from "ember-modifier";

export function validationMessage(element, [message], { on = 'input', validator = () => true }) {
  if (!message) { return; }
  const handler = () => {
    element.setCustomValidity('');
    let isValid = element.checkValidity() && validator(element.value);
    element.setCustomValidity(isValid ? '' : message);
  };
  element.addEventListener(on, handler);
  return () => element.removeEventListener(on, handler);
}

export default modifier(validationMessage);
