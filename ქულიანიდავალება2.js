function number(m, n) {
    if (m > n) return m;
    else if (n > m) return n;
    else return 0
};
console.log(number());



function sum(a = 10, b = 7) {
    return a + b
};
console.log(sum());



function myfirstNameandlastName() {
    console.log("Elene Munjishvili")

}
myfirstNameandlastName("Elene Munjishvili");



function name(firstName, lastName) {
    return firstName + lastName
}
console.log("Elene", "Munjishvili", name());
//აქ მიბრუნებს სახელს და გვარს, მაგრამ names-ს რატომ ხაზავს ვერ ვხვდები



function num(n) {
    let a = 1
    for (i = 1; i <= n; i++) {
        a *= i
    }
    return a;
}
console.log(num(n)); // ეს დავალება არ გამომდის




let student = {
    firstName: "elene",
    lastName: "munjishvili",
    age: "26",
    scores: [4, 7, 5, 3, 2],
    fullName: function () {
        return student.firstName + student.lastName //აქ პირდაპირ ელენე მუნჯიშვილი რომ დავწერო ბრჭყალებით ხომ შემიძლია?
    }
} // მეთოდისთვის გამოვიყენე AI, მაგრამ მაინც მაქვს კითხვა, რახან მეთოდია და ობიექტში ვწერთ, 
// ამიტომ ჯერ fullname იწერება და მერე იძახება ფუნქცია? სულ ასე უნდა ვქნათ, როცა მეთოდს ვწერთ?

console.log(student.fullName());

function grade(scores) {
    let sum = 0;
    for (i = 0; i < scores.length; i++) {
        sum += scores[i]
    }
    return sum
}
console.log(grade(student.scores))

console.log(student.firstName, student.age)











