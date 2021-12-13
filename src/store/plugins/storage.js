import storeKeys from '../localStorageKeys';

export default function (store) {
  // 初始化，获取存储中值设置到store内
  Object.keys(storeKeys).forEach(mutation => {
    const storeKey = storeKeys[mutation];
    const value = uni.getStorageSync(storeKey);
    if (value) store.commit(mutation, value);
  });
  store.subscribe(mutation => {
    const { type, payload } = mutation;
    const storeKey = storeKeys[type];
    if (storeKey) uni.setStorageSync(storeKey, payload);
  });
}
