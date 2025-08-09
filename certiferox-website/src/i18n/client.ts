'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import { getOptions, languages, fallbackLng } from './settings'
import LanguageDetector from 'i18next-browser-languagedetector'
// Import translations directly
import enCommon from '@/locales/en/common.json';
import zhCommon from '@/locales/zh/common.json';

const runsOnServerSide = typeof window === 'undefined'

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'navigator'],
    },
    resources: {
      en: { common: enCommon },
      zh: { common: zhCommon },
    },
    preload: runsOnServerSide ? languages : []
  });

export function useTranslation(lng: string, ns?: string | string[], options?: { keyPrefix?: string }) {
  if (i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng);
  }

  const [cookies, setCookie] = useCookies(['i18next']);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  useEffect(() => {
    if (i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  useEffect(() => {
    if (cookies.i18next === lng) return;
    setCookie('i18next', lng, { path: '/' });
  }, [lng, cookies.i18next, setCookie]);

  return ret;
}
