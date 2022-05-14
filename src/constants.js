import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Quilon Agri Products`;

    return () => {
      document.title = prevTitle;
    };
  }, []);
};

export { useTitle };
