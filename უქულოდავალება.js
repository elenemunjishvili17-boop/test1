let number = 6
if ( number % 2 === 0 ) {
    console.log("დადებითია")
}
else { 
    console.log ("უარყოფითია ან ნულია")
};


let temperature = 10
if (temperature >30) {
    console.log("ცხელა")
}
else if (temperature >=15 && temperature <= 30) {
    console.log ("სასიამოვნო ამინდია")

}
else  {
 console.log ("ცივა")
}


let password = 777
if (password== 12345) {
    console.log("შესვლა წარმატებულია")
}
else {
    console.log ("არასწორი პაროლი")
}


{ for (let i= 1; i<=20; i++)
    if ( i % 2 === 0)
        console.log (i)
 };


 let names = ["ana", "giorgi", "nika"]; 

 for (let i = 0; i <=2 ; i++) {
  console.log(i, names[i]);
};


for (let i = 1; i <= 5; i++) {
    console.log("Hello")
};


let words = ["puppy", "watermelon", "tea", "strawberry"];

for (let i = 0; i < 4; i++) {
  if (words.length > 4) 
    console.log (words);
  
} //ამაზე პასუხს საერთოდ არ მიბრუნებს ტერმინალში და ვერ გავიგე როგორ დავწერო


let role = "doctor" 
console.log (role)
switch (role) {
case "doctor":
console.log ("ექიმის გვერდი")

break; 
case "patient": 
console.log ("პაციენტი")
break; 
default:
    console.log ("წვდომა შეზღუდულია")
}













    
 
 
 
 





