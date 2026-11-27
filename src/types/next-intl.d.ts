import type { Dictionary } from '../dictionary';

declare module 'next-intl' {
    interface AppConfig {
        Messages: Dictionary;
    }
}