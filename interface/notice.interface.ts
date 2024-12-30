import { IFile } from './common.interface';

export interface INotice {
	id: number;
	title_bn: string;
	title_en: string;
	notice_type: string;
	description_bn: string;
	description_en: string;
	notice_date: string;
	document: IFile[];
}

export interface ITender {
	id: number;
	tender_type: string;
	title_bn: string;
	title_en: string;
	reference: string;
	publish_date: string;
	closing_date: string;
	budget: string;
	description_bn: string;
	description_en: string;
	document: IFile[];
}
