import { connect } from "react-redux";
import If from './../operator/If';


const mapStateToProps = state => ({ tab: state.tab });


function TabContent(props) {
    const selected = props.tab.selected === props.id;
    const visible = props.tab.visible[props.id];
    return (
        <If test={visible}>
            <div id={props.id} className={`tab-pane fade ${selected ? "show active" : ""}`}>
                {props.children}
            </div>
        </If>
    )
}

export default connect(mapStateToProps)(TabContent);