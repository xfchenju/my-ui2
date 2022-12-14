/*
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 16:03:03
 * @LastEditors: chenju
 * @LastEditTime: 2022-12-02 17:59:36
 */
import Button from './button'
import Icon from './icon'
import BaseTable from './BaseTable'
import GNoTask from './GNoTask'
import GIcon from './GIcon'
import GSelect from './GSelect'
import GPageTable from './GPageTable'
import { usePageTable } from './GPageTable'
import GSearchBar from './GSearchBar'
import PageHeaderNew from './PageHeaderNew'
import PageTableTabPane from './PageTableTabPane'
import PageTableTabs from './PageTableTabs'

export type { BaseTableProps } from './BaseTable'
export type { PageHeaderProps, SearchButtonOptionsType, SearchOptionsType, PageTableProps } from './GPageTable';

const components = [Button, Icon, BaseTable, GNoTask, GIcon, GSelect, GPageTable, usePageTable, GSearchBar, PageHeaderNew, PageTableTabPane, PageTableTabs]

export {
	Button,
	Icon,
	BaseTable,
	GNoTask,
	GIcon,
	GSelect,
	GPageTable,
	usePageTable,
	GSearchBar,
	PageHeaderNew,
	PageTableTabPane,
	PageTableTabs,
}

export default components 