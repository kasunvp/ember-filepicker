import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filestack', 'Integration | Component | ember filestack', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-filestack}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-filestack}}
      template block text
    {{/ember-filestack}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
