import { GPageTable, useGPageTable } from './src/PageTableNew';
import {
  PageTableProps,
  PageHeaderProps,
  SearchButtonOptionsType,
  SearchOptionsType
} from './src/types';
import { withInstall } from '@xfchenju/utils';

export type { PageHeaderProps, SearchButtonOptionsType, SearchOptionsType, PageTableProps };

export {
  GPageTable,
  GPageTable as PageTableNew,
  useGPageTable as usePageTable,
  // GPageHeader,
  // GPageTableTabs,
  // GPageTableTabPane
};

export default withInstall(GPageTable);
