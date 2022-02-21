const emailRE =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const errorMessages: Record<string, string> = {
  minValue: "Required at least 3 symbols",
  maxValue: "Value have been not longer then 255 symbols",
  notEmail: "Incorrect e-mail format (example: 'mail@exacmple.com')",
};

export const validateInput = (value: string): string[] => {
  const errors: string[] = [];

  if (!value || value.length < 3) {
    errors.push(errorMessages.minValue);
  }
  if (value.length > 255) {
    errors.push(errorMessages.maxValue);
  }
  if (!value.match(emailRE)) {
    errors.push(errorMessages.notEmail);
  }

  return errors;
};
