import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters, size } = this.props;
    return (
      <div>
        <h5> No. of results : {size}</h5>

        <div className="card-list">
          {monsters.map((monsters) => {
            return (
              <div className="card-container" key={monsters._id}>
                <img
                  alt={`monster ${monsters.name}`}
                  src={`https://robohash.org/${Math.floor(
                    Math.random() * 1928 + 1
                  )}?set=set4&size=180x180`}
                />
                <h2>{monsters.name}</h2>
                <p>{monsters.roll}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
