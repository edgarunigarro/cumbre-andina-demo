// Para desarrolladores (no necesario para usar la web): node tests/validacion_calculos.js
const assert = require('node:assert/strict');
const {calculate, PRESET, ROASTERS, PACKERS} = require('../assets/js/calculos.js');
const c = calculate(PRESET);
assert.equal(c.greenKg, 305);
assert.equal(c.roastedKg, 250);
assert.equal(c.remainingKg, 85);
assert.equal(c.costs, 13290000);
assert.equal(c.unitCost, 13290);
assert.equal(c.revenue, 24900000);
assert.equal(c.contribution, 11610000);
assert.ok(Math.abs(c.margin * 100 - 46.6265)<0.001);
assert.ok(ROASTERS[1].min>c.roastedKg);
assert.ok(PACKERS[1].min>c.values.qty);
const more=calculate({...PRESET, qty: 2500});
assert.equal(more.greenKg,763);
assert.equal(more.sufficient,false);
assert.ok(more.roastedKg>=ROASTERS[1].min);
assert.ok(more.values.qty>=PACKERS[1].min);
const priceCut=calculate({...PRESET,price:22410});
assert.ok(priceCut.contribution<c.contribution);
for (const wrong of [{...PRESET,qty:0},{...PRESET,loss:60},{...PRESET,shipping:-100}]) {
 assert.throws(()=>calculate(wrong));
}
console.log('CUMBRE QA: 16 comprobaciones matemáticas correctas.');
