import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default {
    plugins: [tailwind()],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: 'var(--color-bg)',
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    accent: 'var(--color-accent)',
                }
            },
            fontFamily: {
                heading: 'var(--font-heading)',
                mono: 'var(--font-mono)',
            },
            borderRadius: {
                client: 'var(--radius-custom)',
            }
        },
    },
};
