import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import ru from '../locales/ru';
import en from '../locales/en';

export const i18n = new I18n({
  en,
  ru,
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;

export const changeLocale = locale => {
  i18n.locale = locale;
};
