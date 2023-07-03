export const ADMIN_PRODUCTION =
    process.env.NEXT_PUBLIC_ADMIN_PRODUCTION === undefined
        ? true
        : process.env.NEXT_PUBLIC_ADMIN_PRODUCTION === 'true'
        ? true
        : false;
export const LIFF_PRODUCTION =
    process.env.NEXT_PUBLIC_LIFF_PRODUCTION === undefined
        ? true
        : process.env.NEXT_PUBLIC_LIFF_PRODUCTION === 'true'
        ? true
        : false;
export const WEB_PRODUCTION =
    process.env.NEXT_PUBLIC_WEB_PRODUCTION === undefined
        ? true
        : process.env.NEXT_PUBLIC_WEB_PRODUCTION === 'true'
        ? true
        : false;
