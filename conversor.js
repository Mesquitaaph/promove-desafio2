let isAsciiToBinary = true;

function convertText() {
  const input = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');

  let convertedResult = '';

  if (isAsciiToBinary) {
    // Converte ASCII para binário
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      const binary = charCode.toString(2).padStart(8, '0'); // Converte para binário de 8 dígitos
      convertedResult += binary + ' ';
    }
    resultDiv.textContent = 'Texto em binário: ' + convertedResult;
  } else {
    // Converte binário para ASCII
    const binaryArray = input.split(' ');
    for (let i = 0; i < binaryArray.length; i++) {
      const decimal = parseInt(binaryArray[i], 2);
      const asciiChar = String.fromCharCode(decimal);
      convertedResult += asciiChar;
    }
    resultDiv.textContent = 'Texto em ASCII: ' + convertedResult;
  }
}

function toggleConversion() {
    isAsciiToBinary = !isAsciiToBinary;
    const button = document.getElementById('toggleButton');
    const convertButton = document.getElementById('convertButton');
    button.textContent = isAsciiToBinary ? 'Inverter (Ascii -> Binario)' : 'Inverter (Binario -> Ascii)';
    convertButton.textContent = isAsciiToBinary ? 'Converter para Binário' : 'Converter para Ascii';
    document.getElementById('result').textContent = '';
  }