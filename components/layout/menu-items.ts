import { ARCHIVE_TENDER, NEWS, NOTICE, OPEN_TENDER, SPEECHES } from '@/constants/routes.constants';

interface MenuItem {
	title: string;
	href?: string;
	key: any;
	items?: MenuItem[];
	icon?: React.ComponentType;
}

// export const menuItems: MenuItem[] = [
// 	{
// 		title: 'About Us',
// 		key: 'menu.aboutUs',
// 		href: '/about-us',
// 	},
// 	{
// 		title: 'Administration',
// 		key: 'menu.administration',
// 		items: [
// 			{ title: 'Advisery Council', key: 'menu.cabinetMember', href: '/administration/cabinet' },
// 			{
// 				title: 'Former Chief Advisers',
// 				key: 'menu.formerChiefAdvisers',
// 				href: '/administration/former-chief-advisers',
// 			},
// 			{
// 				title: 'Organization Structure',
// 				key: 'menu.organizationStructure',
// 				href: '/administration/organization-structure',
// 			},
// 			{
// 				title: 'Programs and Priorities',
// 				key: 'menu.programsAndPriorities',
// 				href: '/administration/programs',
// 			},
// 			{ title: 'Our Staffs', key: 'menu.ourStaffs', href: '/administration/staffs' },
// 			{
// 				title: 'Documents & Publications',
// 				key: 'menu.documentsPublications',
// 				items: [
// 					{
// 						title: 'Policy Documents',
// 						key: 'menu.policyDocuments',
// 						href: '/administration/documents/policy',
// 					},
// 					{ title: 'Reports & Stats', key: 'menu.reportsStats', href: '/administration/documents/reports' },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		title: 'Notice',
// 		key: 'menu.notice',
// 		items: [
// 			{ title: 'Notices', key: 'menu.notice', href: NOTICE },
// 			{ title: 'Open Tenders', key: 'menu.openTenders', href: OPEN_TENDER },
// 			{ title: 'Archive Tenders', key: 'menu.archiveTenders', href: ARCHIVE_TENDER },
// 		],
// 	},
// 	{
// 		title: 'News & Media',
// 		key: 'menu.newsMedia',
// 		items: [
// 			{ title: 'News', key: 'menu.news', href: NEWS },
// 			{ title: 'Advisers Speeches', key: 'menu.advisersSpeeches', href: SPEECHES },
// 			{ title: 'Photo Gallery', key: 'menu.photoGallery', href: '/news-media/photo-gallery' },
// 			{ title: 'Video Gallery', key: 'menu.videoGallery', href: '/news-media/video-gallery' },
// 		],
// 	},
// 	{
// 		title: 'Contact',
// 		key: 'menu.contact',
// 		items: [
// 			{ title: 'Contact Us', key: 'menu.contactUs', href: '/contact' },
// 			{ title: 'FAQ', key: 'menu.FAQ', href: '/contact/faq' },
// 			{ title: 'Feedback', key: 'menu.feedback', href: '/contact/feedback' },
// 			{ title: 'Address', key: 'menu.address', href: '/contact/address' },
// 		],
// 	},
// ];

export const menuItems: MenuItem[] = [
	{
		title: 'CHIEF ADVISER',
		key: 'menu.chiefAdviser',
		href: '',
		items: [
			{ title: 'Message', key: 'menu.message', href: '/adviser/' },
			{ title: 'Biography', key: 'menu.biography', href: '/adviser/' },
			{ title: 'Statement', key: 'menu.statement', href: '/adviser/' },
			{ title: 'Noble laureatte', key: 'menu.nobleLaureatte', href: '/adviser/' },
			{ title: 'Ideas', key: 'menu.ideas', href: '/adviser/' },
			{ title: 'Quotes', key: 'menu.quotes', href: '/adviser/' },
		],
	},
	{
		title: 'WHO WE ARE',
		key: 'menu.whoWeAre',
		items: [
			{ title: 'Advisers Speeches', key: 'menu.advisersSpeeches', href: SPEECHES },
			{ title: 'Advisery Council', key: 'menu.cabinetMember', href: '/administration/cabinet' },
			{
				title: 'Former Chief Advisers',
				key: 'menu.formerChiefAdvisers',
				href: '/administration/former-chief-advisers',
			},
			{
				title: 'ORGANIZATIONAL STRUCTURE',
				key: 'menu.organizationStructure',
				href: '/administration/organization-structure',
			},
			{ title: 'Our Team', key: 'menu.ourTeam', href: '/administration/staffs' },
			{ title: 'MISSION AND VISION', key: 'menu.missionAndVision', href: '/administration/staffs' },
		],
	},
	{
		title: 'WHAT WE DO',
		key: 'menu.whatWeDo',
		items: [
			{ title: 'WHAT WE DO', key: 'menu.whatWeDo', href: NOTICE },
			{
				title: 'Programs and Priorities',
				key: 'menu.programsAndPriorities',
				href: '/administration/programs',
			},
			{ title: 'News', key: 'menu.news', href: NEWS },
			{ title: 'Notice', key: 'menu.notice', href: NOTICE },
			{ title: 'Tender', key: 'menu.openTenders', href: OPEN_TENDER },
			{
				title: 'Media',
				key: 'menu.media',
				items: [
					{ title: 'Photo Gallery', key: 'menu.photoGallery', href: '/news-media/photo-gallery' },
					{ title: 'Video Gallery', key: 'menu.videoGallery', href: '/news-media/video-gallery' },
				],
			},
		],
	},
	{
		title: 'ARCHIVE',
		key: 'menu.archive',
		items: [
			{ title: 'Notice', key: 'menu.notice', href: NOTICE },
			{ title: 'Office Order', key: 'menu.officeOrder', href: NOTICE },
			{
				title: 'Documents',
				key: 'menu.documents',
				href: '/administration/documents/policy',
			},
			{ title: 'Publications', key: 'menu.publications', href: '/administration/documents/reports' },
			{ title: 'Archived Tenders', key: 'menu.archiveTenders', href: ARCHIVE_TENDER },
			{
				title: 'Media',
				key: 'menu.media',
				items: [
					{ title: 'Photo Gallery', key: 'menu.photoGallery', href: '/news-media/photo-gallery' },
					{ title: 'Video Gallery', key: 'menu.videoGallery', href: '/news-media/video-gallery' },
				],
			},
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
