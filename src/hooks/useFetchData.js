import { useState, useEffect } from "react";

export const useFetchData = ({ key, action }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const actionData = await (action);
        setData(actionData);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [data, setData, isLoaded, isError];
}
