import bs, { init } from 'browser-sync';
bs.create().init({watch: true, server: './app'});