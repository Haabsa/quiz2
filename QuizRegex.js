//console.log('Hello Tupo Available');
//nilazima ^\ianze or (all digit\d() [0-9] mbadala wa d
//^\$ lazma ianze na $
//[0-9] or |d lazma kuwena na namba 0 to 9 
// + ni concatinate left side and right side
// \. after conctinate followed by dot.
//{2} tuna set lazima ziwe 2 miango ya desmail2
//?$ lzima isizidi desimal zako
//* means space 
let condition = /^\$[\d]*[\.][0-9]{2}$/

//let checking= condition.test("$9.8k");

//Valid 
console.log(condition.test("$14.99")); 
console.log(condition.test("$1234567.00")); 
console.log(condition.test("$.90"));  

//invalid
console.log(condition.test("$14")); 
console.log(condition.test("$13421.89money")); 
console.log(condition.test("$1.1a")); 

