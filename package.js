Package.describe({
	name: "mrt:bootstrap-growl"
	, version: "0.1.4"
    , summary: "Pretty simple jQuery plugin that turns standard Bootstrap alerts into Growl-like notifications."
});

Package.on_use(function (api) {
    api.use('jquery@1.0.11', 'client');
    api.add_files([
        'lib/jquery.bootstrap-growl.js'
    ], 'client');
});
