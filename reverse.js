function reverse(original) {
  return original.split('').reverse().join('');
}

const input = process.argv[2];

if (input) {
  console.log(reverse(input));
}