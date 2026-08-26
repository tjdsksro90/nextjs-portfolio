// src/hooks/useDeferredLoading.ts
import { useState, useEffect } from 'react';

/**
 * 로딩 상태가 특정 시간(delay) 이상 지속될 때만 true를 반환하여
 * 순간적인 로딩바 깜빡임을 방지하는 커스텀 훅
 */
export const useDeferredLoading = (isLoading: boolean, delay = 200) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowLoading(true), delay);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [isLoading, delay]);

  return showLoading;
};
