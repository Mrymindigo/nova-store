const required = (value: string | undefined, name: string): string => {
    if (!value) throw new Error(`Missing environment variable: ${name}`);
    return value;
};

export const env = {
    apiBaseUrl: required(process.env.NEXT_PUBLIC_API_BASE_URL, 'NEXT_PUBLIC_API_BASE_URL'),
    siteUrl: required(process.env.NEXT_PUBLIC_SITE_URL, 'NEXT_PUBLIC_SITE_URL'),
};