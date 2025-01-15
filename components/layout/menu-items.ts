import {
	ARCHIVE_TENDER,
	NEWS,
	NOTICE,
	OPEN_TENDER,
	POLICY,
	PROGRAMS,
	REPORTS,
	ROUTES,
} from '@/constants/routes.constants';

export interface IMenuItem {
	title?: string;
	href?: string;
	isExternal?: boolean;
	key?: any;
	items?: IMenuItem[];
}

export const menuItems: Array<IMenuItem> = [
	{
		title: 'CHIEF ADVISER',
		key: 'menu.chiefAdviser',
		items: [
			{ title: 'Message', key: 'menu.message', href: ROUTES.ADVISER.MESSAGE },
			{ title: 'Biography', key: 'menu.biography', href: ROUTES.ADVISER.BIOGRAPHY },
			{ title: 'Speeches', key: 'menu.speeches', href: ROUTES.ADVISER.SPEECHES },
			{
				title: 'Former Chief Advisers',
				key: 'menu.formerAdvisers',
				href: ROUTES.ADVISER.FORMER_ADVISERS,
			},
		],
	},
	{
		title: 'WHO WE ARE',
		key: 'menu.whoWeAre',
		items: [
			{
				title: 'CHIEF ADVISER’S OFFICE',
				key: 'pmo',
				items: [
					{
						key: 'menu.ourTeam',
						items: [
							{ title: 'Secretariat Wing', key: 'ourTeam.secretariatWing', href: '#' },
							{ title: 'Personal Wing', key: 'ourTeam.personalWing', href: '#' },
							{ title: 'Press Wing', key: 'ourTeam.pressWing', href: '#' },
							{ title: 'Hon’ble Adviser', key: 'ourTeam.honourableAdviser', href: '#' },
							{
								title: 'Special Assistant/ Special Envoy/ Principal Coordinator',
								key: 'ourTeam.specialAssistant',
								href: '#',
							},
							{ title: 'Specialized Unit', key: 'ourTeam.specializedUnit', href: '#' },
							{
								title: 'Governance Innovation Unit (GIU)',
								key: 'ourTeam.governanceInnovationUnit',
								href: '#',
							},
							{ title: 'ASRAYN-2', key: 'ourTeam.asrayn2', href: '#' },
							{
								title: 'Sub-Regional Co-operation Cell (SRCC)',
								key: 'ourTeam.subRegionalCooperationCell',
								href: '#',
							},
							{
								title: 'Moheskhali-Matarbari Integrated Infrastructure Development Initiative (MIDI)',
								key: 'ourTeam.midi',
								href: '#',
							},
							{ title: 'Our Team', key: 'ourTeam.allOfficers', href: ROUTES.WHO_WE_ARE.OUR_TEAM },
						],
					},
					{
						key: 'menu.subordinateOffice',
						items: [
							{ key: 'subordinateOffice.pepz', href: '#', isExternal: true },
							{ key: 'subordinateOffice.ngo', href: '#', isExternal: true },
							{ key: 'subordinateOffice.beza', href: '#', isExternal: true },
							{ key: 'subordinateOffice.bepz', href: '#', isExternal: true },
							{ key: 'subordinateOffice.bida', href: '#', isExternal: true },
							{ key: 'subordinateOffice.pppa', href: '#', isExternal: true },
							{ key: 'subordinateOffice.nsda', href: '#', isExternal: true },
							{ key: 'subordinateOffice.ssf', href: '#', isExternal: true },
							{ key: 'subordinateOffice.nsi', href: '#', isExternal: true },
						],
					},
				],
			},
			{ title: 'WEB MAIL', key: 'menu.webMail', href: ROUTES.WHO_WE_ARE.WEB_MAIL },
			{ title: 'Advisery Council', key: 'menu.cabinetMember', href: ROUTES.WHO_WE_ARE.CABINET },
			{
				title: 'MISSION AND VISION',
				key: 'menu.missionAndVision',
				href: ROUTES.WHO_WE_ARE.MISSION_AND_VISION,
			},
		],
	},
	{
		title: 'WHAT WE DO',
		key: 'menu.whatWeDo',
		items: [
			{ title: 'WHAT WE DO', key: 'menu.whatWeDo', href: '#' },
			{
				title: 'PROGRAMS AND PRIORITIES',
				key: 'menu.programsAndPriorities',
				items: [
					{ title: 'PROJECTS', key: 'menu.projects', href: PROGRAMS },
					{ title: 'PROGRAMS', key: 'menu.programs', href: PROGRAMS },
					{ title: 'PRIORITIES', key: 'menu.priorities', href: PROGRAMS },
				],
			},
			{
				title: 'NEWS',
				key: 'menu.news',
				items: [
					{ title: 'SOCIAL MEDIA', key: 'menu.socialMedia', href: '#' },
					{ title: 'NEWS', key: 'menu.news', href: NEWS },
					{ title: 'ARCHIVED NEWS', key: 'menu.archivedNews', href: NEWS },
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
				items: [
					{ key: 'menu.policyDocuments', href: POLICY },
					{ key: 'menu.forms', href: '' },
				],
			},
			{
				title: 'MEDIA',
				key: 'menu.media',
				items: [
					{
						key: 'menu.mediaGallery',
						items: [
							{ title: 'Photo', key: 'menu.photoGallery', href: '/news-media/photo-gallery' },
							{ title: 'Video', key: 'menu.videoGallery', href: '/news-media/video-gallery' },
						],
					},
					{ title: 'Archive Gallery', key: 'menu.archivedGallery', href: '#' },
				],
			},
			{
				title: 'PUBLICATIONS',
				key: 'menu.publications',
				items: [
					{
						title: 'REPORTS & STATS',
						key: 'menu.reportsStats',
						items: [
							{ title: 'REPORTS', key: 'menu.reports', href: REPORTS },
							{ title: 'STATISTICS', key: 'menu.statistics', href: '#' },
						],
					},
				],
			},
		],
	},
	{
		title: 'Notice',
		key: 'menu.notice',
		items: [
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
];
