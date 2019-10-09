import React from "react";

const Search = (props) => {
	return (
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Username"
				id="userSearch"
				onChange={props.onChangeValue}
			/>
			<div className="input-group-append">
				<input
					type="reset"
					value="Reset"
					onClick={props.resetValue}
					className="btn btn-outline-secondary"
				/>
				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={props.changeValue}>
						Search
				</button>
			</div>
		</div>
	)
}

export default Search;