
export const updateObjectInArray = (items, objPropName, itemId, newValueObj) => {

    return items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newValueObj}
        }
        return user;
    })
}