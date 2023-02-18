module.exports = {
  extends: ["./node_modules/@spm/eslint-config/index.js"],
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
        // 0 is off / 1 is warn / 2 is error
        'react-hooks/exhaustive-deps': 2,       
      },
    },
  ],
};