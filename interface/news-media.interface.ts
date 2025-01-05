import { IFile } from './common.interface';

export interface INewsList {
	id: string;
	title_bn: string;
	title_en: string;
	news_category: string;
	news_type: string;
	content_bn: string;
	content_en: string;
	news_date: string;
	newsitem: {
		id: number;
		thumbnail_path: IFile[];
	}[];
}

export interface INewsDetails {
	id: string;
	title_bn: string;
	title_en: string;
	news_category: string;
	news_type: string;
	content_bn: string;
	content_en: string;
	news_date: string;
	attachment: [];
	newsitem: {
		id: number;
		image_caption_bn: string;
		image_caption_en: string;
		image_path: IFile[];
		thumbnail_path: IFile[];
	}[];
}

export interface ISpeech {
	id: number;
	title_bn: string;
	title_en: string;
	speech_bn: string;
	speech_en: string;
	speech_date: string;
	youtube_link: string;
	document: IFile[];
	thumbnail: IFile[];
}

export interface IImageGallery {
	id: number;
	caption_bn: string;
	caption_en: string;
	file_path: IFile[];
	thumbnail_path: IFile[];
}

export interface IVideoGallery {
	id: number;
	title_bn: string;
	title_en: string;
	caption_bn: string;
	caption_en: string;
	file_path: (IFile & {
		upload_date: string;
		caption_bn: string;
		caption_en: string;
	})[];
}
