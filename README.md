###bootstrap-growl - Meteor Smart Package

This is a the [bootstrap growl jquery plugin](https://github.com/ifightcrime/bootstrap-growl) as a meteor smart package.

###Bootstrap-Growl project

Demo: http://jsfiddle.net/ifightcrime/Us6WX/88/Project Git: https://github.com/ifightcrime/bootstrap-growl

###How to use?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt add bootstrap-growl`

###Add an alert

```
$.bootstrapGrowl(msg, {
    _id: _id,
    ele: 'body', // which element to append to
    type: type, // (null, 'info', 'error', 'success')
    offset: {from: 'top', amount: 57}, // 'top', or 'bottom'
    align: place || 'right', // ('left', 'right', or 'center')
    width: 480, // (integer, or 'auto')
    delay: (stick ? 36000000 : 3500), // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
    allow_dismiss: true, // If true then will display a cross to close the popup.
    stackup_spacing: 10 // spacing between consecutively stacked growls.
  });
```

###Remode an alert

```
$.bootstrapGrowl.remove(_id);
```

###Remove all alerts

```
$.bootstrapGrowl.removeAll();
```

###More informations
[bootstrap-growl git](https://github.com/ifightcrime/bootstrap-growl)
