import { MenuItemType } from '@/lib/types';

export const menuItems: MenuItemType[] = [
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'Administration',
    items: [
      { title: 'Cabinet', href: '/administration/cabinet' },
      {
        title: 'Past Chief Advisers',
        href: '/administration/past-chief-advisers',
      },
      {
        title: 'Organization Structure',
        href: '/administration/organization-structure',
      },
      {
        title: 'Programs and Priorities',
        href: '/administration/programs',
      },
    ],
  },
  {
    title: 'Notice',
    items: [
      { title: 'Notices', href: '/tenders-notice/notices' },
      { title: 'Open Tenders', href: '/tenders-notice/open-tenders' },
      { title: 'Archive Tenders', href: '/tenders-notice/archive-tenders' },
    ],
  },
  {
    title: 'News & Media',
    items: [
      { title: 'News', href: '/news-media/news' },
      { title: 'Photo Gallery', href: '/news-media/photo-gallery' },
      { title: 'Video Gallery', href: '/news-media/video-gallery' },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
