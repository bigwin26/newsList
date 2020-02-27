import { useState } from "react";
import { useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  console.log(promiseCreator());

  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
  }, deps);
  return [loading, resolved, error];
}
