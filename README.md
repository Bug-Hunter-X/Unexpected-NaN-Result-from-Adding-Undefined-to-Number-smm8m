# Unexpected NaN Result from Adding Undefined to a Number in JavaScript

This repository demonstrates a common yet subtle JavaScript bug: adding 'undefined' to a number results in 'NaN'.  The example shows this behavior and how to mitigate it using strict null checks.

## Bug Description:
The function 'foo' adds two parameters. If the second parameter is 'undefined', the result is 'NaN'.  This can lead to unexpected program behavior, especially if the result is further used in calculations.

## Bug Solution:
The solution involves checking for 'undefined' before performing the addition, using the nullish coalescing operator (??).  If the second parameter is undefined, it's replaced with a default value (0 in this case).