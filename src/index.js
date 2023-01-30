console.log('аяуюує')

//імпортуємо якусь одну сутність з файлу validate-pwd.js
//ДЕФОЛТНИЙ ІМПОРТ
import validatePwd from "./js/validate-pwd"
console.log(validatePwd(23))
//////////////////////////////
///////////////////////////////////////////////////////
/////ІМЕНОВАНИЙ ЕКСПОРТ............................
import {fetchAllUsers, fetchUsersById, updateUsersById as updateId} from './js/validate-pwd'

console.log(fetchAllUsers, fetchUsersById, updateId)

///////////////////////////////////////////////////////
/////ІМПОРТ ПРОСТОРУ ІМЕН............................
//ЗАБИРАЄ ВСІ ЩО Є В ФАЙЛІ В ОДИН ОБ'ЄКТ
import * as apiService from './js/validate-pwd'
console.log(apiService)


//////////////////////////////////////////////////////
////ІМПОРТУЄМО ТY БІБЛІОТЕКY, ЯКY ПІДКЛЮИЛИ РАНІШЕ.........................
import joi from 'joi'
console.log(joi)

///////////////////////////////////////////////
//імпортуємо з idValidate
import { addUser } from './js/id-validate'
addUser('Jonatan')