export interface MenuItem {
  title: string;
  href?: string;
  items?: MenuItem[];
}

export type MenuItemType = MenuItem;