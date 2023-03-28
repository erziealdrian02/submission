import "../component/club-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const clubListElement = document.querySelector("club-list");

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  const showResult = async () => {
    try {
      const result = await DataSource.searchClub();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  showResult();
};

export default main;
