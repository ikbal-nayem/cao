import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const makePreviewURL = (url: string) => {
	if (!url) return;
	return 'http://admin-stage.cao.gov.bd' + url;
};

export const formatFileSize = (bytes: number, decimalPoint?: number) => {
	if (bytes == 0) return '0 Bytes';
	var k = 1000,
		dm = decimalPoint || 2,
		sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
