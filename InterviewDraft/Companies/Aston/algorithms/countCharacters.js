/**
 * Мы создаем пустой объект charCount, который будет служить в качестве объекта-счетчика.
 * Затем проходим по каждому символу char в строке str.
 * В объекте charCount мы увеличиваем счетчик для символа char, используя выражение (charCount[char] || 0) + 1, которое учитывает, что символ может быть встречен впервые.
 * Когда проходим по всей строке, объект charCount будет содержать количество каждого символа в строке.
 */
function countCharacters(str) {
  // Создаем пустой объект charCount для хранения количества каждого символа
  const charCount = {};

  // Проходим по каждому символу char в строке str
  for (let char of str) {
    // Если символ char уже встречался ранее, то увеличиваем его счетчик на 1,
    // иначе инициализируем счетчик символа значением 1
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Возвращаем объект charCount с подсчитанным количеством каждого символа
  return charCount;
}

// Пример использования функции
const text = "ppoal";

const result = countCharacters(text);

console.log(result); // { p: 2, o: 1, a: 1, l: 1 }
