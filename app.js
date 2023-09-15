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

//for (let counter =0; counter < 20; counter = counter + 1) {
//  console.log('My name is Sarah!')
// }

function getRating() {
  let rating = prompt('Rate my site between 1-5','5');

  for (let i = 0; i < rating; i++) {
      document.write("<img src='taco.png' class='ratingtaco'/>")
}

  }