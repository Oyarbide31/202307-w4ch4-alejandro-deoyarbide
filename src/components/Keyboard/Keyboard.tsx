import { Key } from './partials/Key/Key';
import { OnClickFunc } from './partials/Key/types';

export function Keyboard() {
  const handleOnClick: OnClickFunc = (value: string) => {
    console.log(value);
  };
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <Key text="1" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="2" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="3" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="4" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="5" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="6" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="7" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="8" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="9" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="0" onClick={handleOnClick} />
        </li>
        <li>
          <Key text="delate" isBig onClick={handleOnClick} />
        </li>
      </ol>
    </div>
  );
}
