import { useEffect, useCallback, useRef } from 'react';

const useInfiniteScroll = (callback, hasMore, loading) => {
  const observer = useRef();
  
  const lastElementRef = useCallback((node) => {
    if (loading) return;
    
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        callback();
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    });
    
    if (node) {
      observer.current.observe(node);
    }
  }, [loading, hasMore, callback]);

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return lastElementRef;
};

export default useInfiniteScroll;

