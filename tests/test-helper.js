import Application from 'howfarbehindarewe/app';
import config from 'howfarbehindarewe/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
