import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async term => {

        const ACCESS_KEY = 'd222eacfac9347276dad716c137bf255c9ad8da78e0aa6c65ef55521a65de229';

        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
                headers: {
                    Authorization:
                        `Client-ID ${ACCESS_KEY}`
                }
            });
            const data = await response.json();

            this.setState({ images: data.results });

        }
        catch (err) {
            console.log(err);
        }

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default App;
