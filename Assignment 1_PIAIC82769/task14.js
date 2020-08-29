var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
/*
--a; // decrement in a before being stored as 1
--a - --b; // decrement of a and b before being stored and their substraction 1 - 0 = 1
--a - --b + ++b; // plus increment of be 1 - 0 + 1 = 2
--a - --b + ++b + b--; // 1 - 0 + 1 + 1 = 3
*\