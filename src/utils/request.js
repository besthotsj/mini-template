import store from '@/store';
import { clearStorage } from './index';
import config from '@/config';
const baseURL = config.baseUrl;
const getData = response => response.data;

/**
 * 封装基础请求
 * @param {String} url 接口地址
 * @param {Object/String/ArrayBuffer} data 请求参数
 * @param {String} method 请求方式
 * @param {Object} option
 * loading {String} 加载中文字
 *  customDealErr {Boolean} 异常处理  true -> 调用者处理   false -> 封装中处理一次
 * @returns {Promise<any>}
 */
const request = (url, data, method, option) => {
  return new Promise((resolve, reject) => {
    // 如果需要 loading
    if (option.loading) {
      uni.showLoading({
        title: option.loading,
      });
    }

    // 组装请求对象
    const requestObj = {
      data,
      method,
      header: {},
    };

    if (method === 'POST') {
      requestObj.header = {
        'content-type': 'application/json',
      };
    }
    requestObj.url = baseURL + url; // url 组装
    requestObj.success = res => {
      if (res.statusCode === 200) {
        resolve(getData(res));
        return;
      }

      if (res.statusCode === 401) {
        // token 失效
        clearStorage(); // 清空缓存
        uni.reLaunch({
          url: '../login/index',
        });
      }

      if (res && !option.customDealErr) {
        // 业务错误
        uni.showToast({
          title: res.data.message,
          duration: 2000,
          icon: 'none',
        });
      }
      reject(res);
    };

    requestObj.fail = err => {
      reject(err);
    };

    requestObj.complete = () => {
      if (option.loading) uni.hideLoading();
    };

    if (url.includes('/auth/')) {
      requestObj.header.Authorization = 'Basic dG91cjp0b3Vy';
      requestObj.header['content-type'] = 'application/x-www-form-urlencoded';
    } else if (url.includes('/getUserInfo')) {
      requestObj.header['content-type'] = 'application/x-www-form-urlencoded';
      requestObj.header.Authorization = 'Bearer ' + store.state.auth.token;
    } else {
      /**
       * 业务接口使用
       */
      requestObj.header.Authorization = 'Bearer ' + store.state.auth.token;
    }

    uni.request(requestObj);
  });
};

// 导出基础 API
export const ApiGet = (url, data, option = {}) => {
  request(url, data, 'GET', option);
};
export const ApiPost = (url, data, option = {}) => {
  request(url, data, 'POST', option);
};
