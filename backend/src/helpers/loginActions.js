import jwt from 'jsonwebtoken'

function generatePassword() {

  const key = (Math.random() + 1).toString(36).substring(2).substring(0, 10);
  const newPassword = key.replace('n', '@').replace('w', '!').replace('i', '#').replace('t', '$').replace('a', '*').replace('r', '%')

  return newPassword;

}

function generatedToken(id_user, name_user, email_user, type_user) {
  const myKey = "EssaéaChaveDeCriptogr@fi@!"

  const token = jwt.sign(
    { id_user, name_user, email_user, type_user },
    myKey,
    { expiresIn: 60 * 2 }
  );
  return token;
}

export { generatePassword, generatedToken }