// Type definitions for shiki

declare module 'shiki/langs' {
  import type { Lang } from 'shiki';
  
  const langs: {
    [key: string]: () => Promise<Lang>;
  };
  
  export const bundledLanguages: Record<string, () => Promise<Lang>>;
  
  export default langs;
}
