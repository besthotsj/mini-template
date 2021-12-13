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
        params: 'params',
      },
      { loading: '请稍后...' }
    );
  },
