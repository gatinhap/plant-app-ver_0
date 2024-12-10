import theme from './theme/theme.ts';

type CustomTheme = typeof theme;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

if (
  import.meta.env.MODE === 'development' &&
  import.meta.env.VITE_MSW === 'true'
) {
  await import('./config/setupWorker.ts').then(({ worker }) => worker.start());
}
