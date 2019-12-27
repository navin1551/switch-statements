const timeAdder2 = (value1, label1, value2, label2) => {
  let results = [];
  let count = 0;
  if (!Number.isInteger(value1)) {
    return false;
  }

  if (!Number.isInteger(value2)) {
    return false;
  }

  switch (value1) {
    case 1 &&
      (label1 === "second" ||
        label1 === "minute" ||
        label1 === "hour" ||
        label1 === "day"):
      count += value1;
  }

  switch (value2) {
    case 1 &&
      (label2 === "second" ||
        label2 === "minute" ||
        label2 === "hour" ||
        label2 === "day"):
      count += value2;
  }

  if (
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

  results.push(count, label1);
  return results;
};

console.log(timeAdder2(11, "days", 1, "minute"));
