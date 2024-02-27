import path from 'path';

export default {
  entry: './src/index.ts',
  output: {
    filename: 'dist/main.js',
    path: path.resolve('/src/', 'dist'),
  },
};