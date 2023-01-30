//ЕКСПОРТУЄМО якусь одну сутність з файлу validate-pwd.js
//ДЕФОЛТНИЙ ЕКСПОРТ
export default function validatePwd() {
    console.log('validate')
}
///////////////////////////////////////////////////////
/////ІМЕНОВАНИЙ ЕКСПОРТ............................
export const fetchAllUsers = () => {
    console.log('fetchAllUsers')
}

export const fetchUsersById = () => {
    console.log('fetchUsersById')
}

export const updateUsersById = () => {
    console.log('updateUsersById')
}