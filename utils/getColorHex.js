export default function getColorHex(color) {
  const map = {
    green: "#008000",   // CSS green
    blue: "#0000ff",
    purple: "#800080",
    orange: "#ffa500",
  };

  return map[color] || null;
}