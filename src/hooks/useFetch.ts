import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) : [T | null, Error | null, boolean] => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url, {signal: abortController.signal});
                if (!res.ok) throw Error("invalid response");
                const payload = await res.json();
                setData(payload);
            } catch (error) {
                if (error.name === 'AbortError') return;
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            abortController.abort();
        }
    }, [url])

    return [data, error, loading];
}