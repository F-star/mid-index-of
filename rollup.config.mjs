import typescript from '@rollup/plugin-typescript';

const config = {
  input: 'index.ts',
  output: [
    {
      file: 'dist/mid-index-of.esm.js',
      format: 'esm',
      name: 'version',
    },
    {
      file: 'dist/mid-index-of.common.js',
      format: 'cjs',
      name: 'version',
    },
  ],
  plugins: [typescript()],
};

export default config;
