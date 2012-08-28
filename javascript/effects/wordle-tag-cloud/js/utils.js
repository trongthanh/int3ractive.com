//util

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

window.trace = function(line, str) {
  window.document.getElementById('line' + line).innerHTML = str;
};

/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = ( function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

      window.setTimeout( callback, 1000 / 60 );

    };

  } )();

}


/**
 * TextUtil
 */
var TextUtil = {
  countWordOccurance: function (text) {
    // Remove punctuations, non-word characters...
    //note: this case also remove Vietnamese unicode characters, improve later when needed
    text = text.replace(/[^A-Za-z0-9_\-\s]/g, '');

    var words = text.split(/\s+/),
        wordsObject = {},
        i, il, w;

    for (i = 0, il = words.length; i < il; i++) {
        w = words[i];

        if (wordsObject[w] && typeof(wordsObject[w]) === 'number') {
            wordsObject[w] ++;
        } else {
            wordsObject[w] = 1;
        }
    }

    //tranfer to array in order to sort
    var result = [];
    for (var item in wordsObject) {
        if(wordsObject.hasOwnProperty(item)) {
            result.push({ text: item, count:wordsObject[item] });
        }
    }

    //bigger count stay at top
    result.sort(function (wordA, wordB) {
        return wordB.count - wordA.count;
    });

    return result;
  }
};

/**
 * Random util
 */
var Random = {
    /**
     * Creates a randomized boolean
     * @return
     */
    getRandomBoolean: function () {
        return Math.random() >= 0.5;
    },

    /**
     * Return random color number as hex string; avoid dark color
     */
    getRandomColor: function (componentMin, componentMax) {
      return (this.getRandomInt(componentMin, componentMax).toString(16) +
              this.getRandomInt(componentMin, componentMax).toString(16) +
              this.getRandomInt(componentMin, componentMax).toString(16));
    },

    /**
     * Return a integer value within min - max (inclusive)
     */
    getRandomInt: function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    },

    /**
     * Get a random sequence
     */
    getRandomSequence: function (min, max) {
        var o = [], //original seq
            r = [], //result
            c, //child item
            l; //length
        if (min > max) {
            var tmp = max;
            max = min;
            min = tmp;
        }

        l = Math.abs(max - min) + 1;
        //log ('max: ' + max);
        //log('length: ' + l);
        //original sequence
        for (var i = 0; i < l; i ++) {
          o[i] = min + i;
          //log(o[i]);
        }
        
        while (true) {
            l = o.length;
            if (l > 0) {
                c = o.splice(this.getRandomInt(0,l - 1),1)[0];
                r.push(c);
            } else {
                break;
            }
        }
        log (r);
        return r;
    }
};