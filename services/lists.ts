import axios from 'axios';
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

// 2. 전체 개수 파악용
export const getTotalCount = async () => {
  const response = await apiClient.post(API_ENDPOINTS.PROJECTS.LIST, {
    isTotalCount: true,
  });

  return response.data.results.length;
};

// 3. 단일 상세 데이터 불러오기
export const getListItem = async (title: string) => {
  const response = await apiClient.get(API_ENDPOINTS.PROJECTS.ITEM, {
    params: { title },
  });

  return response.data; // { pagesData: {...}, blocksData: [...] }
};
