
import readlineSync from 'readline-sync';



export const  que = () => {

const UserName = readlineSync.question('May I have your name? ');
console.log('Hello, ',UserName +'!');

};


