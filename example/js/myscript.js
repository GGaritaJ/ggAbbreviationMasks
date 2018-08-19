$(document).ready(function () {
    $("div.Abbrev").ggAbbreviationMasks().Abbreviation({
        abbreviations: ["area", "weight", "percentage", "distance", "precipitation", "temperature", "altitude", "velocity", "time", "latitudeLongitude", "money", "moneyAlt", "custom"]
    });
    $("div.thousandsMask").ggAbbreviationMasks().ThousandsMask({
        thousandseparator: ",",
        decimalseparator: ".",
        decimals: 2
    });
});