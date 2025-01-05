import { axiosIns } from '@/config/axios';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useNewsList = (limit: number = 6) => {
	return useInfiniteQuery({
		queryKey: ['news-list'],
		queryFn: async ({ pageParam }) => {
			const response = await axiosIns.get(
				`/get-news-event-list?newsType=news&pageNumber=${pageParam || 1}&pageSize=${limit}`
			);
			return response.data;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, _) => {
			if (lastPage.totalRecords > lastPage.pageSize * lastPage.pageNumber) {
				return lastPage.pageNumber + 1;
			}
			return undefined;
		},
	});
};

export const useSpeechList = (limit: number = 6) => {
	return useInfiniteQuery({
		queryKey: ['speech-list'],
		queryFn: async ({ pageParam }) => {
			const response = await axiosIns.get(
				`/get-advisor-speech?pageNumber=${pageParam || 1}&pageSize=${limit}`
			);
			return response.data;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, _) => {
			if (lastPage.totalRecords > lastPage.pageSize * lastPage.pageNumber) {
				return lastPage.pageNumber + 1;
			}
			return undefined;
		},
	});
};
