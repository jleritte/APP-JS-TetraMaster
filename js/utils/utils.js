

export function getValue(min,max){
  return (Math.random() * (max-min) + min) | 0
}

export function getWeigthed(list,weight){
  var total = weight.reduce((prev,cur) => prev + cur),
    random = this.getValue(0,total),
    sum = 0
  for(i = 0; i < list.length; i++){
    sum += weight[i]
    sum = +sum.toFixed(2)
    if(random <= sum){
      return list[i]
    }
  }
}

export function convertValue(card){
  var value = '',
    temp = card.atk;
  value += this.convertToHex(temp);
  value += card.type;
  temp = card.pdef;
  value += this.convertToHex(temp);
  temp = card.mdef;
  value += this.convertToHex(temp);
  return value;
}

export function convertToHex(num){
  return (num >>> 4).toString(16)
}

export function largest(card){
  var attack = card.atk;
  if(card.pdef > attack){
    attack = card.pdef;
  }
  if(card.mdef > attack){
    attack = card.mdef;
  }
  return attack;
}

export function smaller(card){
  var defense = card.pdef;
  if(card.mdef < defense){
    defense = card.mdef;
  }
  return defense;
}

export function smallest(card){
  var defense = card.atk;
  if(card.pdef < defense){
    defense = card.pdef;
  }
  if(card.mdef < defense){
    defense = card.mdef;
  }
  return defense;
}
