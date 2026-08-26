import axios from 'axios';
import { apiClient } from './client';
import { API_ENDPOINTS } from '@/constants/api';

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
