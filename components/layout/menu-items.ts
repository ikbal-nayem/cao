import { ARCHIVE_TENDER, NEWS, NOTICE, OPEN_TENDER } from '@/constants/routes.constants';
import { MenuItemType } from '@/lib/types';

export const menuItems: MenuItemType[] = [
	{
		title: 'About Us',
		href: '/about-us',
	},
	{
		title: 'Administration',
		items: [
			{ title: 'Advisery Council', href: '/administration/cabinet' },
			{ title: 'Former Chief Advisers', href: '/administration/former-chief-advisers' },
			{ title: 'Organization Structure', href: '/administration/organization-structure' },
			{ title: 'Programs and Priorities', href: '/administration/programs' },
			{ title: 'Our Staffs', href: '/administration/staffs' },
			{
				title: 'Documents & Publications',
				items: [
					{ title: 'Policy Documents', href: '/administration/documents/policy' },
					{ title: 'Reports & Stats', href: '/administration/documents/reports' },
				],
			},
		],
	},
	{
		title: 'Notice',
		items: [
			{ title: 'Notices', href: NOTICE },
			{ title: 'Open Tenders', href: OPEN_TENDER },
			{ title: 'Archive Tenders', href: ARCHIVE_TENDER },
		],
	},
	{
		title: 'News & Media',
		items: [
			{ title: 'News', href: NEWS },
			{ title: 'Advisers Speeches', href: '/news-media/adviser-speeches' },
			{ title: 'Photo Gallery', href: '/news-media/photo-gallery' },
			{ title: 'Video Gallery', href: '/news-media/video-gallery' },
		],
	},
	{
		title: 'Contact',
		items: [
			{ title: 'Contact Us', href: '/contact' },
			{ title: 'FAQ', href: '/contact/faq' },
			{ title: 'Feedback', href: '/contact/feedback' },
			{ title: 'Address', href: '/contact/address' },
		],
	},
];
