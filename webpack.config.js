const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv
  );

  config.resolve.alias = {
          '@src': path.resolve(__dirname, 'src/'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@graphql': path.resolve(__dirname, 'src/graphql'),
          '@helpers': path.resolve(__dirname, 'src/helpers'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@navigation': path.resolve(__dirname, 'src/navigation'),
          '@screens': path.resolve(__dirname, 'src/screens'),
          '@stores': path.resolve(__dirname, 'src/stores'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@theme': path.resolve(__dirname, 'src/theme'),
          '@types': path.resolve(__dirname, 'src/types')
  }
  
  config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('expo-crypto'),
    };

  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

    config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.unshift({
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("@svgr/webpack"),
            options: {
              inlineStyles: {
                onlyMatchedOnce: false,
              },
              viewBox: false,
              removeUnknownsAndDefaults: false,
              convertColors: false,
            },
          },
        ],
      });
    }
  });

  return config;
};