import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
      minuman: "Zam-zam",
    };
  }

  gantiMakanan = (makanan_baru) => {
    this.setState({ makanan: makanan_baru });
  };

  render() {
    return (
      <>
        <div>
          <h2>{this.state.makanan}</h2>
          <button onClick={() => this.gantiMakanan("soto")}>
            ganti makanan
          </button>
          <Operan makanan={this.state.makanan} />
          <h2>{this.state.minuman}</h2>
          <button onClick={() => this.setState({ minuman: "amer" })}>
            ganti minuman
          </button>
        </div>
      </>
    );
  }
}
