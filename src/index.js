module.exports = function check(str, bracketsConfig) {
  let brackets = '' // список скобок
  bracketsConfig.forEach(value => {
    brackets += value.toString()
  });
  brackets = brackets.replace(/,/g, '')
  // никогда до этого не пользовался подобным синтаксисом,
  // не до конца понимаю как оно работает, но в итоге получаем простой string с перечисленными скобками

  let stack = [] // стак для отслеживания парных скобок

  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)
    if(bracketsIndex % 2 === 0){  // все четные символы в списке - открытые скобки
      stack.push(bracketsIndex + 1) // кидаем в стак индекс скобки, которую надо закрыть
    } else{
      if(stack.pop() !== bracketsIndex) { // если последний pop'нутый элемент стака не равен индексу скобки
        return false
      }
    }
  }
  return stack.length === 0 //если стак пуст - вернет true
}

// Вроде немного разобрался как это делается, но варианты со скобками в виде || 
// дают понять, что нужен другой подход и у меня нету идей.
// Для подобной задачи нужно явно больше практики чем у меня (чуть меньше чем 3-4 дня занятий js)
// И учитывая, что я выполняю задане в день дедлайна не представляю себе возможным довести его до ума.