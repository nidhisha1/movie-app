import React from 'react';

const SearchBox = (props) => {
	const [loading, setLoading] = React.useState(true);
	const [items, setItems] = React.useState([
	  { label: "Loading ...", value: "" }
	]);

  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://swapi.dev/api/people");
      const body = await response.json();
      setItems(body.results.map(({ name }) => ({ label: name, value: name })));
	  setLoading(false);
    }
    getCharacters();
  }, []);

	  return (
		<div className='col col-sm-4'>
			<select className='form-control'  defaultValue="" onChange={(event) => props.setSearchValue(event.target.value)} disabled={loading}>
				<option hidden value="">Choose Your Character</option>
				{items.map(item => (
					<option
					key={item.value}
					value={item.value}
					>
					{item.label}
					</option>
				))}
			</select>
		</div>
	  );
};

export default SearchBox;
