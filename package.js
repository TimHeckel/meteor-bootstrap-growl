Package.describe({
    summary: "Pretty simple jQuery plugin that turns standard Bootstrap alerts into Growl-like notifications."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/jquery.bootstrap-growl.js'
    ], 'client');
});
