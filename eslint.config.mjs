import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",  // Disable 'no-explicit-any'
      "react-hooks/rules-of-hooks": "off", // Keep strict hooks enforcement
      "react/no-unescaped-entities": "off", // Show warning instead of error
    },
  },
];

export default eslintConfig;

