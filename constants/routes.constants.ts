export const NEWS_MEDIA = '/news-media';
export const NEWS = NEWS_MEDIA + '/news/';

export const PROGRAMS = '/who-we-are/programs';

export const NOTICE = '/tenders-notice/notices';
export const OPEN_TENDER = '/tenders-notice/open-tenders';
export const ARCHIVE_TENDER = '/tenders-notice/archive-tenders';

export const POLICY = '/who-we-are/documents/policy';
export const REPORTS = '/who-we-are/documents/reports';


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
    CABINET: '/who-we-are/cabinet',
    MISSION_AND_VISION: '/who-we-are/mission-and-vision',
    PROGRAMS: '/who-we-are/programs',
    DOCUMENTS: {
      POLICY: '/who-we-are/documents/policy',
      REPORTS: '/who-we-are/documents/reports'
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
    ADDRESS: '/contact/address',
    WEB_MAIL: '#',
  },

  // External Links
  EXTERNAL: {
    BEPZA: 'https://www.bepza.gov.bd',
    BIDA: 'https://bida.gov.bd',
    PPPA: 'https://www.pppo.gov.bd'
  },
};