import dotenv from 'dotenv';

const envName = process.env.E2E_ENV || 'dev';

dotenv.config({
  path: `.env.${envName}`
});

console.log('🧪 Running E2E tests on environment:', envName);
console.log('🌍 Base URL:', process.env.E2E_BASE_URL);

export function requireEnv(name: string): string {
  const value = process.env[name];

  if(!value) {
    throw new Error(`Environment variable ${name} is required but not set.`);
  }
  return value;
}

export const ENV = {
  E2E_BASE_URL: requireEnv('E2E_BASE_URL'),
};
