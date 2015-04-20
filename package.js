Package.describe({
	name: "timheckel:bootstrap-growl",
  summary: "Pretty simple jQuery plugin that turns standard Bootstrap alerts into Growl-like notifications",
  version: "0.1.4",
  git: 'https://github.com/TimHeckel/meteor-bootstrap-growl',
  documentation: 'README.md'
});

Package.onUse(function (api) {
    api.use('jquery@1.0.11', 'client');
    api.addFiles('lib/jquery.bootstrap-growl.js', 'client');
});
