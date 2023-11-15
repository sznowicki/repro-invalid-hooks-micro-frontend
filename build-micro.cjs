const esbuild = require('esbuild');
const { resolve } = require('path');

const makePathname = (path) => {
    return resolve(__dirname, path)
}
const main = async () => {
    await esbuild.build({
        entryPoints: [makePathname('./micro-frontend.jsx')],
        bundle: true,
        format: 'esm',
        outdir: makePathname('./dist-micro'),
        splitting: true,
        target: [
            'chrome100',
            'safari15',
            'firefox100'
        ],
        sourcemap: true,
        jsx: 'automatic',
        minify: true,
    });
};

main();
