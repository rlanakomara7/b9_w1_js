//with built in method

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    let emailLower = users.map(function (user) {
      return user.email.toLowerCase();
    });

    console.log(emailLower);
  })
  .catch(function (error) {
    console.log(error);
  });

//lowecasemanual

function lowerCaseManual(text) {
  let hasil = "";

  for (let i = 0; i < text.length; i++) {
    let kode = text.charCodeAt(i);

    if (kode >= 65 && kode <= 90) {
      hasil += String.fromCharCode(kode + 32);
    } else {
      hasil += text[i];
    }
  }

  return hasil;
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    let emails = users.map(function (user) {
      return lowerCaseManual(user.email);
    });

    console.log(emails);
  })
  .catch(function (error) {
    console.log(error);
  });
