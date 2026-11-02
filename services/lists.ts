import { apiClient } from './client';
import { API_ENDPOINTS } from '@/config/api';

// 1. 리스트 불러오기
export const getLists = async (cursor?: string) => {
  const response = await apiClient.post(API_ENDPOINTS.PROJECTS.LIST, {
    cursor,
    isTotalCount: false,
  });

  return response.data; // { results: [...], next_cursor: "...", has_more: true/false }
};

// 2. 전체 목록 (작업기간 최신순) - 홈 대표 작업, 다음 프로젝트, 전체 개수에 사용
export const getAllProjects = async () => {
  const response = await apiClient.post(API_ENDPOINTS.PROJECTS.LIST, {
    isTotalCount: true,
  });

  return response.data.results;
};

// 3. 단일 상세 데이터 불러오기
export const getListItem = async (title: string) => {
  const response = await apiClient.get(API_ENDPOINTS.PROJECTS.ITEM, {
    params: { title },
  });

  return response.data; // { pagesData: {...}, blocksData: [...] }
};
