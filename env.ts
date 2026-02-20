import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const envName = process.env.E2E_ENV || 'dev';
const envFile = `.env.${envName}`;

const envPath = path.resolve(process.cwd(), envFile);

if (!fs.existsSync(envPath)) {
  throw new Error(`❌ Environment file not found: ${envFile}`);
}

dotenv.config({ path: envPath });

export function requireEnv(name: string): string {
  const value = process.env[name];
  if(!value){
    throw new Error(`❌ Missing required environment variable: ${name}`);
  }
  return value;
}

export const ENV = {
  E2E_ENV_NAME: envName,
  E2E_BASE_URL: requireEnv('E2E_BASE_URL'),
  E2E_USERNAME: requireEnv('E2E_USERNAME'),
  E2E_PASSWORD: requireEnv('E2E_PASSWORD'),
} as const;

console.log(`🧪 Running E2E tests on environment: ${ENV.E2E_ENV_NAME}`);
console.log(`🌍 Base URL: ${ENV.E2E_BASE_URL}`);
console.log(`Loaded BASE URL: `, process.env.E2E_BASE_URL);
