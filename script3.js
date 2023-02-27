const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+{}[]|\\:;"<>,.?/';

function generatePassword() {
  const passwordLength = parseInt(document.getElementById('password-length').value);
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumeric = document.getElementById('numeric').checked;
  const includeSpecial = document.getElementById('special').checked;

  // Check that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('Please select at least one character type.');
    return;
  }

  // Generate password
  let password = '';
  let allowedChars = '';
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumeric) {
    allowedChars += numericChars;
  }
  if (includeSpecial) {
    allowedChars += specialChars;
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  // Display password
  document.getElementById('password-display').innerText = password;
}

document.getElementById('generate-password').addEventListener('click', generatePassword);
