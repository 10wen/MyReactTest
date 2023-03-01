import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// 检测浏览器语言
import LanguageDetector from "i18next-browser-languagedetector";
import cn from "./locales/zh-CN.json";
import hk from "./locales/zh-HK.json";
import en from "./locales/en-US.json";

const resources = {
  cn: {
    translation: cn,
  },
  hk: {
    translation: hk,
  },
  en: {
    translation: en,
  },
};
i18n
  .use(LanguageDetector) //嗅探当前浏览器语言 zh-CN
  .use(initReactI18next) // 将 i18n 向下传递给 react-i18next
  .init({
    //初始化
    resources, //本地多语言数据
    fallbackLng: "en", //默认当前环境的语言
    // lng: 'cn',
    detection: {
      caches: ["localStorage", "sessionStorage", "cookie"],
    },
  });

export default i18n;
