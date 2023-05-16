import { KeyboardEvent } from 'react';

export const stringOnlyInput = (e: KeyboardEvent<HTMLInputElement>) => {
  const keyCode = e.which || e.keyCode;
  const isLetterOrSpace =
    (keyCode >= 65 && keyCode <= 90) || // uppercase letters
    (keyCode >= 97 && keyCode <= 122) || // lowercase letters
    keyCode === 32; // space
  const isBackspace = keyCode === 8;
  // prevent special characters and numbers
  if (!isLetterOrSpace && !isBackspace) e.preventDefault();
};
