

export function getNodeStyle({ left, top }){
  return {
    width: 80,
    height: 80,
    transform: `translate(${left * (80/ 2)}px, ${top * (80 / 2)}px)`,
  };
}
