import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { selectTab } from './tabActions';
import If from './../operator/If';

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);

function TabHeader(props) {
    const selected = props.tab.selected === props.target;
    const visible = props.tab.visible[props.target];
    return (
        <If test={visible}>
            <li className="TabHeader nav-item">
                <button onClick={() => props.selectTab(props.target)} data-toggle='tab' data-target={props.target}
                    className={`nav-link  text-dark ${selected ? "active" : " "}`}>
                    <span>{props.icon}</span> <span>{props.label}</span>
                </button>
            </li >
        </If>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);