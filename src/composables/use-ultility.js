import numeral from "numeral";

export default function () {
  function formatNumber(num) {
    const formatted = numeral(num).format(".00");
    return formatted;
  }

  function capitalize(string) {
    return string.name.charAt(0).toUpperCase() + string.name.slice(1);
  }

  return {
    formatNumber,
    capitalize,
  };
}
