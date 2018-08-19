$(document).ready(function () {
    $("div.Abbrev").ggAbbreviationMasks().Abbreviation({
        abbreviations: ["area", "weight", "percentage", "distance", "precipitation", "temperature", "altitude", "velocity", "time", "latitude", "longitude", "money", "moneyAlt", "custom"]
    });
    $("div.thousandsMask").ggAbbreviationMasks().ThousandsMask({
        thousandseparator: ",",
        decimalseparator: ".",
        decimals: 2
    });
});
