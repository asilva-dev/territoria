export const FEATURE_TOGGLES = {
  ENABLE_WORKSHOP_REGISTRATION: true,
  ENABLE_NEW_NAV: true,
  ENABLE_BRAZIL_MAP_INTERACTION: false, // Exemplo: funcionalidade ainda em dev
} as const;

export type FeatureKey = keyof typeof FEATURE_TOGGLES;

/**
 * Função simples para verificar se uma feature está ativa
 * Baseada no padrão que você já conhece de grandes corporações
 */
export const isFeatureEnabled = (key: FeatureKey): boolean => {
  return FEATURE_TOGGLES[key] ?? false;
};
