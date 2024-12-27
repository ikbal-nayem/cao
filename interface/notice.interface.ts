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
