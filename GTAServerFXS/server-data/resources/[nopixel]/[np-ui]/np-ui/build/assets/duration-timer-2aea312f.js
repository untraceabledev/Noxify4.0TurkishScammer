import { R as _0x175363, j as _0x2c24ab, a0 as _0x3e49da } from "./vendor-6c45b22f.js";
const text = "_text_1vj6p_1";
const styles = {
  text: text
};
const DurationTimer = ({
  countdown = false,
  extra = "",
  startTime = 0,
  withHour = false,
  prefix = undefined
}) => {
  const [_0x3671b9, _0x274f80] = _0x175363.useState(startTime);
  _0x175363.useEffect(() => {
    const _0x1c68bd = setInterval(() => {
      _0x274f80(_0x2e7426 => countdown ? _0x2e7426 - 1 : _0x2e7426 + 1);
    }, 1000);
    return () => clearInterval(_0x1c68bd);
  }, [countdown]);
  return _0x2c24ab.jsxs("p", {
    className: styles.text,
    children: [prefix, _0x3e49da.utc(_0x3671b9 * 1000).format((withHour ? "HH:" : "") + "mm:ss"), !extra ? null : " - " + extra]
  });
};
export { DurationTimer as D };