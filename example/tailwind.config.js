module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}", // ✅ 패키지 컴포넌트도 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
