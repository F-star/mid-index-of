The midIndexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

Specially, this method will search from the middle index, and go to left and right to find target element.

## syntax

```js
midIndexOf(array, searchElement, startIndex);
```

startIdex is optional, and default is half the length of the array.

## example

```js
import midIndexOf from 'mid-index-of';

midIndexOf(['a', 'b', 'c', 'd', 'e', 'f'], 'e', 1);
// result: 1
// Actually, it will search with snake path: b -> c -> a -> d -> e
```
