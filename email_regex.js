const email = "r@gmail.com";

const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

if (reg.test(email)) {
  console.log("Valid Email");
} else {
  console.log("Invalid Email");
}