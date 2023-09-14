console.log("Hello there");

function greet() {
  let username = prompt("What should I call you?");
  document.write("Hello " + username);
}

function askTime() {
  let time = prompt("What hour is it? (0-23)");
  let message;

  if (time <= 11) {
    message = "Good morning";
  } else if (time <= 17) {
    message = "Good afternoon";
  } else if (time < 24) {
    message = "Good evening";
  } else {
    message = "That's not a time!!!";
  }

  document.write(message);
}