#Pop Up Window
jQuery Pop Up Window plugin

##Demo
[Responsive Images Demo](http://arminsolecki.github.io/pop-up-window/)

##Sample usage
###HTML
```HTML
<div id="pop-up" class="pop-up-display-content">
  <p>Tempora in tempore maxime fuga quas numquam possimus cumque earum ipsa exercitationem iste.</p>
</div>
```

###JavaScript
```
  $('#pop-up-1').popUpWindow({action: "open"});
```

## Options
`$('[data-rspimg]').responsiveImages({widthSyntax: "{width}", step: 100, maxSize: 1000});`

* action - (open/close)
* size - (small/medium/large)
* modal - (true/false)
* buttons
* onClose

##Dependencies
[jQuery](http://jquery.com/)
