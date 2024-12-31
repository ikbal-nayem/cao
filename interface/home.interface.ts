import { IFile } from './common.interface';

export interface ISubordinateOffice {
	id: number;
	serial_no: number;
	title_bn: string;
	title_en: string;
  external_url: string;
	logo: IFile[];
}
