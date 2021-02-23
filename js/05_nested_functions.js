let a = 1;           // first level variable

function foo(bar) {  // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();

  console.log(a);     // => 1
  console.log(b);     // => 2
  console.log(c);     // => ReferenceError
}

foo();
