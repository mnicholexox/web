import { useState, useEffect, useCallback } from 'react';
import { isAdminMode as checkAdminMode, setAdminMode as persistAdminMode } from '@/lib/adminStorage';

/**
 * Hook to manage admin mode state
 * 
 * Admin mode is enabled when:
 * - URL contains ?admin=1
 * - localStorage.joydrop_admin === "true"
 * 
 * @returns Admin mode state and control functions
 */
export const useAdminMode = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin status on mount and URL changes
  useEffect(() => {
    const checkStatus = () => {
      setIsAdmin(checkAdminMode());
    };

    checkStatus();

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', checkStatus);
    
    return () => {
      window.removeEventListener('popstate', checkStatus);
    };
  }, []);

  const enableAdmin = useCallback(() => {
    persistAdminMode(true);
    setIsAdmin(true);
  }, []);

  const disableAdmin = useCallback(() => {
    persistAdminMode(false);
    setIsAdmin(false);
  }, []);

  const toggleAdmin = useCallback(() => {
    if (isAdmin) {
      disableAdmin();
    } else {
      enableAdmin();
    }
  }, [isAdmin, enableAdmin, disableAdmin]);

  return {
    isAdmin,
    enableAdmin,
    disableAdmin,
    toggleAdmin,
  };
};
