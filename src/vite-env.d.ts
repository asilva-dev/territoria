/// <reference types="vite/client" />

/**
 * Você só precisa estender o que o Vite não conhece por padrão.
 * DEV, MODE e as definições de CSS Modules já estão inclusas
 * na referência acima, então não as declare novamente.
 */
interface ImportMetaEnv {
  readonly VITE_CUSTOM_VAR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
