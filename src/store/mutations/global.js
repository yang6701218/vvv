export const changeisCollapse = state => {
    state.global.isCollapse = !state.global.isCollapse;
};
export const setTableData = (state, data) => {
    state.global.tableData = data;
};
