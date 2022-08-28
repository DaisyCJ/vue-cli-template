module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // prettier规则设置
    // 'prettier/prettier': [
    //   'error',
    //   {},
    //   {
    //     fileInfoOptions: {
    //       usePrettierrc: true
    //     }
    //   }
    // ],

    // vue属性，单行最多书写10个，多行书写时，每行一个属性
    // 'vue/max-attributes-per-line': [
    //   2,
    //   {
    //     singleline: 10,
    //     multiline: {
    //       max: 10,
    //       allowFirstLine: true
    //     }
    //   }
    // ],

    // vue组件，html标签自闭合(off)
    'vue/html-self-closing': 0,

    // 声明的变量需要使用：本地、全局变量(on)，参数(off)
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],

    // switch case中不能定义变量(off)
    'no-case-declarations': 0,

    // vue组件属性名必须驼峰(off)
    'vue/name-property-casing': 0
  }
}
