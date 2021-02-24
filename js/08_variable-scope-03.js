function aFunc() {
  let a = "foo";

  if (true) {
    let b = "bar";
    console.log(a); // => 'foo'

    if (true) {
      let c = "baz";
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();
