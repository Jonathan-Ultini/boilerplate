//FUNZIONI

/**
 * Verifica se una parola è palindroma.
 * 
 * @param {string} word - La parola da verificare.
 * @returns {boolean} True se la parola è palindroma, false altrimenti.
 */
function isPalindrome(word) {
  const normalizedWord = word.trim().toLowerCase();
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;
}

