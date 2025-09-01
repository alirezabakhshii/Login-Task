export const digitConvertor = (input: string) => {
  const fa = "۰۱۲۳۴۵۶۷۸۹";
  const ar = "٠١٢٣٤٥٦٧٨٩";
  return input
    .split("")
    .map((ch) => {
      const faIdx = fa.indexOf(ch);
      if (faIdx > -1) return String(faIdx);
      const arIdx = ar.indexOf(ch);
      if (arIdx > -1) return String(arIdx);
      return ch;
    })
    .join("");
};

export const isValidPhoneNumber = (input: string) => {
  const phone = digitConvertor(input).replace(/[\s-]/g, "");
  return /^(09\d{9}|\+989\d{9}|00989\d{9})$/.test(phone);
};
