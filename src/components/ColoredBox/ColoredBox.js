import { useContext } from 'react';
import { ThemeContext } from '../../App';

const ColoredBox = () => {

    const darkTheme = useContext(ThemeContext);

    const themeStyle = {
        padding: "2em",
        margin: "2em",
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    };

    return (
        <>
            <div style={themeStyle}>ColoredBox</div>
        </>
    );
};

export default ColoredBox;