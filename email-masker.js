

function maskEmail(email){
  const [local, domain] = email.split("@");

  if (local.length <= 2) {
    // Not enough characters to mask — just return as is
    return email;
  }

  const firstChar = local[0];
  const lastChar = local[local.length - 1];
  const masked = firstChar + "*".repeat(local.length - 2) + lastChar;

  return `${masked}@${domain}`;
}
let email="ugwuokechinonso78@gmail.com"
console.log(maskEmail(email))



