import classNames from 'classnames';
import SimpleHeader from './simpleHeader';

class SimpleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: true,
    };
  }

  componentWillReceiveProps() {
    if (!this.props.fadeOut) {
      this.setState({ addClass: true });
    }
  }

  render() {
    const { content, body, description, children } = this.props;

    return (
      <div className={classNames('simple-card animated', { fadeIn: this.state.addClass, fadeOut: this.props.fadeOut })} >
        { children }
        <style>
          {`
            .simple-card {
              background-color: white;
              box-shadow: 0 2px 5px 0 rgba(51,51,79,0.07);
              border-radius: 6px;
              overflow: auto;
              animation-duration: .15s;
              margin-bottom: 2em;
            }
          `}
        </style>
      </div>
    );
  }
}

export default SimpleCard;