import React from 'react';

const Search = (props) => {
	return (
		<div className="ui form">
			{/* <h3>Animal type</h3> */}
			<form onSubmit={(event) => props.handleFilter(event)}>
				<div className="field">
					<select
						name="filter"
						id="filter"
						// onChange={(event) => this.props.onChangeType(event)}
					>
						<option value="ability">Abilities</option>
						<option value="type">Types</option>
					</select>
					<input type="text" name="filterText"></input>
				</div>

				<div className="field">
					<button
						// onClick={this.props.onFindPetsClick}
						className="ui secondary button"
					>
						Filter
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
