import React, { Component } from "react";
import './Search.css';


class SearchSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.options,
    };
  }

  searchList(event) {
    const results = this.props.filterMethod(
      this.props.options,
      event.target.value
    );
    this.setState({ results });
  }

  render() {
    return this.props.render({
      results: this.state.results,
      searchList: (event) => this.searchList(event),
    });
  }
}

const options = [
  {
    firstname: "Home",
    url: "https://usamaalikhan654.github.io/Habibullah-WB/#/",
  },
  {
    firstname: "About Us",
    url: "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/about",
  },
  {
    firstname: "Product",
    url: "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/Product",
  },
  {
    firstname: "Machine",
    url: "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/Machine",
  },
  {
    firstname: "Contact Us",
    url: "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/Contact",
  },
];

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
    };
    this.box = React.createRef();
    this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'Search');
  }

  filterMethod(options, query) {
    return options.filter((option) =>
      option.firstname.toLowerCase().includes(query.toLowerCase())
    );
  }

  showDropdown() {
    this.setState({ dropdownVisible: true });
  }

  hideDropdown() {
    this.setState({ dropdownVisible: false });
  }

  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  componentDidMount() {
    // Adding a click event listener
    document.addEventListener("click", this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    if (this.box.current !== null) {
      if (this.box && !this.box.current.contains(event.target)) {
        this.setState({ isActive: false });
      }
    }
  };

  keyUpHandler(refName, e) {
      console.log(refName);
      this.setState({ isActive: true });
  }

  render() {
    const isActive = this.state.isActive;
    return (
      <SearchSelect
        options={options}
        filterMethod={this.filterMethod}
        render={({ results, searchList }) => (
          <div className="autocomplete" ref={this.box}>
            {this.props.children}
            <input
              type="text"
              placeholder="Type to search list"
              onChange={searchList}
              className="input"
              onFocus={() => this.showDropdown()}
              // onBlur={() => this.hideDropdown()}
              onClick={this.handleToggle}
              onKeyUp={this.handleLoginKeyUp} ref="Search"
            />
            {this.state.dropdownVisible && (
              <div
                id="appelement"
                className={`hideshow ${isActive ? "app" : ""}`}
              >
                <ul className="autocomplete-search-results-list">
                  {results.map((results, key) => {
                    return (
                      <div className="keyword" key={key}>
                        <a href={results.url}>{results.firstname}</a>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      />
    );
  }
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="example">
          <Autocomplete />
        </div>
      </div>
    );
  }
}

export default SearchPage;
