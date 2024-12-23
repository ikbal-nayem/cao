export interface INewsList {
	id: number;
	title_bn: string;
	title_en: string;
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
		}[];
		thumbnail_path: {
			id: number;
			orgfilename: string;
			contenttype: string;
			filesize: number;
			filepath: string;
		}[];
	}[];
}
