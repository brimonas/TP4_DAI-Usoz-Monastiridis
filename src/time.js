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
    let hora = String(fecha.getHours()).padStart(2, '0');
    let minutos = String(fecha.getMinutes()).padStart(2, '0');
    let segundos = String(fecha.getSeconds()).padStart(2, '0');
      return `${hora}:${minutos}:${segundos}`;
}
let FehcaActual = () =>{
    let fecha = new Date();
    let año = fecha.getFullYear();
    let mes = String(fecha.getMonth()+1).padStart(2, '0');
    let dia =String(fecha.getDate()).padStart(2, '0');
    let hora = String(fecha.getHours()).padStart(2, '0');
    let minutos = String(fecha.getMinutes()).padStart(2, '0');
    let segundos = String(fecha.getSeconds()).padStart(2, '0');
      return `${dia}/${mes}/${año}/${hora}:${minutos}:${segundos}`;
}
export  {horaActual, FehcaActual};