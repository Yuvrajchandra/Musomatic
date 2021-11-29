import React from "react";
import Select from "react-select";
import "./multiDropdown.css";

export default function MultiDropdown(props) {
	const style = {
		control: (base, state) => ({
			...base,
			minWidth: "175px",
			minHeight: "8px",
			fontFamily: "Poppins",
			fontSize: "0.7rem",
			fontWeight: "300",
			background: "rgba(255,255,255,0)",
			border: "none",
			borderColor: state.isFocused ? null : null,
			boxShadow: state.isFocused ? null : null,
			cursor: "pointer !important",
			color: "#fff",
		}),
		multiValue: (style) => {
			return {
				...style,
				borderRadius: "18px",
				backgroundColor: "#323232",
				color: "#fff",
				border: "1px solid #7a7a7a",
				padding: "1px 5px",
				marginBottom: "3px",
			};
		},
		multiValueRemove: (base) => ({
			...base,
			"&:hover": {
				backgroundColor: "rgba(255,255,255,0)",
			},
		}),
		multiValueLabel: (base) => ({
			...base,
			color: "white",
			maxWidth: "60px",
		}),
		input: (base) => ({
			...base,
			fontFamily: "Poppins",
			color: "#6cc027",
			fontWeight: "400",
		}),
		placeholder: (base) => {
			return {
				...base,
				color: "#6cc027",
			};
		},
		option: (base) => ({
			...base,
			fontFamily: "Poppins",
			cursor: "pointer !important",
			fontSize: "0.95em",
			fontWeight: "300",
			backgroundColor: "rgba(35, 66, 39, 0.85)",
			padding: "6px 15px",
			"&:hover": {
				backgroundColor: "#54a611",
			},
		}),
		dropdownIndicator: (base) => ({
			...base,
			color: "#6cc027",
			"&:hover": {
				color: "#6cc027",
				cursor: "pointer !important",
			},
		}),
		clearIndicator: (base) => ({
			...base,
			color: "#6cc027",
			"&:hover": {
				color: "#6cc027",
				cursor: "pointer !important",
			},
		}),
		menu: (base) => ({
			...base,
			marginTop: "27px",
			fontFamily: "Poppins",
			backgroundColor: "rgba(35, 66, 39, 0.85)",
			backdropFilter: "blur(5px)",
			borderRadius: "6px !important",
			"&:hover": {
				borderRadius: "6px",
				cursor: "pointer !important",
			},
		}),
		menuList: (base) => ({
			...base,
			fontSize: "0.95rem",
			color: "#fff",
			borderRadius: "6px !important",
			"&:hover": {
				cursor: "pointer !important",
			},
		}),
	};

	return (
		<div className="library-multi-dropdown">
			<label className="mt-2">Instruments Used: </label>
			<Select
				maxMenuHeight={125}
				placeholder="Select here"
				isMulti
				styles={style}
				closeMenuOnSelect={false}
				options={props.options}
			/>
		</div>
	);
}
