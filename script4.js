let arr = [];
let complaint = prompt('What problem do you have?', 'Problem?');

while (complaint !== 'Thank you') {
  arr.push(complaint);
  complaint = prompt('What other problem do you have?', 'insomnia');
}

alert("Always glad to help. You've made " + arr.length + " complaints.");