class Search extends React.Component {
    
    render() {

        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
             
        const Search = React.createElement(div, geocoder.onAdd(map), 'test');

        console.log(this, 'este')

        return <p>Search</p>
    }

    
}

ReactDOM.render(Search, document.getElementById('geocoder'))