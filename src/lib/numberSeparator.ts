function numberSeparator(number: number, separator: string = "."): string {
  if (typeof number !== "number") {
    throw new Error("Input harus berupa angka.");
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export default numberSeparator;
