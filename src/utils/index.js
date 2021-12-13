/**
 * 获取数据类型
 * @param {any} data  需要检测的数据
 */
export const getDataType = data => {
  if (arguments.length === 0) return new Error('type方法未传参');
  const typeStr = Object.prototype.toString.call(data);
  return typeStr.match(/\[object (.*?)\]/)[1].toLowerCase();
};

/**
 * 获取缓存数据
 * @param {string} key 查询key
 * @param {Boolean} formatData  是否需要序列化
 */
export const getStorage = (key, formatData = true) => {
  try {
    let res = uni.getStorageSync(key);
    if (formatData) {
      res = JSON.parse(res);
    }
    return res;
  } catch (e) {
    return false;
  }
};

/**
 * 设置缓存数据
 * @param {String} key
 * @param {String} value
 */
export const setStorage = (key = '', value = '') => {
  if (key === '' || value === '' || !key || !value) return new Error('传入参数错误');
  if (getDataType(value) !== 'string') {
    value = JSON.stringify(value);
  }
  try {
    uni.setStorageSync(key, value);
  } catch (e) {
    return new Error(e);
  }
};

/**
 * 清空本地所有缓存
 */
export const clearStorage = () => {
  try {
    uni.clearStorageSync();
  } catch (e) {
    return new Error(e);
  }
};

/**
 * 删除指定缓存
 * @param {Array} key
 */
export const removeStorage = keyList => {
  try {
    keyList.forEach(k => {
      uni.removeStorageSync(k);
    });
  } catch (e) {
    return new Error(e);
  }
};
