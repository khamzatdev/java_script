// const htmlPassed = true;
// const cssPassed = true;
// let message = '';

// if(htmlPassed && cssPassed){
//     message = 'Siz bootstrap kursini boshlashingiz mumkin'
// }else if(htmlPassed ||cssPassed){
//     message = 'Iltimos ikkinchi kursni tugating'
// }else{
//     message = 'Iltimmos birinchi ikkala kursni tugating'
// }

// console.log(message)

// console.log(`Men ${Number(1997+4)} - yilda tavallud topganman`); // auto string conversion

// function meningFunksiyam(son1,son2){
//      return son1 + son2;
// }
//    console.log(meningFunksiyam (10,20)) 
//    console.log(meningFunksiyam (30,20)) 
// console.log(kvadrat(3))
// function kvadrat(son){
//     return son * son
// }
// console.log(kvadrat(10))

// const kvadrat = function(son){
//     return son * son
// }
// console.log(kvadrat(26))

// const kvadrat = (son) => {
//     return son * son
// }
// kvadrat(10);
// console.log(kvadrat(10))

// const kvadrat = son => son * son;
// console.log(kvadrat(10))

// const print = () => console.log("Printing...");
// print();

// const volume = (a,b,c) => a*b*c;
// console.log(volume(1,3,4))


// //Function declaration 
// function evenOrOddDec(number){
//     if(number % 2 === 0){
//         console.log(`${number} is even`)
//     }else{
//         console.log(`${number} is odd`)
//     }
// }
// evenOrOddDec(0)

// Arrow function
// const evenOrOddDec = number =>{
//     if(number % 2 === 0){
//         console.log(`${number} is even`)
//     }else{
//         console.log(`${number} is odd`)
//     }
// }
// evenOrOddDec(9)

// function maxDec(number1,number2){
//     if(number1>=number2){
//         return number1;
//     }
//     return number2;
// }
// console.log(maxDec(1,4))

// const maxArrow = (number1,number2) =>{
//     if(number1 >= number2){
//         return number1
//     }
//     return number2
// }
// console.log(maxArrow(3,5))

// // Function declaration 
// function reverseDec(number){
//     const numberStr = String(number);
//     const reversStr = numberStr.split('').reverse().join('');
//     return Number(reversStr)
// }
// console.log(reverseDec(78))

// // Functoion expression
// const reverseDec = function(number){
//     const numberStr = String(number);
//     const reverseDec = numberStr.split('').reverse().join('');
//     return Number(reverseDec)
// }
// console.log(reverseDec(98))

// const mixedArray = ['Javascript', 2, false, null];
// console.log(mixedArray)

// let language = ['js', 'go', 'java']
// language.push('css')
// console.log(language)

// const languages = ['js', 'java', 'go', 'swift'];
//             const deletedLanguage = languages.pop();
//             console.log(languages); // ['js', 'java', 'go']
//             console.log(deletedLanguage); // swift

// concat()
// const array1 = [1, 4];
// const array2 = [2, 3, 7];
// const result = array1.concat(array2);
// console.log(result); // [1, 4, 2, 3, 7]

// // find()
// const findValue = (number) => number === 2;
// const foundValue = result.find(findValue);
// console.log(foundValue); // 2

// // filter()
// const filterValues = number => number > 5;
// const filteredValues = result.filter(filterValues);
// console.log(filteredValues); // 7

// // map()
// const mapValues = number => 'Son: ' + number;
// const mappedValues = result.map(mapValues);
// console.log(mappedValues); // ['Son: 1', 'Son: 4', ...]

// const sortValues = (number1, number2) => number1 - number2;
// result.sort();
// console.log(result); // [1, 2, 3, 4, 7];

// let sum = 0
// for(let i=0; i<=10; i++){
//     sum += i; //sum=sum+i
// }
// console.log('Sum: ' + sum)

// for(let i=1; i<=5; i++){
//     if(i==3){
//         break
//     }
//     console.log(i)
//}

// let i = 1, sum =0
// while(i <= 10){
//    sum += i;
//    i++;
// }
// console.log(`Summa: ${sum}`)

