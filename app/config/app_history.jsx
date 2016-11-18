import { useRouterHistory } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
const appHistory = useRouterHistory(createHistory)();

export default appHistory;
