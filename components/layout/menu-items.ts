import {
	ARCHIVE_TENDER,
	CABINET,
	FORMER_ADVISERS,
	NEWS,
	NOTICE,
	OPEN_TENDER,
	ORGANIZATION_STRUCTURE,
	OUR_TEAM,
	POLICY,
	PROGRAMS,
	REPORTS,
	SPEECHES,
} from '@/constants/routes.constants';

interface MenuItem {
	title?: string;
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
		items: [
			{ title: 'Message', key: 'menu.message', href: '#' },
			{ title: 'Biography', key: 'menu.biography', href: '#' },
			{ title: 'Advisers Speeches', key: 'menu.advisersSpeeches', href: SPEECHES },
			{ title: 'Statement', key: 'menu.statement', href: '#' },
			{ title: 'Noble laureatte', key: 'menu.nobleLaureatte', href: '#' },
			{ title: 'Concept', key: 'menu.concepts', href: '#' },
			{ title: 'Quotes', key: 'menu.quotes', href: '#' },
			{ title: 'Former Chief Advisers', key: 'menu.formerAdvisers', href: FORMER_ADVISERS },
		],
	},
	{
		title: 'WHO WE ARE',
		key: 'menu.whoWeAre',
		items: [
			{
				title: 'CHIEF ADVISER’S OFFICE',
				key: 'menu.cabinetMember',
				items: [
					{ title: 'OUR TEAM', key: 'menu.ourTeam', href: OUR_TEAM },
					{ title: 'SUBORDINATE OFFICE', key: 'menu.subordinateOffice', href: '#' },
				],
			},
			{ title: 'ORGANIZATIONAL STRUCTURE', key: 'menu.organizationStructure', href: ORGANIZATION_STRUCTURE },
			{ title: 'MISSION AND VISION', key: 'menu.missionAndVision', href: '#' },
		],
	},
	{
		title: 'WHAT WE DO',
		key: 'menu.whatWeDo',
		items: [
			{ title: 'WHAT WE DO', key: 'menu.whatWeDo', href: '#' },
			{ title: 'PROGRAMS AND PRIORITIES', key: 'menu.programsAndPriorities', href: PROGRAMS },
			{
				title: 'NEWS',
				key: 'menu.news',
				items: [
					{ title: 'NEWS', key: 'menu.news', href: NEWS },
					{ title: 'ARCHIVED NEWS', key: 'menu.archivedNews', href: NEWS },
				],
			},
			{
				title: 'NOTICE',
				key: 'menu.notice',
				items: [
					{ title: 'NOTICE', key: 'menu.notice', href: NOTICE },
					{ title: 'ARCHIVED NOTICE', key: 'menu.archivedNotice', href: NOTICE },
				],
			},
			{
				title: 'TENDER',
				key: 'menu.tenders',
				items: [
					{ title: 'TENDER', key: 'menu.tenders', href: OPEN_TENDER },
					{ title: 'ARCHIVED TENDER', key: 'menu.archiveTenders', href: ARCHIVE_TENDER },
				],
			},
			{
				title: 'OFFICE ORDER',
				key: 'menu.officeOrder',
				items: [
					{ title: 'OFFICE ORDER', key: 'menu.officeOrder', href: '#' },
					{ title: 'ARCHIVED TENDER', key: 'menu.archivedOfficeOrder', href: '#' },
				],
			},
		],
	},
	{
		title: 'MEDIA AND PUBLICATION',
		key: 'menu.mediaAndPublication',
		items: [
			{
				title: 'DOCUMENTS',
				key: 'menu.documents',
				items: [{ title: 'Policy Documents', key: 'menu.policyDocuments', href: POLICY }],
			},
			{
				title: 'PUBLICATIONS',
				key: 'menu.publications',
				items: [
					{ title: 'REPORTS', key: 'menu.reports', href: REPORTS },
					{ title: 'STATISTICS', key: 'menu.statistics', href: '#' },
				],
			},
			{
				title: 'MEDIA',
				key: 'menu.mediaGallery',
				items: [
					{ title: 'Photo Gallery', key: 'menu.photoGallery', href: '/news-media/photo-gallery' },
					{ title: 'Video Gallery', key: 'menu.videoGallery', href: '/news-media/video-gallery' },
					{ title: 'Archive Gallery', key: 'menu.archivedGallery', href: '#' },
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
