const meunList = state => {
    filterMenu(state.appRouter);
    return state.appRouter;
};
export default meunList;
function filterMenu(arr) {
    arr.forEach((e, index) => {
        let r = e.children.filter(e => {
            return e.asideMenu;
        });
        arr[index].children = r;
    });
}
