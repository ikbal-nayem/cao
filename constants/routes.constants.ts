export const NEWS_MEDIA = '/news-media';
export const NEWS = NEWS_MEDIA + '/news/';
export const SPEECHES = NEWS_MEDIA + '/speeches';

export const FORMER_ADVISERS = '/administration/former-chief-advisers';

export const CABINET = '/administration/cabinet';
export const ORGANIZATION_STRUCTURE = '/administration/organization-structure';
export const PROGRAMS = '/administration/programs';

export const NOTICE = '/tenders-notice/notices';
export const OPEN_TENDER = '/tenders-notice/open-tenders';
export const ARCHIVE_TENDER = '/tenders-notice/archive-tenders';

export const POLICY = '/administration/documents/policy';
export const REPORTS = '/administration/documents/reports';


export const ROUTES = {
  // Chief Adviser
  ADVISER: {
    MESSAGE: '/chief-adviser/message',
    BIOGRAPHY: '/chief-adviser/biography',
    SPEECHES: '/news-media/speeches',
    FORMER_ADVISERS: '/chief-adviser/former-chief-advisers'
  },

  // Who we are
  WHO_WE_ARE: {
    OUR_TEAM: '/our-team',
    CABINET: '/administration/cabinet',
    MISSION_AND_VISION: '/administration/mission-and-vision',
    WEB_MAIL: '#',
    PROGRAMS: '/administration/programs',
    DOCUMENTS: {
      POLICY: '/administration/documents/policy',
      REPORTS: '/administration/documents/reports'
    }
  },

  // News & Media
  NEWS_MEDIA: {
    NEWS: '/news-media/news',
    SPEECHES: '/news-media/speeches',
    PHOTO_GALLERY: '/news-media/photo-gallery',
    VIDEO_GALLERY: '/news-media/video-gallery'
  },

  // Notice & Tenders
  NOTICE: {
    ALL: '/tenders-notice/notices',
    OPEN_TENDERS: '/tenders-notice/open-tenders',
    ARCHIVE_TENDERS: '/tenders-notice/archive-tenders'
  },

  // Contact
  CONTACT: {
    MAIN: '/contact',
    FAQ: '/contact/faq',
    FEEDBACK: '/contact/feedback',
    ADDRESS: '/contact/address'
  },

  // External Links
  EXTERNAL: {
    BEPZA: 'https://www.bepza.gov.bd',
    BIDA: 'https://bida.gov.bd',
    PPPA: 'https://www.pppo.gov.bd'
  },
};