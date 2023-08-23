import { terser } from 'rollup-plugin-terser';
//import { scss } from 'rollup-plugin-scss';

export default [{
  input: 'daterangepicker.js',
  output: [
    // Terser �ɂ�鈳�k�Ńt�@�C��
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