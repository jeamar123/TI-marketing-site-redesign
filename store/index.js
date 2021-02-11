const development = process.env.NODE_ENV !== 'production';

const baseUrl = development
  ? 'https://dev.exploitcon.com'
  : window.location.origin;

export const state = () => ({
  baseUrl,
});