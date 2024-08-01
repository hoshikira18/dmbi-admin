'use client';
import { getAuth } from '@/store/auth-store';
const TokenDisplay = () => {
    const { token } = getAuth();
    console.log(token);
    return <div>Token page</div>;
};
export default TokenDisplay;
