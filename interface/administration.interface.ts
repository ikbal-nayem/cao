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

export interface IStaffMember {
	id: number;
	name_bn: string;
	name_en: string;
	designation_bn: string;
	designation_en: string;
	office_bn: string;
	office_en: string;
	contact_no: string;
	email: string;
	serial_no: number;
	staff_group_id: number;
	responsibility_details_en: string;
	responsibility_details_bn: string;
	photo_path: IFile[];
}

export interface IOurStaffs {
	id: number;
	pos_sl: number;
	group_name_bn: string;
	group_name_en: string;
	staff_list: IStaffMember[];
}
