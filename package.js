Package.describe({
  summary: 'Wrapper of meteor-bootstrap-growl package that supports Meteor 0.9',
  version: '1.0.4',
  git: 'https://github.com/duongthienduc/meteor-bootstrap-growl.git',
  name: 'duongthienduc:meteor-bootstrap-growl'
});

if (typeof Package.onUse == 'function') { // for meteor v0.9+
  Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0');
    api.use(['jquery'], 'client');
    api.addFiles('lib/jquery.bootstrap-growl.js', 'client');
    api.addFiles('lib/jquery.bootstrap-growl.css', 'client');
  });
} else { // for meteor < v0.9
  Package.on_use(function (api) {
    api.use('jquery@1.0.11', 'client');
    api.add_files([
      'lib/jquery.bootstrap-growl.js',
      'lib/jquery.bootstrap-growl.css'
    ], 'client');
  });
}
