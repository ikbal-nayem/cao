import { axiosIns } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';
import { Router } from 'next/router';

export const useNewsList = (page: number = 1, limit: number = 6) => {
	return useQuery({
		queryKey: ['news-list', limit],
		queryFn: async () => {
			Router.events.emit('routeChangeStart');
			const response = await axiosIns.get(`/get-news-event-list?pageNumber=${page}&pageSize=${limit}`);
			Router.events.emit('routeChangeComplete');
			return response.data?.data;
		},
	});
};
