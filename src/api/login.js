import { ApiPost } from '@/utils/request';

/**
 * 登录 获取 token
 * @param {any} data 请求参数
 */
export const login = (data, options) => ApiPost('/auth/social/token', data, options);
