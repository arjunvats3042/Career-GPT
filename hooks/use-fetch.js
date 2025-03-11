// import { useState } from "react";
// import { toast } from "sonner";

// const useFetch = (cb) => {
//   const [data, setData] = useState(undefined);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   const fn = async (...args) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await cb(...args);
//       setData(response);
//       setError(null);
//     } catch (error) {
//       setError(error);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, fn, setData };
// };

// export default useFetch;


import {useState, useCallback} from "react";
import {toast} from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(null); // Initialize as null for clarity
  const [loading, setLoading] = useState(false); // Initialize as false
  const [error, setError] = useState(null);

  const fn = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      setData(null); // Reset data on new request

      try {
        const response = await cb(...args);

        // Check if response indicates failure (adjust based on your server's response structure)
        if (response && typeof response === "object" && !response.success) {
          throw new Error(response.error || "Request failed");
        }

        setData(response); // Set data only on success
        return response; // Return for downstream use
      } catch (error) {
        setError(error.message);
        toast.error(error.message || "An unexpected error occurred");
        throw error; // Re-throw to allow caller to handle
      } finally {
        setLoading(false);
      }
    },
    [cb]
  );

  return {data, loading, error, fn, setData};
};

export default useFetch;