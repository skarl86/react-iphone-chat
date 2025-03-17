import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom", "tslib"],
  plugins: [
    postcss({
      extract: false, // 별도의 CSS 파일로 추출
      minimize: true, // CSS 최적화 (선택사항)
      // sourceMap: true, // 소스맵 생성
      inject: true, // CSS를 DOM에 주입
      // postcss.config.js에 설정한 플러그인을 자동으로 불러오므로 별도 plugins 옵션은 생략 가능
      plugins: [tailwindcss(), autoprefixer()],
    }),
    resolve(),
    commonjs(),
    typescript(),
  ],
}
