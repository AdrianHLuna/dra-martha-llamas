import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Import directo de los configs flat nativos de eslint-config-next, sin pasar
// por FlatCompat — ver aiso-v3-template/eslint.config.mjs para el porqué
// (FlatCompat choca con plugins modernos autorreferenciados en su export
// flat y revienta con "Converting circular structure to JSON").
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
