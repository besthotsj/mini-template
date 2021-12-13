module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-alert': 0, //禁止使用alert confirm prompt
    'no-bitwise': 0, //禁止使用按位运算符
    'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    // "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
    // "no-empty": 2,//块语句中的内容不能为空
    'no-eval': 1, //禁止使用eval
    'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
    'no-extra-bind': 2, //禁止不必要的函数绑定
    'no-extra-semi': 2, //禁止多余的冒号
    'no-extra-parens': 2, //禁止非必要的括号
    'no-fallthrough': 1, //禁止switch穿透
    'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3.
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implicit-coercion': 1, //禁止隐式转换
    // "no-lonely-if": 2,//禁止else语句内只有if语句
    'no-mixed-spaces-and-tabs': [2, false], //禁止混用tab和空格
    'linebreak-style': [0, 'windows'], //换行风格
    'no-multi-spaces': 1, //不能用多余的空格
    // "no-nested-ternary": 0,//禁止使用嵌套的三目运算
    'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
    'no-self-compare': 2, //不能比较自身
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 2, //一行结束后面不要有空格
    'no-this-before-super': 0, //在调用super()之前不能使用this或super
    'no-throw-literal': 2, //禁止抛出字面量错误 throw "error";
    // "no-undef": 2,//不能有未定义的变量
    'no-underscore-dangle': 0, //标识符不能以_开头或结尾
    'no-unreachable': 2, //不能有无法执行的代码
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    // "no-use-before-define": 2,//未定义前不能使用
    'no-var': 2, //禁用var，用let和const代替
    'no-with': 2, //禁用with
    'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
    // "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'max-params': [0, 5], //函数最多只能有5个参数
    camelcase: 2, //强制驼峰法命名
    // "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    'consistent-this': [2, 'that'], //  this别名 只能是that
    'constructor-super': 2, //非派生类不能调用super，派生类必须调用super
    // "default-case": 2,//switch语句最后必须有default
    // "eqeqeq": 2,//必须使用全等
    // "func-names": 2,//函数表达式必须有名字
    'object-shorthand': 2, //强制对象字面量缩写语法
    'key-spacing': [2, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    // "quotes": [2, "single"],//引号类型 `` "" ''
    'id-match': 0, //命名检测
    'semi-spacing': [0, { before: false, after: true }], //分号前后空格
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  // 下面全局变量不检测
  globals: {
    _: false,
    $: false,
    jquery: false,
    uni: false,
    arguments: false,
    wx: false,
  },
};
