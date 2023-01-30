import shortid from 'shortid'//підключаємо бібліотеку


//імпортуємо в index.js
export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name,
    }
    console.log(user)
}