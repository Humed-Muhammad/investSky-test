// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: ['./src'],
          },
          root: ['./'],
          extensions: ['.tsx', '.json', '.ts', '.js', '.jsx'],
        },
      ],
    ],
  };
};
