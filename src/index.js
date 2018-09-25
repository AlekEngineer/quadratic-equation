module.exports = function solveEquation(equation) {
  const string1 = equation.replace(/\s/g, ''); // убираем пробелы
	const a_zv = string1.indexOf("*"); // находим позицию *
	const a = +string1.slice(0, a_zv); // взяли число а
	const string_b = string1.slice(a_zv+4); // отрезали первый член
	const b_zv = string_b.indexOf("*"); // находим вторую *
	const b = +string_b.slice(0, b_zv); //взяли число b
	const c = +string_b.slice(b_zv+2); //взяли число с
	const x1 = (-b + (Math.sqrt(b*b - 4*a*c))) / (2*a);
	const x2 = (-b - (Math.sqrt(b*b - 4*a*c))) / (2*a);
	const solutions = [Math.round (x1), Math.round(x2)]
	sortFunction = (left, right) => left - right;
	solutions.sort (sortFunction)
  return solutions;
}
