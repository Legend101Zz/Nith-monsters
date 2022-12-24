import { Component } from "react";

import { useState } from "react";

import CardList from "./components/card-box/card-list.component.jsx";
import "./App.css";
import SearchBox from "./components/search-box/searchBox.component";

// const App = () => {
//   const [searchField, setSeacrchField] = useState("");

//   console.log(searchField);

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value;

//     setSeacrchField(searchFieldString);
//     // this.setState(() => {
//     //   return { searchField:  event.target.value};
//     // });
//   };

//   const escapeRegex = function (text) {
//     return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
//   };

//   const regex = new RegExp(escapeRegex(searchField), "gi");

//   const filteredMonster = this.state.monsters.filter((monster) => {
//     return regex.test(monster.name);
//     // return monster.name.includes(regex);
//   });

//   const size = filteredMonster.length;

//   return (
//     <div className="App">
//       <SearchBox onChangeHandler={onSearchChange} />
//       {/* <CardList monsters={filteredMonster} size={size} /> */}
//     </div>
//   );
// };

class app extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // { name: "Mehul" },
        // { name: "Hardik" },
        // { name: "Mrigesh" },
        // { name: "Shantun" },
        // { name: "Armaan" },
        // { name: "Dharuva" },
        // { name: "Maanas" },
        // { name: "Komal" },
        // { name: "Palak" },
        // { name: "Muskan" },
        // { name: "Yachana" },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://nith-portal22.herokuapp.com/api/v1/student")
      .then((response) => {
        return response.json();
      })
      // .then((users) => {this.setState(()=>{
      //   return {monsters:users};
      // })
      // )
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      })
      .catch((err) => console.log(err));
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value };
    });
  };

  render() {
    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;
    const escapeRegex = function (text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };

    const regex = new RegExp(escapeRegex(searchField), "gi");

    const filteredMonster = this.state.monsters.filter((monster) => {
      return regex.test(monster.name);
      // return monster.name.includes(regex);
    });

    const size = filteredMonster.length;

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonster} size={size} />
      </div>
    );
  }
}

export default app;
