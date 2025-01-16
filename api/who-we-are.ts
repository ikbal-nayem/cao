import { axiosIns } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useSubordinateOfficeList = () => {
	return useQuery({
		queryKey: ['subordinate-office-list'],
		queryFn: async () => {
			const response = await axiosIns.get(`/get-subordinate-office-list`);
			return response.data;
		},
		staleTime: 60 * 60 * 60 * 1000,
	});
};
