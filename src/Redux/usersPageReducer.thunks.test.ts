import {actions, getFollowUsersThunkCreator, getUnfollowUserThunkCreator} from "./usersPageReducer";
import {usersAPI} from "../DAL/users-API";
import {ResponsedType, ResultCodeEnum} from "../DAL/api";

jest.mock("../DAL/users-API");

const UserApiMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
});

const Result: ResponsedType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
};

test("success FollowThunk", async() => {

    UserApiMock.followUsersServer.mockReturnValue(Promise.resolve(Result));

    const thunk = getFollowUsersThunkCreator(2);

    await thunk(dispatchMock,getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.toggleFollowingIsProgress(true, 2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.followUserSuccess(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(3,actions.toggleFollowingIsProgress(false, 2))
});

test("success UnfollowThunk", async() => {

    UserApiMock.unfollowUsersServer.mockReturnValue(Promise.resolve(Result));

    const thunk = getUnfollowUserThunkCreator(3);

    await thunk(dispatchMock,getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.toggleFollowingIsProgress(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.unfollowUserSuccess(3))
    expect(dispatchMock).toHaveBeenNthCalledWith(3,actions.toggleFollowingIsProgress(false, 3))
});
