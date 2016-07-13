/**
 * Created by championswimmer on 13/07/16.
 */


arr = [3, 6, 2, 11, 2, 33, 43, 5, 10,12];
arr.sort()
arr.sort(function (a, b) {
    console.log(a + ' ' + b);
    return a - b;
});
