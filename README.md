karma-json-preprocessor
=======================

A karma plugin to pull JSON files into accessible object on the window.

Usage
-----

In the karma configuration file, be sure to include the plugin karma-json-preprocessor.

<pre><code>
plugins: [
	...,
	'karma-json-preprocessor',
	...,
]
</code></pre>

Then under preprocessors add the path to your json files for the module 'json'.

<pre><code>
preprocessors: [
	...,
	'path/to/files/**/*.json', ['json'],
	...,
]
</code></pre>