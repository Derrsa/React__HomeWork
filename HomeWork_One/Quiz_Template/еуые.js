const arr =
  "А, Б, В, Г, Д, Е, Ё, Ж, З, И, Й, К, Л, М, Н, О, П, Р, С, Т, У, Ф, Х, Ц, Ч, Ш, Щ, Ь, Ы, Ъ, Э, Ю, Я";

const newaArr = arr.split(", ");

const text = "пря вет";
function Cezar(text) {
  let newText = text
    .toUpperCase()
    .split("")
    .filter((el) => el !== " ");
  return newText;
}

function filterText(text) {
  return text.map((letter, index) => {
    let indexNew = newaArr.indexOf(letter);
    if (newaArr[indexNew] === "Я") {
      return "A";
    }
    return newaArr[indexNew + 1];
  });
}

console.log(filterText(Cezar(text)));
