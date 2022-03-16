function foo(): string {
  return "bar";
}

function changeBackgroundColor(color: string): void {
  document.body.style.backgroundColor = color;
  return;
}

const bar = (): string => {
  return "foo";
};
