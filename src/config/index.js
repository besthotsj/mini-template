import { ENV } from './env';
import { TEST } from './test';
import { PRO } from './pro';

const NODE_ENV = process.env.NODE_ENV;

// console.log('当前环境--->', NODE_ENV)

const config = {
  baseUrl: 'xx.xxx.xx',
};

switch (NODE_ENV) {
  case 'production':
    config.baseUrl = PRO.baseUrl;
    break;
  case 'development':
    config.baseUrl = ENV.baseUrl;
    break;
  case 'test':
    config.baseUrl = TEST.baseUrl;
    break;
  default:
    break;
}

export default config;
