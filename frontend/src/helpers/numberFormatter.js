export default function numberFormatter(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}