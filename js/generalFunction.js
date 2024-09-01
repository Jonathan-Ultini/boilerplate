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

/**
 * Aggiorna il contenuto di un elemento HTML con un messaggio relativo al risultato del controllo di palindromia.
 * 
 * @param {string} word - La parola da verificare.
 * @param {HTMLElement} resultElement - L'elemento HTML in cui visualizzare il risultato.
 */
function updatePalindromeResult(word, resultElement) {
  if (isPalindrome(word)) {
    resultElement.textContent = `"${word}" è una parola palindroma.`;
  } else {
    resultElement.textContent = `"${word}" non è una parola palindroma.`;
  }
}

