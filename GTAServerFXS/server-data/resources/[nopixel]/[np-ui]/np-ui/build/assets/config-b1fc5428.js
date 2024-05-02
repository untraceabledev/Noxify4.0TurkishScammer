import { j as _0x4e6336, R as _0x22158a } from "./vendor-6c45b22f.js";
import "./commonjsHelpers-c5dac66b.js";
const main = "";
const CalculatorDisplay = ({
  currentOperation: _0x56bc24,
  result: _0x15eaee
}) => {
  const _0x645f63 = () => {
    return _0x56bc24.split(" ").map((_0x3b1d66, _0x2c53a2) => {
      if (isNaN(parseFloat(_0x3b1d66))) {
        return _0x4e6336.jsx("span", {
          className: "operation",
          children: _0x3b1d66
        }, _0x2c53a2);
      } else {
        return _0x4e6336.jsx("span", {
          className: "number",
          children: _0x3b1d66
        }, _0x2c53a2);
      }
    });
  };
  return _0x4e6336.jsxs("div", {
    className: "calculator-display",
    children: [_0x4e6336.jsx("div", {
      className: "operation-display",
      children: _0x645f63()
    }), _0x4e6336.jsx("div", {
      className: "current-input",
      children: _0x15eaee && _0x4e6336.jsx("p", {
        children: _0x15eaee
      })
    })]
  });
};
const CalculatorOperations = {
  "/": (_0x5b99d9, _0x56329c) => _0x5b99d9 / _0x56329c,
  "*": (_0x215bda, _0x3437af) => _0x215bda * _0x3437af,
  "+": (_0x26bb48, _0x40b434) => _0x26bb48 + _0x40b434,
  "-": (_0x211629, _0x49149e) => _0x211629 - _0x49149e
};
class Calculator extends _0x22158a.Component {
  state = {
    currentOperation: "",
    result: "",
    lastOperationCompleted: false
  };
  inputDigit = _0x49eaad => {
    if (this.state.lastOperationCompleted) {
      this.setState({
        currentOperation: _0x49eaad,
        result: "",
        lastOperationCompleted: false
      });
    } else {
      this.setState(_0x223e3f => ({
        currentOperation: _0x223e3f.currentOperation + _0x49eaad,
        result: ""
      }));
    }
  };
  toggleSign = () => {
    const {
      currentOperation: _0x25cc17,
      lastOperationCompleted: _0x2b7e04,
      result: _0x32cdd3
    } = this.state;
    const _0x4062f7 = _0x2b7e04 ? parseFloat(_0x32cdd3) : parseFloat(_0x25cc17);
    const _0x511cd7 = _0x4062f7 ? (-_0x4062f7).toString() : "0";
    if (_0x2b7e04) {
      this.setState({
        result: _0x511cd7
      });
    } else {
      this.setState({
        currentOperation: _0x511cd7
      });
    }
  };
  inputPercent = () => {
    const {
      currentOperation: _0x45a17a,
      lastOperationCompleted: _0x4a7ab6,
      result: _0x4b391f
    } = this.state;
    const _0x86decc = _0x4a7ab6 ? parseFloat(_0x4b391f) : parseFloat(_0x45a17a);
    const _0x2e60aa = _0x86decc ? (_0x86decc / 100).toString() : "0";
    if (_0x4a7ab6) {
      this.setState({
        result: _0x2e60aa
      });
    } else {
      this.setState({
        currentOperation: _0x2e60aa
      });
    }
  };
  chooseOperation = _0x475682 => {
    if (this.state.lastOperationCompleted) {
      this.setState({
        currentOperation: this.state.result + " " + _0x475682 + " ",
        result: "",
        lastOperationCompleted: false
      });
    } else {
      this.setState(_0x39eae0 => ({
        currentOperation: _0x39eae0.currentOperation + " " + _0x475682 + " ",
        result: ""
      }));
    }
  };
  removeLastEntry = () => {
    this.setState(_0x557b1e => {
      const _0x90042f = _0x557b1e.currentOperation.trimEnd();
      const _0x5a4965 = _0x90042f.lastIndexOf(" ");
      const _0x37f0bc = _0x5a4965 !== -1 ? _0x90042f.slice(0, _0x5a4965) : "";
      return {
        currentOperation: _0x37f0bc,
        lastOperationCompleted: _0x37f0bc.length === 0
      };
    });
  };
  handleKeyPress = _0x2a638d => {
    const {
      key: _0x48ed55
    } = _0x2a638d;
    const _0x414e55 = ["/", "*", "+", "-"];
    if (_0x48ed55 >= "0" && _0x48ed55 <= "9" || _0x48ed55 === ".") {
      this.inputDigit(_0x48ed55);
    } else if (_0x414e55.includes(_0x48ed55)) {
      this.chooseOperation(_0x48ed55);
    } else if (_0x48ed55 === "Enter" || _0x48ed55 === "=") {
      _0x2a638d.preventDefault();
      this.calculate();
    } else if (_0x48ed55 === "Backspace") {
      this.removeLastEntry();
    }
  };
  calculate = () => {
    const {
      currentOperation: _0x590dec
    } = this.state;
    try {
      const _0x4270cc = _0x590dec.split(" ");
      let _0x960a99 = parseFloat(_0x4270cc[0]);
      for (let _0x2a1bf3 = 1; _0x2a1bf3 < _0x4270cc.length; _0x2a1bf3 += 2) {
        const _0x27cde0 = _0x4270cc[_0x2a1bf3];
        const _0x140da4 = parseFloat(_0x4270cc[_0x2a1bf3 + 1]);
        if (_0x27cde0 in CalculatorOperations) {
          _0x960a99 = CalculatorOperations[_0x27cde0](_0x960a99, _0x140da4);
        }
      }
      const _0x563d23 = parseFloat(_0x960a99.toFixed(4));
      this.setState({
        currentOperation: "",
        result: _0x563d23.toString(),
        lastOperationCompleted: true
      });
    } catch (_0x5a687a) {
      this.setState({
        result: "Error",
        lastOperationCompleted: false
      });
    }
  };
  clearDisplay = () => {
    this.setState({
      currentOperation: "",
      result: "",
      lastOperationCompleted: false
    });
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  render() {
    const {
      currentOperation: _0x3a5066,
      result: _0x3f6558
    } = this.state;
    const _0x228666 = _0x3a5066 ? "C" : "AC";
    return _0x4e6336.jsxs("div", {
      className: "calculator",
      children: [_0x4e6336.jsx(CalculatorDisplay, {
        currentOperation: _0x3a5066,
        result: _0x3f6558
      }), _0x4e6336.jsxs("div", {
        className: "calculator-keypad",
        children: [_0x4e6336.jsxs("div", {
          className: "calculator-row",
          children: [_0x4e6336.jsx("button", {
            className: "calculator-key key-clear",
            onClick: this.clearDisplay,
            children: _0x228666
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-sign",
            onClick: this.toggleSign,
            children: "±"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-percent",
            onClick: this.inputPercent,
            children: "%"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-divide",
            onClick: () => this.chooseOperation("/"),
            children: "÷"
          })]
        }), _0x4e6336.jsxs("div", {
          className: "calculator-row",
          children: [_0x4e6336.jsx("button", {
            className: "calculator-key key-7",
            onClick: () => this.inputDigit("7"),
            children: "7"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-8",
            onClick: () => this.inputDigit("8"),
            children: "8"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-9",
            onClick: () => this.inputDigit("9"),
            children: "9"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-multiply",
            onClick: () => this.chooseOperation("*"),
            children: "*"
          })]
        }), _0x4e6336.jsxs("div", {
          className: "calculator-row",
          children: [_0x4e6336.jsx("button", {
            className: "calculator-key key-4",
            onClick: () => this.inputDigit("4"),
            children: "4"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-5",
            onClick: () => this.inputDigit("5"),
            children: "5"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-6",
            onClick: () => this.inputDigit("6"),
            children: "6"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-subtract",
            onClick: () => this.chooseOperation("-"),
            children: "-"
          })]
        }), _0x4e6336.jsxs("div", {
          className: "calculator-row",
          children: [_0x4e6336.jsx("button", {
            className: "calculator-key key-1",
            onClick: () => this.inputDigit("1"),
            children: "1"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-2",
            onClick: () => this.inputDigit("2"),
            children: "2"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-3",
            onClick: () => this.inputDigit("3"),
            children: "3"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-add",
            onClick: () => this.chooseOperation("+"),
            children: "+"
          })]
        }), _0x4e6336.jsxs("div", {
          className: "calculator-row",
          children: [_0x4e6336.jsx("button", {
            className: "calculator-key key-0 key-col-2",
            onClick: () => this.inputDigit("0"),
            children: "0"
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-dot",
            onClick: () => this.inputDigit("."),
            children: "."
          }), _0x4e6336.jsx("button", {
            className: "calculator-key key-equals",
            onClick: this.calculate,
            children: "="
          })]
        })]
      })]
    });
  }
}
const Container = () => {
  return _0x4e6336.jsx("div", {
    className: "calculator-container app app-calculator",
    children: _0x4e6336.jsx(Calculator, {})
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/calculator.svg";
const config = _0x2f0c07 => {
  return {
    ..._0x2f0c07,
    iconPng: myIcon,
    label: "Calculator",
    position: 151,
    name: "calculator",
    hidden: () => false,
    render: _0x54ebb0 => _0x4e6336.jsx(Container, {
      ..._0x54ebb0
    })
  };
};
export { config as default };