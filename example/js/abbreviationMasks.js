//////////////////////////////////////////////
//  ggAbbreviationMasks JS/CSS  PlugIn V1.0 //
//  Developed by: Ing.Gerardo Garita J.     //
//                FullStack Developer       //
//  email:  info@ggaritaj.com               //
//  date:       wednesday, 2018-08-19       //
//  last date:  wednesday, 2018-08-19       //
//////////////////////////////////////////////
; (function ($) {
    jQuery.fn.ggAbbreviationMasks = function () {
        return this;
    };
    jQuery.fn.ggAbbreviationMasks().Abbreviation = function (opts) {
        try {
            var _abbreviations = ["area", "weight", "percentage", "distance", "precipitation", "temperature", "altitude", "velocity", "time", "latitude", "longitude", "money", "moneyAlt", "custom"];
            if ((opts != undefined) && (opts != null) && (opts !== "")) {
                if (opts.hasOwnProperty('abbreviations')) {
                    _abbreviations = opts.abbreviations;
                }
            }
            $(_abbreviations).each(function (id, abbrev) {
                var item = $(('.' + abbrev))[0];
                var content = $(item).attr("abbrev-content");
                var appendStyle = ('<style>.' + abbrev + ':before { content: "' + content + '" !important }</style>');
                $(appendStyle).insertAfter(item);
            });
        }
        catch (err) {
            console.log("Error: " + err + ".");
        }
    };
    jQuery.fn.ggAbbreviationMasks().ThousandsMask = function (opts) {  
        try {
            //initial values
            var _tseparator = ",";
            var _dseparator = ".";
            var _decimals = 2;
            if ((opts != undefined) && (opts != null) && (opts !== "")) {
                if (opts.hasOwnProperty('thousandseparator')) {
                    _tseparator = opts.thousandseparator;
                }
                if (opts.hasOwnProperty('decimalseparator')) {
                    _dseparator = opts.decimalseparator;
                }
                if (opts.hasOwnProperty('decimals')) {
                    _decimals = opts.decimals;
                }
            }
            //prototype functions
            if (!String.prototype._rep) {//replace all
                String.prototype._rep = function (search, replacement) {
                    var target = this;
                    return target.split(search).join(replacement);
                };
            }
            if (!String.prototype._rev) {//reverse
                String.prototype._rev = function () {
                    return this.split("").reverse().join("");
                };
            }
            if (!String.prototype._cont) {//contains
                String.prototype._cont = function (it) {
                    return this.indexOf(it) != -1;
                };
            }
            if (!String.prototype._tfix) {//to fixed
                String.prototype._tfix = function () {
                    return (parseFloat((this).replace(_tseparator, _dseparator)).toFixed(_decimals));
                };
            }
            if (!String.prototype.ThousandsMask) {
                String.prototype.ThousandsMask = function () {
                    'use strict';
                    var entire = (this._cont(',') ? this.split(',')[0] : this.split('.')[0]);
                    var decimals;
                    if (this._cont(',') || this._cont('.')) {
                        decimals = ((this._cont(','))
                            ? (this.split(',')[1] == "" ? _dseparator : (_dseparator + this.split(',')[1]))
                            : (this.split('.')[1] == "" ? _dseparator : (_dseparator + this.split('.')[1])));
                    } else {
                        decimals = "";
                    }
                    entire = entire._rev().replace(/(.{3})/g, "$1$")._rev()._rep("$", _tseparator);
                    if (entire.charAt(0) === _tseparator) {
                        entire = entire.substr(1);
                    }
                    return (entire + ((decimals != "") ? decimals : ""));
                };
            }
            //items functions
            $(this).each(function (id, div) {
                var containerId = div.id;
                var input = $(div).find("input.thousandsMask")[0];
                var val = ((input.value != "") ? (input.value._tfix()) : ("0"._tfix()));
                $(input).val(val);
                var appendStyle = ('<style id="css-' + containerId + '">#' + containerId + ':before { content: "' + val.ThousandsMask() + '" !important }</style>');
                $("style#css-" + containerId).remove();
                $(appendStyle).insertAfter(div);
                //events
                $(div).on("click", function () {
                    var myinput = $(div).find("input.thousandsMask")[0];
                    $(myinput).focus();
                });
                $(input).on("keypress", function (evt) {
                    var charCode = ((evt.which) ? evt.which : evt.keyCode);
                    if (((charCode == 44) || (charCode == 46)) && ((!this.value._cont(".")) && (!this.value._cont(","))) && (_decimals > 0)) {
                        return true;
                    } else if ((charCode > 31) && (charCode < 48 || charCode > 57)) {
                        return false;
                    } else {
                        return true;
                    }
                });
                $(input).on("blur", function (event) {
                    var parent = this.parentElement;
                    var containerId = parent.id;
                    var val = ((this.value != "") ? (this.value._tfix()) : ("0"._tfix()));
                    $(this).val(val);
                    var appendStyle = ('<style id="css-' + containerId + '">#' + containerId + ':before { content: "' + val.ThousandsMask() + '" !important }</style>');
                    $("style#css-" + containerId).remove();
                    $(appendStyle).insertAfter(parent);
                });
                $(input).on("focus", function (event) {
                    var parent = this.parentElement;
                    var containerId = parent.id;
                    $("style#css-" + containerId).remove();
                    if (parseFloat(this.value) <= 0) {
                        $(this).val("");
                    }
                });
            });
        }
        catch (err) {
            console.log("Error: " + err + ".");
        }
    };
})(jQuery);
