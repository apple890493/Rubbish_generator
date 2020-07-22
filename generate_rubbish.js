function sample(collection) {
  const randomINdex = Math.floor(Math.random() * collection.length)
  return collection[randomINdex]
}

function generateRubbish(option) {
  // test is working or not
  // console.log('get')

  //define things all for choose
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let target = ''
  let collection = []
  if (option.target === 'engineer') {
    target = '工程師'
    collection = task[option.target]
  } else if (option.target === 'designer') {
    target = '設計師'
    collection = task[option.target]
  } else if (option.target === 'entrepreneur') {
    target = '創業家'
    collection = task[option.target]
  }

  //start generating rubbish for task
  //combine genrating rubbish with pharse
  let results = target + ',' + sample(collection).concat(sample(phrase))

  //return results
  return results
}

// export generateRubbish function for others use
module.exports = generateRubbish