export interface MenuItem {
  key: string;
  title: string;
  href?: string;
  items?: MenuItem[];
  icon?: React.ComponentType;
}

export type MenuItemType = MenuItem;