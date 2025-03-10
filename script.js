function isLeapYear(year) {
  let divisibleBy4 = year % 4 == 0;
  let divisibleBy100 = year % 100 == 0;
  let divisibleBy400 = year % 400 == 0;
  return divisibleBy4 && (!divisibleBy100 || divisibleBy400);
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
console.log(isLeapYear(2024));
console.log(isLeapYear(2100));
