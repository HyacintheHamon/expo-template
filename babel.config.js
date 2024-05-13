module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      ["nativewind/babel"],
      ["@babel/plugin-proposal-export-namespace-from"],
      ["react-native-reanimated/plugin"],
    ],
  };
};
