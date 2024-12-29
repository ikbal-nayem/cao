import { ARCHIVE_TENDER, NEWS, NOTICE, OPEN_TENDER } from '@/constants/routes.constants';
import { MenuItemType } from '@/lib/types';

export const menuItems: MenuItemType[] = [
	{
		title: 'About Us',
		key: 'menu.aboutUs',
		href: '/about-us',
	},
	{
		title: 'Administration',
		key: 'menu.administration',
		items: [
			{ title: 'Advisery Council', key: 'menu.adviseryCouncil', href: '/administration/cabinet' },
			{
				title: 'Former Chief Advisers',
				key: 'menu.formerChiefAdvisers',
				href: '/administration/former-chief-advisers',
			},
			{
				title: 'Organization Structure',
				key: 'menu.organizationStructure',
				href: '/administration/organization-structure',
			},
			{ title: 'Programs and Priorities', key: 'menu.programsAndPriorities', href: '/administration/programs' },
			{ title: 'Our Staffs', key: 'menu.ourStaffs', href: '/administration/staffs' },
			{
				title: 'Documents & Publications',
				key: 'menu.documentsPublications',
				items: [
					{ title: 'Policy Documents', key: 'menu.policyDocuments', href: '/administration/documents/policy' },
					{ title: 'Reports & Stats', key: 'menu.reportsStats', href: '/administration/documents/reports' },
				],
			},
		],
	},
	{
		title: 'Notice',
		key: 'menu.notice',
		items: [
			{ title: 'Notices', key: 'menu.notice', href: NOTICE },
			{ title: 'Open Tenders', key: 'menu.openTenders', href: OPEN_TENDER },
			{ title: 'Archive Tenders', key: 'menu.archiveTenders', href: ARCHIVE_TENDER },
		],
	},
	{
		title: 'News & Media',
		key: 'menu.newsMedia',
		items: [
			{ title: 'News', key: 'menu.news', href: NEWS },
			{ title: 'Advisers Speeches', key: 'menu.advisersSpeeches', href: '/news-media/adviser-speeches' },
			{ title: 'Photo Gallery', key: 'menu.photoGallery', href: '/news-media/photo-gallery' },
			{ title: 'Video Gallery', key: 'menu.videoGallery', href: '/news-media/video-gallery' },
		],
	},
	{
		title: 'Contact',
		key: 'menu.contact',
		items: [
			{ title: 'Contact Us', key: 'menu.contactUs', href: '/contact' },
			{ title: 'FAQ', key: 'menu.FAQ', href: '/contact/faq' },
			{ title: 'Feedback', key: 'menu.feedback', href: '/contact/feedback' },
			{ title: 'Address', key: 'menu.address', href: '/contact/address' },
		],
	},
];
