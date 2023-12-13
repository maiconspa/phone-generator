
function downloadFile(text: string, filename: string) {
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${filename}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log(`Evento: concluído download do arquivo ${filename}.txt`)
}

function normalizeNumber(n: number, length: number = 4) {
  return n.toString().padStart(length, "0");
}

export function generateFile(ddd: string, fivep: string) {
  const model = `(${normalizeNumber(Number(ddd), 2)})${fivep}`;
  let bigString = "";

  for (let i = 0; i <= 9999; i++) {
    bigString += `${model}-${normalizeNumber(i)}\n`;
  }

  downloadFile(bigString, model);
}
