import usersPageReducer, {actions, InitialStateType} from "./usersPageReducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: "Siarhei 0",
                status: "Status 0",
                photos: {
                    small: null,
                    large: null,
                },
                followed: false,
            },
            {
                id: 1,
                name: "Siarhei 1",
                status: "Status 1",
                photos: {
                    small: null,
                    large: null,
                },
                followed: true,
            },
            {
                id: 2,
                name: "Siarhei 2",
                status: "Status 2",
                photos: {
                    small: null,
                    large: null,
                },
                followed: false,
            },
            {
                id: 3,
                name: "Siarhei 3",
                status: "Status 3",
                photos: {
                    small: null,
                    large: null,
                },
                followed: true,
            }],
        totalUsersCount: 0,
        pageSize: 10,
        currentPage: 1,
        isFetching: false,
        folllowingInProgress: [],
        search: {
            term: "",
            friend: null as null | boolean,
        }
    }
});


test("Follow Users", () => {

    // 1.Test data
    const action = actions.followUserSuccess(1)
    //2.Action
    const newState = usersPageReducer(state, action)
    //3.expect
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();

});

test("Unfollow Users", () => {

    // 1.Test data
    const action = actions.unfollowUserSuccess(3)
    //2.Action
    const newState = usersPageReducer(state, action)
    //3.expect
    expect(newState.users[2].followed).toBeFalsy();
    expect(newState.users[3].followed).toBeFalsy();

});