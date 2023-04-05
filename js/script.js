function compare(x,y) {
    return x > y;
}

console.log(compare(11,10))

function a()
{
    return
    {
        name: "Yaakov"
    };
}

function b() {
    return {
        name: "Yaakov"
    };
}

console.log(a());
console.log(b());

var sum = 0;
var i;
for (i = 0;i < 10; i++) {
    console.log(i);
    sum += i;
}
console.log(sum);
//output: 0 - 9

function z() {
    var a = 2;
    var b = "2";
    return {
        value: a+b
    };
}
console.log(z());
