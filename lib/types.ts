export interface MenuItem {
  key: any;
  title: string;
  href?: string;
  items?: MenuItem[];
  icon?: React.ComponentType;
}

export type MenuItemType = MenuItem;