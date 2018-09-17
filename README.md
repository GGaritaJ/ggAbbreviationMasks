# ggAbbreviationMasks
jQuery plugin ggAbbreviationMasks v1.0 -developed by GGaritaJ: Gerardo Garita-

Plugin based on jquery that allows the summary handling of abbreviations (ex: area, weight, volume, currency) and masks (ex: thousands) for numeric inputs on the websites.

Usage:
```javascript
$("div.Abbrev").ggAbbreviationMasks().Abbreviation({
    abbreviations: ["area", "weight", "percentage", "distance", "precipitation", "temperature", "altitude", "velocity", "time", "latitude", "longitude", "money", "moneyAlt", "custom"]
});
$("div.thousandsMask").ggAbbreviationMasks().ThousandsMask({
    thousandseparator: ",",
    decimalseparator: ".",
    decimals: 2
});
```

Online example: https://jsfiddle.net/GGaritaJ/c5h9xgvL/8/

More info: www.ggaritaj.com info@ggaritaj.com