// const inRange = (min,max, number) =>{
//    if(number >= min && number <= max){
//       console.log(`Berilgan ${number} soni ${max} orasida`)
//    } else{
//       console.log(`Berilgan ${number} soni ${max} orasida emas`)
//    }
// }

// const minRange = 10;
// const maxRange = 30;
// const givenNumber = 20;
// inRange (minRange,maxRange,givenNumber)


// const simpleCalculator = (num1, num2, oper) => {
//    switch (oper) {
//       case "add":
//          console.log(`Yig'indisi: ${num1 + num2}`);
//          break;

//       case "subtract":
//          console.log(`Ayirmasi: ${num1 - num2}`);
//          break;

//       case "multiply":
//          console.log(`Ko'paytmasi: ${num1 * num2}`)
//          break;

//       case "divide":
//          console.log(`Bo'linmasi: ${num1 / num2}`)
//          break;

//       default:

//          console.log('Aniqlanmagan amal');

//    }
// }
// const a = 20;
// const b = 5;
// const operation = "divide";
// simpleCalculator(a, b, operation);



// const getLargestElement = (array) => {
//    let largest = array[0];
//    for (let i = 1; i < array.length; i++) {
//       if (array[i] > largest) {
//          largest = array[i];
//       }
//    }
//    return largest;
// }
// const nums = [6, 51, 7, 63, 37, 673, 38, 349, 127];
// const result = getLargestElement(nums);
// console.log(`Eng katta element: ${result}`);

// const headings = document.getElementsByTagName('h2')
// console.log(headings)
// headings[0].remove()


// const heading1 = document.querySelector('#sarlavha')
// heading1.remove()

// const all = document.querySelectorAll('h1')
// console.log(all)
// all[1].remove()

// const element = document.getElementById('elementId');
// element.textContent = 'Yangi matn'
// console.log(element)


// const inputEl = document.getElementById('username')
// inputEl.value = 25

// const element = document.getElementById('sarlavha')
// element.innerHTML = 'Yangi sarlavha'

// const paragraph = document.createElement('p')
// console.log(paragraph)

// const text  = document.createTextNode('bu yrda xat  boshi')
// console.log(text)

// const paragraph = document.createElement('p');
// const text = document.createTextNode('Bu yerda xatboshi yozilgan')
// paragraph.appendChild(text);

// const box = document.getElementById('box');
// box.appendChild(paragraph);


// const changeHeading = () =>{
//     const heading = document.getElementById('heading')
//     heading.textContent = 'Yandi sarlavha'
// }
// const btn = document.getElementById('changeHeadingBtn')
// btn.addEventListener('click',changeHeading)

// const notifyDoubleClick = () =>{
//     console.log('2 marta bosili')
// }
//  const btn = document.getElementById('btn')
//  btn.addEventListener('dblclick',notifyDoubleClick)

// document.addEventListener('keydown', event =>{
//     console.log('key: ' + event.key)
//     console.log('code: ' + event.code)
// })

// const getRandomNumber = (min,max) =>{
//     return Math.floor(Math.random()*(max-min + 1))+min;
// }

// const generate = () =>{
//     const minEl = document.getElementById('min')
//     const maxEl = document.getElementById('max')
//     const min = Number(minEl.value)
//     const max = Number(maxEl.value)

//     if(minEl.value === '' || maxEl.value === ''){
//         alert('Iltimos malumot kirgizing')
//         return
//     }
//     if(min>max){
//         alert('min maxdan kichik bulishi kerak')
//         return
//     }


//     const placeholderEl = document.querySelector('#placeholder')
//     placeholderEl.textContent = getRandomNumber(min,max)
// }
// const btnEl = document.getElementById('generate')
// btnEl.addEventListener('click', generate)

const lengthLastWord = function(s) {
    s = s.trim(); 
    return s.length - s.lastIndexOf(" ") - 1;
};

 console.log(lengthLastWord("Salom Dunyo"));

// const reverseDec = (number) =>{         
//          return reverseDec.split([]).join([]);
//     }
//      console.log(reverseDec('1.1.1.1'))

 const ip = /1.1.1.1/;
 const address = "1.1.1.1";
 const newAdr = address.replace(ip, "1[.]1[.]1[.]1");
 console.log(newAdr); 














