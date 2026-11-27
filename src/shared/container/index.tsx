import type { ReactNode } from 'react';
import { Wrapper } from './style';

export default function Container({ children }: { children: ReactNode }) {
    return <Wrapper>{children}</Wrapper>;
}