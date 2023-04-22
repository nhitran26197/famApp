

export function getNodeStyle({ left, top }){
  return {
    width: 200,
    height: 200,
    transform: `translate(${left * (200/ 2)}px, ${top * (200 / 2)}px)`,
  };
}
