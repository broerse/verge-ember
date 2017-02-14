import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('venues');
  this.route('artists');
  this.route('exhibitions');
  this.route('contacts');

  this.route('page-not-found', {
    path: '/*wildcard'
  });

  this.route('artist', function() {
    this.route('berlin');
    this.route('kruse');
    this.route('lorish');
    this.route('mulder');
    this.route('void');
    this.route('simione');
    this.route('schlunegger');
    this.route('risse');
    this.route('reeves');
    this.route('reed');
    this.route('nelson');
    this.route('morin');
    this.route('miyamoto');
    this.route('mcgovern');
  });
});

export default Router;
