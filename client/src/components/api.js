import useSWR from "swr";

export const GetData = (link) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(link, fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
  };
};
