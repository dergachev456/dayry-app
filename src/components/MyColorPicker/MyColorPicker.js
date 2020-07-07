import React from 'react';
import { PhotoshopPicker } from 'react-color';
import './MyColorPicker.scss'
import { connect } from 'react-redux';
import { setSelectedColor, showColorPicker, hideColorPicker } from '../../store/actions/mainActionCreator';
import Portal from '../Portal';
class MyColorPicker extends React.Component {
    state = {
        background: '#000',
        // isVisible:true
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };



    accept = () => {
        const { setSelectedColor, hideColorPicker } = this.props;
        const { background } = this.state;
        setSelectedColor(background);
        hideColorPicker();
    }

    render() {
        // const {isVisible} = this.state;
        const { hideColorPicker, main } = this.props;

        return (
            <Portal>
                <div className={main.isColorPicker ? "my-color-picker visible" : "my-color-picker hidden"}>
                    <PhotoshopPicker
                        color={this.state.background}
                        onChangeComplete={this.handleChangeComplete}
                        onAccept={this.accept}
                        onCancel={hideColorPicker}
                    />
                </div>
            </Portal>
        );
    }
}

export default connect((state) => ({
    main: state.main
}), {
    setSelectedColor, showColorPicker, hideColorPicker
})(MyColorPicker);