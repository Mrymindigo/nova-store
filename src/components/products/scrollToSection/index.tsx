'use client';

import { useEffect, useRef } from 'react';

interface ScrollToSectionProps {
    targetId: string;
    trigger: string;
}

export default function ScrollToSection({ targetId, trigger }: ScrollToSectionProps) {
    const previousTrigger = useRef(trigger);

    useEffect(() => {
        if (previousTrigger.current === trigger) return;
        previousTrigger.current = trigger;

        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [trigger, targetId]);

    return null;
}