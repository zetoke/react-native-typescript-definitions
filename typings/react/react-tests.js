var props = {
    key: 42,
    ref: "myComponent42",
    hello: "world",
    foo: 42
};
var container;
//
// Top-Level API
// --------------------------------------------------------------------------
var ClassicComponent = React.createClass({
    getDefaultProps() {
        return {
            hello: undefined,
            world: "peace",
            foo: undefined
        };
    },
    getInitialState() {
        return {
            inputValue: this.context.someValue,
            seconds: this.props.foo
        };
    },
    reset() {
        this.replaceState(this.getInitialState());
    },
    render() {
        return React.DOM.div(null, React.DOM.input({
            ref: input => this._input = input,
            value: this.state.inputValue
        }));
    }
});
class ModernComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            inputValue: this.context.someValue,
            seconds: this.props.foo
        };
    }
    getChildContext() {
        return {
            someOtherValue: 'foo'
        };
    }
    reset() {
        this._myComponent.reset();
        this.setState({
            inputValue: this.context.someValue,
            seconds: this.props.foo
        });
    }
    render() {
        return React.DOM.div(null, React.DOM.input({
            ref: input => this._input = input,
            value: this.state.inputValue
        }));
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return shallowCompare(this, nextProps, nextState);
    }
}
ModernComponent.propTypes = {
    foo: React.PropTypes.number
};
ModernComponent.contextTypes = {
    someValue: React.PropTypes.string
};
ModernComponent.childContextTypes = {
    someOtherValue: React.PropTypes.string
};
var StatelessComponent = (props) => {
    return React.DOM.div(null, props.foo);
};
// Must explicitly type-annotate to add defaultProps/contextTypes
var StatelessComponent2 = (props) => React.DOM.div(null, props.foo);
StatelessComponent2.defaultProps = {
    foo: 42
};
// React.createFactory
var factory = React.createFactory(ModernComponent);
var factoryElement = factory(props);
var statelessFactory = React.createFactory(StatelessComponent);
var statelessElement = statelessFactory(props);
var classicFactory = React.createFactory(ClassicComponent);
var classicFactoryElement = classicFactory(props);
var domFactory = React.createFactory("foo");
var domFactoryElement = domFactory();
// React.createElement
var element = React.createElement(ModernComponent, props);
var statelessElement = React.createElement(StatelessComponent, props);
var classicElement = React.createElement(ClassicComponent, props);
var domElement = React.createElement("div");
// React.cloneElement
var clonedElement = React.cloneElement(element, props);
var clonedStatelessElement = React.cloneElement(statelessElement, props);
var clonedClassicElement = React.cloneElement(classicElement, props);
var clonedDOMElement = React.cloneElement(domElement);
// React.render
var component = ReactDOM.render(element, container);
var classicComponent = ReactDOM.render(classicElement, container);
var domComponent = ReactDOM.render(domElement, container);
// Other Top-Level API
var unmounted = ReactDOM.unmountComponentAtNode(container);
var str = ReactDOMServer.renderToString(element);
var markup = ReactDOMServer.renderToStaticMarkup(element);
var notValid = React.isValidElement(props); // false
var isValid = React.isValidElement(element); // true
var domNode = ReactDOM.findDOMNode(component);
domNode = ReactDOM.findDOMNode(domNode);
//
// React Elements
// --------------------------------------------------------------------------
var type = element.type;
var elementProps = element.props;
var key = element.key;
//
// React Components
// --------------------------------------------------------------------------
var displayName = ClassicComponent.displayName;
var defaultProps = ClassicComponent.getDefaultProps();
var propTypes = ClassicComponent.propTypes;
//
// Component API
// --------------------------------------------------------------------------
// modern
var componentState = component.state;
component.setState({ inputValue: "!!!" });
component.forceUpdate();
// classic
var isMounted = classicComponent.isMounted();
classicComponent.replaceState({ inputValue: "???", seconds: 60 });
var myComponent = component;
myComponent.reset();
class RefComponent extends React.Component {
    refMethod() {
    }
}
RefComponent.create = React.createFactory(RefComponent);
var componentRef;
RefComponent.create({ ref: "componentRef" });
// type of c should be inferred
RefComponent.create({ ref: c => componentRef = c });
componentRef.refMethod();
var domNodeRef;
React.DOM.div({ ref: "domRef" });
// type of node should be inferred
React.DOM.div({ ref: node => domNodeRef = node });
var inputNodeRef;
React.DOM.input({ ref: node => inputNodeRef = node });
//
// Attributes
// --------------------------------------------------------------------------
var children = ["Hello world", [null], React.DOM.span(null)];
var divStyle = {
    flex: "1 1 main-size",
    backgroundImage: "url('hello.png')"
};
var htmlAttr = {
    key: 36,
    ref: "htmlComponent",
    children: children,
    className: "test-attr",
    style: divStyle,
    onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
    },
    dangerouslySetInnerHTML: {
        __html: "<strong>STRONG</strong>"
    }
};
React.DOM.div(htmlAttr);
React.DOM.span(htmlAttr);
React.DOM.input(htmlAttr);
React.DOM.svg({ viewBox: "0 0 48 48" }, React.DOM.rect({
    x: 22,
    y: 10,
    width: 4,
    height: 28
}), React.DOM.rect({
    x: 10,
    y: 22,
    width: 28,
    height: 4
}));
//
// React.PropTypes
// --------------------------------------------------------------------------
var PropTypesSpecification = {
    propTypes: {
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,
        optionalNode: React.PropTypes.node,
        optionalElement: React.PropTypes.element,
        optionalMessage: React.PropTypes.instanceOf(Date),
        optionalEnum: React.PropTypes.oneOf(["News", "Photos"]),
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Date)
        ]),
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),
        requiredFunc: React.PropTypes.func.isRequired,
        requiredAny: React.PropTypes.any.isRequired,
        customProp: function (props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error("Validation failed!");
            }
            return null;
        }
    },
    render: () => {
        return null;
    }
};
//
// ContextTypes
// --------------------------------------------------------------------------
var ContextTypesSpecification = {
    contextTypes: {
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,
        optionalNode: React.PropTypes.node,
        optionalElement: React.PropTypes.element,
        optionalMessage: React.PropTypes.instanceOf(Date),
        optionalEnum: React.PropTypes.oneOf(["News", "Photos"]),
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Date)
        ]),
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),
        requiredFunc: React.PropTypes.func.isRequired,
        requiredAny: React.PropTypes.any.isRequired,
        customProp: function (props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error("Validation failed!");
            }
            return null;
        }
    },
    render: () => {
        return null;
    }
};
//
// React.Children
// --------------------------------------------------------------------------
var mappedChildrenArray = React.Children.map(children, (child) => { return 42; });
React.Children.forEach(children, (child) => { });
var nChildren = React.Children.count(children);
var onlyChild = React.Children.only([null, [[["Hallo"], true]], false]);
var childrenToArray = React.Children.toArray(children);
class Timer extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            secondsElapsed: 0
        };
    }
    tick() {
        this.setState((prevState, props) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }
    componentDidMount() {
        this._interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    render() {
        return React.DOM.div(null, "Seconds Elapsed: ", this.state.secondsElapsed);
    }
}
ReactDOM.render(React.createElement(Timer), container);
//
// createFragment addon
// --------------------------------------------------------------------------
createFragment({
    a: React.DOM.div(),
    b: ["a", false, React.createElement("span")]
});
//
// CSSTransitionGroup addon
// --------------------------------------------------------------------------
React.createFactory(CSSTransitionGroup)({
    component: React.createClass({
        render: () => null
    }),
    childFactory: (c) => c,
    transitionName: "transition",
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true
});
React.createFactory(CSSTransitionGroup)({
    transitionName: {
        enter: "enter",
        enterActive: "enterActive",
        leave: "leave",
        leaveActive: "leaveActive",
        appear: "appear",
        appearActive: "appearActive"
    }
});
//
// LinkedStateMixin addon
// --------------------------------------------------------------------------
React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {
        return {
            isChecked: false,
            message: "hello!"
        };
    },
    render: function () {
        return React.DOM.div(null, React.DOM.input({
            type: "checkbox",
            checkedLink: this.linkState("isChecked")
        }), React.DOM.input({
            type: "text",
            valueLink: this.linkState("message")
        }));
    }
});
//
// Perf addon
// --------------------------------------------------------------------------
Perf.start();
Perf.stop();
var measurements = Perf.getLastMeasurements();
Perf.printInclusive(measurements);
Perf.printExclusive(measurements);
Perf.printWasted(measurements);
Perf.printDOM(measurements);
//
// PureRenderMixin addon
// --------------------------------------------------------------------------
React.createClass({
    mixins: [PureRenderMixin],
    render: function () { return React.DOM.div(null); }
});
//
// TestUtils addon
// --------------------------------------------------------------------------
var node;
TestUtils.Simulate.click(node);
TestUtils.Simulate.change(node);
TestUtils.Simulate.keyDown(node, { key: "Enter" });
var renderer = TestUtils.createRenderer();
renderer.render(React.createElement(Timer));
var output = renderer.getRenderOutput();
//
// TransitionGroup addon
// --------------------------------------------------------------------------
React.createFactory(TransitionGroup)({ component: "div" });
//
// update addon
// --------------------------------------------------------------------------
{
    // These are copied from https://facebook.github.io/react/docs/update.html
    let initialArray = [1, 2, 3];
    let newArray = update(initialArray, { $push: [4] }); // => [1, 2, 3, 4]
    let collection = [1, 2, { a: [12, 17, 15] }];
    let newCollection = update(collection, { 2: { a: { $splice: [[1, 1, 13, 14]] } } });
    // => [1, 2, {a: [12, 13, 14, 15]}]
    let obj = { a: 5, b: 3 };
    let newObj = update(obj, { b: { $apply: function (x) { return x * 2; } } });
    // => {a: 5, b: 6}
    let newObj2 = update(obj, { b: { $set: obj.b * 2 } });
    let objShallow = { a: 5, b: 3 };
    let newObjShallow = update(obj, { $merge: { b: 6, c: 7 } }); // => {a: 5, b: 6, c: 7}
}
//# sourceMappingURL=react-tests.js.map