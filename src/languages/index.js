import i18next from "i18next";
import en from "./en";
import vi from "./vi";
import jan from "./Jan";

i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: en
      },
      vi: {
        translation: vi
      },
      jan: {
        translation: jan
      }
    }
  },
  () => {}
);
function updateContent() {}
i18next.on("languageChanged", () => {
  updateContent();
});
export default i18next;
