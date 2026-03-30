/*
import dayjs from "dayjs";
//fecha actual
export function FehcaActual(){
  return dayjs().format('DD/MM/YYYY');
}

//hora actual
export function horaActual(){
  return dayjs().format('HH:mm:ss');
}
*/
let horaActual = () =>{
    let fecha = new Date();
    let hora = String(fecha.getHours()).padstart(2, '0');
    let minutos = String(fecha.getMinutes()).padstart(2, '0');
    let segundos = String(fecha.getSeconds()).padstart(2, '0');
}
let FehcaActual = () =>{
    let fecha = new Date();
    let año = String(fecha.getFullYear()).padstart(2, '0');
    let mes = String(fecha.getMonth()).padstart(2, '0');
    let dia =String(fecha.getDay()).padstart(2, '0');
    let hora = String(fecha.getHours()).padstart(2, '0');
    let minutos = String(fecha.getMinutes()).padstart(2, '0');
    let segundos = String(fecha.getSeconds()).padstart(2, '0');
    
}
export  {horaActual, FehcaActual};