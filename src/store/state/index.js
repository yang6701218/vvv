import { appRouter } from '@/router/router.js'
import * as global from '@/store/state/global.js'
const state = {
    appRouter,
    isCollapse: global.isCollapse,
    tableData: global.tableData
}
export default state
