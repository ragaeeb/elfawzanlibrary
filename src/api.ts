import { URL, URLSearchParams } from 'node:url';

export const doGetRequest = async <T extends Record<string, any>>(
    endpoint: string,
    queryParams: Record<string, any> = {},
): Promise<T> => {
    const url = new URL(`https://elfawzanlibrary.net/api/${endpoint}`);

    if (Object.keys(queryParams).length > 0) {
        const params = new URLSearchParams();

        Object.entries(queryParams).forEach(([key, value]) => {
            params.append(key, value.toString());
        });

        url.search = params.toString();
    }

    const response = await fetch(url);
    return response.json();
};
