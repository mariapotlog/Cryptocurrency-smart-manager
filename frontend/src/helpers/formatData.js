export default function formatData(data) {
  return data.map((element) => {
    return {
      t: element[0],
      y: element[1].toFixed(2),
    };
  });
}
