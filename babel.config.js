const babelConfig = (api) => {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime'
  ];

  return {
    presets,
    plugins
  };
};

module.exports = babelConfig;
