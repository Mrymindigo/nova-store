'use client'

import { LuSearch } from 'react-icons/lu';
import type { SearchInputProps } from '../../types/search';
import { Wrapper, Input } from './style';

export default function SearchInput({ value, onChange, placeholder, ariaLabel }: SearchInputProps) {
    return (
        <Wrapper>
            <LuSearch aria-hidden="true" />
            <Input
                type={"search"}
                value={value}
                placeholder={placeholder}
                aria-label={ariaLabel}
                onChange={(event) => onChange(event.target.value)}
            />
        </Wrapper>
    );
}