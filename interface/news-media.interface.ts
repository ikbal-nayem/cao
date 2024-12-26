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

export interface IImageGallery {
	id: number;
	caption_bn: string;
	caption_en: string;
	file_path: IFile[];
	thumbnail_path: IFile[];
}
