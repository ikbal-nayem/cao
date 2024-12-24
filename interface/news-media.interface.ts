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
		thumbnail_path: {
			id: number;
			orgfilename: string;
			contenttype: string;
			filesize: number;
			filepath: string;
			relativepath: string;
		}[];
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
		image_path: {
			id: number;
			orgfilename: string;
			contenttype: string;
			filesize: number;
			filepath: string;
			relativepath: string;
		}[];
		thumbnail_path: {
			id: number;
			orgfilename: string;
			contenttype: string;
			filesize: number;
			filepath: string;
			relativepath: string;
		}[];
	}[];
}
