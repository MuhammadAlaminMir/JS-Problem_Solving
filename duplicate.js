// kickoff the duplicate element in an array
var id = [2, 5, 4, 3, 4, 2, 6, 5, 5, 4];

var newArr = [];
for (var i = 0; i < id.length; i++) {
    var element = id[i];
    var index = newArr.indexOf(element);
    if (index == -1) {
        newArr.push(element);
    }
}
console.log(newArr);
