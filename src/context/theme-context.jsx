import { createContext, useContext, useReducer } from "react";
import DarkModeReducer from "./themeReducer";

const INITIAL_STATE = {
	darkMode: false,
};

const ThemeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	return (
		<ThemeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

// eslint-disable-next-line react-refresh/only-export-components
export default useTheme;
