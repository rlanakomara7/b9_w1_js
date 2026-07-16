let account = {
  id: 1,
  username: "rama",
  password: "12345",
};

let newPassword = "abcdef";

if (newPassword.length >= 5) {
  let accountBaru = {
    ...account,
    password: newPassword,
  };

  console.log(accountBaru);
} else {
  console.log("Password minimal 5 karakter");
}
