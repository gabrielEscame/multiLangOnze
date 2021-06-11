import logo from "./logo.svg";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(1);

  const onChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const onClickAdd = () => {
    setCounter(count + 1);
  };

  const onClickRemove = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };

  return (
    <div className="App">
      <select name="language" onChange={onChange}>
        <option value="pt">Portuguese</option>
        <option value="en">English</option>
      </select>
      <h2>{t("title")}</h2>
      <img src={logo} alt="onze logo" />
      {/* Alterações para quebra de texto em inglês */}
      {/* Pensar em qual palavra adcionar o bold devido a ordem ex(melhor beneficio de saúde financeira/ best financial health benefit) */}
      <h1>
        <Trans components={{ bold: <b />, alert: <b /> }}>subtitle</Trans>
      </h1>
      {/* Novamente Alterações para quebra de texto em inglês */}
      <p>
        <Trans components={{ bold: <b /> }}>description</Trans>
      </p>

      {/* Nesse caso utilizando tanto a adição de tags no texto, como a inserção de variáveis e plural. */}
      {/* O plural funciona com a prop count, e no json como `_plural` */}
      <span>
        <Trans components={{ bold: <b /> }} count={count}>
          plans
        </Trans>
      </span>

      <button className="button" onClick={onClickAdd}>
        {t("plan-add-button")}
      </button>
      <button className="button button--text" onClick={onClickRemove}>
        {t("plan-remove-button")}
      </button>
    </div>
  );
}

export default App;
