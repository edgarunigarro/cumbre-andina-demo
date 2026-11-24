/* Núcleo determinista de cálculos · pesos colombianos (COP).
   Usado por simulador.js y validable con Node.js; cero dependencias. */
(function (root) {
'use strict';
const PRESET=Object.freeze({qty:1000,price:24900,loss:18,green:23000,roasting:6500,packaging:2100,label:650,shipping:1400,quality:500000,available:390});
const ROASTERS=Object.freeze([{name:'TOST-A',rate:6500,min:100,days:7},{name:'TOST-B',rate:6200,min:400,days:15},{name:'TOST-C',rate:7000,min:200,days:5}]);
const PACKERS=Object.freeze([{name:'PACK-A',rate:2100,min:1000,days:10},{name:'PACK-B',rate:1850,min:2500,days:15},{name:'PACK-C',rate:2450,min:500,days:8}]);
function calculate(raw){let v={};for(const k of Object.keys(PRESET)){v[k]=Number(raw[k]);if(!Number.isFinite(v[k])||v[k]<0)throw new Error('INVALID_'+k)}if(v.qty<100||v.qty>10000||!Number.isInteger(v.qty))throw new Error('INVALID_qty');if(v.loss>=60)throw new Error('INVALID_loss');
const roastedKg=v.qty*.25;
const greenKg=Math.ceil(roastedKg/(1-v.loss/100));
const breakdown=[
 {key:'green',cost:greenKg*v.green,color:'#164637'},
 {key:'roast',cost:roastedKg*v.roasting,color:'#c77949'},
 {key:'bag',cost:v.qty*v.packaging,color:'#deba74'},
 {key:'label',cost:v.qty*v.label,color:'#8cae91'},
 {key:'ship',cost:v.qty*v.shipping,color:'#607d72'},
 {key:'quality',cost:v.quality,color:'#a9b8a5'}];
const costs=breakdown.reduce((acc,r)=>acc+r.cost,0);
const revenue=v.qty*v.price;
const contribution=revenue-costs;
const margin=revenue>0?contribution/revenue:null;
return Object.freeze({values:v,roastedKg,greenKg,breakdown,costs,unitCost:costs/v.qty,revenue,contribution,margin,remainingKg:v.available-greenKg,sufficient:v.available>=greenKg});
}
const api={PRESET,ROASTERS,PACKERS,calculate};
if(typeof module!=='undefined'&&module.exports)module.exports=api;
else root.CumbreMath=api;
})(typeof window!=='undefined'?window:this);
