const timeAdder = (value1, label1, value2, label2) => {
  let results = [];
  let count = 0;
  if (
    Number.isInteger(value1) &&
    value1 === 1 &&
    (label1 === "second" ||
      label1 === "minute" ||
      label1 === "hour" ||
      label1 === "day")
  ) {
    count += value1;
  } else if (
    Number.isInteger(value1) &&
    value1 > 1 &&
    (label1 === "seconds" ||
      label1 === "minutes" ||
      label1 === "hours" ||
      label1 === "days")
  ) {
    count += value1;
  } else {
    return false;
  }

  if (
    Number.isInteger(value2) &&
    value2 === 1 &&
    (label2 === "second" ||
      label2 === "minute" ||
      label2 === "hour" ||
      label2 === "day")
  ) {
    count += value2;
  } else if (
    Number.isInteger(value2) &&
    value2 > 1 &&
    (label2 === "seconds" ||
      label2 === "minutes" ||
      label2 === "hours" ||
      label2 === "days")
  ) {
    count += value2;
  } else {
    return false;
  }

  results.push(count, "minutes");

  return results;
};

//console.log(timeAdder(8, "days", 2, "hours"));

const timeAdder2 = (value1, label1, value2, label2) => {
  let results = [];
  let count = 0;
  switch ((value1, value2)) {
    case value1 === 1 &&
      (label1 === "second" ||
        label1 === "minute" ||
        label1 === "hour" ||
        label1 === "day"):
      count += value1;

    case value1 > 1 &&
      (label1 === "seconds" ||
        label1 === "minutes" ||
        label1 === "hours" ||
        label1 === "days"):
      count += value1;

    case value2 === 1 &&
      (label2 === "second" ||
        label2 === "minute" ||
        label2 === "hour" ||
        label2 === "day"):
      count += value2;

    case value2 > 1 &&
      (label2 === "seconds" ||
        label2 === "minutes" ||
        label2 === "hours" ||
        label2 === "days"):
      count += value2;
    default:
      return false;
  }
  results.push(count);
  return results;
};

console.log(timeAdder2(8, "days", 2, "hours"));
