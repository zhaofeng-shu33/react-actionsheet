import _redboxReact from 'redbox-react';
import _reactTransformCatchErrors from 'react-transform-catch-errors';
import _react from 'react';
import _reactTransformHmr from 'react-transform-hmr';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Actionsheet: {
    displayName: 'Actionsheet'
  }
};

var _reactTransformHmr2 = _reactTransformHmr({
  filename: 'src/index.js',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactTransformCatchErrors2 = _reactTransformCatchErrors({
  filename: 'src/index.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

import './index.css';

import { Component } from 'react';

function noop() {}

var Actionsheet = _wrapComponent('Actionsheet')((_temp = _class = function (_Component) {
  _inherits(Actionsheet, _Component);

  function Actionsheet() {
    _classCallCheck(this, Actionsheet);

    return _possibleConstructorReturn(this, (Actionsheet.__proto__ || Object.getPrototypeOf(Actionsheet)).apply(this, arguments));
  }

  _createClass(Actionsheet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onRequestClose = _props.onRequestClose,
          onCancel = _props.onCancel,
          cancelText = _props.cancelText,
          menus = _props.menus,
          show = _props.show;


      return React.createElement(
        'div',
        { className: 'react-actionsheet' + (show ? ' react-actionsheet-show' : ''),
          onClick: onRequestClose },
        React.createElement('div', { className: 'react-actionsheet-mask' }),
        React.createElement(
          'div',
          { className: 'react-actionsheet-wrap' },
          React.createElement(
            'div',
            { className: 'react-actionsheet-menu' },
            menus.map(function (menu, i) {
              var content = menu.content,
                  _menu$onClick = menu.onClick,
                  onClick = _menu$onClick === undefined ? noop : _menu$onClick;

              return React.createElement(
                'div',
                { key: i, className: 'react-actionsheet-menu-item', onClick: onClick },
                content
              );
            })
          ),
          React.createElement(
            'div',
            { className: 'react-actionsheet-action' },
            React.createElement(
              'div',
              { className: 'react-actionsheet-action-item', onClick: onCancel },
              cancelText
            )
          )
        )
      );
    }
  }]);

  return Actionsheet;
}(Component), _class.defaultProps = {
  onRequestClose: noop,
  onCancel: noop,
  cancelText: '取消',
  show: false,
  menus: []
}, _temp));

// compiled bundle ignores "export default" values and exports empty object!!
// export default Actionsheet


export default Actionsheet;
