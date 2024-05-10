const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { build: twBuild } = require("tailwindcss/lib/cli/build");
const { generate } = require("@storybook/react-native/scripts/generate");

module.exports = (async () => {
  /** @type {import('expo/metro-config').MetroConfig} */

  generate({
    configPath: path.resolve(__dirname, "./.ondevice"),
  });

  const config = getDefaultConfig(__dirname, {
    // Enable CSS support.
    isCSSEnabled: true,
  });

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  config.transformer.unstable_allowRequireContext = true;

  config.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform
  );

  if (
    process.env.STORYBOOK_ENABLED !== "true" &&
    defaultResolveResult?.filePath?.includes?.(".ondevice/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

  await twBuild({
    "--input": path.relative(__dirname, "./global.css"),
    "--output": path.resolve(
      __dirname,
      "node_modules/.cache/expo/tailwind/eval.css"
    ),
    "--watch": process.env.NODE_ENV === "development" ? "always" : false,
    "--poll": true,
  });

  return config;
})();