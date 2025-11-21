export default () => ({
  environment: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
});
