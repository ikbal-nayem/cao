import { IFile } from './common.interface';

export interface ICabinetMembers {
	id: number;
	pos_sl: number;
	name_bn: string;
	name_en: string;
	designation_bn: string;
	designation_en: string;
	ministry_list: {
		id: number;
		ministry_name_bn: string;
		ministry_name_en: string;
		external_url: string;
	}[];
	image_det: IFile[];
}
