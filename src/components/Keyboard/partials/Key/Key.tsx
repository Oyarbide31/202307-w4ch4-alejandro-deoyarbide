import { KeyProps } from './types';

export function Key({ text, onClick, isBig = false }: KeyProps) {
  return (
    <button className={isBig ? 'key big' : 'key'} onClick={() => onClick(text)}>
      {text}
    </button>
  );
}
