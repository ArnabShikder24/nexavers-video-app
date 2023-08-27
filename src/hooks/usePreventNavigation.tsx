import { notification } from 'antd';
import { useEffect } from 'react';

const usePreventNavigation = (message = `Woops, you are not allowed to go back!`) => {
  useEffect(() => {
    const handlePreventNavigation = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = message;
    };

    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('beforeunload', handlePreventNavigation);

    window.onpopstate = function () {
      notification.info({
        message: message || "Sorry, you cannot go back.",
      });
      window.history.pushState(null, document.title, window.location.href);
    };

    return () => {
      window.removeEventListener('beforeunload', handlePreventNavigation);
      window.onpopstate = () => {return};
    };
  }, [message]);
};

export default usePreventNavigation;
