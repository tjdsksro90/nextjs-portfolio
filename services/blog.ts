import { apiClient } from './client';
import { API_ENDPOINTS } from '@/config/api';

// 블로그(티스토리 RSS) 글 목록 불러오기
export const getBlogPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get(API_ENDPOINTS.BLOG);

  return response.data.posts;
};
