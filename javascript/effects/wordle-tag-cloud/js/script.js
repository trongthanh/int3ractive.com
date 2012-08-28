/* ============ MAIN SCRIPT ============== */
(function (win) {
    //global
    var doc = win.document,
        container = doc.getElementById('wordle-container'),
        wordle = new WORDLEJS.Wordle(container);

    //text to render
    this.testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum ipsum et mi imperdiet venenatis. Duis pellentesque turpis eu libero adipiscing mollis. Curabitur sagittis volutpat placerat. Maecenas fermentum nunc non dui varius sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent augue lacus, consectetur at laoreet eget, semper vitae diam. Cras quis facilisis risus. Fusce a nibh justo, a sollicitudin orci. Ut in est et lectus vestibulum eleifend eget vel dolor. Nulla varius ullamcorper orci, vitae auctor lacus sollicitudin quis. In vestibulum dictum sapien. Vestibulum ac justo non metus porttitor vestibulum. Pellentesque urna dui, bibendum eu euismod quis, viverra in eros. Nulla viverra diam at magna fermentum eget pretium odio cursus. Integer tempor arcu id urna sodales eget dapibus massa congue. Donec porta libero auctor felis pretium a vehicula odio suscipit. Vestibulum pulvinar, ipsum et condimentum tristique, ligula dolor aliquet arcu, vel hendrerit erat metus nec tellus.';
    //this.text = 'five one two five three four, four five three! five four two three four. five';
    this.wordsLimit = 200;
    
    this.renderWordle = function () {
        var sortResult = TextUtil.countWordOccurance(this.testText);

        wordle.reset();
        wordle.setWords(sortResult, this.wordsLimit);
        log('wordle sortType: ' + wordle.sortType);

        wordle.doLayout();
    };
    
    // var sortResult = TextUtil.countWordOccurance('one two three four, four three! four two three four.');

    

    var gui = new dat.GUI();
    gui.add(this, 'testText');
    gui.add(this, 'wordsLimit', [10, 50, 100, 200]);
    gui.add(wordle, 'urlPrefix');
    gui.add(wordle, 'keepCenter');
    gui.add(wordle, 'sortType', {'default': '', 'big -> small': 'a', 'small -> big': 'b', 'A -> Z': 'c', 'shuffle': 'd' });
    gui.add(this, 'renderWordle');

    this.renderWordle();
})(window);