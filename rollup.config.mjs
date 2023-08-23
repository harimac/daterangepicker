import { terser } from 'rollup-plugin-terser';
//import { scss } from 'rollup-plugin-scss';

export default [{
  input: 'daterangepicker.js',
  output: [
    // Terser ‚É‚æ‚éˆ³k”Åƒtƒ@ƒCƒ‹
    {
      file: 'daterangepicker.min.js',
      format: 'es',
      sourcemap: true,
      plugins: [
        terser()
      ]
    }
  ]
}]