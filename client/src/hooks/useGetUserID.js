export const useGetUserID = () => {
    return windows.localStorage.getItem("userID");
}