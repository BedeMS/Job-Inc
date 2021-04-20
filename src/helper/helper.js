export const getName = function (value) {
  return (
    value.charAt(0).toLocaleUpperCase() + value.split("").splice(1).join("")
  );
};
