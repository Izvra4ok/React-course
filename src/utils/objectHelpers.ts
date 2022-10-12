import {UsersType} from "../types/types";

export const updateObjectInArray = (items: Array<UsersType>, objPropName: string, itemId: number, newValueObj: Object) => {

    return items.map((user:any) => {
        if (user[objPropName] === itemId) {
            return {...user, ...newValueObj}
        }
        return user;
    })
}
