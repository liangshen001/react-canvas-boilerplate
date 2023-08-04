// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import clear from 'rollup-plugin-clear';

export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: './src/index.ts',
        plugins: [
            clear({targets: ['dist']}),
            typescript(),
            image(),
            commonjs(),
            resolve(),
            replace({
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            terser({format: {comments: false}})
        ],
        output: [
            {file: pkg.main, format: 'cjs'},
            {file: pkg.module, format: 'es'}
        ]
    }
];
// react: 5KB
// @liangshen/react-canvas: 176KB   [react-reconciler: 94KB, minigame-canvas-engine: 78KB]
// @liangshen/react-canvas-richtext: 9KB [minigame-canvas-engine-richtext: 9KB]

