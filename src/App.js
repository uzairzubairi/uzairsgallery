import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './styles.css';

class App extends Component {
  constructor(){
	  super();
	  this.state={
		  tvclass: "pic1"
	  };
  }
  picClick = (num) => {
	  if (num == 1){this.setState({tvclass: "pic1"});}
	  else if (num == 2){this.setState({tvclass: "pic2"});}
	  else if (num == 3){this.setState({tvclass: "pic3"});}
	  else if (num == 4){this.setState({tvclass: "pic4"});}
	  else if (num == 5){this.setState({tvclass: "pic5"});}
	  else if (num == 6){this.setState({tvclass: "pic6"});}
	  else if (num == 7){this.setState({tvclass: "pic7"});}
	  else if (num == 8){this.setState({tvclass: "pic8"});}
	  else if (num == 9){this.setState({tvclass: "pic9"});}
	  else if (num == 10){this.setState({tvclass: "pic10"});}
	  else if (num == 11){this.setState({tvclass: "pic11"});}
	  else if (num == 12){this.setState({tvclass: "pic12"});}
	  else if (num == 13){this.setState({tvclass: "pic13"});}
	  else if (num == 14){this.setState({tvclass: "pic14"});}
	  else if (num == 15){this.setState({tvclass: "pic15"});}
	  else if (num == 16){this.setState({tvclass: "pic16"});}
	  else if (num == 17){this.setState({tvclass: "pic17"});}
	  else if (num == 18){this.setState({tvclass: "pic18"});}
	  else if (num == 19){this.setState({tvclass: "pic19"});}
	  else if (num == 20){this.setState({tvclass: "pic20"});}
	  else if (num == 21){this.setState({tvclass: "pic21"});}
	  else if (num == 22){this.setState({tvclass: "pic22"});}
	  else if (num == 23){this.setState({tvclass: "pic23"});}
  }
  render() {
    return (
		<div>
			<div id="titlebar">
				<h1>Welcome to Uzair's Personal Photo Gallery</h1>
				<h3>My life history in the form of pictures</h3>
			</div>
			<div id="viewscreen">
				<div id="sctv" className={this.state.tvclass}></div>
			</div>
			<div id="pics">
				<div className="pic" id="pic1" onClick={() => this.picClick(1)}></div>
				<div className="pic" id="pic2" onClick={() => this.picClick(2)}></div>
				<div className="pic" id="pic3" onClick={() => this.picClick(3)}></div>
				<div className="pic" id="pic4" onClick={() => this.picClick(4)}></div>
				<div className="pic" id="pic5" onClick={() => this.picClick(5)}></div>
				<div className="pic" id="pic6" onClick={() => this.picClick(6)}></div>
				<div className="pic" id="pic7" onClick={() => this.picClick(7)}></div>
				<div className="pic" id="pic8" onClick={() => this.picClick(8)}></div>
				<div className="pic" id="pic9" onClick={() => this.picClick(9)}></div>
				<div className="pic" id="pic10" onClick={() => this.picClick(10)}></div>
				<div className="pic" id="pic11" onClick={() => this.picClick(11)}></div>
				<div className="pic" id="pic12" onClick={() => this.picClick(12)}></div>
				<div className="pic" id="pic13" onClick={() => this.picClick(13)}></div>
				<div className="pic" id="pic14" onClick={() => this.picClick(14)}></div>
				<div className="pic" id="pic15" onClick={() => this.picClick(15)}></div>
				<div className="pic" id="pic16" onClick={() => this.picClick(16)}></div>
				<div className="pic" id="pic17" onClick={() => this.picClick(17)}></div>
				<div className="pic" id="pic18" onClick={() => this.picClick(18)}></div>
				<div className="pic" id="pic19" onClick={() => this.picClick(19)}></div>
				<div className="pic" id="pic20" onClick={() => this.picClick(20)}></div>
				<div className="pic" id="pic21" onClick={() => this.picClick(21)}></div>
				<div className="pic" id="pic22" onClick={() => this.picClick(22)}></div>
				<div className="pic" id="pic23" onClick={() => this.picClick(23)}></div>
				<div className="pic" id="pic24" onClick={() => this.picClick(24)}></div>
			</div>
		</div>
    );
  }
}

export default App;
