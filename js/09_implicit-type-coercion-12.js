11 > "9"; // true -- '9' is coerced to 9

"11" > 9; // true -- '11' is coerced to 11

123 > "a"; // false -- 'a' is coerced to NaN; any comparison with NaN is false

123 <= "a"; // also false

true > null; // true -- becomes 1 > 0

true > false; // true -- also becomes 1 > 0

null <= false; // true -- becomes 0 <= 0

undefined >= 1; // false -- becomes NaN >= 1
