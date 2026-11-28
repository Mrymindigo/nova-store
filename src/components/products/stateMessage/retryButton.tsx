'use client';

import { useRouter } from 'next/navigation';
import { RetryButtonStyled } from './style';

export default function RetryButton({ label }: { label: string }) {
    const router = useRouter();

    return (
        <RetryButtonStyled type="button" onClick={() => router.refresh()}>
            {label}
        </RetryButtonStyled>
    );
}