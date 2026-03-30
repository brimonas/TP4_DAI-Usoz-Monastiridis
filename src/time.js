import express from "express";
const app = express();


//fecha actual
export function FehcaActual(){
console.log(dayjs().format('DD/MM/YYYY'));
}

//hora actual
export function HoraActual(){
console.log(dayjs().format('HH:mm:ss'));
}

