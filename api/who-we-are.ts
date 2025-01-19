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

export const useOurTeamGrpList = () => {
	return useQuery({
		queryKey: ['our-team-grp-list'],
		queryFn: async () => {
			const response = await axiosIns.get(`/get-staff-group`);
			return response.data;
		},
		staleTime: 60 * 60 * 60 * 1000,
	});
};

export const useOurTeamList = () => {
	return useQuery({
		queryKey: ['our-team-list'],
		queryFn: async () => {
			const response = await axiosIns.get(`/get-staff`);
			return response.data;
		},
		staleTime: 60 * 60 * 60 * 1000,
	});
};
