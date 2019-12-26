let men = ["socrates"];

const whoIsHe = name => {
  name = name.toString();
  if (name === "socrates" && men.includes(name)) {
    return true;
  } else {
    return false;
  }
};

console.log(whoIsHe("socrates"));
