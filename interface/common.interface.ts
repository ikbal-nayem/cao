export interface IObject {
	[key: string]: string | number | boolean | any;
}

export interface IFile {
	id: number;
	orgfilename: string;
	contenttype: string;
	filesize: number;
	filepath: string;
	relativepath: string;
}
