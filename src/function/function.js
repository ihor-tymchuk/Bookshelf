
export const nameUser = (id, arr) => {
    for (let j=0;j<arr.length; j++) {
        if (arr[j].id === id){
            return arr[j].FirstName
        }
    }
}

export const booksUser = (id, arr) => {
 for (let j=0;j<arr.length; j++) {
     if (arr[j].id === id){
         return arr[j].Books
     }
 }
}

export const booksNum = (id, arr) => {
for (let j=0;j<arr.length; j++) {
 if (arr[j].id === id){
     return j
 }
}
}

export const nameUserFriend = (id, arr) => {
    const arrFr = []
    for (let j=0;j<arr.length; j++) {
        if (arr[j].id !== id){
            arrFr.push({
                nameFr : arr[j].FirstName +" "+ arr[j].LastName,
                id: arr[j].id,
                sumBook: arr[j].Books.length
            })
        }
    }
    return arrFr
}

export const sortFriends = (arr) => {
    
   arr.sort( (a, b) => {
        if (a.sumBook > b.sumBook) {
            return -1
        }
        if (a.sumBook < b.sumBook) {
           return 1
       }
       if (a.sumBook === b.sumBook) {
           return 0
       } } )
       
    return arr
}

export const nameUserMenu = (id, arr) => {
    for (let j=0;j<arr.length; j++) {
        if (arr[j].id === id){
            return "Hello, " + arr[j].FirstName
        }
    }
}

export const loginInTrueFalseMenu = (boole, listTrue, listFalse) => {
    if (boole) {
        return listTrue
    } else {
        return listFalse
    }
}
