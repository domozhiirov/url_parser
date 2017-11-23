var url = 'http://www.example.com/?a1=param1&a1=param2';

var parse = function (input) {
  return input.split('?')[1].split('&').map(x => x.split('='))
    .reduce((prev, x) => { prev[x[0]] = (prev[x[0]] || []).concat(x[1]); return prev; }, {});
};

console.log(parse(url));