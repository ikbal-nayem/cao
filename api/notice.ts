import { axiosIns } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useNoticeList = (page: number = 1, limit: number = 6) => {
	return useQuery({
		queryKey: ['notice-list', page],
		queryFn: async () => {
			const response = await axiosIns.get(`/get-notice-list?pageNumber=${page || 1}&pageSize=${limit}`);
			return response.data;
		},
	});
};
