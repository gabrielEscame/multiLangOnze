# Onze - testing multilang app

## About

This repository is a simple project to explore more about the availble frameworks tools for internationalization of our applications. I'am using `i18next` and `react-i18next` to create and manage our translations. Also using `i18next-browser-languagedetector` to easily indentify the user current language.
<br/>

<p align="center">
  <img width="516" height="516" src="https://www.onze.com.br/images/rebranding-solucao-img.png">
</p>
<br/>

## contextualization

  > informations directly taken from: [Satish Singh - Linkedin](https://www.linkedin.com/pulse/difference-between-g11n-i18n-t9n-l10n-satish-singh/)

- **Translation(T9N)**:
  Convert text to other language.

- **Localization(L10N)**:
  A process of integrating translation back into source code or original file format and create final output. Localization also includes converting content according to geographical adaptability. For example any document which has polar bear in it and if document to be release in Arab then it make more sense to have Camel in it instead of Polar bear.

- **Internalization(I18N)**:
  is a process of developing your source code according to international languages. For ex: There is different currency sign, date month year format used across world hence these fields should not be hard coded and flexible according to locales having said that while writing source code it should always be considered that this product will not only be used in English but it will be used by different locales and develop product accordingly.

- **Globalization(G11N)**:
  consists internationalization, translation and localization. In order to take your product to global market and reach wider audience across globe it is important that you also provide your product into different locales. Many product based companies have been very actively globalizing their product. Product in regional language attracts more number of customer, Globalization makes it easier for people to use product in their regional language.


## Setup

installing all the dependences.
`yarn`

starting the application locally, on the port 3000.
`yarn start`
