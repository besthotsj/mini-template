# mini-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### 接口调用
import { login } from '@/api/login.js';
async onLoad() {
    const res = await login(
      {
        scenicCode: this.scenicCode,
        checkType: this.vType, //TICKET：票核销，YEAR_CARD：年卡核销
        id: this.inputContent, //票号/身份证/取票码
      },
      { loading: '请稍后...' }
    );
  },
