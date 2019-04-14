export const loadState = () => {
    try {
        const saveData = localStorage.getItem('colectionDate')
        if (saveData === null) {
            return undefined
        }
    } catch (err) {
        return undefined
    }
}

export const saveState = dataUsers => {
    try{
        dataUsers.usersColection.map( dataUser => {
           return null
        })
    } catch (err) {
        return Error(err)
    }
}