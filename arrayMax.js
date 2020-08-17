var marks = [93, 34, 98, 50, 60, 70, 80, 86];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("the max value is :", max);
