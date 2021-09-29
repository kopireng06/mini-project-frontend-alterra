import {Component,createRef} from 'react';
import hljs from 'highlight.js/lib/index';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/stackoverflow-dark.css'

hljs.registerLanguage('javascript', javascript);

class HighLight extends Component {
    constructor(props) {
        super(props);
        this.nodeRef = createRef();
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight = () => {
        if (this.nodeRef) {
            const nodes = this.nodeRef.current.querySelectorAll('pre');
            nodes.forEach((node) => {
                hljs.highlightBlock(node);
            });
        }
    }

    render() {
        const { content } = this.props;
        return (
            <div ref={this.nodeRef} dangerouslySetInnerHTML={{ __html: content }} />
        );
    }
}

export default HighLight;