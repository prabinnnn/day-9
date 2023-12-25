let num = Number(prompt("enter the number"));
function prefectnumber(num) {
  let rem;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    rem = num % 10;
    if (rem == 0) {
      sum = sum + 1;
    }
    let e =
      sum === 0
        ? console.log("it is perfect number")
        : console.log("it is not prefect number");
  }
}
prefectnumber(num);
