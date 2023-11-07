import { Inter, Lusitana } from 'next/font/google';
import { string } from 'zod';

export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
});