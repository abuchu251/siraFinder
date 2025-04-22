import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllJobs } from "../../services/apiJobs";

function useJobs() {
  const {
    isLoading,
    data: jobs,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
  });
  return { isLoading, jobs, error };
}

export default useJobs;
