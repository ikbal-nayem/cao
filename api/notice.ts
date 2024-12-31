import { axiosIns } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useNoticeList = (
	page: number = 1,
	limit: number = 6,
	searchKey: string = '',
	category: string = ''
) => {
	return useQuery({
		queryKey: ['notice-list', page, category, searchKey],
		queryFn: async () => {
			const response = await axiosIns.get(
				`/get-notice-list?pageNumber=${page || 1}&pageSize=${limit}&searchByTitle=${searchKey}&noticeType=${
					category || ''
				}`
			);
			return response.data;
		},
	});
};

export const useTanderList = (
	page: number = 1,
	limit: number = 6,
	type: string = '',
	searchKey: string = ''
) => {
	return useQuery({
		queryKey: ['tender-list', page, type, searchKey],
		queryFn: async () => {
			const response = await axiosIns.get(
				`/get-tender-list?pageNumber=${page || 1}&pageSize=${limit}&searchByTitle=${searchKey}&tenderType=${
					type || 'all'
				}`
			);
			return response.data;
		},
	});
};
