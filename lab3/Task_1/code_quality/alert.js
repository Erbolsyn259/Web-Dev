
describe("pow", function() {

    it("2 в степени 3 будет 8", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3 в степени 3 будет 27", function() {
      assert.equal(pow(3, 3), 27);
    });
  
  });

describe("Возводит x в степень n", function() {
  it("5 в степени 1 будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 в степени 2 будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Степень ${n} не поддерживается,
    введите целую степень, большую 0`);
} else {
  alert( pow(x, n) );
}
//ddss
/*
sdls
*/
