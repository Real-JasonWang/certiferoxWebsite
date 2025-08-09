import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'
// Import translations directly since backend loader is failing
import enCommon from '@/locales/en/common.json';
import zhCommon from '@/locales/zh/common.json';

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .init({
      ...getOptions(lng, ns),
      resources: {
        en: {
          common: enCommon,
        },
        zh: {
          common: zhCommon,
        },
      }
    })
  return i18nInstance
}

export async function useTranslation(lng: string, ns: string | string[] = 'common', options: { keyPrefix?: string } = {}) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}
